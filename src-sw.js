import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';

// 프리캐싱된 파일들
precacheAndRoute(self.__WB_MANIFEST, {
  ignoreURLParametersMatching: [/.*/] // 모든 쿼리 파라미터 무시
});

self.addEventListener('install', (event) => {
  self.skipWaiting(); // 새로운 서비스 워커를 즉시 활성화
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim()); // 새로운 서비스 워커가 즉시 클라이언트를 제어하도록 설정
});

// 모든 요청에 대해 프리캐시된 파일을 제공 (런타임 캐시 없음)
// registerRoute(
//   ({ request }) => true, // 모든 요청을 매칭
//   new workbox.strategies.CacheFirst({
//     cacheName: 'precache-v1',
//     plugins: [
//       new workbox.expiration.ExpirationPlugin({
//         // maxAgeSeconds: 60 * 60 * 24 * 365, // 1년
//         maxEntries: 100, // 최대 100개 파일
//       }),
//     ],
//   })
// );

