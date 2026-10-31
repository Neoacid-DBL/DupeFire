'use strict';
// Guía: cómo liberar espacio en Android sin borrar apps
module.exports = {
  id: 'free-space',
  slugs: { es: 'liberar-espacio-android-sin-borrar-apps', en: 'free-up-space-android-without-deleting-apps', pt: 'liberar-espaco-android-sem-apagar-apps' },
  related: ['storage-full', 'find-duplicates', 'compress', 'whatsapp-full'],
  content: {
    es: {
      title: 'Cómo liberar espacio en Android sin borrar apps — DupeFire',
      desc: 'Cómo liberar gigas en Android sin desinstalar tus apps: papelera, descargas, duplicados, vídeos pesados, capturas y caché, en el orden que más espacio devuelve.',
      ogTitle: 'Cómo liberar espacio en Android sin borrar apps',
      crumb: 'Liberar espacio sin borrar apps',
      h1: 'Cómo liberar espacio en Android <span class="em">sin borrar apps</span>',
      indexTitle: 'Cómo liberar espacio en Android sin borrar apps',
      indexDesc: 'Seis sitios donde recuperar gigas sin desinstalar nada: papelera, descargas, duplicados, vídeos, capturas y caché.',
      lead: 'Casi siempre lo que llena el móvil no son las apps, sino lo que hay dentro: fotos, vídeos, descargas y archivos de mensajería. Esta guía repasa dónde recuperar espacio, de lo que más devuelve a lo que menos, sin desinstalar ninguna app.',
      minutes: 7,
      answer: [
        'Abre <strong>Ajustes → Almacenamiento</strong> y mira qué categoría pesa más: casi siempre son <strong>Imágenes y vídeos</strong> o <strong>Archivos</strong>, no las apps.',
        'Vacía la <strong>papelera</strong> de la galería, borra <strong>duplicados</strong> y <strong>vídeos pesados</strong>, y limpia <strong>capturas</strong> y la carpeta <strong>Descargas</strong>.',
        'Por último, borra la <strong>caché</strong> de las apps que más ocupan. Es un alivio temporal, así que déjala para el final.',
      ],
      sections: [
        { id: 'mirar', h: '1. Mira qué ocupa el espacio', html: `
  <p>Entra en <strong>Ajustes → Almacenamiento</strong> (o <strong>Cuidado del dispositivo</strong> en Samsung). Verás el desglose por categorías. Si <em>Aplicaciones</em> ocupa menos que <em>Imágenes</em>, <em>Vídeos</em> o <em>Archivos</em>, desinstalar apps no te arregla nada: el espacio está en tus propios archivos. Para ver el detalle por carpeta, la app <strong>Files de Google</strong> ordena por tamaño.</p>` },
        { id: 'papelera', h: '2. Vacía la papelera', html: `
  <p>Cuando borras una foto, muchas galerías y Google Fotos la mandan a una papelera donde sigue ocupando espacio durante días (30 en la mayoría de casos). Si has limpiado y el almacenamiento no baja, vacíala desde la propia galería. También hay una papelera en <strong>Files de Google</strong> y, en Android 11 o superior, en el sistema.</p>` },
        { id: 'duplicados', h: '3. Borra fotos y vídeos duplicados', html: `
  <p>Es el mayor ahorro con menos riesgo: las copias no aportan nada. Para las exactas te sirve el limpiador de <strong>Files de Google</strong>; para las casi idénticas (recomprimidas por WhatsApp, ráfagas, recortes) usa una app que compare el contenido, como <strong>DupeFire</strong>: toca <strong>Buscar duplicados</strong>, revisa cada grupo y confirma. Tienes los pasos detallados en <a href="{{g:find-duplicates}}">cómo encontrar fotos duplicadas en Android</a>.</p>` },
        { id: 'pesados', h: '4. Localiza los archivos y vídeos más pesados', html: `
  <p>Un solo vídeo de 4K puede ocupar más que mil fotos. Ordena <strong>Vídeos</strong> por tamaño en la galería o en Files, y revisa los que ya no necesites: grabaciones de pantalla, vídeos de WhatsApp reenviados, clases grabadas. En DupeFire, la herramienta <strong>Grandes</strong> de la pantalla de inicio lista tus archivos más pesados para revisarlos de un vistazo.</p>
  <p>Si un vídeo quieres conservarlo pero pesa demasiado, <a href="{{g:compress}}">comprímelo sin perder calidad apreciable</a> en lugar de borrarlo.</p>` },
        { id: 'capturas', h: '5. Capturas de pantalla y fotos borrosas', html: `
  <p>Son miles de archivos pequeños que no vuelves a abrir: entradas ya usadas, conversaciones, mapas. Abre <code>Pictures/Screenshots</code> y borra por lotes, o usa <strong>Capturas</strong> y <strong>Borrosas</strong> en DupeFire para verlas agrupadas con vista previa. Más en <a href="{{g:blurry}}">cómo borrar fotos borrosas en masa</a>.</p>` },
        { id: 'descargas', h: '6. Descargas y archivos de mensajería', html: `
  <p>La carpeta <strong>Descargas</strong> acumula PDF, instaladores y archivos que abriste una vez. Revísala en Files. Y las apps de mensajería guardan todo lo que reciben: mira <a href="{{g:whatsapp-full}}">qué borrar cuando WhatsApp llena el móvil</a>.</p>` },
        { id: 'cache', h: 'Lo último: la caché (y por qué no es la solución)', toc: 'La caché', html: `
  <p>En <strong>Ajustes → Aplicaciones</strong>, entra en las apps que más ocupan y pulsa <strong>Borrar caché</strong> (no «Borrar datos»: eso te cierra sesión y borra ajustes). La caché se vuelve a llenar con el uso, por eso es el último paso, no el primero.</p>
  <div class="note warn">
    <span class="ic" aria-hidden="true">⚠️</span>
    <p>Desconfía de las apps «aceleradoras» o de «limpiar RAM»: cerrar procesos no libera almacenamiento y muchas solo existen para enseñarte anuncios.</p>
  </div>` },
      ],
      faq: [
        ['¿Borrar la caché es seguro?', 'Sí: solo elimina archivos temporales que la app vuelve a crear. No borres «datos» o «almacenamiento» de una app salvo que quieras restablecerla.'],
        ['¿Cuánto espacio puedo recuperar?', 'Depende de tu móvil. En general, duplicados, vídeos pesados y archivos de mensajería son lo que más devuelve, pero no hay una cifra fija: tu galería es distinta a la de otra persona.'],
        ['¿Puedo mover cosas a la tarjeta SD o a la nube?', 'Si tu móvil tiene ranura SD, puedes mover fotos y vídeos. La nube (Google Fotos, Drive) sirve para liberar espacio local, pero primero conviene limpiar duplicados para no subir ni pagar por copias.'],
        ['¿DupeFire es gratis?', 'Sí, con anuncios. Buscar y borrar duplicados es gratis; Smart Cleanup (borrosas, capturas, mensajería y archivos grandes) tiene un uso limitado en la versión gratuita. DupeFire Pro, de pago único, quita los anuncios y lo hace ilimitado.'],
      ],
      ctaTitle: 'Recupera gigas sin desinstalar nada',
      ctaText: 'DupeFire encuentra duplicados, fotos borrosas, capturas y archivos grandes, y tú decides qué borrar. Sin cuenta y tus fotos no salen del móvil. Para Android 8 o superior.',
    },

    en: {
      title: 'How to Free Up Space on Android Without Deleting Apps — DupeFire',
      desc: 'How to free up gigabytes on Android without uninstalling your apps: trash, downloads, duplicates, heavy videos, screenshots and cache, in the order that gives back the most space.',
      ogTitle: 'How to free up space on Android without deleting apps',
      crumb: 'Free up space without deleting apps',
      h1: 'How to free up space on Android <span class="em">without deleting apps</span>',
      indexTitle: 'How to free up space on Android without deleting apps',
      indexDesc: 'Six places to get gigabytes back without uninstalling anything: trash, downloads, duplicates, videos, screenshots and cache.',
      lead: 'What fills your phone is almost never the apps, but what\'s inside them: photos, videos, downloads and messaging files. This guide goes through where to recover space, from what gives back the most to the least, without uninstalling a single app.',
      minutes: 7,
      answer: [
        'Open <strong>Settings → Storage</strong> and see which category weighs the most: it\'s almost always <strong>Images and videos</strong> or <strong>Files</strong>, not apps.',
        'Empty the gallery <strong>trash</strong>, delete <strong>duplicates</strong> and <strong>heavy videos</strong>, and clear <strong>screenshots</strong> and the <strong>Downloads</strong> folder.',
        'Last, clear the <strong>cache</strong> of the biggest apps. It\'s a temporary relief, so leave it for the end.',
      ],
      sections: [
        { id: 'check', h: '1. Check what\'s using the space', html: `
  <p>Go to <strong>Settings → Storage</strong> (or <strong>Device care</strong> on Samsung). You'll see the breakdown by category. If <em>Apps</em> takes less than <em>Images</em>, <em>Videos</em> or <em>Files</em>, uninstalling apps won't fix anything: the space is in your own files. For per-folder detail, <strong>Files by Google</strong> can sort by size.</p>` },
        { id: 'trash', h: '2. Empty the trash', html: `
  <p>When you delete a photo, many galleries and Google Photos send it to a trash where it keeps using space for days (30 in most cases). If you cleaned up and storage didn't go down, empty it from the gallery itself. There's also a trash in <strong>Files by Google</strong> and, on Android 11 or later, at system level.</p>` },
        { id: 'duplicates', h: '3. Delete duplicate photos and videos', html: `
  <p>It's the biggest saving with the least risk: copies add nothing. For exact ones, <strong>Files by Google</strong>'s cleaner works; for near-identical ones (recompressed by WhatsApp, bursts, crops) use an app that compares content, like <strong>DupeFire</strong>: tap <strong>Scan for duplicates</strong>, review each group and confirm. The detailed steps are in <a href="{{g:find-duplicates}}">how to find duplicate photos on Android</a>.</p>` },
        { id: 'heavy', h: '4. Find the heaviest files and videos', html: `
  <p>A single 4K video can take more than a thousand photos. Sort <strong>Videos</strong> by size in the gallery or in Files and review the ones you no longer need: screen recordings, forwarded WhatsApp videos, recorded classes. In DupeFire, the <strong>Large</strong> tool on the home screen lists your heaviest files so you can review them at a glance.</p>
  <p>If you want to keep a video but it weighs too much, <a href="{{g:compress}}">compress it without a noticeable loss of quality</a> instead of deleting it.</p>` },
        { id: 'screenshots', h: '5. Screenshots and blurry photos', html: `
  <p>They're thousands of small files you never open again: used tickets, conversations, maps. Open <code>Pictures/Screenshots</code> and delete in batches, or use <strong>Screenshots</strong> and <strong>Blurry</strong> in DupeFire to see them grouped with a preview. More in <a href="{{g:blurry}}">how to delete blurry photos in bulk</a>.</p>` },
        { id: 'downloads', h: '6. Downloads and messaging files', html: `
  <p>The <strong>Downloads</strong> folder piles up PDFs, installers and files you opened once. Review it in Files. And messaging apps keep everything they receive: see <a href="{{g:whatsapp-full}}">what to delete when WhatsApp fills your phone</a>.</p>` },
        { id: 'cache', h: 'Last: the cache (and why it\'s not the fix)', toc: 'The cache', html: `
  <p>In <strong>Settings → Apps</strong>, open the biggest apps and tap <strong>Clear cache</strong> (not "Clear data": that signs you out and wipes settings). The cache fills up again with use, which is why it's the last step, not the first.</p>
  <div class="note warn">
    <span class="ic" aria-hidden="true">⚠️</span>
    <p>Be wary of "booster" or "clean RAM" apps: closing processes doesn't free storage, and many exist just to show you ads.</p>
  </div>` },
      ],
      faq: [
        ['Is clearing the cache safe?', 'Yes: it only removes temporary files the app creates again. Don\'t clear an app\'s "data" or "storage" unless you want to reset it.'],
        ['How much space can I recover?', 'It depends on your phone. In general, duplicates, heavy videos and messaging files give back the most, but there\'s no fixed figure: your gallery is different from anyone else\'s.'],
        ['Can I move things to an SD card or the cloud?', 'If your phone has an SD slot you can move photos and videos. The cloud (Google Photos, Drive) frees local space, but it\'s best to clean duplicates first so you don\'t upload or pay for copies.'],
        ['Is DupeFire free?', 'Yes, with ads. Finding and deleting duplicates is free; Smart Cleanup (blurry photos, screenshots, messaging and large files) has limited use in the free version. DupeFire Pro, a one-time purchase, removes the ads and makes it unlimited.'],
      ],
      ctaTitle: 'Get gigabytes back without uninstalling anything',
      ctaText: 'DupeFire finds duplicates, blurry photos, screenshots and large files, and you decide what to delete. No account, and your photos never leave your phone. For Android 8 and later.',
    },

    pt: {
      title: 'Como liberar espaço no Android sem apagar apps — DupeFire',
      desc: 'Como liberar gigas no Android sem desinstalar seus apps: lixeira, downloads, duplicadas, vídeos pesados, capturas de tela e cache, na ordem que mais devolve espaço.',
      ogTitle: 'Como liberar espaço no Android sem apagar apps',
      crumb: 'Liberar espaço sem apagar apps',
      h1: 'Como liberar espaço no Android <span class="em">sem apagar apps</span>',
      indexTitle: 'Como liberar espaço no Android sem apagar apps',
      indexDesc: 'Seis lugares para recuperar gigas sem desinstalar nada: lixeira, downloads, duplicadas, vídeos, capturas e cache.',
      lead: 'Quase sempre o que enche o celular não são os apps, e sim o que está dentro dele: fotos, vídeos, downloads e arquivos de mensageiros. Este guia mostra onde recuperar espaço, do que mais devolve ao que menos devolve, sem desinstalar nenhum app.',
      minutes: 7,
      answer: [
        'Abra <strong>Configurações → Armazenamento</strong> e veja qual categoria pesa mais: quase sempre são <strong>Imagens e vídeos</strong> ou <strong>Arquivos</strong>, não os apps.',
        'Esvazie a <strong>lixeira</strong> da galeria, apague <strong>duplicadas</strong> e <strong>vídeos pesados</strong>, e limpe <strong>capturas de tela</strong> e a pasta <strong>Downloads</strong>.',
        'Por último, limpe o <strong>cache</strong> dos apps que mais ocupam. É um alívio temporário, então deixe para o fim.',
      ],
      sections: [
        { id: 'ver', h: '1. Veja o que ocupa o espaço', html: `
  <p>Entre em <strong>Configurações → Armazenamento</strong> (ou <strong>Cuidados do dispositivo</strong> na Samsung). Você verá o detalhamento por categoria. Se <em>Apps</em> ocupa menos que <em>Imagens</em>, <em>Vídeos</em> ou <em>Arquivos</em>, desinstalar apps não resolve: o espaço está nos seus próprios arquivos. Para ver por pasta, o <strong>Files do Google</strong> ordena por tamanho.</p>` },
        { id: 'lixeira', h: '2. Esvazie a lixeira', html: `
  <p>Quando você apaga uma foto, muitas galerias e o Google Fotos a enviam para uma lixeira onde ela continua ocupando espaço por dias (30 na maioria dos casos). Se você limpou e o armazenamento não baixou, esvazie-a pela própria galeria. Também há lixeira no <strong>Files do Google</strong> e, no Android 11 ou superior, no sistema.</p>` },
        { id: 'duplicadas', h: '3. Apague fotos e vídeos duplicados', html: `
  <p>É a maior economia com menos risco: cópias não acrescentam nada. Para as exatas serve o limpador do <strong>Files do Google</strong>; para as quase idênticas (recomprimidas pelo WhatsApp, rajadas, cortes) use um app que compare o conteúdo, como o <strong>DupeFire</strong>: toque em <strong>Buscar duplicatas</strong>, revise cada grupo e confirme. Os passos detalhados estão em <a href="{{g:find-duplicates}}">como encontrar fotos duplicadas no Android</a>.</p>` },
        { id: 'pesados', h: '4. Ache os arquivos e vídeos mais pesados', html: `
  <p>Um único vídeo em 4K pode ocupar mais que mil fotos. Ordene <strong>Vídeos</strong> por tamanho na galeria ou no Files e revise os que não precisa mais: gravações de tela, vídeos reencaminhados no WhatsApp, aulas gravadas. No DupeFire, a ferramenta <strong>Grandes</strong> da tela inicial lista seus arquivos mais pesados para revisar rapidamente.</p>
  <p>Se quer manter um vídeo mas ele pesa demais, <a href="{{g:compress}}">comprima-o sem perda de qualidade perceptível</a> em vez de apagá-lo.</p>` },
        { id: 'capturas', h: '5. Capturas de tela e fotos desfocadas', html: `
  <p>São milhares de arquivos pequenos que você nunca mais abre: ingressos já usados, conversas, mapas. Abra <code>Pictures/Screenshots</code> e apague em lotes, ou use <strong>Capturas</strong> e <strong>Desfocadas</strong> no DupeFire para vê-las agrupadas com prévia. Mais em <a href="{{g:blurry}}">como apagar fotos desfocadas em massa</a>.</p>` },
        { id: 'downloads', h: '6. Downloads e arquivos de mensageiros', html: `
  <p>A pasta <strong>Downloads</strong> acumula PDFs, instaladores e arquivos que você abriu uma vez. Revise no Files. E os apps de mensagem guardam tudo o que recebem: veja <a href="{{g:whatsapp-full}}">o que apagar quando o WhatsApp enche o celular</a>.</p>` },
        { id: 'cache', h: 'Por último: o cache (e por que não é a solução)', toc: 'O cache', html: `
  <p>Em <strong>Configurações → Apps</strong>, abra os apps que mais ocupam e toque em <strong>Limpar cache</strong> (não em «Limpar dados»: isso desconecta você e apaga as configurações). O cache enche de novo com o uso, por isso é o último passo, não o primeiro.</p>
  <div class="note warn">
    <span class="ic" aria-hidden="true">⚠️</span>
    <p>Desconfie de apps «aceleradores» ou de «limpar RAM»: fechar processos não libera armazenamento e muitos só existem para mostrar anúncios.</p>
  </div>` },
      ],
      faq: [
        ['Limpar o cache é seguro?', 'Sim: remove apenas arquivos temporários que o app recria. Não limpe os «dados» ou o «armazenamento» de um app a menos que queira redefini-lo.'],
        ['Quanto espaço posso recuperar?', 'Depende do seu celular. Em geral, duplicadas, vídeos pesados e arquivos de mensageiros são o que mais devolve, mas não há um número fixo: sua galeria é diferente da de outra pessoa.'],
        ['Posso mover coisas para o cartão SD ou para a nuvem?', 'Se o seu celular tem slot SD, você pode mover fotos e vídeos. A nuvem (Google Fotos, Drive) libera espaço local, mas convém limpar as duplicadas antes para não enviar nem pagar por cópias.'],
        ['O DupeFire é grátis?', 'Sim, com anúncios. Procurar e apagar duplicadas é grátis; o Smart Cleanup (desfocadas, capturas, mensageiros e arquivos grandes) tem uso limitado na versão grátis. O DupeFire Pro, pagamento único, remove os anúncios e o torna ilimitado.'],
      ],
      ctaTitle: 'Recupere gigas sem desinstalar nada',
      ctaText: 'O DupeFire encontra duplicadas, fotos desfocadas, capturas de tela e arquivos grandes, e você decide o que apagar. Sem conta e suas fotos não saem do celular. Para Android 8 ou superior.',
    },
  },
};
