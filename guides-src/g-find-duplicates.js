'use strict';
// Guía: cómo encontrar fotos duplicadas en Android
module.exports = {
  id: 'find-duplicates',
  slugs: { es: 'encontrar-fotos-duplicadas-android', en: 'find-duplicate-photos-android', pt: 'encontrar-fotos-duplicadas-android' },
  related: ['blurry', 'whatsapp-dups', 'free-space', 'best-apps'],
  content: {
    es: {
      title: 'Cómo encontrar fotos duplicadas en Android (gratis, paso a paso) — DupeFire',
      desc: 'Cómo encontrar y borrar fotos duplicadas en Android: dónde se esconden, cómo buscarlas a mano y cómo detectar también las casi idénticas en pocos minutos.',
      ogTitle: 'Cómo encontrar fotos duplicadas en Android',
      crumb: 'Encontrar fotos duplicadas',
      h1: 'Cómo encontrar <span class="em">fotos duplicadas</span> en Android',
      indexTitle: 'Cómo encontrar fotos duplicadas en Android',
      indexDesc: 'Dónde se esconden las copias, cómo buscarlas a mano y cómo detectar también las fotos casi idénticas.',
      lead: 'Ráfagas de la cámara, la misma foto en WhatsApp y en la galería, capturas repetidas, copias de seguridad… Con el tiempo, un móvil acumula miles de fotos repetidas que ocupan gigas. Esta guía te explica dónde están y cómo encontrarlas, con y sin app.',
      minutes: 7,
      answer: [
        'Mira primero las carpetas que más duplican: <strong>DCIM/Camera</strong>, <strong>Pictures</strong>, <strong>Download</strong> y las de WhatsApp o Telegram.',
        'Para las <strong>copias exactas</strong> te basta el limpiador de <strong>Files de Google</strong> (si tu móvil lo incluye) o la función de almacenamiento de tu fabricante.',
        'Para las <strong>fotos casi idénticas</strong> (recomprimidas, recortadas, ráfagas) necesitas comparar el contenido: una app como <strong>DupeFire</strong> las agrupa y te deja elegir cuál conservar.',
      ],
      sections: [
        { id: 'por-que', h: 'Por qué tu móvil tiene fotos duplicadas', toc: 'Por qué aparecen duplicados', html: `
  <p>Las duplicadas no suelen venir de que hagas algo mal. Aparecen solas por varias vías:</p>
  <ul>
    <li><strong>Mensajería.</strong> WhatsApp y Telegram guardan una copia de cada imagen que recibes, y otra de las que envías. Si el mismo meme llega por tres grupos, tienes tres archivos.</li>
    <li><strong>Ráfagas y fotos en vivo.</strong> La cámara guarda varias tomas casi iguales y, a veces, versiones editadas junto al original.</li>
    <li><strong>Capturas de pantalla repetidas</strong> de la misma conversación, del mismo mapa o de la misma entrada.</li>
    <li><strong>Copias manuales</strong>: fotos que pasaste al móvil desde el ordenador y ya estaban, o que descargas dos veces del correo.</li>
    <li><strong>Apps de copia y edición</strong> que guardan su propia versión en otra carpeta.</li>
  </ul>
  <p>Hay dos tipos y conviene distinguirlos: las <strong>duplicadas exactas</strong> (el mismo archivo byte a byte, aunque cambie el nombre) y las <strong>casi duplicadas</strong> (se ven igual, pero el archivo es distinto porque se recomprimió, recortó o editó). Las segundas son las más numerosas y las que ninguna búsqueda por nombre o tamaño encuentra.</p>` },
        { id: 'donde', h: 'Dónde buscar primero', html: `
  <p>Antes de nada, abre la app <strong>Files</strong> (o el explorador de archivos de tu móvil) y mira estas carpetas, que son las que más repetición acumulan:</p>
  <ul>
    <li><code>DCIM/Camera</code>: las fotos y vídeos de la cámara, incluidas las ráfagas.</li>
    <li><code>Pictures</code> y <code>Pictures/Screenshots</code>: capturas y fotos de otras apps.</li>
    <li><code>Download</code>: imágenes descargadas del navegador o del correo.</li>
    <li><code>Android/media/com.whatsapp/WhatsApp/Media</code> (y la de Telegram): todo lo que llega por mensajería.</li>
  </ul>
  <p>Ordena cada carpeta por <strong>nombre</strong> o por <strong>tamaño</strong>: dos archivos con el mismo tamaño exacto suelen ser la misma foto. Es un método lento, pero funciona para copias exactas si tienes pocas fotos.</p>` },
        { id: 'sin-app', h: 'Método 1: sin instalar nada', html: `
  <ol class="steps">
    <li>Abre <strong>Files de Google</strong> (viene en muchos móviles Android; si no, está en Play Store). Ve a la pestaña <strong>Limpiar</strong>.</li>
    <li>Si aparece una tarjeta de <strong>archivos duplicados</strong>, ábrela, revisa la lista y marca las copias que sobran. Deja una de cada.</li>
    <li>En móviles Samsung puedes probar con <strong>Ajustes → Batería y cuidado del dispositivo → Almacenamiento</strong>, que a veces propone archivos duplicados. Otros fabricantes tienen herramientas parecidas en su app de limpieza.</li>
    <li>Vacía la papelera de la galería o de Google Fotos: hasta entonces, el espacio no se recupera.</li>
  </ol>
  <div class="note warn">
    <span class="ic" aria-hidden="true">⚠️</span>
    <p>Estas herramientas suelen encontrar solo copias <em>idénticas</em>. No detectan una foto recomprimida por WhatsApp ni dos tomas casi iguales, y las opciones varían según el modelo y la versión de Android.</p>
  </div>` },
        { id: 'con-app', h: 'Método 2: detectar también las casi idénticas con DupeFire', toc: 'Método 2: con DupeFire', html: `
  <p>Si quieres limpiar de verdad, necesitas comparar lo que <em>se ve</em>, no el nombre del archivo. Así funciona con <strong>DupeFire</strong>:</p>
  <ol class="steps">
    <li>Instala <a href="{{play}}" target="_blank" rel="noopener">DupeFire desde Google Play</a> y dale permiso para ver tus fotos y vídeos.</li>
    <li>Toca <strong>Buscar duplicados</strong>. En unos segundos agrupa las <strong>copias exactas</strong> y las <strong>fotos visualmente parecidas</strong>, y también vídeos y documentos duplicados.</li>
    <li>Revisa cada grupo con su vista previa. La app marca la mejor copia (según resolución, fecha y tamaño) y sugiere borrar el resto; puedes cambiar la elección con un toque.</li>
    <li>Confirma el borrado. Al terminar verás cuánto espacio has recuperado.</li>
  </ol>
  <div class="note safe">
    <span class="ic" aria-hidden="true">🔒</span>
    <p>El análisis se hace en tu móvil: las fotos no se suben a ningún servidor y no hace falta crear una cuenta. Nada se borra sin que tú lo confirmes y los archivos van a la papelera del sistema, donde se pueden recuperar durante 30 días.</p>
  </div>
  <p>Si lo que más te sobra son fotos borrosas o capturas, mira también la guía para <a href="{{g:blurry}}">borrar fotos borrosas en masa</a>.</p>` },
        { id: 'despues', h: 'Después de borrar: comprueba esto', html: `
  <ul>
    <li><strong>Papelera.</strong> Muchas galerías guardan lo borrado 30 días. Vacíala si necesitas el espacio ya.</li>
    <li><strong>Copia de seguridad.</strong> Si usas Google Fotos, los cambios también se aplican en la nube. Revisa tu almacenamiento de Google en Ajustes de la app.</li>
    <li><strong>Hazlo con regularidad.</strong> Una limpieza al mes evita que se acumulen otra vez; la de WhatsApp, cada pocas semanas (mira <a href="{{g:whatsapp-full}}">qué borrar cuando WhatsApp llena el móvil</a>).</li>
  </ul>` },
      ],
      faq: [
        ['¿Cómo sé cuál de las fotos duplicadas conservar?', 'Normalmente la de mayor resolución y más reciente, o la que está en la carpeta de la cámara. DupeFire propone una por grupo según esos criterios, pero siempre puedes cambiarla antes de borrar.'],
        ['¿Borrar duplicados puede borrar la única copia de una foto?', 'No si compruebas que quede una de cada grupo. En DupeFire cada grupo siempre conserva al menos una copia marcada y el borrado lo confirmas tú. Aun así, si una foto es importante, haz una copia de seguridad antes de limpiar.'],
        ['¿Basta con Files de Google?', 'Es una buena primera pasada gratuita para copias exactas. Si quieres encontrar también fotos recomprimidas, recortadas o casi idénticas, necesitas una herramienta que compare el contenido de la imagen.'],
        ['¿Hay que pagar para buscar duplicados?', 'DupeFire es gratis con anuncios: buscar y borrar duplicados es gratuito. Smart Cleanup (borrosas, capturas, mensajería y archivos grandes) tiene un uso limitado en la versión gratuita; DupeFire Pro, de pago único, quita los anuncios y lo hace ilimitado.'],
      ],
      ctaTitle: 'Encuentra tus duplicados en unos segundos',
      ctaText: 'DupeFire agrupa copias exactas y fotos casi idénticas, y tú eliges cuál conservar. Sin cuenta y tus fotos no salen del móvil. Para Android 8 o superior.',
    },

    en: {
      title: 'How to Find Duplicate Photos on Android (Free, Step by Step) — DupeFire',
      desc: 'How to find and delete duplicate photos on Android: where they hide, how to look for them by hand and how to catch near-identical ones in a few minutes.',
      ogTitle: 'How to find duplicate photos on Android',
      crumb: 'Find duplicate photos',
      h1: 'How to find <span class="em">duplicate photos</span> on Android',
      indexTitle: 'How to find duplicate photos on Android',
      indexDesc: 'Where copies hide, how to look for them by hand and how to catch near-identical photos too.',
      lead: 'Camera bursts, the same photo in WhatsApp and in your gallery, repeated screenshots, backups… over time a phone collects thousands of repeated photos that take up gigabytes. This guide shows where they are and how to find them, with and without an app.',
      minutes: 7,
      answer: [
        'Check the folders that duplicate the most first: <strong>DCIM/Camera</strong>, <strong>Pictures</strong>, <strong>Download</strong> and the WhatsApp or Telegram folders.',
        'For <strong>exact copies</strong>, <strong>Files by Google</strong> (if your phone has it) or your manufacturer\'s storage tool is enough.',
        'For <strong>near-identical photos</strong> (recompressed, cropped, bursts) you need to compare the actual content: an app like <strong>DupeFire</strong> groups them and lets you pick which one to keep.',
      ],
      sections: [
        { id: 'why', h: 'Why your phone has duplicate photos', toc: 'Why duplicates appear', html: `
  <p>Duplicates rarely mean you did something wrong. They pile up on their own in several ways:</p>
  <ul>
    <li><strong>Messaging apps.</strong> WhatsApp and Telegram save a copy of every image you receive and another of the ones you send. If the same meme reaches you in three groups, you have three files.</li>
    <li><strong>Bursts and live photos.</strong> The camera saves several near-identical shots and sometimes edited versions next to the original.</li>
    <li><strong>Repeated screenshots</strong> of the same conversation, map or ticket.</li>
    <li><strong>Manual copies</strong>: photos you moved from your computer that were already on the phone, or that you downloaded twice from email.</li>
    <li><strong>Backup and editing apps</strong> that keep their own version in another folder.</li>
  </ul>
  <p>There are two kinds and it helps to tell them apart: <strong>exact duplicates</strong> (the same file byte for byte, even if the name changes) and <strong>near-duplicates</strong> (they look the same, but the file differs because it was recompressed, cropped or edited). The second kind is far more common, and no search by name or size will find it.</p>` },
        { id: 'where', h: 'Where to look first', html: `
  <p>Open the <strong>Files</strong> app (or your phone's file manager) and check these folders, which collect the most repetition:</p>
  <ul>
    <li><code>DCIM/Camera</code>: camera photos and videos, including bursts.</li>
    <li><code>Pictures</code> and <code>Pictures/Screenshots</code>: screenshots and photos from other apps.</li>
    <li><code>Download</code>: images downloaded from the browser or email.</li>
    <li><code>Android/media/com.whatsapp/WhatsApp/Media</code> (and Telegram's): everything that arrives by messaging.</li>
  </ul>
  <p>Sort each folder by <strong>name</strong> or <strong>size</strong>: two files with exactly the same size are usually the same photo. It's slow, but it works for exact copies if you don't have many photos.</p>` },
        { id: 'no-app', h: 'Method 1: without installing anything', html: `
  <ol class="steps">
    <li>Open <strong>Files by Google</strong> (it comes on many Android phones; otherwise it's on Google Play). Go to the <strong>Clean</strong> tab.</li>
    <li>If a <strong>duplicate files</strong> card appears, open it, review the list and tick the extra copies. Keep one of each.</li>
    <li>On Samsung phones, try <strong>Settings → Battery and device care → Storage</strong>, which sometimes suggests duplicate files. Other manufacturers have similar tools in their cleaner app.</li>
    <li>Empty the trash in your gallery or Google Photos: until then, the space isn't recovered.</li>
  </ol>
  <div class="note warn">
    <span class="ic" aria-hidden="true">⚠️</span>
    <p>These tools usually find only <em>identical</em> copies. They won't detect a photo recompressed by WhatsApp or two nearly identical shots, and the options vary by model and Android version.</p>
  </div>` },
        { id: 'with-app', h: 'Method 2: catch near-identical photos too with DupeFire', toc: 'Method 2: with DupeFire', html: `
  <p>To really clean up, you need to compare what the photos <em>look like</em>, not their file names. Here's how it works with <strong>DupeFire</strong>:</p>
  <ol class="steps">
    <li>Install <a href="{{play}}" target="_blank" rel="noopener">DupeFire from Google Play</a> and allow it to see your photos and videos.</li>
    <li>Tap <strong>Scan for duplicates</strong>. In a few seconds it groups <strong>exact copies</strong> and <strong>visually similar photos</strong>, plus duplicate videos and documents.</li>
    <li>Review each group with its preview. The app marks the best copy (by resolution, date and size) and suggests deleting the rest; you can change the choice with a tap.</li>
    <li>Confirm the deletion. At the end you'll see how much space you got back.</li>
  </ol>
  <div class="note safe">
    <span class="ic" aria-hidden="true">🔒</span>
    <p>The analysis runs on your phone: photos aren't uploaded to any server and you don't need an account. Nothing is deleted until you confirm it, and files go to the system trash, where you can restore them for 30 days.</p>
  </div>
  <p>If what you have most of is blurry photos or screenshots, see also the guide to <a href="{{g:blurry}}">deleting blurry photos in bulk</a>.</p>` },
        { id: 'after', h: 'After deleting: check this', html: `
  <ul>
    <li><strong>Trash.</strong> Many galleries keep deleted items for 30 days. Empty it if you need the space now.</li>
    <li><strong>Backup.</strong> If you use Google Photos, changes also apply in the cloud. Check your Google storage in the app's settings.</li>
    <li><strong>Make it a habit.</strong> A clean-up once a month stops them piling up again; for WhatsApp, every few weeks (see <a href="{{g:whatsapp-full}}">what to delete when WhatsApp fills your phone</a>).</li>
  </ul>` },
      ],
      faq: [
        ['How do I know which duplicate photo to keep?', 'Usually the one with the highest resolution and the most recent date, or the one in the camera folder. DupeFire suggests one per group on those criteria, but you can always change it before deleting.'],
        ['Can deleting duplicates remove the only copy of a photo?', 'Not if you make sure one in each group stays. In DupeFire every group always keeps at least one copy marked, and you confirm the deletion. Still, if a photo is important, back it up before cleaning.'],
        ['Is Files by Google enough?', 'It\'s a good free first pass for exact copies. If you also want to find recompressed, cropped or near-identical photos, you need a tool that compares the image content.'],
        ['Do I have to pay to find duplicates?', 'DupeFire is free with ads: finding and deleting duplicates is free. Smart Cleanup (blurry photos, screenshots, messaging and large files) has limited use in the free version; DupeFire Pro, a one-time purchase, removes the ads and makes it unlimited.'],
      ],
      ctaTitle: 'Find your duplicates in seconds',
      ctaText: 'DupeFire groups exact copies and near-identical photos, and you choose which one to keep. No account, and your photos never leave your phone. For Android 8 and later.',
    },

    pt: {
      title: 'Como encontrar fotos duplicadas no Android (grátis, passo a passo) — DupeFire',
      desc: 'Como encontrar e apagar fotos duplicadas no Android: onde elas se escondem, como procurar à mão e como detectar também as quase idênticas em poucos minutos.',
      ogTitle: 'Como encontrar fotos duplicadas no Android',
      crumb: 'Encontrar fotos duplicadas',
      h1: 'Como encontrar <span class="em">fotos duplicadas</span> no Android',
      indexTitle: 'Como encontrar fotos duplicadas no Android',
      indexDesc: 'Onde as cópias se escondem, como procurá-las à mão e como detectar também as fotos quase idênticas.',
      lead: 'Rajadas da câmera, a mesma foto no WhatsApp e na galeria, capturas de tela repetidas, backups… Com o tempo, o celular acumula milhares de fotos repetidas que ocupam gigas. Este guia mostra onde elas estão e como encontrá-las, com e sem app.',
      minutes: 7,
      answer: [
        'Veja primeiro as pastas que mais duplicam: <strong>DCIM/Camera</strong>, <strong>Pictures</strong>, <strong>Download</strong> e as do WhatsApp ou Telegram.',
        'Para as <strong>cópias exatas</strong>, basta o <strong>Files do Google</strong> (se o seu celular tiver) ou a ferramenta de armazenamento do fabricante.',
        'Para as <strong>fotos quase idênticas</strong> (recomprimidas, cortadas, rajadas) é preciso comparar o conteúdo: um app como o <strong>DupeFire</strong> as agrupa e deixa você escolher qual manter.',
      ],
      sections: [
        { id: 'por-que', h: 'Por que seu celular tem fotos duplicadas', toc: 'Por que aparecem duplicadas', html: `
  <p>Duplicadas raramente são culpa sua. Elas se acumulam sozinhas de várias formas:</p>
  <ul>
    <li><strong>Mensageiros.</strong> WhatsApp e Telegram salvam uma cópia de cada imagem que você recebe e outra das que envia. Se o mesmo meme chega por três grupos, são três arquivos.</li>
    <li><strong>Rajadas e fotos ao vivo.</strong> A câmera guarda várias fotos quase iguais e, às vezes, versões editadas ao lado da original.</li>
    <li><strong>Capturas de tela repetidas</strong> da mesma conversa, do mesmo mapa ou do mesmo ingresso.</li>
    <li><strong>Cópias manuais</strong>: fotos que você passou do computador e já estavam no celular, ou que baixou duas vezes do e-mail.</li>
    <li><strong>Apps de backup e edição</strong> que guardam a própria versão em outra pasta.</li>
  </ul>
  <p>Existem dois tipos e vale distingui-los: as <strong>duplicadas exatas</strong> (o mesmo arquivo byte a byte, mesmo com outro nome) e as <strong>quase duplicadas</strong> (parecem iguais, mas o arquivo é diferente porque foi recomprimido, cortado ou editado). As segundas são bem mais numerosas e nenhuma busca por nome ou tamanho as encontra.</p>` },
        { id: 'onde', h: 'Onde procurar primeiro', html: `
  <p>Abra o app <strong>Files</strong> (ou o gerenciador de arquivos do celular) e veja estas pastas, que acumulam mais repetição:</p>
  <ul>
    <li><code>DCIM/Camera</code>: fotos e vídeos da câmera, incluindo rajadas.</li>
    <li><code>Pictures</code> e <code>Pictures/Screenshots</code>: capturas de tela e fotos de outros apps.</li>
    <li><code>Download</code>: imagens baixadas do navegador ou do e-mail.</li>
    <li><code>Android/media/com.whatsapp/WhatsApp/Media</code> (e a do Telegram): tudo o que chega por mensagem.</li>
  </ul>
  <p>Ordene cada pasta por <strong>nome</strong> ou <strong>tamanho</strong>: dois arquivos com exatamente o mesmo tamanho costumam ser a mesma foto. É lento, mas funciona para cópias exatas se você tem poucas fotos.</p>` },
        { id: 'sem-app', h: 'Método 1: sem instalar nada', html: `
  <ol class="steps">
    <li>Abra o <strong>Files do Google</strong> (vem em muitos celulares Android; se não, está no Google Play). Vá à aba <strong>Limpar</strong>.</li>
    <li>Se aparecer um cartão de <strong>arquivos duplicados</strong>, abra, revise a lista e marque as cópias que sobram. Deixe uma de cada.</li>
    <li>Em celulares Samsung, tente <strong>Configurações → Bateria e cuidados do dispositivo → Armazenamento</strong>, que às vezes sugere arquivos duplicados. Outros fabricantes têm ferramentas parecidas no app de limpeza.</li>
    <li>Esvazie a lixeira da galeria ou do Google Fotos: até lá, o espaço não é recuperado.</li>
  </ol>
  <div class="note warn">
    <span class="ic" aria-hidden="true">⚠️</span>
    <p>Essas ferramentas costumam achar só cópias <em>idênticas</em>. Não detectam uma foto recomprimida pelo WhatsApp nem duas fotos quase iguais, e as opções variam conforme o modelo e a versão do Android.</p>
  </div>` },
        { id: 'com-app', h: 'Método 2: detecte também as quase idênticas com o DupeFire', toc: 'Método 2: com o DupeFire', html: `
  <p>Para limpar de verdade, é preciso comparar como as fotos <em>parecem</em>, não o nome do arquivo. Veja como funciona com o <strong>DupeFire</strong>:</p>
  <ol class="steps">
    <li>Instale o <a href="{{play}}" target="_blank" rel="noopener">DupeFire pelo Google Play</a> e dê permissão para ver suas fotos e vídeos.</li>
    <li>Toque em <strong>Buscar duplicatas</strong>. Em poucos segundos ele agrupa as <strong>cópias exatas</strong> e as <strong>fotos visualmente parecidas</strong>, além de vídeos e documentos duplicados.</li>
    <li>Revise cada grupo com a prévia. O app marca a melhor cópia (por resolução, data e tamanho) e sugere apagar o resto; você pode mudar a escolha com um toque.</li>
    <li>Confirme a exclusão. No final você vê quanto espaço recuperou.</li>
  </ol>
  <div class="note safe">
    <span class="ic" aria-hidden="true">🔒</span>
    <p>A análise acontece no seu celular: as fotos não são enviadas a nenhum servidor e não é preciso criar conta. Nada é apagado sem a sua confirmação e os arquivos vão para a lixeira do sistema, onde podem ser restaurados por 30 dias.</p>
  </div>
  <p>Se o que mais sobra são fotos desfocadas ou capturas de tela, veja também o guia para <a href="{{g:blurry}}">apagar fotos desfocadas em massa</a>.</p>` },
        { id: 'depois', h: 'Depois de apagar: confira isto', html: `
  <ul>
    <li><strong>Lixeira.</strong> Muitas galerias guardam o que foi apagado por 30 dias. Esvazie-a se precisa do espaço agora.</li>
    <li><strong>Backup.</strong> Se você usa o Google Fotos, as mudanças também valem na nuvem. Confira seu armazenamento do Google nas configurações do app.</li>
    <li><strong>Crie o hábito.</strong> Uma limpeza por mês evita que tudo se acumule de novo; a do WhatsApp, a cada poucas semanas (veja <a href="{{g:whatsapp-full}}">o que apagar quando o WhatsApp enche o celular</a>).</li>
  </ul>` },
      ],
      faq: [
        ['Como sei qual foto duplicada manter?', 'Normalmente a de maior resolução e mais recente, ou a que está na pasta da câmera. O DupeFire sugere uma por grupo com esses critérios, mas você sempre pode mudar antes de apagar.'],
        ['Apagar duplicadas pode remover a única cópia de uma foto?', 'Não, se você garantir que uma de cada grupo fique. No DupeFire cada grupo sempre mantém pelo menos uma cópia marcada e a exclusão é confirmada por você. Mesmo assim, se a foto é importante, faça backup antes de limpar.'],
        ['O Files do Google basta?', 'É uma boa primeira passada grátis para cópias exatas. Se você quer achar também fotos recomprimidas, cortadas ou quase idênticas, precisa de uma ferramenta que compare o conteúdo da imagem.'],
        ['Preciso pagar para procurar duplicadas?', 'O DupeFire é grátis com anúncios: procurar e apagar duplicadas é gratuito. O Smart Cleanup (desfocadas, capturas, mensageiros e arquivos grandes) tem uso limitado na versão grátis; o DupeFire Pro, pagamento único, remove os anúncios e o torna ilimitado.'],
      ],
      ctaTitle: 'Encontre suas duplicadas em segundos',
      ctaText: 'O DupeFire agrupa cópias exatas e fotos quase idênticas, e você escolhe qual manter. Sem conta e suas fotos não saem do celular. Para Android 8 ou superior.',
    },
  },
};
