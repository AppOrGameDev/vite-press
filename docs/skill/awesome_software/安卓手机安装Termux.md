# 安卓手机安装Termux

- Termux官网
  - https://termux.dev/en/
  - https://github.com/termux/termux-app
    - [termux-app_v0.118.0+github-debug_arm64-v8a.apk](https://github.com/termux/termux-app/releases/download/v0.118.0/termux-app_v0.118.0+github-debug_arm64-v8a.apk)

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
# termux自动启动nginx
echo "nginx" >> ~/.bashrc 
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
- 个性化设置
  - 设置-->外观-->字体-->`JetBrains Mono ExtraBold`
  - 设置-->终端-->鼠标-->`右键菜单`

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

## Tabby使用FTP报permission defined

- 给反向代理的文件夹设置权限

```shell
# 给指定目录及其子目录赋权限
chmod -R 777 文件/目录
# 给指定目录及其子目录设置所属用户和用户组
chown -R user[:group] 文件/目录
```

- Tabby打开当前路径的FTP面板

```shell
# 进入~目录
cd ~

# ~/.bash_profile文件不存在则创建,存在则在最后追加
vi ~/.bash_profile
# 追加内容
# export PS1="$PS1\[\e]1337;CurrentDir="'$(pwd)\a\]'
# 检查内容追加是否正确
cat ~/.bash_profile

# ~/.zshrc文件不存在则创建,存在则在最后追加
vi ~/.zshrc
# 追加内容
# precmd () { echo -n "\x1b]1337;CurrentDir=$(pwd)\x07" }
# 检查内容追加是否正确
cat ~/.zshrc


# ~/.config/fish/config.fish文件不存在则创建,存在则在最后追加
# 这里涉及需要创建目录mkdir .config/fish
vi ~/.config/fish/config.fish
# 追加内容
# function __tabby_working_directory_reporting --on-event fish_prompt
#    echo -en "\e]1337;CurrentDir=$PWD\x7"
# end
# 检查内容追加是否正确
cat ~/.zshrc
```

### Tabby的FTP只能上传单个文件,因此需要配合解压命令

```shell
# 安装unzip
apt install unzip
# 解压到当前文件夹
unzip 压缩文件名
# 解压到指定文件夹
unzip 压缩文件名 -d 指定目录
```





## 验证PC访问安卓手机上的Nginx反向代理的静态资源(自测验证,可不要)

- 通过FTP上传index.html到反向代理的指定目录
- PC浏览器访问Nginx反向代理的URL地址，能访问到上面的index.html



## 手机连接WIFI使用固定IP,这样不用每次PC通过SSH连接手机都要修改IP地址

- 设置-->WLAN-->长按-->修改网络-->IP:静态-->直接保存
