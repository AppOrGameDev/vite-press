if(!self.define){let e,s={};const n=(n,l)=>(n=new URL(n+".js",l).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(l,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const o=e=>n(e,r),t={module:{uri:r},exports:a,require:o};s[r]=Promise.all(l.map((e=>t[e]||o(e)))).then((e=>(i(...e),a)))}}define(["./workbox-755692f8"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"7771e29af80449f57f96e8d87e698dc3"},{url:"archive/index.html",revision:"0e20d382fbc43fa574447984e7d9ff48"},{url:"assets/app.08ea77ab.js",revision:null},{url:"assets/archive_index.md.71c8aba8.js",revision:null},{url:"assets/archive_index.md.71c8aba8.lean.js",revision:null},{url:"assets/backend_index.md.553ca7b1.js",revision:null},{url:"assets/backend_index.md.553ca7b1.lean.js",revision:null},{url:"assets/backend_koa_start.md.4273d2f6.js",revision:null},{url:"assets/backend_koa_start.md.4273d2f6.lean.js",revision:null},{url:"assets/backend_koa_use.md.fe5c832e.js",revision:null},{url:"assets/backend_koa_use.md.fe5c832e.lean.js",revision:null},{url:"assets/backend_mysql_install.md.fd6ea10d.js",revision:null},{url:"assets/backend_mysql_install.md.fd6ea10d.lean.js",revision:null},{url:"assets/backend_node_env.md.268f5486.js",revision:null},{url:"assets/backend_node_env.md.268f5486.lean.js",revision:null},{url:"assets/backend_node_process.md.b6393799.js",revision:null},{url:"assets/backend_node_process.md.b6393799.lean.js",revision:null},{url:"assets/backend_redis_install.md.d437b734.js",revision:null},{url:"assets/backend_redis_install.md.d437b734.lean.js",revision:null},{url:"assets/chunks/DocShici.f14361a7.js",revision:null},{url:"assets/chunks/DocTag.77047df0.js",revision:null},{url:"assets/chunks/framework.d15d0c2c.js",revision:null},{url:"assets/chunks/ImageLazyLoad.011d4beb.js",revision:null},{url:"assets/chunks/SvgIcon.8d83b6a8.js",revision:null},{url:"assets/chunks/theme.2762d432.js",revision:null},{url:"assets/chunks/useNamespace.75a6a06b.js",revision:null},{url:"assets/chunks/VPAlgoliaSearchBox.beb56f03.js",revision:null},{url:"assets/chunks/WordCloud.98b95597.js",revision:null},{url:"assets/cli_git_cli.md.b038c590.js",revision:null},{url:"assets/cli_git_cli.md.b038c590.lean.js",revision:null},{url:"assets/cli_git_commitlint.md.f782c3af.js",revision:null},{url:"assets/cli_git_commitlint.md.f782c3af.lean.js",revision:null},{url:"assets/cli_git_FAQ.md.06b38c2b.js",revision:null},{url:"assets/cli_git_FAQ.md.06b38c2b.lean.js",revision:null},{url:"assets/cli_git_hub.md.42e8125a.js",revision:null},{url:"assets/cli_git_hub.md.42e8125a.lean.js",revision:null},{url:"assets/cli_git_use.md.4be98bad.js",revision:null},{url:"assets/cli_git_use.md.4be98bad.lean.js",revision:null},{url:"assets/cli_index.md.e01d1d05.js",revision:null},{url:"assets/cli_index.md.e01d1d05.lean.js",revision:null},{url:"assets/cli_linux_cli.md.329a69a2.js",revision:null},{url:"assets/cli_linux_cli.md.329a69a2.lean.js",revision:null},{url:"assets/cli_linux_use.md.b334b345.js",revision:null},{url:"assets/cli_linux_use.md.b334b345.lean.js",revision:null},{url:"assets/cli_windows_cli.md.a11acae2.js",revision:null},{url:"assets/cli_windows_cli.md.a11acae2.lean.js",revision:null},{url:"assets/cli_windows_FAQ.md.dd765c9a.js",revision:null},{url:"assets/cli_windows_FAQ.md.dd765c9a.lean.js",revision:null},{url:"assets/custom_img_1.52edb246.png",revision:null},{url:"assets/custom_img_10.3ca3a90f.png",revision:null},{url:"assets/custom_img_2.a631dcde.png",revision:null},{url:"assets/custom_img_3.bd948ff2.png",revision:null},{url:"assets/custom_img_4.1079f71d.png",revision:null},{url:"assets/custom_img_5.4a9f769f.png",revision:null},{url:"assets/custom_img_6.4cbaf63b.png",revision:null},{url:"assets/custom_img_7.57e88110.png",revision:null},{url:"assets/custom_img_8.f39cf452.png",revision:null},{url:"assets/custom_img_9.9ebbc7c6.png",revision:null},{url:"assets/download_img_1.6f3b10a5.png",revision:null},{url:"assets/download_img_2.64ee6991.png",revision:null},{url:"assets/download_img.b46b56c9.png",revision:null},{url:"assets/frontend_browser_basics.md.a7b4ec25.js",revision:null},{url:"assets/frontend_browser_basics.md.a7b4ec25.lean.js",revision:null},{url:"assets/frontend_browser_cache.md.f515acc7.js",revision:null},{url:"assets/frontend_browser_cache.md.f515acc7.lean.js",revision:null},{url:"assets/frontend_browser_storage.md.1a2a7eb4.js",revision:null},{url:"assets/frontend_browser_storage.md.1a2a7eb4.lean.js",revision:null},{url:"assets/frontend_build_monorepo_changesets.md.7799098f.js",revision:null},{url:"assets/frontend_build_monorepo_changesets.md.7799098f.lean.js",revision:null},{url:"assets/frontend_build_monorepo_quickstart.md.94b54852.js",revision:null},{url:"assets/frontend_build_monorepo_quickstart.md.94b54852.lean.js",revision:null},{url:"assets/frontend_build_monorepo_turborepo.md.6f1d4964.js",revision:null},{url:"assets/frontend_build_monorepo_turborepo.md.6f1d4964.lean.js",revision:null},{url:"assets/frontend_build_rollup_lib-js.md.91da7889.js",revision:null},{url:"assets/frontend_build_rollup_lib-js.md.91da7889.lean.js",revision:null},{url:"assets/frontend_build_rollup_lib-ts.md.b506f07a.js",revision:null},{url:"assets/frontend_build_rollup_lib-ts.md.b506f07a.lean.js",revision:null},{url:"assets/frontend_build_rollup_quickstart.md.fdfb3f4b.js",revision:null},{url:"assets/frontend_build_rollup_quickstart.md.fdfb3f4b.lean.js",revision:null},{url:"assets/frontend_build_vite_ts.md.e748e883.js",revision:null},{url:"assets/frontend_build_vite_ts.md.e748e883.lean.js",revision:null},{url:"assets/frontend_build_webpack_icon.md.e9013c8d.js",revision:null},{url:"assets/frontend_build_webpack_icon.md.e9013c8d.lean.js",revision:null},{url:"assets/frontend_code_debounce-throttle.md.bb2f3335.js",revision:null},{url:"assets/frontend_code_debounce-throttle.md.bb2f3335.lean.js",revision:null},{url:"assets/frontend_code_excel-json.md.ecccef2a.js",revision:null},{url:"assets/frontend_code_excel-json.md.ecccef2a.lean.js",revision:null},{url:"assets/frontend_code_image-lazy.md.ed64a9b2.js",revision:null},{url:"assets/frontend_code_image-lazy.md.ed64a9b2.lean.js",revision:null},{url:"assets/frontend_code_list-tree.md.17600eba.js",revision:null},{url:"assets/frontend_code_list-tree.md.17600eba.lean.js",revision:null},{url:"assets/frontend_code_others.md.f47a7aed.js",revision:null},{url:"assets/frontend_code_others.md.f47a7aed.lean.js",revision:null},{url:"assets/frontend_css_selector.md.24447007.js",revision:null},{url:"assets/frontend_css_selector.md.24447007.lean.js",revision:null},{url:"assets/frontend_css_weight.md.36b368ff.js",revision:null},{url:"assets/frontend_css_weight.md.36b368ff.lean.js",revision:null},{url:"assets/frontend_html_index.md.c78a9187.js",revision:null},{url:"assets/frontend_html_index.md.c78a9187.lean.js",revision:null},{url:"assets/frontend_index.md.717af125.js",revision:null},{url:"assets/frontend_index.md.717af125.lean.js",revision:null},{url:"assets/frontend_javascript_ajax.md.316d3c68.js",revision:null},{url:"assets/frontend_javascript_ajax.md.316d3c68.lean.js",revision:null},{url:"assets/frontend_javascript_array.md.4d23fc3c.js",revision:null},{url:"assets/frontend_javascript_array.md.4d23fc3c.lean.js",revision:null},{url:"assets/frontend_javascript_binary.md.2eed0d31.js",revision:null},{url:"assets/frontend_javascript_binary.md.2eed0d31.lean.js",revision:null},{url:"assets/frontend_javascript_BOMObserver.md.fb56ca45.js",revision:null},{url:"assets/frontend_javascript_BOMObserver.md.fb56ca45.lean.js",revision:null},{url:"assets/frontend_javascript_CallStack.md.2387efdb.js",revision:null},{url:"assets/frontend_javascript_CallStack.md.2387efdb.lean.js",revision:null},{url:"assets/frontend_javascript_dictionary.md.b1e876a3.js",revision:null},{url:"assets/frontend_javascript_dictionary.md.b1e876a3.lean.js",revision:null},{url:"assets/frontend_javascript_ElementPosition.md.a273d0de.js",revision:null},{url:"assets/frontend_javascript_ElementPosition.md.a273d0de.lean.js",revision:null},{url:"assets/frontend_javascript_ES6_.md.d6372817.js",revision:null},{url:"assets/frontend_javascript_ES6_.md.d6372817.lean.js",revision:null},{url:"assets/frontend_javascript_EventLoop.md.ae1a81b5.js",revision:null},{url:"assets/frontend_javascript_EventLoop.md.ae1a81b5.lean.js",revision:null},{url:"assets/frontend_javascript_fetch.md.5fa8f147.js",revision:null},{url:"assets/frontend_javascript_fetch.md.5fa8f147.lean.js",revision:null},{url:"assets/frontend_javascript_object.md.929f9f6e.js",revision:null},{url:"assets/frontend_javascript_object.md.929f9f6e.lean.js",revision:null},{url:"assets/frontend_javascript_promise.md.0cf78d94.js",revision:null},{url:"assets/frontend_javascript_promise.md.0cf78d94.lean.js",revision:null},{url:"assets/frontend_javascript_prototype.md.d13c8593.js",revision:null},{url:"assets/frontend_javascript_prototype.md.d13c8593.lean.js",revision:null},{url:"assets/frontend_javascript_scope.md.fb7b465b.js",revision:null},{url:"assets/frontend_javascript_scope.md.fb7b465b.lean.js",revision:null},{url:"assets/frontend_javascript_string.md.107d4855.js",revision:null},{url:"assets/frontend_javascript_string.md.107d4855.lean.js",revision:null},{url:"assets/frontend_network_cors.md.52bdbd3c.js",revision:null},{url:"assets/frontend_network_cors.md.52bdbd3c.lean.js",revision:null},{url:"assets/frontend_network_encryption.md.47ba42cb.js",revision:null},{url:"assets/frontend_network_encryption.md.47ba42cb.lean.js",revision:null},{url:"assets/frontend_network_http.md.4153631f.js",revision:null},{url:"assets/frontend_network_http.md.4153631f.lean.js",revision:null},{url:"assets/frontend_network_KeepAlive.md.1f79648f.js",revision:null},{url:"assets/frontend_network_KeepAlive.md.1f79648f.lean.js",revision:null},{url:"assets/frontend_network_request.md.2bbcadc9.js",revision:null},{url:"assets/frontend_network_request.md.2bbcadc9.lean.js",revision:null},{url:"assets/frontend_network_security.md.803a9ca5.js",revision:null},{url:"assets/frontend_network_security.md.803a9ca5.lean.js",revision:null},{url:"assets/frontend_network_tcp.md.7f957db1.js",revision:null},{url:"assets/frontend_network_tcp.md.7f957db1.lean.js",revision:null},{url:"assets/frontend_npm_cli.md.7201b22a.js",revision:null},{url:"assets/frontend_npm_cli.md.7201b22a.lean.js",revision:null},{url:"assets/frontend_npm_libs.md.d2843c00.js",revision:null},{url:"assets/frontend_npm_libs.md.d2843c00.lean.js",revision:null},{url:"assets/frontend_npm_license.md.f3d2b7bc.js",revision:null},{url:"assets/frontend_npm_license.md.f3d2b7bc.lean.js",revision:null},{url:"assets/frontend_npm_package-exports.md.551d59ae.js",revision:null},{url:"assets/frontend_npm_package-exports.md.551d59ae.lean.js",revision:null},{url:"assets/frontend_npm_package-json.md.7bdf79b7.js",revision:null},{url:"assets/frontend_npm_package-json.md.7bdf79b7.lean.js",revision:null},{url:"assets/frontend_npm_package-manager.md.e8075a79.js",revision:null},{url:"assets/frontend_npm_package-manager.md.e8075a79.lean.js",revision:null},{url:"assets/frontend_npm_package-patch.md.72a67d0c.js",revision:null},{url:"assets/frontend_npm_package-patch.md.72a67d0c.lean.js",revision:null},{url:"assets/frontend_npm_SemVer.md.f039ce0f.js",revision:null},{url:"assets/frontend_npm_SemVer.md.f039ce0f.lean.js",revision:null},{url:"assets/frontend_regex_basics.md.ff05eb26.js",revision:null},{url:"assets/frontend_regex_basics.md.ff05eb26.lean.js",revision:null},{url:"assets/frontend_regex_use.md.c4575ae8.js",revision:null},{url:"assets/frontend_regex_use.md.c4575ae8.lean.js",revision:null},{url:"assets/img_1.5e390f4e.png",revision:null},{url:"assets/img_1.7a3ebcab.png",revision:null},{url:"assets/img_1.7ff297cb.png",revision:null},{url:"assets/img_1.b295697c.png",revision:null},{url:"assets/img_10.200e566d.png",revision:null},{url:"assets/img_2.2810f483.png",revision:null},{url:"assets/img_2.55110f2a.png",revision:null},{url:"assets/img_2.e7b91dcb.png",revision:null},{url:"assets/img_3.8118008d.png",revision:null},{url:"assets/img_3.e18870c4.png",revision:null},{url:"assets/img_4.5f8c656c.png",revision:null},{url:"assets/img_4.726c4310.png",revision:null},{url:"assets/img_5.2dbf15aa.png",revision:null},{url:"assets/img_5.d8f884e8.png",revision:null},{url:"assets/img_6.0ade014a.png",revision:null},{url:"assets/img_6.0bbbfc14.png",revision:null},{url:"assets/img_7.6a52f8bc.png",revision:null},{url:"assets/img_7.b6f57f5c.png",revision:null},{url:"assets/img_8.2991d750.png",revision:null},{url:"assets/img_9.a4f5bf01.png",revision:null},{url:"assets/img.2e8a66d0.png",revision:null},{url:"assets/img.65a9c1e9.png",revision:null},{url:"assets/img.7effe2e8.png",revision:null},{url:"assets/img.8a89d19f.png",revision:null},{url:"assets/img.a4ef83c3.png",revision:null},{url:"assets/img.fa4a579c.png",revision:null},{url:"assets/index.md.83362ef8.js",revision:null},{url:"assets/index.md.83362ef8.lean.js",revision:null},{url:"assets/install_img_0.70e8c1af.png",revision:null},{url:"assets/install_img_1.99713b77.png",revision:null},{url:"assets/install_img_10.f3eb1b6b.png",revision:null},{url:"assets/install_img_11.d097a64e.png",revision:null},{url:"assets/install_img_12.e9657aae.png",revision:null},{url:"assets/install_img_13.08ffcc88.png",revision:null},{url:"assets/install_img_14.f1461e36.png",revision:null},{url:"assets/install_img_15.437fbd05.png",revision:null},{url:"assets/install_img_16.8e228a7b.png",revision:null},{url:"assets/install_img_17.2ce62dd7.png",revision:null},{url:"assets/install_img_18.2f2f5f60.png",revision:null},{url:"assets/install_img_19.5ac4c6d1.png",revision:null},{url:"assets/install_img_2.6d44774c.png",revision:null},{url:"assets/install_img_20.4466232f.png",revision:null},{url:"assets/install_img_3.8b8b4477.png",revision:null},{url:"assets/install_img_4.89ea364c.png",revision:null},{url:"assets/install_img_5.54926192.png",revision:null},{url:"assets/install_img_6.22305e60.png",revision:null},{url:"assets/install_img_7.42ad31bd.png",revision:null},{url:"assets/install_img_8.5486d534.png",revision:null},{url:"assets/install_img_9.666141db.png",revision:null},{url:"assets/install_img.a7659d1c.png",revision:null},{url:"assets/inter-italic-cyrillic-ext.33bd5a8e.woff2",revision:null},{url:"assets/inter-italic-cyrillic.ea42a392.woff2",revision:null},{url:"assets/inter-italic-greek-ext.4fbe9427.woff2",revision:null},{url:"assets/inter-italic-greek.8f4463c4.woff2",revision:null},{url:"assets/inter-italic-latin-ext.bd8920cc.woff2",revision:null},{url:"assets/inter-italic-latin.bd3b6f56.woff2",revision:null},{url:"assets/inter-italic-vietnamese.6ce511fb.woff2",revision:null},{url:"assets/inter-roman-cyrillic-ext.e75737ce.woff2",revision:null},{url:"assets/inter-roman-cyrillic.5f2c6c8c.woff2",revision:null},{url:"assets/inter-roman-greek-ext.ab0619bc.woff2",revision:null},{url:"assets/inter-roman-greek.d5a6d92a.woff2",revision:null},{url:"assets/inter-roman-latin-ext.0030eebd.woff2",revision:null},{url:"assets/inter-roman-latin.2ed14f66.woff2",revision:null},{url:"assets/inter-roman-vietnamese.14ce25a6.woff2",revision:null},{url:"assets/navigation_index.md.7468bc62.js",revision:null},{url:"assets/navigation_index.md.7468bc62.lean.js",revision:null},{url:"assets/npm_license_img.507c89ef.png",revision:null},{url:"assets/origin_index.md.f27070cc.js",revision:null},{url:"assets/origin_index.md.f27070cc.lean.js",revision:null},{url:"assets/style.d4c4edd1.css",revision:null},{url:"backend/index.html",revision:"ba6192949de799f1450c9b991f31cb7e"},{url:"backend/koa/start.html",revision:"ebbe4c45cedc10e80f030e1e57cbcb42"},{url:"backend/koa/use.html",revision:"793e63e10d87c8ff47ed09820273c7c0"},{url:"backend/mysql/install.html",revision:"3445f013b3d085cd5e872070136901be"},{url:"backend/node/env.html",revision:"60856a29acb3f8177cea7acc2a7eab18"},{url:"backend/node/process.html",revision:"c54ae45e663133ab55b1dce4439c1fa1"},{url:"backend/redis/install.html",revision:"c054f3fd0d43219c16c571aafbd8a23c"},{url:"cli/git/cli.html",revision:"5735abcc4d31322b5ccf5106a00f4689"},{url:"cli/git/commitlint.html",revision:"c15721270b9ddbcf72dd4b58fb75abe8"},{url:"cli/git/FAQ.html",revision:"abfa4c8c415605e66fce8bdf2bcd0719"},{url:"cli/git/hub.html",revision:"a06c250f20b218eee4ec8799f2292add"},{url:"cli/git/use.html",revision:"5c6280266583aca559d9e9f1312d6903"},{url:"cli/index.html",revision:"4242acf9926eaba24bb37df162ae61bb"},{url:"cli/linux/cli.html",revision:"78ab3cf8cc35f2ce5e0c51652674f22e"},{url:"cli/linux/use.html",revision:"6a7ba579430575d9b5e7ebad123314ed"},{url:"cli/windows/cli.html",revision:"73acd193264baed715430b3ff5023e10"},{url:"cli/windows/FAQ.html",revision:"156ac783da50905a949f8256c8e6f76e"},{url:"favicon.ico",revision:"710702509c00e4fe7442447e555df1ff"},{url:"frontend/browser/basics.html",revision:"e6ff82f015866c8268bdb2e536bcaaa3"},{url:"frontend/browser/cache.html",revision:"2f092d7e3e92549ebae5fea33da6494f"},{url:"frontend/browser/storage.html",revision:"62c4375980eaccb7fe822e2796840011"},{url:"frontend/build/monorepo/changesets.html",revision:"64b3ce7d2ad118b3edae82b43844078d"},{url:"frontend/build/monorepo/quickstart.html",revision:"8ae0898fac2555bc44458fec47e78486"},{url:"frontend/build/monorepo/turborepo.html",revision:"6fc6c8571217e0028aacdb6ef9907937"},{url:"frontend/build/rollup/lib-js.html",revision:"1f351086eb3fae7cc094ca988150761f"},{url:"frontend/build/rollup/lib-ts.html",revision:"b6575dfd73dd09ea76cfcf2abd3e5eb9"},{url:"frontend/build/rollup/quickstart.html",revision:"09b618aff1f49e2f0fc8834842844fef"},{url:"frontend/build/vite/ts.html",revision:"064dd84ffda2e74884e1c88fc7c04852"},{url:"frontend/build/webpack/icon.html",revision:"4bf6516f7ca694f162c9b01981fd4217"},{url:"frontend/code/debounce-throttle.html",revision:"ef2d91223d429aeda5eb0ec27e709eb8"},{url:"frontend/code/excel-json.html",revision:"c634bb7f5397fd545512a3199ec97643"},{url:"frontend/code/image-lazy.html",revision:"7e3054a88d448417c7add38afc1edcb3"},{url:"frontend/code/list-tree.html",revision:"935c74602a5a87bf67974d5fd1afee24"},{url:"frontend/code/others.html",revision:"9ca93da2e1455229751685adfb497f48"},{url:"frontend/css/selector.html",revision:"a3ea7bfdadae1690862d6aab3c785f27"},{url:"frontend/css/weight.html",revision:"fad07f9066e30b719876c5f57e69fdd2"},{url:"frontend/html/index.html",revision:"d56a2807535f15437134e6f5d5df3ec3"},{url:"frontend/index.html",revision:"6683d7f349b615ee06fe00e923ddb726"},{url:"frontend/javascript/ajax.html",revision:"356137877fe666713c3d2d2b8b1cc3d8"},{url:"frontend/javascript/array.html",revision:"4f24754e5fb7913cde3ed6ed8844645c"},{url:"frontend/javascript/binary.html",revision:"bb8c08ea12b069a756470aac41a932f8"},{url:"frontend/javascript/BOMObserver.html",revision:"23ac3836418c14af6410317452b0b2e0"},{url:"frontend/javascript/CallStack.html",revision:"fd7b2525b0e733e8283f84e7fceba954"},{url:"frontend/javascript/dictionary.html",revision:"2d1712992971cfb680806f9023304d44"},{url:"frontend/javascript/ElementPosition.html",revision:"fcda8cffbcbd71e8715984f3d9627c5a"},{url:"frontend/javascript/ES6+.html",revision:"965d0bbd1cea46cae1f868ac9330137e"},{url:"frontend/javascript/EventLoop.html",revision:"2a1660f85bb2db9f24c58ee6ca5bb288"},{url:"frontend/javascript/fetch.html",revision:"b2671a86417253380c55e4a260766144"},{url:"frontend/javascript/object.html",revision:"a1873d0fc3c5721209ff1ffc818b9776"},{url:"frontend/javascript/promise.html",revision:"ba126fe6b4fdb99a2f92dfdb3ac74287"},{url:"frontend/javascript/prototype.html",revision:"030b1dad0937c959f472f842b99339a2"},{url:"frontend/javascript/scope.html",revision:"d94b990c5a664e5fb5f79ca5ed57d5d9"},{url:"frontend/javascript/string.html",revision:"2a29c402b6cd4bbdf8440be50092f62d"},{url:"frontend/network/cors.html",revision:"3730d4d5dd87720ce0967542f0f809e2"},{url:"frontend/network/encryption.html",revision:"15df958f65921c5c69c1b853c25c6484"},{url:"frontend/network/http.html",revision:"63bf641c0abc98187619d462c22f3c61"},{url:"frontend/network/KeepAlive.html",revision:"f92a61688b12cb016cf351bcaff9a82b"},{url:"frontend/network/request.html",revision:"b74957ebe514ad5a2c49e8a700ea0d54"},{url:"frontend/network/security.html",revision:"2e95a16269e1c5c9ea97a32494c335b3"},{url:"frontend/network/tcp.html",revision:"4080635c4d6b758062750556106b1bbe"},{url:"frontend/npm/cli.html",revision:"5c248fc40578702301adb292056df19d"},{url:"frontend/npm/libs.html",revision:"9c54820c06aa197c0503d95ed7c99c6c"},{url:"frontend/npm/license.html",revision:"da4c48a05576910fb8c9fe3343769a3d"},{url:"frontend/npm/package-exports.html",revision:"1933eeb502e51456deeefec4147779b5"},{url:"frontend/npm/package-json.html",revision:"c8c0a56107e42ef0247398fb6e1615e8"},{url:"frontend/npm/package-manager.html",revision:"9fd54f930ff67b26283338f657eababc"},{url:"frontend/npm/package-patch.html",revision:"df496a6aec487dbcef1f71e0bfa8284f"},{url:"frontend/npm/SemVer.html",revision:"ac44fcc8ec3975d87e5c1e3c8e855a21"},{url:"frontend/regex/basics.html",revision:"ee06c57371f8c9a57966de149dbf8812"},{url:"frontend/regex/use.html",revision:"82aab5df4291f016fe95f29f7eb6aa2f"},{url:"giscus/noborder_dark.css",revision:"0381017c9f23173fc52539b760cbc7b3"},{url:"giscus/noborder_light.css",revision:"1514a7d3868ce0bc5faae416baaf6a56"},{url:"icons/create.svg",revision:"4596b23f730edc20645b66213f234a9d"},{url:"icons/tags.svg",revision:"a89835a6d5f3d0f6314cb20684bfd01c"},{url:"icons/update.svg",revision:"13a037f2fbd6ef84d88997aa4cc27339"},{url:"icons/zodiac/dog.svg",revision:"7f255c221ebc536ae168bd061ce4fcd4"},{url:"icons/zodiac/dragon.svg",revision:"a6811eb3e6ac9f931f8510604b35990e"},{url:"icons/zodiac/goat.svg",revision:"8d7e96e3d87b51fc866a9706747051c0"},{url:"icons/zodiac/horse.svg",revision:"f0d014be2cf1f15ef06214b1eb480062"},{url:"icons/zodiac/monkey.svg",revision:"1160fea5b17cd96f5df29508bd455586"},{url:"icons/zodiac/ox.svg",revision:"e62223d23b89c74e26812692e78754e9"},{url:"icons/zodiac/pig.svg",revision:"ab2396b4707b864301dbd5eda5732b12"},{url:"icons/zodiac/rabbit.svg",revision:"3a89782cda47e40f4a7732ff9ba0553f"},{url:"icons/zodiac/rat.svg",revision:"45e7451cea0ef25237e19ff13fedc7e0"},{url:"icons/zodiac/rooster.svg",revision:"15d1a5484eea17d9ecf87df3841996f1"},{url:"icons/zodiac/snake.svg",revision:"abbce3bed7859d23b33c1c86517f01e2"},{url:"icons/zodiac/tiger.svg",revision:"5e9bb5ee0924f9b96b2a86e9b645bc55"},{url:"index.html",revision:"95bf40e2315bad442ab16ce58def4c5b"},{url:"live2d/core/live2dCubismCore.min.js",revision:"1ae0f80720323fd164deb9c2af05848a"},{url:"live2d/models/hijiki/hijiki.2048/texture_00.png",revision:"0cc2f2880ef801c9bdcdcfddcdddafb3"},{url:"live2d/models/tororo/tororo.2048/texture_00.png",revision:"ee9c6155217d874a3825b07dd672a029"},{url:"logo.default.svg",revision:"c13222dbc0049bf4be184901a9a20949"},{url:"logo.png",revision:"276008f0fc30e3c90ae57daf41766cbb"},{url:"logo.svg",revision:"ac82ac1a2751f04c23460d2c6861c6a4"},{url:"navigation/index.html",revision:"c23da289393cf15d2aff7357549da954"},{url:"origin/index.html",revision:"c71003661c3cbf3cc6b704598486b3b0"},{url:"pwa-192x192.svg",revision:"b0229250796c6572bb422e21ef82e933"},{url:"pwa-512x512.svg",revision:"aa97e375b04bcd0f65f015503c2acbf3"},{url:"logo.svg",revision:"ac82ac1a2751f04c23460d2c6861c6a4"},{url:"manifest.webmanifest",revision:"0d11bc0f310f0a653f1b9314aaf82311"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({sameOrigin:e,url:s})=>e&&["images","icons","svg"].some((e=>s.pathname.startsWith(`/assets/${e}/`)))),new e.StaleWhileRevalidate({cacheName:"assets-images-cache",plugins:[new e.ExpirationPlugin({purgeOnQuotaError:!0,maxEntries:256,maxAgeSeconds:604800}),new e.CacheableResponsePlugin({statuses:[200]})]}),"GET"),e.registerRoute(/^https:\/\/peiyanlu.github.io\/.*/i,new e.StaleWhileRevalidate({cacheName:"gh-images-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:86400}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/someInterface/i,new e.StaleWhileRevalidate({cacheName:"interface-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(js|css|ts)/,new e.StaleWhileRevalidate({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.StaleWhileRevalidate({cacheName:"image-cache",plugins:[]}),"GET")}));
