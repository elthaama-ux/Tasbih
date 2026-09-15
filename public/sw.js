const CACHE_NAME = 'quran-tasbih-v1';

// الملفات المبدئية للتخزين
const INITIAL_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon.png'
];

// عند تثبيت التطبيق
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(INITIAL_ASSETS);
    })
  );
  self.skipWaiting();
});

// عند تفعيل الـ Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// استراتيجية الأوفلاين: الجلب من الكاش أولاً، وإذا غير موجود يجيبه من النت ويحفظه
self.addEventListener('fetch', (event) => {
  // تجاهل طلبات chrome-extension
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request)
        .then((response) => {
          // عدم تخزين الاستجابات غير الصالحة
          if (!response || response.status !== 200 || response.type === 'opaque') {
            return response;
          }

          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        })
        .catch(() => {
          // في حالة عدم وجود إنترنت والملف مش متخزن
          return caches.match('/');
        });
    })
  );
});