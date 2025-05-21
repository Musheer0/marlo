// public/sw.js

const CACHE_NAME = 'marlo-cache-v1';
const STATIC_ASSETS = [
  '/',
  '/favicon.ico',
  '/favicons/favicon-16x16.png',
  '/favicons/favicon-32x32.png',
  '/favicons/android-chrome-192x192.png',
  '/favicons/android-chrome-512x512.png',
  '/favicons/apple-touch-icon.png',
  '/site.webmanifest',
];

// Install event — cache assets
self.addEventListener('install', (event) => {
  console.log('[SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
});

// Activate event — clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
});

// Fetch event — respond from cache, fallback to network
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then((response) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, response.clone());
            return response;
          });
        })
        .catch(() => {
          // Offline fallback here (optional)
          if (event.request.destination === 'document') {
            return caches.match('/');
          }
        });
    })
  );
});
