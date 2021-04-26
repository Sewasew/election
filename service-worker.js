if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"9d79c205cc383f92de2559fb6639d3eb","url":"404.html"},{"revision":"9ec9216728dbf5a2c2a2b69256419662","url":"8ae050b0e0e914e9c1ae.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"9d79c205cc383f92de2559fb6639d3eb","url":"index.html"},{"revision":"3a68ee71739d51d349f103b5262ae7fb","url":"static/css/24.2d499296.chunk.css"},{"revision":"313caf1294e1e05f669d72eefc2ffe08","url":"static/js/0.f97bcc70.chunk.js"},{"revision":"bb708cf745ef048015eeea19868c2ead","url":"static/js/1.f658344a.chunk.js"},{"revision":"65fff30ce35195f8bf3b45d0c5aef39e","url":"static/js/10.d541378a.chunk.js"},{"revision":"7ef38b6de61e07ac701a76c08197e263","url":"static/js/11.d9fcf0e4.chunk.js"},{"revision":"fa02d71b55fce18227fc90d5779bcfaf","url":"static/js/12.fa4cc96e.chunk.js"},{"revision":"f1e0261e4095028d0be4eb2c7d3fa00b","url":"static/js/13.b20e5752.chunk.js"},{"revision":"3502c3344a165c8393c6fb5f4ed688b9","url":"static/js/14.80986240.chunk.js"},{"revision":"a2572046c758badf66c1b06f27793200","url":"static/js/15.b7dfff2e.chunk.js"},{"revision":"6c938089911a3fedd97a74f99e4b0562","url":"static/js/16.6bd7e210.chunk.js"},{"revision":"d307cc36f083fc53b07e5a60629979c0","url":"static/js/17.d4fb08aa.chunk.js"},{"revision":"d9880c7e4034369ef6a1792eb01e8368","url":"static/js/18.2f303394.chunk.js"},{"revision":"b3f1c9f3a43cf87bab75ac3ff3a8a245","url":"static/js/19.dd8549f1.chunk.js"},{"revision":"df6a24c5245698c729bd74c4d2ca7377","url":"static/js/2.2cafd795.chunk.js"},{"revision":"64c98bc6bee81d7205788793a476dd4b","url":"static/js/20.e0c5ec1f.chunk.js"},{"revision":"44b904bc59efad711b8dfeb5dea48542","url":"static/js/21.416df127.chunk.js"},{"revision":"ff11999d5dff69006b79abc64f9d52f0","url":"static/js/22.518c7e2e.chunk.js"},{"revision":"90979d131f26e85c0a7249a0f4066987","url":"static/js/23.41d34b62.chunk.js"},{"revision":"816b59717c4d28f9f7732b39b86ddb04","url":"static/js/24.0cbd9e55.chunk.js"},{"revision":"187a8b6021234161068e06ce7d71536a","url":"static/js/25.5ddb71aa.chunk.js"},{"revision":"f674c61ffdc3890872a207d8d090bbfb","url":"static/js/26.71e3ea89.chunk.js"},{"revision":"a17f825a5a3b93f13ab814ec9c5494a1","url":"static/js/27.3abdfa28.chunk.js"},{"revision":"00e37d8d7bffca74c3897b08aafcf545","url":"static/js/28.82f182cb.chunk.js"},{"revision":"18a166140fcf97def0af77fd7c42405c","url":"static/js/29.1dc14ec5.chunk.js"},{"revision":"de7bf3c4c5263040271736365c2b0de1","url":"static/js/3.28d23434.chunk.js"},{"revision":"7edf0043fe3c16cd5e3d8348dd96c163","url":"static/js/30.bc914aee.chunk.js"},{"revision":"600f729fec50a086759735315f2de725","url":"static/js/4.efe00569.chunk.js"},{"revision":"3167aa5e6f918a5d5289eadd370e4086","url":"static/js/5.7b49a84e.chunk.js"},{"revision":"51e39750b09eb71dbb1ac09fb3e1661f","url":"static/js/8.6088bb7e.chunk.js"},{"revision":"733ba87c160ace4f18d1bc279bb36706","url":"static/js/9.0aea2a4a.chunk.js"},{"revision":"bceec575db4e0b02bbd4e52f007602fc","url":"static/js/main.c289e612.chunk.js"},{"revision":"ad86ee6c427a7a501f82fe3eaa654a1a","url":"static/js/runtime-main.2c3781c0.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
