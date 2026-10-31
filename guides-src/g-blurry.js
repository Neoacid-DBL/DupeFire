'use strict';
// Guía: cómo borrar fotos borrosas en masa
module.exports = {
  id: 'blurry',
  slugs: { es: 'borrar-fotos-borrosas-android', en: 'delete-blurry-photos-android', pt: 'apagar-fotos-desfocadas-android' },
  related: ['find-duplicates', 'free-space', 'storage-full', 'compress'],
  content: {
    es: {
      title: 'Cómo borrar fotos borrosas en masa en Android — DupeFire',
      desc: 'Cómo encontrar y borrar fotos borrosas, movidas o desenfocadas en Android sin revisarlas una a una: método manual y detección automática con vista previa.',
      ogTitle: 'Cómo borrar fotos borrosas en masa en Android',
      crumb: 'Borrar fotos borrosas',
      h1: 'Cómo borrar <span class="em">fotos borrosas</span> en masa en Android',
      indexTitle: 'Cómo borrar fotos borrosas en masa',
      indexDesc: 'Cómo localizar fotos movidas o desenfocadas sin revisar la galería entera y borrarlas con seguridad.',
      lead: 'La foto movida del perro, la tercera toma desenfocada de una cena, la captura que se hizo sola en el bolsillo… Las borrosas se acumulan sin que te des cuenta, y revisar miles de fotos a mano es inviable. Esta guía te enseña a encontrarlas y borrarlas en masa sin perder las buenas.',
      minutes: 6,
      answer: [
        'A mano: abre la galería, ordena por fecha y revisa las <strong>ráfagas y las tomas repetidas</strong>, que es donde se concentran las borrosas. Funciona, pero es lento.',
        'En masa: usa una app que mida la <strong>nitidez</strong> de cada foto y te las agrupe, como <strong>Smart Cleanup de DupeFire</strong>. Revisa la selección con vista previa antes de borrar.',
        'Ojo con las falsas alarmas: una foto nocturna, un retrato con fondo desenfocado o una foto artística pueden parecer borrosas sin serlo. Mira siempre la vista previa.',
      ],
      sections: [
        { id: 'por-que', h: 'Por qué se acumulan las fotos borrosas', toc: 'Por qué se acumulan', html: `
  <p>No las borras porque nunca las revisas. Se generan sobre todo por:</p>
  <ul>
    <li><strong>Ráfagas y tomas repetidas</strong>: haces cinco fotos y solo una sale bien, pero las otras cuatro se quedan.</li>
    <li><strong>Poca luz</strong>: las cámaras alargan la exposición y cualquier movimiento deja la foto movida.</li>
    <li><strong>Fotos accidentales</strong>: del suelo, del techo o del bolsillo.</li>
    <li><strong>Fotos de pantallas o documentos</strong> sacadas sin enfocar, que repites después bien hechas.</li>
  </ul>
  <p>Una foto borrosa ocupa lo mismo que una buena (a veces algo menos) y nunca la volverás a mirar, así que es de las cosas más seguras de borrar. El problema es encontrarlas.</p>` },
        { id: 'a-mano', h: 'Método 1: encontrarlas a mano', html: `
  <ol class="steps">
    <li>Abre la galería en la vista de <strong>cuadrícula</strong> y ordénala por <strong>fecha</strong>: las tomas repetidas quedan juntas.</li>
    <li>Entra en el modo de selección y marca las que veas movidas o desenfocadas. Con la cuadrícula pequeña se aprecia bien el desenfoque fuerte.</li>
    <li>Revisa especialmente las carpetas de la cámara y de <strong>capturas de pantalla</strong>.</li>
    <li>Borra y vacía la papelera para recuperar el espacio.</li>
  </ol>
  <p>Es el método más fiable porque decides tú, pero con miles de fotos se hace eterno. Algunas galerías o apps de limpieza de fabricantes sugieren fotos de baja calidad; si la tuya lo hace, aprovéchalo, aunque las opciones cambian según el modelo.</p>` },
        { id: 'automatico', h: 'Método 2: detección automática con DupeFire', toc: 'Método 2: automático', html: `
  <p>Con <strong>Smart Cleanup</strong> de DupeFire la app analiza la <strong>nitidez</strong> de cada imagen y te presenta las sospechosas de estar borrosas:</p>
  <ol class="steps">
    <li>Instala <a href="{{play}}" target="_blank" rel="noopener">DupeFire desde Google Play</a> y da permiso para ver tus fotos.</li>
    <li>En la pantalla de inicio, toca <strong>Borrosas</strong>. La app recorre tu galería en el propio móvil y las lista.</li>
    <li>Repasa la lista con la <strong>vista previa</strong>. Desmarca las que quieras conservar (por ejemplo, fotos nocturnas o artísticas).</li>
    <li>Confirma el borrado. Los archivos van a la papelera del sistema, donde puedes recuperarlos durante 30 días, y al terminar verás el espacio liberado.</li>
  </ol>
  <div class="note warn">
    <span class="ic" aria-hidden="true">⚠️</span>
    <p>La detección automática no es perfecta: puede marcar una foto con fondo desenfocado a propósito o una foto nocturna. Por eso conviene mirar la selección antes de confirmar. Smart Cleanup tiene un uso limitado en la versión gratuita de DupeFire.</p>
  </div>
  <div class="note safe">
    <span class="ic" aria-hidden="true">🔒</span>
    <p>Todo el análisis se hace en el dispositivo: tus fotos no se suben a ningún servidor ni necesitas cuenta.</p>
  </div>` },
        { id: 'duplicadas', h: 'Combínalo con la limpieza de duplicadas', html: `
  <p>Muchas fotos borrosas tienen una gemela buena justo al lado. Si primero eliminas las <a href="{{g:find-duplicates}}">fotos duplicadas y casi idénticas</a>, te queda menos que revisar. Después pasa a las capturas de pantalla antiguas, que suelen ser otro gran montón inútil, y revisa si necesitas <a href="{{g:compress}}">comprimir las fotos que quieras conservar</a>.</p>` },
        { id: 'prevenir', h: 'Cómo evitar que vuelvan a acumularse', html: `
  <ul>
    <li><strong>Revisa tras la toma.</strong> Si ves que salió movida, bórrala en el momento.</li>
    <li><strong>Desactiva el guardado de ráfagas</strong> si no las usas, o elige la mejor toma y descarta el resto.</li>
    <li><strong>Limpia a ciclos.</strong> Una pasada cada mes es mucho menos trabajo que una limpieza anual.</li>
  </ul>` },
      ],
      faq: [
        ['¿Cómo sabe una app que una foto está borrosa?', 'Mide la nitidez de los bordes de la imagen: si apenas hay contraste en los bordes, la foto está desenfocada o movida. No entiende qué hay en la foto, así que puede marcar fotos desenfocadas a propósito; por eso hay que revisar la vista previa.'],
        ['¿Puede borrar fotos buenas por error?', 'Puede marcar alguna que no es mala, y por eso nada se borra sin tu confirmación. Revisa la selección antes de aceptar y desmarca lo que quieras conservar.'],
        ['¿Se borran también de Google Fotos?', 'Si tienes la copia de seguridad activada, lo que borras en el móvil también se refleja en tu biblioteca de Google Fotos al sincronizar. Revisa la papelera de Google Fotos si quieres recuperar algo.'],
        ['¿Es gratis?', 'Sí, con anuncios. Smart Cleanup (borrosas, capturas, mensajería y archivos grandes) tiene un uso limitado en la versión gratuita; DupeFire Pro, de pago único, quita los anuncios y lo hace ilimitado.'],
      ],
      ctaTitle: 'Deja de revisar fotos una a una',
      ctaText: 'DupeFire detecta fotos borrosas, capturas y archivos grandes en tu móvil. Tú revisas y confirmas. Sin cuenta y tus fotos no salen del móvil. Para Android 8 o superior.',
    },

    en: {
      title: 'How to Delete Blurry Photos in Bulk on Android — DupeFire',
      desc: 'How to find and delete blurry, shaky or out-of-focus photos on Android without reviewing them one by one: a manual method and automatic detection with preview.',
      ogTitle: 'How to delete blurry photos in bulk on Android',
      crumb: 'Delete blurry photos',
      h1: 'How to delete <span class="em">blurry photos</span> in bulk on Android',
      indexTitle: 'How to delete blurry photos in bulk',
      indexDesc: 'How to find shaky or out-of-focus photos without scrolling your whole gallery, and delete them safely.',
      lead: 'The shaky photo of the dog, the third out-of-focus shot of a dinner, the picture your phone took by itself in your pocket… Blurry photos pile up without you noticing, and reviewing thousands by hand isn\'t realistic. This guide shows how to find and delete them in bulk without losing the good ones.',
      minutes: 6,
      answer: [
        'By hand: open your gallery, sort by date and review <strong>bursts and repeated shots</strong>, where most blurry photos hide. It works, but it\'s slow.',
        'In bulk: use an app that measures each photo\'s <strong>sharpness</strong> and groups the blurry ones, like <strong>DupeFire\'s Smart Cleanup</strong>. Review the selection with preview before deleting.',
        'Watch for false alarms: a night shot, a portrait with a blurred background or an artistic photo can look blurry without being a mistake. Always check the preview.',
      ],
      sections: [
        { id: 'why', h: 'Why blurry photos pile up', toc: 'Why they pile up', html: `
  <p>You don't delete them because you never look at them again. They mostly come from:</p>
  <ul>
    <li><strong>Bursts and repeated shots</strong>: you take five photos, only one comes out right, and the other four stay.</li>
    <li><strong>Low light</strong>: cameras lengthen the exposure and any movement blurs the shot.</li>
    <li><strong>Accidental photos</strong>: of the floor, the ceiling or your pocket.</li>
    <li><strong>Photos of screens or documents</strong> taken out of focus that you then retake properly.</li>
  </ul>
  <p>A blurry photo takes up as much space as a good one (sometimes a bit less) and you'll never look at it again, so it's one of the safest things to delete. The hard part is finding them.</p>` },
        { id: 'by-hand', h: 'Method 1: find them by hand', html: `
  <ol class="steps">
    <li>Open your gallery in <strong>grid</strong> view and sort by <strong>date</strong>: repeated shots end up next to each other.</li>
    <li>Enter selection mode and tick the ones that look shaky or out of focus. Strong blur is easy to spot in a small grid.</li>
    <li>Check the camera and <strong>screenshots</strong> folders in particular.</li>
    <li>Delete, then empty the trash to get the space back.</li>
  </ol>
  <p>It's the most reliable method because you decide, but with thousands of photos it takes forever. Some galleries or manufacturer cleaner apps suggest low-quality photos; if yours does, use it, though options vary by model.</p>` },
        { id: 'automatic', h: 'Method 2: automatic detection with DupeFire', toc: 'Method 2: automatic', html: `
  <p>With DupeFire's <strong>Smart Cleanup</strong> the app analyzes each image's <strong>sharpness</strong> and shows you the ones that look blurry:</p>
  <ol class="steps">
    <li>Install <a href="{{play}}" target="_blank" rel="noopener">DupeFire from Google Play</a> and allow it to see your photos.</li>
    <li>On the home screen, tap <strong>Blurry</strong>. The app goes through your gallery on the phone itself and lists them.</li>
    <li>Go through the list with the <strong>preview</strong>. Untick any you want to keep (for example night or artistic shots).</li>
    <li>Confirm the deletion. Files go to the system trash, where you can restore them for 30 days, and at the end you'll see the space you freed.</li>
  </ol>
  <div class="note warn">
    <span class="ic" aria-hidden="true">⚠️</span>
    <p>Automatic detection isn't perfect: it can flag a photo with a deliberately blurred background or a night shot. That's why you should look at the selection before confirming. Smart Cleanup has limited use in DupeFire's free version.</p>
  </div>
  <div class="note safe">
    <span class="ic" aria-hidden="true">🔒</span>
    <p>All analysis happens on the device: your photos aren't uploaded to any server and you don't need an account.</p>
  </div>` },
        { id: 'duplicates', h: 'Combine it with a duplicate clean-up', html: `
  <p>Many blurry photos have a good twin right next to them. If you first remove <a href="{{g:find-duplicates}}">duplicate and near-identical photos</a>, there's less left to review. Then move on to old screenshots, which are often another big pile of nothing, and check whether you need to <a href="{{g:compress}}">compress the photos you want to keep</a>.</p>` },
        { id: 'prevent', h: 'How to stop them piling up again', html: `
  <ul>
    <li><strong>Check right after the shot.</strong> If it came out shaky, delete it on the spot.</li>
    <li><strong>Turn off burst saving</strong> if you don't use it, or pick the best shot and discard the rest.</li>
    <li><strong>Clean in cycles.</strong> A pass every month is far less work than a yearly clean-up.</li>
  </ul>` },
      ],
      faq: [
        ['How does an app know a photo is blurry?', 'It measures the sharpness of the image\'s edges: if there is hardly any contrast at the edges, the photo is out of focus or shaky. It doesn\'t understand what\'s in the photo, so it can flag deliberately blurred shots; that\'s why you should check the preview.'],
        ['Can it delete good photos by mistake?', 'It can flag some that aren\'t bad, which is why nothing is deleted without your confirmation. Review the selection before accepting and untick anything you want to keep.'],
        ['Are they also deleted from Google Photos?', 'If backup is on, what you delete on the phone is also reflected in your Google Photos library when it syncs. Check the Google Photos trash if you want to recover something.'],
        ['Is it free?', 'Yes, with ads. Smart Cleanup (blurry photos, screenshots, messaging and large files) has limited use in the free version; DupeFire Pro, a one-time purchase, removes the ads and makes it unlimited.'],
      ],
      ctaTitle: 'Stop reviewing photos one by one',
      ctaText: 'DupeFire detects blurry photos, screenshots and large files on your phone. You review and confirm. No account, and your photos never leave your phone. For Android 8 and later.',
    },

    pt: {
      title: 'Como apagar fotos desfocadas em massa no Android — DupeFire',
      desc: 'Como encontrar e apagar fotos desfocadas, tremidas ou fora de foco no Android sem revisar uma a uma: método manual e detecção automática com prévia.',
      ogTitle: 'Como apagar fotos desfocadas em massa no Android',
      crumb: 'Apagar fotos desfocadas',
      h1: 'Como apagar <span class="em">fotos desfocadas</span> em massa no Android',
      indexTitle: 'Como apagar fotos desfocadas em massa',
      indexDesc: 'Como localizar fotos tremidas ou fora de foco sem revisar a galeria inteira e apagá-las com segurança.',
      lead: 'A foto tremida do cachorro, a terceira tentativa fora de foco de um jantar, a foto que o celular tirou sozinho no bolso… As desfocadas se acumulam sem você perceber, e revisar milhares à mão é inviável. Este guia mostra como achar e apagar tudo em massa sem perder as boas.',
      minutes: 6,
      answer: [
        'À mão: abra a galeria, ordene por data e revise as <strong>rajadas e as fotos repetidas</strong>, onde ficam a maioria das desfocadas. Funciona, mas é lento.',
        'Em massa: use um app que meça a <strong>nitidez</strong> de cada foto e agrupe as desfocadas, como o <strong>Smart Cleanup do DupeFire</strong>. Revise a seleção com prévia antes de apagar.',
        'Cuidado com falsos alarmes: uma foto noturna, um retrato com fundo desfocado ou uma foto artística podem parecer desfocadas sem serem erro. Olhe sempre a prévia.',
      ],
      sections: [
        { id: 'por-que', h: 'Por que as fotos desfocadas se acumulam', toc: 'Por que se acumulam', html: `
  <p>Você não as apaga porque nunca mais olha para elas. Elas surgem principalmente por:</p>
  <ul>
    <li><strong>Rajadas e fotos repetidas</strong>: você tira cinco fotos, só uma sai boa e as outras quatro ficam.</li>
    <li><strong>Pouca luz</strong>: as câmeras aumentam a exposição e qualquer movimento deixa a foto tremida.</li>
    <li><strong>Fotos acidentais</strong>: do chão, do teto ou do bolso.</li>
    <li><strong>Fotos de telas ou documentos</strong> tiradas fora de foco, que você refaz depois.</li>
  </ul>
  <p>Uma foto desfocada ocupa o mesmo espaço que uma boa (às vezes um pouco menos) e você nunca mais vai olhar para ela, então é das coisas mais seguras de apagar. O difícil é achá-las.</p>` },
        { id: 'a-mao', h: 'Método 1: encontrar à mão', html: `
  <ol class="steps">
    <li>Abra a galeria na visualização em <strong>grade</strong> e ordene por <strong>data</strong>: as fotos repetidas ficam juntas.</li>
    <li>Entre no modo de seleção e marque as que parecerem tremidas ou fora de foco. O desfoque forte é fácil de ver numa grade pequena.</li>
    <li>Confira em especial as pastas da câmera e de <strong>capturas de tela</strong>.</li>
    <li>Apague e esvazie a lixeira para recuperar o espaço.</li>
  </ol>
  <p>É o método mais confiável porque você decide, mas com milhares de fotos demora uma eternidade. Algumas galerias ou apps de limpeza dos fabricantes sugerem fotos de baixa qualidade; se o seu fizer isso, aproveite, embora as opções variem conforme o modelo.</p>` },
        { id: 'automatico', h: 'Método 2: detecção automática com o DupeFire', toc: 'Método 2: automático', html: `
  <p>Com o <strong>Smart Cleanup</strong> do DupeFire, o app analisa a <strong>nitidez</strong> de cada imagem e mostra as que parecem desfocadas:</p>
  <ol class="steps">
    <li>Instale o <a href="{{play}}" target="_blank" rel="noopener">DupeFire pelo Google Play</a> e dê permissão para ver suas fotos.</li>
    <li>Na tela inicial, toque em <strong>Desfocadas</strong>. O app percorre sua galeria no próprio celular e as lista.</li>
    <li>Passe pela lista com a <strong>prévia</strong>. Desmarque as que quiser manter (por exemplo, fotos noturnas ou artísticas).</li>
    <li>Confirme a exclusão. Os arquivos vão para a lixeira do sistema, onde podem ser restaurados por 30 dias, e no final você verá o espaço liberado.</li>
  </ol>
  <div class="note warn">
    <span class="ic" aria-hidden="true">⚠️</span>
    <p>A detecção automática não é perfeita: pode marcar uma foto com fundo desfocado de propósito ou uma foto noturna. Por isso convém olhar a seleção antes de confirmar. O Smart Cleanup tem uso limitado na versão grátis do DupeFire.</p>
  </div>
  <div class="note safe">
    <span class="ic" aria-hidden="true">🔒</span>
    <p>Toda a análise acontece no dispositivo: suas fotos não são enviadas a nenhum servidor e você não precisa de conta.</p>
  </div>` },
        { id: 'duplicadas', h: 'Combine com a limpeza de duplicadas', html: `
  <p>Muitas fotos desfocadas têm uma gêmea boa logo ao lado. Se você primeiro eliminar as <a href="{{g:find-duplicates}}">fotos duplicadas e quase idênticas</a>, sobra menos para revisar. Depois passe para as capturas de tela antigas, que costumam ser outro grande monte inútil, e veja se vale <a href="{{g:compress}}">comprimir as fotos que quiser manter</a>.</p>` },
        { id: 'prevenir', h: 'Como evitar que se acumulem de novo', html: `
  <ul>
    <li><strong>Confira logo após a foto.</strong> Se saiu tremida, apague na hora.</li>
    <li><strong>Desative o salvamento de rajadas</strong> se não usa, ou escolha a melhor foto e descarte o resto.</li>
    <li><strong>Limpe em ciclos.</strong> Uma passada por mês dá muito menos trabalho que uma limpeza anual.</li>
  </ul>` },
      ],
      faq: [
        ['Como um app sabe que uma foto está desfocada?', 'Ele mede a nitidez das bordas da imagem: se quase não há contraste nas bordas, a foto está fora de foco ou tremida. Ele não entende o que há na foto, então pode marcar fotos desfocadas de propósito; por isso é preciso olhar a prévia.'],
        ['Pode apagar fotos boas por engano?', 'Pode marcar algumas que não são ruins, e por isso nada é apagado sem a sua confirmação. Revise a seleção antes de aceitar e desmarque o que quiser manter.'],
        ['Elas também são apagadas do Google Fotos?', 'Se o backup estiver ativado, o que você apaga no celular também se reflete na sua biblioteca do Google Fotos ao sincronizar. Confira a lixeira do Google Fotos se quiser recuperar algo.'],
        ['É grátis?', 'Sim, com anúncios. O Smart Cleanup (desfocadas, capturas, mensageiros e arquivos grandes) tem uso limitado na versão grátis; o DupeFire Pro, pagamento único, remove os anúncios e o torna ilimitado.'],
      ],
      ctaTitle: 'Pare de revisar fotos uma a uma',
      ctaText: 'O DupeFire detecta fotos desfocadas, capturas de tela e arquivos grandes no seu celular. Você revisa e confirma. Sem conta e suas fotos não saem do celular. Para Android 8 ou superior.',
    },
  },
};
