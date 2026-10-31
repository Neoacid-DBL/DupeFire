'use strict';
// Guía: WhatsApp almacenamiento lleno, qué borrar
module.exports = {
  id: 'whatsapp-full',
  slugs: { es: 'whatsapp-almacenamiento-lleno-que-borrar', en: 'whatsapp-storage-full-what-to-delete', pt: 'whatsapp-armazenamento-cheio-o-que-apagar' },
  related: ['whatsapp-dups', 'find-duplicates', 'free-space', 'storage-full'],
  content: {
    es: {
      title: 'WhatsApp llena tu móvil: qué borrar sin perder lo importante — DupeFire',
      desc: 'WhatsApp ocupa gigas en tu Android. Qué borrar primero, cómo usar el gestor de almacenamiento de WhatsApp y cómo evitar que vuelva a llenarse, sin perder tus chats.',
      ogTitle: 'WhatsApp llena el móvil: qué borrar',
      crumb: 'WhatsApp: almacenamiento lleno',
      h1: 'WhatsApp llena tu móvil: <span class="em">qué borrar</span> sin perder lo importante',
      indexTitle: 'WhatsApp: almacenamiento lleno, qué borrar',
      indexDesc: 'Qué ocupa más en WhatsApp, qué borrar primero y cómo evitar que vuelva a llenarse.',
      lead: 'Tu móvil avisa de que no hay espacio y WhatsApp aparece entre lo que más ocupa. No es raro: guarda cada foto, vídeo, nota de voz y documento que recibes. La buena noticia es que casi todo se puede limpiar sin tocar los mensajes.',
      minutes: 7,
      answer: [
        'Abre <strong>Ajustes → Almacenamiento y datos → Administrar almacenamiento</strong> en WhatsApp y empieza por <strong>«Reenviados muchas veces»</strong> y <strong>«Más de 5 MB»</strong>.',
        'Entra después en los chats y grupos que más pesan y borra los vídeos, que suelen ser lo mayor.',
        'Para las <strong>copias repetidas y las fotos casi idénticas</strong>, que WhatsApp no detecta, usa una app como <strong>DupeFire</strong> (herramienta <strong>Chats</strong>). Y desactiva la descarga automática para no volver a llenarlo.',
      ],
      sections: [
        { id: 'que-ocupa', h: 'Qué ocupa tanto espacio en WhatsApp', toc: 'Qué ocupa el espacio', html: `
  <p>No son los mensajes de texto, que apenas pesan. Lo que ocupa son los archivos multimedia:</p>
  <ul>
    <li><strong>Vídeos</strong>: lo que más pesa, con diferencia, sobre todo de grupos muy activos.</li>
    <li><strong>Fotos y memes</strong>: individualmente pesan poco, pero se repiten por varios chats.</li>
    <li><strong>Notas de voz y audios</strong>, que suman con los años.</li>
    <li><strong>Documentos</strong>: PDF, hojas de cálculo y archivos reenviados.</li>
    <li><strong>Stickers y GIF</strong>.</li>
  </ul>
  <p>WhatsApp guarda todo en <code>Android/media/com.whatsapp/WhatsApp/Media/</code> (en WhatsApp Business, <code>com.whatsapp.w4b</code>). Mira esa carpeta con la app Files para ver cuánto pesa cada tipo.</p>` },
        { id: 'gestor', h: 'Paso 1: usa el gestor de almacenamiento de WhatsApp', html: `
  <ol class="steps">
    <li>En WhatsApp, abre <strong>Ajustes → Almacenamiento y datos → Administrar almacenamiento</strong>.</li>
    <li>Entra en <strong>«Reenviados muchas veces»</strong>: cadenas y memes. Selecciona todo y borra.</li>
    <li>Entra en <strong>«Más de 5 MB»</strong>: sobre todo vídeos. Revisa y borra lo que no quieras.</li>
    <li>Más abajo verás los chats ordenados por tamaño. Abre los más pesados y borra por lotes, ordenando por tamaño.</li>
  </ol>
  <div class="note warn">
    <span class="ic" aria-hidden="true">⚠️</span>
    <p>Lo que borras aquí desaparece de tu móvil y del chat. Si una foto o un vídeo te importa, guárdalo antes en la galería o en otro sitio.</p>
  </div>` },
        { id: 'duplicadas', h: 'Paso 2: elimina las copias repetidas', html: `
  <p>Aquí está el espacio que WhatsApp no sabe ver: el mismo meme guardado cinco veces, la foto que te enviaron tres personas, la copia de lo que tú envías en la carpeta <em>Sent</em>. Con <strong>DupeFire</strong>:</p>
  <ol class="steps">
    <li>Instala <a href="{{play}}" target="_blank" rel="noopener">DupeFire desde Google Play</a> y concede acceso a tus fotos y vídeos.</li>
    <li>En la pantalla de inicio toca <strong>Chats</strong> para ver lo que han descargado WhatsApp y Telegram, o <strong>Buscar duplicados</strong> para encontrar las copias repetidas.</li>
    <li>Revisa con la vista previa y elige qué conservar.</li>
    <li>Confirma. Los archivos van a la papelera del sistema, donde puedes recuperarlos durante 30 días.</li>
  </ol>
  <div class="note safe">
    <span class="ic" aria-hidden="true">🔒</span>
    <p>DupeFire solo analiza los archivos de imagen, vídeo y documento del almacenamiento, y lo hace en tu móvil. No lee tus mensajes y las fotos no se suben a ningún servidor.</p>
  </div>
  <p>El proceso completo para las fotos está en <a href="{{g:whatsapp-dups}}">cómo borrar las fotos duplicadas de WhatsApp</a>.</p>` },
        { id: 'prevenir', h: 'Paso 3: que no vuelva a llenarse', html: `
  <ul>
    <li><strong>Descarga automática.</strong> En <strong>Ajustes → Almacenamiento y datos → Descarga automática</strong>, pon «Sin archivos multimedia» en datos móviles, wifi y roaming, o solo fotos. Descargarás solo lo que abras.</li>
    <li><strong>Visibilidad de archivos.</strong> En <strong>Ajustes → Chats → Visibilidad de archivos multimedia</strong>, desactívala si no quieres que lo de WhatsApp llene tu galería.</li>
    <li><strong>Grupos muy activos.</strong> Silencia los que más media generan o activa los mensajes temporales; los archivos ya descargados seguirán en el móvil, así que límpialos cada cierto tiempo.</li>
    <li><strong>Revisión mensual.</strong> Cinco minutos al mes valen más que una limpieza de emergencia cuando ya no cabe nada.</li>
  </ul>` },
        { id: 'telegram', h: 'Si usas también Telegram', html: `
  <p>Telegram guarda una caché que puedes vaciar sin perder los mensajes, porque los archivos se pueden volver a descargar de sus servidores: <strong>Ajustes → Datos y almacenamiento → Uso del almacenamiento → Borrar caché</strong> (los nombres pueden variar según la versión). Si tienes activado «Guardar en galería», también se repiten las fotos en <code>Pictures/Telegram</code>.</p>` },
      ],
      faq: [
        ['¿Si borro archivos del móvil se borran para la otra persona?', 'No. Lo que borras en tu móvil solo afecta a tu copia; la otra persona conserva la suya.'],
        ['¿Se pierden los mensajes de texto al borrar multimedia?', 'No. Los mensajes siguen en el chat; lo que desaparece son las fotos, vídeos o documentos que borres. Verás que ya no se pueden abrir.'],
        ['¿Y la copia de seguridad de WhatsApp?', 'La copia de Google Drive se rehace con lo que hay en el móvil, así que en la siguiente copia ya no estarán los archivos borrados. Si algo importa, guárdalo antes de limpiar.'],
        ['¿DupeFire es gratis?', 'Sí, con anuncios. Buscar y borrar duplicados es gratuito; Smart Cleanup (borrosas, capturas, mensajería y archivos grandes) tiene un uso limitado en la versión gratuita. DupeFire Pro, de pago único, quita los anuncios y lo hace ilimitado.'],
      ],
      ctaTitle: 'Que WhatsApp deje de llenarte el móvil',
      ctaText: 'DupeFire reúne lo que descargan WhatsApp y Telegram y encuentra las copias repetidas, para que borres solo lo que sobra. Sin cuenta y tus fotos no salen del móvil. Para Android 8 o superior.',
    },

    en: {
      title: 'WhatsApp Filling Your Phone? What to Delete Without Losing What Matters — DupeFire',
      desc: 'WhatsApp is taking gigabytes on your Android. What to delete first, how to use WhatsApp\'s storage manager and how to stop it filling up again, without losing your chats.',
      ogTitle: 'WhatsApp filling your phone? What to delete',
      crumb: 'WhatsApp storage full',
      h1: 'WhatsApp filling your phone? <span class="em">What to delete</span> without losing what matters',
      indexTitle: 'WhatsApp storage full: what to delete',
      indexDesc: 'What takes the most space in WhatsApp, what to delete first and how to stop it filling up again.',
      lead: 'Your phone warns you there\'s no space and WhatsApp is among the biggest items. That\'s normal: it saves every photo, video, voice note and document you receive. The good news is that almost all of it can be cleaned without touching your messages.',
      minutes: 7,
      answer: [
        'In WhatsApp open <strong>Settings → Storage and data → Manage storage</strong> and start with <strong>"Forwarded many times"</strong> and <strong>"Larger than 5 MB"</strong>.',
        'Then go into the chats and groups that weigh the most and delete the videos, which are usually the biggest part.',
        'For <strong>repeated copies and near-identical photos</strong>, which WhatsApp can\'t detect, use an app like <strong>DupeFire</strong> (the <strong>Chats</strong> tool). And turn off auto-download so it doesn\'t fill up again.',
      ],
      sections: [
        { id: 'what', h: 'What takes up so much space in WhatsApp', toc: 'What takes the space', html: `
  <p>It isn't text messages, which weigh almost nothing. It's the media files:</p>
  <ul>
    <li><strong>Videos</strong>: by far the heaviest, especially from very active groups.</li>
    <li><strong>Photos and memes</strong>: light one by one, but repeated across chats.</li>
    <li><strong>Voice notes and audio</strong>, which add up over the years.</li>
    <li><strong>Documents</strong>: PDFs, spreadsheets and forwarded files.</li>
    <li><strong>Stickers and GIFs</strong>.</li>
  </ul>
  <p>WhatsApp stores everything in <code>Android/media/com.whatsapp/WhatsApp/Media/</code> (for WhatsApp Business, <code>com.whatsapp.w4b</code>). Look at that folder with the Files app to see how much each type weighs.</p>` },
        { id: 'manager', h: 'Step 1: use WhatsApp\'s storage manager', html: `
  <ol class="steps">
    <li>In WhatsApp, open <strong>Settings → Storage and data → Manage storage</strong>.</li>
    <li>Open <strong>"Forwarded many times"</strong>: chain messages and memes. Select all and delete.</li>
    <li>Open <strong>"Larger than 5 MB"</strong>: mostly videos. Review and delete what you don't want.</li>
    <li>Further down, chats are sorted by size. Open the heaviest ones and delete in batches, sorting by size.</li>
  </ol>
  <div class="note warn">
    <span class="ic" aria-hidden="true">⚠️</span>
    <p>What you delete here disappears from your phone and from the chat. If a photo or video matters, save it to your gallery or somewhere else first.</p>
  </div>` },
        { id: 'duplicates', h: 'Step 2: remove the repeated copies', html: `
  <p>This is the space WhatsApp can't see: the same meme saved five times, the photo three people sent you, the copy of what you send in the <em>Sent</em> folder. With <strong>DupeFire</strong>:</p>
  <ol class="steps">
    <li>Install <a href="{{play}}" target="_blank" rel="noopener">DupeFire from Google Play</a> and grant access to your photos and videos.</li>
    <li>On the home screen tap <strong>Chats</strong> to see what WhatsApp and Telegram have downloaded, or <strong>Scan for duplicates</strong> to find the repeated copies.</li>
    <li>Review with the preview and choose what to keep.</li>
    <li>Confirm. Files go to the system trash, where you can restore them for 30 days.</li>
  </ol>
  <div class="note safe">
    <span class="ic" aria-hidden="true">🔒</span>
    <p>DupeFire only analyzes the image, video and document files in storage, and it does so on your phone. It doesn't read your messages and photos aren't uploaded to any server.</p>
  </div>
  <p>The full process for photos is in <a href="{{g:whatsapp-dups}}">how to delete duplicate WhatsApp photos</a>.</p>` },
        { id: 'prevent', h: 'Step 3: stop it filling up again', html: `
  <ul>
    <li><strong>Auto-download.</strong> In <strong>Settings → Storage and data → Media auto-download</strong>, set "No media" for mobile data, Wi-Fi and roaming, or photos only. You'll only download what you open.</li>
    <li><strong>Media visibility.</strong> In <strong>Settings → Chats → Media visibility</strong>, turn it off if you don't want WhatsApp stuff filling your gallery.</li>
    <li><strong>Very active groups.</strong> Mute the ones that generate the most media or turn on disappearing messages; files already downloaded stay on the phone, so clean them now and then.</li>
    <li><strong>Monthly check.</strong> Five minutes a month beats an emergency clean-up when nothing fits anymore.</li>
  </ul>` },
        { id: 'telegram', h: 'If you also use Telegram', html: `
  <p>Telegram keeps a cache you can empty without losing messages, because files can be downloaded again from its servers: <strong>Settings → Data and storage → Storage usage → Clear cache</strong> (names may vary by version). If "Save to gallery" is on, photos are also repeated in <code>Pictures/Telegram</code>.</p>` },
      ],
      faq: [
        ['If I delete files from my phone, are they deleted for the other person?', 'No. What you delete on your phone only affects your copy; the other person keeps theirs.'],
        ['Do I lose text messages when I delete media?', 'No. Messages stay in the chat; what disappears are the photos, videos or documents you delete, which can no longer be opened.'],
        ['What about my WhatsApp backup?', 'The Google Drive backup is rebuilt from what\'s on your phone, so the next backup won\'t include the deleted files. If something matters, save it before cleaning.'],
        ['Is DupeFire free?', 'Yes, with ads. Finding and deleting duplicates is free; Smart Cleanup (blurry photos, screenshots, messaging and large files) has limited use in the free version. DupeFire Pro, a one-time purchase, removes the ads and makes it unlimited.'],
      ],
      ctaTitle: 'Stop WhatsApp filling your phone',
      ctaText: 'DupeFire gathers what WhatsApp and Telegram download and finds the repeated copies, so you delete only what\'s extra. No account, and your photos never leave your phone. For Android 8 and later.',
    },

    pt: {
      title: 'WhatsApp enchendo o celular: o que apagar sem perder o importante — DupeFire',
      desc: 'O WhatsApp ocupa gigas no seu Android. O que apagar primeiro, como usar o gerenciador de armazenamento do WhatsApp e como evitar que encha de novo, sem perder suas conversas.',
      ogTitle: 'WhatsApp enchendo o celular: o que apagar',
      crumb: 'WhatsApp: armazenamento cheio',
      h1: 'WhatsApp enchendo o celular: <span class="em">o que apagar</span> sem perder o importante',
      indexTitle: 'WhatsApp: armazenamento cheio, o que apagar',
      indexDesc: 'O que ocupa mais espaço no WhatsApp, o que apagar primeiro e como evitar que encha de novo.',
      lead: 'O celular avisa que não há espaço e o WhatsApp aparece entre o que mais ocupa. É normal: ele guarda cada foto, vídeo, áudio e documento que você recebe. A boa notícia é que quase tudo pode ser limpo sem mexer nas mensagens.',
      minutes: 7,
      answer: [
        'No WhatsApp, abra <strong>Configurações → Armazenamento e dados → Gerenciar armazenamento</strong> e comece por <strong>«Encaminhadas muitas vezes»</strong> e <strong>«Maiores que 5 MB»</strong>.',
        'Depois entre nas conversas e grupos que mais pesam e apague os vídeos, que costumam ser a maior parte.',
        'Para as <strong>cópias repetidas e fotos quase idênticas</strong>, que o WhatsApp não detecta, use um app como o <strong>DupeFire</strong> (ferramenta <strong>Chats</strong>). E desative o download automático para não encher de novo.',
      ],
      sections: [
        { id: 'que-ocupa', h: 'O que ocupa tanto espaço no WhatsApp', toc: 'O que ocupa o espaço', html: `
  <p>Não são as mensagens de texto, que quase não pesam. O que ocupa são os arquivos de mídia:</p>
  <ul>
    <li><strong>Vídeos</strong>: de longe os mais pesados, principalmente de grupos muito ativos.</li>
    <li><strong>Fotos e memes</strong>: leves um a um, mas repetidos por vários chats.</li>
    <li><strong>Áudios e mensagens de voz</strong>, que somam com os anos.</li>
    <li><strong>Documentos</strong>: PDFs, planilhas e arquivos encaminhados.</li>
    <li><strong>Figurinhas e GIFs</strong>.</li>
  </ul>
  <p>O WhatsApp guarda tudo em <code>Android/media/com.whatsapp/WhatsApp/Media/</code> (no WhatsApp Business, <code>com.whatsapp.w4b</code>). Veja essa pasta com o app Files para saber quanto pesa cada tipo.</p>` },
        { id: 'gerenciador', h: 'Passo 1: use o gerenciador de armazenamento do WhatsApp', html: `
  <ol class="steps">
    <li>No WhatsApp, abra <strong>Configurações → Armazenamento e dados → Gerenciar armazenamento</strong>.</li>
    <li>Entre em <strong>«Encaminhadas muitas vezes»</strong>: correntes e memes. Selecione tudo e apague.</li>
    <li>Entre em <strong>«Maiores que 5 MB»</strong>: principalmente vídeos. Revise e apague o que não quiser.</li>
    <li>Mais abaixo as conversas aparecem ordenadas por tamanho. Abra as mais pesadas e apague em lotes, ordenando por tamanho.</li>
  </ol>
  <div class="note warn">
    <span class="ic" aria-hidden="true">⚠️</span>
    <p>O que você apaga aqui some do celular e da conversa. Se uma foto ou vídeo importa, salve antes na galeria ou em outro lugar.</p>
  </div>` },
        { id: 'duplicadas', h: 'Passo 2: elimine as cópias repetidas', html: `
  <p>Aqui está o espaço que o WhatsApp não consegue ver: o mesmo meme salvo cinco vezes, a foto que três pessoas mandaram, a cópia do que você envia na pasta <em>Sent</em>. Com o <strong>DupeFire</strong>:</p>
  <ol class="steps">
    <li>Instale o <a href="{{play}}" target="_blank" rel="noopener">DupeFire pelo Google Play</a> e conceda acesso às suas fotos e vídeos.</li>
    <li>Na tela inicial, toque em <strong>Chats</strong> para ver o que WhatsApp e Telegram baixaram, ou em <strong>Buscar duplicatas</strong> para achar as cópias repetidas.</li>
    <li>Revise com a prévia e escolha o que manter.</li>
    <li>Confirme. Os arquivos vão para a lixeira do sistema, onde podem ser restaurados por 30 dias.</li>
  </ol>
  <div class="note safe">
    <span class="ic" aria-hidden="true">🔒</span>
    <p>O DupeFire só analisa os arquivos de imagem, vídeo e documento do armazenamento, e faz isso no seu celular. Ele não lê suas mensagens e as fotos não são enviadas a nenhum servidor.</p>
  </div>
  <p>O processo completo para as fotos está em <a href="{{g:whatsapp-dups}}">como apagar as fotos duplicadas do WhatsApp</a>.</p>` },
        { id: 'prevenir', h: 'Passo 3: evite que encha de novo', html: `
  <ul>
    <li><strong>Download automático.</strong> Em <strong>Configurações → Armazenamento e dados → Download automático de mídia</strong>, escolha «Nenhuma mídia» para dados móveis, Wi-Fi e roaming, ou só fotos. Você só baixa o que abrir.</li>
    <li><strong>Visibilidade de mídia.</strong> Em <strong>Configurações → Conversas → Visibilidade de mídia</strong>, desative se não quer que o conteúdo do WhatsApp encha sua galeria.</li>
    <li><strong>Grupos muito ativos.</strong> Silencie os que mais geram mídia ou ative as mensagens temporárias; os arquivos já baixados ficam no celular, então limpe de vez em quando.</li>
    <li><strong>Revisão mensal.</strong> Cinco minutos por mês valem mais que uma limpeza de emergência quando já não cabe nada.</li>
  </ul>` },
        { id: 'telegram', h: 'Se você também usa o Telegram', html: `
  <p>O Telegram guarda um cache que você pode esvaziar sem perder mensagens, porque os arquivos podem ser baixados de novo dos servidores dele: <strong>Configurações → Dados e armazenamento → Uso de armazenamento → Limpar cache</strong> (os nomes podem variar conforme a versão). Se «Salvar na galeria» estiver ativado, as fotos também se repetem em <code>Pictures/Telegram</code>.</p>` },
      ],
      faq: [
        ['Se eu apagar arquivos do celular, eles somem para a outra pessoa?', 'Não. O que você apaga no seu celular afeta só a sua cópia; a outra pessoa mantém a dela.'],
        ['Perco as mensagens de texto ao apagar mídia?', 'Não. As mensagens continuam na conversa; o que some são as fotos, vídeos ou documentos que você apagar, que não poderão mais ser abertos.'],
        ['E o backup do WhatsApp?', 'O backup do Google Drive é refeito com o que está no celular, então no próximo backup os arquivos apagados não estarão mais. Se algo importa, salve antes de limpar.'],
        ['O DupeFire é grátis?', 'Sim, com anúncios. Procurar e apagar duplicadas é grátis; o Smart Cleanup (desfocadas, capturas, mensageiros e arquivos grandes) tem uso limitado na versão grátis. O DupeFire Pro, pagamento único, remove os anúncios e o torna ilimitado.'],
      ],
      ctaTitle: 'Chega de o WhatsApp encher seu celular',
      ctaText: 'O DupeFire reúne o que WhatsApp e Telegram baixam e encontra as cópias repetidas, para você apagar só o que sobra. Sem conta e suas fotos não saem do celular. Para Android 8 ou superior.',
    },
  },
};
