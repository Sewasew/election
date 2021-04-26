if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"75c975dc6e60c8ff9a704bcb8358a112","url":"404.html"},{"revision":"9ec9216728dbf5a2c2a2b69256419662","url":"8ae050b0e0e914e9c1ae.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"75c975dc6e60c8ff9a704bcb8358a112","url":"index.html"},{"revision":"bd0966b67ad888b153e5504055ba15f8","url":"static/css/23.71ebe3bc.chunk.css"},{"revision":"a8f11ecd8b4a0c0b4ca8c8a7fea7ab72","url":"static/js/0.d9bf3a91.chunk.js"},{"revision":"07dbf468abee7d8a62f05e89a0efee95","url":"static/js/1.abe0db84.chunk.js"},{"revision":"08b5249582973b2f5bd2f3d9de357e4b","url":"static/js/10.3ea9d77d.chunk.js"},{"revision":"8db45c51cc5e2b28fc3ab66da8635b57","url":"static/js/11.ba5c81cb.chunk.js"},{"revision":"2a0599cd08ffbade382057b2ba88b184","url":"static/js/12.0cd1e42d.chunk.js"},{"revision":"292cf926d43d005aeb9688c74607aadd","url":"static/js/13.f57e21e7.chunk.js"},{"revision":"4fd0c5893b21f5e4702e8956319a1866","url":"static/js/14.a57a9349.chunk.js"},{"revision":"9b30195a7bbdd870a1257c48aa0db51d","url":"static/js/15.e4f22816.chunk.js"},{"revision":"be2b281b310eb9818fa05a028b484d7a","url":"static/js/16.9ab2186b.chunk.js"},{"revision":"78b9ec3e83e63f8072781ab93d7134fd","url":"static/js/17.000ba1ec.chunk.js"},{"revision":"4cd0e4e1a745552e7a647e3fbb2ce16e","url":"static/js/18.614c1cad.chunk.js"},{"revision":"063fa0605616b5dbea45adba928216fb","url":"static/js/19.e208cc80.chunk.js"},{"revision":"df6a24c5245698c729bd74c4d2ca7377","url":"static/js/2.2cafd795.chunk.js"},{"revision":"a2651cda3d4107031ed1a9c4ba1655fa","url":"static/js/20.17c9cf78.chunk.js"},{"revision":"54004a8f3ca25f0c41750865a7ed8813","url":"static/js/21.56087226.chunk.js"},{"revision":"d95ad5d2cb8a95d3b476558fb7a5233f","url":"static/js/22.680afa4b.chunk.js"},{"revision":"ddc9875714824077b29858786f333233","url":"static/js/23.e704c0be.chunk.js"},{"revision":"bc69aa65ac3ea6d3ad0885b052c00514","url":"static/js/24.7d21104d.chunk.js"},{"revision":"ab0de7677212532167b01b318f3203cc","url":"static/js/25.b9280379.chunk.js"},{"revision":"f674c61ffdc3890872a207d8d090bbfb","url":"static/js/26.71e3ea89.chunk.js"},{"revision":"fd21e80b48254b57899bd37f5db58045","url":"static/js/27.58fb579e.chunk.js"},{"revision":"ad70e2c45d8403b5da74356ebcfb2953","url":"static/js/28.dd24b82e.chunk.js"},{"revision":"0f8677480d1f4e1c6caa3504ce162a82","url":"static/js/29.ff48f660.chunk.js"},{"revision":"100074883807f80b02016c9a0f25a3cb","url":"static/js/3.afa1f84a.chunk.js"},{"revision":"23f33d36a2a2981e05a5f1799a8cd62b","url":"static/js/30.14f654e8.chunk.js"},{"revision":"53482af853db1fde12db49e4810ce165","url":"static/js/4.2de376e1.chunk.js"},{"revision":"fb55ce4cfb1491550aceb4f7f4af4bf4","url":"static/js/5.8cd76100.chunk.js"},{"revision":"4e9020fe98cbb87c4d5e4d223b1dacf0","url":"static/js/8.95c3f635.chunk.js"},{"revision":"733ba87c160ace4f18d1bc279bb36706","url":"static/js/9.0aea2a4a.chunk.js"},{"revision":"fa589a7391d995b4b19ad688def3d6fb","url":"static/js/main.104c7329.chunk.js"},{"revision":"6f962b8a8478c76cd9caaae95f09f018","url":"static/js/runtime-main.e64fd2d0.js"}]);

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
