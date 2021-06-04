if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"f101b4e734276da37480a44b5d0e3c3f","url":"404.html"},{"revision":"9ec9216728dbf5a2c2a2b69256419662","url":"8ae050b0e0e914e9c1ae.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"f101b4e734276da37480a44b5d0e3c3f","url":"index.html"},{"revision":"13abc3f985635472082291908f7401d7","url":"static/css/19.27c45923.chunk.css"},{"revision":"cd24a838bd1602c6465f5f052454fd6a","url":"static/js/0.467f1b78.chunk.js"},{"revision":"d2ba6482658c266533af80d4d0bb2e40","url":"static/js/1.94ef0619.chunk.js"},{"revision":"75690f70d1cd603913d89f525f89dbae","url":"static/js/10.799909e1.chunk.js"},{"revision":"d3ba942de4320ccc2f32299805b045cb","url":"static/js/11.6d05842e.chunk.js"},{"revision":"3184a0fc2724d972c18f497df4880d2d","url":"static/js/12.1bada8e0.chunk.js"},{"revision":"3db4cdf74808b68c6c069f6f1b32ba8b","url":"static/js/13.d16ece2c.chunk.js"},{"revision":"d2cd0dc2d7ac3f9f2b2776b8ddd81ec6","url":"static/js/14.f877deaf.chunk.js"},{"revision":"fbb1e56963745d1f05b8b8c26bd15d0d","url":"static/js/15.67e44775.chunk.js"},{"revision":"7698428ffadf0df73ee477bb6ac20aff","url":"static/js/16.f614b925.chunk.js"},{"revision":"ed995734ce3fae8c03969c80920338c8","url":"static/js/17.b26bc8f3.chunk.js"},{"revision":"7eee7b9e2adf6879dac06fea97b1847f","url":"static/js/18.72166096.chunk.js"},{"revision":"08424ab50fa6df49855233288aab5334","url":"static/js/19.6edfb2af.chunk.js"},{"revision":"b84b97b4e5a29fbe0c3e2e353946d09a","url":"static/js/2.c29a883a.chunk.js"},{"revision":"9efb1df2ce69e85c765593a30427018a","url":"static/js/20.84b82ff6.chunk.js"},{"revision":"7ee37759a1a6eda6129811d9c84cbecd","url":"static/js/21.3e5176e2.chunk.js"},{"revision":"8a1d9fe4951ab214b7f11ac69e8c70b5","url":"static/js/22.df538f3a.chunk.js"},{"revision":"8a5eca06864cab9363b33bab8ee33af6","url":"static/js/23.35d211c0.chunk.js"},{"revision":"f0b2984b93559c79c05d0861ae4a676e","url":"static/js/24.a1952e08.chunk.js"},{"revision":"6085f6505ecad9fb46246b88c322133b","url":"static/js/25.eea79e48.chunk.js"},{"revision":"68a08d0ec28252f4e6b3000ad5b4a8ac","url":"static/js/26.4eb7422a.chunk.js"},{"revision":"74aa8cb8ff714516e735c6dbd153cb1b","url":"static/js/27.cc0ea814.chunk.js"},{"revision":"fefb61d6b26110b2adcf5d0c589ddc20","url":"static/js/28.cc0f3b91.chunk.js"},{"revision":"01c7970e44f3ca0f8a542d5f5cb57195","url":"static/js/29.133a38b6.chunk.js"},{"revision":"1d4ae904aaa67088b91de246d7f62464","url":"static/js/3.44f18289.chunk.js"},{"revision":"cbc1df7b943e3eb8a7e2009608ca8cab","url":"static/js/30.2c29da56.chunk.js"},{"revision":"7aa37dd87da60901f8eedb934cbade13","url":"static/js/31.42431f5e.chunk.js"},{"revision":"5fa3bf5a833af2513fce7b52fc3ef3a9","url":"static/js/4.0e274724.chunk.js"},{"revision":"0f121f2dbd8ab28db8217ef2b82a104a","url":"static/js/5.72088f1d.chunk.js"},{"revision":"8a726a208b5576fbc6434f36f2ba15b1","url":"static/js/8.7c5b7463.chunk.js"},{"revision":"d67394a44bb1d475b5ef5449454de10a","url":"static/js/9.615a54f0.chunk.js"},{"revision":"efea36c1ba99ccd3b124326767e59087","url":"static/js/main.5c01b579.chunk.js"},{"revision":"c1eb4386b24f968036409719928937bc","url":"static/js/runtime-main.458669aa.js"}]);

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
