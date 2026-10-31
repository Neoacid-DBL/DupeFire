// build-guides.js — Genera las guías nuevas (es/en/pt) y los índices de guías.
// Contenido en guides-src/*.js. Uso: node build-guides.js && node build-static.js
// Las dos guías antiguas (almacenamiento lleno, WhatsApp) siguen siendo HTML a mano;
// aquí solo se les actualiza el bloque "Sigue leyendo".
'use strict';
const fs = require('fs');
const path = require('path');
const R = require('./guides-src/registry.js');

const ROOT = __dirname;
const BASE = R.BASE;
const PLAY = 'https://play.google.com/store/apps/details?id=com.danib.duplicados';
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const jsonLd = o => JSON.stringify(o, null, 2);

const playUrl = (campaign, medium = 'guide') =>
  `${PLAY}&amp;referrer=utm_source%3Dweb%26utm_medium%3D${medium}%26utm_campaign%3D${encodeURIComponent(campaign)}`;

const FLAGS = { es: '🇪🇸 ES', en: '🇬🇧 EN', pt: '🇧🇷 PT' };
// Icono de marca (assets/dupefire_icon_app.svg); la ruta depende del idioma
const markFor = (lang, size) => `<span class="mark"><img src="${assetPrefix(lang)}dupefire_icon_app.svg" width="${size}" height="${size}" alt="" /></span>`;
const IC_WARN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>';
const IC_SAFE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>';
// Sin emoji en la interfaz (compromiso de marca de la app): sustituye avisos e iconos heredados
function brandify(html, lang) {
  if (!html.includes('name="color-scheme"')) html = html.replace('<meta name="theme-color"', '<meta name="color-scheme" content="dark light" />\n<meta name="theme-color"');
  return html
    .replace(/<span class="ic" aria-hidden="true">⚠️<\/span>/g, `<span class="ic" aria-hidden="true">${IC_WARN}</span>`)
    .replace(/<span class="ic" aria-hidden="true">🔒<\/span>/g, `<span class="ic" aria-hidden="true">${IC_SAFE}</span>`)
    .replace(/<span class="mark">\s*<svg viewBox="0 0 64 80"[\s\S]*?<\/svg>\s*<\/span>/g, (m) => markFor(lang, m.includes('width="18"') ? 36 : 28));
}
const PLAY_ICON = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M3.5 2.2c-.3.2-.5.6-.5 1v17.6c0 .4.2.7.5 1l10.5-10.4L3.5 2.2zm12.1 8.3 2.7-1.5c1-.6 1-1.5 0-2.1L5.9 1.6 13.4 9l2.2 2.5zM5.9 22.4l12.4-7.3c.9-.5.9-1.4 0-1.9l-2.7-1.5-2.2 2.6-7.5 8.1z"/>
      </svg>`;

// ── Rutas ────────────────────────────────────────────────────────────────────
const dirOf = lang => R.DIRS[lang];                       // 'guias' | 'en/guides' | 'pt/guias'
const urlOf = (lang, slug) => `${BASE}/${dirOf(lang)}/${slug ? slug + '.html' : ''}`;
const assetPrefix = lang => (lang === 'es' ? '../assets/' : '../../assets/');

function langAlternates(slugs, isIndex) {
  const langs = Object.keys(slugs);
  let out = langs.map(l => `<link rel="alternate" hreflang="${l}" href="${urlOf(l, isIndex ? '' : slugs[l])}" />`);
  const xd = slugs.en ? 'en' : langs[0];
  out.push(`<link rel="alternate" hreflang="x-default" href="${urlOf(xd, isIndex ? '' : slugs[xd])}" />`);
  return out.join('\n');
}
function langSwitch(lang, slugs, isIndex) {
  return Object.keys(slugs).filter(l => l !== lang).map(l => {
    const rel = l === 'es' ? '../../guias/' : l === 'en' ? (lang === 'es' ? '../en/guides/' : '../../en/guides/') : (lang === 'es' ? '../pt/guias/' : '../../pt/guias/');
    const href = lang === 'es' && l !== 'es' ? rel : rel;
    return `<a class="lang-link" href="${href}${isIndex ? '' : slugs[l] + '.html'}" hreflang="${l}" lang="${l}">${FLAGS[l]}</a>`;
  }).join('\n    ');
}

// ── Sustitución de marcadores en el HTML de contenido ────────────────────────
// {{play}} → URL de Play con UTM de esta guía; {{g:id}} → enlace relativo a otra guía
function resolve(html, lang, campaign) {
  return html
    .replace(/\{\{play\}\}/g, playUrl(campaign))
    .replace(/\{\{g:([a-z0-9-]+)\}\}/g, (m, id) => {
      const g = R.byId[id];
      if (!g) throw new Error(`Enlace a guía inexistente: ${id}`);
      if (g.slugs[lang]) return `${g.slugs[lang]}.html`;
      // Sin versión en este idioma (guías antiguas aún sin traducir): enlaza a la inglesa
      const up = lang === 'es' ? '../' : '../../';
      return `${up}${dirOf('en')}/${g.slugs.en}.html" hreflang="en`;
    });
}

// ── Plantilla de guía ─────────────────────────────────────────────────────────
function renderGuide(g, lang) {
  const ui = R.UI[lang];
  const c = g.content[lang];
  const slug = g.slugs[lang];
  const campaign = slug;
  const url = urlOf(lang, slug);
  const fix = h => resolve(h, lang, campaign);

  const toc = c.sections.map(s => `<li><a href="#${s.id}">${esc(s.toc || s.h)}</a></li>`).join('\n      ')
    + `\n      <li><a href="#faq">${esc(ui.faq)}</a></li>`;
  const sections = c.sections.map(s => `  <h2 id="${s.id}">${s.h}</h2>\n${fix(s.html)}`).join('\n\n');
  const faq = c.faq.map(([q, a]) => `    <details>\n      <summary>${q}</summary>\n      <p>${fix(a)}</p>\n    </details>`).join('\n');
  const answer = Array.isArray(c.answer)
    ? `<ol>\n${c.answer.map(li => `      <li>${fix(li)}</li>`).join('\n')}\n    </ol>`
    : `<p>${fix(c.answer)}</p>`;
  const related = (g.related || []).filter(id => R.byId[id] && R.byId[id].slugs[lang])
    .map(id => `      <li><a href="${R.byId[id].slugs[lang]}.html">${R.byId[id].titles[lang]}</a></li>`).join('\n');

  const ld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article', headline: c.headline || stripTags(c.h1), description: c.desc, inLanguage: lang,
        datePublished: R.DATE, dateModified: R.DATE,
        image: `${BASE}/assets/og-preview-${lang === 'es' || lang === 'pt' ? lang : 'en'}.png`,
        author: { '@type': 'Person', name: 'Daniel Barea' },
        publisher: { '@type': 'Organization', name: 'DupeFire', logo: { '@type': 'ImageObject', url: `${BASE}/assets/dupefire_icon_app.svg` } },
        mainEntityOfPage: url,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'DupeFire', item: `${BASE}/${lang === 'es' ? '' : lang + '/'}` },
          { '@type': 'ListItem', position: 2, name: ui.guides, item: urlOf(lang, '') },
          { '@type': 'ListItem', position: 3, name: c.crumb },
        ],
      },
    ],
  };
  const ogImg = `${BASE}/assets/og-preview-${lang === 'es' || lang === 'pt' ? lang : 'en'}.png`;
  const ogAlt = ui.ogAlt;

  return `<!doctype html>
<html lang="${lang}" dir="ltr">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${esc(c.title)}</title>
<meta name="description" content="${esc(c.desc)}" />
<meta name="color-scheme" content="dark light" />
<meta name="theme-color" content="#0D0D1A" />
<link rel="icon" type="image/svg+xml" href="${assetPrefix(lang)}dupefire_icon_app.svg" />
<link rel="canonical" href="${url}" />
${langAlternates(g.slugs)}
<meta name="robots" content="index, follow" />
<meta name="author" content="Daniel Barea" />
<meta property="og:type" content="article" />
<meta property="og:locale" content="${ui.locale}" />
<meta property="og:url" content="${url}" />
<meta property="og:title" content="${esc(c.ogTitle || c.title)}" />
<meta property="og:description" content="${esc(c.desc)}" />
<meta property="og:site_name" content="DupeFire" />
<meta property="og:image" content="${ogImg}" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="${esc(ogAlt)}" />
<meta name="twitter:image" content="${ogImg}" />
<meta name="twitter:card" content="summary_large_image" />

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" />
<link rel="stylesheet" href="${assetPrefix(lang)}guides.css" />

<script type="application/ld+json">
${jsonLd(ld)}
</script>
</head>
<body>

<div class="ambient" aria-hidden="true"></div>

<nav class="nav">
  <a href="../" class="nav-logo" aria-label="DupeFire">
    ${markFor(lang, 28)}
    <span class="word">DupeFire</span>
  </a>
  <div class="nav-links">
    <a href="../">${ui.home}</a>
    <a href="./" class="active">${ui.guides}</a>
  </div>
  <div class="nav-right">
    ${langSwitch(lang, g.slugs, false)}
    <a class="nav-cta" href="${playUrl(campaign)}" target="_blank" rel="noopener">${ui.download}</a>
  </div>
</nav>

<main>
<article class="guide">

  <div class="crumbs">
    <a href="../">DupeFire</a><span aria-hidden="true">/</span>
    <a href="./">${ui.guides}</a><span aria-hidden="true">/</span>
    <span>${esc(c.crumb)}</span>
  </div>

  <h1>${c.h1}</h1>
  <p class="lead">${fix(c.lead)}</p>
  <p class="meta">${ui.updated} · ${c.minutes} ${ui.minRead}</p>

  <div class="answer">
    <div class="label">${ui.shortAnswer}</div>
    ${answer}
  </div>

  <nav class="toc-box" aria-label="${esc(ui.inGuide)}">
    <div class="label">${ui.inGuide}</div>
    <ol>
      ${toc}
    </ol>
  </nav>

${sections}

  <div class="faq">
    <h2 id="faq">${ui.faq}</h2>
${faq}
  </div>

  <section class="guide-cta">
    <h2>${c.ctaTitle}</h2>
    <p>${c.ctaText}</p>
    <a class="btn-primary" href="${playUrl(campaign)}" target="_blank" rel="noopener">
      ${PLAY_ICON}
      <span class="btn-sub"><span class="small">${ui.onPlay}</span><span>${ui.getFree}</span></span>
    </a>
    <p class="cta-note">${ui.ctaNote}</p>
  </section>

  <div class="related">
    <div class="label">${ui.readOn}</div>
    <ul>
${related}
    </ul>
  </div>

</article>
</main>

${footer(lang)}
</body>
</html>
`;
}

function stripTags(t) { return t.replace(/<[^>]+>/g, ''); }

function footer(lang) {
  const ui = R.UI[lang];
  return `<footer>
  <div class="footer-inner">
    <div class="footer-brand">
      ${markFor(lang, 36)}
      <div>
        <div class="word">DupeFire</div>
        <div class="tag">Burn your duplicates. Free your space.</div>
      </div>
    </div>
    <div class="footer-links">
      <a href="../">${ui.home}</a>
      <a href="./">${ui.guides}</a>
      <a href="../privacy.html">${ui.privacy}</a>
      <a href="mailto:danibarea@gmail.com">${ui.contact}</a>
    </div>
    <div class="footer-copy">© 2026 DupeFire · Daniel Barea</div>
  </div>
</footer>`;
}

// ── Índice de guías ───────────────────────────────────────────────────────────
function renderIndex(lang) {
  const ui = R.UI[lang];
  const slugs = {};
  R.langs.forEach(l => { slugs[l] = ''; });
  const idxSlugs = {};
  R.indexLangs.forEach(l => { idxSlugs[l] = ''; });
  const url = urlOf(lang, '');
  const items = R.guides.filter(g => g.slugs[lang]).map(g => `    <li>
      <a href="${g.slugs[lang]}.html">
        <span class="t">${g.titles[lang]}</span>
        <span class="d">${g.descs[lang]}</span>
      </a>
    </li>`).join('\n');
  const ld = {
    '@context': 'https://schema.org', '@type': 'CollectionPage', name: ui.indexTitle, inLanguage: lang, url,
    hasPart: R.guides.filter(g => g.slugs[lang]).map(g => ({ '@type': 'Article', headline: stripTags(g.titles[lang]), url: urlOf(lang, g.slugs[lang]) })),
  };
  const ogImg = `${BASE}/assets/og-preview-${lang === 'es' || lang === 'pt' ? lang : 'en'}.png`;
  return `<!doctype html>
<html lang="${lang}" dir="ltr">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${esc(ui.indexTitle)} — DupeFire</title>
<meta name="description" content="${esc(ui.indexDesc)}" />
<meta name="color-scheme" content="dark light" />
<meta name="theme-color" content="#0D0D1A" />
<link rel="icon" type="image/svg+xml" href="${assetPrefix(lang)}dupefire_icon_app.svg" />
<link rel="canonical" href="${url}" />
${langAlternates(idxSlugs, true)}
<meta name="robots" content="index, follow" />
<meta name="author" content="Daniel Barea" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="${ui.locale}" />
<meta property="og:url" content="${url}" />
<meta property="og:title" content="${esc(ui.indexTitle)} — DupeFire" />
<meta property="og:description" content="${esc(ui.indexDesc)}" />
<meta property="og:site_name" content="DupeFire" />
<meta property="og:image" content="${ogImg}" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="${esc(ui.ogAlt)}" />
<meta name="twitter:image" content="${ogImg}" />
<meta name="twitter:card" content="summary_large_image" />

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" />
<link rel="stylesheet" href="${assetPrefix(lang)}guides.css" />
<script type="application/ld+json">
${jsonLd(ld)}
</script>
</head>
<body>

<div class="ambient" aria-hidden="true"></div>

<nav class="nav">
  <a href="../" class="nav-logo" aria-label="DupeFire">
    ${markFor(lang, 28)}
    <span class="word">DupeFire</span>
  </a>
  <div class="nav-links">
    <a href="../">${ui.home}</a>
    <a href="./" class="active">${ui.guides}</a>
  </div>
  <div class="nav-right">
    ${langSwitch(lang, idxSlugs, true)}
    <a class="nav-cta" href="${playUrl('index')}" target="_blank" rel="noopener">${ui.download}</a>
  </div>
</nav>

<main>
<section class="guide">
  <div class="eyebrow">${ui.guides}</div>
  <h1>${ui.indexH1}</h1>
  <p class="lead">${ui.indexLead}</p>

  <ul class="guide-list">
${items}
  </ul>
</section>
</main>

${footer(lang)}
</body>
</html>
`;
}

// ── Bloque "Sigue leyendo" de las guías antiguas ─────────────────────────────
function patchLegacyRelated(g, lang) {
  const file = path.join(ROOT, dirOf(lang), g.slugs[lang] + '.html');
  let html = fs.readFileSync(file, 'utf8');
  const ui = R.UI[lang];
  const ids = R.guides.filter(x => x.id !== g.id && x.slugs[lang]).map(x => x.id);
  const lis = ids.map(id => `      <li><a href="${R.byId[id].slugs[lang]}.html">${R.byId[id].titles[lang]}</a></li>`).join('\n');
  const block = `<div class="related">\n    <div class="label">${ui.readOn}</div>\n    <ul>\n${lis}\n    </ul>\n  </div>`;
  const re = /<div class="related">[\s\S]*?<\/ul>\s*<\/div>/;
  if (!re.test(html)) throw new Error('Sin bloque related en ' + file);
  html = html.replace(re, () => block);
  // UTM: medium coherente con el resto (guide)
  html = html.replace(/utm_medium%3Dguia%26/g, 'utm_medium%3Dguide%26');
  fs.writeFileSync(file, brandify(html, lang), 'utf8');
}

// ── Main ──────────────────────────────────────────────────────────────────────
let n = 0;
for (const g of R.guides) {
  for (const lang of Object.keys(g.slugs)) {
    if (g.legacy) { patchLegacyRelated(g, lang); continue; }
    const dir = path.join(ROOT, dirOf(lang));
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, g.slugs[lang] + '.html'), brandify(renderGuide(g, lang), lang), 'utf8');
    n++;
  }
}
for (const lang of R.indexLangs) {
  const dir = path.join(ROOT, dirOf(lang));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), brandify(renderIndex(lang), lang), 'utf8');
}
// utm_medium del índice ES
for (const f of ['guias/index.html']) {
  const p = path.join(ROOT, f);
  fs.writeFileSync(p, fs.readFileSync(p, 'utf8').replace(/utm_medium%3Dguia%26/g, 'utm_medium%3Dguide%26'), 'utf8');
}
console.log(`✓ ${n} guías + ${R.indexLangs.length} índices`);
