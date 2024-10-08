importScripts(
  "/Proctormatic-demo-global/workbox/workbox-v7.1.0/workbox-sw.js",
  "/Proctormatic-demo-global/workbox/workbox-v7.1.0/workbox-precaching.prod.js",
  "/Proctormatic-demo-global/workbox/workbox-v7.1.0/workbox-routing.prod.js",
  "/Proctormatic-demo-global/workbox/workbox-v7.1.0/workbox-strategies.prod.js",
  "/Proctormatic-demo-global/workbox/workbox-v7.1.0/workbox-cacheable-response.prod.js",
);

if (workbox) {
  console.log(`Workbox is loaded`);

  // 프리캐시된 파일들
  workbox.precaching.precacheAndRoute([{"revision":"83ecff8c7e3514bd32c2b034a34f4043","url":"/Proctormatic-demo-global/css/font.css"},{"revision":"be5bc1ece5ebebef35ed4c705b83cebf","url":"/Proctormatic-demo-global/css/global.css"},{"revision":"2c81c84886ddd16e3520f1cccc62c030","url":"/Proctormatic-demo-global/css/index.css"},{"revision":"72e4e651e5ea9c90cf33ae52c48ffe7f","url":"/Proctormatic-demo-global/css/modal.css"},{"revision":"f5c9274e72019773df543253abaea17d","url":"/Proctormatic-demo-global/css/reportDown.css"},{"revision":"b239667a7b601768790d45054e714f24","url":"/Proctormatic-demo-global/css/reportSpecificUp.css"},{"revision":"236b9bb5ebbd405678aa5a8994dccaba","url":"/Proctormatic-demo-global/css/reportUp.css"},{"revision":"5cdfce9c17960d9ac18d76d02437e332","url":"/Proctormatic-demo-global/font/Pretendard-Black.woff2"},{"revision":"c45234800c42ff624adc8941a1fa9e8f","url":"/Proctormatic-demo-global/font/Pretendard-Bold.woff2"},{"revision":"848bff7bea24a318a054979fd53fcd71","url":"/Proctormatic-demo-global/font/Pretendard-ExtraBold.woff2"},{"revision":"8e7c56a3794737d30cb0806e6716ef57","url":"/Proctormatic-demo-global/font/Pretendard-ExtraLight.woff2"},{"revision":"8f686c143e28df9c200c189c88f90a40","url":"/Proctormatic-demo-global/font/Pretendard-Light.woff2"},{"revision":"146472533da4d370f600334864179b5b","url":"/Proctormatic-demo-global/font/Pretendard-Medium.woff2"},{"revision":"bac296f1fd0973251e94406b8d328847","url":"/Proctormatic-demo-global/font/Pretendard-Regular.woff2"},{"revision":"b1e912aa560e4d0e6537e42babb7f112","url":"/Proctormatic-demo-global/font/Pretendard-SemiBold.woff2"},{"revision":"cfe8faacaa8e95d4338ccb53249d6562","url":"/Proctormatic-demo-global/font/Pretendard-Thin.woff2"},{"revision":"d53bb7d55f6bc5fae43ca80b05cd1ae8","url":"/Proctormatic-demo-global/img/arrow.svg"},{"revision":"a6321b8cf8980bacd024c53aa571627e","url":"/Proctormatic-demo-global/img/favicon_16.png"},{"revision":"3104f928293adce7157cc663db4d6027","url":"/Proctormatic-demo-global/img/favicon_32.png"},{"revision":"3104f928293adce7157cc663db4d6027","url":"/Proctormatic-demo-global/img/favicon_96.png"},{"revision":"9d61f2281b80d7db337b6662fab7d609","url":"/Proctormatic-demo-global/img/reportSpecific/arrowLeftWhite.svg"},{"revision":"411f31bb91337fc1d201233d2c5c2c80","url":"/Proctormatic-demo-global/img/reportSpecific/arrowRightWhite.svg"},{"revision":"4a143e7f893dad64fd933108e89b9bdf","url":"/Proctormatic-demo-global/img/reportSpecific/Bad.svg"},{"revision":"f2535b789abd7ab67d216f859b21d8bb","url":"/Proctormatic-demo-global/img/reportSpecific/detectError.svg"},{"revision":"16c1b03f83ceea01ca35efbdbabe0b6d","url":"/Proctormatic-demo-global/img/reportSpecific/greyX.svg"},{"revision":"b36b4cd1e1d969ad83703e7bbb4c9a35","url":"/Proctormatic-demo-global/img/reportSpecific/incompleteTest.svg"},{"revision":"c7d1f1e35856c4d306a7d3dee041bfe3","url":"/Proctormatic-demo-global/img/reportSpecific/normal.svg"},{"revision":"ca48ff767bd2a44a418328c59fe2ad5a","url":"/Proctormatic-demo-global/img/reportSpecific/settingPhoto/0/0/aroundSetting/1.png"},{"revision":"e8f85aeba5d0e238e995ad79e43bd1e8","url":"/Proctormatic-demo-global/img/reportSpecific/settingPhoto/0/0/cameraSetting/1.png"},{"revision":"d09ff2dfa9dda6be9d718663ac66e603","url":"/Proctormatic-demo-global/img/reportSpecific/settingPhoto/0/0/cameraSetting/2.png"},{"revision":"013c057bf517128bb1ca35819995dc81","url":"/Proctormatic-demo-global/img/reportSpecific/settingPhoto/0/1/aroundSetting/1.png"},{"revision":"231bc9be5fe78006c37e197e819a882c","url":"/Proctormatic-demo-global/img/reportSpecific/settingPhoto/0/1/cameraSetting/1.png"},{"revision":"09cfd85070f34c4931ab80216fe6f4e3","url":"/Proctormatic-demo-global/img/reportSpecific/settingPhoto/0/1/cameraSetting/2.png"},{"revision":"94d2acbb3cc76c3f63ca4f345e602953","url":"/Proctormatic-demo-global/img/reportSpecific/settingPhoto/0/2/aroundSetting/1.png"},{"revision":"17256399155a504c1732b59fe3a096fe","url":"/Proctormatic-demo-global/img/reportSpecific/settingPhoto/0/2/cameraSetting/1.png"},{"revision":"689cb509ba0205fbd58cc12f90fbf861","url":"/Proctormatic-demo-global/img/reportSpecific/settingPhoto/0/2/cameraSetting/2.png"},{"revision":"9c594f5373798dc69c5b67c04317ba17","url":"/Proctormatic-demo-global/img/reportSpecific/sharing.svg"},{"revision":"25dd7e9622778c921d27e7f27dc18e40","url":"/Proctormatic-demo-global/img/reportSpecific/suspicious.svg"},{"revision":"7778fbea2ee49e7e8b0d8a5c5dd0f882","url":"/Proctormatic-demo-global/img/reportSpecific/uploaderPhoto/0/0/face-photo.png"},{"revision":"e80f908213d31a2c693a8851f2033129","url":"/Proctormatic-demo-global/img/reportSpecific/uploaderPhoto/0/1/face-photo.png"},{"revision":"e871418c846037c5c471c47a8e9a5e2d","url":"/Proctormatic-demo-global/img/reportSpecific/uploaderPhoto/0/2/face-photo.png"},{"revision":"7174c19dacb61b1f29648e14ca951df1","url":"/Proctormatic-demo-global/img/reportSpecific/uploadNotCompleted.svg"},{"revision":"269f277eb48f6d6aa142301222ecdb7e","url":"/Proctormatic-demo-global/img/reportSpecific/white_ch.svg"},{"revision":"89f9f45fb94944d4d5351ee08757d9bc","url":"/Proctormatic-demo-global/img/toggle.svg"},{"revision":"7aebddc449da48cf13792581ab7d9f22","url":"/Proctormatic-demo-global/img/toggleAfter.svg"},{"revision":"d7dd198705961b3b699d6866e495f91d","url":"/Proctormatic-demo-global/index.html"},{"revision":"5774b78d3409b96845c32affe4425db2","url":"/Proctormatic-demo-global/js/dountGraph.js"},{"revision":"d3b093e3ede4041f584171925c8e4d9f","url":"/Proctormatic-demo-global/js/function.js"},{"revision":"38c6a47a8b6990606373ef98ba2809a9","url":"/Proctormatic-demo-global/js/graph.js"},{"revision":"87f646725b5f7e9e14270847e430b5c7","url":"/Proctormatic-demo-global/js/physical.js"},{"revision":"787d72136539f08e604c744bf531c11b","url":"/Proctormatic-demo-global/json/beforeUpload.json"},{"revision":"9191217af057aa8034d617ed5a690d96","url":"/Proctormatic-demo-global/json/finishExam_copy.json"},{"revision":"5d2c001b971552bde2bf885f063001e7","url":"/Proctormatic-demo-global/json/finishExam.json"},{"revision":"09c3cf7483dd5f65499237336edc7a1e","url":"/Proctormatic-demo-global/json/report/eventSummary.json"},{"revision":"001ade1e78304695cedb3755086a60e4","url":"/Proctormatic-demo-global/json/report/judgeSummary.json"},{"revision":"c0e4f5ddb86f9d21691f1468336f7466","url":"/Proctormatic-demo-global/json/report/testerList.json"},{"revision":"d75204e7fb07a04213d7dbaeaaa1667f","url":"/Proctormatic-demo-global/json/reportSpecific/rawUserData.json"},{"revision":"b5c2d729455f46a2e85fcd50de1f6264","url":"/Proctormatic-demo-global/json/reportSpecific/settingURL.json"},{"revision":"c4017a86fd3b615e325b60d18e842fa4","url":"/Proctormatic-demo-global/json/reportSpecific/uploaderList.json"},{"revision":"72beafeb3d83ac61396e299e691b4e3b","url":"/Proctormatic-demo-global/json/reportSpecific/userData.json"},{"revision":"2672c3823feaaa8830db971bd60f1747","url":"/Proctormatic-demo-global/json/reportSpecific/videoURL.json"},{"revision":"9057744463adefaccf2e821ffa1aaabe","url":"/Proctormatic-demo-global/json/testSummary.json"},{"revision":"415712eae2aa3f5c5972df9eeeec9c97","url":"/Proctormatic-demo-global/json/waiting.json"},{"revision":"1fdd42a27438ee139a819ab8e6af706b","url":"/Proctormatic-demo-global/logo_proctormatic_192.png"},{"revision":"96dc4e3941903065d877575d2cd48c9c","url":"/Proctormatic-demo-global/logo_proctormatic_512.png"},{"revision":"824a00679d10cddd5976cfb3ff474841","url":"/Proctormatic-demo-global/manifest.json"},{"revision":"d0e2266e3e20c6fc695dcb8ab04adc22","url":"/Proctormatic-demo-global/media/reportSpecific/0/0/combined_video.mp4"},{"revision":"bef28c9b23e35170e07ab731197afd60","url":"/Proctormatic-demo-global/media/reportSpecific/0/1/combined_video.mp4"},{"revision":"e493cd16d99fc52d223c98db7ac235fe","url":"/Proctormatic-demo-global/media/reportSpecific/0/2/combined_video.mp4"},{"revision":"b21c401ac63467b5397d87a9d7ee410f","url":"/Proctormatic-demo-global/report.html"},{"revision":"4766ca2e73f5377cd7bee5cc11863b0d","url":"/Proctormatic-demo-global/reportSpecific.html"},{"revision":"4dcfe3f5dd33aa173f96366f492b8d79","url":"/Proctormatic-demo-global/script.js"},{"revision":"aa47ead82fa86d7ef384791524e4a6b4","url":"/Proctormatic-demo-global/workbox-config.js"},{"revision":"cf880dbaa143a8a4a092190c65ea7701","url":"/Proctormatic-demo-global/workbox/workbox-v7.1.0/workbox-cacheable-response.prod.js"},{"revision":"994473cfcdc8b193deba39d69c9f0679","url":"/Proctormatic-demo-global/workbox/workbox-v7.1.0/workbox-core.prod.js"},{"revision":"2b8cabf7ded7e258e972bb8cc9cf90dc","url":"/Proctormatic-demo-global/workbox/workbox-v7.1.0/workbox-precaching.prod.js"},{"revision":"b907c3d53e7ec5e995a8a81de4c21c9b","url":"/Proctormatic-demo-global/workbox/workbox-v7.1.0/workbox-routing.prod.js"},{"revision":"a1b45f187a34aabf82a57c1116e99883","url":"/Proctormatic-demo-global/workbox/workbox-v7.1.0/workbox-strategies.prod.js"},{"revision":"6b2de8ea95fe4451bc46af600ec37f1a","url":"/Proctormatic-demo-global/workbox/workbox-v7.1.0/workbox-sw.js"}], {
    ignoreURLParametersMatching: [/.*/],
  });

  self.addEventListener("install", (event) => {
    self.skipWaiting(); // 새로운 서비스 워커를 즉시 활성화
  });

  // 모든 HTML 파일 캐싱
  workbox.routing.registerRoute(
    ({ request }) => request.destination === "document",
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: "html-cache",
      plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200],
        }),
      ],
    }),
  );

  // 이미지 파일 캐싱 (png, svg)
  workbox.routing.registerRoute(
    ({ request }) => request.destination === "image",
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: "image-cache",
      plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200],
        }),
      ],
    }),
  );

  // JS, CSS 파일 캐싱
  workbox.routing.registerRoute(
    ({ request }) =>
      request.destination === "script" || request.destination === "style",
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: "static-resources",
      plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200],
        }),
      ],
    }),
  );

  // 폰트 파일 캐싱 (woff2)
  workbox.routing.registerRoute(
    ({ request }) => request.destination === "font",
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: "font-cache",
      plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200],
        }),
      ],
    }),
  );

  // 비디오 파일 캐싱 (mp4)
  workbox.routing.registerRoute(
    ({ request }) => request.destination === "video",
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: "video-cache",
      plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200],
        }),
      ],
    }),
  );

  // JSON 파일 캐싱
  workbox.routing.registerRoute(
    ({ request }) =>
      request.destination === "json" || request.destination === "fetch",
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: "json-cache",
      plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200],
        }),
      ],
    }),
  );

  self.addEventListener("activate", (event) => {
    event.waitUntil(self.clients.claim()); // 새로운 서비스 워커가 즉시 클라이언트를 제어하도록 설정
  });
} else {
  console.log(`Workbox didn't load`);
}

