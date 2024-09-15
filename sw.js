self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('dictionary-v2').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html', // Zaktualizowano ścieżki
                '/styles.css',
                '/app.js',
                '/manifest.json',
                '/icons/ikonka.png',
                '/icons/ikonka2.png'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
