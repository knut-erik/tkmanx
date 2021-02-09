importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.0/workbox-sw.js');

let version = "1.26";

if (workbox) {
  console.log(`Workbox is loaded`);
} else {
  console.log(`Workbox didn't load`);
}


workbox.routing.registerRoute(
  // Cache CSS files.
  /\.css$/,
  // Use cache but update in the background.
  new workbox.strategies.StaleWhileRevalidate({
    // Use a custom cache name.
    cacheName: 'tk-css-cache-v' + version,
  })
);


workbox.routing.registerRoute(
  // Cache markdown files.
  /\.md$/,
  // Use the cache if it's available.
  new workbox.strategies.StaleWhileRevalidate({
    // Use a custom cache name.
    cacheName: 'tk-md-cache-v' + version,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        // Cache only 20 files.
        maxEntries: 10,
        // Cache for a maximum of 1 days.
        maxAgeSeconds: 1 * 24 * 60 * 60,
      })
    ],
  })
);


workbox.routing.registerRoute(
  // Cache image files.
  /\.(?:png|jpg|jpeg|svg|gif)$/,
  // Use the cache if it's available.
  new workbox.strategies.StaleWhileRevalidate({
    // Use a custom cache name.
    cacheName: 'tk-image-cache-v' + version,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        // Cache only 20 images.
        maxEntries: 10,
        // Cache for a maximum of a week.
        maxAgeSeconds: 1 * 24 * 60 * 60,
      })
    ],
  })
);

