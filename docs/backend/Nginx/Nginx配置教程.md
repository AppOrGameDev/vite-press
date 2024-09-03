#### Nginx配置

##### windows本地nginx使用

- 配置nginx的环境变量
- 常用命令
  - nginx.exe			//启用nginx
  - nginx.exe -s stop     //停止nginx
  - nginx.exe -s reload  //重新加载nginx
  - nginx.exe -s quit     //退出nginx
- 任务管理器里查看nginx的进程

##### 反向代理

- 参考教程 [使用nginx部署vue项目到本地以及代理和负载均衡](https://blog.csdn.net/qq_43886365/article/details/127109135)

```TXT
http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;
    
    # 在这里 设置负载均衡
    # 上面有讲解 
    upstream serve_backend{
		ip_hash;
		server 192.168.11.68:20201;
		server 192.168.11.69:20201 weight=1 down;
		server 192.168.11.70:20201 weight=2;
		server 192.168.11.71:20201 weight=3 backup;
		server 192.168.11.72:20201 weight=1 max_fails=3 fail_timeout=30s;
	}

    server {
        listen       80;
        server_name  localhost;
        location / {
            root   html;
            index  index.html index.htm;
        }

        # 视频演示项目 http协议
        location /video/ {
            alias  D:/myProject/deployProject/video/;
            try_files $uri $uri/ /index.html last;
            index index.html index.htm;
        }
        
        # 在这里设置反向代理
        # wxserver 是需要代理的标志
        location /wxserver/ {
            proxy_pass http://serve_backend/;
            # 启用keep alive
            proxy_http_version 1.1;
            proxy_set_header Connection "";

            # 获取 xforward和真实IP
            proxy_set_header  X-Forwarded-For  $proxy_add_x_forwarded_for;
            proxy_set_header  X-Real-IP  $remote_addr;
            proxy_set_header  Host $host;
        }
        
        
        #error_page  404              /404.html;
        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
```

> 重新访问本地项目路径：`http://localhost/video/login`
> `/video`是nginx代理到本地的映射，一定要有
> `/login` 是你vue项目的入口路由 ，一定要有
> 后面就进入到你的项目了，使用的接口也是代理过的

```txt

    server {
        listen       8890;
        server_name  localhost;

        location /words/ {
            alias  F:/personal/code/words/;
            try_files $uri $uri/ /index.html last;
            index index.html index.htm;
        }
    }
```

##### 反向代理本地静态资源

```config
	server {
        listen       8902;
        server_name  localhost;

        location /img/ {
            alias  F:/Temp/;
            try_files $uri $uri/ /index.html last;
            index index.html index.htm;
        }
    }
```



##### 负载均衡

`本地nginx负载均衡远端服务`

```txt
	# Load balancing example
	upstream load_balancing_server {
	    server 100.74.106.82:5173;
	}

    server {
        listen       8888;
        server_name  localhost;

        location / {
            proxy_pass   http://load_balancing_server/;
        }
    }
```

`本地nginx负载均衡本地服务`

```txt
	# Load balancing example
	upstream load_balancing_server {
	    server 127.0.0.1:5173;
	}

    server {
        listen       8888;
        server_name  localhost;

        location / {
            proxy_pass   http://load_balancing_server/;
        }
    }
```

`失败案例:一个网站转到另一个网站,解决不了页面里面静态资源的相对定位问题`

```config
	
	# Load balancing example
	upstream load_balancing_server {
	    server 100.74.106.82:5173;
	}
	
	upstream singcheer_dev {
	    server develop.eto.permde.com;
	}


    server {
        listen       8888;
        server_name  localhost;
		
		# 通过正则来控制所需要分离的静态资源
		location /js/ {
			# 静态资源存放目录
			proxy_pass   http://singcheer_dev/js/;
		}
		
		location /css/ {
			# 静态资源存放目录
			proxy_pass   http://singcheer_dev/css/;
		}
		
		location /static/ {
			# 静态资源存放目录
			proxy_pass   http://singcheer_dev/static/;
		}
		
		location /api/ {
			proxy_pass   http://singcheer_dev/;
		}
		
        location / {
            proxy_pass   http://singcheer_dev/;
        }
    }

    server {
        listen       8899;
        server_name  localhost;
		
        location / {
            proxy_pass   http://load_balancing_server/;
        }

    }
```

### Nginx Proxy Manager

> [轻松管理反向代理：Nginx Proxy Manager 详解](https://jwinks.com/p/nginx-proxy-manager/)