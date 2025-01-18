'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "019b016a69fdb3e88136a20acc4745bc",
"assets/AssetManifest.bin.json": "9d22f7285a6c2d8cad1b7a84edf6b711",
"assets/AssetManifest.json": "e3f70aded83074847c9a3966b8ffa922",
"assets/assets/font/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/font/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/img/1.png": "bb71c243c09b15077bb4a78e1ddac4ae",
"assets/assets/img/2.png": "049c1f82ecc0909f125a2a76745cb4bb",
"assets/assets/img/ac_repair.png": "7c3fabd6136dc3a867ae9b7030db7d58",
"assets/assets/img/appllication.png": "eab88f46a7f98d0b9a2b3f035ef29732",
"assets/assets/img/back.png": "0ee64512e11ad88b942c8f9ed6a3b2d3",
"assets/assets/img/banner1.png": "15a2b31da62bf119c8d980317caa29bb",
"assets/assets/img/banner2.png": "15a2b31da62bf119c8d980317caa29bb",
"assets/assets/img/banner3.png": "15a2b31da62bf119c8d980317caa29bb",
"assets/assets/img/banner4.png": "15a2b31da62bf119c8d980317caa29bb",
"assets/assets/img/best_1.png": "cf49645e7ebf3ddf4e2d38b31ee4f523",
"assets/assets/img/best_2.png": "6ce0b1f53f7353dba7cec449e7f329da",
"assets/assets/img/bg.png": "2d0b2b8588fd8c41a3cdea9cba8dfba9",
"assets/assets/img/calling.png": "8398ca1a90b1b36f15d6c9c8cd330409",
"assets/assets/img/camera.png": "01fb0a5c38cebfda1727524ce59f160c",
"assets/assets/img/card.png": "9c19895cceece322029012cb909d5b64",
"assets/assets/img/center_pin.png": "b40430ef90548339e0fbc2bb50cd9dda",
"assets/assets/img/chat.png": "61c7105ec3dc169f3eb5713a372aba35",
"assets/assets/img/check_box.png": "cf646adf6279c647286f8ec2a4a26c06",
"assets/assets/img/check_box_check.png": "a523164d12dac6be198d3acf60028ede",
"assets/assets/img/credit_card_payment.png": "94e189363a9a862a013521adfa7a7b52",
"assets/assets/img/down.png": "3a8068814496677c68a84071a641f797",
"assets/assets/img/electric_plug.png": "e6e4b20e9b3bd6cc7e7ad292dee09945",
"assets/assets/img/fb.png": "06f9009d7d1fa381344f58d0795f79c4",
"assets/assets/img/google.png": "ba15a7df021a9c3e4402ba8b9ce10f44",
"assets/assets/img/hygiene.png": "526e3266565f89d516975d0f10ebf3b4",
"assets/assets/img/h_more.png": "1e340563772c28c6a81a3ed637315bcc",
"assets/assets/img/ic_paypal.png": "1a3cbe5818a3720a8dd42148f6b7d1ab",
"assets/assets/img/Ic_saved_cards.png": "3fd014153e42691914efe0f3d1e74387",
"assets/assets/img/in.png": "7c2cc3046154d67b5e356102e6ac02e0",
"assets/assets/img/location.png": "f45e89c845c62c8ad421f9f68a6beedf",
"assets/assets/img/login_otp_icon.png": "d00ce5a2739e2d171987c17bc3cb9a2a",
"assets/assets/img/logo.png": "6087d4b0b057272ac7d3f064d7483988",
"assets/assets/img/master_card.png": "3bce5e01871d6109e8ba002a05ff6e12",
"assets/assets/img/menu.png": "4198d0e80eb5d4ea779e5cb3c6d4ee49",
"assets/assets/img/more.png": "613bb24eb78872b257321dc2090fa530",
"assets/assets/img/next.png": "c95723044b195b9b02713adccf8318be",
"assets/assets/img/only_logo.png": "f4e505defeb90efae4285e37ace384da",
"assets/assets/img/otp_bg.png": "e92869da4faed4a2bca8fa2d0426d619",
"assets/assets/img/paypal.png": "623e7c66c6ef91b8f2b0f8d7db723569",
"assets/assets/img/plumbing.png": "68ac2193baacbcac849efbd8427ab0ed",
"assets/assets/img/search.png": "7e6e05b86770598012f2934179ce3481",
"assets/assets/img/select_dot.png": "1db2563abde966d72618bdbb8dec3b1d",
"assets/assets/img/select_radio.png": "b7e3644582a54909ba6c28068ee3d66b",
"assets/assets/img/send.png": "f32d68f9d95526dc9159bcd625fa9cb7",
"assets/assets/img/share.png": "51ec1e7ef88951f60fd08f9f8828fbe3",
"assets/assets/img/show_pass.png": "a34bc96cbe758d865fcb3011e6ccdaee",
"assets/assets/img/splash.png": "29d2d28707342a2f6731ea61cd6568ca",
"assets/assets/img/u1.png": "0e9e8f267602270c812604c539381499",
"assets/assets/img/u2.png": "2e45513c177c6ee021f942a0b92b74ba",
"assets/assets/img/unselect_radio.png": "40c337453244777a64da1ec944a1f06e",
"assets/assets/img/user_placeholder.png": "3df17678fc936e73042b0f660a80b500",
"assets/assets/img/white_logo.png": "f4e505defeb90efae4285e37ace384da",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "81e0f0d9459bb7a4a492fddeb49dc3f1",
"assets/image/app_logo.png": "e9912ead42e2a3f6030421a7d9595147",
"assets/image/audio.mp3": "cdd5a8079dda1acdda848defdd1c256a",
"assets/image/coffee-shop-image/affogato.png": "6b67ee983e5b6fdf5a6e491bde5504ce",
"assets/image/coffee-shop-image/cafe_cubano.png": "0d5df56e2be132b9c162ba72b8f6da21",
"assets/image/coffee-shop-image/Caffe_Mocha.png": "04a6c52e2e8acdb1476b67846888e0e3",
"assets/image/coffee-shop-image/cappuccino.png": "919d1f5dfb992cccca2b666ede3386b9",
"assets/image/coffee-shop-image/Caramel_Macchiato.png": "4d3235ba4d920c6ba17af2e93389b790",
"assets/image/coffee-shop-image/cortado.png": "689b14769891636948065c220a8ff416",
"assets/image/coffee-shop-image/espresso.png": "de12c6f98edfa26fb240862e94c8f4d0",
"assets/image/coffee-shop-image/LoginCoffee.png": "1bca18557e26f8980da74bc76819af1a",
"assets/image/coffee-shop-image/logo.png": "526a6a187e098120a937496465932460",
"assets/image/coffee-shop-image/menu.png": "72eeec4ecddd001d73b9a06a3fca59b1",
"assets/image/coffee-shop-image/shope_logo.png": "c76db8cc10699f2c33ff5bad23c88051",
"assets/image/coffee-shop-image/turkish_Coffee.png": "d9af2c00601b8eccbda3c21fd42b8a5e",
"assets/image/ecommerce-image/chair-1.png": "ac99ac061f1b1b2304d61833d6547655",
"assets/image/ecommerce-image/chair-2.png": "c45b36870b872be85d93c4e25a788db6",
"assets/image/ecommerce-image/cupboard-1.jpg": "bf5073d75b1726b0310098f3b57dabd2",
"assets/image/ecommerce-image/cupboard2.png": "cdd6df2729d3ab87024a6d779d946adb",
"assets/image/ecommerce-image/menu.svg": "7a56cadfa96279b4652987462ebd6473",
"assets/image/ecommerce-image/sofa1.png": "ca1f503c1b1d771683cbf2fc825a4c2b",
"assets/image/ecommerce-image/sofa2.png": "2b02caaed87ed62b637adf316693939c",
"assets/image/ecommerce-image/table1.png": "b7c520b17376052806f769b48043c752",
"assets/image/ecommerce-image/table2.png": "c087ae59d8031fbbe1ae8619dde0bed3",
"assets/image/house-rent/icon1.png": "136b0c4a02e780a19c1a2a5abeffd02d",
"assets/image/house-rent/icon2.png": "5cdd148ce092ec48aaebe219126330ca",
"assets/image/house-rent/icon3.png": "9d8e15460406af35c6cadfef0c4db3a7",
"assets/image/house-rent/icon4.png": "034f21209b8e7a7f0a315ce1b56f0fb4",
"assets/image/house-rent/image1.jpg": "425d686ad21af6ae5b1c0c9ac19d7920",
"assets/image/house-rent/image11.jpg": "c16da9b6e2cbc2c318af7539882aab3c",
"assets/image/house-rent/image2.jpg": "c6b6fe42d44bb592478670134a771312",
"assets/image/house-rent/image22.jpg": "2de6c19b721be75fcfd603b5330e08cf",
"assets/image/house-rent/image3.jpg": "42a0821f02f84c304c7d18f4671ef2a4",
"assets/image/house-rent/image4.jpg": "12c5c4ae3fb84645b4ece520f61a952f",
"assets/image/house-rent/image5.jpg": "7196fadc9d86e86d1e241a233a6bfaca",
"assets/image/house-rent/image6.jpg": "a22be8b1c3bc478bfab3aa0315e12b2c",
"assets/image/house-rent/image7.jpg": "32a3a8eab66324204573e8114b669f5a",
"assets/image/house-rent/image8.jpg": "1ddc8e8082a09353386da0b1e04766fb",
"assets/image/house-rent/image9.jpg": "3a1f51e9aa368eb307eea6803103a02c",
"assets/image/image1.png": "2f22a5ef68622a24d09eabc6c8b6accf",
"assets/image/image2.png": "4bfd5668195ff25ce3bb14950071ea79",
"assets/image/image3.png": "f7bb4e4712aaf34499fe8f55e3eb089d",
"assets/image/img/balloon2.png": "86f186ca23b82bba5c47994931b5ab71",
"assets/image/img/beer.png": "acd6fed938b9d11aa2dffac5f1aa0d1f",
"assets/image/img/blue-ball.png": "31abc26dd193ca3cc26fb274e877c6aa",
"assets/image/img/bottle.png": "7caf6190a8e5df13b5550ede69f87406",
"assets/image/img/cocacola.png": "f83dbd5750ac47c56ca0f7fe6c09ca8c",
"assets/image/img/earth.png": "49b8f6e8b8db3f6cd211913bd73f4a35",
"assets/image/img/green%2520nature.png": "91d26514d49dd833b0244f1a09c7e9e5",
"assets/image/img/ideas.png": "da2d323b81212c66febc37a508137b9c",
"assets/image/img/image1.png": "cff0e25913c8828595536d816a5b453b",
"assets/image/img/image2.png": "ad8ef7e5df74f48a8699639c1def08c8",
"assets/image/img/image3.png": "c234c14b06535d63f0bd6bca3ebff7f7",
"assets/image/img/image4.png": "1358ec5fcc20b2e46740d0b629a54d52",
"assets/image/img/image5.png": "8712b534b8f44fc3bc9b46806c54f80e",
"assets/image/img/image_01.png": "11e0115482c2152e0d5d189d05779df0",
"assets/image/img/image_02.jpg": "f6342d4e8aaa9e3073dbaeb190f89aa7",
"assets/image/img/image_03.jpg": "055e6e96ec934b93037dc5037f4cdad2",
"assets/image/img/image_04.jpg": "ccb0274837f8afa57d748ebe9cccfab2",
"assets/image/img/jupiter.png": "1c34fb5ebd77d309daf93a780cd236c3",
"assets/image/img/logo.png": "352aa7b4fea84ced11ea85b3a1d0aa8c",
"assets/image/img/mars.png": "8e89e94615ab77643b63639b9992ad56",
"assets/image/img/menu.png": "b40cd5a841b5b690a83b531f850a7642",
"assets/image/img/menu_icon.png": "116290d02bd0911adda45bbef9bb2caa",
"assets/image/img/mercury.png": "963bdc95609d394ae2819e54edf183aa",
"assets/image/img/mountain.png": "1358ec5fcc20b2e46740d0b629a54d52",
"assets/image/img/mylogo.png": "f2e7b5a6fa27186cf1ca5e4d927e7ebe",
"assets/image/img/neptune.png": "1bd892e3647cf80cd5cbab277c73bcdd",
"assets/image/img/nikelogo.png": "510043fb0b80b32b036cf45273d9c36b",
"assets/image/img/redbull.png": "efb88d7692e75bec96baa00ea094a452",
"assets/image/img/saturn.png": "482184d3f5b8455ec18f127201fec007",
"assets/image/img/sea.png": "87e8daca53f368a2ac04a3fb95b3b4dc",
"assets/image/img/shoe.png": "588fcc3ab13a6ab19a119f9213875145",
"assets/image/img/sprite.png": "1ed241ba3810171527e9b18af316150f",
"assets/image/img/sun.png": "80a8f00972955fcfed875f456040b72a",
"assets/image/img/uranus.png": "c856f44b1678002c8c447cafd8fe88f3",
"assets/image/img/venus.png": "14dae1392661a4a322e45cda896c4afa",
"assets/image/img/water.png": "ec1366d261be845791efc225658280b6",
"assets/image/img/way.png": "c0075a50cc4537e9852471f7ff2b7810",
"assets/image/lg.png": "11942f13ccc61670597391705fd4c032",
"assets/image/light.png": "9883f603d59b6fb05bc7e5867664040a",
"assets/image/logo2.png": "fdf265e604f72925a072909876615baa",
"assets/image/menu.png": "47cb5bc7236358d128949936e0b3591f",
"assets/image/on.svg": "c19906f35ddb53549f6b5d95435cb006",
"assets/image/on1.png": "c0974eb0531158a4ee2979bca5b4a139",
"assets/image/on1.svg": "588e5ad349a89b64fde5d5047fb188b7",
"assets/image/on2.png": "fa2a87ffa5f17d04d52333a55dae936f",
"assets/image/on2.svg": "bb28b57881e4a0c943d8ada5f9e92f3b",
"assets/image/on3.png": "104fada359f893d852ba11777ab9a80d",
"assets/image/person.png": "504d259c8b8d34e8b5517ffa02c0609c",
"assets/image/plant-image/1.png": "01e643662d1bd1f2fec07fab9bf4eddd",
"assets/image/plant-image/2.png": "7e787694dccf2d825f040ce3d1dcb7a1",
"assets/image/plant-image/3.png": "a06f47b30350152dd2411621373f4424",
"assets/image/plant-image/4.png": "295b86d5ea446e2e6a3d4ac8716a2986",
"assets/image/plant-image/5.png": "557295adb20d44bcc501b0886a0ff2cf",
"assets/image/plant-image/6.png": "725a0db959f71e857652d30751f99510",
"assets/image/portfolio-image/chat.png": "8b8fe1797322a44700104d3d04ff4013",
"assets/image/portfolio-image/ecommerce.png": "86efc01bcb46d00bf9f99823807d2dda",
"assets/image/portfolio-image/news.png": "f1d4a0bbd746c593f51033ea85d90aca",
"assets/image/portfolio-image/quiz.png": "b50bd6d8629067621e1b1e00f6ac5b12",
"assets/image/portfolio-image/tmdb.png": "f770e71634bf832426bdddf10de7f447",
"assets/image/portfolio-image/weather.png": "bc8f1a2e2d1226ec034a02f4d131f80b",
"assets/image/soon.json": "639d121b5a325a79b99bcac622ff11cf",
"assets/image/soona.json": "aa09db89af2fdc3620a7ad1374ca3c2c",
"assets/image/source.png": "ce57ec54f4b56ff5362ad8d402f42c30",
"assets/image/splash_logo.png": "22a958aa67d5bf1bd984ba15654542c8",
"assets/image/surce1.png": "c6a1dd1d664a8bd7d1e5981184ca3cf2",
"assets/NOTICES": "12515936c6e294e4905d5ff9ebb117e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e7135e7b59883130c18055ec6fb55e34",
"/": "e7135e7b59883130c18055ec6fb55e34",
"main.dart.js": "9da771fca048b3be3e4057fafc5de3bc",
"manifest.json": "a91993d29266165ae2e1db453b5cf82c",
"version.json": "517fafb878fb90bdd9eb1fcb03d88d77"};
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
