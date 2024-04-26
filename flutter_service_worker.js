'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "a1f3fb16d9290b637dc368abe87ef2e4",
"index.html": "a5394b481b5435e75b1c57a81c866afa",
"/": "a5394b481b5435e75b1c57a81c866afa",
"main.dart.js": "37b4da89116934cba4d28949ca7f52a9",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "88fb4a5b4d88c182b9ee58d2d79d561c",
"assets/AssetManifest.json": "e55e9c09b5d354b771841fe0d934f763",
"assets/NOTICES": "2fe732f08145c24589135a1bbf8d2271",
"assets/FontManifest.json": "f2fdaf86436e47062fa281102c439e61",
"assets/AssetManifest.bin.json": "e58c5eb8c18a7293d0a5305595206800",
"assets/packages/chassis_uiwidgets/test/assets/mughead.json": "6a8b1de39a4e65dfadb1f7bc8e614a58",
"assets/packages/chassis_uiwidgets/test/assets/mickeymouseclubhouse.jpeg": "a1380c03c1b58d4cf3d8543ab058c66f",
"assets/packages/chassis_uiwidgets/fonts/InspireTWDC-Light.otf": "7a902c3e4598c31ad834f8cbcf630478",
"assets/packages/chassis_uiwidgets/fonts/InspireTWDC-Italic.otf": "8cc1706bfa4b4685d65d7f44d7a7f3d0",
"assets/packages/chassis_uiwidgets/fonts/InspireTWDC-Medium_Italic.otf": "c92a8839c10ad8f74b138031d3e24d6e",
"assets/packages/chassis_uiwidgets/fonts/InspireTWDC-Black_Italic.otf": "1779cb7270abcc3dfb5332f18adbbd92",
"assets/packages/chassis_uiwidgets/fonts/InspireTWDC-Heavy.otf": "8d34052b0521eda5b2ea54d03cb8ec64",
"assets/packages/chassis_uiwidgets/fonts/InspireTWDC-Heavy_Italic.otf": "896a550d7679a8489b0f0fd0fc845c86",
"assets/packages/chassis_uiwidgets/fonts/InspireTWDC-Roman.otf": "3867c16d2a1ed2230f30bf45cccf8d56",
"assets/packages/chassis_uiwidgets/fonts/InspireTWDC-Light_Italic.otf": "955424b8cff03b62fae0854a2c6797a3",
"assets/packages/chassis_uiwidgets/fonts/InspireTWDC-Black.otf": "061f3352b164b5c50431a72edd87d1b2",
"assets/packages/chassis_uiwidgets/fonts/InspireTWDC-Medium.otf": "9075611f99844d92734ad3f0e57b5bce",
"assets/packages/chassis_uiwidgets/src/assets/loader.gif": "6cc187961a0b4c2bec8ac2edd88ac8e6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/chassis_icons/lib/fonts/parks/PeptasiaIconFont.otf": "19fcf1c4b9a8ff9cb5dba6b3aa7a4092",
"assets/packages/disney_flutter_module/lib/modules/myfavorite/images/2.0x/delete.png": "9de3227e2080fa007379338aa87a7f78",
"assets/packages/disney_flutter_module/assets/images/shdr_mulan_gif_loading_magic_zh.gif": "cb0b29a16e86b0a3caae969dbb91073e",
"assets/packages/disney_flutter_module/assets/images/shdr_mulan_toast_success_icon.webp": "06065d12e0392a476c44707ddc310d04",
"assets/packages/disney_flutter_module/assets/images/shdr_mulan_toast_close_icon.webp": "2cb31fd731e029d79a6fe8f7d30ec49d",
"assets/packages/disney_flutter_module/assets/images/shdr_mulan_gif_loading_magic_en.gif": "b52f68e0cc8655d1c3f6c961d1ee362f",
"assets/packages/disney_flutter_module/assets/images/shdr_mulan_toast_error_icon.webp": "6560b346fd6954191549351c8fae537b",
"assets/packages/disney_flutter_module/assets/images/shdr_mulan_toast_warning_icon.webp": "d89113996a1cc083b737a454e30bc05d",
"assets/packages/disney_flutter_module/assets/images/filter_empty.webp": "b50089e3dc836218fb4ba253c002f4e6",
"assets/packages/disney_flutter_module/assets/fonts/PEPIconFont.otf": "b0af61204eef8162637c655fa50185ba",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "13e8c37798fbac4b60a84dc007bc2d1f",
"assets/fonts/MaterialIcons-Regular.otf": "0577e814e658f6baf997c615174ad19d",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
