import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
// 이 줄은 Workbox CLI에 의해 생성된 프리캐시 파일 목록을 사용합니다.
precacheAndRoute(self.__WB_MANIFEST);
registerRoute(
  new RegExp('/proctormatic-demo-global/.*\\.(?:png|jpg|jpeg|svg)$'),
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      {
        expiration: {
          maxEntries: 100,
        },
      },
    ],
  })
);
registerRoute(
  new RegExp('/proctormatic-demo-global/.*\\.(?:mp4)$'),
  new CacheFirst({
    cacheName: 'videos',
    plugins: [
      {
        expiration: {
          maxEntries: 5,
        },
      },
    ],
  })
);
registerRoute(
  new RegExp('/proctormatic-demo-global/.*\\.(?:woff2)$'),
  new CacheFirst({
    cacheName: 'fonts',
    plugins: [
      {
        expiration: {
          maxEntries: 20,
        },
      },
    ],
  })
);
registerRoute(
  new RegExp('/proctormatic-demo-global/.*\\.(?:js|css|json|html)$'),
  new StaleWhileRevalidate({
    cacheName: 'static-resources',
    plugins: [
      {
        expiration: {
          maxEntries: 60,
        },
      },
    ],
  })
);