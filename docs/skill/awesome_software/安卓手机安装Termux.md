# 安卓手机安装Termux

- Termux官网
  - https://termux.dev/en/
  - https://github.com/termux/termux-app

## Termux安装Nginx

```shell
# 安装nginx
apt install nginx
# 启用nginx
nginx
# 如果nginx启动遇到报错,执行下面语句
# CANNOT LINK EXECUTABLE "nginx": library "libssl.so.3" not found: needed by main executable;这个报错是需要升级Termux
apt-get update
apt-get upgrade
```

`启动完成后,手机浏览器输入http://127.0.0.1:8080;默认打开Nginx页面,就代表Nginx成功`

`每次启动Termux;都要手动执行nginx,来启动nginx`

- nginx.config的路径`/data/data/com.termux/files/usr/etc/nginx/nginx.conf`
  - nginx.conf是在Termux应用内,不在手机的文件管理中(搜索不到该文件)

- 相关参考文档(后台运行Termux)
  - https://cloud-atlas.readthedocs.io/zh-cn/latest/android/apps/termux_nginx.html

## Termux安装openssh

```shell
# 安装openssh
apt install openssh
pkg install openssh
# 启动ssh,默认端口号8022
sshd
# 查看用户名
whoami
# 记住u0_a629这个用户名
# 设置密码
passwd
# 123456
# 查看手机IP地址
ifconfig
# termux自动启动sshd
echo "sshd" >> ~/.bashrc 
```

`每次启动Termux;都要手动执行sshd,来启动openssh`

## 查看局域网内安卓手机的IP地址

- 设置-->长按连接的WIFI-->滑到最下面-->IP地址里面就`显示局域网IP`



# 局域网内PC通过SSH连接手机上Termux

## 安装跨平台(win,macos,linux)终端工具Tabby,并集成FTP

### Tabby

- https://tabby.sh/
- https://github.com/Eugeny/tabby
- 使用免安装(解压版本)`tabby-1.0.207-portable-x64.zip`

## 使用Tabby连接局域网手机上的Termux

- 设置-->配置和连接-->新建-->新配置
- 图标(可选) fas fa-mobile-retro
- 主机 10.233.100.36
- 端口 8022
- 用户名 u0_a629
- 密码 123456

### Tabby修改nginx.config文件

- `cd /data/data/com.termux/files/usr/etc/nginx/`
- 备份配置文件`cp nginx.conf nginx.conf.default`
- 安装vim `apt install vim`
- `vi nginx.conf`




