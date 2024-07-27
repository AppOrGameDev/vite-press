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
  - `docs/.vuepress/public/img/type/com1.jpg`这个文件com 1.jpg中间有个空格;我先临时改成com365.jpg;同目录下com2.jpg文件名也有问题修改成c236om.jpg就能正常clone下来了
  - package.json中dev 和 build命令需要把`export(mac/linux)`修改成`set(windows)`;[参考链接](https://blog.csdn.net/qq_32682301/article/details/122070928)
  - nginx代理`F:\xuxiao\code\pure-admin-doc\docs\.vuepress\dist`
    - [本地访问地址](http://localhost:8902/pure-admin-doc/)
    
    - [解决Nginx代理dist后样式丢失的问题](https://blog.csdn.net/August_802/article/details/129295056)
    
      - 修改`/docs/.vuepress/config.js`中`base: '/'`
    
      - Nginx中配置如下
    
        - ```config
          server {
              listen       8903;
              server_name  localhost;
          
              location / {
                  alias  F:/xuxiao/code/pure-admin-doc/docs/.vuepress/dist/;
                  try_files $uri $uri/ /index.html;
                  index index.html index.htm;
              }
          }
          ```
    
        - `因为项目的链接跳转是没有自定义前缀的URL;所以必须放在server的根路径下;只能通过加端口号来访问`  [参考教程](https://blog.csdn.net/August_802/article/details/129295056)
