module.exports = {
  globDirectory: './',
  globPatterns: [
    '**/*.{html,js,css,json,svg,png,woff2,mp4}'
    // './media/reportSpecific/0/0/combined_video.mp4',
    // './media/reportSpecific/0/1/combined_video.mp4',
    // './img/arrow.svg'
    // './media/combined_video.mp4'
  ],
  swDest: 'service-worker.js',
  swSrc: 'src-sw.js',
  modifyURLPrefix: {
    '': '/Proctormatic-demo-global/'  // 여기에 리포지토리 이름을 입력합니다.
  },

  maximumFileSizeToCacheInBytes: 80 * 1024 * 1024, // 80MB

  // runtimeCaching: [
  //   {
  //     urlPattern: new RegExp('/Proctormatic-demo-global/.*\\.(?:png|jpg|jpeg|svg)$'),
  //     handler: 'CacheFirst',
  //     options: {
  //       cacheName: 'images',
  //       expiration: {
  //         maxEntries: 100,
  //       },
  //     },
  //   },
  //   {
  //     urlPattern: new RegExp('/Proctormatic-demo-global/.*\\.(?:mp4)$'),
  //     handler: 'CacheFirst',
  //     options: {
  //       cacheName: 'videos',
  //       expiration: {
  //         maxEntries: 5,
  //       },
  //     },
  //   },
  //   {
  //     urlPattern: new RegExp('/Proctormatic-demo-global/.*\\.(?:woff2)$'),
  //     handler: 'CacheFirst',
  //     options: {
  //       cacheName: 'fonts',
  //       expiration: {
  //         maxEntries: 20,
  //       },
  //     },
  //   },
  //   {
  //     urlPattern: new RegExp('/Proctormatic-demo-global/.*\\.(?:js|css|json|html)$'),
  //     handler: 'StaleWhileRevalidate',
  //     options: {
  //       cacheName: 'static-resources',
  //       expiration: {
  //         maxEntries: 60,
  //       },
  //     },
  //   }
  // ],
};