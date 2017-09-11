/*
This is my custom SW!
 */
importScripts('workbox-sw.prod.v1.1.0.js');

const workboxSW = new self.WorkboxSW({
    "skipWaiting": true
});
workboxSW.precache([]);
