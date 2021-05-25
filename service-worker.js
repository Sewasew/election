if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"793eb68b6293338a9abdc3a132d4c8f7","url":"404.html"},{"revision":"9ec9216728dbf5a2c2a2b69256419662","url":"8ae050b0e0e914e9c1ae.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"793eb68b6293338a9abdc3a132d4c8f7","url":"index.html"},{"revision":"9103c2aacc3202edd42c94352b406ec0","url":"static/css/23.e36be234.chunk.css"},{"revision":"51b5b05af9dc2d0f773b4112f5112fe6","url":"static/js/0.231c3d57.chunk.js"},{"revision":"5656e0e961e80902e32e7cc0d48fde37","url":"static/js/1.6dd01aa7.chunk.js"},{"revision":"57a0458a7ad4924347e03849af42e78d","url":"static/js/10.831e753a.chunk.js"},{"revision":"8021ba0f4e8d1a9f8b7fa039c479d3a1","url":"static/js/11.33f88a47.chunk.js"},{"revision":"4828e9718d3c4aea0f6704dd55fa2a48","url":"static/js/12.1591be14.chunk.js"},{"revision":"2d4d553478428f38b3f4b1991b155b7a","url":"static/js/13.63993f40.chunk.js"},{"revision":"737332f62a0ec8c76ce9a621f58bca4c","url":"static/js/14.3d1542fa.chunk.js"},{"revision":"56241ca8d8c90c906510b56d4d32c9ba","url":"static/js/15.d4ca05ae.chunk.js"},{"revision":"7aa0c29d23c2e394545cda15e37133b8","url":"static/js/16.4b2256c1.chunk.js"},{"revision":"5463b2a38b4982ede48123178f1fd813","url":"static/js/17.741662eb.chunk.js"},{"revision":"373af5f43b8b3c96239ec7f03e0cf9b6","url":"static/js/18.46c0379b.chunk.js"},{"revision":"062a7ddeb5161056fb634f47bf5bb14e","url":"static/js/19.ed5d005c.chunk.js"},{"revision":"df6a24c5245698c729bd74c4d2ca7377","url":"static/js/2.2cafd795.chunk.js"},{"revision":"12011a190e180abdf6a40ada79e47c24","url":"static/js/20.a4e130df.chunk.js"},{"revision":"15fc494b138a13799f00f417dda7d169","url":"static/js/21.f938dbc7.chunk.js"},{"revision":"c70d92fd80772bbb03be19eb7f94caca","url":"static/js/22.00301e50.chunk.js"},{"revision":"a23b05946b5558b0160165cfe1f3b4a5","url":"static/js/23.97fcfeda.chunk.js"},{"revision":"1cb5f64357200fa54e168121e531e7e2","url":"static/js/24.56486527.chunk.js"},{"revision":"1fee88c75d18f61b45af9110e6682dcb","url":"static/js/25.b45839a1.chunk.js"},{"revision":"05b00fe7cb9e2cc10bfa037c2d89dc91","url":"static/js/26.22549df5.chunk.js"},{"revision":"89aba4f3d6aec46c1626d6c091df5856","url":"static/js/27.59b65175.chunk.js"},{"revision":"7c6690f131a0f86bc9407a8d49b1b191","url":"static/js/28.ef9357b1.chunk.js"},{"revision":"83144bbc64bffa912e05ed14287b56d6","url":"static/js/29.71b2e1f0.chunk.js"},{"revision":"a9a3171bb318f790c21a85c0accc1ad6","url":"static/js/3.0f12e9f7.chunk.js"},{"revision":"56220e0937ffa29f66d63d7772b2386e","url":"static/js/30.d9407fa9.chunk.js"},{"revision":"55081b59f09241476071ce6631466629","url":"static/js/4.1a31b99c.chunk.js"},{"revision":"1cd0fb1518a5f917423c7156450c908d","url":"static/js/5.310c1619.chunk.js"},{"revision":"dae0803b1b2023a15696862dc3269d76","url":"static/js/8.271677a4.chunk.js"},{"revision":"733ba87c160ace4f18d1bc279bb36706","url":"static/js/9.0aea2a4a.chunk.js"},{"revision":"8d314ed5658c3ed02efb922b4c3a79f8","url":"static/js/main.cd1732ff.chunk.js"},{"revision":"4e64e40ba1bcc56e812906746ff77a6a","url":"static/js/runtime-main.647ac33d.js"}]);

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
