// import { precacheAndRoute } from 'workbox-precaching';
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  // 프리캐싱된 파일들
  workbox.precaching.precacheAndRoute(self.__WB_MANIFEST, {
  // ignoreURLParametersMatching: [/.*/] // 모든 쿼리 파라미터 무시
  });

  self.addEventListener('install', (event) => {
    self.skipWaiting(); // 새로운 서비스 워커를 즉시 활성화
  });

  // fetch 이벤트 처리
  self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // 모든 HTML 파일에 대해 쿼리 파라미터를 무시하고 처리
    if (event.request.destination === 'document') {
      // 쿼리 파라미터를 제거한 URL을 생성
      const cacheUrl = new URL(url.origin + url.pathname);
      
      event.respondWith(
        caches.match(cacheUrl).then((response) => {
          // 캐시된 응답이 있으면 반환, 없으면 네트워크 요청
          return response || fetch(event.request);
        })
      );
    }
  });

  self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim()); // 새로운 서비스 워커가 즉시 클라이언트를 제어하도록 설정
  });

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

