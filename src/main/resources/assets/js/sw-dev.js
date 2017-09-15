importScripts('https://unpkg.com/workbox-sw@1.1.0/build/importScripts/workbox-sw.prod.v1.1.0.js');

const workboxSW = new self.WorkboxSW({
    skipWaiting: true,
    clientsClaim: true
});

// This is a placeholder for manifest dynamically injected from webpack.config.js
workboxSW.precache([]);

// Here we precache urls that are generated dynamically in the main.js controller
workboxSW.precache([
    '{{siteUrl}}',
    '{{siteUrl}}/',
    '{{siteUrl}}/manifest.json',
    '{{siteUrl}}/browserconfig.xml',
    '{{icons.png_16}}',
    '{{icons.png_32}}',
    '{{icons.png_180}}'
]);
