if(!self.define){let s,e={};const n=(n,l)=>(n=new URL(n+".js",l).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(l,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const t=s=>n(s,r),o={module:{uri:r},exports:a,require:t};e[r]=Promise.all(l.map((s=>o[s]||t(s)))).then((s=>(i(...s),a)))}}define(["./workbox-755692f8"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"404.html",revision:"8da701dbe68e8ac8500e145537360941"},{url:"archive/index.html",revision:"7d4bc43aab6406320dd7f61338eaa0cf"},{url:"assets/001.90279b0a.png",revision:null},{url:"assets/002.ef29c6c4.png",revision:null},{url:"assets/003.6bb84d98.png",revision:null},{url:"assets/005.0afed05c.png",revision:null},{url:"assets/007.84db7801.png",revision:null},{url:"assets/008.c54cbba1.png",revision:null},{url:"assets/009.329837f3.png",revision:null},{url:"assets/010.bd5dbad1.png",revision:null},{url:"assets/011.e85722e9.png",revision:null},{url:"assets/012.2a9cbf52.png",revision:null},{url:"assets/013.04276e76.png",revision:null},{url:"assets/014.0904d593.png",revision:null},{url:"assets/015.34672a12.png",revision:null},{url:"assets/016.61b19b30.png",revision:null},{url:"assets/017.88047398.png",revision:null},{url:"assets/018.49ae0d60.png",revision:null},{url:"assets/019.f09e871b.png",revision:null},{url:"assets/app.4a149beb.js",revision:null},{url:"assets/archive_index.md.30c5a855.js",revision:null},{url:"assets/archive_index.md.30c5a855.lean.js",revision:null},{url:"assets/backend_index.md.1d809c3d.js",revision:null},{url:"assets/backend_index.md.1d809c3d.lean.js",revision:null},{url:"assets/backend_Java_frp内网穿透_内网穿透.md.d5b83706.js",revision:null},{url:"assets/backend_Java_frp内网穿透_内网穿透.md.d5b83706.lean.js",revision:null},{url:"assets/backend_Java_Java笔记.md.fd3e6747.js",revision:null},{url:"assets/backend_Java_Java笔记.md.fd3e6747.lean.js",revision:null},{url:"assets/backend_Java_Oracle_oracle注意事项.md.fe6ddfb5.js",revision:null},{url:"assets/backend_Java_Oracle_oracle注意事项.md.fe6ddfb5.lean.js",revision:null},{url:"assets/backend_Java_RabbitMQ_RabbitMQ笔记.md.82cc92ec.js",revision:null},{url:"assets/backend_Java_RabbitMQ_RabbitMQ笔记.md.82cc92ec.lean.js",revision:null},{url:"assets/backend_Java_系统设计案例.md.30653d8b.js",revision:null},{url:"assets/backend_Java_系统设计案例.md.30653d8b.lean.js",revision:null},{url:"assets/backend_koa_start.md.b5ae85ce.js",revision:null},{url:"assets/backend_koa_start.md.b5ae85ce.lean.js",revision:null},{url:"assets/backend_koa_use.md.e8b5894e.js",revision:null},{url:"assets/backend_koa_use.md.e8b5894e.lean.js",revision:null},{url:"assets/backend_mysql_install.md.781dbc2f.js",revision:null},{url:"assets/backend_mysql_install.md.781dbc2f.lean.js",revision:null},{url:"assets/backend_node_env.md.b6866fa3.js",revision:null},{url:"assets/backend_node_env.md.b6866fa3.lean.js",revision:null},{url:"assets/backend_node_process.md.42cffded.js",revision:null},{url:"assets/backend_node_process.md.42cffded.lean.js",revision:null},{url:"assets/backend_redis_install.md.8a2f03a6.js",revision:null},{url:"assets/backend_redis_install.md.8a2f03a6.lean.js",revision:null},{url:"assets/chunks/base-80a1f760.30d92a84.js",revision:null},{url:"assets/chunks/client.utils-7a723432.ca7d141e.js",revision:null},{url:"assets/chunks/commonjsHelpers.39b5b250.js",revision:null},{url:"assets/chunks/DocShici.48463739.js",revision:null},{url:"assets/chunks/DocTag.0440a01e.js",revision:null},{url:"assets/chunks/framework.c0c21d38.js",revision:null},{url:"assets/chunks/ImageLazyLoad.d081274f.js",revision:null},{url:"assets/chunks/index-bd1ff004.259b0200.js",revision:null},{url:"assets/chunks/index.c4defaec.js",revision:null},{url:"assets/chunks/index.cd43b238.js",revision:null},{url:"assets/chunks/index.e71e5212.js",revision:null},{url:"assets/chunks/SvgIcon.a8d7a258.js",revision:null},{url:"assets/chunks/theme.b0fd1a93.js",revision:null},{url:"assets/chunks/useNamespace.75a6a06b.js",revision:null},{url:"assets/chunks/VPAlgoliaSearchBox.c00cb682.js",revision:null},{url:"assets/chunks/WordCloud.a74fb232.js",revision:null},{url:"assets/cli_git_cli.md.7fbe56fb.js",revision:null},{url:"assets/cli_git_cli.md.7fbe56fb.lean.js",revision:null},{url:"assets/cli_git_commitlint.md.54b149a5.js",revision:null},{url:"assets/cli_git_commitlint.md.54b149a5.lean.js",revision:null},{url:"assets/cli_git_FAQ.md.e7ef4c2d.js",revision:null},{url:"assets/cli_git_FAQ.md.e7ef4c2d.lean.js",revision:null},{url:"assets/cli_git_hub.md.d79a18a4.js",revision:null},{url:"assets/cli_git_hub.md.d79a18a4.lean.js",revision:null},{url:"assets/cli_git_use.md.d70dc84c.js",revision:null},{url:"assets/cli_git_use.md.d70dc84c.lean.js",revision:null},{url:"assets/cli_index.md.798902a5.js",revision:null},{url:"assets/cli_index.md.798902a5.lean.js",revision:null},{url:"assets/cli_linux_cli.md.b4fbd4d5.js",revision:null},{url:"assets/cli_linux_cli.md.b4fbd4d5.lean.js",revision:null},{url:"assets/cli_linux_use.md.35d2262c.js",revision:null},{url:"assets/cli_linux_use.md.35d2262c.lean.js",revision:null},{url:"assets/cli_windows_cli.md.26e3d9e2.js",revision:null},{url:"assets/cli_windows_cli.md.26e3d9e2.lean.js",revision:null},{url:"assets/cli_windows_FAQ.md.745360d1.js",revision:null},{url:"assets/cli_windows_FAQ.md.745360d1.lean.js",revision:null},{url:"assets/copy_theme_CSS.36be0d1a.png",revision:null},{url:"assets/custom_img_1.52edb246.png",revision:null},{url:"assets/custom_img_10.3ca3a90f.png",revision:null},{url:"assets/custom_img_2.a631dcde.png",revision:null},{url:"assets/custom_img_3.bd948ff2.png",revision:null},{url:"assets/custom_img_4.1079f71d.png",revision:null},{url:"assets/custom_img_5.4a9f769f.png",revision:null},{url:"assets/custom_img_6.4cbaf63b.png",revision:null},{url:"assets/custom_img_7.57e88110.png",revision:null},{url:"assets/custom_img_8.f39cf452.png",revision:null},{url:"assets/custom_img_9.9ebbc7c6.png",revision:null},{url:"assets/download_img_1.6f3b10a5.png",revision:null},{url:"assets/download_img_2.64ee6991.png",revision:null},{url:"assets/download_img.b46b56c9.png",revision:null},{url:"assets/frontend_base_JS常用API.md.492c3db7.js",revision:null},{url:"assets/frontend_base_JS常用API.md.492c3db7.lean.js",revision:null},{url:"assets/frontend_base_前端笔记.md.04d870f6.js",revision:null},{url:"assets/frontend_base_前端笔记.md.04d870f6.lean.js",revision:null},{url:"assets/frontend_browser_basics.md.b7dd453e.js",revision:null},{url:"assets/frontend_browser_basics.md.b7dd453e.lean.js",revision:null},{url:"assets/frontend_browser_cache.md.38dd1521.js",revision:null},{url:"assets/frontend_browser_cache.md.38dd1521.lean.js",revision:null},{url:"assets/frontend_browser_storage.md.6ba0e8d3.js",revision:null},{url:"assets/frontend_browser_storage.md.6ba0e8d3.lean.js",revision:null},{url:"assets/frontend_build_monorepo_quickstart.md.fe0ddf76.js",revision:null},{url:"assets/frontend_build_monorepo_quickstart.md.fe0ddf76.lean.js",revision:null},{url:"assets/frontend_build_monorepo_turborepo.md.3b013cc8.js",revision:null},{url:"assets/frontend_build_monorepo_turborepo.md.3b013cc8.lean.js",revision:null},{url:"assets/frontend_build_rollup_lib-js.md.660e551c.js",revision:null},{url:"assets/frontend_build_rollup_lib-js.md.660e551c.lean.js",revision:null},{url:"assets/frontend_build_rollup_lib-ts.md.9097efb1.js",revision:null},{url:"assets/frontend_build_rollup_lib-ts.md.9097efb1.lean.js",revision:null},{url:"assets/frontend_build_rollup_quickstart.md.776992c2.js",revision:null},{url:"assets/frontend_build_rollup_quickstart.md.776992c2.lean.js",revision:null},{url:"assets/frontend_build_vite_ts.md.51393960.js",revision:null},{url:"assets/frontend_build_vite_ts.md.51393960.lean.js",revision:null},{url:"assets/frontend_build_webpack_FAQ.md.e117f4c5.js",revision:null},{url:"assets/frontend_build_webpack_FAQ.md.e117f4c5.lean.js",revision:null},{url:"assets/frontend_build_webpack_lib-icon.md.f71dca73.js",revision:null},{url:"assets/frontend_build_webpack_lib-icon.md.f71dca73.lean.js",revision:null},{url:"assets/frontend_code_debounce-throttle.md.72f083ff.js",revision:null},{url:"assets/frontend_code_debounce-throttle.md.72f083ff.lean.js",revision:null},{url:"assets/frontend_code_excel-json.md.8adf147a.js",revision:null},{url:"assets/frontend_code_excel-json.md.8adf147a.lean.js",revision:null},{url:"assets/frontend_code_image-lazy.md.a0533c1d.js",revision:null},{url:"assets/frontend_code_image-lazy.md.a0533c1d.lean.js",revision:null},{url:"assets/frontend_code_list-tree.md.14e6ca14.js",revision:null},{url:"assets/frontend_code_list-tree.md.14e6ca14.lean.js",revision:null},{url:"assets/frontend_code_others.md.f0af6094.js",revision:null},{url:"assets/frontend_code_others.md.f0af6094.lean.js",revision:null},{url:"assets/frontend_code_pretter.md.4ecb44b4.js",revision:null},{url:"assets/frontend_code_pretter.md.4ecb44b4.lean.js",revision:null},{url:"assets/frontend_css_selector.md.68e5c88f.js",revision:null},{url:"assets/frontend_css_selector.md.68e5c88f.lean.js",revision:null},{url:"assets/frontend_css_weight.md.fdc6e28b.js",revision:null},{url:"assets/frontend_css_weight.md.fdc6e28b.lean.js",revision:null},{url:"assets/frontend_html_index.md.664e1f67.js",revision:null},{url:"assets/frontend_html_index.md.664e1f67.lean.js",revision:null},{url:"assets/frontend_index.md.bfd06447.js",revision:null},{url:"assets/frontend_index.md.bfd06447.lean.js",revision:null},{url:"assets/frontend_javascript_ajax.md.ac5e781f.js",revision:null},{url:"assets/frontend_javascript_ajax.md.ac5e781f.lean.js",revision:null},{url:"assets/frontend_javascript_array.md.1d7efffc.js",revision:null},{url:"assets/frontend_javascript_array.md.1d7efffc.lean.js",revision:null},{url:"assets/frontend_javascript_binary.md.5d1a5c4a.js",revision:null},{url:"assets/frontend_javascript_binary.md.5d1a5c4a.lean.js",revision:null},{url:"assets/frontend_javascript_BOMObserver.md.5329718e.js",revision:null},{url:"assets/frontend_javascript_BOMObserver.md.5329718e.lean.js",revision:null},{url:"assets/frontend_javascript_CallStack.md.53412ea5.js",revision:null},{url:"assets/frontend_javascript_CallStack.md.53412ea5.lean.js",revision:null},{url:"assets/frontend_javascript_dictionary.md.ee870582.js",revision:null},{url:"assets/frontend_javascript_dictionary.md.ee870582.lean.js",revision:null},{url:"assets/frontend_javascript_ElementPosition.md.1fe620e3.js",revision:null},{url:"assets/frontend_javascript_ElementPosition.md.1fe620e3.lean.js",revision:null},{url:"assets/frontend_javascript_ES6_.md.c1394413.js",revision:null},{url:"assets/frontend_javascript_ES6_.md.c1394413.lean.js",revision:null},{url:"assets/frontend_javascript_EventLoop.md.64a5f150.js",revision:null},{url:"assets/frontend_javascript_EventLoop.md.64a5f150.lean.js",revision:null},{url:"assets/frontend_javascript_fetch.md.5ebce04a.js",revision:null},{url:"assets/frontend_javascript_fetch.md.5ebce04a.lean.js",revision:null},{url:"assets/frontend_javascript_object.md.0c7bf309.js",revision:null},{url:"assets/frontend_javascript_object.md.0c7bf309.lean.js",revision:null},{url:"assets/frontend_javascript_promise.md.f0037737.js",revision:null},{url:"assets/frontend_javascript_promise.md.f0037737.lean.js",revision:null},{url:"assets/frontend_javascript_prototype.md.8a9bbb60.js",revision:null},{url:"assets/frontend_javascript_prototype.md.8a9bbb60.lean.js",revision:null},{url:"assets/frontend_javascript_scope.md.00f3e847.js",revision:null},{url:"assets/frontend_javascript_scope.md.00f3e847.lean.js",revision:null},{url:"assets/frontend_javascript_string.md.53f24bba.js",revision:null},{url:"assets/frontend_javascript_string.md.53f24bba.lean.js",revision:null},{url:"assets/frontend_network_cors.md.9da03918.js",revision:null},{url:"assets/frontend_network_cors.md.9da03918.lean.js",revision:null},{url:"assets/frontend_network_encryption.md.8829f93e.js",revision:null},{url:"assets/frontend_network_encryption.md.8829f93e.lean.js",revision:null},{url:"assets/frontend_network_http.md.c68b3412.js",revision:null},{url:"assets/frontend_network_http.md.c68b3412.lean.js",revision:null},{url:"assets/frontend_network_KeepAlive.md.9ed52a75.js",revision:null},{url:"assets/frontend_network_KeepAlive.md.9ed52a75.lean.js",revision:null},{url:"assets/frontend_network_request.md.0c18c716.js",revision:null},{url:"assets/frontend_network_request.md.0c18c716.lean.js",revision:null},{url:"assets/frontend_network_security.md.a816111c.js",revision:null},{url:"assets/frontend_network_security.md.a816111c.lean.js",revision:null},{url:"assets/frontend_network_tcp.md.a4c52776.js",revision:null},{url:"assets/frontend_network_tcp.md.a4c52776.lean.js",revision:null},{url:"assets/frontend_npm_changesets.md.58efb7de.js",revision:null},{url:"assets/frontend_npm_changesets.md.58efb7de.lean.js",revision:null},{url:"assets/frontend_npm_cli.md.2fdce8f3.js",revision:null},{url:"assets/frontend_npm_cli.md.2fdce8f3.lean.js",revision:null},{url:"assets/frontend_npm_FAQ.md.aadcd4a6.js",revision:null},{url:"assets/frontend_npm_FAQ.md.aadcd4a6.lean.js",revision:null},{url:"assets/frontend_npm_libs.md.8edb0dcf.js",revision:null},{url:"assets/frontend_npm_libs.md.8edb0dcf.lean.js",revision:null},{url:"assets/frontend_npm_license.md.51d20136.js",revision:null},{url:"assets/frontend_npm_license.md.51d20136.lean.js",revision:null},{url:"assets/frontend_npm_package-exports.md.fdd0527b.js",revision:null},{url:"assets/frontend_npm_package-exports.md.fdd0527b.lean.js",revision:null},{url:"assets/frontend_npm_package-json.md.b289cecf.js",revision:null},{url:"assets/frontend_npm_package-json.md.b289cecf.lean.js",revision:null},{url:"assets/frontend_npm_package-manager.md.c9587682.js",revision:null},{url:"assets/frontend_npm_package-manager.md.c9587682.lean.js",revision:null},{url:"assets/frontend_npm_package-patch.md.875e2dfd.js",revision:null},{url:"assets/frontend_npm_package-patch.md.875e2dfd.lean.js",revision:null},{url:"assets/frontend_npm_release-it.md.e892e037.js",revision:null},{url:"assets/frontend_npm_release-it.md.e892e037.lean.js",revision:null},{url:"assets/frontend_npm_SemVer.md.08853267.js",revision:null},{url:"assets/frontend_npm_SemVer.md.08853267.lean.js",revision:null},{url:"assets/frontend_Promise_Promise学习笔记.md.180620ef.js",revision:null},{url:"assets/frontend_Promise_Promise学习笔记.md.180620ef.lean.js",revision:null},{url:"assets/frontend_regex_basics.md.c8fe2040.js",revision:null},{url:"assets/frontend_regex_basics.md.c8fe2040.lean.js",revision:null},{url:"assets/frontend_regex_use.md.cfe41f8e.js",revision:null},{url:"assets/frontend_regex_use.md.cfe41f8e.lean.js",revision:null},{url:"assets/frontend_uncategorized_url-preview.md.99cb781b.js",revision:null},{url:"assets/frontend_uncategorized_url-preview.md.99cb781b.lean.js",revision:null},{url:"assets/frontend_vue_vue2-components.md.2211f9c4.js",revision:null},{url:"assets/frontend_vue_vue2-components.md.2211f9c4.lean.js",revision:null},{url:"assets/img_1.5e390f4e.png",revision:null},{url:"assets/img_1.7a3ebcab.png",revision:null},{url:"assets/img_1.7ff297cb.png",revision:null},{url:"assets/img_1.b295697c.png",revision:null},{url:"assets/img_10.200e566d.png",revision:null},{url:"assets/img_2.2810f483.png",revision:null},{url:"assets/img_2.55110f2a.png",revision:null},{url:"assets/img_2.e7b91dcb.png",revision:null},{url:"assets/img_3.8118008d.png",revision:null},{url:"assets/img_3.e18870c4.png",revision:null},{url:"assets/img_4.5f8c656c.png",revision:null},{url:"assets/img_4.726c4310.png",revision:null},{url:"assets/img_5.2dbf15aa.png",revision:null},{url:"assets/img_5.d8f884e8.png",revision:null},{url:"assets/img_6.0ade014a.png",revision:null},{url:"assets/img_6.0bbbfc14.png",revision:null},{url:"assets/img_7.6a52f8bc.png",revision:null},{url:"assets/img_7.b6f57f5c.png",revision:null},{url:"assets/img_8.2991d750.png",revision:null},{url:"assets/img_9.a4f5bf01.png",revision:null},{url:"assets/img.2e8a66d0.png",revision:null},{url:"assets/img.65a9c1e9.png",revision:null},{url:"assets/img.7effe2e8.png",revision:null},{url:"assets/img.8a89d19f.png",revision:null},{url:"assets/img.a4ef83c3.png",revision:null},{url:"assets/img.fa4a579c.png",revision:null},{url:"assets/index.md.02719a7d.js",revision:null},{url:"assets/index.md.02719a7d.lean.js",revision:null},{url:"assets/install_img_0.70e8c1af.png",revision:null},{url:"assets/install_img_1.99713b77.png",revision:null},{url:"assets/install_img_10.f3eb1b6b.png",revision:null},{url:"assets/install_img_11.d097a64e.png",revision:null},{url:"assets/install_img_12.e9657aae.png",revision:null},{url:"assets/install_img_13.08ffcc88.png",revision:null},{url:"assets/install_img_14.f1461e36.png",revision:null},{url:"assets/install_img_15.437fbd05.png",revision:null},{url:"assets/install_img_16.8e228a7b.png",revision:null},{url:"assets/install_img_17.2ce62dd7.png",revision:null},{url:"assets/install_img_18.2f2f5f60.png",revision:null},{url:"assets/install_img_19.5ac4c6d1.png",revision:null},{url:"assets/install_img_2.6d44774c.png",revision:null},{url:"assets/install_img_20.4466232f.png",revision:null},{url:"assets/install_img_3.8b8b4477.png",revision:null},{url:"assets/install_img_4.89ea364c.png",revision:null},{url:"assets/install_img_5.54926192.png",revision:null},{url:"assets/install_img_6.22305e60.png",revision:null},{url:"assets/install_img_7.42ad31bd.png",revision:null},{url:"assets/install_img_8.5486d534.png",revision:null},{url:"assets/install_img_9.666141db.png",revision:null},{url:"assets/install_img.a7659d1c.png",revision:null},{url:"assets/inter-italic-cyrillic-ext.33bd5a8e.woff2",revision:null},{url:"assets/inter-italic-cyrillic.ea42a392.woff2",revision:null},{url:"assets/inter-italic-greek-ext.4fbe9427.woff2",revision:null},{url:"assets/inter-italic-greek.8f4463c4.woff2",revision:null},{url:"assets/inter-italic-latin-ext.bd8920cc.woff2",revision:null},{url:"assets/inter-italic-latin.bd3b6f56.woff2",revision:null},{url:"assets/inter-italic-vietnamese.6ce511fb.woff2",revision:null},{url:"assets/inter-roman-cyrillic-ext.e75737ce.woff2",revision:null},{url:"assets/inter-roman-cyrillic.5f2c6c8c.woff2",revision:null},{url:"assets/inter-roman-greek-ext.ab0619bc.woff2",revision:null},{url:"assets/inter-roman-greek.d5a6d92a.woff2",revision:null},{url:"assets/inter-roman-latin-ext.0030eebd.woff2",revision:null},{url:"assets/inter-roman-latin.2ed14f66.woff2",revision:null},{url:"assets/inter-roman-vietnamese.14ce25a6.woff2",revision:null},{url:"assets/navigation_index.md.6061a6d4.js",revision:null},{url:"assets/navigation_index.md.6061a6d4.lean.js",revision:null},{url:"assets/npm_license_img.507c89ef.png",revision:null},{url:"assets/origin_index.md.94b96332.js",revision:null},{url:"assets/origin_index.md.94b96332.lean.js",revision:null},{url:"assets/skill_awesome_software_好用软件.md.98c429f5.js",revision:null},{url:"assets/skill_awesome_software_好用软件.md.98c429f5.lean.js",revision:null},{url:"assets/skill_github_series_github-action使用教程_github-action使用教程.md.0ee8a884.js",revision:null},{url:"assets/skill_github_series_github-action使用教程_github-action使用教程.md.0ee8a884.lean.js",revision:null},{url:"assets/skill_github_series_github访问加速_github访问加速.md.24ee9ff0.js",revision:null},{url:"assets/skill_github_series_github访问加速_github访问加速.md.24ee9ff0.lean.js",revision:null},{url:"assets/skill_github_series_github高级搜索_GitHub 搜索技巧.md.9b202be2.js",revision:null},{url:"assets/skill_github_series_github高级搜索_GitHub 搜索技巧.md.9b202be2.lean.js",revision:null},{url:"assets/skill_github_series_vitepress-blog_AppOrGameDev-Blog更新记录.md.533ff392.js",revision:null},{url:"assets/skill_github_series_vitepress-blog_AppOrGameDev-Blog更新记录.md.533ff392.lean.js",revision:null},{url:"assets/skill_index.md.839eb9ee.js",revision:null},{url:"assets/skill_index.md.839eb9ee.lean.js",revision:null},{url:"assets/skill_typora_Typora免费安装包地址及其主题.md.a7468685.js",revision:null},{url:"assets/skill_typora_Typora免费安装包地址及其主题.md.a7468685.lean.js",revision:null},{url:"assets/skill_visio_Office Visio使用技巧.md.6aeb2e76.js",revision:null},{url:"assets/skill_visio_Office Visio使用技巧.md.6aeb2e76.lean.js",revision:null},{url:"assets/skill_windows_windows常用设置.md.21c269bf.js",revision:null},{url:"assets/skill_windows_windows常用设置.md.21c269bf.lean.js",revision:null},{url:"assets/style.2c8b069e.css",revision:null},{url:"assets/Theme_Vue_download.1b42f6a0.png",revision:null},{url:"assets/Typora_Free.be6843c5.png",revision:null},{url:"assets/Typora_Theme_Filder.d56df414.png",revision:null},{url:"assets/Typora_Theme_Vue.0e0773dd.png",revision:null},{url:"assets/Typora_Theme安装后的效果.6b0cf324.png",revision:null},{url:"backend/index.html",revision:"8a322d2d041c69100afd94d1b3bcb139"},{url:"backend/Java/frp内网穿透/内网穿透.html",revision:"8e99906c278863954f2afc0cc0fc20c6"},{url:"backend/Java/Java笔记.html",revision:"5fd4588acb6295d0ce402184ffc30b01"},{url:"backend/Java/Oracle/oracle注意事项.html",revision:"0a562531f4d99c73d3da16b64fba61df"},{url:"backend/Java/RabbitMQ/RabbitMQ笔记.html",revision:"d869afb06a293d490342d156a110d72d"},{url:"backend/Java/系统设计案例.html",revision:"1d589ac7d174774dd41fdb7b85252f07"},{url:"backend/koa/start.html",revision:"f1aa1d74d0f9f21fa594253a5fd610d3"},{url:"backend/koa/use.html",revision:"e1a2c2541adfbac96076a4643ba04699"},{url:"backend/mysql/install.html",revision:"2b08a17081fa5c5e6243bd4a1eafec07"},{url:"backend/node/env.html",revision:"7067e268cbba88a7a4f2db5237d01120"},{url:"backend/node/process.html",revision:"3094a30ebef17c52ce9139ec0ba6593c"},{url:"backend/redis/install.html",revision:"7cdf329393a638fdc52385bc4d44dc8c"},{url:"cli/git/cli.html",revision:"f553de558587438a27518b74ccbc6e56"},{url:"cli/git/commitlint.html",revision:"47b1733ab9800ed282f9d2a73647e846"},{url:"cli/git/FAQ.html",revision:"528b1978621fd41bde8f859ba1c3f447"},{url:"cli/git/hub.html",revision:"7f679dcff19abc74af1c5b80c19ee1d5"},{url:"cli/git/use.html",revision:"b84385a94383f503702533466306008f"},{url:"cli/index.html",revision:"8741a813345809eb2cf14f9f54ed3a9c"},{url:"cli/linux/cli.html",revision:"b585cece6866fa4685a05d67fbeb6fd3"},{url:"cli/linux/use.html",revision:"b5344e5132c7b2e2cb9c73d7316dfa37"},{url:"cli/windows/cli.html",revision:"4841d71eb28d340d6778b329f095f6c3"},{url:"cli/windows/FAQ.html",revision:"3311208aaaf7efe1c21595b37a936102"},{url:"favicon.ico",revision:"710702509c00e4fe7442447e555df1ff"},{url:"frontend/base/JS常用API.html",revision:"37be680463b9f453c03563c4d96b8531"},{url:"frontend/base/前端笔记.html",revision:"d895aef3b6b3cea27a8b063c260eaaba"},{url:"frontend/browser/basics.html",revision:"af51f4f93ffdece7f505aad06330c474"},{url:"frontend/browser/cache.html",revision:"cf48b2523c60bfc21ea1fc8bf2c81852"},{url:"frontend/browser/storage.html",revision:"9e19c90fb1557db3b7f27f129cf909e2"},{url:"frontend/build/monorepo/quickstart.html",revision:"597b712852c526679249929f878d7e8e"},{url:"frontend/build/monorepo/turborepo.html",revision:"c51a2020aa1362c2bf6c268f8ad7ca53"},{url:"frontend/build/rollup/lib-js.html",revision:"dc8f48ed277c5fca5a45b2e8d427589b"},{url:"frontend/build/rollup/lib-ts.html",revision:"49be2f5119e2d701c76783f1e636f333"},{url:"frontend/build/rollup/quickstart.html",revision:"0c23320065e119081db04a7f14d2f6ea"},{url:"frontend/build/vite/ts.html",revision:"c643066ed85471b272634c2028667640"},{url:"frontend/build/webpack/FAQ.html",revision:"045720dc7ff215ac051e1d883af0267e"},{url:"frontend/build/webpack/lib-icon.html",revision:"b1f14baf89d968a71dcc309a60d5b646"},{url:"frontend/code/debounce-throttle.html",revision:"3cfd11134104dcc00bcf3cf77019621d"},{url:"frontend/code/excel-json.html",revision:"9f2644b193a835f08a0187290e7bdcd2"},{url:"frontend/code/image-lazy.html",revision:"84ee83375d837576197015b96d3087dc"},{url:"frontend/code/list-tree.html",revision:"937ca262739baf452c0b4eb43c434f92"},{url:"frontend/code/others.html",revision:"ace2dfed0e0602980f3fa721ee10fc27"},{url:"frontend/code/pretter.html",revision:"b04787e4e8b7f6103bd82ddf7556098b"},{url:"frontend/css/selector.html",revision:"0ef5be9395109a8b6b54c3a7cc638211"},{url:"frontend/css/weight.html",revision:"3c1f7ea1082b53103bfa89eeca238b97"},{url:"frontend/html/index.html",revision:"ea3915c9206d25f5f025b8d92d5eff8b"},{url:"frontend/index.html",revision:"9eb34c20db646791cbe7f01126625181"},{url:"frontend/javascript/ajax.html",revision:"19222d4bfdb2f376342f96ee3857c29c"},{url:"frontend/javascript/array.html",revision:"b92970f77861d1362547e764b7e92fc7"},{url:"frontend/javascript/binary.html",revision:"d7428c62495b8b02f6ae7774717b19dd"},{url:"frontend/javascript/BOMObserver.html",revision:"e02dbb5b357391172a5992f0681b8e73"},{url:"frontend/javascript/CallStack.html",revision:"7508a512ba9148f441f702a5505e90f6"},{url:"frontend/javascript/dictionary.html",revision:"acff75a2f1818fb2dcf3cc269ddecfba"},{url:"frontend/javascript/ElementPosition.html",revision:"678f78873c5d4c3b3e8d7a42781abdd9"},{url:"frontend/javascript/ES6+.html",revision:"9aff35ae66a062adc39c1db70368a52a"},{url:"frontend/javascript/EventLoop.html",revision:"3e7ee11714ecfdf7305f4d768c68ed88"},{url:"frontend/javascript/fetch.html",revision:"7b05f5f02267aa3d4afcfaf1fffe76e9"},{url:"frontend/javascript/object.html",revision:"80cc3c420175c35e06fb85ae55b1899c"},{url:"frontend/javascript/promise.html",revision:"a65cdd90fa4bcce74bbe09fde27ddfed"},{url:"frontend/javascript/prototype.html",revision:"1d08e86f69d490d649c97d12404a6044"},{url:"frontend/javascript/scope.html",revision:"cfb62562070a2b62273d2f3d15a7c0aa"},{url:"frontend/javascript/string.html",revision:"53503058f930e5602a11abed517df4a8"},{url:"frontend/network/cors.html",revision:"8291b1885306e729612bf9fb676b2e9c"},{url:"frontend/network/encryption.html",revision:"ebc661b7e3a6679fd34020ca13f991f3"},{url:"frontend/network/http.html",revision:"d1e0555903ef09769ce8bc1a12133e33"},{url:"frontend/network/KeepAlive.html",revision:"65c3b9d887613a408d7f17299925b76d"},{url:"frontend/network/request.html",revision:"4409b4733a890eb40285d76d7b4a084e"},{url:"frontend/network/security.html",revision:"3aee15da15674d5caec7d69eb922604e"},{url:"frontend/network/tcp.html",revision:"23778f7aa7d2969253cc779561ff96b7"},{url:"frontend/npm/changesets.html",revision:"1024f4fd10ac11e6d381967ec422f0d1"},{url:"frontend/npm/cli.html",revision:"7c9bf44ebcc01bf50dca5068dd44d007"},{url:"frontend/npm/FAQ.html",revision:"0ad5fec78b106a5015acb699347a3d9d"},{url:"frontend/npm/libs.html",revision:"d81fd82b78f79dadfcc8859d7d74e87b"},{url:"frontend/npm/license.html",revision:"62c0e2051625412c2fef2d61970fe8d2"},{url:"frontend/npm/package-exports.html",revision:"49d28d733dea89a7105c05ecdbb01e04"},{url:"frontend/npm/package-json.html",revision:"6fbc0111223216bb82c2df77830f25c4"},{url:"frontend/npm/package-manager.html",revision:"a7e111aabb4795c781ba8849513f65d3"},{url:"frontend/npm/package-patch.html",revision:"c8a667fe9bab68a3caef4dbfd61a33ac"},{url:"frontend/npm/release-it.html",revision:"bbd86805eda3e72ed6ccfc5f1469d012"},{url:"frontend/npm/SemVer.html",revision:"e4eed3381c7a59127e6510515195afa1"},{url:"frontend/Promise/Promise学习笔记.html",revision:"b24d74a7d84e5bbf35272d50ac70910e"},{url:"frontend/regex/basics.html",revision:"9d4f9ad1faee3f34a287a1a3588c6d15"},{url:"frontend/regex/use.html",revision:"2b9beea8d5dfae36b185a1087fd61f76"},{url:"frontend/uncategorized/url-preview.html",revision:"ca7fefdf794a1b0cd13241b2874d3ba5"},{url:"frontend/vue/vue2-components.html",revision:"53e618fdf98b59b16277bac6a41953ee"},{url:"giscus/noborder_dark.css",revision:"0381017c9f23173fc52539b760cbc7b3"},{url:"giscus/noborder_light.css",revision:"1514a7d3868ce0bc5faae416baaf6a56"},{url:"icons/create.svg",revision:"4596b23f730edc20645b66213f234a9d"},{url:"icons/tags.svg",revision:"a89835a6d5f3d0f6314cb20684bfd01c"},{url:"icons/update.svg",revision:"13a037f2fbd6ef84d88997aa4cc27339"},{url:"icons/zodiac/dog.svg",revision:"7f255c221ebc536ae168bd061ce4fcd4"},{url:"icons/zodiac/dragon.svg",revision:"a6811eb3e6ac9f931f8510604b35990e"},{url:"icons/zodiac/goat.svg",revision:"8d7e96e3d87b51fc866a9706747051c0"},{url:"icons/zodiac/horse.svg",revision:"f0d014be2cf1f15ef06214b1eb480062"},{url:"icons/zodiac/monkey.svg",revision:"1160fea5b17cd96f5df29508bd455586"},{url:"icons/zodiac/ox.svg",revision:"e62223d23b89c74e26812692e78754e9"},{url:"icons/zodiac/pig.svg",revision:"ab2396b4707b864301dbd5eda5732b12"},{url:"icons/zodiac/rabbit.svg",revision:"3a89782cda47e40f4a7732ff9ba0553f"},{url:"icons/zodiac/rat.svg",revision:"45e7451cea0ef25237e19ff13fedc7e0"},{url:"icons/zodiac/rooster.svg",revision:"15d1a5484eea17d9ecf87df3841996f1"},{url:"icons/zodiac/snake.svg",revision:"abbce3bed7859d23b33c1c86517f01e2"},{url:"icons/zodiac/tiger.svg",revision:"5e9bb5ee0924f9b96b2a86e9b645bc55"},{url:"index.html",revision:"742db2a671955eac229e5c4aa45109d3"},{url:"live2d/core/live2dCubismCore.min.js",revision:"1ae0f80720323fd164deb9c2af05848a"},{url:"live2d/models/hijiki/hijiki.2048/texture_00.png",revision:"0cc2f2880ef801c9bdcdcfddcdddafb3"},{url:"live2d/models/tororo/tororo.2048/texture_00.png",revision:"ee9c6155217d874a3825b07dd672a029"},{url:"logo.default.svg",revision:"929d975aa05607e0fce85fff18ebc8e0"},{url:"logo.png",revision:"798e46c1a0c7cd641a66d7aaa5401f28"},{url:"logo.svg",revision:"1dc3bd59494e6a39b699f637c6ed3fd2"},{url:"navigation/index.html",revision:"769f8577a56bd12f0b05007c0240b479"},{url:"origin/index.html",revision:"1b286f147e25d6e32bcf2520baf44d9d"},{url:"pwa-192x192.svg",revision:"0c6fc3b68a755f32e442cb53f80572a1"},{url:"pwa-512x512.svg",revision:"609a4e4f3c13f4aa9d0b85eefc15a53e"},{url:"skill/awesome_software/好用软件.html",revision:"9fbfbaa6d9e743ac4f63d9726ed07538"},{url:"skill/github_series/github-action使用教程/github-action使用教程.html",revision:"d9ab63760a496cddac3d0aa68ce5beeb"},{url:"skill/github_series/github访问加速/github访问加速.html",revision:"7bdd1b06caf448f5d8c48b0590dee4a2"},{url:"skill/github_series/github高级搜索/GitHub 搜索技巧.html",revision:"4d8abb75494ac2ed4bc9a52697928577"},{url:"skill/github_series/vitepress-blog/AppOrGameDev-Blog更新记录.html",revision:"f38dd9e673da6593d2b89f5159166f64"},{url:"skill/index.html",revision:"450e84d20bfeee1765ff2e529552bba7"},{url:"skill/typora/Typora免费安装包地址及其主题.html",revision:"05bc600440cd9df00c2f6ef84a74c629"},{url:"skill/visio/Office Visio使用技巧.html",revision:"8d6447dd997f9a9c24dc069a34f7cfa3"},{url:"skill/windows/windows常用设置.html",revision:"cd50d6189ad7befebb8f3ee4b5731453"},{url:"logo.svg",revision:"1dc3bd59494e6a39b699f637c6ed3fd2"},{url:"manifest.webmanifest",revision:"0d11bc0f310f0a653f1b9314aaf82311"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute((({sameOrigin:s,url:e})=>s&&["images","icons","svg"].some((s=>e.pathname.startsWith(`/assets/${s}/`)))),new s.StaleWhileRevalidate({cacheName:"assets-images-cache",plugins:[new s.ExpirationPlugin({purgeOnQuotaError:!0,maxEntries:256,maxAgeSeconds:604800}),new s.CacheableResponsePlugin({statuses:[200]})]}),"GET"),s.registerRoute(/^https:\/\/AppOrGameDev.github.io\/.*/i,new s.StaleWhileRevalidate({cacheName:"gh-images-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:86400}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/someInterface/i,new s.StaleWhileRevalidate({cacheName:"interface-cache",plugins:[]}),"GET"),s.registerRoute(/(.*?)\.(js|css|ts)/,new s.StaleWhileRevalidate({cacheName:"js-css-cache",plugins:[]}),"GET"),s.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new s.StaleWhileRevalidate({cacheName:"image-cache",plugins:[]}),"GET")}));
