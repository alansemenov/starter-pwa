importScripts('workbox-sw.prod.v1.1.0.js');

const workboxSW = new self.WorkboxSW({
    skipWaiting: true,
    clientsClaim: true
});
workboxSW.precache([]); // This is a placeholder for manifest dynamically injected from webpack.config.js
workboxSW.precache(['{{siteUrl}}', '{{siteUrl}}/']);

const cacheFirst = workboxSW.strategies.cacheFirst({
    cacheName: 'pwa-starter',
    cacheExpiration: {
        maxEntries: 2,
        maxAgeSeconds: 7 * 24 * 60 * 60
    },
    cacheableResponse: {statuses: [0, 200]}
});
/*
workboxSW.router.registerRoute('{{siteUrl}}', cacheFirst);
workboxSW.router.registerRoute('{{siteUrl}}/', cacheFirst);
*/
/*
workboxSW.router.registerNavigationRoute("{{siteUrl}}");
workboxSW.router.registerNavigationRoute("{{siteUrl}}/");
*/