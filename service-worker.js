if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"87fa81d5653aa53945785329ef53597b","url":"404.html"},{"revision":"9ec9216728dbf5a2c2a2b69256419662","url":"8ae050b0e0e914e9c1ae.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"87fa81d5653aa53945785329ef53597b","url":"index.html"},{"revision":"2aedd93996663c53de1a74a7f20557ed","url":"static/css/24.ecddfa06.chunk.css"},{"revision":"85aafa41e3258e98968beb883cb9f83d","url":"static/js/0.a8733c22.chunk.js"},{"revision":"d720e659028b038ccd71fadaff19bd5d","url":"static/js/1.7d5c5938.chunk.js"},{"revision":"7bec36a7f090eb1b70d3e7df3d0aee02","url":"static/js/10.66dfe0a0.chunk.js"},{"revision":"737e306ed013dd998cfd3ff8b803cd15","url":"static/js/11.970603f1.chunk.js"},{"revision":"e2e3b99bd6e5fbfc9f72e51cc2b4fdba","url":"static/js/12.49e0118b.chunk.js"},{"revision":"9190a5ffd59133e48163190666e8f949","url":"static/js/13.0495d8f4.chunk.js"},{"revision":"4458ecdd49bd0ba5e2e61bac9ece6b68","url":"static/js/14.d4dd888b.chunk.js"},{"revision":"77cbdbdd0283c672342b11b584f33362","url":"static/js/15.32d07926.chunk.js"},{"revision":"1293e479fd1c8196250a9c794b471104","url":"static/js/16.ca4f1a3f.chunk.js"},{"revision":"fe3e9f6b17112dbd72a77e9998165394","url":"static/js/17.9a1482cd.chunk.js"},{"revision":"14d983c99a9e15f5689be8e2158ebcaf","url":"static/js/18.f55a64c5.chunk.js"},{"revision":"5841ebf1bb176b1f810a4bdfb6726d5e","url":"static/js/19.3afec134.chunk.js"},{"revision":"df6a24c5245698c729bd74c4d2ca7377","url":"static/js/2.2cafd795.chunk.js"},{"revision":"f78fe4c69d90f372c89611d127b5233d","url":"static/js/20.a6a29def.chunk.js"},{"revision":"e547ac6a895bdfb6ae295f0ff47f3d90","url":"static/js/21.5a393c4c.chunk.js"},{"revision":"a39ff57b764e45517b2bd8b2572942e5","url":"static/js/22.e1d24fbb.chunk.js"},{"revision":"21da78ed7e09ec6ea53a7cfc23ac9436","url":"static/js/23.049c2d3c.chunk.js"},{"revision":"b575d342b799b583a915f912cdf9cb37","url":"static/js/24.c084f8d8.chunk.js"},{"revision":"a48952595be046a5896e92900f8c203b","url":"static/js/25.79d8e44d.chunk.js"},{"revision":"c471858c580fc35dc6cf9b9b2343a81d","url":"static/js/26.f64c7220.chunk.js"},{"revision":"e06cacb789303094ce6a9ec3f331d06f","url":"static/js/27.70f02431.chunk.js"},{"revision":"2b5499d87da58f9bfed7bde23e78ed29","url":"static/js/28.4aa4f4a9.chunk.js"},{"revision":"281bf4f9709045ca4263c11558fa52a0","url":"static/js/29.36fc20ac.chunk.js"},{"revision":"3e3d507317311fdc36e4d69dc9b2b6cd","url":"static/js/3.04b107e5.chunk.js"},{"revision":"9679a6711153144f7351701b1766efea","url":"static/js/30.703f264d.chunk.js"},{"revision":"e230f4892e8d16acccda87a7a2119400","url":"static/js/4.2bc0d2b4.chunk.js"},{"revision":"76e0d76f181fab679402339eca5f7994","url":"static/js/5.44bd5289.chunk.js"},{"revision":"64d1dd8d07cc9322c589578ef2a4ea3d","url":"static/js/8.d5899e3c.chunk.js"},{"revision":"2c9513b83d284be5894116af88ea6399","url":"static/js/9.062b9d92.chunk.js"},{"revision":"ed30aef6b57e1a98c9f9a76809bd6a18","url":"static/js/main.e4194ae6.chunk.js"},{"revision":"880104dbcbc5cee7ca5f60e332014188","url":"static/js/runtime-main.27949866.js"}]);

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
