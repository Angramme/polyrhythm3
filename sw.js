if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return t[e]||(s=new Promise((async s=>{if("document"in self){const t=document.createElement("script");t.src=e,document.head.appendChild(t),t.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!t[e])throw new Error(`Module ${e} didn’t register its module`);return t[e]}))},s=(s,t)=>{Promise.all(s.map(e)).then((e=>t(1===e.length?e[0]:e)))},t={require:Promise.resolve(s)};self.define=(s,n,r)=>{t[s]||(t[s]=Promise.resolve().then((()=>{let t={};const a={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return t;case"module":return a;default:return e(s)}}))).then((e=>{const s=r(...e);return t.default||(t.default=s),t}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/7tliC5oOACYwr1bYkU5xt/_buildManifest.js",revision:"7tliC5oOACYwr1bYkU5xt"},{url:"/_next/static/7tliC5oOACYwr1bYkU5xt/_ssgManifest.js",revision:"7tliC5oOACYwr1bYkU5xt"},{url:"/_next/static/chunks/1a48c3c1-011477ff2d05e3c9ca39.js",revision:"7tliC5oOACYwr1bYkU5xt"},{url:"/_next/static/chunks/78e521c3-7f1d23994d9aa0b2d4cb.js",revision:"7tliC5oOACYwr1bYkU5xt"},{url:"/_next/static/chunks/821-784986a31d059b335086.js",revision:"7tliC5oOACYwr1bYkU5xt"},{url:"/_next/static/chunks/d0447323-b22f34102db2b3f95100.js",revision:"7tliC5oOACYwr1bYkU5xt"},{url:"/_next/static/chunks/d7eeaac4-42b8dcec18bdd0a10fbe.js",revision:"7tliC5oOACYwr1bYkU5xt"},{url:"/_next/static/chunks/de71a805-a389c6bba8e799a8fa87.js",revision:"7tliC5oOACYwr1bYkU5xt"},{url:"/_next/static/chunks/f3bc85ad-ca268ce9e675ba6c108d.js",revision:"7tliC5oOACYwr1bYkU5xt"},{url:"/_next/static/chunks/framework-92300432a1172ef1338b.js",revision:"7tliC5oOACYwr1bYkU5xt"},{url:"/_next/static/chunks/main-c0128755b595455982ad.js",revision:"7tliC5oOACYwr1bYkU5xt"},{url:"/_next/static/chunks/pages/_app-87ab3409a3e57d6652f7.js",revision:"7tliC5oOACYwr1bYkU5xt"},{url:"/_next/static/chunks/pages/_error-a0e21b9b223f827fe1f2.js",revision:"7tliC5oOACYwr1bYkU5xt"},{url:"/_next/static/chunks/pages/index-31b1d3ca034df0e34ff3.js",revision:"7tliC5oOACYwr1bYkU5xt"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"7tliC5oOACYwr1bYkU5xt"},{url:"/_next/static/chunks/webpack-18a8affda71a9802319e.js",revision:"7tliC5oOACYwr1bYkU5xt"},{url:"/_next/static/css/427af426de94c4b0d0bb.css",revision:"7tliC5oOACYwr1bYkU5xt"},{url:"/_next/static/css/85aaf3b7822d203b064c.css",revision:"7tliC5oOACYwr1bYkU5xt"},{url:"/favicon.png",revision:"e65f4729eaa4be3a67e31212fa8f6d85"},{url:"/sounds/Clave-1.wav",revision:"400c9ef37e02e6807b2d81de59d0a6b2"},{url:"/sounds/Closed-Hi-Hat-1.wav",revision:"950d832bfee0164cd8756d73876ed4b1"},{url:"/sounds/Cowbell-1.wav",revision:"5535800eaa4760a002816b8140a5cd1b"},{url:"/sounds/Cowbell-2.wav",revision:"e1a1b2d9d6c3e3c29289e4d689ae0812"},{url:"/sounds/Cowbell-3.wav",revision:"cd6a5944575c3fadae46d136327914f9"},{url:"/sounds/Ensoniq-SQ-1-Ride-Cymbal.wav",revision:"bf3f99623a0bf765d54fcf9b38081b97"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600,purgeOnQuotaError:!0})]}),"GET")}));
