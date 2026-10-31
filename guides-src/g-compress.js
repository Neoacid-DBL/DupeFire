'use strict';
// Guía: cómo comprimir fotos sin perder calidad en Android
module.exports = {
  id: 'compress',
  slugs: { es: 'comprimir-fotos-sin-perder-calidad-android', en: 'compress-photos-android-without-losing-quality', pt: 'comprimir-fotos-sem-perder-qualidade-android' },
  related: ['free-space', 'find-duplicates', 'blurry', 'whatsapp-full'],
  content: {
    es: {
      title: 'Cómo comprimir fotos sin perder calidad en Android — DupeFire',
      desc: 'Cómo reducir el peso de tus fotos y vídeos en Android sin que se note la pérdida de calidad: qué nivel elegir, cómo hacerlo con y sin app y qué hacer con los originales.',
      ogTitle: 'Cómo comprimir fotos sin perder calidad en Android',
      crumb: 'Comprimir fotos',
      h1: 'Cómo <span class="em">comprimir fotos</span> sin perder calidad en Android',
      indexTitle: 'Cómo comprimir fotos sin perder calidad en Android',
      indexDesc: 'Qué nivel de compresión elegir, cómo reducir fotos y vídeos y qué hacer con los originales para ganar espacio.',
      lead: 'Una foto de móvil actual puede pesar entre 3 y 10 MB, y un minuto de vídeo en 4K, varios cientos. Comprimir te permite conservar los recuerdos ocupando mucho menos. Pero ojo: «sin perder calidad» tiene truco. Te explicamos qué es posible y cómo hacerlo bien.',
      minutes: 7,
      answer: [
        'Comprimir una foto <strong>siempre</strong> elimina algo de información, pero a un nivel <strong>medio-alto</strong> la diferencia apenas se aprecia en pantalla y el archivo pesa mucho menos.',
        'Opciones: bajar la resolución de la cámara, usar el modo de ahorro de Google Fotos (afecta a la copia en la nube) o comprimir en el móvil con una app como <strong>DupeFire</strong>.',
        'Importante: DupeFire <strong>guarda una copia más ligera y conserva el original</strong>. Para ganar espacio de verdad, tendrás que borrar los originales cuando compruebes que la copia te vale.',
      ],
      sections: [
        { id: 'perder', h: '¿Se puede comprimir sin perder calidad?', html: `
  <p>Estrictamente, no con las fotos JPEG del móvil: al comprimir se descartan detalles que el ojo casi no percibe. Lo que sí puedes hacer es <strong>elegir un nivel en el que la pérdida no se aprecia</strong> al verla en el móvil, una tele o impresa en tamaño pequeño. Si vas a ampliar mucho una foto o la quieres editar, conserva el original.</p>
  <p>Es buena idea comprimir lo que ya no vas a editar: fotos de documentos, de recibos, de pizarras, vídeos reenviados, recuerdos que quieres guardar pero no ver a pantalla completa.</p>` },
        { id: 'opciones', h: 'Formas de reducir el peso sin app', html: `
  <ul>
    <li><strong>Ajustes de la cámara.</strong> En muchos móviles puedes elegir una resolución menor o un formato más eficiente (HEIF/HEIC) en los ajustes de la cámara. Solo afecta a las fotos nuevas.</li>
    <li><strong>Google Fotos.</strong> En los ajustes de copia de seguridad puedes elegir calidad «Ahorro de almacenamiento», que comprime lo que subes a la nube. No reduce lo que ya ocupa tu móvil hasta que uses «Liberar espacio».</li>
    <li><strong>Compartir.</strong> Al enviar por WhatsApp, la app ya recomprime las fotos si no las mandas como documento.</li>
  </ul>
  <p>Ninguna de estas opciones reduce las fotos que ya tienes guardadas en el móvil. Para eso necesitas comprimirlas.</p>` },
        { id: 'dupefire', h: 'Cómo comprimir fotos con DupeFire', html: `
  <ol class="steps">
    <li>Instala <a href="{{play}}" target="_blank" rel="noopener">DupeFire desde Google Play</a> y concede acceso a tus fotos.</li>
    <li>En la pantalla de inicio toca <strong>Comprimir fotos</strong> y selecciona las imágenes que quieras reducir.</li>
    <li>Elige la <strong>calidad</strong>: <strong>Alta</strong> (~85 %), <strong>Media</strong> (~60 %) o <strong>Baja</strong> (~35 %). Para uso normal, <strong>Alta</strong> casi no se nota; <strong>Media</strong> ahorra bastante más.</li>
    <li>Pulsa comprimir. DupeFire guarda una <strong>copia más ligera</strong> en <strong>Fotos › DupeFire</strong> y <strong>no toca el original</strong>.</li>
    <li>Compara la copia con el original. Si te vale, borra el original para recuperar el espacio.</li>
  </ol>
  <div class="note warn">
    <span class="ic" aria-hidden="true">⚠️</span>
    <p>Mientras no borres el original, no habrás ganado espacio: tendrás las dos versiones. La compresión es una decisión que tomas tú, foto a foto o en lote.</p>
  </div>` },
        { id: 'videos', h: 'Y con los vídeos', html: `
  <p>Los vídeos son los que más espacio devuelven. En <strong>Comprimir vídeos</strong> eliges entre <strong>Alta</strong> (hasta 1080p), <strong>Media</strong> (hasta 720p) o <strong>Baja</strong> (hasta 480p). La app guarda una copia H.264 más ligera en <strong>Vídeos › DupeFire</strong> y conserva el original. Tarda más que con fotos, así que déjalo trabajar con el móvil cargando.</p>` },
        { id: 'antes', h: 'Antes de comprimir: limpia lo que sobra', html: `
  <p>Comprimir una foto que luego borrarías es perder el tiempo. Haz primero la limpieza: <a href="{{g:find-duplicates}}">borra duplicados</a>, <a href="{{g:blurry}}">fotos borrosas</a> y capturas que no necesitas. Después comprime lo que te quede y quieras guardar. Más ideas en <a href="{{g:free-space}}">cómo liberar espacio sin borrar apps</a>.</p>` },
      ],
      faq: [
        ['¿Comprimir fotos reduce su calidad?', 'Sí, siempre se descarta algo de información. A nivel alto la diferencia es muy difícil de ver en pantalla; a nivel bajo se nota más, sobre todo al ampliar.'],
        ['¿Qué nivel de compresión me conviene?', 'Para recuerdos y fotos normales, Alta. Para documentos, recibos o capturas que solo quieres poder leer, Media. Baja solo si necesitas ahorrar al máximo.'],
        ['¿Se pierde la fecha o la ubicación de la foto?', 'Depende de la app y del formato. Si necesitas conservar esos datos, comprueba la copia comprimida antes de borrar el original.'],
        ['¿La compresión es gratis en DupeFire?', 'DupeFire es gratis con anuncios. Si tienes dudas sobre qué funciones tienen límites en la versión gratuita, míralo en la ficha de Google Play; DupeFire Pro, de pago único, quita los anuncios.'],
      ],
      ctaTitle: 'Guarda tus recuerdos ocupando menos',
      ctaText: 'DupeFire comprime fotos y vídeos en tu móvil, guarda una copia ligera y conserva el original hasta que tú decidas. Sin cuenta y tus fotos no salen del móvil. Para Android 8 o superior.',
    },

    en: {
      title: 'How to Compress Photos Without Losing Quality on Android — DupeFire',
      desc: 'How to shrink your photos and videos on Android without a noticeable loss of quality: which level to choose, how to do it with and without an app, and what to do with the originals.',
      ogTitle: 'How to compress photos without losing quality on Android',
      crumb: 'Compress photos',
      h1: 'How to <span class="em">compress photos</span> without losing quality on Android',
      indexTitle: 'How to compress photos without losing quality on Android',
      indexDesc: 'Which compression level to choose, how to shrink photos and videos, and what to do with the originals to actually gain space.',
      lead: 'A current phone photo can weigh 3 to 10 MB, and a minute of 4K video, several hundred. Compressing lets you keep your memories while taking up far less space. But there\'s a catch to "without losing quality". Here\'s what\'s possible and how to do it right.',
      minutes: 7,
      answer: [
        'Compressing a photo <strong>always</strong> discards some information, but at a <strong>medium-high</strong> level the difference is barely visible on screen and the file weighs much less.',
        'Options: lower the camera resolution, use Google Photos\' storage saver (it affects the cloud copy) or compress on the phone with an app like <strong>DupeFire</strong>.',
        'Important: DupeFire <strong>saves a lighter copy and keeps the original</strong>. To really gain space you\'ll need to delete the originals once you\'ve checked the copy is good enough.',
      ],
      sections: [
        { id: 'lose', h: 'Can you compress without losing quality?', html: `
  <p>Strictly speaking, not with phone JPEG photos: compressing discards details the eye barely notices. What you can do is <strong>choose a level where the loss isn't visible</strong> on a phone, a TV or a small print. If you'll enlarge a photo a lot or want to edit it, keep the original.</p>
  <p>It's a good idea to compress what you won't edit anymore: photos of documents, receipts, whiteboards, forwarded videos, memories you want to keep but not view full screen.</p>` },
        { id: 'options', h: 'Ways to reduce size without an app', html: `
  <ul>
    <li><strong>Camera settings.</strong> On many phones you can pick a lower resolution or a more efficient format (HEIF/HEIC) in the camera settings. It only affects new photos.</li>
    <li><strong>Google Photos.</strong> In backup settings you can choose "Storage saver" quality, which compresses what you upload to the cloud. It doesn't shrink what's already on your phone until you use "Free up space".</li>
    <li><strong>Sharing.</strong> When you send through WhatsApp, the app already recompresses photos unless you send them as a document.</li>
  </ul>
  <p>None of these shrinks the photos already saved on your phone. For that you need to compress them.</p>` },
        { id: 'dupefire', h: 'How to compress photos with DupeFire', html: `
  <ol class="steps">
    <li>Install <a href="{{play}}" target="_blank" rel="noopener">DupeFire from Google Play</a> and grant access to your photos.</li>
    <li>On the home screen tap <strong>Compress photos</strong> and select the images you want to shrink.</li>
    <li>Choose the <strong>quality</strong>: <strong>High</strong> (~85%), <strong>Medium</strong> (~60%) or <strong>Low</strong> (~35%). For everyday use, <strong>High</strong> is hardly noticeable; <strong>Medium</strong> saves much more.</li>
    <li>Start the compression. DupeFire saves a <strong>lighter copy</strong> in <strong>Photos › DupeFire</strong> and <strong>doesn't touch the original</strong>.</li>
    <li>Compare the copy with the original. If it's good enough, delete the original to get the space back.</li>
  </ol>
  <div class="note warn">
    <span class="ic" aria-hidden="true">⚠️</span>
    <p>Until you delete the original you haven't gained space: you'll have both versions. Compression is a decision you make, photo by photo or in bulk.</p>
  </div>` },
        { id: 'videos', h: 'And with videos', html: `
  <p>Videos give back the most space. In <strong>Compress videos</strong> you choose <strong>High</strong> (up to 1080p), <strong>Medium</strong> (up to 720p) or <strong>Low</strong> (up to 480p). The app saves a lighter H.264 copy in <strong>Videos › DupeFire</strong> and keeps the original. It takes longer than with photos, so let it work while the phone charges.</p>` },
        { id: 'before', h: 'Before compressing: clean out what you don\'t need', html: `
  <p>Compressing a photo you'd delete anyway is a waste of time. Clean up first: <a href="{{g:find-duplicates}}">delete duplicates</a>, <a href="{{g:blurry}}">blurry photos</a> and screenshots you don't need. Then compress what's left that you want to keep. More ideas in <a href="{{g:free-space}}">how to free up space without deleting apps</a>.</p>` },
      ],
      faq: [
        ['Does compressing photos reduce their quality?', 'Yes, some information is always discarded. At a high level the difference is very hard to see on screen; at a low level it\'s more noticeable, especially when zooming in.'],
        ['Which compression level should I choose?', 'For memories and everyday photos, High. For documents, receipts or screenshots you only need to read, Medium. Low only if you need to save as much as possible.'],
        ['Is the photo\'s date or location lost?', 'It depends on the app and the format. If you need to keep that data, check the compressed copy before deleting the original.'],
        ['Is compression free in DupeFire?', 'DupeFire is free with ads. If you wonder which features have limits in the free version, check the Google Play listing; DupeFire Pro, a one-time purchase, removes the ads.'],
      ],
      ctaTitle: 'Keep your memories, take up less space',
      ctaText: 'DupeFire compresses photos and videos on your phone, saves a lighter copy and keeps the original until you decide. No account, and your photos never leave your phone. For Android 8 and later.',
    },

    pt: {
      title: 'Como comprimir fotos sem perder qualidade no Android — DupeFire',
      desc: 'Como reduzir o peso de fotos e vídeos no Android sem perda perceptível de qualidade: qual nível escolher, como fazer com e sem app e o que fazer com os originais.',
      ogTitle: 'Como comprimir fotos sem perder qualidade no Android',
      crumb: 'Comprimir fotos',
      h1: 'Como <span class="em">comprimir fotos</span> sem perder qualidade no Android',
      indexTitle: 'Como comprimir fotos sem perder qualidade no Android',
      indexDesc: 'Qual nível de compressão escolher, como reduzir fotos e vídeos e o que fazer com os originais para ganhar espaço.',
      lead: 'Uma foto de celular atual pode pesar de 3 a 10 MB, e um minuto de vídeo em 4K, várias centenas. Comprimir permite guardar as lembranças ocupando bem menos. Mas atenção: «sem perder qualidade» tem um detalhe. Veja o que é possível e como fazer direito.',
      minutes: 7,
      answer: [
        'Comprimir uma foto <strong>sempre</strong> descarta alguma informação, mas em um nível <strong>médio-alto</strong> a diferença quase não aparece na tela e o arquivo fica muito mais leve.',
        'Opções: reduzir a resolução da câmera, usar a economia de armazenamento do Google Fotos (afeta a cópia na nuvem) ou comprimir no celular com um app como o <strong>DupeFire</strong>.',
        'Importante: o DupeFire <strong>salva uma cópia mais leve e mantém o original</strong>. Para ganhar espaço de verdade, você precisará apagar os originais depois de conferir que a cópia serve.',
      ],
      sections: [
        { id: 'perder', h: 'Dá para comprimir sem perder qualidade?', html: `
  <p>A rigor, não com as fotos JPEG do celular: ao comprimir, descartam-se detalhes que o olho quase não percebe. O que dá para fazer é <strong>escolher um nível em que a perda não aparece</strong> no celular, na TV ou numa impressão pequena. Se vai ampliar muito uma foto ou quer editá-la, guarde o original.</p>
  <p>Vale comprimir o que você não vai mais editar: fotos de documentos, recibos, lousas, vídeos reencaminhados, lembranças que quer guardar mas não ver em tela cheia.</p>` },
        { id: 'opcoes', h: 'Formas de reduzir o peso sem app', html: `
  <ul>
    <li><strong>Configurações da câmera.</strong> Em muitos celulares dá para escolher uma resolução menor ou um formato mais eficiente (HEIF/HEIC) nas configurações da câmera. Só afeta as fotos novas.</li>
    <li><strong>Google Fotos.</strong> Nas configurações de backup você pode escolher a qualidade «Economia de armazenamento», que comprime o que vai para a nuvem. Não reduz o que já ocupa seu celular até você usar «Liberar espaço».</li>
    <li><strong>Compartilhar.</strong> Ao enviar pelo WhatsApp, o app já recomprime as fotos se você não as manda como documento.</li>
  </ul>
  <p>Nenhuma dessas opções reduz as fotos que já estão salvas no celular. Para isso é preciso comprimi-las.</p>` },
        { id: 'dupefire', h: 'Como comprimir fotos com o DupeFire', html: `
  <ol class="steps">
    <li>Instale o <a href="{{play}}" target="_blank" rel="noopener">DupeFire pelo Google Play</a> e conceda acesso às suas fotos.</li>
    <li>Na tela inicial, toque em <strong>Comprimir fotos</strong> e selecione as imagens que quer reduzir.</li>
    <li>Escolha a <strong>qualidade</strong>: <strong>Alta</strong> (~85%), <strong>Média</strong> (~60%) ou <strong>Baixa</strong> (~35%). Para uso comum, a <strong>Alta</strong> quase não se nota; a <strong>Média</strong> economiza bem mais.</li>
    <li>Inicie a compressão. O DupeFire salva uma <strong>cópia mais leve</strong> em <strong>Fotos › DupeFire</strong> e <strong>não mexe no original</strong>.</li>
    <li>Compare a cópia com o original. Se servir, apague o original para recuperar o espaço.</li>
  </ol>
  <div class="note warn">
    <span class="ic" aria-hidden="true">⚠️</span>
    <p>Enquanto você não apagar o original, não ganhou espaço: terá as duas versões. A compressão é uma decisão sua, foto a foto ou em lote.</p>
  </div>` },
        { id: 'videos', h: 'E com os vídeos', html: `
  <p>Os vídeos são os que mais devolvem espaço. Em <strong>Comprimir vídeos</strong> você escolhe entre <strong>Alta</strong> (até 1080p), <strong>Média</strong> (até 720p) ou <strong>Baixa</strong> (até 480p). O app salva uma cópia H.264 mais leve em <strong>Vídeos › DupeFire</strong> e mantém o original. Demora mais que com fotos, então deixe trabalhar com o celular carregando.</p>` },
        { id: 'antes', h: 'Antes de comprimir: limpe o que sobra', html: `
  <p>Comprimir uma foto que você acabaria apagando é perda de tempo. Faça a limpeza antes: <a href="{{g:find-duplicates}}">apague duplicadas</a>, <a href="{{g:blurry}}">fotos desfocadas</a> e capturas de tela que não precisa. Depois comprima o que sobrou e que você quer guardar. Mais ideias em <a href="{{g:free-space}}">como liberar espaço sem apagar apps</a>.</p>` },
      ],
      faq: [
        ['Comprimir fotos reduz a qualidade?', 'Sim, sempre se descarta alguma informação. Em nível alto a diferença é muito difícil de ver na tela; em nível baixo é mais notável, principalmente ao ampliar.'],
        ['Qual nível de compressão escolher?', 'Para lembranças e fotos comuns, Alta. Para documentos, recibos ou capturas que você só precisa ler, Média. Baixa só se precisar economizar ao máximo.'],
        ['Perde-se a data ou a localização da foto?', 'Depende do app e do formato. Se precisar manter esses dados, confira a cópia comprimida antes de apagar o original.'],
        ['A compressão é grátis no DupeFire?', 'O DupeFire é grátis com anúncios. Se tiver dúvida sobre quais recursos têm limite na versão grátis, veja a página do Google Play; o DupeFire Pro, pagamento único, remove os anúncios.'],
      ],
      ctaTitle: 'Guarde suas lembranças ocupando menos',
      ctaText: 'O DupeFire comprime fotos e vídeos no seu celular, salva uma cópia leve e mantém o original até você decidir. Sem conta e suas fotos não saem do celular. Para Android 8 ou superior.',
    },
  },
};
