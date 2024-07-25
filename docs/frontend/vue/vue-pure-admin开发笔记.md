# vue-pure-admin 开发笔记

## 官方资料

- 官方仓库`git clone git@github.com:pure-admin/vue-pure-admin.git -b main`
- [官方文档-推荐看这个](https://pure-admin.github.io/pure-admin-doc)
  - 文档仓库`git clone git@github.com:pure-admin/pure-admin-doc.git`;本地部署访问会快些

- [官方文档-@pureadmin/utils](https://pure-admin-utils.netlify.app/)
  - 文档仓库`git clone git@github.com:pure-admin/pure-admin-utils-docs.git`;本地部署访问会快些


## 笔记

`https://codeload.github.com/AppOrGameDev/pure-admin-doc/zip/refs/heads/master`

## 小技巧Tips

- `所有$开头的函数,都是给开发人员使用的`
- `官方文档直接git clone报错时,可以采用开启迷雾通+download ZIP包的形式下载源代码`
- `每个项目独立指定node版本;不依赖node环境变量配置`
  - `nvm虽然可以切换Node版本;但不支持同时运行两个不同Node版本的项目`
  - <strong style="color:green;">推荐使用nvm-desktop;除了基本的切换Node版本能力,还有独特优势:同时运行不同Node版本项目;有现代化UI界面</strong>
    - [nvm-desktop GitHub](https://github.com/1111mp/nvm-desktop)
    - [nvm-desktop 下载](https://github.com/1111mp/nvm-desktop/releases)
    - 使用方法
      - 为nvm-desktop配置环境变量;对应的命令行工具保存目录`C:\Users\XUXIAO\.nvmd\bin\`
        - `NVMD_HOME   C:\Users\XUXIAO\.nvmd`
        - `Path添加  %NVMD_HOMNE%\bin`
      - 版本号后面跟`Iron`表示长期维护版本
      - 在前端项目根目录下执行`nvmd use [node_version或别名] --project`
      - 启动项目``
  - <strong style="color:green;">fnm:极快性能以及简洁命令行体验</strong>
    - [win安装fnm](https://www.oldestdream.com/2022/04/windows-install-nodejs-with-fnm/)
  - `WebStorm可以独立为项目指定运行环境;类似IDEA指定JDK版本一样`
