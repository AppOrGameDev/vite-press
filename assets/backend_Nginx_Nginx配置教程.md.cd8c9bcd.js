import{_ as s,o as n,c as a,U as l}from"./chunks/framework.c0c21d38.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"backend/Nginx/Nginx配置教程.md","filePath":"backend/Nginx/Nginx配置教程.md","lastUpdated":1713510753000}'),e={name:"backend/Nginx/Nginx配置教程.md"},p=l(`<h4 id="nginx配置" tabindex="-1">Nginx配置 <a class="header-anchor" href="#nginx配置" aria-label="Permalink to &quot;Nginx配置&quot;">​</a></h4><h5 id="windows本地nginx使用" tabindex="-1">windows本地nginx使用 <a class="header-anchor" href="#windows本地nginx使用" aria-label="Permalink to &quot;windows本地nginx使用&quot;">​</a></h5><ul><li>配置nginx的环境变量</li><li>常用命令 <ul><li>nginx.exe //启用nginx</li><li>nginx.exe -s stop //停止nginx</li><li>nginx.exe -s reload //重新加载nginx</li><li>nginx.exe -s quit //退出nginx</li></ul></li><li>任务管理器里查看nginx的进程</li></ul><h5 id="反向代理" tabindex="-1">反向代理 <a class="header-anchor" href="#反向代理" aria-label="Permalink to &quot;反向代理&quot;">​</a></h5><ul><li>参考教程 <a href="https://blog.csdn.net/qq_43886365/article/details/127109135" target="_blank" rel="noreferrer">使用nginx部署vue项目到本地以及代理和负载均衡</a></li></ul><div class="language-TXT line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">TXT</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">http {</span></span>
<span class="line"><span style="color:#A6ACCD;">    include       mime.types;</span></span>
<span class="line"><span style="color:#A6ACCD;">    default_type  application/octet-stream;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    sendfile        on;</span></span>
<span class="line"><span style="color:#A6ACCD;">    #tcp_nopush     on;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    #keepalive_timeout  0;</span></span>
<span class="line"><span style="color:#A6ACCD;">    keepalive_timeout  65;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    #gzip  on;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    # 在这里 设置负载均衡</span></span>
<span class="line"><span style="color:#A6ACCD;">    # 上面有讲解 </span></span>
<span class="line"><span style="color:#A6ACCD;">    upstream serve_backend{</span></span>
<span class="line"><span style="color:#A6ACCD;">		ip_hash;</span></span>
<span class="line"><span style="color:#A6ACCD;">		server 192.168.11.68:20201;</span></span>
<span class="line"><span style="color:#A6ACCD;">		server 192.168.11.69:20201 weight=1 down;</span></span>
<span class="line"><span style="color:#A6ACCD;">		server 192.168.11.70:20201 weight=2;</span></span>
<span class="line"><span style="color:#A6ACCD;">		server 192.168.11.71:20201 weight=3 backup;</span></span>
<span class="line"><span style="color:#A6ACCD;">		server 192.168.11.72:20201 weight=1 max_fails=3 fail_timeout=30s;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    server {</span></span>
<span class="line"><span style="color:#A6ACCD;">        listen       80;</span></span>
<span class="line"><span style="color:#A6ACCD;">        server_name  localhost;</span></span>
<span class="line"><span style="color:#A6ACCD;">        location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">            root   html;</span></span>
<span class="line"><span style="color:#A6ACCD;">            index  index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        # 视频演示项目 http协议</span></span>
<span class="line"><span style="color:#A6ACCD;">        location /video/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">            alias  D:/myProject/deployProject/video/;</span></span>
<span class="line"><span style="color:#A6ACCD;">            try_files $uri $uri/ /index.html last;</span></span>
<span class="line"><span style="color:#A6ACCD;">            index index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">        # 在这里设置反向代理</span></span>
<span class="line"><span style="color:#A6ACCD;">        # wxserver 是需要代理的标志</span></span>
<span class="line"><span style="color:#A6ACCD;">        location /wxserver/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_pass http://serve_backend/;</span></span>
<span class="line"><span style="color:#A6ACCD;">            # 启用keep alive</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_http_version 1.1;</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_set_header Connection &quot;&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            # 获取 xforward和真实IP</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_set_header  X-Forwarded-For  $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_set_header  X-Real-IP  $remote_addr;</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_set_header  Host $host;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#A6ACCD;">        #error_page  404              /404.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">        # redirect server error pages to the static page /50x.html</span></span>
<span class="line"><span style="color:#A6ACCD;">        #</span></span>
<span class="line"><span style="color:#A6ACCD;">        error_page   500 502 503 504  /50x.html;</span></span>
<span class="line"><span style="color:#A6ACCD;">        location = /50x.html {</span></span>
<span class="line"><span style="color:#A6ACCD;">            root   html;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div><blockquote><p>重新访问本地项目路径：<code>http://localhost/video/login</code><code>/video</code>是nginx代理到本地的映射，一定要有 <code>/login</code> 是你vue项目的入口路由 ，一定要有 后面就进入到你的项目了，使用的接口也是代理过的</p></blockquote><h5 id="负载均衡" tabindex="-1">负载均衡 <a class="header-anchor" href="#负载均衡" aria-label="Permalink to &quot;负载均衡&quot;">​</a></h5><p><code>本地nginx负载均衡远端服务</code></p><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># Load balancing example</span></span>
<span class="line"><span style="color:#A6ACCD;">	upstream load_balancing_server {</span></span>
<span class="line"><span style="color:#A6ACCD;">	    server 100.74.106.82:5173;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    server {</span></span>
<span class="line"><span style="color:#A6ACCD;">        listen       8888;</span></span>
<span class="line"><span style="color:#A6ACCD;">        server_name  localhost;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_pass   http://load_balancing_server/;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><code>本地nginx负载均衡本地服务</code></p><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># Load balancing example</span></span>
<span class="line"><span style="color:#A6ACCD;">	upstream load_balancing_server {</span></span>
<span class="line"><span style="color:#A6ACCD;">	    server 127.0.0.1:5173;</span></span>
<span class="line"><span style="color:#A6ACCD;">	}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    server {</span></span>
<span class="line"><span style="color:#A6ACCD;">        listen       8888;</span></span>
<span class="line"><span style="color:#A6ACCD;">        server_name  localhost;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">            proxy_pass   http://load_balancing_server/;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,12),r=[p];function c(i,o,t,b,C,A){return n(),a("div",null,r)}const d=s(e,[["render",c]]);export{u as __pageData,d as default};
