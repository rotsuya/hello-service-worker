if ('serviceWorker' in navigator) {
    console.log('ServiceWorker is available.');
    navigator.serviceWorker
        .register('/hello-service-worker/sw.js')    // 絶対パス
        .then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }).catch(function(err) {
            // Registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
} else {
    console.log('ServiceWorker is NOT available.');
}