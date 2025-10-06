const CACHE_NAME = 'habitex-calcula-v2.8'; // Bump version for manifest caching
const URLS_TO_PRECACHE = [
    './',
    './index.html',
    './manifest.json', // Add manifest to precache
    './index.tsx',
    './sw.js',
    // Core dependencies from CDN
    'https://cdn.tailwindcss.com',
    'https://unpkg.com/idb@7/build/umd.js',
    'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js',
    'https://unpkg.com/@babel/standalone/babel.min.js',
    // Dependencies from importmap with FIXED versions to prevent cache misses
    'https://aistudiocdn.com/react@19.1.1',
    'https://aistudiocdn.com/react-dom@19.1.1/client'
];

self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache for pre-caching');
                return cache.addAll(URLS_TO_PRECACHE);
            })
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    // Avoid interfering with browser extensions
    if (event.request.url.startsWith('chrome-extension://')) {
        return;
    }
    
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return from cache if found
                if (response) {
                    return response;
                }

                // Not in cache, fetch from network
                const fetchRequest = event.request.clone();
                return fetch(fetchRequest).then(
                    (response) => {
                        // Check if we received a valid response
                        if (!response || response.status !== 200) {
                            return response;
                        }

                        // Clone the response and cache it for future offline use
                        const responseToCache = response.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }
                );
            })
    );
});