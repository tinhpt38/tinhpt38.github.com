'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "e17f3aa5b830eca5bd9dff86476b608a",
"/": "e17f3aa5b830eca5bd9dff86476b608a",
"main.dart.js": "b1f63fcc4f172d9642c4486e3d2522b5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b052b82928e591df35e394edd29a904f",
".git/config": "4fbe3ef3302e95518c4a77c413bd88a9",
".git/smartgit.config": "075a95783a20ba34433c20b847f296b3",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/03/1486e55c590b82b33431138dad25e56fd0af01": "2cf5923a02420a4f8dc9aead2d90166c",
".git/objects/03/431b3509305af1f2a9ab734bd2b1a6f723f87c": "2e686bd098bf5c28e51853ad1e8613d6",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9e/a3bbc9bbbbf82aaa00f542f1dbb8879d2665e6": "aa6b80913bd1e841a77b2e0ea6dd6804",
".git/objects/51/211f212610fa0cc5345668e7a95701142abdaf": "4acb1c9df6c9c35623a101c4a28423ce",
".git/objects/67/1072d21e320aeb68977096c35335f796653778": "7649882c62d67c00774363b1837f60ea",
".git/objects/bb/b6be1939ebd0310b49caa04f556cab7a0920dd": "b60f0a7d1266880f56b6a50760ce001d",
".git/objects/a5/e2c8f17886524b473ac863cc4ac644861f52c9": "9d87118a05455e52a61651a100830105",
".git/objects/ae/e145d261fa9eee2976e89e3eaf00b59a697540": "1f171c2c21df3db19097bc593a83c644",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/ec/52cf996efa8baa53d3d8cf87df8f6766709aaa": "9d5c2bfcaf085fe277a3c208a17dccdc",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/8a/fa58504dc585fcdc733de390bba7632cb83dff": "ebe9e70fa485271b01d581b0c7a985a8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/2f/8694572c5e5557c072e89a9303624bcd273eac": "5af789d272c9a5c657290879389e12e6",
".git/objects/43/b50102da30b86115d28ddd2556c105fb0566c5": "4729bdfb7c27d2813c03a3a389c3adf4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/09/9f1d8a9312140bde1c1abe5f5fe67b2d0d8ae3": "4b27ddb5a40c9108c89f93530caefcb8",
".git/objects/54/6cc7436bd5c037a100ec0b521d6939d24ee8a5": "acd9e0b5235f98bbee8c948e614f1a21",
".git/objects/5e/149039abbf7739ea23e94cf29d530d7f47cb89": "69eb9cda09e2d6a438ecf6234c49b347",
".git/objects/01/d4ac911b7569447f74c62955fa0ab76eecb856": "58b8c002251df801be11a9d2cb4f61c3",
".git/objects/99/f5224571b27d3d3abf8f3cc4ad788d4eaefe55": "d5554a4dd400aa52923350815ee27368",
".git/objects/97/6e8750354cc63cd6df1d548a1c389a5952ce9d": "13656c214a8f003d382385e5cc2bb480",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/90/16b8b88b0fcbf4349d0ed7878b6c854fcab6c7": "34a3d696317877ead8b60652b403f8ba",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/cd/a3aad5a3f45a84268c4407e0a77696c267a5d9": "a33b27a695319a328d599c85bf88e0e1",
".git/objects/e7/fccd2cf149b0aa93e879afef770ebbbb208db2": "52febb771c6506b18252a232d061af7f",
".git/objects/24/378cbf3ec4c7257b3f6a7a401470d6b5e719e9": "ae1128fadf10d78b63f8f14e920eb004",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/76/9059b4d925384040dd82297f3df52e823e6483": "520641d021fa89d8e0cc31db7207010e",
".git/objects/2b/813743d20f1ffbd83f5ffe485c87ac51010521": "5b7d332a23bc2c8d4ee1d06de230b8ea",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "284d0c3a2961f692ec91d4a04dcfa7c5",
".git/logs/refs/heads/master": "284d0c3a2961f692ec91d4a04dcfa7c5",
".git/logs/refs/remotes/origin/master": "8bebfdff008f3d228891ca15bd9470f4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "9c1d06de7980284bab32bbe45298b34f",
".git/refs/remotes/origin/master": "9c1d06de7980284bab32bbe45298b34f",
".git/index": "3f21a0f4fb7014cedc381adc6d9906b5",
".git/COMMIT_EDITMSG": "7285d299f6e62192af4d5150e835aefb",
".git/FETCH_HEAD": "ea8621969879973ede1f8c9d49c7c9cd",
".git/smartgit/logcache/nodes2": "00d4fb799a216c4a023009f32e22190d",
".git/smartgit/logcache/nodes.uuid": "3ecfb4b613dfbb1efb6ed61bc3ca0a7d",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "814bb7e09ef6acfb98c60a578be05018",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
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
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
