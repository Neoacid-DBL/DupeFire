'use strict';
// Registro de guías: textos de interfaz, guías antiguas (legacy) y guías nuevas (g-*.js)
const BASE = 'https://neoacid-dbl.github.io/DupeFire';
const DATE = '2026-10-31';
const DIRS = { es: 'guias', en: 'en/guides', pt: 'pt/guias' };
const langs = ['es', 'en', 'pt'];

const UI = {
  es: {
    locale: 'es_ES', home: 'Inicio', guides: 'Guías', download: 'Descargar', privacy: 'Privacidad', contact: 'Contacto',
    updated: 'Actualizado el 31 de octubre de 2026', minRead: 'min de lectura', shortAnswer: 'Respuesta corta',
    inGuide: 'En esta guía', faq: 'Preguntas frecuentes', readOn: 'Sigue leyendo', onPlay: 'En Google Play', getFree: 'Descargar gratis',
    ctaNote: 'Gratis · sin cuenta · 100% local. Con anuncios; DupeFire Pro (pago único) los quita.',
    ogAlt: 'DupeFire — Borra fotos duplicadas en tu Android. 100% local, gratis.',
    indexTitle: 'Guías para liberar espacio en Android', indexH1: 'Haz sitio en tu móvil, <span class="em">sin miedo</span>',
    indexLead: 'Guías paso a paso para recuperar almacenamiento en Android sin borrar nada que te importe.',
    indexDesc: 'Guías prácticas para liberar espacio en Android: fotos duplicadas, fotos borrosas, WhatsApp, compresión de fotos y más.',
  },
  en: {
    locale: 'en_US', home: 'Home', guides: 'Guides', download: 'Download', privacy: 'Privacy', contact: 'Contact',
    updated: 'Updated October 31, 2026', minRead: 'min read', shortAnswer: 'Short answer',
    inGuide: 'In this guide', faq: 'FAQ', readOn: 'Keep reading', onPlay: 'On Google Play', getFree: 'Get it free',
    ctaNote: 'Free · no account · 100% on-device. Ad-supported; DupeFire Pro (one-time purchase) removes the ads.',
    ogAlt: 'DupeFire — Delete duplicate photos on your Android. 100% on-device, free.',
    indexTitle: 'Guides to free up space on Android', indexH1: 'Make room on your phone, <span class="em">without the fear</span>',
    indexLead: 'Step-by-step guides to getting storage back on Android without deleting anything you care about.',
    indexDesc: 'Practical guides to free up space on Android: duplicate photos, blurry photos, WhatsApp, photo compression and more.',
  },
  pt: {
    locale: 'pt_BR', home: 'Início', guides: 'Guias', download: 'Baixar', privacy: 'Privacidade', contact: 'Contato',
    updated: 'Atualizado em 31 de outubro de 2026', minRead: 'min de leitura', shortAnswer: 'Resposta curta',
    inGuide: 'Neste guia', faq: 'Perguntas frequentes', readOn: 'Continue lendo', onPlay: 'No Google Play', getFree: 'Baixar grátis',
    ctaNote: 'Grátis · sem conta · 100% local. Com anúncios; o DupeFire Pro (pagamento único) os remove.',
    ogAlt: 'DupeFire — Apague fotos duplicadas no Android. 100% no dispositivo, grátis.',
    indexTitle: 'Guias para liberar espaço no Android', indexH1: 'Abra espaço no seu celular, <span class="em">sem medo</span>',
    indexLead: 'Guias passo a passo para recuperar armazenamento no Android sem apagar nada que importe.',
    indexDesc: 'Guias práticos para liberar espaço no Android: fotos duplicadas, fotos desfocadas, WhatsApp, compressão de fotos e mais.',
  },
};

const legacy = [
  { id: 'storage-full', legacy: true,
    slugs: { es: 'almacenamiento-lleno-android', en: 'android-storage-full' },
    titles: { es: 'Almacenamiento lleno en Android: qué ocupa espacio y cómo liberarlo', en: 'Android storage full? What\'s using space and how to free it' },
    descs: { es: 'Qué mirar primero y en qué orden limpiar: duplicados, WhatsApp, vídeos, capturas, caché y apps.', en: 'What to check first and what order to clean in: duplicates, WhatsApp, videos, screenshots, cache and apps.' } },
  { id: 'whatsapp-dups', legacy: true,
    slugs: { es: 'borrar-fotos-duplicadas-whatsapp', en: 'delete-duplicate-whatsapp-photos' },
    titles: { es: 'Cómo borrar las fotos duplicadas de WhatsApp', en: 'How to delete duplicate WhatsApp photos' },
    descs: { es: 'Por qué WhatsApp repite tus fotos, dónde las guarda y cómo borrarlas sin perder las buenas.', en: 'Why WhatsApp repeats your photos, where it stores them, and how to delete them without losing the good ones.' } },
];

const fs = require('fs'), path = require('path');
const files = fs.readdirSync(__dirname).filter(f => /^g-.*\.js$/.test(f)).sort();
const added = files.map(f => require('./' + f));
const guides = [...added, ...legacy];
const byId = {};
guides.forEach(g => {
  byId[g.id] = g;
  if (!g.legacy) {
    g.titles = {}; g.descs = {};
    langs.forEach(l => { g.titles[l] = g.content[l].indexTitle; g.descs[l] = g.content[l].indexDesc; });
  }
});

module.exports = { BASE, DATE, DIRS, langs, indexLangs: langs, UI, guides, byId };
