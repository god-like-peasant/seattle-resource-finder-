// Seattle Resource Finder — Service Worker
// Cache-first strategy: works fully offline once the app has been opened
// with a connection at least once. Bump CACHE version whenever any of the
// files below changes so returning users get the update instead of a
// stale cached copy. app.js listens for the 'updatefound'/'controllerchange'
// events and shows an in-app "update available" prompt rather than silently
// swapping code under a page that's still open (see app.js init code).
const CACHE = 'srf-v7';
const ASSETS = [
  './',
  './index.html',
  './app.js',
  './seattle_data.js',
  './type_meta.js',
  './onboarding_and_filter.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => c.addAll(ASSETS))
      .catch((err) => {
        // Do not let one failed asset block install entirely — log and continue.
        console.warn('SW install: some assets failed to precache', err);
      })
    // Deliberately NOT calling self.skipWaiting() here. A new service worker
    // now waits until the page explicitly asks it to take over (see the
    // 'message' listener below), which app.js triggers only after the person
    // taps "Refresh now" on the update-available prompt. This avoids the
    // previous behavior where code could update out from under an open tab
    // with no signal to the user that anything changed.
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Lets app.js trigger the update once the person has confirmed it, instead
// of the service worker silently activating under a page that's still open.
self.addEventListener('message', (e) => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
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
