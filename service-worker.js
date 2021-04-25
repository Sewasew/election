if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"e90725fa3c3bbdce6d3cce0f02626e60","url":"404.html"},{"revision":"1371c5d9e9a26e92ea5c4d354d96ff79","url":"e2768d6b110b23fb04a1.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"e90725fa3c3bbdce6d3cce0f02626e60","url":"index.html"},{"revision":"2aedd93996663c53de1a74a7f20557ed","url":"static/css/24.ecddfa06.chunk.css"},{"revision":"85aafa41e3258e98968beb883cb9f83d","url":"static/js/0.a8733c22.chunk.js"},{"revision":"d720e659028b038ccd71fadaff19bd5d","url":"static/js/1.7d5c5938.chunk.js"},{"revision":"7bec36a7f090eb1b70d3e7df3d0aee02","url":"static/js/10.66dfe0a0.chunk.js"},{"revision":"737e306ed013dd998cfd3ff8b803cd15","url":"static/js/11.970603f1.chunk.js"},{"revision":"4ff079d574a0b746738f726f8fec79c5","url":"static/js/12.2febf328.chunk.js"},{"revision":"0d58974a22005a47e4a2d3a5d40b3477","url":"static/js/13.fef997f6.chunk.js"},{"revision":"b8d361181d32f29a0c4fee366723004d","url":"static/js/14.828b774e.chunk.js"},{"revision":"e94bf8216f0c133c72d8cad5ab87264d","url":"static/js/15.cac39f41.chunk.js"},{"revision":"c28cc7ee79d6c2d254b8bab221b22e20","url":"static/js/16.1c34c4c4.chunk.js"},{"revision":"2bca2dc15eeb40bcea5214425f85b48f","url":"static/js/17.8186bde7.chunk.js"},{"revision":"14d983c99a9e15f5689be8e2158ebcaf","url":"static/js/18.f55a64c5.chunk.js"},{"revision":"5841ebf1bb176b1f810a4bdfb6726d5e","url":"static/js/19.3afec134.chunk.js"},{"revision":"df6a24c5245698c729bd74c4d2ca7377","url":"static/js/2.2cafd795.chunk.js"},{"revision":"0b41f57e89160827bef4df6d4f839146","url":"static/js/20.efc28f10.chunk.js"},{"revision":"6cb7f4f748f7158cda6145011fa94faf","url":"static/js/21.6a2892af.chunk.js"},{"revision":"fb0eafddd2ef458717e2af3ea2e38633","url":"static/js/22.bb62f433.chunk.js"},{"revision":"1751a7dbd75557db439fd84fdfdeebc4","url":"static/js/23.39a35862.chunk.js"},{"revision":"728de73030e940b68794c6483b83be40","url":"static/js/24.77fc0e5d.chunk.js"},{"revision":"f136d3bd5969281333106937046e48cb","url":"static/js/25.b69aa2df.chunk.js"},{"revision":"c471858c580fc35dc6cf9b9b2343a81d","url":"static/js/26.f64c7220.chunk.js"},{"revision":"cc6f4969a287040d01bd5b3b65bda218","url":"static/js/27.a5eaf5f9.chunk.js"},{"revision":"839640324114afd4f6fbd8bdf328f36f","url":"static/js/28.79cc8592.chunk.js"},{"revision":"1f3868a56ffc3802cf9a9a427010003b","url":"static/js/29.fa20890e.chunk.js"},{"revision":"3e3d507317311fdc36e4d69dc9b2b6cd","url":"static/js/3.04b107e5.chunk.js"},{"revision":"25afe754fa1b28cce3ceb03d13058b5f","url":"static/js/30.45a228fb.chunk.js"},{"revision":"e230f4892e8d16acccda87a7a2119400","url":"static/js/4.2bc0d2b4.chunk.js"},{"revision":"76e0d76f181fab679402339eca5f7994","url":"static/js/5.44bd5289.chunk.js"},{"revision":"64d1dd8d07cc9322c589578ef2a4ea3d","url":"static/js/8.d5899e3c.chunk.js"},{"revision":"68729c1620d88f0fc051d1d4538b9e9a","url":"static/js/9.d669b821.chunk.js"},{"revision":"bd69d26cdcebdb3c8fcd7f6a8384d43c","url":"static/js/main.305b28b4.chunk.js"},{"revision":"34cc9e6d29ff36055dbbd0d2da1fd9e3","url":"static/js/runtime-main.d87dba74.js"}]);

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
