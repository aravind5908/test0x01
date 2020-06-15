const staticCacheName = 'site-static';
const assets = [
  './',
  './index.html',
  './css/style.css',
  './img/chefs/chefs-1.jp',
  './img/chefs/chefs-2.jpg',
  './img/chefs/chefs-3.jpg',
  './img/testimonials/testimonials-1.jpg',
  './img/testimonials/testimonials-2.jpg',
  './img/testimonials/testimonials-3.jpg',
  './img/testimonials/testimonials-4.jpg',
  './img/testimonials/testimonials-5.jpg',
  './img/about.jpg',
  './img/about-bg.jpg',
  './img/apple-touch-icon.png',
  './img/favicon.png',
  './img/hero-bg.jpg',
  './vendor/bootstrap/css/bootstrap.min.css',
  './vendor/icofont/icofont.min.css',
  './vendor/animate.css/animate.min.css',
  './vendor/venobox/venobox.css', 
  './vendor/aos/aos.css',
  './vendor/aos/aos.js',
  './js/app.js',
  './vendor/bootstrap/js/bootstrap.bundle.min.js',
  './vendor/isotope-layout/isotope.pkgd.min.js',
  'https://api.omappapi.com/v2/embed/71036/f6brbmuxflyqoriatchv',
  './vendor/icofont/fonts/icofont.woff2',
  './vendor/boxicons/fonts/boxicons.woff2'
  
];

// install event
self.addEventListener('install', evt => {
  //console.log('service worker installed');
  evt.waitUntil(
    caches.open(staticCacheName).then(cache => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
  //console.log('service worker activated');
});

// fetch event
self.addEventListener('fetch', evt => {
  //console.log('fetch event', evt);
});
