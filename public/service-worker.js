/* eslint-disable no-undef */
console.log("Hello from service-worker.js");

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"
);

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
  workbox.core.setCacheNameDetails({
    prefix: "service-worker-math-random",
    suffix: "v0.0.1",
    precache: "precache",
    runtime: "runcache",
  });

  console.log(workbox.core.cacheNames.precache);

  workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: "google-fonts-stylesheets",
    })
  );
  workbox.routing.registerRoute(
    /\.(?:css)$/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: "styles",
    })
  );
  workbox.routing.registerRoute(
    /^https:\/\/pokemondb\.net/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: "pokemondb",
    })
  );

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
