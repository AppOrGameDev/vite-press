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
      - <strong style="color:red;">只能针对node和npm命令生效;对pnpm和yarn不生效.</strong>
    
  - ~~<strong style="color:red;">fnm:极快性能以及简洁命令行体验</strong>~~
    
    - [win安装fnm](https://www.oldestdream.com/2022/04/windows-install-nodejs-with-fnm/)
    
      - 下载fnm-windows.zip [fnm Releases GitHub](https://github.com/Schniz/fnm/releases)
    
      - 添加环境变量`FNM_HOME   F:\fnm\`;`Path 新增%FNM_HOME%`;测试fnm是否生效`fnm -V`
    
      - `git bash`中使用`fnm`
    
        - 进入用户目录;资源管理器输入`%USERPROFILE%`;回车
    
        - 新建`.bash_profile`文件;输入以下代码保存
    
        - ```shell
          eval $(fnm env | sed 1d)
          export PATH=$(cygpath $FNM_MULTISHELL_PATH):$PATH
          
          if [[ -f .node-version || -f .nvmrc ]]; then
           fnm use
          fi
          ```
    
        - <strong style="color:red;">重启系统才能生效;</strong>git bash中输入`fnm -V`测试是否生效
    
      - 设置fnm环境变量;查看命令`fnm env`
    
        - 原始`env`配置如下
        
          - ```yaml
            export PATH="/c/Users/[用户名]/AppData/Local/fnm_multishells/20120_1721977603568":"$PATH"
            export FNM_RESOLVE_ENGINES="false"
            export FNM_DIR="C:\\Users\\[用户名]\\AppData\\Roaming\\fnm"
            export FNM_NODE_DIST_MIRROR="https://nodejs.org/dist"
            export FNM_COREPACK_ENABLED="false"
            export FNM_ARCH="x64"
            export FNM_VERSION_FILE_STRATEGY="local"
            export FNM_MULTISHELL_PATH="C:\\Users\\[用户名]\\AppData\\Local\\fnm_multishells\\20120_1721977603568"
            export FNM_LOGLEVEL="info"
            
            ```
        
          - 修改`fnm env`的环境变量配置;`fnm env --[配置项;不要前面的fnm_;要中横线] [要设置的值]`
        
            - <strong style="color:green;">如何找到这个命令;使用`fnm -h`查看有哪些命令行选项;找到`fnm env -h`;再看选项就确定了下面这个修改配置的命令</strong>
        
          - `fnm env --node-dist-mirror https://npmmirror.com/mirrors/node`
        
          - <strong style="color:red;">通过`fnm env -h`其实fnm不支持修改配置项;除了镜像源可修改,而且还是临时修改;由于都是保存在C盘,不满足我对windows将软件放到其他盘的硬性要求;所以就放弃fnm了</strong>
        
          - `fnm env`配置错了;恢复办法
        
            - 删除`C:\Users\[用户名]\AppData\Local\`目录下fnm开头的文件夹
            - 删除`C:\Users\[用户名]\AppData\Roaming\`目录下fnm开头的文件夹
        
          - `fnm env --dir "/f/fnm/fnm"`
        
          - `fnm env --multishell-path F:\\fnm\\fnm_multishells\\20120_1721977603568`
        
          - `fnm env --path "F:\\fnm\\fnm_multishells\\20120_1721977603568":"$PATH"`
        
          - ```txt
            Print and set up required environment variables for fnm
            
            Usage: fnm env [OPTIONS]
            
            Options:
                  --node-dist-mirror <NODE_DIST_MIRROR>
                      <https://nodejs.org/dist/> mirror [env: FNM_NODE_DIST_MIRROR] [default: https://nodejs.org/dist]
                  --shell <SHELL>
                      The shell syntax to use. Infers when missing [possible values: bash, zsh, fish, power-shell, cmd]
                  --fnm-dir <BASE_DIR>
                      The root directory of fnm installations [env: FNM_DIR]
                  --json
                      Print JSON instead of shell commands
                  --log-level <LOG_LEVEL>
                      The log level of fnm commands [env: FNM_LOGLEVEL] [default: info] [possible values: quiet, error, info]
                  --use-on-cd
                      Print the script to change Node versions every directory change
                  --arch <ARCH>
                      Override the architecture of the installed Node binary. Defaults to arch of fnm binary [env: FNM_ARCH]
                  --version-file-strategy <VERSION_FILE_STRATEGY>
                      A strategy for how to resolve the Node version. Used whenever `fnm use` or `fnm install` is called without a version, or when `--use-on-cd` is configured on evaluation [env: FNM_VERSION_FILE_STRATEGY] [default: local] [possible values: local, recursive]
                  --corepack-enabled
                      Enable corepack support for each new installation. This will make fnm call `corepack enable` on every Node.js installation. For more information about corepack see <https://nodejs.org/api/corepack.html> [env: FNM_COREPACK_ENABLED]
                  --resolve-engines
                      Resolve `engines.node` field in `package.json` whenever a `.node-version` or `.nvmrc` file is not present.
                      Experimental: This feature is subject to change.
                      Note: `engines.node` can be any semver range, with the latest satisfying version being resolved. [env: FNM_RESOLVE_ENGINES]
              -h, --help
                      Print help (see more with '--help')
            
            ```
        
          - 
        
        - node保存路径
    
  - `WebStorm可以独立为项目指定运行环境;类似IDEA指定JDK版本一样`
