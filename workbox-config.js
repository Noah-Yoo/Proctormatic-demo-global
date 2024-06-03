module.exports = {
  globDirectory: './',
  globPatterns: [
    '**/*.{html,js,css,json,svg,png,woff2}'
  ],
  swDest: 'service-worker.js',
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images',
        expiration: {
          maxEntries: 100,
        },
      },
    },
    {
      urlPattern: /\.(?:mp4)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'videos',
        expiration: {
          maxEntries: 5,
        },
      },
    },
    {
      urlPattern: /\.(?:woff2)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'fonts',
        expiration: {
          maxEntries: 20,
        },
      },
    },
    {
      urlPattern: /\.(?:js|css|json|html)$/,
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