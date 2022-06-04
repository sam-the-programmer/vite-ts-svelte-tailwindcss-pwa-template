importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js");

workbox.routing.registerRoute(
	({ request }) => request.destination === "image",
	new workbox.strategies.CacheFirst() // use NetworkFirst for if it changes often, CacheFirst for if it doesn't.
);