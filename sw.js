var CACHE_NAME = 'my-site-cache-v1';

// The files we want to cache
var urlsToCache = [
    'index.html',
    'script.js'
];

// Set the callback for the install step
self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});