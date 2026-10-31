'use strict';
// Guía: mejores apps para borrar duplicados en Android (comparativa honesta)
module.exports = {
  id: 'best-apps',
  slugs: { es: 'mejores-apps-borrar-duplicados-android', en: 'best-duplicate-cleaner-apps-android', pt: 'melhores-apps-apagar-duplicados-android' },
  related: ['find-duplicates', 'free-space', 'blurry', 'compress'],
  content: {
    es: {
      title: 'Mejores apps para borrar duplicados en Android: comparativa honesta — DupeFire',
      desc: 'Qué opciones hay para borrar fotos y archivos duplicados en Android: Files de Google, limpiadores del fabricante, SD Maid y DupeFire. Cuándo sirve cada una y qué mirar antes de instalar.',
      ogTitle: 'Mejores apps para borrar duplicados en Android',
      crumb: 'Mejores apps para borrar duplicados',
      h1: 'Mejores <span class="em">apps para borrar duplicados</span> en Android: comparativa honesta',
      indexTitle: 'Mejores apps para borrar duplicados en Android',
      indexDesc: 'Una comparativa sin humo: qué opciones hay, cuándo sirve cada una y qué mirar antes de instalar.',
      lead: 'Hay decenas de apps «limpiadoras» en Google Play y muchas no merecen la pena. Aquí repasamos las opciones reales, cuándo conviene cada una y en qué es mejor o peor DupeFire. Aviso: DupeFire es nuestra app, así que lo decimos desde el principio y somos igual de claros con sus límites.',
      minutes: 8,
      answer: [
        'Si solo tienes <strong>copias exactas</strong> y quieres lo mínimo, prueba primero <strong>Files de Google</strong> o el limpiador de tu fabricante: son gratuitos y ya vienen o son de confianza.',
        'Si quieres un control más técnico del sistema, <strong>SD Maid</strong> es una herramienta potente pero más compleja.',
        'Si lo que tienes son <strong>fotos casi idénticas, borrosas, capturas y archivos de WhatsApp</strong>, y quieres revisarlas con vista previa, <strong>DupeFire</strong> está pensada para eso, con las limitaciones que explicamos abajo.',
      ],
      sections: [
        { id: 'criterios', h: 'Qué mirar antes de instalar un limpiador de duplicados', toc: 'Qué mirar antes de instalar', html: `
  <ul>
    <li><strong>Qué detecta.</strong> ¿Solo copias exactas o también fotos visualmente parecidas?</li>
    <li><strong>Cómo borra.</strong> Lo ideal es vista previa y confirmación, y que los archivos vayan a la papelera del sistema para poder recuperarlos.</li>
    <li><strong>Privacidad.</strong> ¿Analiza en el móvil o sube tus fotos a un servidor? Lee la ficha de Play y la política de privacidad.</li>
    <li><strong>Permisos y anuncios.</strong> Desconfía de apps que piden permisos que no necesitan o que bloquean la función principal con anuncios.</li>
    <li><strong>Reseñas recientes.</strong> Mira las de los últimos meses, no solo la nota media.</li>
  </ul>` },
        { id: 'opciones', h: 'Las opciones, una a una', html: `
  <h3>Files de Google</h3>
  <p>Gratuita y de Google. Su pestaña <strong>Limpiar</strong> suele sugerir archivos duplicados, archivos grandes y basura. Es una buena primera pasada para <strong>copias idénticas</strong>. Lo que no hace es agrupar fotos casi idénticas (recomprimidas, ráfagas, recortes) y sus opciones dependen de la versión.</p>
  <h3>Limpiador del fabricante (Samsung, Xiaomi, etc.)</h3>
  <p>Ya viene instalado y es de confianza. Lo que ofrece varía mucho según la marca y el modelo; algunos sugieren duplicados y archivos grandes. Si no te ofrece la función que buscas, no hay forma de añadirla.</p>
  <h3>Google Fotos</h3>
  <p>No es un buscador de duplicados, sino una copia de seguridad y organizador. Su función «Liberar espacio» quita del móvil lo que ya está subido, que es otra tarea distinta.</p>
  <h3>SD Maid (SE)</h3>
  <p>Herramienta potente para usuarios con conocimientos: limpia restos de apps, caché y puede buscar duplicados. Es más técnica y puede asustar a quien solo quiere borrar unas fotos; algunas funciones pueden ser de pago, comprueba la ficha actual.</p>
  <h3>Otras apps de duplicados de Play Store</h3>
  <p>Hay muchas. Aplica la lista de arriba antes de instalar cualquiera: qué detectan, cómo borran, qué permisos piden y qué dicen las reseñas recientes.</p>
  <h3>DupeFire</h3>
  <p>Es la que hacemos nosotros. Detecta <strong>copias exactas y fotos visualmente similares</strong>, además de vídeos y documentos duplicados, fotos borrosas, capturas, archivos de WhatsApp y Telegram y archivos grandes; comprime fotos y vídeos; propone qué copia conservar y te deja revisarlo todo con vista previa antes de confirmar. El análisis se hace en el móvil y los archivos van a la papelera del sistema durante 30 días.</p>` },
        { id: 'limites', h: 'Los límites de DupeFire, sin adornos', html: `
  <ul>
    <li><strong>Es una app joven y pequeña.</strong> Tiene pocas reseñas y mucho menos recorrido que las grandes. Juzga por lo que hace, no por la fama.</li>
    <li><strong>Solo Android.</strong> No hay versión para iPhone.</li>
    <li><strong>Tiene anuncios</strong> en la versión gratuita. DupeFire Pro, de pago único, los quita.</li>
    <li><strong>Algunas funciones tienen uso limitado</strong> en la versión gratuita (Smart Cleanup: borrosas, capturas, mensajería y archivos grandes).</li>
    <li><strong>No lee ni entiende el contenido.</strong> Detecta la similitud visual y la nitidez, no si una foto es importante; por eso hay que revisar antes de borrar.</li>
  </ul>
  <div class="note safe">
    <span class="ic" aria-hidden="true">🔒</span>
    <p>Las fotos no se suben a ningún servidor y no hace falta cuenta. La app usa servicios de analítica y publicidad, como se detalla en su política de privacidad.</p>
  </div>` },
        { id: 'cual', h: 'Entonces, ¿cuál elegir?', html: `
  <ol class="steps">
    <li>Empieza por la <strong>opción gratuita que ya tienes</strong> (Files de Google o el limpiador del fabricante) para las copias exactas.</li>
    <li>Si después sigues sin espacio o tienes muchas fotos casi repetidas, borrosas o de WhatsApp, prueba <a href="{{play}}" target="_blank" rel="noopener">DupeFire desde Google Play</a>.</li>
    <li>Sea cual sea la app, <strong>revisa antes de borrar</strong> y no la uses sobre fotos que no tengas respaldadas si son muy importantes.</li>
  </ol>
  <p>Y para ver cómo se hace paso a paso: <a href="{{g:find-duplicates}}">cómo encontrar fotos duplicadas en Android</a>.</p>` },
      ],
      faq: [
        ['¿Hay alguna app de duplicados que sea totalmente gratis y sin anuncios?', 'Las herramientas del sistema (como Files de Google o el limpiador del fabricante) suelen ser gratuitas. Entre las apps independientes, casi todas se mantienen con anuncios o con una versión de pago; revisa la ficha actual en Google Play.'],
        ['¿Es seguro dar permiso a una app para ver mis fotos?', 'Es necesario para que pueda analizarlas. Instala solo apps de desarrolladores de confianza, lee su política de privacidad y comprueba si el análisis se hace en el móvil.'],
        ['¿Puedo recuperar lo que borre por error?', 'Depende de la app. DupeFire envía los archivos a la papelera del sistema, donde puedes restaurarlos durante 30 días. Pregunta lo mismo a cualquier otra.'],
        ['¿Esta comparativa es imparcial?', 'La escribimos los creadores de DupeFire, así que hemos intentado ser claros con sus límites y sin afirmar nada que no podamos comprobar sobre las demás. Las funciones de otras apps cambian: verifica siempre en su ficha de Google Play.'],
      ],
      ctaTitle: 'Pruébala y decide tú',
      ctaText: 'DupeFire es gratis y no pide cuenta. Revisa cada grupo con vista previa, confirma y recupera espacio. Tus fotos no salen del móvil. Para Android 8 o superior.',
    },

    en: {
      title: 'Best Duplicate Photo Cleaner Apps for Android: An Honest Comparison — DupeFire',
      desc: 'What options exist to delete duplicate photos and files on Android: Files by Google, manufacturer cleaners, SD Maid and DupeFire. When each one makes sense and what to check before installing.',
      ogTitle: 'Best duplicate cleaner apps for Android',
      crumb: 'Best duplicate cleaner apps',
      h1: 'Best <span class="em">duplicate cleaner apps</span> for Android: an honest comparison',
      indexTitle: 'Best duplicate cleaner apps for Android',
      indexDesc: 'A no-hype comparison: what options exist, when each one makes sense and what to check before installing.',
      lead: 'There are dozens of "cleaner" apps on Google Play and many aren\'t worth it. Here we go through the real options, when each makes sense and where DupeFire is better or worse. Disclosure: DupeFire is our app, so we say that up front and are just as clear about its limits.',
      minutes: 8,
      answer: [
        'If you only have <strong>exact copies</strong> and want the minimum, try <strong>Files by Google</strong> or your manufacturer\'s cleaner first: they\'re free and trustworthy.',
        'If you want more technical control of the system, <strong>SD Maid</strong> is powerful but more complex.',
        'If what you have is <strong>near-identical photos, blurry shots, screenshots and WhatsApp files</strong>, and you want to review them with a preview, <strong>DupeFire</strong> is built for that, with the limitations explained below.',
      ],
      sections: [
        { id: 'criteria', h: 'What to check before installing a duplicate cleaner', toc: 'What to check first', html: `
  <ul>
    <li><strong>What it detects.</strong> Only exact copies, or visually similar photos too?</li>
    <li><strong>How it deletes.</strong> Ideally with a preview and confirmation, and with files going to the system trash so you can recover them.</li>
    <li><strong>Privacy.</strong> Does it analyze on the phone or upload your photos to a server? Read the Play listing and the privacy policy.</li>
    <li><strong>Permissions and ads.</strong> Be wary of apps that ask for permissions they don't need or block the main function behind ads.</li>
    <li><strong>Recent reviews.</strong> Read those from the last few months, not just the average rating.</li>
  </ul>` },
        { id: 'options', h: 'The options, one by one', html: `
  <h3>Files by Google</h3>
  <p>Free and from Google. Its <strong>Clean</strong> tab usually suggests duplicate files, large files and junk. It's a good first pass for <strong>identical copies</strong>. What it doesn't do is group near-identical photos (recompressed, bursts, crops), and its options depend on the version.</p>
  <h3>Manufacturer cleaner (Samsung, Xiaomi, etc.)</h3>
  <p>Already installed and trustworthy. What it offers varies a lot by brand and model; some suggest duplicates and large files. If it doesn't offer the feature you want, you can't add it.</p>
  <h3>Google Photos</h3>
  <p>It isn't a duplicate finder but a backup and organizer. Its "Free up space" feature removes from the phone what's already uploaded, which is a different job.</p>
  <h3>SD Maid (SE)</h3>
  <p>A powerful tool for people with some technical knowledge: it cleans app leftovers and cache and can look for duplicates. It's more technical and may intimidate someone who just wants to delete a few photos; some features may be paid, so check the current listing.</p>
  <h3>Other duplicate apps on Google Play</h3>
  <p>There are many. Apply the list above before installing any: what they detect, how they delete, what permissions they ask for and what recent reviews say.</p>
  <h3>DupeFire</h3>
  <p>The one we make. It detects <strong>exact copies and visually similar photos</strong>, plus duplicate videos and documents, blurry photos, screenshots, WhatsApp and Telegram files and large files; it compresses photos and videos; it suggests which copy to keep and lets you review everything with a preview before confirming. Analysis runs on the phone and files go to the system trash for 30 days.</p>` },
        { id: 'limits', h: 'DupeFire\'s limits, no sugar-coating', html: `
  <ul>
    <li><strong>It's a young, small app.</strong> It has few reviews and far less track record than the big ones. Judge it by what it does, not by fame.</li>
    <li><strong>Android only.</strong> There's no iPhone version.</li>
    <li><strong>It has ads</strong> in the free version. DupeFire Pro, a one-time purchase, removes them.</li>
    <li><strong>Some features have limited use</strong> in the free version (Smart Cleanup: blurry photos, screenshots, messaging and large files).</li>
    <li><strong>It doesn't understand content.</strong> It detects visual similarity and sharpness, not whether a photo matters; that's why you should review before deleting.</li>
  </ul>
  <div class="note safe">
    <span class="ic" aria-hidden="true">🔒</span>
    <p>Photos aren't uploaded to any server and no account is needed. The app uses analytics and advertising services, as detailed in its privacy policy.</p>
  </div>` },
        { id: 'which', h: 'So, which one should you pick?', html: `
  <ol class="steps">
    <li>Start with the <strong>free option you already have</strong> (Files by Google or your manufacturer's cleaner) for exact copies.</li>
    <li>If you're still short on space or have lots of near-repeated, blurry or WhatsApp photos, try <a href="{{play}}" target="_blank" rel="noopener">DupeFire from Google Play</a>.</li>
    <li>Whichever app you use, <strong>review before deleting</strong> and don't run it on very important photos you haven't backed up.</li>
  </ol>
  <p>And to see how it's done step by step: <a href="{{g:find-duplicates}}">how to find duplicate photos on Android</a>.</p>` },
      ],
      faq: [
        ['Is there a duplicate app that\'s totally free and ad-free?', 'System tools (like Files by Google or the manufacturer\'s cleaner) are usually free. Among independent apps, almost all are supported by ads or a paid version; check the current Google Play listing.'],
        ['Is it safe to let an app see my photos?', 'It\'s necessary for it to analyze them. Install only apps from developers you trust, read their privacy policy and check whether analysis runs on the phone.'],
        ['Can I recover what I delete by mistake?', 'It depends on the app. DupeFire sends files to the system trash, where you can restore them for 30 days. Ask the same of any other.'],
        ['Is this comparison impartial?', 'It\'s written by DupeFire\'s makers, so we\'ve tried to be clear about its limits and not claim anything we can\'t verify about the others. Other apps\' features change: always check their Google Play listing.'],
      ],
      ctaTitle: 'Try it and decide for yourself',
      ctaText: 'DupeFire is free and asks for no account. Review each group with a preview, confirm and get space back. Your photos never leave your phone. For Android 8 and later.',
    },

    pt: {
      title: 'Melhores apps para apagar duplicadas no Android: comparativo honesto — DupeFire',
      desc: 'Quais opções existem para apagar fotos e arquivos duplicados no Android: Files do Google, limpadores do fabricante, SD Maid e DupeFire. Quando cada uma serve e o que ver antes de instalar.',
      ogTitle: 'Melhores apps para apagar duplicadas no Android',
      crumb: 'Melhores apps para apagar duplicadas',
      h1: 'Melhores <span class="em">apps para apagar duplicadas</span> no Android: comparativo honesto',
      indexTitle: 'Melhores apps para apagar duplicadas no Android',
      indexDesc: 'Um comparativo sem exagero: quais opções existem, quando cada uma serve e o que ver antes de instalar.',
      lead: 'Existem dezenas de apps «limpadores» no Google Play e muitos não valem a pena. Aqui revisamos as opções reais, quando cada uma convém e onde o DupeFire é melhor ou pior. Aviso: o DupeFire é o nosso app, então dizemos isso de cara e somos igualmente claros sobre os limites dele.',
      minutes: 8,
      answer: [
        'Se você só tem <strong>cópias exatas</strong> e quer o mínimo, teste primeiro o <strong>Files do Google</strong> ou o limpador do fabricante: são grátis e confiáveis.',
        'Se quer mais controle técnico do sistema, o <strong>SD Maid</strong> é poderoso, mas mais complexo.',
        'Se o que você tem são <strong>fotos quase idênticas, desfocadas, capturas de tela e arquivos do WhatsApp</strong>, e quer revisá-las com prévia, o <strong>DupeFire</strong> foi feito para isso, com as limitações explicadas abaixo.',
      ],
      sections: [
        { id: 'criterios', h: 'O que ver antes de instalar um limpador de duplicadas', toc: 'O que ver antes de instalar', html: `
  <ul>
    <li><strong>O que detecta.</strong> Só cópias exatas ou também fotos visualmente parecidas?</li>
    <li><strong>Como apaga.</strong> O ideal é ter prévia e confirmação, e que os arquivos vão para a lixeira do sistema para poder recuperá-los.</li>
    <li><strong>Privacidade.</strong> Ele analisa no celular ou envia suas fotos a um servidor? Leia a página do Play e a política de privacidade.</li>
    <li><strong>Permissões e anúncios.</strong> Desconfie de apps que pedem permissões desnecessárias ou bloqueiam a função principal com anúncios.</li>
    <li><strong>Avaliações recentes.</strong> Leia as dos últimos meses, não só a nota média.</li>
  </ul>` },
        { id: 'opcoes', h: 'As opções, uma a uma', html: `
  <h3>Files do Google</h3>
  <p>Grátis e do Google. A aba <strong>Limpar</strong> costuma sugerir arquivos duplicados, arquivos grandes e lixo. É uma boa primeira passada para <strong>cópias idênticas</strong>. O que ele não faz é agrupar fotos quase idênticas (recomprimidas, rajadas, cortes), e as opções dependem da versão.</p>
  <h3>Limpador do fabricante (Samsung, Xiaomi etc.)</h3>
  <p>Já vem instalado e é confiável. O que oferece varia muito conforme a marca e o modelo; alguns sugerem duplicadas e arquivos grandes. Se não oferece a função que você quer, não há como adicioná-la.</p>
  <h3>Google Fotos</h3>
  <p>Não é um localizador de duplicadas, e sim um backup e organizador. A função «Liberar espaço» remove do celular o que já foi enviado, que é outra tarefa.</p>
  <h3>SD Maid (SE)</h3>
  <p>Ferramenta poderosa para quem tem conhecimento técnico: limpa restos de apps, cache e pode procurar duplicadas. É mais técnica e pode assustar quem só quer apagar algumas fotos; algumas funções podem ser pagas, confira a página atual.</p>
  <h3>Outros apps de duplicadas do Google Play</h3>
  <p>Há muitos. Aplique a lista acima antes de instalar qualquer um: o que detectam, como apagam, que permissões pedem e o que dizem as avaliações recentes.</p>
  <h3>DupeFire</h3>
  <p>É o que nós fazemos. Detecta <strong>cópias exatas e fotos visualmente semelhantes</strong>, além de vídeos e documentos duplicados, fotos desfocadas, capturas de tela, arquivos do WhatsApp e do Telegram e arquivos grandes; comprime fotos e vídeos; sugere qual cópia manter e deixa você revisar tudo com prévia antes de confirmar. A análise acontece no celular e os arquivos vão para a lixeira do sistema por 30 dias.</p>` },
        { id: 'limites', h: 'Os limites do DupeFire, sem enfeite', html: `
  <ul>
    <li><strong>É um app jovem e pequeno.</strong> Tem poucas avaliações e muito menos histórico que os grandes. Julgue pelo que faz, não pela fama.</li>
    <li><strong>Só Android.</strong> Não existe versão para iPhone.</li>
    <li><strong>Tem anúncios</strong> na versão grátis. O DupeFire Pro, pagamento único, os remove.</li>
    <li><strong>Alguns recursos têm uso limitado</strong> na versão grátis (Smart Cleanup: desfocadas, capturas, mensageiros e arquivos grandes).</li>
    <li><strong>Não entende o conteúdo.</strong> Detecta semelhança visual e nitidez, não se uma foto é importante; por isso é preciso revisar antes de apagar.</li>
  </ul>
  <div class="note safe">
    <span class="ic" aria-hidden="true">🔒</span>
    <p>As fotos não são enviadas a nenhum servidor e não é preciso conta. O app usa serviços de análise e publicidade, como detalha a política de privacidade.</p>
  </div>` },
        { id: 'qual', h: 'Então, qual escolher?', html: `
  <ol class="steps">
    <li>Comece pela <strong>opção grátis que você já tem</strong> (Files do Google ou o limpador do fabricante) para as cópias exatas.</li>
    <li>Se continuar sem espaço ou tiver muitas fotos quase repetidas, desfocadas ou do WhatsApp, experimente o <a href="{{play}}" target="_blank" rel="noopener">DupeFire pelo Google Play</a>.</li>
    <li>Qualquer que seja o app, <strong>revise antes de apagar</strong> e não use em fotos muito importantes que não tenham backup.</li>
  </ol>
  <p>E para ver como se faz passo a passo: <a href="{{g:find-duplicates}}">como encontrar fotos duplicadas no Android</a>.</p>` },
      ],
      faq: [
        ['Existe algum app de duplicadas totalmente grátis e sem anúncios?', 'As ferramentas do sistema (como o Files do Google ou o limpador do fabricante) costumam ser grátis. Entre os apps independentes, quase todos se mantêm com anúncios ou versão paga; confira a página atual no Google Play.'],
        ['É seguro dar permissão a um app para ver minhas fotos?', 'É necessário para que ele possa analisá-las. Instale apenas apps de desenvolvedores confiáveis, leia a política de privacidade e veja se a análise acontece no celular.'],
        ['Posso recuperar o que apagar por engano?', 'Depende do app. O DupeFire envia os arquivos para a lixeira do sistema, onde podem ser restaurados por 30 dias. Pergunte o mesmo a qualquer outro.'],
        ['Este comparativo é imparcial?', 'Foi escrito pelos criadores do DupeFire, então tentamos ser claros sobre os limites dele e não afirmar nada que não possamos comprovar sobre os outros. Os recursos de outros apps mudam: confira sempre a página deles no Google Play.'],
      ],
      ctaTitle: 'Experimente e decida você mesmo',
      ctaText: 'O DupeFire é grátis e não pede conta. Revise cada grupo com prévia, confirme e recupere espaço. Suas fotos não saem do celular. Para Android 8 ou superior.',
    },
  },
};
