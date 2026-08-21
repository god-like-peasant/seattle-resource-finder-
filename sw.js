// Seattle Resource Finder — Service Worker
// Cache-first strategy: works fully offline once the app has been opened
// with a connection at least once. Bump CACHE version whenever any of the
// files below changes so returning users get the update instead of a
// stale cached copy.
const CACHE = 'srf-v6';
const ASSETS = [
  './',
  './index.html',
  './app.js',
  './seattle_data.js',
  './type_meta.js',
  './onboarding_and_filter.js',
  './manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => c.addAll(ASSETS))
      .then(() => self.skipWaiting())
      .catch((err) => {
        // Do not let one failed asset block install entirely — log and continue.
        console.warn('SW install: some assets failed to precache', err);
      })
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;

  e.respondWith(
    caches.match(e.request).then((cached) => {
      if (cached) return cached;
      return fetch(e.request)
        .then((res) => {
          // Only cache successful, same-origin responses (skip opaque cross-origin
          // responses like map tiles / weather API calls, which change often).
          if (res && res.status === 200 && res.type === 'basic') {
            const clone = res.clone();
            caches.open(CACHE).then((c) => c.put(e.request, clone));
          }
          return res;
        })
        .catch(() => {
          // Offline and not cached: for a page navigation, fall back to the
          // cached app shell so the user still gets the app instead of a
          // browser error page.
          if (e.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
          return cached;
        });
    })
  );
});
