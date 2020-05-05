importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');
//import {precaching} from 'workbox-precaching';
//import {registerRoute} from 'workbox-routing';
//import {BackgroundSyncPlugin} from 'workbox-background-sync';
//import {CacheFirst, StaleWhileRevalidate} from 'workbox-strategies';
//import {ExpirationPlugin} from 'workbox-expiration';

let version = "1.04";

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
    cacheName: 'css-cache-v' + version,
  })
);

workbox.routing.registerRoute(
  // Cache markdown files.
  /\.md$/,
  // Use the cache if it's available.
  new workbox.strategies.CacheFirst({
    // Use a custom cache name.
    cacheName: 'md-cache-v' + version,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        // Cache only 20 files.
        maxEntries: 20,
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
  new workbox.strategies.CacheFirst({
    // Use a custom cache name.
    cacheName: 'image-cache-v' + version,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        // Cache only 20 images.
        maxEntries: 30,
        // Cache for a maximum of a week.
        maxAgeSeconds: 7 * 24 * 60 * 60,
      })
    ],
  })
);

