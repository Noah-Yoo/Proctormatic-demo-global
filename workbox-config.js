module.exports = {
  globDirectory: './',
  globPatterns: [
    '**/*.{html,js,css,json,svg,png,woff2}'
  ],
  swDest: 'service-worker.js',
  modifyURLPrefix: {
    '': '/proctormatic-demo-global/'  // 여기에 리포지토리 이름을 입력합니다.
  },
  runtimeCaching: [
    {
      urlPattern: new RegExp('/proctormatic-demo-global/.*\\.(?:png|jpg|jpeg|svg)$'),
      handler: 'CacheFirst',
      options: {
        cacheName: 'images',
        expiration: {
          maxEntries: 100,
        },
      },
    },
    {
      urlPattern: new RegExp('/proctormatic-demo-global/.*\\.(?:mp4)$'),
      handler: 'CacheFirst',
      options: {
        cacheName: 'videos',
        expiration: {
          maxEntries: 5,
        },
      },
    },
    {
      urlPattern: new RegExp('/proctormatic-demo-global/.*\\.(?:woff2)$'),
      handler: 'CacheFirst',
      options: {
        cacheName: 'fonts',
        expiration: {
          maxEntries: 20,
        },
      },
    },
    {
      urlPattern: new RegExp('/proctormatic-demo-global/.*\\.(?:js|css|json|html)$'),
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'static-resources',
        expiration: {
          maxEntries: 60,
        },
      },
    }
  ],
};