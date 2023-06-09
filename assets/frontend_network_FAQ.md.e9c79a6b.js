import{_ as t,k as c,l as d,B as e,p as a,q as i,U as l}from"./chunks/framework.d15d0c2c.js";const f=JSON.parse('{"title":"实际应用","description":"实际开发中用到的网络内容","frontmatter":{"title":"实际应用","description":"实际开发中用到的网络内容","category":"network","tags":["network","FAQ"]},"headers":[],"relativePath":"frontend/network/FAQ.md","filePath":"frontend/network/FAQ.md","lastUpdated":1686303485000}'),r={name:"frontend/network/FAQ.md"},n={id:"frontmatter-title",tabindex:"-1"},s=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),p=l('<h2 id="跨域请求携带cookie" tabindex="-1">跨域请求携带cookie <a class="header-anchor" href="#跨域请求携带cookie" aria-label="Permalink to &quot;跨域请求携带cookie&quot;">​</a></h2><ol><li><p>前端请求时在 <code>request</code> 对象中配置 <code>withCredentials: true</code>；</p></li><li><p>后端在 <code>response</code> 的 <code>header</code> 中配置 <code>Access-Control-Allow-Credentials: true</code>；<code>Access-Control-Allow-Origin: 具体地址</code>；</p></li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>默认情况下，<code>Cookie</code> 不包括在 <code>CORS</code> 请求之中。</p><ul><li><p><code>Access-Control-Allow-Credentials</code> 的值是一个布尔值，表示是否允许发送 <code>Cookie</code>。设为 <code>true</code>，即表示服务器明确许可，<code>Cookie</code> 可以包含在请求中，一起发给服务器。 这个值也只能设为 <code>true</code>，如果服务器不要浏览器发送 <code>Cookie</code>，删除该字段即可。</p></li><li><p>开发者必须在 <code>AJAX</code> 请求中打开 <code>withCredentials</code> 属性。否则，即使服务器同意发送 <code>Cookie</code>，浏览器也不会发送。或者，服务器要求设置 <code>Cookie</code>，浏览器也不会处理。</p></li></ul></div><h2 id="预检请求" tabindex="-1">预检请求 <a class="header-anchor" href="#预检请求" aria-label="Permalink to &quot;预检请求&quot;">​</a></h2><p>预检请求，即 <code>OPTIONS</code> 请求，主要用于获知服务端支持的 <code>HTTP</code> 请求方法。跨域资源共享(<code>CORS</code>)标准新增了一组 <code>HTTP</code> 首部字段，配合预检请求可获知服务器允许哪些源站通过浏览器有权限访问哪些资源。</p><p>当发生以下情况时，客户端就会自动发起 <code>OPTIONS</code> 预检请求：</p><ul><li><p>使用以下任一 <code>HTTP</code> 方法：<code>PUT/DELETE/CONNECT/OPTIONS/TRACE/PATCH</code></p></li><li><p>设置了以下头部字段以外的自定义字段：<code>Accept/Accept-Language/Content-Language/Content-Type/DPR/Downlink/Save-Data/Viewport-Width/Width</code></p></li><li><p><code>Content-Type</code> 的值不属于下列之一: <code>application/x-www-form-urlencoded</code>、<code>multipart/form-data</code>、<code>text/plain</code></p></li><li><p>请求中的任意 <code>XMLHttpRequestUpload</code> 对象均没有注册任何事件监听器；<code>XMLHttpRequestUpload</code> 对象可以使用 <code>XMLHttpRequest.upload</code> 属性访问</p></li><li><p>请求中没有使用 <code>ReadableStream</code> 对象</p></li></ul>',7);function u(o,_,h,k,C,T){return c(),d("div",null,[e("h1",n,[a(i(o.$frontmatter.title)+" ",1),s]),p])}const A=t(r,[["render",u]]);export{f as __pageData,A as default};
