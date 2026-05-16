// build-static.js — Genera páginas estáticas por idioma para SEO
// Uso: node build-static.js
'use strict';

const fs   = require('fs');
const path = require('path');
const vm   = require('vm');

const ROOT    = __dirname;
const BASE    = 'https://neoacid-dbl.github.io/DupeFire';
const LANGS   = ['es','en','de','fr','hi','ja','zh','ar','pt'];

// ── Carga i18n ────────────────────────────────────────────────────────────────
const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(ROOT,'i18n.js'),'utf8'), ctx);
const I18N = ctx.window.DF_I18N;

// ── Meta por idioma ───────────────────────────────────────────────────────────
const META = {
  es: { locale:'es_ES', title:'DupeFire — Quema tus duplicados. Recupera tu espacio.',
        desc:'DupeFire detecta y elimina fotos, vídeos y documentos duplicados en tu Android. Procesado localmente, sin nube. Gratis en Google Play.' },
  en: { locale:'en_US', title:'DupeFire — Burn your duplicates. Reclaim your space.',
        desc:'DupeFire finds and removes duplicate photos, videos and documents on your Android. Processed on-device, no cloud. Free on Google Play.' },
  de: { locale:'de_DE', title:'DupeFire — Verbrenne deine Duplikate. Hol dir Speicher zurück.',
        desc:'DupeFire findet und entfernt doppelte Fotos, Videos und Dokumente auf deinem Android. Lokal verarbeitet, keine Cloud. Kostenlos bei Google Play.' },
  fr: { locale:'fr_FR', title:'DupeFire — Brûle tes doublons. Récupère ton espace.',
        desc:'DupeFire trouve et supprime les photos, vidéos et documents en double sur ton Android. Traitement local, sans cloud. Gratuit sur Google Play.' },
  hi: { locale:'hi_IN', title:'DupeFire — अपने डुप्लीकेट जलाओ। जगह वापस पाओ।',
        desc:'DupeFire आपके Android पर डुप्लीकेट फ़ोटो, वीडियो और दस्तावेज़ ढूंढता और हटाता है। स्थानीय प्रसंस्करण, कोई क्लाउड नहीं। Google Play पर मुफ़्त।' },
  ja: { locale:'ja_JP', title:'DupeFire — 重複を焼き払え。スペースを取り戻す。',
        desc:'DupeFire は Android 上の重複した写真・動画・ドキュメントを見つけて削除します。すべてデバイス上で処理、クラウドなし。Google Play で無料。' },
  zh: { locale:'zh_CN', title:'DupeFire — 烧掉你的重复文件。夺回你的空间。',
        desc:'DupeFire 在你的 Android 上查找并删除重复的照片、视频和文档。本地处理，无需云端。在 Google Play 上免费下载。' },
  ar: { locale:'ar_SA', title:'DupeFire — احرق مكرراتك. استرجع مساحتك.',
        desc:'يبحث DupeFire عن الصور ومقاطع الفيديو والمستندات المكررة على هاتف Android ويحذفها. معالجة محلية، دون سحابة. مجاني على Google Play.' },
  pt: { locale:'pt_BR', title:'DupeFire — Queime suas duplicatas. Recupere seu espaço.',
        desc:'O DupeFire encontra e remove fotos, vídeos e documentos duplicados no seu Android. Processado no dispositivo, sem nuvem. Grátis no Google Play.' },
};

// ── Helpers ───────────────────────────────────────────────────────────────────
function deepGet(obj, dotPath) {
  return dotPath.split('.').reduce((a, k) => (a && a[k] != null ? a[k] : null), obj);
}

function langUrl(lang) {
  return lang === 'es' ? `${BASE}/` : `${BASE}/${lang}/`;
}

function hreflangBlock(suffix = '') {
  const suffixPath = suffix ? suffix : '';
  return LANGS.map(l => {
    const href = l === 'es' ? `${BASE}/${suffixPath}` : `${BASE}/${l}/${suffixPath}`;
    return `<link rel="alternate" hreflang="${l}" href="${href}" />`;
  }).join('\n') + `\n<link rel="alternate" hreflang="x-default" href="${BASE}/${suffixPath}" />`;
}

// ── SVG icons (identical to the JS in index.html) ────────────────────────────
const ICONS = {
  'image':     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/></svg>',
  'video':     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>',
  'file-text': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/></svg>',
  'archive':   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="5" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><line x1="10" y1="12" x2="14" y2="12"/></svg>',
  'shield':    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 5v6c0 5 3.6 9.5 8 11 4.4-1.5 8-6 8-11V5Z"/><path d="m9 12 2 2 4-4"/></svg>',
  'zap':       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
};
const TICK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
const ACCENTS = ['acc-orange','acc-red','acc-gold','acc-green','acc-orange','acc-red'];

// ── Pre-renderers ─────────────────────────────────────────────────────────────
function renderChips(d) {
  return (d.hero.chips || []).map(c => `<span class="chip">${c}</span>`).join('');
}

function renderFeatures(d) {
  return d.features.items.map((f, i) =>
    `<div class="f-card reveal ${ACCENTS[i % ACCENTS.length]}">` +
    `<div class="icon-wrap">${ICONS[f.icon] || ICONS.zap}</div>` +
    `<div class="f-label">${f.label}</div>` +
    `<h3>${f.title}</h3><p>${f.body}</p></div>`
  ).join('\n');
}

function renderChecks(d) {
  return (d.privacy.checks || []).map(c =>
    `<div class="check"><span class="tick">${TICK}</span><span>${c}</span></div>`
  ).join('\n');
}

function renderFooter(d, isSubdir) {
  const hrefs = [
    isSubdir ? `${BASE}/privacy.html` : 'privacy.html',
    'mailto:danibarea@gmail.com',
    'https://play.google.com/store/apps/details?id=com.danib.duplicados',
  ];
  return (d.footer.links || []).map((label, i) => {
    const extra = i !== 1 ? ' target="_blank" rel="noopener"' : '';
    return `<a href="${hrefs[i] || '#'}"${extra}>${label}</a>`;
  }).join('');
}

function renderCtaTitle(d) {
  const parts = d.cta.title.trim().split(' ');
  if (parts.length > 1) {
    const last = parts.pop();
    return `${parts.join(' ')} <span class="em">${last}</span>`;
  }
  return `<span class="em">${d.cta.title}</span>`;
}

// ── HTML processing ───────────────────────────────────────────────────────────
function applyI18n(html, d) {
  // data-i18n="key">CONTENT< (single text node — no child tags)
  return html.replace(/data-i18n="([^"]+)">([^<]*)</g, (m, key, _) => {
    const val = deepGet(d, key);
    return (val != null && typeof val === 'string')
      ? `data-i18n="${key}">${val}<`
      : m;
  });
}

function applyI18nNum(html, d) {
  return html.replace(/data-i18n-num="([^"]+)">([^<]*)</g, (m, key, _) => {
    const val = deepGet(d, key);
    return val != null ? `data-i18n-num="${key}">${val}<` : m;
  });
}

function escAttr(str) {
  return str.replace(/&/g,'&amp;').replace(/"/g,'&quot;');
}

// ── Main generator ────────────────────────────────────────────────────────────
function generate(lang) {
  const d      = I18N[lang];
  const meta   = META[lang];
  const url    = langUrl(lang);
  const isRoot = lang === 'es';
  const prefix = isRoot ? '' : '../';

  let html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

  // 1. <html> attributes
  html = html.replace(/<html lang="es" dir="ltr">/,
    `<html lang="${lang}" dir="${d.dir}">`);

  // 2. <title>
  html = html.replace(/<title>DupeFire[^<]*<\/title>/,
    `<title>${escAttr(meta.title)}</title>`);

  // 3. meta description
  html = html.replace(/(<meta name="description" content=")[^"]*(")/, `$1${escAttr(meta.desc)}$2`);

  // 4. canonical
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/,  `$1${url}$2`);

  // 5-9. OG / Twitter head tags
  html = html.replace(/(<meta property="og:url" content=")[^"]*(")/,         `$1${url}$2`);
  html = html.replace(/(<meta property="og:title" content=")[^"]*(")/,        `$1${escAttr(meta.title)}$2`);
  html = html.replace(/(<meta property="og:description" content=")[^"]*(")/,  `$1${escAttr(meta.desc)}$2`);
  html = html.replace(/(<meta name="twitter:title" content=")[^"]*(")/,       `$1${escAttr(meta.title)}$2`);
  html = html.replace(/(<meta name="twitter:description" content=")[^"]*(")/,`$1${escAttr(meta.desc)}$2`);

  // 10. og:locale + rebuild og:locale:alternate (exclude current lang)
  html = html.replace(/(<meta property="og:locale" content=")[^"]*(")/,`$1${meta.locale}$2`);
  // Remove all existing og:locale:alternate, rebuild without current lang
  html = html.replace(/<meta property="og:locale:alternate" content="[^"]*" \/>\n/g, '');
  const altLocales = { es:'es_ES',en:'en_US',de:'de_DE',fr:'fr_FR',hi:'hi_IN',ja:'ja_JP',zh:'zh_CN',ar:'ar_SA',pt:'pt_BR' };
  const altBlock = LANGS.filter(l => l !== lang).map(l => `<meta property="og:locale:alternate" content="${altLocales[l]}" />`).join('\n') + '\n';
  html = html.replace(/(<meta property="og:locale" content="[^"]*" \/>)\n/, `$1\n${altBlock}`);

  // 11. hreflang block — replace existing alternates + manifest line
  html = html.replace(
    /(?:<link rel="alternate" hreflang="[^"]*" href="[^"]*" \/>\n)+<link rel="alternate" hreflang="x-default" href="[^"]*" \/>/,
    hreflangBlock()
  );

  // 12. asset paths for subdir pages
  if (!isRoot) {
    html = html.replace('href="assets/dupefire_icon_app.svg"', 'href="../assets/dupefire_icon_app.svg"');
    html = html.replace('href="manifest.json"',                'href="../manifest.json"');
    html = html.replace('src="i18n.js"',                       'src="../i18n.js"');
  }

  // 13. data-i18n text content
  html = applyI18n(html, d);
  html = applyI18nNum(html, d);

  // 14. chips
  html = html.replace(
    '<div class="hero-chips" data-chips></div>',
    `<div class="hero-chips" data-chips>${renderChips(d)}</div>`
  );

  // 15. features grid
  html = html.replace(
    '<div class="features-grid" id="featuresGrid"></div>',
    `<div class="features-grid" id="featuresGrid">\n${renderFeatures(d)}\n</div>`
  );

  // 16. check grid
  html = html.replace(
    '<div class="check-grid" id="checkGrid"></div>',
    `<div class="check-grid" id="checkGrid">\n${renderChecks(d)}\n</div>`
  );

  // 17. footer links
  html = html.replace(
    '<div class="footer-links" id="footerLinks"></div>',
    `<div class="footer-links" id="footerLinks">${renderFooter(d, !isRoot)}</div>`
  );

  // 18. CTA title (data-i18n-pre pattern → em span on last word)
  html = html.replace(
    /<h2>\s*<span data-i18n-pre="cta\.title">[^<]*<\/span>\s*<\/h2>/,
    `<h2>${renderCtaTitle(d)}</h2>`
  );

  // 19. JSON-LD MobileApplication URL
  html = html.replace(
    '"url": "https://neoacid-dbl.github.io/DupeFire/"',
    `"url": "${url}"`
  );

  // 20. JS: force-init to this language (skip localStorage detection)
  html = html.replace(
    /const stored[\s\S]*?applyLang\(init\);\n  markActive\(init\);/,
    `const init = '${lang}';\n  applyLang(init);\n  markActive(init);`
  );

  return html;
}

// ── Write pages ───────────────────────────────────────────────────────────────
for (const lang of LANGS) {
  if (lang === 'es') continue; // root index.html is already Spanish

  const dir = path.join(ROOT, lang);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const html = generate(lang);
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
  console.log(`✓ ${lang}/index.html`);
}

// ── Update root index.html hreflang (now points to real language URLs) ────────
console.log('\nUpdating root index.html hreflang links…');
let root = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
root = root.replace(
  /(?:<link rel="alternate" hreflang="[^"]*" href="[^"]*" \/>\n)+<link rel="alternate" hreflang="x-default" href="[^"]*" \/>/,
  hreflangBlock()
);
fs.writeFileSync(path.join(ROOT, 'index.html'), root, 'utf8');
console.log('✓ index.html hreflang updated');

// ── Update sitemap.xml ────────────────────────────────────────────────────────
console.log('\nGenerating sitemap.xml…');

const today = new Date().toISOString().slice(0, 10);

function sitemapUrl(loc, changefreq, priority) {
  const alts = LANGS.map(l => {
    const href = l === 'es' ? `${BASE}/` : `${BASE}/${l}/`;
    return `    <xhtml:link rel="alternate" hreflang="${l}" href="${href}"/>`;
  }).join('\n');
  const xdef = `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE}/"/>`;
  return `
  <url>
    <loc>${loc}</loc>
${alts}
${xdef}
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

// Root (Spanish)
sitemap += sitemapUrl(`${BASE}/`, 'monthly', '1.0');

// Language-specific pages
for (const lang of LANGS) {
  if (lang === 'es') continue;
  sitemap += sitemapUrl(`${BASE}/${lang}/`, 'monthly', '0.9');
}

// Privacy page
sitemap += sitemapUrl(`${BASE}/privacy.html`, 'yearly', '0.5');

sitemap += '\n</urlset>\n';

fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemap, 'utf8');
console.log('✓ sitemap.xml\n');
console.log('Done.');
