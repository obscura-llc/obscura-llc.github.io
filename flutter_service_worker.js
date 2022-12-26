'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "a8b47ab56405bb0727c1eb7be1ab391c",
"assets/assets/images/app_icon_chats.png": "a720c3b6cc85bd0a9b2ce3944b87b0f6",
"assets/assets/images/app_icon_foods.png": "ef0016da7a5c65700d191b96eafa087f",
"assets/assets/images/app_icon_taxi.png": "39d96f4d203c1b849fb619668971951c",
"assets/assets/images/automate.jpg": "a650710ab88195e66c86672a4d33eeec",
"assets/assets/images/clutch.png": "0cc94d42e38aeb640cfe1895ccd7fe71",
"assets/assets/images/dev.jpg": "a8f415e5704116875a7bfde64521f839",
"assets/assets/images/flutter.png": "ba5348906f90b4d05f5bf694330dce81",
"assets/assets/images/good-firms.png": "1430ba3561af7079cae31d8e734a0e13",
"assets/assets/images/java.png": "17a02615a6e7fed1bb5ec7be8d7dffd8",
"assets/assets/images/js.png": "a175d6e983cb217f313a00f6bdac3182",
"assets/assets/images/kotlin.png": "3e1d9615a70d9e87b3b0a0239c9d1db1",
"assets/assets/images/logo.png": "2adcb2ef19c44e96e71a3778d595fbae",
"assets/assets/images/obs-chat.png": "83e479f516dc55d787ac9d5a2c78b389",
"assets/assets/images/obs-delivery.png": "1cb665c28d209c27eeeba1c97096bad0",
"assets/assets/images/obs-taxi.png": "2533cf8be0c44fda309168ae9d82fb24",
"assets/assets/images/support.jpg": "4713edb727746b240cbf92af5c0b74bd",
"assets/assets/images/swift.png": "1e8cc4713e4a5039f9958c7ed220b1c4",
"assets/assets/images/tst.png": "e50f28414229c3a3694bfd0e84ad86cf",
"assets/assets/images/ux.jpg": "81a8c5da5d01d54e19a6682ddca65b11",
"assets/assets/videos/videoplayback.mp4": "d7599b86279bc07d81b58c16fb5ce028",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "5af9079b1d6b796bc1376ce03a63ef7d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/shaders/ink_sparkle.frag": "2a58b60a6ffe5df6343e247f3ef54482",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/android-icon-144x144.png": "3364953c1b2b7e07e5f07926d743dc7e",
"icons/android-icon-192x192.png": "a5caf1d2596f1fcb0db73332268c9d64",
"icons/android-icon-36x36.png": "63aa2f8b9a351c19069c2046647dfb71",
"icons/android-icon-48x48.png": "e92940397d1342fc91b1f60e53348eb6",
"icons/android-icon-72x72.png": "b600b38b350e376b91968012e6abfcf6",
"icons/android-icon-96x96.png": "497d62981a2f622f2f7b1730d83d6bd3",
"icons/apple-icon-114x114.png": "b3d4c0c08e518b18e29241f00a513d8a",
"icons/apple-icon-120x120.png": "a01cbf32b490fbe62bbebeacb3f90f4f",
"icons/apple-icon-144x144.png": "3364953c1b2b7e07e5f07926d743dc7e",
"icons/apple-icon-152x152.png": "fa88ce597251f2d4e22ba7bde8d5fde3",
"icons/apple-icon-180x180.png": "249d712e3469fc2e713f9b1de9d8844a",
"icons/apple-icon-57x57.png": "fe6260ef44cdd14dcfcf84bd5f4f0b3a",
"icons/apple-icon-60x60.png": "dc299ab96115c94a31da6eae660193b8",
"icons/apple-icon-72x72.png": "b600b38b350e376b91968012e6abfcf6",
"icons/apple-icon-76x76.png": "74373457e0ecc70e42a8100d03831184",
"icons/apple-icon-precomposed.png": "9e2569c5d6ef7660760a9a4c44b8b522",
"icons/apple-icon.png": "9e2569c5d6ef7660760a9a4c44b8b522",
"icons/favicon-16x16.png": "109c6d6600d47c0fbe9d1adb65d8c258",
"icons/favicon-32x32.png": "ecb6d1323aa62b9217315fb6a01edef8",
"icons/favicon-96x96.png": "497d62981a2f622f2f7b1730d83d6bd3",
"icons/favicon.ico": "d53fe694bbd8a72e8b31f6923e9d9113",
"icons/ms-icon-144x144.png": "3364953c1b2b7e07e5f07926d743dc7e",
"icons/ms-icon-150x150.png": "f2b93448362db8df25fab56f6bfb5818",
"icons/ms-icon-310x310.png": "8b40aa70f268894524ade3d2c32beb17",
"icons/ms-icon-70x70.png": "d505e6b0aa49ef9ab94bed891f2bd85a",
"index.html": "639f68428ddcbe9eb4a39f99637808f4",
"/": "639f68428ddcbe9eb4a39f99637808f4",
"main.dart.js": "0e78200a3c2956a52659a13dae082262",
"manifest.json": "1c603d63f8e05283d770631c1bbe530d",
"version.json": "aa0a06499c95f09ac8f56445e6b90132"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
