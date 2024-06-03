import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
// 프리캐시 목록 설정
precacheAndRoute(self.__WB_MANIFEST);
// 런타임 캐싱 설정
registerRoute(
  ({url}) => url.pathname.startsWith('/Proctormatic-demo-global/assets/images/'),
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({ maxEntries: 50 }),
      new CacheableResponsePlugin({ statuses: [0, 200] }),
    ],
  })
);
registerRoute(
  ({url}) => url.pathname.startsWith('/Proctormatic-demo-global/assets/videos/'),
  new CacheFirst({
    cacheName: 'videos',
    plugins: [
      new ExpirationPlugin({ maxEntries: 5 }),
      new CacheableResponsePlugin({ statuses: [0, 200] }),
    ],
  })
);
registerRoute(
  ({url}) => url.pathname.startsWith('/Proctormatic-demo-global/assets/fonts/'),
  new CacheFirst({
    cacheName: 'fonts',
    plugins: [
      new ExpirationPlugin({ maxEntries: 20 }),
      new CacheableResponsePlugin({ statuses: [0, 200] }),
    ],
  })
);
registerRoute(
  ({url}) => url.pathname.startsWith('/Proctormatic-demo-global/'),
  new StaleWhileRevalidate({
    cacheName: 'static-resources',
    plugins: [
      new ExpirationPlugin({ maxEntries: 60 }),
      new CacheableResponsePlugin({ statuses: [0, 200] }),
    ],
  })
);
// HTTP Range 요청 처리
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.headers.has('range')) {
    event.respondWith(handleRangeRequest(event));
  }
});
async function handleRangeRequest(event) {
  const request = event.request;
  const rangeHeader = request.headers.get('range');
  const cache = await caches.open('video-cache');
  const cachedResponse = await cache.match(request.url);
  if (!cachedResponse) {
    const response = await fetch(request);
    const responseClone = response.clone();
    cache.put(request.url, responseClone);
    return response;
  }
  const bytes = /^bytes\=(\d+)\-(\d+)?$/.exec(rangeHeader);
  const start = Number(bytes[1]);
  const end = bytes[2] ? Number(bytes[2]) : cachedResponse.headers.get('content-length') - 1;
  const chunkSize = end - start + 1;
  const buffer = await cachedResponse.arrayBuffer();
  const slicedBuffer = buffer.slice(start, end + 1);
  return new Response(slicedBuffer, {
    status: 206,
    statusText: 'Partial Content',
    headers: [
      ['Content-Range', `bytes ${start}-${end}/${buffer.byteLength}`],
      ['Content-Length', chunkSize],
      ['Content-Type', cachedResponse.headers.get('Content-Type')]
    ]
  });
}