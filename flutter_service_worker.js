'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f9e9a2e58097d5815e98254d649aa0d8",
".git/config": "e70e4868fa4a8073f477ea8562cd300f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a3f765344cba9dacd32ea702ae101ce3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8484ee30facbbfbe0e19c15511f74c14",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fb0a9488aeadd264cbc23fbc0f50c8a7",
".git/logs/refs/heads/main": "fb0a9488aeadd264cbc23fbc0f50c8a7",
".git/logs/refs/remotes/origin/HEAD": "283196251dd8a656279d26a555287927",
".git/logs/refs/remotes/origin/main": "fa06dde5f338c2f27bb2a12adc7551cf",
".git/objects/06/c0d36f17527dc98ecc065831ac5a5e8900f1e1": "8a86dcde102bbf5105f3bf0cd910a455",
".git/objects/0c/1fe950fc145e69eb74037ffb10fc0141121765": "7746014cb3043a9f6e54dcbc2dd2531d",
".git/objects/0d/e48bd2b72810a6afad9e6626d79ebba89419ac": "2eb38f82d8337a6a993fb0c69b516010",
".git/objects/26/f121346fb92cc90123d91f0d2073c0f8000dca": "e2b8c64b970c0828a70a687f619a8a6e",
".git/objects/3f/e5e1c7819fbfb06a5bdc07c79de211ce48ba20": "acadedd2ac14b10f281b98fc148368a3",
".git/objects/47/5d4035dce3796e853496dea169514327206455": "a24104b45555f2bef84917366aa698d2",
".git/objects/5c/79dea103e6c4c48b8ade5d6c17384867a3043a": "db2146fa16ba0516c214aca4b08a2110",
".git/objects/69/4002f011fb87d611a36bb3945113d5f3e9a586": "01a7dc4d50a6f65d8c3930018bff0a09",
".git/objects/81/7db10d6cf2ac3d47bcbc49d41622687c6a6449": "cf7cb7a01c6a7ded838637d137aea539",
".git/objects/8f/75114baa21781805d9511f42699f38594cf774": "6d01e669840d26412bd227d0444151d1",
".git/objects/9e/3562cb2c22a297b84d468eb8a5cb8af1c0822c": "d2bbbad8f85f76e3ec9a335bc2150419",
".git/objects/b9/86c6363453c82ef31784f7443aa3a53e9af822": "37c85859ad098a9b7398a78145c00b96",
".git/objects/ba/7f91978c7ab6b453b672c3da89eef7a563a00d": "4ecdde572ef8f541b9cc451c287625c9",
".git/objects/e9/347b6f22246827fa87293e9225713dbf20ffea": "f5d286b1f02235d34fd8ec2898903ecb",
".git/objects/pack/pack-24c3996a9030a572aa4477ba568c8c77a351c956.idx": "7eec7362e7b23bb3a98ac81e4f4a82d5",
".git/objects/pack/pack-24c3996a9030a572aa4477ba568c8c77a351c956.pack": "b9f58f90f547229fb8da37765279cdf3",
".git/packed-refs": "36e79a05ed6ec76d70bc097132d1b903",
".git/refs/heads/main": "3ad63847ff4b1f590bc103341d856653",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "3ad63847ff4b1f590bc103341d856653",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "a343d01e8cc8e460d0526fb92f70b5f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "cff592b7c38b2cf3cdc7d64a17392cc0",
"icons/Icon-192.png": "23932624f82ff5827e52986ae843cf6b",
"icons/Icon-512.png": "bc63b77efa239210f75711976bb81070",
"index.html": "2b34bb9fadb6d5f8a50134edb32ef411",
"/": "2b34bb9fadb6d5f8a50134edb32ef411",
"main.dart.js": "ce1eb62b0f4347d5fa5b88e4db316484",
"manifest.json": "98c544478e30d2218dc0b340408dfb12",
"version.json": "80070c981be97aafb51a3a5f5d5ca2fb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
