if(!self.define){let s,e={};const n=(n,l)=>(n=new URL(n+".js",l).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(l,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const t=s=>n(s,r),o={module:{uri:r},exports:a,require:t};e[r]=Promise.all(l.map((s=>o[s]||t(s)))).then((s=>(i(...s),a)))}}define(["./workbox-755692f8"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"8f1ec084b843447a934826f72c2044a3"},{url:"archive/index.html",revision:"25f7f86d23dbb34f34052bd8a4af4624"},{url:"assets/app.08ea77ab.js",revision:null},{url:"assets/archive_index.md.8076184b.js",revision:null},{url:"assets/archive_index.md.8076184b.lean.js",revision:null},{url:"assets/backend_index.md.7e4a7a6f.js",revision:null},{url:"assets/backend_index.md.7e4a7a6f.lean.js",revision:null},{url:"assets/backend_koa_start.md.4273d2f6.js",revision:null},{url:"assets/backend_koa_start.md.4273d2f6.lean.js",revision:null},{url:"assets/backend_koa_use.md.fe5c832e.js",revision:null},{url:"assets/backend_koa_use.md.fe5c832e.lean.js",revision:null},{url:"assets/backend_mysql_install.md.fd6ea10d.js",revision:null},{url:"assets/backend_mysql_install.md.fd6ea10d.lean.js",revision:null},{url:"assets/backend_redis_install.md.d437b734.js",revision:null},{url:"assets/backend_redis_install.md.d437b734.lean.js",revision:null},{url:"assets/chunks/DocShici.f14361a7.js",revision:null},{url:"assets/chunks/DocTag.77047df0.js",revision:null},{url:"assets/chunks/framework.d15d0c2c.js",revision:null},{url:"assets/chunks/ImageLazyLoad.011d4beb.js",revision:null},{url:"assets/chunks/SvgIcon.8d83b6a8.js",revision:null},{url:"assets/chunks/theme.2762d432.js",revision:null},{url:"assets/chunks/useNamespace.75a6a06b.js",revision:null},{url:"assets/chunks/VPAlgoliaSearchBox.beb56f03.js",revision:null},{url:"assets/chunks/WordCloud.fa7ece5f.js",revision:null},{url:"assets/cli_git_cli.md.b038c590.js",revision:null},{url:"assets/cli_git_cli.md.b038c590.lean.js",revision:null},{url:"assets/cli_git_FAQ.md.06b38c2b.js",revision:null},{url:"assets/cli_git_FAQ.md.06b38c2b.lean.js",revision:null},{url:"assets/cli_git_hub.md.42e8125a.js",revision:null},{url:"assets/cli_git_hub.md.42e8125a.lean.js",revision:null},{url:"assets/cli_git_use.md.4be98bad.js",revision:null},{url:"assets/cli_git_use.md.4be98bad.lean.js",revision:null},{url:"assets/cli_index.md.e01d1d05.js",revision:null},{url:"assets/cli_index.md.e01d1d05.lean.js",revision:null},{url:"assets/cli_linux_cli.md.329a69a2.js",revision:null},{url:"assets/cli_linux_cli.md.329a69a2.lean.js",revision:null},{url:"assets/cli_linux_use.md.b334b345.js",revision:null},{url:"assets/cli_linux_use.md.b334b345.lean.js",revision:null},{url:"assets/cli_windows_cli.md.a11acae2.js",revision:null},{url:"assets/cli_windows_cli.md.a11acae2.lean.js",revision:null},{url:"assets/cli_windows_FAQ.md.dd765c9a.js",revision:null},{url:"assets/cli_windows_FAQ.md.dd765c9a.lean.js",revision:null},{url:"assets/custom_img_1.52edb246.png",revision:null},{url:"assets/custom_img_10.3ca3a90f.png",revision:null},{url:"assets/custom_img_2.a631dcde.png",revision:null},{url:"assets/custom_img_3.bd948ff2.png",revision:null},{url:"assets/custom_img_4.1079f71d.png",revision:null},{url:"assets/custom_img_5.4a9f769f.png",revision:null},{url:"assets/custom_img_6.4cbaf63b.png",revision:null},{url:"assets/custom_img_7.57e88110.png",revision:null},{url:"assets/custom_img_8.f39cf452.png",revision:null},{url:"assets/custom_img_9.9ebbc7c6.png",revision:null},{url:"assets/download_img_1.6f3b10a5.png",revision:null},{url:"assets/download_img_2.64ee6991.png",revision:null},{url:"assets/download_img.b46b56c9.png",revision:null},{url:"assets/frontend_browser_basics.md.a7b4ec25.js",revision:null},{url:"assets/frontend_browser_basics.md.a7b4ec25.lean.js",revision:null},{url:"assets/frontend_browser_cache.md.a09d1f8d.js",revision:null},{url:"assets/frontend_browser_cache.md.a09d1f8d.lean.js",revision:null},{url:"assets/frontend_browser_storage.md.1a2a7eb4.js",revision:null},{url:"assets/frontend_browser_storage.md.1a2a7eb4.lean.js",revision:null},{url:"assets/frontend_build_rollup_lib-ts.md.4c2857e5.js",revision:null},{url:"assets/frontend_build_rollup_lib-ts.md.4c2857e5.lean.js",revision:null},{url:"assets/frontend_build_rollup_lib.md.ded558e5.js",revision:null},{url:"assets/frontend_build_rollup_lib.md.ded558e5.lean.js",revision:null},{url:"assets/frontend_build_turbo-monorepo.md.5abbed89.js",revision:null},{url:"assets/frontend_build_turbo-monorepo.md.5abbed89.lean.js",revision:null},{url:"assets/frontend_build_vite_ts.md.e748e883.js",revision:null},{url:"assets/frontend_build_vite_ts.md.e748e883.lean.js",revision:null},{url:"assets/frontend_build_webpack_icon.md.0d3d0589.js",revision:null},{url:"assets/frontend_build_webpack_icon.md.0d3d0589.lean.js",revision:null},{url:"assets/frontend_code_debounce-throttle.md.bb2f3335.js",revision:null},{url:"assets/frontend_code_debounce-throttle.md.bb2f3335.lean.js",revision:null},{url:"assets/frontend_code_excel-json.md.ecccef2a.js",revision:null},{url:"assets/frontend_code_excel-json.md.ecccef2a.lean.js",revision:null},{url:"assets/frontend_code_image-lazy.md.ed64a9b2.js",revision:null},{url:"assets/frontend_code_image-lazy.md.ed64a9b2.lean.js",revision:null},{url:"assets/frontend_code_list-tree.md.17600eba.js",revision:null},{url:"assets/frontend_code_list-tree.md.17600eba.lean.js",revision:null},{url:"assets/frontend_code_others.md.f47a7aed.js",revision:null},{url:"assets/frontend_code_others.md.f47a7aed.lean.js",revision:null},{url:"assets/frontend_css_selector.md.24447007.js",revision:null},{url:"assets/frontend_css_selector.md.24447007.lean.js",revision:null},{url:"assets/frontend_css_weight.md.36b368ff.js",revision:null},{url:"assets/frontend_css_weight.md.36b368ff.lean.js",revision:null},{url:"assets/frontend_html_index.md.c78a9187.js",revision:null},{url:"assets/frontend_html_index.md.c78a9187.lean.js",revision:null},{url:"assets/frontend_index.md.717af125.js",revision:null},{url:"assets/frontend_index.md.717af125.lean.js",revision:null},{url:"assets/frontend_javascript_ajax.md.316d3c68.js",revision:null},{url:"assets/frontend_javascript_ajax.md.316d3c68.lean.js",revision:null},{url:"assets/frontend_javascript_array.md.4d23fc3c.js",revision:null},{url:"assets/frontend_javascript_array.md.4d23fc3c.lean.js",revision:null},{url:"assets/frontend_javascript_binary.md.2eed0d31.js",revision:null},{url:"assets/frontend_javascript_binary.md.2eed0d31.lean.js",revision:null},{url:"assets/frontend_javascript_BOMObserver.md.fb56ca45.js",revision:null},{url:"assets/frontend_javascript_BOMObserver.md.fb56ca45.lean.js",revision:null},{url:"assets/frontend_javascript_CallStack.md.2387efdb.js",revision:null},{url:"assets/frontend_javascript_CallStack.md.2387efdb.lean.js",revision:null},{url:"assets/frontend_javascript_dictionary.md.9933e0d3.js",revision:null},{url:"assets/frontend_javascript_dictionary.md.9933e0d3.lean.js",revision:null},{url:"assets/frontend_javascript_ElementPosition.md.a273d0de.js",revision:null},{url:"assets/frontend_javascript_ElementPosition.md.a273d0de.lean.js",revision:null},{url:"assets/frontend_javascript_ES6_.md.d6372817.js",revision:null},{url:"assets/frontend_javascript_ES6_.md.d6372817.lean.js",revision:null},{url:"assets/frontend_javascript_EventLoop.md.ae1a81b5.js",revision:null},{url:"assets/frontend_javascript_EventLoop.md.ae1a81b5.lean.js",revision:null},{url:"assets/frontend_javascript_fetch.md.5fa8f147.js",revision:null},{url:"assets/frontend_javascript_fetch.md.5fa8f147.lean.js",revision:null},{url:"assets/frontend_javascript_object.md.929f9f6e.js",revision:null},{url:"assets/frontend_javascript_object.md.929f9f6e.lean.js",revision:null},{url:"assets/frontend_javascript_promise.md.c4524390.js",revision:null},{url:"assets/frontend_javascript_promise.md.c4524390.lean.js",revision:null},{url:"assets/frontend_javascript_prototype.md.d13c8593.js",revision:null},{url:"assets/frontend_javascript_prototype.md.d13c8593.lean.js",revision:null},{url:"assets/frontend_javascript_scope.md.fb7b465b.js",revision:null},{url:"assets/frontend_javascript_scope.md.fb7b465b.lean.js",revision:null},{url:"assets/frontend_javascript_string.md.107d4855.js",revision:null},{url:"assets/frontend_javascript_string.md.107d4855.lean.js",revision:null},{url:"assets/frontend_network_cors.md.52bdbd3c.js",revision:null},{url:"assets/frontend_network_cors.md.52bdbd3c.lean.js",revision:null},{url:"assets/frontend_network_encryption.md.47ba42cb.js",revision:null},{url:"assets/frontend_network_encryption.md.47ba42cb.lean.js",revision:null},{url:"assets/frontend_network_FAQ.md.e9c79a6b.js",revision:null},{url:"assets/frontend_network_FAQ.md.e9c79a6b.lean.js",revision:null},{url:"assets/frontend_network_http.md.4153631f.js",revision:null},{url:"assets/frontend_network_http.md.4153631f.lean.js",revision:null},{url:"assets/frontend_network_KeepAlive.md.1f79648f.js",revision:null},{url:"assets/frontend_network_KeepAlive.md.1f79648f.lean.js",revision:null},{url:"assets/frontend_network_security.md.803a9ca5.js",revision:null},{url:"assets/frontend_network_security.md.803a9ca5.lean.js",revision:null},{url:"assets/frontend_network_tcp.md.7f957db1.js",revision:null},{url:"assets/frontend_network_tcp.md.7f957db1.lean.js",revision:null},{url:"assets/frontend_npm_cli.md.7201b22a.js",revision:null},{url:"assets/frontend_npm_cli.md.7201b22a.lean.js",revision:null},{url:"assets/frontend_npm_libs.md.d2843c00.js",revision:null},{url:"assets/frontend_npm_libs.md.d2843c00.lean.js",revision:null},{url:"assets/frontend_npm_license.md.f3d2b7bc.js",revision:null},{url:"assets/frontend_npm_license.md.f3d2b7bc.lean.js",revision:null},{url:"assets/frontend_npm_package-exports.md.551d59ae.js",revision:null},{url:"assets/frontend_npm_package-exports.md.551d59ae.lean.js",revision:null},{url:"assets/frontend_npm_package-json.md.7bdf79b7.js",revision:null},{url:"assets/frontend_npm_package-json.md.7bdf79b7.lean.js",revision:null},{url:"assets/frontend_npm_package-patch.md.72a67d0c.js",revision:null},{url:"assets/frontend_npm_package-patch.md.72a67d0c.lean.js",revision:null},{url:"assets/frontend_npm_SemVer.md.f039ce0f.js",revision:null},{url:"assets/frontend_npm_SemVer.md.f039ce0f.lean.js",revision:null},{url:"assets/frontend_regex_basics.md.ff05eb26.js",revision:null},{url:"assets/frontend_regex_basics.md.ff05eb26.lean.js",revision:null},{url:"assets/frontend_regex_use.md.c4575ae8.js",revision:null},{url:"assets/frontend_regex_use.md.c4575ae8.lean.js",revision:null},{url:"assets/img_1.5e390f4e.png",revision:null},{url:"assets/img_1.7a3ebcab.png",revision:null},{url:"assets/img_1.7ff297cb.png",revision:null},{url:"assets/img_1.b295697c.png",revision:null},{url:"assets/img_10.200e566d.png",revision:null},{url:"assets/img_2.2810f483.png",revision:null},{url:"assets/img_2.55110f2a.png",revision:null},{url:"assets/img_2.e7b91dcb.png",revision:null},{url:"assets/img_3.8118008d.png",revision:null},{url:"assets/img_3.e18870c4.png",revision:null},{url:"assets/img_4.5f8c656c.png",revision:null},{url:"assets/img_4.726c4310.png",revision:null},{url:"assets/img_5.2dbf15aa.png",revision:null},{url:"assets/img_5.d8f884e8.png",revision:null},{url:"assets/img_6.0ade014a.png",revision:null},{url:"assets/img_6.0bbbfc14.png",revision:null},{url:"assets/img_7.6a52f8bc.png",revision:null},{url:"assets/img_7.b6f57f5c.png",revision:null},{url:"assets/img_8.2991d750.png",revision:null},{url:"assets/img_9.a4f5bf01.png",revision:null},{url:"assets/img.2e8a66d0.png",revision:null},{url:"assets/img.65a9c1e9.png",revision:null},{url:"assets/img.7effe2e8.png",revision:null},{url:"assets/img.8a89d19f.png",revision:null},{url:"assets/img.a4ef83c3.png",revision:null},{url:"assets/img.fa4a579c.png",revision:null},{url:"assets/index.md.83362ef8.js",revision:null},{url:"assets/index.md.83362ef8.lean.js",revision:null},{url:"assets/install_img_0.70e8c1af.png",revision:null},{url:"assets/install_img_1.99713b77.png",revision:null},{url:"assets/install_img_10.f3eb1b6b.png",revision:null},{url:"assets/install_img_11.d097a64e.png",revision:null},{url:"assets/install_img_12.e9657aae.png",revision:null},{url:"assets/install_img_13.08ffcc88.png",revision:null},{url:"assets/install_img_14.f1461e36.png",revision:null},{url:"assets/install_img_15.437fbd05.png",revision:null},{url:"assets/install_img_16.8e228a7b.png",revision:null},{url:"assets/install_img_17.2ce62dd7.png",revision:null},{url:"assets/install_img_18.2f2f5f60.png",revision:null},{url:"assets/install_img_19.5ac4c6d1.png",revision:null},{url:"assets/install_img_2.6d44774c.png",revision:null},{url:"assets/install_img_20.4466232f.png",revision:null},{url:"assets/install_img_3.8b8b4477.png",revision:null},{url:"assets/install_img_4.89ea364c.png",revision:null},{url:"assets/install_img_5.54926192.png",revision:null},{url:"assets/install_img_6.22305e60.png",revision:null},{url:"assets/install_img_7.42ad31bd.png",revision:null},{url:"assets/install_img_8.5486d534.png",revision:null},{url:"assets/install_img_9.666141db.png",revision:null},{url:"assets/install_img.a7659d1c.png",revision:null},{url:"assets/inter-italic-cyrillic-ext.33bd5a8e.woff2",revision:null},{url:"assets/inter-italic-cyrillic.ea42a392.woff2",revision:null},{url:"assets/inter-italic-greek-ext.4fbe9427.woff2",revision:null},{url:"assets/inter-italic-greek.8f4463c4.woff2",revision:null},{url:"assets/inter-italic-latin-ext.bd8920cc.woff2",revision:null},{url:"assets/inter-italic-latin.bd3b6f56.woff2",revision:null},{url:"assets/inter-italic-vietnamese.6ce511fb.woff2",revision:null},{url:"assets/inter-roman-cyrillic-ext.e75737ce.woff2",revision:null},{url:"assets/inter-roman-cyrillic.5f2c6c8c.woff2",revision:null},{url:"assets/inter-roman-greek-ext.ab0619bc.woff2",revision:null},{url:"assets/inter-roman-greek.d5a6d92a.woff2",revision:null},{url:"assets/inter-roman-latin-ext.0030eebd.woff2",revision:null},{url:"assets/inter-roman-latin.2ed14f66.woff2",revision:null},{url:"assets/inter-roman-vietnamese.14ce25a6.woff2",revision:null},{url:"assets/navigation_index.md.92c8101c.js",revision:null},{url:"assets/navigation_index.md.92c8101c.lean.js",revision:null},{url:"assets/npm_license_img.507c89ef.png",revision:null},{url:"assets/origin_index.md.f27070cc.js",revision:null},{url:"assets/origin_index.md.f27070cc.lean.js",revision:null},{url:"assets/style.d4c4edd1.css",revision:null},{url:"backend/index.html",revision:"cd5caba2d1c14937568f7126b0f4815b"},{url:"backend/koa/start.html",revision:"775cf92c51546a486606aa1822ca38a7"},{url:"backend/koa/use.html",revision:"65340c3ac5a04ffbda601c2fddcb3cb4"},{url:"backend/mysql/install.html",revision:"4f7a1a8448e04a5889e5d6607a8929b5"},{url:"backend/redis/install.html",revision:"70fc53cbe3e8115f6aa8b1751451e62a"},{url:"cli/git/cli.html",revision:"6b501194d298945fab6db666e0558ae0"},{url:"cli/git/FAQ.html",revision:"bd073193ef874495951f3186de2a68a8"},{url:"cli/git/hub.html",revision:"8d404b34611a2e5142a6d36c97a7c456"},{url:"cli/git/use.html",revision:"a411889b74d6ca87e1d4c0d018c609f9"},{url:"cli/index.html",revision:"ff1dae92800b94456a8450181a13db63"},{url:"cli/linux/cli.html",revision:"59548c53b086febc445d9b4895a3fcf1"},{url:"cli/linux/use.html",revision:"0cb583dd61a33f59763cfe0e50310aa3"},{url:"cli/windows/cli.html",revision:"a67abf8ef9e0cd598fbfce2a99900bf0"},{url:"cli/windows/FAQ.html",revision:"80ce51f6a319128a3d57cd24a928e4cd"},{url:"favicon.ico",revision:"710702509c00e4fe7442447e555df1ff"},{url:"frontend/browser/basics.html",revision:"5214847eac79f89c72ec328480b84d40"},{url:"frontend/browser/cache.html",revision:"ebd56dd8b6eef6e651fb0700b182e114"},{url:"frontend/browser/storage.html",revision:"2ac22f237614bc9c7d7b782a2b95e6bb"},{url:"frontend/build/rollup/lib-ts.html",revision:"2dba063d8dc75fbbf14ba2c10dad8848"},{url:"frontend/build/rollup/lib.html",revision:"66963952ba58662c91bb8b5424103c00"},{url:"frontend/build/turbo-monorepo.html",revision:"cf76f6474e787660d0e6937be0e1ca4e"},{url:"frontend/build/vite/ts.html",revision:"b254aefcc00b8ed2decad954c60a8919"},{url:"frontend/build/webpack/icon.html",revision:"99f913abfa49fc2261f8e3b42194e8e5"},{url:"frontend/code/debounce-throttle.html",revision:"889be68664835719855960b78fedb35a"},{url:"frontend/code/excel-json.html",revision:"56bdf1fbd108c62e197c6be625c6ceff"},{url:"frontend/code/image-lazy.html",revision:"194d0ccd82ae84891c7357aea1d53dbe"},{url:"frontend/code/list-tree.html",revision:"7aea3df19a2d1eba00a8f5d33d14ddcd"},{url:"frontend/code/others.html",revision:"b426051f612068916545393500d025cc"},{url:"frontend/css/selector.html",revision:"ca18845aca3dd9c727d560f3b54e8726"},{url:"frontend/css/weight.html",revision:"0140141766748bb20a17bee3e4143c8b"},{url:"frontend/html/index.html",revision:"9faadf4a06613b14f782307765d78dc7"},{url:"frontend/index.html",revision:"8d5f16c3f515f8e929aeb7329c752a8f"},{url:"frontend/javascript/ajax.html",revision:"b8bcf9a99878ab8d21a256b3bd266f72"},{url:"frontend/javascript/array.html",revision:"ae70104ce4b48fc6af2e390c49a8c754"},{url:"frontend/javascript/binary.html",revision:"8f16d5e8ca2b0961df631fc3a467e82f"},{url:"frontend/javascript/BOMObserver.html",revision:"dea4a6ea5802d6c0f25b45393036eb57"},{url:"frontend/javascript/CallStack.html",revision:"e1902058871a3b10c50ce7ff12a595a4"},{url:"frontend/javascript/dictionary.html",revision:"898ed779e1718610d4dc40eae7a2ace2"},{url:"frontend/javascript/ElementPosition.html",revision:"2cee22feb6ad7f507abd0fef0bad6fb9"},{url:"frontend/javascript/ES6+.html",revision:"04b9815e7132f7b43273d00b2ed17a43"},{url:"frontend/javascript/EventLoop.html",revision:"79ecd5d90a0ccb71eb873f4553194b69"},{url:"frontend/javascript/fetch.html",revision:"34812484f97c10370e574669db150df4"},{url:"frontend/javascript/object.html",revision:"7d55ca73df82fc54ac4ef1466e943f12"},{url:"frontend/javascript/promise.html",revision:"5ad4c54772999b502bf4efa3d1b13824"},{url:"frontend/javascript/prototype.html",revision:"0bbdc52f43f33c37a9c35f120f9ab671"},{url:"frontend/javascript/scope.html",revision:"c49023cadcbcb24cc74884e4e1893c69"},{url:"frontend/javascript/string.html",revision:"7876eeba519535c7d4fcba532192fbd5"},{url:"frontend/network/cors.html",revision:"87a15f6b7d71dde5d61566f36c26818f"},{url:"frontend/network/encryption.html",revision:"fe75b0432a793f91c505aa91eb52004a"},{url:"frontend/network/FAQ.html",revision:"bf20678e279957ed9378857ad2102e2d"},{url:"frontend/network/http.html",revision:"c1183c16b87a2c7cb206825e19521e94"},{url:"frontend/network/KeepAlive.html",revision:"8b06ae217407cf8cb0f2117a0e1fdff3"},{url:"frontend/network/security.html",revision:"aae7277b245cd7fcea7fb8fac9a3880b"},{url:"frontend/network/tcp.html",revision:"0b43da7e0a838355b759c8bd8e938e7b"},{url:"frontend/npm/cli.html",revision:"d5b4665cbe397e1ea8abb9e8d71719ab"},{url:"frontend/npm/libs.html",revision:"8ad4c8978b747f834de9cab72f7acc53"},{url:"frontend/npm/license.html",revision:"beaede4f704fb8bcc9191784b28d71f6"},{url:"frontend/npm/package-exports.html",revision:"138a83e3f137b6a25a515ec7f92050c4"},{url:"frontend/npm/package-json.html",revision:"705315cbc4b4391b2a83f1c3afb30782"},{url:"frontend/npm/package-patch.html",revision:"80edcd2bbeff2b835b44f78511c8bf91"},{url:"frontend/npm/SemVer.html",revision:"737e72662638829e422988f395a8ed8d"},{url:"frontend/regex/basics.html",revision:"d22708d400d3cba6519b8f81f94703d4"},{url:"frontend/regex/use.html",revision:"d95b3a10a68e659a7b046e65577a7c52"},{url:"giscus/noborder_dark.css",revision:"0381017c9f23173fc52539b760cbc7b3"},{url:"giscus/noborder_light.css",revision:"1514a7d3868ce0bc5faae416baaf6a56"},{url:"icons/create.svg",revision:"4596b23f730edc20645b66213f234a9d"},{url:"icons/tags.svg",revision:"a89835a6d5f3d0f6314cb20684bfd01c"},{url:"icons/update.svg",revision:"13a037f2fbd6ef84d88997aa4cc27339"},{url:"icons/zodiac/dog.svg",revision:"7f255c221ebc536ae168bd061ce4fcd4"},{url:"icons/zodiac/dragon.svg",revision:"a6811eb3e6ac9f931f8510604b35990e"},{url:"icons/zodiac/goat.svg",revision:"8d7e96e3d87b51fc866a9706747051c0"},{url:"icons/zodiac/horse.svg",revision:"f0d014be2cf1f15ef06214b1eb480062"},{url:"icons/zodiac/monkey.svg",revision:"1160fea5b17cd96f5df29508bd455586"},{url:"icons/zodiac/ox.svg",revision:"e62223d23b89c74e26812692e78754e9"},{url:"icons/zodiac/pig.svg",revision:"ab2396b4707b864301dbd5eda5732b12"},{url:"icons/zodiac/rabbit.svg",revision:"3a89782cda47e40f4a7732ff9ba0553f"},{url:"icons/zodiac/rat.svg",revision:"45e7451cea0ef25237e19ff13fedc7e0"},{url:"icons/zodiac/rooster.svg",revision:"15d1a5484eea17d9ecf87df3841996f1"},{url:"icons/zodiac/snake.svg",revision:"abbce3bed7859d23b33c1c86517f01e2"},{url:"icons/zodiac/tiger.svg",revision:"5e9bb5ee0924f9b96b2a86e9b645bc55"},{url:"index.html",revision:"72c432a6f4a70dd54f7da62915c6c5e6"},{url:"live2d/core/live2dCubismCore.min.js",revision:"1ae0f80720323fd164deb9c2af05848a"},{url:"live2d/models/hijiki/hijiki.2048/texture_00.png",revision:"0cc2f2880ef801c9bdcdcfddcdddafb3"},{url:"live2d/models/tororo/tororo.2048/texture_00.png",revision:"ee9c6155217d874a3825b07dd672a029"},{url:"logo.default.svg",revision:"c13222dbc0049bf4be184901a9a20949"},{url:"logo.png",revision:"276008f0fc30e3c90ae57daf41766cbb"},{url:"logo.svg",revision:"ac82ac1a2751f04c23460d2c6861c6a4"},{url:"navigation/index.html",revision:"7a2565b60f4ac659fc718dd6648f6bb5"},{url:"origin/index.html",revision:"a362d29fe7e118c7f39418ad55c7b5f2"},{url:"pwa-192x192.svg",revision:"b0229250796c6572bb422e21ef82e933"},{url:"pwa-512x512.svg",revision:"aa97e375b04bcd0f65f015503c2acbf3"},{url:"logo.svg",revision:"ac82ac1a2751f04c23460d2c6861c6a4"},{url:"manifest.webmanifest",revision:"0d11bc0f310f0a653f1b9314aaf82311"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute((({sameOrigin:s,url:e})=>s&&["images","icons","svg"].some((s=>e.pathname.startsWith(`/assets/${s}/`)))),new s.StaleWhileRevalidate({cacheName:"assets-images-cache",plugins:[new s.ExpirationPlugin({purgeOnQuotaError:!0,maxEntries:256,maxAgeSeconds:604800}),new s.CacheableResponsePlugin({statuses:[200]})]}),"GET"),s.registerRoute(/^https:\/\/peiyanlu.github.io\/.*/i,new s.StaleWhileRevalidate({cacheName:"gh-images-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:86400}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/someInterface/i,new s.StaleWhileRevalidate({cacheName:"interface-cache",plugins:[]}),"GET"),s.registerRoute(/(.*?)\.(js|css|ts)/,new s.StaleWhileRevalidate({cacheName:"js-css-cache",plugins:[]}),"GET"),s.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new s.StaleWhileRevalidate({cacheName:"image-cache",plugins:[]}),"GET")}));
