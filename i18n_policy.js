// DupeFire Privacy Policy i18n strings
window.DF_POLICY = {
  es: {
    dir: 'ltr', name: 'Español', flag: '🇪🇸',
    nav: { home: 'Inicio', policy: 'Privacidad', back: '← Volver a la app' },
    hero: {
      eyebrow: 'Política de privacidad',
      title: 'Tus archivos. Tu teléfono. Tus datos.',
      sub: 'Todo el procesamiento ocurre localmente en tu dispositivo. No recopilamos contenido. No tenemos servidores propios.',
      meta: 'Última actualización: 3 de octubre de 2026',
      author: 'DupeFire · por Daniel Barea',
      tldr: 'TL;DR — Análisis 100% local · sin cuenta · sin contenido subido · AdMob para anuncios y analítica anónima solo con tu consentimiento · compra única opcional.'
    },
    toc: 'Índice',
    sections: [
      { id: 'collect',     num: '01', kicker: 'Datos técnicos',     title: 'Información que se recopila',
        body: 'La app puede recopilar automáticamente cierta información técnica al usarla, como:',
        list: ['Dirección IP del dispositivo', 'Sistema operativo utilizado', 'Tiempo de uso de la aplicación', 'Información de interacción con anuncios (gestionada por AdMob)'],
        callout: 'La app no recopila información de ubicación precisa ni utiliza Inteligencia Artificial para procesar tus datos.',
        outro: 'Todos los archivos (fotos, vídeos, documentos) son analizados exclusivamente en tu dispositivo. Ningún contenido se envía a servidores externos.'
      },
      { id: 'local',       num: '02', kicker: 'On-device',          title: 'Procesamiento local en tu dispositivo',
        body: 'DupeFire funciona completamente de forma local. Todas las operaciones se ejecutan exclusivamente en tu dispositivo:',
        list: ['El análisis de duplicados mediante hash se realiza localmente', 'La compresión de imágenes y vídeos se realiza localmente', 'Ningún archivo, foto, vídeo o documento se envía a servidores externos', 'No disponemos de servidores propios que reciban datos de la app'],
        callout: 'Tus archivos nunca abandonan tu dispositivo. Solo tú tienes acceso a ellos.'
      },
      { id: 'noncollect',  num: '03', kicker: 'Lo que NO recopilamos', title: 'Datos que no recopilamos',
        body: 'No recopilamos, almacenamos ni procesamos ninguno de los siguientes datos:',
        nope: ['Nombre o identidad', 'Correo electrónico', 'Número de teléfono', 'Ubicación precisa', 'Contenido de archivos', 'Cuentas de usuario', 'Historial de navegación', 'Datos biométricos']
      },
      { id: 'perms',       num: '04', kicker: 'Permisos',           title: 'Permisos del dispositivo',
        body: 'La app solicita los siguientes permisos, usados exclusivamente para su funcionalidad principal:',
        perms: [
          { name: 'READ_MEDIA_IMAGES',     desc: 'Detectar imágenes duplicadas y comprimirlas' },
          { name: 'READ_MEDIA_VIDEO',      desc: 'Detectar vídeos duplicados y comprimirlos' },
          { name: 'READ_EXTERNAL_STORAGE', desc: 'Acceder a documentos y detectar duplicados' },
          { name: 'WRITE_EXTERNAL_STORAGE',desc: 'Eliminar duplicados y guardar archivos comprimidos' }
        ],
        outro: 'Estos permisos no se usan para recopilar información. Solo se accede a los archivos cuando el usuario lo solicita explícitamente.'
      },
      { id: 'ads',         num: '05', kicker: 'AdMob · GDPR',       title: 'Publicidad y servicios de terceros',
        body: 'DupeFire utiliza Google AdMob para mostrar anuncios. Solo se comparten datos agregados y anonimizados con servicios externos. Los datos que AdMob puede recopilar incluyen: identificadores de publicidad del dispositivo, información sobre interacciones con anuncios, datos técnicos del dispositivo (modelo, sistema operativo) y dirección IP aproximada.',
        warn: 'La primera vez que abras la app, se mostrará un formulario de consentimiento requerido por el RGPD europeo para elegir entre anuncios personalizados o no personalizados.',
        links: [
          { label: 'Política de Privacidad de Google', href: 'https://policies.google.com/privacy' },
          { label: 'Política de AdMob',                 href: 'https://support.google.com/admob/answer/6128543?hl=es' },
          { label: 'Gestionar preferencias',            href: 'https://adssettings.google.com' }
        ]
      },
      { id: "analytics", num: "05b", kicker: "Analytics · Pro", title: "Analítica anónima y compra DupeFire Pro",
        body: "DupeFire incluye una compra única opcional, DupeFire Pro (1,99 $), que elimina todos los anuncios y desbloquea Smart Cleanup ilimitado. El pago lo gestiona íntegramente Google Play: no recibimos ni almacenamos datos de pago, y la app solo guarda localmente si Pro está desbloqueado. Además, si das tu consentimiento, la app usa Firebase Analytics (Google) para medir de forma agregada el uso de funciones, por ejemplo que se completó un análisis, cuántos grupos se encontraron o cuántos MB se liberaron.",
        list: ["Solo se envían contadores y tamaños aproximados; nunca nombres de archivo, rutas, fotos, vídeos ni contenido", "Firebase Analytics permanece desactivado hasta que aceptas el formulario de consentimiento", "La recogida del identificador de publicidad y del SSAID está desactivada en la analítica", "Sin consentimiento no se envía ningún evento de analítica"]
      },
      { id: 'optout',      num: '06', kicker: 'Opt-out',            title: 'Derecho de exclusión',
        body: 'Puedes detener toda recopilación de información desinstalando la app mediante el proceso estándar de desinstalación de tu dispositivo o a través de la tienda de aplicaciones.'
      },
      { id: 'retention',   num: '07', kicker: 'Retención',          title: 'Retención de datos',
        body: 'El proveedor del servicio conservará los datos mientras uses la aplicación y durante un tiempo razonable después. Si deseas que se eliminen, contacta en danibarea@gmail.com y responderemos en un plazo razonable.'
      },
      { id: 'children',    num: '08', kicker: 'Menores',            title: 'Menores de edad',
        body: 'DupeFire no está dirigida a menores de 13 años. No recopilamos conscientemente información de menores. Si eres padre o tutor y crees que tu hijo ha proporcionado información personal, contáctanos en danibarea@gmail.com para eliminarla inmediatamente.'
      },
      { id: 'security',    num: '09', kicker: 'Seguridad',          title: 'Seguridad',
        body: 'El proveedor del servicio aplica salvaguardas físicas, electrónicas y procedimentales para proteger la confidencialidad de tu información.'
      },
      { id: 'changes',     num: '10', kicker: 'Cambios',            title: 'Cambios en esta política',
        body: 'Esta política puede actualizarse ocasionalmente. Se notificará cualquier cambio actualizando esta página. El uso continuado de la app implica la aceptación de los cambios. Vigente desde el 3 de octubre de 2026.'
      },
      { id: 'consent',     num: '11', kicker: 'Consentimiento',     title: 'Tu consentimiento',
        body: 'Al usar la aplicación, consientes el procesamiento de tu información tal como se establece en esta política, tanto ahora como en futuras modificaciones.'
      },
      { id: 'contact',     num: '12', kicker: 'Contacto',           title: 'Contacto',
        body: 'Si tienes cualquier pregunta sobre esta política de privacidad, escríbenos a:',
        email: 'danibarea@gmail.com'
      }
    ],
    footer: { tagline: 'Burn your duplicates. Free your space.', copy: '© 2026 DupeFire · Daniel Barea', links: ['Inicio', 'Política', 'Google Play'] }
  },

  en: {
    dir: 'ltr', name: 'English', flag: '🇬🇧',
    nav: { home: 'Home', policy: 'Privacy', back: '← Back to the app' },
    hero: {
      eyebrow: 'Privacy Policy',
      title: 'Your files. Your phone. Your data.',
      sub: 'All processing happens locally on your device. We do not collect file contents. We run no servers of our own.',
      meta: 'Last updated: October 3, 2026',
      author: 'DupeFire · by Daniel Barea',
      tldr: 'TL;DR — 100% local analysis · no account · nothing uploaded · AdMob for ads and anonymous analytics only with your consent · optional one-time purchase.'
    },
    toc: 'Contents',
    sections: [
      { id:'collect', num:'01', kicker:'Technical data', title:'Information we collect',
        body:'The Application may automatically collect certain technical information when you use it, such as:',
        list:["Your device's IP address","Operating system used on your device","Time spent on the Application","Ad interaction data (managed by AdMob)"],
        callout:'The Application does not gather precise location information and does not use AI technologies to process your data.',
        outro:'All files (photos, videos, documents) are analyzed exclusively on your device. No content is sent to external servers.'
      },
      { id:'local', num:'02', kicker:'On-device', title:'Local processing on your device',
        body:'DupeFire works entirely locally. All operations are performed exclusively on your device:',
        list:['Duplicate detection via hash is performed locally','Image and video compression is performed locally','No file, photo, video or document is sent to external servers','We do not operate servers that receive data from the app'],
        callout:'Your files never leave your device. Only you have access to them.'
      },
      { id:'noncollect', num:'03', kicker:'What we do NOT collect', title:'Data we do not collect',
        body:'We do not collect, store or process any of the following data:',
        nope:['Name or identity','Email address','Phone number','Precise location','File contents','User accounts','Browsing history','Biometric data']
      },
      { id:'perms', num:'04', kicker:'Permissions', title:'Device permissions',
        body:'The app requests the following permissions, used exclusively for its core functionality:',
        perms:[
          {name:'READ_MEDIA_IMAGES', desc:'Detect duplicate images and compress them'},
          {name:'READ_MEDIA_VIDEO',  desc:'Detect duplicate videos and compress them'},
          {name:'READ_EXTERNAL_STORAGE',  desc:'Access documents and detect duplicates'},
          {name:'WRITE_EXTERNAL_STORAGE', desc:'Delete duplicate files and save compressed files'}
        ],
        outro:'These permissions are not used to collect information. Files are only accessed when explicitly requested by the user.'
      },
      { id:'ads', num:'05', kicker:'AdMob · GDPR', title:'Advertising & third-party services',
        body:'DupeFire uses Google AdMob to display advertisements. Only aggregated, anonymized data is shared with external services. Data that AdMob may collect includes: device advertising identifiers, ad interaction information, technical device data (model, OS), and approximate IP address.',
        warn:'The first time you open the app, an EU GDPR consent form will be shown so you can choose between personalized or non-personalized ads.',
        links:[
          {label:"Google's Privacy Policy", href:'https://policies.google.com/privacy'},
          {label:"AdMob's policy",          href:'https://support.google.com/admob/answer/6128543?hl=en'},
          {label:'Manage preferences',      href:'https://adssettings.google.com'}
        ]
      },
      { id:"analytics", num:"05b", kicker:"Analytics · Pro", title:"Anonymous analytics & DupeFire Pro purchase",
        body:"DupeFire offers an optional one-time purchase, DupeFire Pro (US$1.99), which removes all ads and unlocks unlimited Smart Cleanup. Payment is handled entirely by Google Play: we do not receive or store payment details, and the app only keeps a local flag indicating whether Pro is unlocked. In addition, if you give consent, the app uses Firebase Analytics (Google) to measure feature usage in aggregate, for example that a scan completed, how many groups were found or how many MB were freed.",
        list:["Only counters and approximate sizes are sent; never file names, paths, photos, videos or content","Firebase Analytics stays disabled until you accept the consent form","Collection of the advertising ID and SSAID is disabled for analytics","Without consent, no analytics event is sent"]
      },
      { id:'optout', num:'06', kicker:'Opt-out', title:'Opt-out rights',
        body:'You can stop all collection of information by uninstalling the Application using the standard uninstall process available on your device or via the application marketplace.'
      },
      { id:'retention', num:'07', kicker:'Retention', title:'Data retention',
        body:'The Service Provider will retain data for as long as you use the Application and for a reasonable time thereafter. To request deletion, contact danibarea@gmail.com and we will respond in a reasonable time.'
      },
      { id:'children', num:'08', kicker:'Minors', title:'Children',
        body:'DupeFire does not address anyone under the age of 13. We do not knowingly collect information from minors. If you are a parent or guardian and believe your child has provided personal information, contact us at danibarea@gmail.com so we can delete it.'
      },
      { id:'security', num:'09', kicker:'Security', title:'Security',
        body:'The Service Provider applies physical, electronic, and procedural safeguards to protect the confidentiality of your information.'
      },
      { id:'changes', num:'10', kicker:'Changes', title:'Changes to this policy',
        body:'This policy may be updated from time to time. Changes will be communicated by updating this page. Continued use is deemed acceptance of changes. Effective as of October 3, 2026.'
      },
      { id:'consent', num:'11', kicker:'Consent', title:'Your consent',
        body:'By using the Application, you consent to the processing of your information as set forth in this Privacy Policy now and as amended in the future.'
      },
      { id:'contact', num:'12', kicker:'Contact', title:'Contact',
        body:'If you have any questions about this privacy policy, write to:',
        email:'danibarea@gmail.com'
      }
    ],
    footer:{ tagline:'Burn your duplicates. Free your space.', copy:'© 2026 DupeFire · Daniel Barea', links:['Home','Privacy','Google Play'] }
  },

  de: {
    dir:'ltr', name:'Deutsch', flag:'🇩🇪',
    nav:{ home:'Start', policy:'Datenschutz', back:'← Zurück zur App' },
    hero:{ eyebrow:'Datenschutzrichtlinie', title:'Deine Dateien. Dein Telefon. Deine Daten.',
      sub:'Die gesamte Verarbeitung erfolgt lokal auf deinem Gerät. Wir erheben keine Dateiinhalte und betreiben keine eigenen Server.',
      meta:'Zuletzt aktualisiert: 3. Oktober 2026', author:'DupeFire · von Daniel Barea',
      tldr:'TL;DR — 100% lokale Analyse · kein Konto · nichts hochgeladen · AdMob für Werbung und anonyme Analysen nur mit deiner Einwilligung · optionaler Einmalkauf.' },
    toc:'Inhalt',
    sections:[
      { id:'collect', num:'01', kicker:'Technische Daten', title:'Erhobene Informationen',
        body:'Die App kann beim Benutzen automatisch bestimmte technische Informationen erfassen, wie:',
        list:['IP-Adresse des Geräts','Verwendetes Betriebssystem','Nutzungszeit der Anwendung','Informationen über Anzeigeninteraktionen (von AdMob verwaltet)'],
        callout:'Die App erfasst keine genauen Standortinformationen und verwendet keine KI zur Verarbeitung deiner Daten.',
        outro:'Alle Dateien (Fotos, Videos, Dokumente) werden ausschließlich auf deinem Gerät analysiert. Kein Inhalt wird an externe Server gesendet.'},
      { id:'local', num:'02', kicker:'Auf dem Gerät', title:'Lokale Verarbeitung auf deinem Gerät',
        body:'DupeFire funktioniert vollständig lokal. Alle Vorgänge erfolgen ausschließlich auf deinem Gerät:',
        list:['Die Erkennung von Duplikaten per Hash erfolgt lokal','Die Komprimierung von Bildern und Videos erfolgt lokal','Keine Datei wird an externe Server gesendet','Wir betreiben keine Server, die Daten von der App empfangen'],
        callout:'Deine Dateien verlassen niemals dein Gerät. Nur du hast Zugriff darauf.'},
      { id:'noncollect', num:'03', kicker:'Was wir NICHT erheben', title:'Nicht erhobene Daten',
        body:'Wir erheben, speichern oder verarbeiten keine der folgenden Daten:',
        nope:['Name oder Identität','E-Mail-Adresse','Telefonnummer','Genauer Standort','Dateiinhalt','Benutzerkonten','Browsing-Verlauf','Biometrische Daten']},
      { id:'perms', num:'04', kicker:'Berechtigungen', title:'Geräteberechtigungen',
        body:'Die App fordert folgende Berechtigungen an, die ausschließlich für die Kernfunktion verwendet werden:',
        perms:[
          {name:'READ_MEDIA_IMAGES', desc:'Doppelte Bilder erkennen und komprimieren'},
          {name:'READ_MEDIA_VIDEO',  desc:'Doppelte Videos erkennen und komprimieren'},
          {name:'READ_EXTERNAL_STORAGE', desc:'Auf Dokumente zugreifen und Duplikate erkennen'},
          {name:'WRITE_EXTERNAL_STORAGE',desc:'Duplikate löschen und komprimierte Dateien speichern'}
        ],
        outro:'Diese Berechtigungen werden nicht zur Datenerhebung verwendet. Auf Dateien wird nur bei expliziter Anforderung zugegriffen.'},
      { id:'ads', num:'05', kicker:'AdMob · DSGVO', title:'Werbung und Drittanbieter',
        body:'DupeFire verwendet Google AdMob zur Anzeige von Werbung. Mit externen Diensten werden nur aggregierte, anonymisierte Daten geteilt. AdMob kann folgende Daten erheben: Gerätewerbe-IDs, Informationen über Anzeigeninteraktionen, technische Gerätedaten (Modell, OS) und ungefähre IP-Adresse.',
        warn:'Beim ersten Start der App wird ein DSGVO-Einwilligungsformular angezeigt, um zwischen personalisierten und nicht personalisierten Anzeigen zu wählen.',
        links:[
          {label:'Google-Datenschutzrichtlinie', href:'https://policies.google.com/privacy'},
          {label:'AdMob-Richtlinie',             href:'https://support.google.com/admob/answer/6128543'},
          {label:'Präferenzen verwalten',        href:'https://adssettings.google.com'}
        ]},
      { id:"analytics", num:"05b", kicker:"Analytics · Pro", title:"Anonyme Analysen und Kauf von DupeFire Pro",
        body:"DupeFire bietet einen optionalen Einmalkauf, DupeFire Pro (1,99 $), der alle Werbung entfernt und unbegrenztes Smart Cleanup freischaltet. Die Zahlung wird vollständig von Google Play abgewickelt: Wir erhalten und speichern keine Zahlungsdaten, die App speichert lediglich lokal, ob Pro freigeschaltet ist. Zusätzlich nutzt die App mit deiner Einwilligung Firebase Analytics (Google), um die Nutzung von Funktionen aggregiert zu messen, z. B. dass eine Suche abgeschlossen wurde, wie viele Gruppen gefunden oder wie viele MB freigegeben wurden.",
        list:["Es werden nur Zähler und ungefähre Größen gesendet, niemals Dateinamen, Pfade, Fotos, Videos oder Inhalte","Firebase Analytics bleibt deaktiviert, bis du das Einwilligungsformular akzeptierst","Die Erfassung der Werbe-ID und der SSAID ist für Analytics deaktiviert","Ohne Einwilligung wird kein Analytics-Ereignis gesendet"]
      },
      { id:'optout', num:'06', kicker:'Opt-out', title:'Abmelderechte',
        body:'Du kannst die gesamte Datenerhebung stoppen, indem du die App über den normalen Deinstallationsprozess deines Geräts oder den App-Marktplatz deinstallierst.'},
      { id:'retention', num:'07', kicker:'Speicherung', title:'Datenspeicherung',
        body:'Der Dienstanbieter speichert die Daten, solange du die App verwendest, und für einen angemessenen Zeitraum danach. Für Löschung: danibarea@gmail.com.'},
      { id:'children', num:'08', kicker:'Minderjährige', title:'Kinder',
        body:'DupeFire richtet sich nicht an Kinder unter 13 Jahren. Wenn dein Kind Daten bereitgestellt hat, kontaktiere uns unter danibarea@gmail.com.'},
      { id:'security', num:'09', kicker:'Sicherheit', title:'Sicherheit',
        body:'Der Dienstanbieter wendet physische, elektronische und verfahrenstechnische Schutzmaßnahmen an, um die Vertraulichkeit deiner Informationen zu schützen.'},
      { id:'changes', num:'10', kicker:'Änderungen', title:'Änderungen dieser Richtlinie',
        body:'Diese Richtlinie kann gelegentlich aktualisiert werden. Änderungen werden durch Aktualisierung dieser Seite mitgeteilt. Gültig ab dem 3. Oktober 2026.'},
      { id:'consent', num:'11', kicker:'Zustimmung', title:'Deine Zustimmung',
        body:'Durch die Nutzung der App stimmst du der Verarbeitung deiner Informationen gemäß dieser Richtlinie zu, jetzt und in zukünftigen Änderungen.'},
      { id:'contact', num:'12', kicker:'Kontakt', title:'Kontakt',
        body:'Wenn du Fragen zur Datenschutzrichtlinie hast, schreib uns:', email:'danibarea@gmail.com' }
    ],
    footer:{ tagline:'Burn your duplicates. Free your space.', copy:'© 2026 DupeFire · Daniel Barea', links:['Start','Datenschutz','Google Play'] }
  },

  fr: {
    dir:'ltr', name:'Français', flag:'🇫🇷',
    nav:{ home:'Accueil', policy:'Confidentialité', back:"← Retour à l'app" },
    hero:{ eyebrow:'Politique de confidentialité', title:'Tes fichiers. Ton téléphone. Tes données.',
      sub:"Tout le traitement s'effectue localement sur ton appareil. Nous ne collectons pas le contenu de tes fichiers et n'avons pas de serveurs.",
      meta:'Dernière mise à jour : 3 octobre 2026', author:'DupeFire · par Daniel Barea',
      tldr:"TL;DR — Analyse 100% locale · sans compte · rien nest envoyé · AdMob pour la publicité et analyses anonymes uniquement avec votre consentement · achat unique optionnel." },
    toc:'Sommaire',
    sections:[
      { id:'collect', num:'01', kicker:'Données techniques', title:'Informations collectées',
        body:"L'application peut collecter automatiquement certaines informations techniques lors de son utilisation :",
        list:["Adresse IP de l'appareil","Système d'exploitation utilisé","Temps d'utilisation","Données d'interaction avec les publicités (gérées par AdMob)"],
        callout:"L'application ne collecte pas d'informations précises sur la localisation et n'utilise pas d'IA pour traiter tes données.",
        outro:'Tous les fichiers (photos, vidéos, documents) sont analysés exclusivement sur ton appareil. Aucun contenu n\'est envoyé à des serveurs externes.'},
      { id:'local', num:'02', kicker:'Sur l\'appareil', title:'Traitement local sur ton appareil',
        body:'DupeFire fonctionne entièrement en local. Toutes les opérations sont effectuées exclusivement sur ton appareil :',
        list:["La détection des doublons par hachage s'effectue localement","La compression des images et vidéos s'effectue localement","Aucun fichier n'est envoyé à des serveurs externes","Nous n'exploitons pas de serveurs recevant des données de l'application"],
        callout:'Tes fichiers ne quittent jamais ton appareil. Toi seul y as accès.'},
      { id:'noncollect', num:'03', kicker:'Ce que nous NE collectons PAS', title:'Données que nous ne collectons pas',
        body:'Nous ne collectons, ne stockons ni ne traitons aucune des données suivantes :',
        nope:['Nom ou identité','Adresse e-mail','Numéro de téléphone','Localisation précise','Contenu des fichiers','Comptes utilisateur','Historique de navigation','Données biométriques']},
      { id:'perms', num:'04', kicker:'Autorisations', title:'Autorisations de l\'appareil',
        body:"L'application demande les autorisations suivantes, utilisées exclusivement pour ses fonctionnalités principales :",
        perms:[
          {name:'READ_MEDIA_IMAGES', desc:'Détecter les images en double et les compresser'},
          {name:'READ_MEDIA_VIDEO',  desc:'Détecter les vidéos en double et les compresser'},
          {name:'READ_EXTERNAL_STORAGE', desc:'Accéder aux documents et détecter les doublons'},
          {name:'WRITE_EXTERNAL_STORAGE',desc:'Supprimer les doublons et enregistrer les fichiers compressés'}
        ],
        outro:"Ces autorisations ne servent pas à collecter des informations. Les fichiers ne sont accessibles que sur demande explicite de l'utilisateur."},
      { id:'ads', num:'05', kicker:'AdMob · RGPD', title:'Publicité et services tiers',
        body:"DupeFire utilise Google AdMob pour afficher des publicités. Seules des données agrégées et anonymisées sont partagées avec des services externes. AdMob peut collecter : identifiants publicitaires, données d'interaction avec les publicités, données techniques (modèle, OS) et adresse IP approximative.",
        warn:"Lors du premier lancement, un formulaire de consentement requis par le RGPD européen s'affichera pour choisir entre publicités personnalisées ou non.",
        links:[
          {label:'Politique de confidentialité de Google', href:'https://policies.google.com/privacy'},
          {label:'Politique AdMob', href:'https://support.google.com/admob/answer/6128543'},
          {label:'Gérer les préférences', href:'https://adssettings.google.com'}
        ]},
      { id:"analytics", num:"05b", kicker:"Analytics · Pro", title:"Analyses anonymes et achat DupeFire Pro",
        body:"DupeFire propose un achat unique optionnel, DupeFire Pro (1,99 $), qui supprime toutes les publicités et débloque Smart Cleanup en illimité. Le paiement est entièrement géré par Google Play : nous ne recevons ni ne stockons aucune donnée de paiement, et l'application conserve seulement localement l'indication que Pro est débloqué. De plus, avec votre consentement, l'application utilise Firebase Analytics (Google) pour mesurer l'usage des fonctionnalités de façon agrégée, par exemple qu'une analyse s'est terminée, combien de groupes ont été trouvés ou combien de Mo ont été libérés.",
        list:["Seuls des compteurs et des tailles approximatives sont envoyés, jamais de noms de fichiers, chemins, photos, vidéos ni contenus","Firebase Analytics reste désactivé tant que vous n'acceptez pas le formulaire de consentement","La collecte de l'identifiant publicitaire et du SSAID est désactivée pour les analyses","Sans consentement, aucun événement d'analyse n'est envoyé"]
      },
      { id:'optout', num:'06', kicker:'Désinscription', title:'Droits de désinscription',
        body:"Tu peux arrêter toute collecte d'informations en désinstallant l'application via le processus de désinstallation standard de ton appareil ou via la boutique d'applications."},
      { id:'retention', num:'07', kicker:'Conservation', title:'Conservation des données',
        body:"Le fournisseur de services conservera les données aussi longtemps que tu utiliseras l'application et pour un délai raisonnable. Pour demander la suppression : danibarea@gmail.com."},
      { id:'children', num:'08', kicker:'Mineurs', title:'Enfants',
        body:"DupeFire ne s'adresse pas aux personnes de moins de 13 ans. Si ton enfant a fourni des informations, contacte-nous à danibarea@gmail.com."},
      { id:'security', num:'09', kicker:'Sécurité', title:'Sécurité',
        body:'Le fournisseur de services applique des mesures de protection physiques, électroniques et procédurales pour protéger la confidentialité de tes informations.'},
      { id:'changes', num:'10', kicker:'Modifications', title:'Modifications de cette politique',
        body:"Cette politique peut être mise à jour occasionnellement. Les changements seront communiqués via cette page. En vigueur depuis le 3 octobre 2026."},
      { id:'consent', num:'11', kicker:'Consentement', title:'Ton consentement',
        body:"En utilisant l'application, tu consens au traitement de tes informations tel que décrit dans cette politique, maintenant et dans ses futures modifications."},
      { id:'contact', num:'12', kicker:'Contact', title:'Contact',
        body:'Pour toute question sur cette politique, écris-nous :', email:'danibarea@gmail.com' }
    ],
    footer:{ tagline:'Burn your duplicates. Free your space.', copy:'© 2026 DupeFire · Daniel Barea', links:['Accueil','Confidentialité','Google Play'] }
  },

  hi: {
    dir:'ltr', name:'हिन्दी', flag:'🇮🇳',
    nav:{ home:'मुख्य', policy:'गोपनीयता', back:'← ऐप पर वापस' },
    hero:{ eyebrow:'गोपनीयता नीति', title:'आपकी फ़ाइलें। आपका फ़ोन। आपका डेटा।',
      sub:'सभी प्रोसेसिंग आपके डिवाइस पर स्थानीय रूप से होती है। हम फ़ाइल सामग्री एकत्र नहीं करते। हमारे पास कोई सर्वर नहीं हैं।',
      meta:'अंतिम अपडेट: 3 अक्टूबर 2026', author:'DupeFire · Daniel Barea द्वारा',
      tldr:'TL;DR — 100% स्थानीय विश्लेषण · कोई खाता नहीं · कुछ भी अपलोड नहीं · विज्ञापनों के लिए AdMob और केवल आपकी सहमति से गुमनाम एनालिटिक्स · वैकल्पिक एकमुश्त खरीद।' },
    toc:'सूची',
    sections:[
      { id:'collect', num:'01', kicker:'तकनीकी डेटा', title:'एकत्रित जानकारी',
        body:'उपयोग के दौरान ऐप स्वचालित रूप से कुछ तकनीकी जानकारी एकत्र कर सकती है:',
        list:['डिवाइस का IP पता','उपयोग किया गया ऑपरेटिंग सिस्टम','ऐप के उपयोग का समय','विज्ञापन इंटरैक्शन डेटा (AdMob द्वारा प्रबंधित)'],
        callout:'ऐप सटीक स्थान जानकारी एकत्र नहीं करती और न ही आपके डेटा को प्रोसेस करने के लिए AI तकनीक का उपयोग करती है।',
        outro:'सभी फ़ाइलें (फ़ोटो, वीडियो, दस्तावेज़) केवल आपके डिवाइस पर विश्लेषित होती हैं। कोई सामग्री बाहरी सर्वर पर नहीं भेजी जाती।'},
      { id:'local', num:'02', kicker:'डिवाइस पर', title:'आपके डिवाइस पर स्थानीय प्रोसेसिंग',
        body:'DupeFire पूरी तरह स्थानीय रूप से काम करता है। सभी ऑपरेशन केवल आपके डिवाइस पर होते हैं:',
        list:['हैश द्वारा डुप्लीकेट पहचान स्थानीय रूप से होती है','छवि और वीडियो संपीड़न स्थानीय रूप से होता है','कोई फ़ाइल बाहरी सर्वर पर नहीं भेजी जाती','हम कोई सर्वर नहीं चलाते जो ऐप से डेटा प्राप्त करे'],
        callout:'आपकी फ़ाइलें कभी डिवाइस से बाहर नहीं जातीं। केवल आप ही एक्सेस कर सकते हैं।'},
      { id:'noncollect', num:'03', kicker:'जो हम एकत्र नहीं करते', title:'जो डेटा हम एकत्र नहीं करते',
        body:'हम निम्नलिखित कोई डेटा एकत्र, संग्रहीत या प्रोसेस नहीं करते:',
        nope:['नाम या पहचान','ईमेल पता','फ़ोन नंबर','सटीक स्थान','फ़ाइल सामग्री','उपयोगकर्ता खाते','ब्राउज़िंग इतिहास','बायोमेट्रिक डेटा']},
      { id:'perms', num:'04', kicker:'अनुमतियां', title:'डिवाइस अनुमतियां',
        body:'ऐप निम्नलिखित अनुमतियां मांगती है, जो केवल मुख्य कार्यक्षमता के लिए हैं:',
        perms:[
          {name:'READ_MEDIA_IMAGES', desc:'डुप्लीकेट छवियां खोजना और संपीड़ित करना'},
          {name:'READ_MEDIA_VIDEO',  desc:'डुप्लीकेट वीडियो खोजना और संपीड़ित करना'},
          {name:'READ_EXTERNAL_STORAGE', desc:'दस्तावेज़ एक्सेस करना और डुप्लीकेट खोजना'},
          {name:'WRITE_EXTERNAL_STORAGE',desc:'डुप्लीकेट हटाना और संपीड़ित फ़ाइलें सहेजना'}
        ],
        outro:'ये अनुमतियां जानकारी एकत्र करने के लिए नहीं हैं। फ़ाइलें केवल उपयोगकर्ता के स्पष्ट अनुरोध पर एक्सेस होती हैं।'},
      { id:'ads', num:'05', kicker:'AdMob · GDPR', title:'विज्ञापन और तृतीय पक्ष सेवाएं',
        body:'DupeFire विज्ञापन के लिए Google AdMob का उपयोग करता है। केवल एकत्रित और अनामित डेटा बाहरी सेवाओं के साथ साझा होता है। AdMob एकत्र कर सकता है: डिवाइस विज्ञापन पहचानकर्ता, विज्ञापन इंटरैक्शन, तकनीकी डिवाइस डेटा और अनुमानित IP पता।',
        warn:'पहली बार ऐप खोलने पर EU GDPR के अनुसार सहमति फॉर्म दिखाया जाएगा।',
        links:[
          {label:'Google गोपनीयता नीति', href:'https://policies.google.com/privacy'},
          {label:'AdMob नीति', href:'https://support.google.com/admob/answer/6128543'},
          {label:'प्राथमिकताएं प्रबंधित करें', href:'https://adssettings.google.com'}
        ]},
      { id:"analytics", num:"05b", kicker:"Analytics · Pro", title:"गुमनाम एनालिटिक्स और DupeFire Pro खरीद",
        body:"DupeFire एक वैकल्पिक एकमुश्त खरीद, DupeFire Pro (US$1.99), प्रदान करता है, जो सभी विज्ञापन हटाती है और असीमित Smart Cleanup अनलॉक करती है। भुगतान पूरी तरह Google Play द्वारा संभाला जाता है: हम भुगतान विवरण न प्राप्त करते हैं न संग्रहीत करते हैं, और ऐप केवल स्थानीय रूप से यह रखता है कि Pro अनलॉक है या नहीं। इसके अलावा, आपकी सहमति होने पर ऐप सुविधाओं के उपयोग को समग्र रूप से मापने के लिए Firebase Analytics (Google) का उपयोग करता है, जैसे कि स्कैन पूरा हुआ, कितने समूह मिले या कितने MB खाली हुए।",
        list:["केवल काउंटर और अनुमानित आकार भेजे जाते हैं; फ़ाइल नाम, पथ, फ़ोटो, वीडियो या सामग्री कभी नहीं","आपके सहमति फ़ॉर्म स्वीकार करने तक Firebase Analytics बंद रहता है","एनालिटिक्स के लिए विज्ञापन ID और SSAID का संग्रह बंद है","सहमति के बिना कोई एनालिटिक्स इवेंट नहीं भेजा जाता"]
      },
      { id:'optout', num:'06', kicker:'ऑप्ट-आउट', title:'ऑप्ट-आउट अधिकार',
        body:'आप ऐप को अनइंस्टॉल करके सभी जानकारी संग्रह रोक सकते हैं।'},
      { id:'retention', num:'07', kicker:'रिटेंशन', title:'डेटा प्रतिधारण',
        body:'सेवा प्रदाता डेटा तब तक रखेगा जब तक आप ऐप का उपयोग करते हैं। हटाने के लिए: danibarea@gmail.com।'},
      { id:'children', num:'08', kicker:'नाबालिग', title:'बच्चे',
        body:'DupeFire 13 वर्ष से कम उम्र के बच्चों के लिए नहीं है। संपर्क: danibarea@gmail.com।'},
      { id:'security', num:'09', kicker:'सुरक्षा', title:'सुरक्षा',
        body:'सेवा प्रदाता आपकी जानकारी की गोपनीयता की रक्षा के लिए भौतिक, इलेक्ट्रॉनिक और प्रक्रियागत उपाय लागू करता है।'},
      { id:'changes', num:'10', kicker:'परिवर्तन', title:'इस नीति में परिवर्तन',
        body:'यह नीति समय-समय पर अपडेट हो सकती है। 3 अक्टूबर 2026 से प्रभावी।'},
      { id:'consent', num:'11', kicker:'सहमति', title:'आपकी सहमति',
        body:'ऐप का उपयोग करके, आप इस नीति में बताए अनुसार अपनी जानकारी के प्रसंस्करण के लिए सहमति देते हैं।'},
      { id:'contact', num:'12', kicker:'संपर्क', title:'संपर्क',
        body:'किसी भी प्रश्न के लिए लिखें:', email:'danibarea@gmail.com' }
    ],
    footer:{ tagline:'Burn your duplicates. Free your space.', copy:'© 2026 DupeFire · Daniel Barea', links:['मुख्य','गोपनीयता','Google Play'] }
  },

  ja: {
    dir:'ltr', name:'日本語', flag:'🇯🇵',
    nav:{ home:'ホーム', policy:'プライバシー', back:'← アプリに戻る' },
    hero:{ eyebrow:'プライバシーポリシー', title:'あなたのファイル、あなたのスマホ、あなたのデータ。',
      sub:'すべての処理はあなたのデバイス上で完結します。ファイルの内容は収集せず、自社サーバーもありません。',
      meta:'最終更新：2026年10月3日', author:'DupeFire · Daniel Barea',
      tldr:'TL;DR — 100% ローカル解析・アカウント不要・アップロードなし・広告は AdMob、匿名の利用統計は同意した場合のみ・任意の買い切り購入。' },
    toc:'目次',
    sections:[
      { id:'collect', num:'01', kicker:'技術データ', title:'収集される情報',
        body:'アプリは使用中に次のような技術情報を自動的に収集する場合があります：',
        list:['デバイスの IP アドレス','使用しているオペレーティングシステム','アプリの使用時間','広告インタラクション情報（AdMob が管理）'],
        callout:'アプリは正確な位置情報を収集せず、データ処理に AI 技術も使用しません。',
        outro:'すべてのファイル（写真、動画、ドキュメント）はデバイス上でのみ解析されます。外部サーバーには送信されません。'},
      { id:'local', num:'02', kicker:'端末内処理', title:'デバイス上のローカル処理',
        body:'DupeFire は完全にローカルで動作します。すべての処理はあなたのデバイス上でのみ実行されます：',
        list:['ハッシュによる重複検出はローカル','画像・動画の圧縮はローカル','ファイル、写真、動画、ドキュメントは外部サーバーに送信されません','アプリのデータを受信するサーバーは運営していません'],
        callout:'あなたのファイルはデバイスの外に出ません。アクセスできるのはあなただけです。'},
      { id:'noncollect', num:'03', kicker:'収集しないデータ', title:'収集しないデータ',
        body:'以下のデータは一切収集・保存・処理しません：',
        nope:['氏名または身元','メールアドレス','電話番号','正確な位置情報','ファイルの内容','ユーザーアカウント','閲覧履歴','生体認証データ']},
      { id:'perms', num:'04', kicker:'権限', title:'デバイスの権限',
        body:'アプリはコア機能のためだけに以下の権限を要求します：',
        perms:[
          {name:'READ_MEDIA_IMAGES', desc:'重複画像の検出と圧縮'},
          {name:'READ_MEDIA_VIDEO',  desc:'重複動画の検出と圧縮'},
          {name:'READ_EXTERNAL_STORAGE', desc:'ドキュメントへのアクセスと重複検出'},
          {name:'WRITE_EXTERNAL_STORAGE',desc:'重複ファイルの削除と圧縮ファイルの保存'}
        ],
        outro:'これらの権限は情報収集には使用されません。ファイルはユーザーが明示的に要求した場合のみアクセスされます。'},
      { id:'ads', num:'05', kicker:'AdMob · GDPR', title:'広告と第三者サービス',
        body:'DupeFire は広告表示に Google AdMob を使用しています。外部サービスと共有されるのは集計・匿名化されたデータのみです。AdMob が収集する可能性のあるデータ：広告 ID、広告インタラクション、技術データ、概算 IP アドレス。',
        warn:'初回起動時に、EU GDPR に基づく同意フォームが表示されます。',
        links:[
          {label:'Google プライバシーポリシー', href:'https://policies.google.com/privacy'},
          {label:'AdMob ポリシー', href:'https://support.google.com/admob/answer/6128543'},
          {label:'設定を管理', href:'https://adssettings.google.com'}
        ]},
      { id:"analytics", num:"05b", kicker:"Analytics · Pro", title:"匿名の利用統計と DupeFire Pro の購入",
        body:"DupeFire には任意の買い切り購入「DupeFire Pro」(1.99ドル)があり、すべての広告を削除し、Smart Cleanup を無制限にします。支払いは Google Play が全面的に処理し、当方は支払い情報を受け取ることも保存することもありません。アプリは Pro が有効かどうかをデバイス内にのみ保持します。また、同意いただいた場合に限り、アプリは Firebase Analytics (Google) を使って機能の利用状況を集計的に測定します(例: スキャンが完了した、見つかったグループ数、解放された MB 数)。",
        list:["送信されるのはカウンターとおおよそのサイズのみで、ファイル名、パス、写真、動画、内容は一切送信しません","同意フォームを承諾するまで Firebase Analytics は無効のままです","利用統計では広告 ID と SSAID の収集を無効にしています","同意がない場合、利用統計イベントは送信されません"]
      },
      { id:'optout', num:'06', kicker:'オプトアウト', title:'オプトアウトの権利',
        body:'アプリをアンインストールすることで、すべての情報収集を停止できます。'},
      { id:'retention', num:'07', kicker:'保持', title:'データ保持',
        body:'サービスプロバイダーは、アプリを使用している間およびその後の合理的な期間データを保持します。削除依頼：danibarea@gmail.com。'},
      { id:'children', num:'08', kicker:'未成年者', title:'お子様について',
        body:'DupeFire は 13 歳未満の方を対象としていません。お問い合わせ：danibarea@gmail.com。'},
      { id:'security', num:'09', kicker:'セキュリティ', title:'セキュリティ',
        body:'サービスプロバイダーは、情報の機密性を保護するために物理的・電子的・手続き的な保護措置を講じています。'},
      { id:'changes', num:'10', kicker:'変更', title:'本ポリシーの変更',
        body:'本ポリシーは随時更新される場合があります。2026年10月3日より発効。'},
      { id:'consent', num:'11', kicker:'同意', title:'あなたの同意',
        body:'アプリを使用することで、本ポリシーに定める情報処理に同意したことになります。'},
      { id:'contact', num:'12', kicker:'お問い合わせ', title:'お問い合わせ',
        body:'本ポリシーに関するご質問は：', email:'danibarea@gmail.com' }
    ],
    footer:{ tagline:'Burn your duplicates. Free your space.', copy:'© 2026 DupeFire · Daniel Barea', links:['ホーム','プライバシー','Google Play'] }
  },

  zh: {
    dir:'ltr', name:'中文', flag:'🇨🇳',
    nav:{ home:'首页', policy:'隐私', back:'← 返回应用' },
    hero:{ eyebrow:'隐私政策', title:'你的文件。你的手机。你的数据。',
      sub:'所有处理都在你的设备本地完成。我们不收集文件内容，也没有自己的服务器。',
      meta:'最后更新：2026年10月3日', author:'DupeFire · Daniel Barea',
      tldr:'TL;DR — 100% 本地分析 · 无需账户 · 不上传任何内容 · AdMob 用于广告，匿名统计仅在您同意后启用 · 可选的一次性购买。' },
    toc:'目录',
    sections:[
      { id:'collect', num:'01', kicker:'技术数据', title:'收集的信息',
        body:'应用在使用过程中可能自动收集某些技术信息，例如：',
        list:['设备 IP 地址','使用的操作系统','应用使用时间','广告互动信息（由 AdMob 管理）'],
        callout:'该应用不收集精确位置信息，也不使用人工智能技术处理你的数据。',
        outro:'所有文件（照片、视频、文档）仅在你的设备上分析。任何内容都不会发送到外部服务器。'},
      { id:'local', num:'02', kicker:'设备本地', title:'在你的设备上本地处理',
        body:'DupeFire 完全在本地运行。所有操作仅在你的设备上执行：',
        list:['通过哈希算法检测重复文件在本地完成','图片和视频压缩在本地完成','没有任何文件被发送到外部服务器','我们没有运营接收应用数据的服务器'],
        callout:'你的文件永远不会离开你的设备。只有你才能访问它们。'},
      { id:'noncollect', num:'03', kicker:'我们不收集的', title:'我们不收集的数据',
        body:'我们不收集、存储或处理以下任何数据：',
        nope:['姓名或身份','电子邮件地址','电话号码','精确位置','文件内容','用户账户','浏览历史','生物特征数据']},
      { id:'perms', num:'04', kicker:'权限', title:'设备权限',
        body:'应用请求以下权限，仅用于其核心功能：',
        perms:[
          {name:'READ_MEDIA_IMAGES', desc:'检测重复图片并压缩'},
          {name:'READ_MEDIA_VIDEO',  desc:'检测重复视频并压缩'},
          {name:'READ_EXTERNAL_STORAGE', desc:'访问文档并检测重复项'},
          {name:'WRITE_EXTERNAL_STORAGE',desc:'删除重复文件并保存压缩文件'}
        ],
        outro:'这些权限不用于收集信息。仅在用户明确请求时才会访问文件。'},
      { id:'ads', num:'05', kicker:'AdMob · GDPR', title:'广告和第三方服务',
        body:'DupeFire 使用 Google AdMob 显示广告。仅与外部服务共享聚合的匿名数据。AdMob 可能收集：设备广告标识符、广告互动信息、设备技术数据、大致 IP 地址。',
        warn:'首次打开应用时，将显示欧盟 GDPR 要求的同意表单。',
        links:[
          {label:'Google 隐私政策', href:'https://policies.google.com/privacy'},
          {label:'AdMob 政策', href:'https://support.google.com/admob/answer/6128543'},
          {label:'管理偏好', href:'https://adssettings.google.com'}
        ]},
      { id:"analytics", num:"05b", kicker:"Analytics · Pro", title:"匿名统计与 DupeFire Pro 购买",
        body:"DupeFire 提供可选的一次性购买 DupeFire Pro (1.99 美元)，可移除所有广告并解锁无限制的 Smart Cleanup。付款完全由 Google Play 处理：我们不会接收或存储任何支付信息，应用仅在本地保存 Pro 是否已解锁。此外，在您同意的前提下，应用使用 Firebase Analytics (Google) 以汇总方式衡量功能使用情况，例如扫描已完成、发现的分组数量或释放的 MB 数。",
        list:["仅发送计数和大致大小，绝不发送文件名、路径、照片、视频或内容","在您接受同意表单之前，Firebase Analytics 保持关闭","统计中已禁用广告 ID 和 SSAID 的收集","未经同意，不会发送任何统计事件"]
      },
      { id:'optout', num:'06', kicker:'退出', title:'退出权利',
        body:'你可以通过卸载应用来停止所有信息收集。'},
      { id:'retention', num:'07', kicker:'保留', title:'数据保留',
        body:'服务提供商将在你使用应用期间及合理期间内保留数据。删除请求：danibarea@gmail.com。'},
      { id:'children', num:'08', kicker:'未成年人', title:'儿童',
        body:'DupeFire 不面向 13 岁以下儿童。请联系：danibarea@gmail.com。'},
      { id:'security', num:'09', kicker:'安全', title:'安全',
        body:'服务提供商采用物理、电子和程序性保障措施来保护你信息的机密性。'},
      { id:'changes', num:'10', kicker:'变更', title:'政策变更',
        body:'本政策可能不时更新。自 2026年10月3日 起生效。'},
      { id:'consent', num:'11', kicker:'同意', title:'你的同意',
        body:'使用本应用即表示你同意按照本隐私政策对你的信息进行处理。'},
      { id:'contact', num:'12', kicker:'联系', title:'联系我们',
        body:'如有任何疑问，请发邮件至：', email:'danibarea@gmail.com' }
    ],
    footer:{ tagline:'Burn your duplicates. Free your space.', copy:'© 2026 DupeFire · Daniel Barea', links:['首页','隐私','Google Play'] }
  },

  ar: {
    dir:'rtl', name:'العربية', flag:'🇸🇦',
    nav:{ home:'الرئيسية', policy:'الخصوصية', back:'العودة إلى التطبيق ←' },
    hero:{ eyebrow:'سياسة الخصوصية', title:'ملفاتك. هاتفك. بياناتك.',
      sub:'تتم جميع المعالجة محليًا على جهازك. لا نجمع محتوى الملفات ولا نشغّل أي خوادم.',
      meta:'آخر تحديث: 3 أكتوبر 2026', author:'DupeFire · بواسطة Daniel Barea',
      tldr:'TL;DR — تحليل محلي 100٪ · بدون حساب · لا شيء يُرفع · AdMob للإعلانات وتحليلات مجهولة بموافقتك فقط · شراء لمرة واحدة اختياري.' },
    toc:'الفهرس',
    sections:[
      { id:'collect', num:'01', kicker:'بيانات تقنية', title:'المعلومات التي يتم جمعها',
        body:'قد يجمع التطبيق تلقائيًا بعض المعلومات التقنية عند استخدامه:',
        list:['عنوان IP الخاص بالجهاز','نظام التشغيل المستخدم','وقت استخدام التطبيق','بيانات تفاعل الإعلانات (تديرها AdMob)'],
        callout:'لا يجمع التطبيق معلومات الموقع الدقيقة ولا يستخدم تقنيات الذكاء الاصطناعي لمعالجة بياناتك.',
        outro:'تُحلَّل جميع الملفات (الصور والفيديو والمستندات) حصريًا على جهازك. لا يُرسَل أي محتوى إلى خوادم خارجية.'},
      { id:'local', num:'02', kicker:'على الجهاز', title:'المعالجة المحلية على جهازك',
        body:'يعمل DupeFire بالكامل محليًا. تُنفَّذ جميع العمليات حصريًا على جهازك:',
        list:['اكتشاف التكرار عبر التجزئة يتم محليًا','ضغط الصور والفيديو يتم محليًا','لا يُرسَل أي ملف إلى خوادم خارجية','لا نشغّل خوادم تستقبل بيانات من التطبيق'],
        callout:'لا تغادر ملفاتك جهازك أبدًا. أنت وحدك من يمكنه الوصول إليها.'},
      { id:'noncollect', num:'03', kicker:'ما لا نجمعه', title:'البيانات التي لا نجمعها',
        body:'لا نجمع أو نخزن أو نعالج أيًا من البيانات التالية:',
        nope:['الاسم أو الهوية','عنوان البريد الإلكتروني','رقم الهاتف','الموقع الدقيق','محتوى الملفات','حسابات المستخدمين','سجل التصفح','البيانات البيومترية']},
      { id:'perms', num:'04', kicker:'الأذونات', title:'أذونات الجهاز',
        body:'يطلب التطبيق الأذونات التالية، وتُستخدم حصريًا لوظائفه الأساسية:',
        perms:[
          {name:'READ_MEDIA_IMAGES', desc:'اكتشاف الصور المكررة وضغطها'},
          {name:'READ_MEDIA_VIDEO',  desc:'اكتشاف مقاطع الفيديو المكررة وضغطها'},
          {name:'READ_EXTERNAL_STORAGE', desc:'الوصول إلى المستندات واكتشاف التكرار'},
          {name:'WRITE_EXTERNAL_STORAGE',desc:'حذف المكررات وحفظ الملفات المضغوطة'}
        ],
        outro:'لا تُستخدم هذه الأذونات لجمع المعلومات. يتم الوصول إلى الملفات فقط عند طلب صريح من المستخدم.'},
      { id:'ads', num:'05', kicker:'AdMob · GDPR', title:'الإعلانات وخدمات الأطراف الثالثة',
        body:'يستخدم DupeFire Google AdMob لعرض الإعلانات. تُشارَك فقط البيانات المجمّعة وغير المعرِّفة. قد تجمع AdMob: معرّفات الإعلانات، معلومات تفاعل الإعلانات، البيانات التقنية للجهاز، وعنوان IP التقريبي.',
        warn:'عند فتح التطبيق لأول مرة، سيظهر نموذج موافقة GDPR.',
        links:[
          {label:'سياسة خصوصية Google', href:'https://policies.google.com/privacy'},
          {label:'سياسة AdMob', href:'https://support.google.com/admob/answer/6128543'},
          {label:'إدارة التفضيلات', href:'https://adssettings.google.com'}
        ]},
      { id:"analytics", num:"05b", kicker:"Analytics · Pro", title:"تحليلات مجهولة وشراء DupeFire Pro",
        body:"يقدّم DupeFire عملية شراء اختيارية لمرة واحدة هي DupeFire Pro (1.99 دولار)، تزيل جميع الإعلانات وتفتح Smart Cleanup دون حدود. تتم معالجة الدفع بالكامل عبر Google Play: لا نستلم ولا نخزّن أي بيانات دفع، ويحتفظ التطبيق محليًا فقط بما إذا كان Pro مفعّلًا. وبالإضافة إلى ذلك، وبموافقتك فقط، يستخدم التطبيق Firebase Analytics (من Google) لقياس استخدام الميزات بشكل مجمّع، مثل اكتمال فحص أو عدد المجموعات التي وُجدت أو عدد الميغابايت التي تم تحريرها.",
        list:["يتم إرسال عدّادات وأحجام تقريبية فقط، ولا يُرسل أبدًا أسماء الملفات أو المسارات أو الصور أو الفيديوهات أو المحتوى","يبقى Firebase Analytics معطّلًا حتى تقبل نموذج الموافقة","تم تعطيل جمع معرّف الإعلانات وSSAID في التحليلات","دون موافقة لا يُرسل أي حدث تحليلات"]
      },
      { id:'optout', num:'06', kicker:'الانسحاب', title:'حقوق الانسحاب',
        body:'يمكنك إيقاف جمع المعلومات بالكامل عن طريق إلغاء تثبيت التطبيق.'},
      { id:'retention', num:'07', kicker:'الاحتفاظ', title:'الاحتفاظ بالبيانات',
        body:'سيحتفظ مزود الخدمة بالبيانات طالما تستخدم التطبيق ولفترة معقولة بعد ذلك. للحذف: danibarea@gmail.com.'},
      { id:'children', num:'08', kicker:'القاصرون', title:'الأطفال',
        body:'لا يستهدف DupeFire أي شخص دون سن 13 عامًا. للتواصل: danibarea@gmail.com.'},
      { id:'security', num:'09', kicker:'الأمان', title:'الأمان',
        body:'يطبّق مزود الخدمة ضمانات مادية وإلكترونية وإجرائية لحماية سرية معلوماتك.'},
      { id:'changes', num:'10', kicker:'التغييرات', title:'التغييرات على هذه السياسة',
        body:'قد تُحدَّث هذه السياسة من حين لآخر. سارية منذ 3 أكتوبر 2026.'},
      { id:'consent', num:'11', kicker:'الموافقة', title:'موافقتك',
        body:'باستخدام التطبيق، توافق على معالجة معلوماتك وفق ما هو محدد في هذه السياسة.'},
      { id:'contact', num:'12', kicker:'التواصل', title:'تواصل',
        body:'لأي أسئلة، تواصل معنا:', email:'danibarea@gmail.com' }
    ],
    footer:{ tagline:'Burn your duplicates. Free your space.', copy:'© 2026 DupeFire · Daniel Barea', links:['الرئيسية','الخصوصية','Google Play'] }
  },

  pt: {
    dir:'ltr', name:'Português', flag:'🇧🇷',
    nav:{ home:'Início', policy:'Privacidade', back:'← Voltar ao app' },
    hero:{ eyebrow:'Política de privacidade', title:'Seus arquivos. Seu celular. Seus dados.',
      sub:'Todo o processamento acontece localmente no seu dispositivo. Não coletamos conteúdo de arquivos nem mantemos servidores próprios.',
      meta:'Última atualização: 3 de octubre de 2026', author:'DupeFire · por Daniel Barea',
      tldr:'TL;DR — Análise 100% local · sem conta · nada enviado · AdMob para anúncios e análises anônimas só com seu consentimento · compra única opcional.' },
    toc:'Sumário',
    sections:[
      { id:'collect', num:'01', kicker:'Dados técnicos', title:'Informações coletadas',
        body:'O aplicativo pode coletar automaticamente algumas informações técnicas durante o uso, como:',
        list:['Endereço IP do dispositivo','Sistema operacional utilizado','Tempo de uso do aplicativo','Dados de interação com anúncios (gerenciados pelo AdMob)'],
        callout:'O aplicativo não coleta informações precisas de localização nem usa IA para processar seus dados.',
        outro:'Todos os arquivos (fotos, vídeos, documentos) são analisados exclusivamente no seu dispositivo. Nenhum conteúdo é enviado a servidores externos.'},
      { id:'local', num:'02', kicker:'No dispositivo', title:'Processamento local no seu dispositivo',
        body:'O DupeFire funciona inteiramente de forma local. Todas as operações são executadas exclusivamente no seu dispositivo:',
        list:['A detecção de duplicatas via hash é realizada localmente','A compressão de imagens e vídeos é realizada localmente','Nenhum arquivo, foto, vídeo ou documento é enviado a servidores externos','Não operamos servidores que recebam dados do aplicativo'],
        callout:'Seus arquivos nunca saem do seu dispositivo. Só você tem acesso a eles.'},
      { id:'noncollect', num:'03', kicker:'O que NÃO coletamos', title:'Dados que não coletamos',
        body:'Não coletamos, armazenamos nem processamos nenhum dos seguintes dados:',
        nope:['Nome ou identidade','Endereço de e-mail','Número de telefone','Localização precisa','Conteúdo de arquivos','Contas de usuário','Histórico de navegação','Dados biométricos']},
      { id:'perms', num:'04', kicker:'Permissões', title:'Permissões do dispositivo',
        body:'O aplicativo solicita as seguintes permissões, usadas exclusivamente para sua funcionalidade principal:',
        perms:[
          {name:'READ_MEDIA_IMAGES', desc:'Detectar imagens duplicadas e comprimi-las'},
          {name:'READ_MEDIA_VIDEO',  desc:'Detectar vídeos duplicados e comprimi-los'},
          {name:'READ_EXTERNAL_STORAGE', desc:'Acessar documentos e detectar duplicatas'},
          {name:'WRITE_EXTERNAL_STORAGE',desc:'Excluir duplicatas e salvar arquivos comprimidos'}
        ],
        outro:'Essas permissões não são usadas para coletar informações. Os arquivos só são acessados quando solicitado pelo usuário.'},
      { id:'ads', num:'05', kicker:'AdMob · GDPR', title:'Publicidade e serviços de terceiros',
        body:'O DupeFire usa o Google AdMob para exibir anúncios. Apenas dados agregados e anonimizados são compartilhados com serviços externos. O AdMob pode coletar: identificadores de publicidade, informações de interação, dados técnicos do dispositivo e endereço IP aproximado.',
        warn:'Na primeira vez que você abrir o app, será exibido um formulário de consentimento exigido pelo GDPR europeu.',
        links:[
          {label:'Política de Privacidade do Google', href:'https://policies.google.com/privacy'},
          {label:'Política do AdMob', href:'https://support.google.com/admob/answer/6128543'},
          {label:'Gerenciar preferências', href:'https://adssettings.google.com'}
        ]},
      { id:"analytics", num:"05b", kicker:"Analytics · Pro", title:"Análises anônimas e compra do DupeFire Pro",
        body:"O DupeFire oferece uma compra única opcional, DupeFire Pro (US$ 1,99), que remove todos os anúncios e libera o Smart Cleanup ilimitado. O pagamento é totalmente gerenciado pelo Google Play: não recebemos nem armazenamos dados de pagamento, e o app guarda apenas localmente se o Pro está liberado. Além disso, com o seu consentimento, o app usa o Firebase Analytics (Google) para medir de forma agregada o uso dos recursos, por exemplo que uma análise foi concluída, quantos grupos foram encontrados ou quantos MB foram liberados.",
        list:["Apenas contadores e tamanhos aproximados são enviados; nunca nomes de arquivos, caminhos, fotos, vídeos ou conteúdo","O Firebase Analytics permanece desativado até você aceitar o formulário de consentimento","A coleta do ID de publicidade e do SSAID está desativada nas análises","Sem consentimento, nenhum evento de análise é enviado"]
      },
      { id:'optout', num:'06', kicker:'Exclusão', title:'Direitos de exclusão',
        body:'Você pode interromper toda a coleta de informações desinstalando o aplicativo.'},
      { id:'retention', num:'07', kicker:'Retenção', title:'Retenção de dados',
        body:'O provedor reterá os dados enquanto você usar o aplicativo e por um tempo razoável depois. Para exclusão: danibarea@gmail.com.'},
      { id:'children', num:'08', kicker:'Menores', title:'Crianças',
        body:'O DupeFire não se destina a menores de 13 anos. Contato: danibarea@gmail.com.'},
      { id:'security', num:'09', kicker:'Segurança', title:'Segurança',
        body:'O provedor aplica salvaguardas físicas, eletrônicas e procedimentais para proteger a confidencialidade das suas informações.'},
      { id:'changes', num:'10', kicker:'Alterações', title:'Alterações nesta política',
        body:'Esta política pode ser atualizada ocasionalmente. Vigente desde 3 de octubre de 2026.'},
      { id:'consent', num:'11', kicker:'Consentimento', title:'Seu consentimento',
        body:'Ao usar o aplicativo, você consente com o processamento das suas informações conforme esta política.'},
      { id:'contact', num:'12', kicker:'Contato', title:'Contato',
        body:'Para qualquer dúvida, escreva para:', email:'danibarea@gmail.com' }
    ],
    footer:{ tagline:'Burn your duplicates. Free your space.', copy:'© 2026 DupeFire · Daniel Barea', links:['Início','Privacidade','Google Play'] }
  }
};
