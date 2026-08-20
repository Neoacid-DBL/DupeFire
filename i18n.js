// DupeFire i18n strings
// Languages: es, en, de, fr, hi, ja, zh, ar, pt
window.DF_I18N = {
  es: {
    dir: 'ltr',
    name: 'Español',
    flag: '🇪🇸',
    nav: { features: 'Funciones', cleanup: 'Smart Cleanup', privacy: 'Privacidad', download: 'Descargar' },
    hero: {
      eyebrow: '01 · Android · Gratis',
      titleA: 'Quema tus',
      titleB: 'duplicados.',
      titleC: 'Recupera tu espacio.',
      sub: 'DupeFire detecta y elimina fotos, vídeos y documentos duplicados en tu Android — y ahora también fotos borrosas, capturas de pantalla y archivos gigantes. Todo el análisis ocurre en tu dispositivo — nada sube a la nube.',
      cta: 'Descargar gratis',
      ctaSub: 'En Google Play',
      chips: ['Android 8+', 'Sin cuenta', '100% local', '11 idiomas']
    },
    stats: {
      label: 'Lo que un usuario medio recupera',
      a: { num: '847', unit: 'MB', cap: 'liberados de media' },
      b: { num: '47', unit: 'grupos', cap: 'duplicados encontrados' },
      c: { num: '12 480', unit: 'archivos', cap: 'escaneados en 4 s' },
      d: { num: '0', unit: 'bytes', cap: 'enviados a la nube' }
    },
    showcase: {
      eyebrow: '02 · Cómo funciona',
      title: 'Tres pasos. Cuatro segundos. Adiós duplicados.',
      sub: 'Escanea, revisa, elimina. Sin asistentes ni cuentas.',
      steps: [
        { kicker: 'Paso 1', title: 'Escanea', body: 'Hash optimizado que compara miles de archivos en segundos.' },
        { kicker: 'Paso 2', title: 'Revisa', body: 'Agrupa duplicados visualmente, con filtros por tipo de archivo. Tú eliges qué conservar.' },
        { kicker: 'Paso 3', title: 'Libera', body: 'Eliminación segura con previsualización. Sin sorpresas.' }
      ],
      phone: {
        statusBar: 'DupeFire',
        scanning: 'Escaneando…',
        progress: '12 480 archivos',
        filters: ['Todo', 'Fotos', 'Vídeos', 'Docs'],
        groupTitle: 'Grupo 04 · IMG_2387',
        groupSub: '3 copias · 12.4 MB',
        keep: 'Conservar',
        delete: 'Eliminar',
        toast: '847 MB liberados',
        toastSub: 'Tu teléfono respira mejor'
      }
    },
    cleanup: {
      eyebrow: '03 · Smart Cleanup',
      badge: 'Nuevo en v1.0.2',
      title: 'Limpieza inteligente, más allá de los duplicados.',
      sub: 'DupeFire ahora también encuentra el desorden que no es un duplicado: fotos borrosas, capturas olvidadas, media de mensajería y los archivos que más pesan.',
      items: [
        { label: 'Nuevo', title: 'Fotos borrosas', body: 'Detecta automáticamente fotos movidas o desenfocadas analizando su nitidez, y te sugiere eliminarlas.' },
        { label: 'Nuevo', title: 'Capturas de pantalla', body: 'Identifica las capturas acumuladas en tu galería para limpiarlas en un toque.' },
        { label: 'Mensajería', title: 'WhatsApp y Telegram', body: 'Agrupa las fotos y vídeos descargados por tus apps de mensajería, la fuente nº 1 de desorden.' },
        { label: 'Espacio', title: 'Archivos grandes', body: 'Localiza los archivos que más espacio ocupan en tu almacenamiento, ordenados por tamaño.' }
      ],
      note: 'Smart Cleanup analiza resolución, fecha y tamaño para conservar la mejor copia de cada grupo y marcar el resto — sin trabajo manual.'
    },
    features: {
      eyebrow: '04 · Funciones',
      title: 'Todo lo que necesita un teléfono saturado.',
      items: [
        { icon: 'image',     label: 'FOTOS',      title: 'Duplicados exactos y similares', body: 'Encuentra copias byte a byte y fotos visualmente similares mediante hash perceptual — aunque estén recortadas o editadas.' },
        { icon: 'video',     label: 'VÍDEOS',     title: 'Detección de vídeos duplicados', body: 'Localiza vídeos repetidos por contenido, no solo por nombre de archivo.' },
        { icon: 'file-text', label: 'DOCUMENTOS', title: 'Documentos duplicados',          body: 'Detecta PDFs, Word, Excel, PowerPoint y archivos de texto repetidos en tu almacenamiento.' },
        { icon: 'archive',   label: 'COMPRESIÓN', title: 'Compresor de imágenes y vídeo',  body: 'Comprime JPEG en tres niveles de calidad y recodifica vídeos a 1080p, 720p o 480p. Los originales nunca se modifican.' },
        { icon: 'chart',     label: 'IMPACTO',    title: 'Panel de impacto',               body: 'Consulta cuánto espacio has liberado en todas tus sesiones: escaneos, grupos, archivos eliminados y comprimidos.' },
        { icon: 'shield',    label: 'PRIVACIDAD', title: '100% local y privado',           body: 'Ningún archivo sale de tu dispositivo. Sin nube, sin cuenta, sin subidas.' }
      ]
    },
    privacy: {
      eyebrow: '05 · Privacidad',
      title: 'Tu privacidad. Nuestra prioridad.',
      sub: 'DupeFire no recopila el contenido de tus archivos ni los envía a ningún servidor. Toda la magia ocurre en tu propio teléfono.',
      checks: [
        'Sin cuenta de usuario',
        'Sin registro',
        'Sin subida de archivos',
        'Sin tracking de ubicación',
        'Análisis 100% offline',
        'Código auditable'
      ],
      cta: 'Leer la política completa →'
    },
    cta: {
      eyebrow: '06 · Descarga',
      title: 'Listo para hacer sitio.',
      sub: 'Disponible en Google Play para Android 8 y superior. Gratis y en 11 idiomas.',
      btn: 'Descargar en Google Play',
      btnSub: 'Compatible con Android 8.0+'
    },
    footer: {
      tagline: 'Burn your duplicates. Free your space.',
      copy: '© 2026 DupeFire · Daniel Barea',
      links: ['Privacidad', 'Contacto', 'Google Play']
    }
  },

  en: {
    dir: 'ltr', name: 'English', flag: '🇬🇧',
    nav: { features: 'Features', cleanup: 'Smart Cleanup', privacy: 'Privacy', download: 'Download' },
    hero: {
      eyebrow: '01 · Android · Free',
      titleA: 'Burn your',
      titleB: 'duplicates.',
      titleC: 'Reclaim your space.',
      sub: 'DupeFire finds and removes duplicate photos, videos and documents on your Android — and now blurry photos, screenshots and oversized files too. Everything is processed on-device — nothing uploaded to the cloud.',
      cta: 'Download free', ctaSub: 'On Google Play',
      chips: ['Android 8+', 'No account', '100% on-device', '11 languages']
    },
    stats: {
      label: 'What the average user reclaims',
      a: { num: '847', unit: 'MB', cap: 'freed on average' },
      b: { num: '47', unit: 'groups', cap: 'duplicates found' },
      c: { num: '12,480', unit: 'files', cap: 'scanned in 4 s' },
      d: { num: '0', unit: 'bytes', cap: 'sent to the cloud' }
    },
    showcase: {
      eyebrow: '02 · How it works',
      title: 'Three steps. Four seconds. Goodbye duplicates.',
      sub: 'Scan, review, delete. No assistants, no accounts.',
      steps: [
        { kicker: 'Step 1', title: 'Scan',   body: 'Optimized hash compares thousands of files in seconds.' },
        { kicker: 'Step 2', title: 'Review', body: 'Duplicates grouped visually, with file-type filters. You choose what to keep.' },
        { kicker: 'Step 3', title: 'Free',   body: 'Safe deletion with preview. No surprises.' }
      ],
      phone: {
        statusBar: 'DupeFire',
        scanning: 'Scanning…',
        progress: '12,480 files',
        filters: ['All', 'Photos', 'Videos', 'Docs'],
        groupTitle: 'Group 04 · IMG_2387',
        groupSub: '3 copies · 12.4 MB',
        keep: 'Keep',
        delete: 'Delete',
        toast: '847 MB freed',
        toastSub: 'Your phone breathes again'
      }
    },
    cleanup: {
      eyebrow: '03 · Smart Cleanup',
      badge: 'New in v1.0.2',
      title: 'Smart cleanup, beyond duplicates.',
      sub: 'DupeFire now also finds the clutter that isn\'t a duplicate: blurry photos, forgotten screenshots, messenger media and your heaviest files.',
      items: [
        { label: 'New', title: 'Blurry photos', body: 'Automatically detects shaky or out-of-focus photos by analyzing sharpness, and suggests removing them.' },
        { label: 'New', title: 'Screenshots', body: 'Identifies the screenshots piling up in your gallery so you can clear them in one tap.' },
        { label: 'Messengers', title: 'WhatsApp & Telegram', body: 'Groups the photos and videos downloaded by your messaging apps — the #1 source of clutter.' },
        { label: 'Space', title: 'Large files', body: 'Finds the files eating the most storage, sorted by size.' }
      ],
      note: 'Smart Cleanup analyzes resolution, date and size to keep the best copy in each group and flag the rest — no manual work.'
    },
    features: {
      eyebrow: '04 · Features',
      title: 'Everything a crowded phone needs.',
      items: [
        { icon: 'image',     label: 'PHOTOS',     title: 'Exact & similar duplicates',   body: 'Finds byte-for-byte copies and visually similar photos via perceptual hashing — even if cropped or edited.' },
        { icon: 'video',     label: 'VIDEOS',     title: 'Duplicate video detection',    body: 'Locates repeated videos by content, not just by file name.' },
        { icon: 'file-text', label: 'DOCUMENTS',  title: 'Duplicate documents',          body: 'Detects duplicated PDFs, Word, Excel, PowerPoint and plain-text files across your storage.' },
        { icon: 'archive',   label: 'COMPRESS',   title: 'Image & video compressor',     body: 'Compresses JPEGs at three quality levels and re-encodes videos to 1080p, 720p or 480p. Originals are never touched.' },
        { icon: 'chart',     label: 'IMPACT',     title: 'Impact dashboard',             body: 'See how much space you\'ve freed across sessions: scans, groups, deleted and compressed files.' },
        { icon: 'shield',    label: 'PRIVACY',    title: '100% local & private',         body: 'No file ever leaves your device. No cloud, no account, no uploads.' }
      ]
    },
    privacy: {
      eyebrow: '05 · Privacy',
      title: 'Your privacy. Our priority.',
      sub: 'DupeFire does not collect your file contents or send them anywhere. All the magic happens on your own phone.',
      checks: ['No user account', 'No registration', 'No file uploads', 'No location tracking', '100% offline analysis', 'Auditable code'],
      cta: 'Read the full policy →'
    },
    cta: {
      eyebrow: '06 · Download',
      title: 'Ready to make room.',
      sub: 'Available on Google Play for Android 8 and up. Free, in 11 languages.',
      btn: 'Get it on Google Play',
      btnSub: 'Compatible with Android 8.0+'
    },
    footer: { tagline: 'Burn your duplicates. Free your space.', copy: '© 2026 DupeFire · Daniel Barea', links: ['Privacy', 'Contact', 'Google Play'] }
  },

  de: {
    dir: 'ltr', name: 'Deutsch', flag: '🇩🇪',
    nav: { features: 'Funktionen', cleanup: 'Smart Cleanup', privacy: 'Datenschutz', download: 'Download' },
    hero: {
      eyebrow: '01 · Android · Kostenlos',
      titleA: 'Verbrenne deine',
      titleB: 'Duplikate.',
      titleC: 'Hol dir Speicher zurück.',
      sub: 'DupeFire findet und entfernt doppelte Fotos, Videos und Dokumente auf deinem Android — und jetzt auch unscharfe Fotos, Screenshots und riesige Dateien. Alles lokal — nichts geht in die Cloud.',
      cta: 'Gratis laden', ctaSub: 'Bei Google Play',
      chips: ['Android 8+', 'Kein Konto', '100% lokal', '11 Sprachen']
    },
    stats: {
      label: 'Was Nutzer im Schnitt freigeben',
      a: { num: '847', unit: 'MB', cap: 'durchschnittlich frei' },
      b: { num: '47', unit: 'Gruppen', cap: 'Duplikate gefunden' },
      c: { num: '12 480', unit: 'Dateien', cap: 'in 4 s gescannt' },
      d: { num: '0', unit: 'Bytes', cap: 'in die Cloud gesendet' }
    },
    showcase: {
      eyebrow: '02 · So funktioniert es',
      title: 'Drei Schritte. Vier Sekunden. Tschüss Duplikate.',
      sub: 'Scannen, prüfen, löschen. Ohne Assistenten oder Konto.',
      steps: [
        { kicker: 'Schritt 1', title: 'Scannen', body: 'Optimierter Hash vergleicht tausende Dateien in Sekunden.' },
        { kicker: 'Schritt 2', title: 'Prüfen',  body: 'Duplikate visuell gruppiert, mit Filtern nach Dateityp. Du entscheidest.' },
        { kicker: 'Schritt 3', title: 'Befreien', body: 'Sicheres Löschen mit Vorschau. Keine Überraschungen.' }
      ],
      phone: {
        statusBar: 'DupeFire',
        scanning: 'Scannt…', progress: '12 480 Dateien',
        filters: ['Alle', 'Fotos', 'Videos', 'Docs'],
        groupTitle: 'Gruppe 04 · IMG_2387',
        groupSub: '3 Kopien · 12.4 MB',
        keep: 'Behalten', delete: 'Löschen',
        toast: '847 MB befreit', toastSub: 'Dein Telefon atmet auf'
      }
    },
    cleanup: {
      eyebrow: '03 · Smart Cleanup',
      badge: 'Neu in v1.0.2',
      title: 'Intelligente Bereinigung, über Duplikate hinaus.',
      sub: 'DupeFire findet jetzt auch das Chaos, das kein Duplikat ist: unscharfe Fotos, vergessene Screenshots, Messenger-Medien und deine größten Dateien.',
      items: [
        { label: 'Neu', title: 'Unscharfe Fotos', body: 'Erkennt verwackelte oder unscharfe Fotos automatisch per Schärfeanalyse und schlägt vor, sie zu entfernen.' },
        { label: 'Neu', title: 'Screenshots', body: 'Identifiziert die Screenshots, die sich in deiner Galerie stapeln — Aufräumen mit einem Tipp.' },
        { label: 'Messenger', title: 'WhatsApp & Telegram', body: 'Gruppiert Fotos und Videos aus deinen Messaging-Apps — die Nr.-1-Quelle für Datenmüll.' },
        { label: 'Speicher', title: 'Große Dateien', body: 'Findet die Dateien, die am meisten Speicher fressen, sortiert nach Größe.' }
      ],
      note: 'Smart Cleanup analysiert Auflösung, Datum und Größe, behält die beste Kopie jeder Gruppe und markiert den Rest — ohne Handarbeit.'
    },
    features: {
      eyebrow: '04 · Funktionen',
      title: 'Alles für ein überfülltes Telefon.',
      items: [
        { icon: 'image',     label: 'FOTOS',       title: 'Exakte & ähnliche Duplikate',  body: 'Findet Byte-für-Byte-Kopien und visuell ähnliche Fotos per Perceptual Hashing — auch beschnitten oder bearbeitet.' },
        { icon: 'video',     label: 'VIDEOS',      title: 'Doppelte Videos erkennen',     body: 'Findet wiederholte Videos anhand des Inhalts, nicht nur des Dateinamens.' },
        { icon: 'file-text', label: 'DOKUMENTE',   title: 'Doppelte Dokumente',           body: 'Erkennt doppelte PDFs, Word-, Excel-, PowerPoint- und Textdateien.' },
        { icon: 'archive',   label: 'KOMPRESSION', title: 'Bild- & Videokompressor',      body: 'Komprimiert JPEGs in drei Qualitätsstufen und kodiert Videos auf 1080p, 720p oder 480p um. Originale bleiben unberührt.' },
        { icon: 'chart',     label: 'BILANZ',      title: 'Impact-Dashboard',             body: 'Sieh, wie viel Speicher du über alle Sitzungen freigegeben hast: Scans, Gruppen, gelöschte und komprimierte Dateien.' },
        { icon: 'shield',    label: 'DATENSCHUTZ', title: '100% lokal & privat',          body: 'Keine Datei verlässt dein Gerät. Keine Cloud, kein Konto, kein Upload.' }
      ]
    },
    privacy: {
      eyebrow: '05 · Datenschutz',
      title: 'Deine Privatsphäre. Unsere Priorität.',
      sub: 'DupeFire erfasst keine Dateiinhalte und sendet nichts an Server. Die Verarbeitung passiert vollständig auf deinem Telefon.',
      checks: ['Kein Benutzerkonto', 'Keine Registrierung', 'Kein Datei-Upload', 'Keine Standortverfolgung', '100% Offline-Analyse', 'Quellcode prüfbar'],
      cta: 'Vollständige Richtlinie lesen →'
    },
    cta: {
      eyebrow: '06 · Download',
      title: 'Bereit Platz zu schaffen.',
      sub: 'Verfügbar bei Google Play für Android 8 und höher. Kostenlos, in 11 Sprachen.',
      btn: 'Laden bei Google Play', btnSub: 'Kompatibel mit Android 8.0+'
    },
    footer: { tagline: 'Burn your duplicates. Free your space.', copy: '© 2026 DupeFire · Daniel Barea', links: ['Datenschutz', 'Kontakt', 'Google Play'] }
  },

  fr: {
    dir: 'ltr', name: 'Français', flag: '🇫🇷',
    nav: { features: 'Fonctions', cleanup: 'Smart Cleanup', privacy: 'Confidentialité', download: 'Télécharger' },
    hero: {
      eyebrow: '01 · Android · Gratuit',
      titleA: 'Brûle tes',
      titleB: 'doublons.',
      titleC: 'Récupère ton espace.',
      sub: 'DupeFire trouve et supprime les photos, vidéos et documents en double sur ton Android — et désormais aussi les photos floues, les captures d\'écran et les fichiers volumineux. Tout est traité localement — rien n\'est envoyé dans le cloud.',
      cta: 'Télécharger', ctaSub: 'Sur Google Play',
      chips: ['Android 8+', 'Sans compte', '100% local', '11 langues']
    },
    stats: {
      label: 'Ce qu\'un utilisateur moyen récupère',
      a: { num: '847', unit: 'Mo', cap: 'libérés en moyenne' },
      b: { num: '47', unit: 'groupes', cap: 'doublons trouvés' },
      c: { num: '12 480', unit: 'fichiers', cap: 'analysés en 4 s' },
      d: { num: '0', unit: 'octets', cap: 'envoyés au cloud' }
    },
    showcase: {
      eyebrow: '02 · Comment ça marche',
      title: 'Trois étapes. Quatre secondes. Adieu doublons.',
      sub: 'Scanner, vérifier, supprimer. Sans assistants ni comptes.',
      steps: [
        { kicker: 'Étape 1', title: 'Scanner',   body: 'Hash optimisé qui compare des milliers de fichiers en secondes.' },
        { kicker: 'Étape 2', title: 'Vérifier',  body: 'Doublons groupés visuellement, avec filtres par type de fichier. Tu choisis.' },
        { kicker: 'Étape 3', title: 'Libérer',   body: 'Suppression sûre avec aperçu. Sans surprise.' }
      ],
      phone: {
        statusBar: 'DupeFire',
        scanning: 'Analyse…', progress: '12 480 fichiers',
        filters: ['Tout', 'Photos', 'Vidéos', 'Docs'],
        groupTitle: 'Groupe 04 · IMG_2387',
        groupSub: '3 copies · 12,4 Mo',
        keep: 'Garder', delete: 'Supprimer',
        toast: '847 Mo libérés', toastSub: 'Ton téléphone respire'
      }
    },
    cleanup: {
      eyebrow: '03 · Smart Cleanup',
      badge: 'Nouveau en v1.0.2',
      title: 'Nettoyage intelligent, au-delà des doublons.',
      sub: 'DupeFire trouve désormais aussi le désordre qui n\'est pas un doublon : photos floues, captures oubliées, médias de messagerie et fichiers les plus lourds.',
      items: [
        { label: 'Nouveau', title: 'Photos floues', body: 'Détecte automatiquement les photos bougées ou floues en analysant leur netteté, et suggère de les supprimer.' },
        { label: 'Nouveau', title: 'Captures d\'écran', body: 'Identifie les captures qui s\'accumulent dans ta galerie pour les nettoyer en un geste.' },
        { label: 'Messagerie', title: 'WhatsApp & Telegram', body: 'Regroupe les photos et vidéos téléchargées par tes applis de messagerie — la source n°1 de désordre.' },
        { label: 'Espace', title: 'Gros fichiers', body: 'Trouve les fichiers qui occupent le plus d\'espace, triés par taille.' }
      ],
      note: 'Smart Cleanup analyse résolution, date et taille pour garder la meilleure copie de chaque groupe et marquer le reste — sans travail manuel.'
    },
    features: {
      eyebrow: '04 · Fonctions',
      title: 'Tout ce qu\'il faut à un téléphone saturé.',
      items: [
        { icon: 'image',     label: 'PHOTOS',     title: 'Doublons exacts & similaires',   body: 'Trouve les copies exactes et les photos visuellement similaires par hash perceptuel — même recadrées ou retouchées.' },
        { icon: 'video',     label: 'VIDÉOS',     title: 'Détection de vidéos en double',  body: 'Localise les vidéos répétées par leur contenu, pas seulement par leur nom.' },
        { icon: 'file-text', label: 'DOCUMENTS',  title: 'Documents en double',            body: 'Détecte les PDF, Word, Excel, PowerPoint et fichiers texte en double.' },
        { icon: 'archive',   label: 'COMPRESSION', title: 'Compresseur d\'images & vidéo', body: 'Compresse les JPEG sur trois niveaux de qualité et ré-encode les vidéos en 1080p, 720p ou 480p. Les originaux restent intacts.' },
        { icon: 'chart',     label: 'IMPACT',     title: 'Tableau de bord d\'impact',      body: 'Consulte l\'espace libéré sur toutes tes sessions : analyses, groupes, fichiers supprimés et compressés.' },
        { icon: 'shield',    label: 'PRIVÉ',      title: '100% local & privé',             body: 'Aucun fichier ne quitte ton appareil. Sans cloud, sans compte, sans envoi.' }
      ]
    },
    privacy: {
      eyebrow: '05 · Confidentialité',
      title: 'Ta confidentialité. Notre priorité.',
      sub: 'DupeFire ne collecte pas le contenu de tes fichiers et n\'envoie rien. Toute la magie se passe sur ton téléphone.',
      checks: ['Sans compte', 'Sans inscription', 'Sans téléchargement', 'Sans suivi de localisation', 'Analyse 100% hors ligne', 'Code auditable'],
      cta: 'Lire la politique complète →'
    },
    cta: { eyebrow: '06 · Téléchargement', title: 'Prêt à faire de la place.', sub: 'Disponible sur Google Play pour Android 8 et plus. Gratuit, en 11 langues.', btn: 'Télécharger sur Google Play', btnSub: 'Compatible Android 8.0+' },
    footer: { tagline: 'Burn your duplicates. Free your space.', copy: '© 2026 DupeFire · Daniel Barea', links: ['Confidentialité', 'Contact', 'Google Play'] }
  },

  hi: {
    dir: 'ltr', name: 'हिन्दी', flag: '🇮🇳',
    nav: { features: 'विशेषताएं', cleanup: 'स्मार्ट क्लीनअप', privacy: 'गोपनीयता', download: 'डाउनलोड' },
    hero: {
      eyebrow: '01 · Android · मुफ़्त',
      titleA: 'अपने डुप्लीकेट',
      titleB: 'जलाओ।',
      titleC: 'जगह वापस पाओ।',
      sub: 'DupeFire आपके Android पर डुप्लीकेट फ़ोटो, वीडियो और दस्तावेज़ ढूंढता और हटाता है — और अब धुंधली फ़ोटो, स्क्रीनशॉट और बड़ी फ़ाइलें भी। सब कुछ डिवाइस पर — कुछ भी क्लाउड पर नहीं।',
      cta: 'मुफ़्त डाउनलोड', ctaSub: 'Google Play पर',
      chips: ['Android 8+', 'कोई खाता नहीं', '100% लोकल', '11 भाषाएं']
    },
    stats: {
      label: 'औसत उपयोगकर्ता कितना खाली करता है',
      a: { num: '847', unit: 'MB', cap: 'औसतन खाली' },
      b: { num: '47', unit: 'समूह', cap: 'डुप्लीकेट मिले' },
      c: { num: '12,480', unit: 'फ़ाइलें', cap: '4 सेकंड में स्कैन' },
      d: { num: '0', unit: 'बाइट्स', cap: 'क्लाउड पर भेजे' }
    },
    showcase: {
      eyebrow: '02 · यह कैसे काम करता है',
      title: 'तीन कदम। चार सेकंड। डुप्लीकेट से अलविदा।',
      sub: 'स्कैन करें, देखें, हटाएं। कोई सहायक या खाता नहीं।',
      steps: [
        { kicker: 'चरण 1', title: 'स्कैन', body: 'अनुकूलित हैश सेकंडों में हजारों फ़ाइलों की तुलना करता है।' },
        { kicker: 'चरण 2', title: 'समीक्षा', body: 'डुप्लीकेट दृश्य रूप से समूहित, फ़ाइल प्रकार फ़िल्टर के साथ। आप तय करें।' },
        { kicker: 'चरण 3', title: 'खाली', body: 'सुरक्षित हटाना, पूर्वावलोकन के साथ। कोई आश्चर्य नहीं।' }
      ],
      phone: {
        statusBar: 'DupeFire',
        scanning: 'स्कैन हो रहा है…', progress: '12,480 फ़ाइलें',
        filters: ['सभी', 'फ़ोटो', 'वीडियो', 'डॉक्स'],
        groupTitle: 'समूह 04 · IMG_2387',
        groupSub: '3 प्रतियां · 12.4 MB',
        keep: 'रखें', delete: 'हटाएं',
        toast: '847 MB खाली', toastSub: 'आपका फ़ोन बेहतर सांस लेता है'
      }
    },
    cleanup: {
      eyebrow: '03 · स्मार्ट क्लीनअप',
      badge: 'v1.0.2 में नया',
      title: 'स्मार्ट सफाई, डुप्लीकेट से आगे।',
      sub: 'DupeFire अब वह अव्यवस्था भी ढूंढता है जो डुप्लीकेट नहीं है: धुंधली फ़ोटो, भूले हुए स्क्रीनशॉट, मैसेजिंग मीडिया और सबसे भारी फ़ाइलें।',
      items: [
        { label: 'नया', title: 'धुंधली फ़ोटो', body: 'शार्पनेस का विश्लेषण करके हिली या धुंधली फ़ोटो अपने आप पहचानता है और हटाने का सुझाव देता है।' },
        { label: 'नया', title: 'स्क्रीनशॉट', body: 'गैलरी में जमा स्क्रीनशॉट पहचानता है ताकि एक टैप में साफ़ कर सकें।' },
        { label: 'मैसेजिंग', title: 'WhatsApp और Telegram', body: 'मैसेजिंग ऐप्स से डाउनलोड हुई फ़ोटो और वीडियो समूहित करता है — अव्यवस्था का नंबर 1 स्रोत।' },
        { label: 'जगह', title: 'बड़ी फ़ाइलें', body: 'सबसे ज़्यादा जगह लेने वाली फ़ाइलें ढूंढता है, आकार के अनुसार क्रमबद्ध।' }
      ],
      note: 'स्मार्ट क्लीनअप रिज़ॉल्यूशन, तारीख और आकार का विश्लेषण करके हर समूह की सबसे अच्छी प्रति रखता है और बाकी को चिह्नित करता है — बिना मैनुअल काम के।'
    },
    features: {
      eyebrow: '04 · विशेषताएं',
      title: 'भरे हुए फ़ोन को जो भी चाहिए।',
      items: [
        { icon: 'image',     label: 'फ़ोटो',      title: 'सटीक और समान डुप्लीकेट',     body: 'बाइट-दर-बाइट प्रतियां और परसेप्चुअल हैश से दृष्टिगत समान फ़ोटो ढूंढता है — क्रॉप या एडिट होने पर भी।' },
        { icon: 'video',     label: 'वीडियो',     title: 'डुप्लीकेट वीडियो पहचान',    body: 'दोहराए गए वीडियो सामग्री से पहचानता है, सिर्फ़ नाम से नहीं।' },
        { icon: 'file-text', label: 'दस्तावेज़',  title: 'डुप्लीकेट दस्तावेज़',       body: 'PDF, Word, Excel, PowerPoint और टेक्स्ट फ़ाइलों के डुप्लीकेट खोजता है।' },
        { icon: 'archive',   label: 'संपीड़न',    title: 'छवि और वीडियो कंप्रेसर',     body: 'JPEG को तीन गुणवत्ता स्तरों में संपीड़ित करता है और वीडियो को 1080p, 720p या 480p में बदलता है। मूल फ़ाइलें कभी नहीं बदलतीं।' },
        { icon: 'chart',     label: 'प्रभाव',      title: 'इम्पैक्ट डैशबोर्ड',          body: 'देखें कि आपने कुल कितनी जगह खाली की: स्कैन, समूह, हटाई और संपीड़ित फ़ाइलें।' },
        { icon: 'shield',    label: 'गोपनीयता',   title: '100% स्थानीय और निजी',     body: 'कोई फ़ाइल आपके डिवाइस से बाहर नहीं जाती। न क्लाउड, न खाता, न अपलोड।' }
      ]
    },
    privacy: {
      eyebrow: '05 · गोपनीयता',
      title: 'आपकी गोपनीयता। हमारी प्राथमिकता।',
      sub: 'DupeFire आपकी फ़ाइलों की सामग्री एकत्र नहीं करता और न कहीं भेजता है। सब आपके फ़ोन पर होता है।',
      checks: ['कोई खाता नहीं', 'कोई पंजीकरण नहीं', 'कोई अपलोड नहीं', 'कोई स्थान ट्रैकिंग नहीं', '100% ऑफ़लाइन विश्लेषण', 'ऑडिट योग्य कोड'],
      cta: 'पूरी नीति पढ़ें →'
    },
    cta: { eyebrow: '06 · डाउनलोड', title: 'जगह बनाने के लिए तैयार।', sub: 'Android 8 और ऊपर के लिए Google Play पर उपलब्ध। मुफ़्त, 11 भाषाओं में।', btn: 'Google Play पर पाएं', btnSub: 'Android 8.0+ के साथ संगत' },
    footer: { tagline: 'Burn your duplicates. Free your space.', copy: '© 2026 DupeFire · Daniel Barea', links: ['गोपनीयता', 'संपर्क', 'Google Play'] }
  },

  ja: {
    dir: 'ltr', name: '日本語', flag: '🇯🇵',
    nav: { features: '機能', cleanup: 'スマートクリーンアップ', privacy: 'プライバシー', download: 'ダウンロード' },
    hero: {
      eyebrow: '01 · Android · 無料',
      titleA: '重複を、',
      titleB: '焼き払え。',
      titleC: 'スペースを取り戻す。',
      sub: 'DupeFire は Android 上の重複した写真・動画・ドキュメントを見つけて削除します。さらに、ぼやけた写真・スクリーンショット・大容量ファイルにも対応。すべての処理はデバイス上で完結し、クラウドへの送信はありません。',
      cta: '無料ダウンロード', ctaSub: 'Google Play で',
      chips: ['Android 8+', 'アカウント不要', '100% 端末内処理', '11 言語']
    },
    stats: {
      label: '平均的なユーザーが取り戻す量',
      a: { num: '847', unit: 'MB', cap: '平均開放量' },
      b: { num: '47', unit: 'グループ', cap: '重複を検出' },
      c: { num: '12,480', unit: 'ファイル', cap: '4 秒でスキャン' },
      d: { num: '0', unit: 'バイト', cap: 'クラウド送信' }
    },
    showcase: {
      eyebrow: '02 · 仕組み',
      title: '3 ステップ。4 秒。重複とお別れ。',
      sub: 'スキャン、確認、削除。アシスタントもアカウントも不要。',
      steps: [
        { kicker: 'ステップ 1', title: 'スキャン', body: '最適化されたハッシュで数千ファイルを数秒で比較。' },
        { kicker: 'ステップ 2', title: '確認',     body: '重複を視覚的にグループ化。ファイル種別フィルター付き。あなたが選びます。' },
        { kicker: 'ステップ 3', title: '解放',     body: 'プレビュー付きの安全な削除。意外なし。' }
      ],
      phone: {
        statusBar: 'DupeFire',
        scanning: 'スキャン中…', progress: '12,480 ファイル',
        filters: ['すべて', '写真', '動画', '文書'],
        groupTitle: 'グループ 04 · IMG_2387',
        groupSub: '3 コピー · 12.4 MB',
        keep: '保持', delete: '削除',
        toast: '847 MB 解放', toastSub: 'スマホが軽くなりました'
      }
    },
    cleanup: {
      eyebrow: '03 · スマートクリーンアップ',
      badge: 'v1.0.2 の新機能',
      title: '重複だけじゃない、賢いクリーンアップ。',
      sub: 'DupeFire は重複以外の不要データも見つけます：ぼやけた写真、忘れられたスクリーンショット、メッセージアプリのメディア、そして最も重いファイル。',
      items: [
        { label: '新機能', title: 'ぼやけた写真', body: 'シャープネスを解析して手ブレやピンボケ写真を自動検出し、削除を提案します。' },
        { label: '新機能', title: 'スクリーンショット', body: 'ギャラリーに溜まったスクリーンショットを識別し、ワンタップで整理。' },
        { label: 'メッセージ', title: 'WhatsApp・Telegram', body: 'メッセージアプリがダウンロードした写真や動画をまとめて表示 — 散らかりの最大の原因です。' },
        { label: '容量', title: '大容量ファイル', body: 'ストレージを最も圧迫しているファイルをサイズ順に表示。' }
      ],
      note: 'スマートクリーンアップは解像度・日付・サイズを解析し、各グループで最良の 1 枚を残して残りをマーク — 手作業は不要です。'
    },
    features: {
      eyebrow: '04 · 機能',
      title: '混雑したスマホに必要なすべて。',
      items: [
        { icon: 'image',     label: '写真',     title: '完全一致＆類似の重複検出',   body: 'バイト単位の完全一致に加え、知覚ハッシュで視覚的に似た写真も検出。切り抜きや編集後でも見つけます。' },
        { icon: 'video',     label: '動画',     title: '重複動画の検出',         body: 'ファイル名ではなく内容で重複動画を特定します。' },
        { icon: 'file-text', label: '文書',     title: '重複ドキュメント',       body: 'PDF、Word、Excel、PowerPoint、テキストファイルの重複を検出。' },
        { icon: 'archive',   label: '圧縮',     title: '画像・動画コンプレッサー', body: 'JPEG を 3 段階の品質で圧縮し、動画を 1080p / 720p / 480p に再エンコード。元のファイルは変更されません。' },
        { icon: 'chart',     label: '実績',     title: 'インパクトダッシュボード', body: 'これまでに解放した容量を確認：スキャン数、グループ数、削除・圧縮したファイル数。' },
        { icon: 'shield',    label: 'プライバシー', title: '100% ローカル＆プライベート', body: 'ファイルが端末の外に出ることはありません。クラウドなし、アカウントなし、アップロードなし。' }
      ]
    },
    privacy: {
      eyebrow: '05 · プライバシー',
      title: 'あなたのプライバシー。私たちの優先事項。',
      sub: 'DupeFire はファイルの内容を収集したり、どこかへ送信したりしません。すべてはあなたのスマホで完結します。',
      checks: ['アカウント不要', '登録不要', 'アップロードなし', '位置追跡なし', '100% オフライン解析', '監査可能なコード'],
      cta: 'プライバシーポリシー全文 →'
    },
    cta: { eyebrow: '06 · ダウンロード', title: 'スペースを空ける準備は完了。', sub: 'Android 8 以上対応、Google Play で配信中。無料・11 言語対応。', btn: 'Google Play で入手', btnSub: 'Android 8.0+ 対応' },
    footer: { tagline: 'Burn your duplicates. Free your space.', copy: '© 2026 DupeFire · Daniel Barea', links: ['プライバシー', 'お問い合わせ', 'Google Play'] }
  },

  zh: {
    dir: 'ltr', name: '中文', flag: '🇨🇳',
    nav: { features: '功能', cleanup: '智能清理', privacy: '隐私', download: '下载' },
    hero: {
      eyebrow: '01 · Android · 免费',
      titleA: '烧掉你的',
      titleB: '重复文件。',
      titleC: '夺回你的空间。',
      sub: 'DupeFire 在你的 Android 上查找并删除重复的照片、视频和文档——现在还能识别模糊照片、截图和大文件。一切都在设备上处理，不上传任何内容到云端。',
      cta: '免费下载', ctaSub: '在 Google Play',
      chips: ['Android 8+', '无需账户', '100% 本地', '11 种语言']
    },
    stats: {
      label: '普通用户平均腾出',
      a: { num: '847', unit: 'MB', cap: '平均释放' },
      b: { num: '47', unit: '组', cap: '发现重复' },
      c: { num: '12,480', unit: '文件', cap: '4 秒扫描' },
      d: { num: '0', unit: '字节', cap: '上传云端' }
    },
    showcase: {
      eyebrow: '02 · 工作方式',
      title: '三步。四秒。告别重复。',
      sub: '扫描、查看、删除。没有助理，无需账户。',
      steps: [
        { kicker: '第 1 步', title: '扫描', body: '优化哈希算法在数秒内比较数千文件。' },
        { kicker: '第 2 步', title: '查看', body: '重复项以可视化方式分组，支持按文件类型筛选，由你决定。' },
        { kicker: '第 3 步', title: '释放', body: '带预览的安全删除，没有惊喜。' }
      ],
      phone: {
        statusBar: 'DupeFire',
        scanning: '扫描中…', progress: '12,480 文件',
        filters: ['全部', '照片', '视频', '文档'],
        groupTitle: '组 04 · IMG_2387',
        groupSub: '3 份副本 · 12.4 MB',
        keep: '保留', delete: '删除',
        toast: '释放 847 MB', toastSub: '你的手机轻松多了'
      }
    },
    cleanup: {
      eyebrow: '03 · 智能清理',
      badge: 'v1.0.2 新功能',
      title: '智能清理，不止于重复文件。',
      sub: 'DupeFire 现在还能找到那些不是重复项的杂乱内容：模糊照片、被遗忘的截图、聊天应用媒体，以及占空间最大的文件。',
      items: [
        { label: '新', title: '模糊照片', body: '通过清晰度分析自动检测手抖或失焦的照片，并建议删除。' },
        { label: '新', title: '截图', body: '识别图库中堆积的截图，一键轻松清理。' },
        { label: '聊天应用', title: 'WhatsApp 和 Telegram', body: '汇总聊天应用下载的照片和视频——杂乱内容的头号来源。' },
        { label: '空间', title: '大文件', body: '按大小排序，找出最占存储空间的文件。' }
      ],
      note: '智能清理会分析分辨率、日期和大小，保留每组中最好的副本并标记其余项——无需手动操作。'
    },
    features: {
      eyebrow: '04 · 功能',
      title: '拥挤手机所需的一切。',
      items: [
        { icon: 'image',     label: '照片',   title: '完全相同与相似重复检测',   body: '既能找到逐字节相同的副本，也能通过感知哈希发现视觉上相似的照片——即使被裁剪或编辑过。' },
        { icon: 'video',     label: '视频',   title: '重复视频检测',   body: '按内容而非文件名识别重复视频。' },
        { icon: 'file-text', label: '文档',   title: '重复文档',       body: '检测重复的 PDF、Word、Excel、PowerPoint 和文本文件。' },
        { icon: 'archive',   label: '压缩',   title: '图片与视频压缩器', body: '以三种质量等级压缩 JPEG，并将视频重新编码为 1080p、720p 或 480p。原文件绝不修改。' },
        { icon: 'chart',     label: '成果',   title: '成果仪表板',     body: '查看你累计释放了多少空间：扫描次数、分组、已删除和已压缩的文件。' },
        { icon: 'shield',    label: '隐私',   title: '100% 本地且私密', body: '任何文件都不会离开你的设备。无云端、无账户、无上传。' }
      ]
    },
    privacy: {
      eyebrow: '05 · 隐私',
      title: '你的隐私。我们的优先。',
      sub: 'DupeFire 不会收集你的文件内容，也不会发送到任何地方。一切都在你的手机上完成。',
      checks: ['无需账户', '无需注册', '无文件上传', '无位置追踪', '100% 离线分析', '可审计代码'],
      cta: '阅读完整隐私政策 →'
    },
    cta: { eyebrow: '06 · 下载', title: '准备腾出空间。', sub: '可在 Google Play 上获取，适用于 Android 8 及以上。免费，支持 11 种语言。', btn: '从 Google Play 下载', btnSub: '兼容 Android 8.0+' },
    footer: { tagline: 'Burn your duplicates. Free your space.', copy: '© 2026 DupeFire · Daniel Barea', links: ['隐私', '联系', 'Google Play'] }
  },

  ar: {
    dir: 'rtl', name: 'العربية', flag: '🇸🇦',
    nav: { features: 'الميزات', cleanup: 'التنظيف الذكي', privacy: 'الخصوصية', download: 'تنزيل' },
    hero: {
      eyebrow: '01 · أندرويد · مجاني',
      titleA: 'احرق',
      titleB: 'مكرراتك.',
      titleC: 'استرجع مساحتك.',
      sub: 'يبحث DupeFire عن الصور ومقاطع الفيديو والمستندات المكررة على هاتف Android ويحذفها — والآن أيضًا الصور الضبابية ولقطات الشاشة والملفات الضخمة. كل شيء يُعالج محليًا — لا شيء يُرفع إلى السحابة.',
      cta: 'تنزيل مجاني', ctaSub: 'على Google Play',
      chips: ['Android 8+', 'بدون حساب', '100% محلي', '11 لغة']
    },
    stats: {
      label: 'ما يستعيده المستخدم العادي',
      a: { num: '847', unit: 'MB', cap: 'متوسط المساحة المحررة' },
      b: { num: '47', unit: 'مجموعة', cap: 'مكررات وُجدت' },
      c: { num: '12,480', unit: 'ملف', cap: 'مسح في 4 ثوان' },
      d: { num: '0', unit: 'بايت', cap: 'أُرسل إلى السحابة' }
    },
    showcase: {
      eyebrow: '02 · كيف يعمل',
      title: 'ثلاث خطوات. أربع ثوان. وداعًا للمكررات.',
      sub: 'افحص، راجع، احذف. بدون مساعدين أو حسابات.',
      steps: [
        { kicker: 'الخطوة 1', title: 'افحص',  body: 'تجزئة محسّنة تقارن آلاف الملفات في ثوان.' },
        { kicker: 'الخطوة 2', title: 'راجع',  body: 'تُجمع المكررات بصريًا مع فلاتر حسب نوع الملف. أنت تختار.' },
        { kicker: 'الخطوة 3', title: 'حرّر',  body: 'حذف آمن مع معاينة. بلا مفاجآت.' }
      ],
      phone: {
        statusBar: 'DupeFire',
        scanning: 'يجري الفحص…', progress: '12,480 ملف',
        filters: ['الكل', 'صور', 'فيديو', 'مستندات'],
        groupTitle: 'المجموعة 04 · IMG_2387',
        groupSub: '3 نسخ · 12.4 MB',
        keep: 'احتفظ', delete: 'احذف',
        toast: 'تم تحرير 847 MB', toastSub: 'هاتفك يتنفس الآن'
      }
    },
    cleanup: {
      eyebrow: '03 · التنظيف الذكي',
      badge: 'جديد في v1.0.2',
      title: 'تنظيف ذكي، يتجاوز المكررات.',
      sub: 'يعثر DupeFire الآن أيضًا على الفوضى التي ليست مكررات: الصور الضبابية، لقطات الشاشة المنسية، وسائط تطبيقات المراسلة، وأثقل ملفاتك.',
      items: [
        { label: 'جديد', title: 'الصور الضبابية', body: 'يكتشف تلقائيًا الصور المهتزة أو غير الواضحة بتحليل حدّتها ويقترح حذفها.' },
        { label: 'جديد', title: 'لقطات الشاشة', body: 'يتعرف على لقطات الشاشة المتراكمة في معرضك لتنظيفها بلمسة واحدة.' },
        { label: 'مراسلة', title: 'واتساب وتيليجرام', body: 'يجمع الصور والفيديوهات التي نزّلتها تطبيقات المراسلة — المصدر الأول للفوضى.' },
        { label: 'مساحة', title: 'الملفات الكبيرة', body: 'يعثر على الملفات الأكثر استهلاكًا للمساحة، مرتبة حسب الحجم.' }
      ],
      note: 'يحلل التنظيف الذكي الدقة والتاريخ والحجم ليحتفظ بأفضل نسخة في كل مجموعة ويحدد الباقي — دون أي عمل يدوي.'
    },
    features: {
      eyebrow: '04 · الميزات',
      title: 'كل ما يحتاجه هاتف مزدحم.',
      items: [
        { icon: 'image',     label: 'الصور',     title: 'مكررات مطابقة ومتشابهة',       body: 'يعثر على النسخ المطابقة بايتًا ببايت والصور المتشابهة بصريًا عبر التجزئة الإدراكية — حتى لو قُصّت أو عُدّلت.' },
        { icon: 'video',     label: 'الفيديو',   title: 'اكتشاف مقاطع الفيديو المكررة', body: 'يحدد الفيديوهات المكررة بالمحتوى، وليس باسم الملف فقط.' },
        { icon: 'file-text', label: 'المستندات', title: 'المستندات المكررة',            body: 'يكتشف ملفات PDF وWord وExcel وPowerPoint والنصوص المكررة.' },
        { icon: 'archive',   label: 'الضغط',     title: 'ضاغط الصور والفيديو',          body: 'يضغط JPEG بثلاثة مستويات جودة ويعيد ترميز الفيديو إلى 1080p أو 720p أو 480p. الملفات الأصلية لا تُمس أبدًا.' },
        { icon: 'chart',     label: 'الأثر',     title: 'لوحة الإنجازات',               body: 'اطّلع على المساحة التي حررتها عبر كل الجلسات: الفحوصات والمجموعات والملفات المحذوفة والمضغوطة.' },
        { icon: 'shield',    label: 'الخصوصية',  title: '100٪ محلي وخاص',              body: 'لا يغادر أي ملف جهازك. بلا سحابة، بلا حساب، بلا رفع.' }
      ]
    },
    privacy: {
      eyebrow: '05 · الخصوصية',
      title: 'خصوصيتك. أولويتنا.',
      sub: 'لا يجمع DupeFire محتوى ملفاتك ولا يرسلها إلى أي مكان. كل المعالجة تتم على هاتفك.',
      checks: ['بدون حساب', 'بدون تسجيل', 'بدون رفع ملفات', 'بدون تتبع الموقع', 'تحليل 100٪ بدون إنترنت', 'كود قابل للتدقيق'],
      cta: 'اقرأ سياسة الخصوصية الكاملة ←'
    },
    cta: { eyebrow: '06 · تنزيل', title: 'جاهز لإفساح المجال.', sub: 'متاح على Google Play لأجهزة Android 8 وأحدث. مجاني وبإحدى عشرة لغة.', btn: 'تنزيل من Google Play', btnSub: 'متوافق مع Android 8.0+' },
    footer: { tagline: 'Burn your duplicates. Free your space.', copy: '© 2026 DupeFire · Daniel Barea', links: ['الخصوصية', 'تواصل', 'Google Play'] }
  },

  pt: {
    dir: 'ltr', name: 'Português', flag: '🇧🇷',
    nav: { features: 'Funções', cleanup: 'Smart Cleanup', privacy: 'Privacidade', download: 'Baixar' },
    hero: {
      eyebrow: '01 · Android · Grátis',
      titleA: 'Queime suas',
      titleB: 'duplicatas.',
      titleC: 'Recupere seu espaço.',
      sub: 'O DupeFire encontra e remove fotos, vídeos e documentos duplicados no seu Android — e agora também fotos desfocadas, capturas de tela e arquivos gigantes. Tudo processado no dispositivo — nada vai para a nuvem.',
      cta: 'Baixar grátis', ctaSub: 'No Google Play',
      chips: ['Android 8+', 'Sem conta', '100% local', '11 idiomas']
    },
    stats: {
      label: 'O que o usuário médio recupera',
      a: { num: '847', unit: 'MB', cap: 'liberados em média' },
      b: { num: '47', unit: 'grupos', cap: 'duplicatas encontradas' },
      c: { num: '12.480', unit: 'arquivos', cap: 'analisados em 4 s' },
      d: { num: '0', unit: 'bytes', cap: 'enviados à nuvem' }
    },
    showcase: {
      eyebrow: '02 · Como funciona',
      title: 'Três passos. Quatro segundos. Adeus duplicatas.',
      sub: 'Analisar, revisar, excluir. Sem assistentes nem contas.',
      steps: [
        { kicker: 'Passo 1', title: 'Analisar', body: 'Hash otimizado compara milhares de arquivos em segundos.' },
        { kicker: 'Passo 2', title: 'Revisar',  body: 'Duplicatas agrupadas visualmente, com filtros por tipo de arquivo. Você decide.' },
        { kicker: 'Passo 3', title: 'Liberar',  body: 'Exclusão segura com prévia. Sem surpresas.' }
      ],
      phone: {
        statusBar: 'DupeFire',
        scanning: 'Analisando…', progress: '12.480 arquivos',
        filters: ['Tudo', 'Fotos', 'Vídeos', 'Docs'],
        groupTitle: 'Grupo 04 · IMG_2387',
        groupSub: '3 cópias · 12,4 MB',
        keep: 'Manter', delete: 'Excluir',
        toast: '847 MB liberados', toastSub: 'Seu celular respira melhor'
      }
    },
    cleanup: {
      eyebrow: '03 · Smart Cleanup',
      badge: 'Novo na v1.0.2',
      title: 'Limpeza inteligente, além das duplicatas.',
      sub: 'O DupeFire agora também encontra a bagunça que não é duplicata: fotos desfocadas, capturas esquecidas, mídia de mensageiros e seus arquivos mais pesados.',
      items: [
        { label: 'Novo', title: 'Fotos desfocadas', body: 'Detecta automaticamente fotos tremidas ou fora de foco analisando a nitidez, e sugere removê-las.' },
        { label: 'Novo', title: 'Capturas de tela', body: 'Identifica as capturas acumuladas na sua galeria para limpá-las em um toque.' },
        { label: 'Mensageiros', title: 'WhatsApp e Telegram', body: 'Agrupa as fotos e vídeos baixados pelos seus apps de mensagem — a fonte nº 1 de bagunça.' },
        { label: 'Espaço', title: 'Arquivos grandes', body: 'Encontra os arquivos que mais ocupam espaço, ordenados por tamanho.' }
      ],
      note: 'O Smart Cleanup analisa resolução, data e tamanho para manter a melhor cópia de cada grupo e marcar o resto — sem trabalho manual.'
    },
    features: {
      eyebrow: '04 · Funções',
      title: 'Tudo que um celular lotado precisa.',
      items: [
        { icon: 'image',     label: 'FOTOS',     title: 'Duplicatas exatas e similares',  body: 'Encontra cópias byte a byte e fotos visualmente similares por hash perceptual — mesmo cortadas ou editadas.' },
        { icon: 'video',     label: 'VÍDEOS',    title: 'Detecção de vídeos duplicados', body: 'Localiza vídeos repetidos pelo conteúdo, não só pelo nome do arquivo.' },
        { icon: 'file-text', label: 'DOCUMENTOS', title: 'Documentos duplicados',        body: 'Detecta PDFs, Word, Excel, PowerPoint e arquivos de texto duplicados.' },
        { icon: 'archive',   label: 'COMPRESSÃO', title: 'Compressor de imagens e vídeo', body: 'Comprime JPEGs em três níveis de qualidade e recodifica vídeos para 1080p, 720p ou 480p. Os originais nunca são alterados.' },
        { icon: 'chart',     label: 'IMPACTO',   title: 'Painel de impacto',             body: 'Veja quanto espaço você liberou em todas as sessões: análises, grupos, arquivos excluídos e comprimidos.' },
        { icon: 'shield',    label: 'PRIVACIDADE', title: '100% local e privado',        body: 'Nenhum arquivo sai do seu dispositivo. Sem nuvem, sem conta, sem uploads.' }
      ]
    },
    privacy: {
      eyebrow: '05 · Privacidade',
      title: 'Sua privacidade. Nossa prioridade.',
      sub: 'O DupeFire não coleta o conteúdo dos seus arquivos nem os envia a lugar algum. Tudo acontece no seu próprio celular.',
      checks: ['Sem conta', 'Sem registro', 'Sem uploads', 'Sem rastreamento', '100% offline', 'Código auditável'],
      cta: 'Ler a política completa →'
    },
    cta: { eyebrow: '06 · Download', title: 'Pronto para abrir espaço.', sub: 'Disponível no Google Play para Android 8 ou superior. Grátis, em 11 idiomas.', btn: 'Baixar no Google Play', btnSub: 'Compatível com Android 8.0+' },
    footer: { tagline: 'Burn your duplicates. Free your space.', copy: '© 2026 DupeFire · Daniel Barea', links: ['Privacidade', 'Contato', 'Google Play'] }
  }
};
