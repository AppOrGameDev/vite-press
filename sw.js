if(!self.define){let e,s={};const n=(n,l)=>(n=new URL(n+".js",l).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(l,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const t=e=>n(e,r),o={module:{uri:r},exports:a,require:t};s[r]=Promise.all(l.map((e=>o[e]||t(e)))).then((e=>(i(...e),a)))}}define(["./workbox-755692f8"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"eae50b972b32da03095626102620236b"},{url:"archive/index.html",revision:"2a17ea3fadbcdd25c540e2eb8b36955d"},{url:"assets/001.90279b0a.png",revision:null},{url:"assets/002.ef29c6c4.png",revision:null},{url:"assets/003.6bb84d98.png",revision:null},{url:"assets/005.0afed05c.png",revision:null},{url:"assets/007.84db7801.png",revision:null},{url:"assets/008.c54cbba1.png",revision:null},{url:"assets/009.329837f3.png",revision:null},{url:"assets/010.bd5dbad1.png",revision:null},{url:"assets/011.e85722e9.png",revision:null},{url:"assets/012.2a9cbf52.png",revision:null},{url:"assets/013.04276e76.png",revision:null},{url:"assets/014.0904d593.png",revision:null},{url:"assets/015.34672a12.png",revision:null},{url:"assets/016.61b19b30.png",revision:null},{url:"assets/017.88047398.png",revision:null},{url:"assets/018.49ae0d60.png",revision:null},{url:"assets/019.f09e871b.png",revision:null},{url:"assets/app.4a149beb.js",revision:null},{url:"assets/archive_index.md.42f67d15.js",revision:null},{url:"assets/archive_index.md.42f67d15.lean.js",revision:null},{url:"assets/backend_index.md.1d809c3d.js",revision:null},{url:"assets/backend_index.md.1d809c3d.lean.js",revision:null},{url:"assets/backend_Java_(红)悟空CRM本地运行环境搭建.md.56b0523a.js",revision:null},{url:"assets/backend_Java_(红)悟空CRM本地运行环境搭建.md.56b0523a.lean.js",revision:null},{url:"assets/backend_Java_frp内网穿透_内网穿透.md.d5b83706.js",revision:null},{url:"assets/backend_Java_frp内网穿透_内网穿透.md.d5b83706.lean.js",revision:null},{url:"assets/backend_Java_Java笔记.md.b95bddbf.js",revision:null},{url:"assets/backend_Java_Java笔记.md.b95bddbf.lean.js",revision:null},{url:"assets/backend_Java_Oracle_oracle注意事项.md.fe6ddfb5.js",revision:null},{url:"assets/backend_Java_Oracle_oracle注意事项.md.fe6ddfb5.lean.js",revision:null},{url:"assets/backend_Java_RabbitMQ_RabbitMQ笔记.md.82cc92ec.js",revision:null},{url:"assets/backend_Java_RabbitMQ_RabbitMQ笔记.md.82cc92ec.lean.js",revision:null},{url:"assets/backend_Java_系统设计案例.md.30653d8b.js",revision:null},{url:"assets/backend_Java_系统设计案例.md.30653d8b.lean.js",revision:null},{url:"assets/backend_koa_start.md.b5ae85ce.js",revision:null},{url:"assets/backend_koa_start.md.b5ae85ce.lean.js",revision:null},{url:"assets/backend_koa_use.md.e8b5894e.js",revision:null},{url:"assets/backend_koa_use.md.e8b5894e.lean.js",revision:null},{url:"assets/backend_mysql_install.md.781dbc2f.js",revision:null},{url:"assets/backend_mysql_install.md.781dbc2f.lean.js",revision:null},{url:"assets/backend_node_env.md.b6866fa3.js",revision:null},{url:"assets/backend_node_env.md.b6866fa3.lean.js",revision:null},{url:"assets/backend_node_process.md.42cffded.js",revision:null},{url:"assets/backend_node_process.md.42cffded.lean.js",revision:null},{url:"assets/backend_redis_install.md.8a2f03a6.js",revision:null},{url:"assets/backend_redis_install.md.8a2f03a6.lean.js",revision:null},{url:"assets/chunks/base-80a1f760.30d92a84.js",revision:null},{url:"assets/chunks/client.utils-7a723432.ca7d141e.js",revision:null},{url:"assets/chunks/commonjsHelpers.39b5b250.js",revision:null},{url:"assets/chunks/DocShici.48463739.js",revision:null},{url:"assets/chunks/DocTag.0440a01e.js",revision:null},{url:"assets/chunks/framework.c0c21d38.js",revision:null},{url:"assets/chunks/ImageLazyLoad.d081274f.js",revision:null},{url:"assets/chunks/index-bd1ff004.259b0200.js",revision:null},{url:"assets/chunks/index.c4defaec.js",revision:null},{url:"assets/chunks/index.cd43b238.js",revision:null},{url:"assets/chunks/index.e71e5212.js",revision:null},{url:"assets/chunks/SvgIcon.a8d7a258.js",revision:null},{url:"assets/chunks/theme.b0fd1a93.js",revision:null},{url:"assets/chunks/useNamespace.75a6a06b.js",revision:null},{url:"assets/chunks/VPAlgoliaSearchBox.c00cb682.js",revision:null},{url:"assets/chunks/WordCloud.5a4ff9ab.js",revision:null},{url:"assets/cli_git_cli.md.7fbe56fb.js",revision:null},{url:"assets/cli_git_cli.md.7fbe56fb.lean.js",revision:null},{url:"assets/cli_git_commitlint.md.54b149a5.js",revision:null},{url:"assets/cli_git_commitlint.md.54b149a5.lean.js",revision:null},{url:"assets/cli_git_FAQ.md.e7ef4c2d.js",revision:null},{url:"assets/cli_git_FAQ.md.e7ef4c2d.lean.js",revision:null},{url:"assets/cli_git_hub.md.d79a18a4.js",revision:null},{url:"assets/cli_git_hub.md.d79a18a4.lean.js",revision:null},{url:"assets/cli_git_use.md.d70dc84c.js",revision:null},{url:"assets/cli_git_use.md.d70dc84c.lean.js",revision:null},{url:"assets/cli_index.md.798902a5.js",revision:null},{url:"assets/cli_index.md.798902a5.lean.js",revision:null},{url:"assets/cli_linux_cli.md.b4fbd4d5.js",revision:null},{url:"assets/cli_linux_cli.md.b4fbd4d5.lean.js",revision:null},{url:"assets/cli_linux_use.md.35d2262c.js",revision:null},{url:"assets/cli_linux_use.md.35d2262c.lean.js",revision:null},{url:"assets/cli_windows_cli.md.26e3d9e2.js",revision:null},{url:"assets/cli_windows_cli.md.26e3d9e2.lean.js",revision:null},{url:"assets/cli_windows_FAQ.md.745360d1.js",revision:null},{url:"assets/cli_windows_FAQ.md.745360d1.lean.js",revision:null},{url:"assets/copy_theme_CSS.36be0d1a.png",revision:null},{url:"assets/custom_img_1.52edb246.png",revision:null},{url:"assets/custom_img_10.3ca3a90f.png",revision:null},{url:"assets/custom_img_2.a631dcde.png",revision:null},{url:"assets/custom_img_3.bd948ff2.png",revision:null},{url:"assets/custom_img_4.1079f71d.png",revision:null},{url:"assets/custom_img_5.4a9f769f.png",revision:null},{url:"assets/custom_img_6.4cbaf63b.png",revision:null},{url:"assets/custom_img_7.57e88110.png",revision:null},{url:"assets/custom_img_8.f39cf452.png",revision:null},{url:"assets/custom_img_9.9ebbc7c6.png",revision:null},{url:"assets/download_img_1.6f3b10a5.png",revision:null},{url:"assets/download_img_2.64ee6991.png",revision:null},{url:"assets/download_img.b46b56c9.png",revision:null},{url:"assets/frontend_base_JS常用API.md.492c3db7.js",revision:null},{url:"assets/frontend_base_JS常用API.md.492c3db7.lean.js",revision:null},{url:"assets/frontend_base_前端笔记.md.411f59fa.js",revision:null},{url:"assets/frontend_base_前端笔记.md.411f59fa.lean.js",revision:null},{url:"assets/frontend_browser_basics.md.b7dd453e.js",revision:null},{url:"assets/frontend_browser_basics.md.b7dd453e.lean.js",revision:null},{url:"assets/frontend_browser_cache.md.253ee004.js",revision:null},{url:"assets/frontend_browser_cache.md.253ee004.lean.js",revision:null},{url:"assets/frontend_browser_storage.md.6ba0e8d3.js",revision:null},{url:"assets/frontend_browser_storage.md.6ba0e8d3.lean.js",revision:null},{url:"assets/frontend_build_monorepo_quickstart.md.fe0ddf76.js",revision:null},{url:"assets/frontend_build_monorepo_quickstart.md.fe0ddf76.lean.js",revision:null},{url:"assets/frontend_build_monorepo_turborepo.md.3b013cc8.js",revision:null},{url:"assets/frontend_build_monorepo_turborepo.md.3b013cc8.lean.js",revision:null},{url:"assets/frontend_build_rollup_lib-js.md.660e551c.js",revision:null},{url:"assets/frontend_build_rollup_lib-js.md.660e551c.lean.js",revision:null},{url:"assets/frontend_build_rollup_lib-ts.md.9097efb1.js",revision:null},{url:"assets/frontend_build_rollup_lib-ts.md.9097efb1.lean.js",revision:null},{url:"assets/frontend_build_rollup_quickstart.md.776992c2.js",revision:null},{url:"assets/frontend_build_rollup_quickstart.md.776992c2.lean.js",revision:null},{url:"assets/frontend_build_vite_ts.md.51393960.js",revision:null},{url:"assets/frontend_build_vite_ts.md.51393960.lean.js",revision:null},{url:"assets/frontend_build_webpack_FAQ.md.e117f4c5.js",revision:null},{url:"assets/frontend_build_webpack_FAQ.md.e117f4c5.lean.js",revision:null},{url:"assets/frontend_build_webpack_lib-icon.md.f71dca73.js",revision:null},{url:"assets/frontend_build_webpack_lib-icon.md.f71dca73.lean.js",revision:null},{url:"assets/frontend_code_debounce-throttle.md.72f083ff.js",revision:null},{url:"assets/frontend_code_debounce-throttle.md.72f083ff.lean.js",revision:null},{url:"assets/frontend_code_excel-json.md.8adf147a.js",revision:null},{url:"assets/frontend_code_excel-json.md.8adf147a.lean.js",revision:null},{url:"assets/frontend_code_image-lazy.md.a0533c1d.js",revision:null},{url:"assets/frontend_code_image-lazy.md.a0533c1d.lean.js",revision:null},{url:"assets/frontend_code_list-tree.md.14e6ca14.js",revision:null},{url:"assets/frontend_code_list-tree.md.14e6ca14.lean.js",revision:null},{url:"assets/frontend_code_others.md.f0af6094.js",revision:null},{url:"assets/frontend_code_others.md.f0af6094.lean.js",revision:null},{url:"assets/frontend_code_pretter.md.4ecb44b4.js",revision:null},{url:"assets/frontend_code_pretter.md.4ecb44b4.lean.js",revision:null},{url:"assets/frontend_css_selector.md.68e5c88f.js",revision:null},{url:"assets/frontend_css_selector.md.68e5c88f.lean.js",revision:null},{url:"assets/frontend_css_weight.md.fdc6e28b.js",revision:null},{url:"assets/frontend_css_weight.md.fdc6e28b.lean.js",revision:null},{url:"assets/frontend_html_index.md.664e1f67.js",revision:null},{url:"assets/frontend_html_index.md.664e1f67.lean.js",revision:null},{url:"assets/frontend_index.md.bfd06447.js",revision:null},{url:"assets/frontend_index.md.bfd06447.lean.js",revision:null},{url:"assets/frontend_javascript_ajax.md.ac5e781f.js",revision:null},{url:"assets/frontend_javascript_ajax.md.ac5e781f.lean.js",revision:null},{url:"assets/frontend_javascript_array.md.1d7efffc.js",revision:null},{url:"assets/frontend_javascript_array.md.1d7efffc.lean.js",revision:null},{url:"assets/frontend_javascript_binary.md.5d1a5c4a.js",revision:null},{url:"assets/frontend_javascript_binary.md.5d1a5c4a.lean.js",revision:null},{url:"assets/frontend_javascript_BOMObserver.md.5329718e.js",revision:null},{url:"assets/frontend_javascript_BOMObserver.md.5329718e.lean.js",revision:null},{url:"assets/frontend_javascript_CallStack.md.53412ea5.js",revision:null},{url:"assets/frontend_javascript_CallStack.md.53412ea5.lean.js",revision:null},{url:"assets/frontend_javascript_dictionary.md.ee870582.js",revision:null},{url:"assets/frontend_javascript_dictionary.md.ee870582.lean.js",revision:null},{url:"assets/frontend_javascript_ElementPosition.md.1fe620e3.js",revision:null},{url:"assets/frontend_javascript_ElementPosition.md.1fe620e3.lean.js",revision:null},{url:"assets/frontend_javascript_ES6_.md.c1394413.js",revision:null},{url:"assets/frontend_javascript_ES6_.md.c1394413.lean.js",revision:null},{url:"assets/frontend_javascript_EventLoop.md.64a5f150.js",revision:null},{url:"assets/frontend_javascript_EventLoop.md.64a5f150.lean.js",revision:null},{url:"assets/frontend_javascript_fetch.md.5ebce04a.js",revision:null},{url:"assets/frontend_javascript_fetch.md.5ebce04a.lean.js",revision:null},{url:"assets/frontend_javascript_object.md.0c7bf309.js",revision:null},{url:"assets/frontend_javascript_object.md.0c7bf309.lean.js",revision:null},{url:"assets/frontend_javascript_promise.md.f0037737.js",revision:null},{url:"assets/frontend_javascript_promise.md.f0037737.lean.js",revision:null},{url:"assets/frontend_javascript_prototype.md.8a9bbb60.js",revision:null},{url:"assets/frontend_javascript_prototype.md.8a9bbb60.lean.js",revision:null},{url:"assets/frontend_javascript_scope.md.00f3e847.js",revision:null},{url:"assets/frontend_javascript_scope.md.00f3e847.lean.js",revision:null},{url:"assets/frontend_javascript_string.md.53f24bba.js",revision:null},{url:"assets/frontend_javascript_string.md.53f24bba.lean.js",revision:null},{url:"assets/frontend_network_cors.md.9da03918.js",revision:null},{url:"assets/frontend_network_cors.md.9da03918.lean.js",revision:null},{url:"assets/frontend_network_encryption.md.8829f93e.js",revision:null},{url:"assets/frontend_network_encryption.md.8829f93e.lean.js",revision:null},{url:"assets/frontend_network_http.md.c68b3412.js",revision:null},{url:"assets/frontend_network_http.md.c68b3412.lean.js",revision:null},{url:"assets/frontend_network_KeepAlive.md.9ed52a75.js",revision:null},{url:"assets/frontend_network_KeepAlive.md.9ed52a75.lean.js",revision:null},{url:"assets/frontend_network_request.md.0c18c716.js",revision:null},{url:"assets/frontend_network_request.md.0c18c716.lean.js",revision:null},{url:"assets/frontend_network_security.md.a816111c.js",revision:null},{url:"assets/frontend_network_security.md.a816111c.lean.js",revision:null},{url:"assets/frontend_network_tcp.md.a4c52776.js",revision:null},{url:"assets/frontend_network_tcp.md.a4c52776.lean.js",revision:null},{url:"assets/frontend_npm_changesets.md.58efb7de.js",revision:null},{url:"assets/frontend_npm_changesets.md.58efb7de.lean.js",revision:null},{url:"assets/frontend_npm_cli.md.2fdce8f3.js",revision:null},{url:"assets/frontend_npm_cli.md.2fdce8f3.lean.js",revision:null},{url:"assets/frontend_npm_FAQ.md.aadcd4a6.js",revision:null},{url:"assets/frontend_npm_FAQ.md.aadcd4a6.lean.js",revision:null},{url:"assets/frontend_npm_libs.md.8edb0dcf.js",revision:null},{url:"assets/frontend_npm_libs.md.8edb0dcf.lean.js",revision:null},{url:"assets/frontend_npm_license.md.51d20136.js",revision:null},{url:"assets/frontend_npm_license.md.51d20136.lean.js",revision:null},{url:"assets/frontend_npm_package-exports.md.fdd0527b.js",revision:null},{url:"assets/frontend_npm_package-exports.md.fdd0527b.lean.js",revision:null},{url:"assets/frontend_npm_package-json.md.b289cecf.js",revision:null},{url:"assets/frontend_npm_package-json.md.b289cecf.lean.js",revision:null},{url:"assets/frontend_npm_package-manager.md.c9587682.js",revision:null},{url:"assets/frontend_npm_package-manager.md.c9587682.lean.js",revision:null},{url:"assets/frontend_npm_package-patch.md.875e2dfd.js",revision:null},{url:"assets/frontend_npm_package-patch.md.875e2dfd.lean.js",revision:null},{url:"assets/frontend_npm_release-it.md.e892e037.js",revision:null},{url:"assets/frontend_npm_release-it.md.e892e037.lean.js",revision:null},{url:"assets/frontend_npm_SemVer.md.08853267.js",revision:null},{url:"assets/frontend_npm_SemVer.md.08853267.lean.js",revision:null},{url:"assets/frontend_Promise_Promise学习笔记.md.180620ef.js",revision:null},{url:"assets/frontend_Promise_Promise学习笔记.md.180620ef.lean.js",revision:null},{url:"assets/frontend_regex_basics.md.c8fe2040.js",revision:null},{url:"assets/frontend_regex_basics.md.c8fe2040.lean.js",revision:null},{url:"assets/frontend_regex_use.md.cfe41f8e.js",revision:null},{url:"assets/frontend_regex_use.md.cfe41f8e.lean.js",revision:null},{url:"assets/frontend_uncategorized_url-preview.md.99cb781b.js",revision:null},{url:"assets/frontend_uncategorized_url-preview.md.99cb781b.lean.js",revision:null},{url:"assets/frontend_vue_vue2-components.md.2211f9c4.js",revision:null},{url:"assets/frontend_vue_vue2-components.md.2211f9c4.lean.js",revision:null},{url:"assets/frontend_vue_Vue2基础笔记.md.f583ad9c.js",revision:null},{url:"assets/frontend_vue_Vue2基础笔记.md.f583ad9c.lean.js",revision:null},{url:"assets/frontend_vue_Vue3基础笔记.md.c8c2d1d7.js",revision:null},{url:"assets/frontend_vue_Vue3基础笔记.md.c8c2d1d7.lean.js",revision:null},{url:"assets/img_1.5e390f4e.png",revision:null},{url:"assets/img_1.7a3ebcab.png",revision:null},{url:"assets/img_1.7ff297cb.png",revision:null},{url:"assets/img_1.b295697c.png",revision:null},{url:"assets/img_10.200e566d.png",revision:null},{url:"assets/img_2.2810f483.png",revision:null},{url:"assets/img_2.55110f2a.png",revision:null},{url:"assets/img_2.e7b91dcb.png",revision:null},{url:"assets/img_3.8118008d.png",revision:null},{url:"assets/img_3.e18870c4.png",revision:null},{url:"assets/img_4.5f8c656c.png",revision:null},{url:"assets/img_4.726c4310.png",revision:null},{url:"assets/img_5.2dbf15aa.png",revision:null},{url:"assets/img_5.d8f884e8.png",revision:null},{url:"assets/img_6.0ade014a.png",revision:null},{url:"assets/img_6.0bbbfc14.png",revision:null},{url:"assets/img_7.6a52f8bc.png",revision:null},{url:"assets/img_7.b6f57f5c.png",revision:null},{url:"assets/img_8.2991d750.png",revision:null},{url:"assets/img_9.a4f5bf01.png",revision:null},{url:"assets/img.2e8a66d0.png",revision:null},{url:"assets/img.65a9c1e9.png",revision:null},{url:"assets/img.7effe2e8.png",revision:null},{url:"assets/img.8a89d19f.png",revision:null},{url:"assets/img.a4ef83c3.png",revision:null},{url:"assets/img.fa4a579c.png",revision:null},{url:"assets/index.md.02719a7d.js",revision:null},{url:"assets/index.md.02719a7d.lean.js",revision:null},{url:"assets/install_img_0.70e8c1af.png",revision:null},{url:"assets/install_img_1.99713b77.png",revision:null},{url:"assets/install_img_10.f3eb1b6b.png",revision:null},{url:"assets/install_img_11.d097a64e.png",revision:null},{url:"assets/install_img_12.e9657aae.png",revision:null},{url:"assets/install_img_13.08ffcc88.png",revision:null},{url:"assets/install_img_14.f1461e36.png",revision:null},{url:"assets/install_img_15.437fbd05.png",revision:null},{url:"assets/install_img_16.8e228a7b.png",revision:null},{url:"assets/install_img_17.2ce62dd7.png",revision:null},{url:"assets/install_img_18.2f2f5f60.png",revision:null},{url:"assets/install_img_19.5ac4c6d1.png",revision:null},{url:"assets/install_img_2.6d44774c.png",revision:null},{url:"assets/install_img_20.4466232f.png",revision:null},{url:"assets/install_img_3.8b8b4477.png",revision:null},{url:"assets/install_img_4.89ea364c.png",revision:null},{url:"assets/install_img_5.54926192.png",revision:null},{url:"assets/install_img_6.22305e60.png",revision:null},{url:"assets/install_img_7.42ad31bd.png",revision:null},{url:"assets/install_img_8.5486d534.png",revision:null},{url:"assets/install_img_9.666141db.png",revision:null},{url:"assets/install_img.a7659d1c.png",revision:null},{url:"assets/inter-italic-cyrillic-ext.33bd5a8e.woff2",revision:null},{url:"assets/inter-italic-cyrillic.ea42a392.woff2",revision:null},{url:"assets/inter-italic-greek-ext.4fbe9427.woff2",revision:null},{url:"assets/inter-italic-greek.8f4463c4.woff2",revision:null},{url:"assets/inter-italic-latin-ext.bd8920cc.woff2",revision:null},{url:"assets/inter-italic-latin.bd3b6f56.woff2",revision:null},{url:"assets/inter-italic-vietnamese.6ce511fb.woff2",revision:null},{url:"assets/inter-roman-cyrillic-ext.e75737ce.woff2",revision:null},{url:"assets/inter-roman-cyrillic.5f2c6c8c.woff2",revision:null},{url:"assets/inter-roman-greek-ext.ab0619bc.woff2",revision:null},{url:"assets/inter-roman-greek.d5a6d92a.woff2",revision:null},{url:"assets/inter-roman-latin-ext.0030eebd.woff2",revision:null},{url:"assets/inter-roman-latin.2ed14f66.woff2",revision:null},{url:"assets/inter-roman-vietnamese.14ce25a6.woff2",revision:null},{url:"assets/navigation_index.md.6061a6d4.js",revision:null},{url:"assets/navigation_index.md.6061a6d4.lean.js",revision:null},{url:"assets/npm_license_img.507c89ef.png",revision:null},{url:"assets/origin_index.md.94b96332.js",revision:null},{url:"assets/origin_index.md.94b96332.lean.js",revision:null},{url:"assets/skill_awesome_software_好用软件.md.58884ffc.js",revision:null},{url:"assets/skill_awesome_software_好用软件.md.58884ffc.lean.js",revision:null},{url:"assets/skill_github_series_github-action使用教程_github-action使用教程.md.0ee8a884.js",revision:null},{url:"assets/skill_github_series_github-action使用教程_github-action使用教程.md.0ee8a884.lean.js",revision:null},{url:"assets/skill_github_series_github访问加速_github访问加速.md.24ee9ff0.js",revision:null},{url:"assets/skill_github_series_github访问加速_github访问加速.md.24ee9ff0.lean.js",revision:null},{url:"assets/skill_github_series_github高级搜索_GitHub 搜索技巧.md.9b202be2.js",revision:null},{url:"assets/skill_github_series_github高级搜索_GitHub 搜索技巧.md.9b202be2.lean.js",revision:null},{url:"assets/skill_github_series_vitepress-blog_AppOrGameDev-Blog更新记录.md.533ff392.js",revision:null},{url:"assets/skill_github_series_vitepress-blog_AppOrGameDev-Blog更新记录.md.533ff392.lean.js",revision:null},{url:"assets/skill_index.md.839eb9ee.js",revision:null},{url:"assets/skill_index.md.839eb9ee.lean.js",revision:null},{url:"assets/skill_typora_Typora免费安装包地址及其主题.md.a7468685.js",revision:null},{url:"assets/skill_typora_Typora免费安装包地址及其主题.md.a7468685.lean.js",revision:null},{url:"assets/skill_visio_Office Visio使用技巧.md.6aeb2e76.js",revision:null},{url:"assets/skill_visio_Office Visio使用技巧.md.6aeb2e76.lean.js",revision:null},{url:"assets/skill_windows_windows常用设置.md.593c1b84.js",revision:null},{url:"assets/skill_windows_windows常用设置.md.593c1b84.lean.js",revision:null},{url:"assets/style.2c8b069e.css",revision:null},{url:"assets/Theme_Vue_download.1b42f6a0.png",revision:null},{url:"assets/Typora_Free.be6843c5.png",revision:null},{url:"assets/Typora_Theme_Filder.d56df414.png",revision:null},{url:"assets/Typora_Theme_Vue.0e0773dd.png",revision:null},{url:"assets/Typora_Theme安装后的效果.6b0cf324.png",revision:null},{url:"backend/index.html",revision:"94b63e7ac09baebe3083383f76c45a4a"},{url:"backend/Java/(红)悟空CRM本地运行环境搭建.html",revision:"4c44f5ad607db4a4b234ccba12f1ce8d"},{url:"backend/Java/frp内网穿透/内网穿透.html",revision:"4cd9d1224a39cd474e164aa3f9fb9c94"},{url:"backend/Java/Java笔记.html",revision:"3e2d12e135c265f29b28b5d40a3c2287"},{url:"backend/Java/Oracle/oracle注意事项.html",revision:"1658c4bddc817947dae169f50884843e"},{url:"backend/Java/RabbitMQ/RabbitMQ笔记.html",revision:"ed25df8abdfcbe3d58d3838d7ae6ed85"},{url:"backend/Java/系统设计案例.html",revision:"4eb0b0439d4e4200b6fb2fa04b8784c2"},{url:"backend/koa/start.html",revision:"80b439454d1888ebf9b782cecc5e10c9"},{url:"backend/koa/use.html",revision:"2e75cee702ee8a1769370933ae032494"},{url:"backend/mysql/install.html",revision:"d162e1ba15555c7edb2fadf5d271472b"},{url:"backend/node/env.html",revision:"939e134c6bf80aa2f2b8d068ce1e025c"},{url:"backend/node/process.html",revision:"653c50410210852fc748eac4acd063f8"},{url:"backend/redis/install.html",revision:"15fba1e48a7b2d9e279c6acc509a84f6"},{url:"cli/git/cli.html",revision:"3bf6a8764c90ce92f7365d0603af593d"},{url:"cli/git/commitlint.html",revision:"73aa8d1b9cd3635d4ed63867ac0f2ef4"},{url:"cli/git/FAQ.html",revision:"225015b511e41474e62b4df5afa65d14"},{url:"cli/git/hub.html",revision:"125674e5d2c63001273a31f100ae78cf"},{url:"cli/git/use.html",revision:"8bdafa0cfc0b428c2b84b681d8d6e74f"},{url:"cli/index.html",revision:"df919aa4708981d6a77ae2d5b3a7e24d"},{url:"cli/linux/cli.html",revision:"d2eeb550b75904ff6de2efd00facc257"},{url:"cli/linux/use.html",revision:"12dd76e5524a6e52e162cd4de870e2af"},{url:"cli/windows/cli.html",revision:"fa08b849b54290f1605286d19aafba64"},{url:"cli/windows/FAQ.html",revision:"8d9c4807a69fe63ef03715511d53b5ae"},{url:"favicon.ico",revision:"710702509c00e4fe7442447e555df1ff"},{url:"frontend/base/JS常用API.html",revision:"871d6cbd92492db99f006bdfa2618d1a"},{url:"frontend/base/前端笔记.html",revision:"d9d2f7dea56e53ca670e0cdfe2078cba"},{url:"frontend/browser/basics.html",revision:"d2437d3b8e91c20bd8eadba288ffb262"},{url:"frontend/browser/cache.html",revision:"e0041e6c0a5073b2fa52d8a33477a878"},{url:"frontend/browser/storage.html",revision:"a98bcf492dbd358c00ee1a0fe735a68e"},{url:"frontend/build/monorepo/quickstart.html",revision:"2db4e0b6db0cc5ead6e503ab0f407fbe"},{url:"frontend/build/monorepo/turborepo.html",revision:"8cff72848afe54d2c7016ebfae2bb911"},{url:"frontend/build/rollup/lib-js.html",revision:"598444250daf9afa83b517c4a9ab8748"},{url:"frontend/build/rollup/lib-ts.html",revision:"1febccc42359fd10b80b70ce9f1ff875"},{url:"frontend/build/rollup/quickstart.html",revision:"cf55c3a50e79b9534734abc13159a115"},{url:"frontend/build/vite/ts.html",revision:"c8b20171f7f4d31a1f6c887c0e080074"},{url:"frontend/build/webpack/FAQ.html",revision:"c3d705c63c0978cb88b918b054f19654"},{url:"frontend/build/webpack/lib-icon.html",revision:"b1ad7bc2c3166b8493c1bbce815c288e"},{url:"frontend/code/debounce-throttle.html",revision:"ec3d8034a9b3e1893ba5c543488a31ce"},{url:"frontend/code/excel-json.html",revision:"3a926ae67d10d330219f3fb84ed86fbb"},{url:"frontend/code/image-lazy.html",revision:"579cf7854cb2102e56bd733a1f9153e8"},{url:"frontend/code/list-tree.html",revision:"a001f343f29e581be746cede6d50d73f"},{url:"frontend/code/others.html",revision:"9092f7be56d9327bf722b17129c8461a"},{url:"frontend/code/pretter.html",revision:"849b62fcb1b9a0f1db20a70d7601742c"},{url:"frontend/css/selector.html",revision:"edfcc3f5b2e3eb288f60ed5e350765c8"},{url:"frontend/css/weight.html",revision:"1342cb27105c8ebb8f0be990d6c3d8c4"},{url:"frontend/html/index.html",revision:"077d3b9916f09bd84b9f3e88027bceae"},{url:"frontend/index.html",revision:"f59324234e61fa400d451b4be3fad9c1"},{url:"frontend/javascript/ajax.html",revision:"fbd83ab4f04abf954ff11dc534f2fe8f"},{url:"frontend/javascript/array.html",revision:"0ecc37e54190e0e9540c26da5efdf5ed"},{url:"frontend/javascript/binary.html",revision:"717c3c5073359ad7b8fbb7c0ee05d4b4"},{url:"frontend/javascript/BOMObserver.html",revision:"e16768186750d5a14ebda36310ce4eed"},{url:"frontend/javascript/CallStack.html",revision:"d7ebcc625ce6d958f8bf2799e299bda4"},{url:"frontend/javascript/dictionary.html",revision:"9f50be59df4c3662098f77b68e345662"},{url:"frontend/javascript/ElementPosition.html",revision:"06cab965854aeda82fea5231f21773e9"},{url:"frontend/javascript/ES6+.html",revision:"b2f4cc300c31af190e48fd2001270f1c"},{url:"frontend/javascript/EventLoop.html",revision:"12ab10441231d9c238ddfdfdd123a418"},{url:"frontend/javascript/fetch.html",revision:"325d9572f3f0b65bd92fd3e881981e5c"},{url:"frontend/javascript/object.html",revision:"da6d381f8b121b36673cd981c76ed50e"},{url:"frontend/javascript/promise.html",revision:"daacc01c507c561f06ba4a49d43213cc"},{url:"frontend/javascript/prototype.html",revision:"a8bcd2f9cda9a9a4fa3f0ce779d7ff76"},{url:"frontend/javascript/scope.html",revision:"1a805c1a0f9932253d5781abfcc48bb9"},{url:"frontend/javascript/string.html",revision:"bc9d092ec9ab62669e1dd7bcca19e758"},{url:"frontend/network/cors.html",revision:"904c3be321298fec89ea1d48970ed126"},{url:"frontend/network/encryption.html",revision:"86c41c1b3c8e023b473cf0f3d9418110"},{url:"frontend/network/http.html",revision:"f200730058075aaa3008ed09ca0fdd64"},{url:"frontend/network/KeepAlive.html",revision:"f0da67a9985c6b6b18ff05b6bd89840f"},{url:"frontend/network/request.html",revision:"5abcacbc861f558d86cef874ccee6959"},{url:"frontend/network/security.html",revision:"7c2842d7857003a32aed9598ef638899"},{url:"frontend/network/tcp.html",revision:"e509f282be7752d100628660dd9e8f3d"},{url:"frontend/npm/changesets.html",revision:"8d71bcae8b820c77deb291b4ab472458"},{url:"frontend/npm/cli.html",revision:"a4f75a485ca96c6e5e2e948990bc8260"},{url:"frontend/npm/FAQ.html",revision:"a16f0f893205cf8d050ab46cd133b180"},{url:"frontend/npm/libs.html",revision:"09e034fbe854ed9116e1c4723f33bd45"},{url:"frontend/npm/license.html",revision:"7076e8d703ccb720af89dfd62bc74f46"},{url:"frontend/npm/package-exports.html",revision:"7eacedf10883adc8a4abd2ef65f4febd"},{url:"frontend/npm/package-json.html",revision:"f3035e2e1bf659db3220690d64aa2ee7"},{url:"frontend/npm/package-manager.html",revision:"b7a4eb43938e826772c8bfd22a44c459"},{url:"frontend/npm/package-patch.html",revision:"04c60c6edb4d13463e24f1b984deff35"},{url:"frontend/npm/release-it.html",revision:"218696099d7bfca8ef081b7979c0ce25"},{url:"frontend/npm/SemVer.html",revision:"976b638aaddb3eb41caec35013e42b60"},{url:"frontend/Promise/Promise学习笔记.html",revision:"36b9e9dca39b6ae8605396576f1d1555"},{url:"frontend/regex/basics.html",revision:"bd929d7dae270f61a897479164d470be"},{url:"frontend/regex/use.html",revision:"8f50b1cfa2a97228bcb7b632cfe968a2"},{url:"frontend/uncategorized/url-preview.html",revision:"bfb7669c3e99534fe4c664e31bc6afc3"},{url:"frontend/vue/vue2-components.html",revision:"3a1420b844493b512910e367466f7fe8"},{url:"frontend/vue/Vue2基础笔记.html",revision:"8e9ed9c1a3788063720b0130639b098a"},{url:"frontend/vue/Vue3基础笔记.html",revision:"b9e18a6c1a0ca29227fcc00d36bad61b"},{url:"giscus/noborder_dark.css",revision:"0381017c9f23173fc52539b760cbc7b3"},{url:"giscus/noborder_light.css",revision:"1514a7d3868ce0bc5faae416baaf6a56"},{url:"icons/create.svg",revision:"4596b23f730edc20645b66213f234a9d"},{url:"icons/tags.svg",revision:"a89835a6d5f3d0f6314cb20684bfd01c"},{url:"icons/update.svg",revision:"13a037f2fbd6ef84d88997aa4cc27339"},{url:"icons/zodiac/dog.svg",revision:"7f255c221ebc536ae168bd061ce4fcd4"},{url:"icons/zodiac/dragon.svg",revision:"a6811eb3e6ac9f931f8510604b35990e"},{url:"icons/zodiac/goat.svg",revision:"8d7e96e3d87b51fc866a9706747051c0"},{url:"icons/zodiac/horse.svg",revision:"f0d014be2cf1f15ef06214b1eb480062"},{url:"icons/zodiac/monkey.svg",revision:"1160fea5b17cd96f5df29508bd455586"},{url:"icons/zodiac/ox.svg",revision:"e62223d23b89c74e26812692e78754e9"},{url:"icons/zodiac/pig.svg",revision:"ab2396b4707b864301dbd5eda5732b12"},{url:"icons/zodiac/rabbit.svg",revision:"3a89782cda47e40f4a7732ff9ba0553f"},{url:"icons/zodiac/rat.svg",revision:"45e7451cea0ef25237e19ff13fedc7e0"},{url:"icons/zodiac/rooster.svg",revision:"15d1a5484eea17d9ecf87df3841996f1"},{url:"icons/zodiac/snake.svg",revision:"abbce3bed7859d23b33c1c86517f01e2"},{url:"icons/zodiac/tiger.svg",revision:"5e9bb5ee0924f9b96b2a86e9b645bc55"},{url:"index.html",revision:"694cf97839b086378fa7174184f45753"},{url:"live2d/core/live2dCubismCore.min.js",revision:"1ae0f80720323fd164deb9c2af05848a"},{url:"live2d/models/hijiki/hijiki.2048/texture_00.png",revision:"0cc2f2880ef801c9bdcdcfddcdddafb3"},{url:"live2d/models/tororo/tororo.2048/texture_00.png",revision:"ee9c6155217d874a3825b07dd672a029"},{url:"logo.default.svg",revision:"ef0c0591eb124f410ea47e02de01204b"},{url:"logo.png",revision:"533c39e07c31bdd9d102f12bf52122b3"},{url:"logo.svg",revision:"ef0c0591eb124f410ea47e02de01204b"},{url:"navigation/index.html",revision:"2e68963408a2fc8ec97c99dfc098e1a3"},{url:"origin/index.html",revision:"4113772497b08dff09903c8a7fe2ea1a"},{url:"pwa-192x192.svg",revision:"0c6fc3b68a755f32e442cb53f80572a1"},{url:"pwa-512x512.svg",revision:"609a4e4f3c13f4aa9d0b85eefc15a53e"},{url:"skill/awesome_software/好用软件.html",revision:"90e954e894e88c20d64722222174eb87"},{url:"skill/github_series/github-action使用教程/github-action使用教程.html",revision:"b4698174fc91dab26c320df701a90b30"},{url:"skill/github_series/github访问加速/github访问加速.html",revision:"43c7f5f6212b36c2ab58b934ce298653"},{url:"skill/github_series/github高级搜索/GitHub 搜索技巧.html",revision:"2e3cf43b14959d49a9c3694dd504787e"},{url:"skill/github_series/vitepress-blog/AppOrGameDev-Blog更新记录.html",revision:"3a9fffd1d58701698523b0a708572fa8"},{url:"skill/index.html",revision:"878c13fd1d912a91b6ba2ff7df28fe05"},{url:"skill/typora/Typora免费安装包地址及其主题.html",revision:"1e1ec85730a55ad170a67cf487d514d3"},{url:"skill/visio/Office Visio使用技巧.html",revision:"40c4c7a731fb0b89d50ccee0e98be088"},{url:"skill/windows/windows常用设置.html",revision:"4e7576405fc536e06f4c3dfd7d4520fe"},{url:"logo.svg",revision:"ef0c0591eb124f410ea47e02de01204b"},{url:"manifest.webmanifest",revision:"0d11bc0f310f0a653f1b9314aaf82311"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({sameOrigin:e,url:s})=>e&&["images","icons","svg"].some((e=>s.pathname.startsWith(`/assets/${e}/`)))),new e.StaleWhileRevalidate({cacheName:"assets-images-cache",plugins:[new e.ExpirationPlugin({purgeOnQuotaError:!0,maxEntries:256,maxAgeSeconds:604800}),new e.CacheableResponsePlugin({statuses:[200]})]}),"GET"),e.registerRoute(/^https:\/\/AppOrGameDev.github.io\/.*/i,new e.StaleWhileRevalidate({cacheName:"gh-images-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:86400}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/someInterface/i,new e.StaleWhileRevalidate({cacheName:"interface-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(js|css|ts)/,new e.StaleWhileRevalidate({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.StaleWhileRevalidate({cacheName:"image-cache",plugins:[]}),"GET")}));
