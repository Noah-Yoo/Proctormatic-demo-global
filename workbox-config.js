module.exports = {
  globDirectory: './',
  globPatterns: [
    '**/*.{html,js,css,png,svg,json,woff2,mp4}'
  ],
  swDest: 'service-worker.js',
  clientsClaim: true,
  skipWaiting: true,
  modifyURLPrefix: {
    '': '/Proctormatic-demo-global/'  // 여기에 리포지토리 이름을 입력합니다.
  },
  maximumFileSizeToCacheInBytes: 80 * 1024 * 1024, // 80MB
  runtimeCaching: [
    {
      urlPattern: ({ request }) => true, // 모든 요청을 캐시
      handler: 'CacheFirst',
      options: {
        cacheName: 'precache-v1',
        expiration: {
          maxEntries: 100,
        },
      },
    },
  ],
};