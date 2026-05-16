// build-static.js — Genera páginas estáticas + todos los archivos SEO
// Uso: node build-static.js
'use strict';

const fs   = require('fs');
const path = require('path');
const vm   = require('vm');

const ROOT  = __dirname;
const BASE  = 'https://neoacid-dbl.github.io/DupeFire';
const LANGS = ['es','en','de','fr','hi','ja','zh','ar','pt'];
const TODAY = new Date().toISOString().slice(0, 10);

// ── Carga i18n ────────────────────────────────────────────────────────────────
function loadI18n(file) {
  const ctx = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(ROOT, file), 'utf8'), ctx);
  return ctx.window;
}
const I18N        = loadI18n('i18n.js').DF_I18N;
const I18N_POLICY = loadI18n('i18n_policy.js').DF_POLICY;

// ── Meta por idioma ───────────────────────────────────────────────────────────
const META_INDEX = {
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

const META_PRIVACY = {
  es: { locale:'es_ES', title:'Política de privacidad — DupeFire',
        desc:'Política de privacidad de DupeFire. Análisis 100% local, sin cuenta, sin subida de archivos.' },
  en: { locale:'en_US', title:'Privacy Policy — DupeFire',
        desc:'DupeFire Privacy Policy. 100% local analysis, no account required, no file uploads.' },
  de: { locale:'de_DE', title:'Datenschutzrichtlinie — DupeFire',
        desc:'DupeFire Datenschutzrichtlinie. 100% lokale Analyse, kein Konto erforderlich, kein Datei-Upload.' },
  fr: { locale:'fr_FR', title:'Politique de confidentialité — DupeFire',
        desc:'Politique de confidentialité de DupeFire. Analyse 100% locale, sans compte, sans téléchargement de fichiers.' },
  hi: { locale:'hi_IN', title:'गोपनीयता नीति — DupeFire',
        desc:'DupeFire की गोपनीयता नीति। 100% स्थानीय विश्लेषण, कोई खाता नहीं, कोई फ़ाइल अपलोड नहीं।' },
  ja: { locale:'ja_JP', title:'プライバシーポリシー — DupeFire',
        desc:'DupeFire のプライバシーポリシー。100% ローカル処理、アカウント不要、ファイルのアップロードなし。' },
  zh: { locale:'zh_CN', title:'隐私政策 — DupeFire',
        desc:'DupeFire 隐私政策。100% 本地分析，无需账户，不上传文件。' },
  ar: { locale:'ar_SA', title:'سياسة الخصوصية — DupeFire',
        desc:'سياسة خصوصية DupeFire. تحليل محلي 100٪، دون حساب، دون رفع ملفات.' },
  pt: { locale:'pt_BR', title:'Política de privacidade — DupeFire',
        desc:'Política de privacidade do DupeFire. Análise 100% local, sem conta, sem envio de arquivos.' },
};

// ── Helpers generales ─────────────────────────────────────────────────────────
const ALT_LOCALES = { es:'es_ES',en:'en_US',de:'de_DE',fr:'fr_FR',hi:'hi_IN',ja:'ja_JP',zh:'zh_CN',ar:'ar_SA',pt:'pt_BR' };

function deepGet(obj, dotPath) {
  return dotPath.split('.').reduce((a, k) => (a && a[k] != null ? a[k] : null), obj);
}
function esc(s) {
  return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}
function escAttr(s) { return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;'); }

function indexUrl(lang) { return lang === 'es' ? `${BASE}/`            : `${BASE}/${lang}/`; }
function privUrl(lang)  { return lang === 'es' ? `${BASE}/privacy.html`: `${BASE}/${lang}/privacy.html`; }

function hreflangBlock(urlFn) {
  return LANGS.map(l => `<link rel="alternate" hreflang="${l}" href="${urlFn(l)}" />`)
    .join('\n') + `\n<link rel="alternate" hreflang="x-default" href="${urlFn('es')}" />`;
}

function localeAlts(currentLang) {
  return LANGS.filter(l => l !== currentLang)
    .map(l => `<meta property="og:locale:alternate" content="${ALT_LOCALES[l]}" />`)
    .join('\n') + '\n';
}

function applyI18nAttrs(html, d) {
  html = html.replace(/data-i18n="([^"]+)">([^<]*)</g, (m, key, _) => {
    const val = deepGet(d, key);
    return (val != null && typeof val === 'string') ? `data-i18n="${key}">${val}<` : m;
  });
  html = html.replace(/data-i18n-num="([^"]+)">([^<]*)</g, (m, key, _) => {
    const val = deepGet(d, key);
    return val != null ? `data-i18n-num="${key}">${val}<` : m;
  });
  return html;
}

function patchHead(html, lang, meta, canonicalUrl, hreflangFn) {
  const m = meta;
  // html tag
  const d = (I18N[lang] || I18N_POLICY[lang]);
  html = html.replace(/<html lang="[^"]*" dir="[^"]*">/, `<html lang="${lang}" dir="${d.dir}">`);
  // title
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escAttr(m.title)}</title>`);
  // description
  html = html.replace(/(<meta name="description" content=")[^"]*(")/, `$1${escAttr(m.desc)}$2`);
  // canonical
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/,  `$1${canonicalUrl}$2`);
  // og:url
  html = html.replace(/(<meta property="og:url" content=")[^"]*(")/,        `$1${canonicalUrl}$2`);
  // og:title
  html = html.replace(/(<meta property="og:title" content=")[^"]*(")/,       `$1${escAttr(m.title)}$2`);
  // og:description
  html = html.replace(/(<meta property="og:description" content=")[^"]*(")/,`$1${escAttr(m.desc)}$2`);
  // twitter:title
  html = html.replace(/(<meta name="twitter:title" content=")[^"]*(")/,      `$1${escAttr(m.title)}$2`);
  // twitter:description
  html = html.replace(/(<meta name="twitter:description" content=")[^"]*(")/,`$1${escAttr(m.desc)}$2`);
  // og:locale + alternates
  html = html.replace(/(<meta property="og:locale" content=")[^"]*(")/,`$1${m.locale}$2`);
  html = html.replace(/<meta property="og:locale:alternate" content="[^"]*" \/>\n/g, '');
  html = html.replace(/(<meta property="og:locale" content="[^"]*" \/>)\n/, `$1\n${localeAlts(lang)}`);
  // hreflang block
  html = html.replace(
    /(?:<link rel="alternate" hreflang="[^"]*" href="[^"]*" \/>\n)+<link rel="alternate" hreflang="x-default" href="[^"]*" \/>/,
    hreflangFn()
  );
  return html;
}

function patchAssetPaths(html, prefix) {
  if (!prefix) return html;
  html = html.replace(/href="assets\//g,    `href="${prefix}assets/`);
  html = html.replace(/href="manifest\.json"/,  `href="${prefix}manifest.json"`);
  html = html.replace(/src="i18n\.js"/,         `src="${prefix}i18n.js"`);
  html = html.replace(/src="i18n_policy\.js"/,  `src="${prefix}i18n_policy.js"`);
  return html;
}

function patchJsInit(html, lang) {
  return html.replace(
    /const stored[\s\S]*?applyLang\(init\);\n  markActive\(init\);/,
    `const init = '${lang}';\n  applyLang(init);\n  markActive(init);`
  );
}

// ── INDEX page generators ─────────────────────────────────────────────────────
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
function renderChips(d) {
  return (d.hero.chips || []).map(c => `<span class="chip">${c}</span>`).join('');
}
function renderIndexFooter(d, isSubdir) {
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
  if (parts.length > 1) { const last = parts.pop(); return `${parts.join(' ')} <span class="em">${last}</span>`; }
  return `<span class="em">${d.cta.title}</span>`;
}

function generateIndex(lang) {
  const d      = I18N[lang];
  const meta   = META_INDEX[lang];
  const url    = indexUrl(lang);
  const isRoot = lang === 'es';
  const prefix = isRoot ? '' : '../';

  let html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

  html = patchHead(html, lang, meta, url, () => hreflangBlock(indexUrl));
  html = patchAssetPaths(html, prefix);
  html = applyI18nAttrs(html, d);

  html = html.replace('<div class="hero-chips" data-chips></div>',
    `<div class="hero-chips" data-chips>${renderChips(d)}</div>`);
  html = html.replace('<div class="features-grid" id="featuresGrid"></div>',
    `<div class="features-grid" id="featuresGrid">\n${renderFeatures(d)}\n</div>`);
  html = html.replace('<div class="check-grid" id="checkGrid"></div>',
    `<div class="check-grid" id="checkGrid">\n${renderChecks(d)}\n</div>`);
  html = html.replace('<div class="footer-links" id="footerLinks"></div>',
    `<div class="footer-links" id="footerLinks">${renderIndexFooter(d, !isRoot)}</div>`);
  html = html.replace(
    /<h2>\s*<span data-i18n-pre="cta\.title">[^<]*<\/span>\s*<\/h2>/,
    `<h2>${renderCtaTitle(d)}</h2>`);
  html = html.replace('"url": "https://neoacid-dbl.github.io/DupeFire/"', `"url": "${url}"`);
  html = patchJsInit(html, lang);

  return html;
}

// ── PRIVACY page generators ───────────────────────────────────────────────────
const PERM_ICONS = {
  'READ_MEDIA_IMAGES':     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/></svg>',
  'READ_MEDIA_VIDEO':      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>',
  'READ_EXTERNAL_STORAGE': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><polyline points="14 2 14 8 20 8"/></svg>',
  'WRITE_EXTERNAL_STORAGE':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 1 1 3 3L7 19l-4 1 1-4Z"/></svg>',
};
const CHECK_IC = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
const WARN_IC  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>';
const MAIL_IC  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>';

function renderHeroTitle(titleStr) {
  const parts = titleStr.split('. ');
  if (parts.length > 1) {
    const last = parts.pop();
    return parts.join('. ') + '. <span class="em">' + esc(last) + '</span>';
  }
  return '<span class="em">' + esc(titleStr) + '</span>';
}

function renderToc(d) {
  return d.sections.map(s =>
    `<li><a href="#${s.id}"><span class="n">${esc(s.num)}</span><span>${esc(s.kicker)}</span></a></li>`
  ).join('\n');
}

function renderSections(d) {
  return d.sections.map(s => {
    let html = `<article class="sec" id="${s.id}">`;
    html += `<div class="sec-head"><span class="sec-num">${esc(s.num)}</span><span class="sec-kicker">${esc(s.kicker)}</span></div>`;
    html += `<h2>${esc(s.title)}</h2>`;
    if (s.body)    html += `<p>${esc(s.body)}</p>`;
    if (s.list)    html += `<ul class="bullets">${s.list.map(it => `<li>${esc(it)}</li>`).join('')}</ul>`;
    if (s.callout) html += `<div class="callout"><span class="ic">${CHECK_IC}</span><span class="text">${esc(s.callout)}</span></div>`;
    if (s.outro)   html += `<p>${esc(s.outro)}</p>`;
    if (s.nope)    html += `<div class="nope-grid">${s.nope.map(n => `<div class="nope"><span class="x">✕</span><span>${esc(n)}</span></div>`).join('')}</div>`;
    if (s.perms)   html += `<div class="perms">${s.perms.map(p => {
      const icon = PERM_ICONS[p.name] || PERM_ICONS.READ_EXTERNAL_STORAGE;
      return `<div class="perm"><div class="key"><span class="ic">${icon}</span><span>${esc(p.name)}</span></div><div class="desc">${esc(p.desc)}</div></div>`;
    }).join('')}</div>`;
    if (s.warn)    html += `<div class="callout warn"><span class="ic">${WARN_IC}</span><span class="text">${esc(s.warn)}</span></div>`;
    if (s.links)   html += `<div class="link-pills">${s.links.map(l => `<a class="link-pill" href="${esc(l.href)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join('')}</div>`;
    if (s.email)   html += `<div class="email-block"><span class="ic">${MAIL_IC}</span><a href="mailto:${esc(s.email)}">${esc(s.email)}</a></div>`;
    html += `</article>`;
    return html;
  }).join('\n');
}

function renderPrivacyFooter(d, isSubdir) {
  const hrefs = [
    isSubdir ? '../' : 'index.html',
    '#',
    'https://play.google.com/store/apps/details?id=com.danib.duplicados',
  ];
  return (d.footer.links || []).map((label, i) => {
    const extra = i === 2 ? ' target="_blank" rel="noopener"' : '';
    return `<a href="${hrefs[i] || '#'}"${extra}>${label}</a>`;
  }).join('');
}

function generatePrivacy(lang) {
  const d      = I18N_POLICY[lang];
  const meta   = META_PRIVACY[lang];
  const url    = privUrl(lang);
  const isRoot = lang === 'es';
  const prefix = isRoot ? '' : '../';
  const homeHref = isRoot ? 'index.html' : '../';

  let html = fs.readFileSync(path.join(ROOT, 'privacy.html'), 'utf8');

  html = patchHead(html, lang, meta, url, () => hreflangBlock(privUrl));
  html = patchAssetPaths(html, prefix);
  html = applyI18nAttrs(html, d);

  // Nav "Inicio" / "Home" link
  html = html.replace(`href="index.html" data-i18n="nav.home"`, `href="${homeHref}" data-i18n="nav.home"`);
  // Nav CTA "back" link
  html = html.replace(`href="index.html" data-i18n="nav.back"`, `href="${homeHref}" data-i18n="nav.back"`);

  // Hero title with em on last clause
  html = html.replace(
    /<h1 id="heroTitle">[^<]*(?:<span[^>]*>[^<]*<\/span>)?<\/h1>/,
    `<h1 id="heroTitle">${renderHeroTitle(d.hero.title)}</h1>`
  );

  // TOC
  html = html.replace('<ul id="tocList"></ul>', `<ul id="tocList">\n${renderToc(d)}\n</ul>`);

  // Sections
  html = html.replace('<div class="sections" id="sections"></div>',
    `<div class="sections" id="sections">\n${renderSections(d)}\n</div>`);

  // Footer links
  html = html.replace('<div class="footer-links" id="footerLinks"></div>',
    `<div class="footer-links" id="footerLinks">${renderPrivacyFooter(d, !isRoot)}</div>`);

  // JS init
  html = patchJsInit(html, lang);

  return html;
}

// ── Sitemap helpers ───────────────────────────────────────────────────────────
function xmlHeader() { return `<?xml version="1.0" encoding="UTF-8"?>\n`; }

function urlEntry(loc, changefreq, priority, alts) {
  const altXml = alts ? '\n' + alts.map(([hl, href]) =>
    `    <xhtml:link rel="alternate" hreflang="${hl}" href="${href}"/>`).join('\n') : '';
  return `
  <url>
    <loc>${loc}</loc>${altXml}
    <lastmod>${TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function langAlts(urlFn) {
  const pairs = LANGS.map(l => [l, urlFn(l)]);
  pairs.push(['x-default', urlFn('es')]);
  return pairs;
}

// ── Generate all sitemaps ─────────────────────────────────────────────────────
function generateSitemapPages() {
  let xml = xmlHeader();
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  xml += `        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;
  for (const lang of LANGS) {
    xml += urlEntry(indexUrl(lang), 'monthly', lang === 'es' ? '1.0' : '0.9', langAlts(indexUrl));
  }
  xml += '\n</urlset>\n';
  return xml;
}

function generateSitemapPrivacy() {
  let xml = xmlHeader();
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  xml += `        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;
  for (const lang of LANGS) {
    xml += urlEntry(privUrl(lang), 'yearly', lang === 'es' ? '0.5' : '0.4', langAlts(privUrl));
  }
  xml += '\n</urlset>\n';
  return xml;
}

function generateSitemapImages() {
  const images = [
    { loc: `${BASE}/`,
      images: [
        { url: `${BASE}/assets/og-preview.svg`, caption: 'DupeFire — Duplicate file cleaner for Android', title: 'DupeFire Social Preview' },
        { url: `${BASE}/assets/dupefire_icon_app.svg`, caption: 'DupeFire app icon', title: 'DupeFire Icon' },
        { url: `${BASE}/assets/dupefire_logo.svg`, caption: 'DupeFire logo', title: 'DupeFire Logo' },
      ]
    }
  ];

  let xml = xmlHeader();
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
  xml += `        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;
  for (const page of images) {
    xml += `\n  <url>\n    <loc>${page.loc}</loc>\n`;
    for (const img of page.images) {
      xml += `    <image:image>\n`;
      xml += `      <image:loc>${img.url}</image:loc>\n`;
      xml += `      <image:caption>${esc(img.caption)}</image:caption>\n`;
      xml += `      <image:title>${esc(img.title)}</image:title>\n`;
      xml += `    </image:image>\n`;
    }
    xml += `  </url>`;
  }
  xml += '\n</urlset>\n';
  return xml;
}

function generateSitemapIndex() {
  const sitemaps = ['sitemap-pages.xml', 'sitemap-privacy.xml', 'sitemap-images.xml'];
  let xml = xmlHeader();
  xml += `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  for (const s of sitemaps) {
    xml += `\n  <sitemap>\n    <loc>${BASE}/${s}</loc>\n    <lastmod>${TODAY}</lastmod>\n  </sitemap>`;
  }
  xml += '\n</sitemapindex>\n';
  return xml;
}

// ── 404 page ──────────────────────────────────────────────────────────────────
function generate404() {
  return `<!doctype html>
<html lang="es" dir="ltr">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Página no encontrada — DupeFire</title>
<meta name="robots" content="noindex, follow" />
<link rel="canonical" href="${BASE}/" />
<link rel="icon" type="image/svg+xml" href="/DupeFire/assets/dupefire_icon_app.svg" />
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:system-ui,-apple-system,sans-serif;background:#0D0D1A;color:#fff;min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:40px 20px}
.wrap{max-width:480px}
.code{font-size:80px;font-weight:900;background:linear-gradient(135deg,#FF6B35,#FF0844);-webkit-background-clip:text;-webkit-text-fill-color:transparent;line-height:1}
h1{font-size:24px;font-weight:700;margin:16px 0 8px;color:#fff}
p{color:#aaa;font-size:16px;line-height:1.6;margin-bottom:32px}
.btn{display:inline-block;padding:14px 32px;background:linear-gradient(135deg,#FF6B35,#FF0844);color:#fff;font-weight:700;font-size:16px;border-radius:999px;text-decoration:none}
</style>
</head>
<body>
<div class="wrap">
  <div class="code">404</div>
  <h1>Página no encontrada</h1>
  <p>La URL que buscas no existe. Puede que haya cambiado o que hayas seguido un enlace roto.</p>
  <a class="btn" href="${BASE}/">Volver al inicio</a>
</div>
</body>
</html>
`;
}

// ── security.txt ──────────────────────────────────────────────────────────────
function generateSecurityTxt() {
  return `Contact: mailto:danibarea@gmail.com
Preferred-Languages: es, en
Canonical: ${BASE}/.well-known/security.txt
Policy: ${BASE}/privacy.html
Expires: ${new Date(Date.now() + 365*24*60*60*1000).toISOString().replace(/\.\d+Z$/,'Z')}
`;
}

// ── robots.txt ────────────────────────────────────────────────────────────────
function generateRobots() {
  return `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${BASE}/sitemap-index.xml
Sitemap: ${BASE}/sitemap-pages.xml
Sitemap: ${BASE}/sitemap-privacy.xml
Sitemap: ${BASE}/sitemap-images.xml
`;
}

// ── Write helper ──────────────────────────────────────────────────────────────
function write(relPath, content) {
  const full = path.join(ROOT, relPath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, 'utf8');
  console.log(`✓ ${relPath}`);
}

// ════════════════════════════════════════════════════════════════════════════════
// MAIN
// ════════════════════════════════════════════════════════════════════════════════

console.log('\n── Index pages ──');
for (const lang of LANGS) {
  if (lang === 'es') continue;
  const dir = path.join(ROOT, lang);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), generateIndex(lang), 'utf8');
  console.log(`✓ ${lang}/index.html`);
}

// Update root index.html hreflang (now real language URLs)
console.log('\n── Root index.html (hreflang update) ──');
let rootIndex = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
rootIndex = rootIndex.replace(
  /(?:<link rel="alternate" hreflang="[^"]*" href="[^"]*" \/>\n)+<link rel="alternate" hreflang="x-default" href="[^"]*" \/>/,
  hreflangBlock(indexUrl)
);
fs.writeFileSync(path.join(ROOT, 'index.html'), rootIndex, 'utf8');
console.log('✓ index.html');

console.log('\n── Privacy pages ──');
// Root privacy (Spanish)
fs.writeFileSync(path.join(ROOT, 'privacy.html'), generatePrivacy('es'), 'utf8');
console.log('✓ privacy.html');
// Language-specific privacy pages
for (const lang of LANGS) {
  if (lang === 'es') continue;
  const dir = path.join(ROOT, lang);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'privacy.html'), generatePrivacy(lang), 'utf8');
  console.log(`✓ ${lang}/privacy.html`);
}

console.log('\n── Sitemaps ──');
write('sitemap-pages.xml',   generateSitemapPages());
write('sitemap-privacy.xml', generateSitemapPrivacy());
write('sitemap-images.xml',  generateSitemapImages());
write('sitemap-index.xml',   generateSitemapIndex());
// Keep sitemap.xml as alias pointing browsers/old references to the index
write('sitemap.xml', xmlHeader() +
  `<!-- Este archivo es un alias. El sitemap principal es sitemap-index.xml -->\n` +
  `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  `  <sitemap><loc>${BASE}/sitemap-index.xml</loc></sitemap>\n` +
  `</sitemapindex>\n`);

console.log('\n── Otros archivos SEO ──');
write('robots.txt',                generateRobots());
write('.nojekyll',                 '');
write('404.html',                  generate404());
write('.well-known/security.txt',  generateSecurityTxt());

console.log('\nDone.\n');
