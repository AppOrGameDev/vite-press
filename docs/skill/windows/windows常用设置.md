# 我的台式机共享目录

```txt
\\10.233.100.133
username:Dell
password:Dell
```

## win10/11设置本地用户登录密码

```txt
个性化->账户->登录选项->密码->新增/更改密码
```

## win10/11本地用户开机自动登录

#### win11 不显示 **“要使用本计算机，用户必须输入用户名和密码(E)”** 解决办法

```txt
win+R --> regedit --> 进入注册表后依次展开HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\PasswordLess\Device
双击打开“Device”下"DeviePasswordLessBuildVersion"将当前值十六进制的2改为0，接着点击“确定”保存注册表，并重新启动电脑。
```

![](img/Snipaste_2023-10-31_09-01-24.jpg)

```txt
重启计算机后，按“Win+R”，打开运行窗口，输入“netplwiz”或者"Control Userpasswords2"，按回车键，在出现的对话框中就可以看到“要使用本计算机，用户必须输入用户名和密码(E)”选项已经出现了
```

![](img/Snipaste_2023-10-31_09-03-11.jpg)

> 如果想要达到使用微软账户自动登录的效果:
>
> 1. windows系统本身要登录微软账户
> 2. 按上面的操作,在最后设置登录用户名和密码时,使用微软账户的用户名(邮箱地址)和密码

## win11开启右键
```txt
reg add HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32 /ve /d "" /f
```

Win10 关闭`此电脑`下的视频,图片等无用目录

文件名为`reg`

`隐藏Win10此电脑视频、图片等6个文件夹`

```txt
Windows Registry Editor Version 5.00
[-HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{f86fa3ab-70d2-4fc7-9c99-fcbf05467f3a}]
[-HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{d3162b92-9365-467a-956b-92703aca08af}]
[-HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{B4BFCC3A-DB2C-424C-B029-7FE99A87C641}]
[-HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{3dfdf296-dbec-4fb4-81d1-6a3438bcf4de}]
[-HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{088e3905-0323-4b02-9826-5d99428e115f}]
[-HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{24ad3ad4-a569-4530-98e1-ab02f9417aa8}]
```

`显示Win10此电脑视频、图片等6个文件夹`

```txt
Windows Registry Editor Version 5.00
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{f86fa3ab-70d2-4fc7-9c99-fcbf05467f3a}]
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{d3162b92-9365-467a-956b-92703aca08af}]
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{B4BFCC3A-DB2C-424C-B029-7FE99A87C641}]
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{3dfdf296-dbec-4fb4-81d1-6a3438bcf4de}]
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{088e3905-0323-4b02-9826-5d99428e115f}]
[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\MyComputer\NameSpace\{24ad3ad4-a569-4530-98e1-ab02f9417aa8}]
```

## chrome 关闭左上角"搜索标签页"
1. chrome://flags/
2. chrome-refresh-2023
3. 搜索结果第一项设置为disable
4. Relaunch

## 安装docker desktop

`回家把自己的电脑安装上这个docker神器`

参考链接

https://zhuanlan.zhihu.com/p/663821762

https://docs.docker.com/desktop/release-notes/

下载 Docker Desktop 4.23.0.0版本

docker 镜像源配置

```json
{
  "builder": {
    "gc": {
      "defaultKeepStorage": "20GB",
      "enabled": true
    }
  },
  "experimental": false,
  "features": {
    "buildkit": true
  },
  "registry-mirrors": [
    "https://xxxxxx.mirror.aliyuncs.com",
    "https://docker.mirrors.ustc.edu.cn",
    "http://hub-mirror.c.163.com",
    "https://registry.docker-cn.com"
  ]
}
```

### 两台windows电脑实现远程桌面控制

##### 被控制电脑

`win+s`->`搜索 设置`-->`远程桌面`-->`开启`

![](img/PixPin_2023-12-30_16-42-47.jpg)

##### 控制电脑

`win+R`--><strong style="color:red;">mstsc</strong>`远程桌面链接 cmd命令`

`win+s`->`搜索 远程桌面连接`

![](img/PixPin_2023-12-30_16-49-59.jpg)

##### 异地组网软件 tailscale

- 可以使用GitHub账户注册登录

![](img/PixPin_2023-12-30_16-52-20.jpg)

##### windows开启启动时自动执行bat脚本

- win+r
- `shell:startup` 这个是用户的自动启动
  - `C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp\`这个是系统的自动启动

- 将编写好的bat脚本放到上面步骤的文件夹中
- 关机/重启-->验证效果
  - 我目前配置的是开启自动启动vite-press;配合上面的异地组网,就可以远程访问家里电脑部署的vite-press,速度比github.io的速度快上一些.
  - 后续可以自己编写bat脚本去实现开机时自动执行一些固定操作.

##### windows自带的杀毒软件如何不扫描/删除"特殊"软件

- 病毒和威胁防护-->病毒和威胁防护设置-->管理设置-->添加和删除排除项-->添加排除项-->选择你的软件目录

![](img/PixPin_2024-04-19_09-25-57.jpg)![](img/PixPin_2024-04-19_09-26-39.jpg)![](img/PixPin_2024-04-19_09-28-12.jpg)

##### G502海外版鼠标按键说明

- 滚轮后面的两个按键是调节DPI
- 侧键的前进后退是可用
- 大拇指对应的G6按键,可以临时调节DPI(降低)



### 鼠标实用小知识

- 鼠标滚轮(中键)是关闭标签(tab)页,(alt+tab关闭应用窗口)
- shift+鼠标滚轮 `水平滚动`
- 左键连击3下 `选中段落`
- 按住shift+鼠标点击开头和结束位置 `选中该区域`
- 按住ctrl+鼠标点击 `多选`
- 选中后，按住鼠标拖动 `复制`
- 按住ctrl+左键+超链接 `(新标签页)打开该链接`
- 按住alt+鼠标左键+滑动选中 `改变鼠标光标样式，选中超链接上的文字`
- 鼠标中键+超链接 `(新标签页)打开该链接`



### win10 右下角时间显示秒

- `win` + `R`;`regedit`
- `HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Advanced`
- 右侧新建一个DWORD(32位)值，并命名为`ShowSecondsInSystemClock`，双击打开将数值数据修改为`1`，确定保存
- `重启资源管理器`



### win11右下角显示年月日  时分秒

- 个性化-->任务栏-->任务栏行为-->在系统托盘时钟中显示秒数`勾选`



### windows遇到软件窗口跑到屏幕外面去了,怎么重置

- 用`alt`+`tab`键切换至移出去的窗口，将其激活，虽然看不到。
- 然后使用`windows`+`↑ (方向上键)`或者`windows`+`← (方向左键)`或者`windows `+`→ (方向右键)`即可将窗口移动至当前界面，并全屏或者或者左侧铺满或者右侧铺满显示。
