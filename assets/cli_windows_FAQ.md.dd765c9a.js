import{_ as e,k as o,l as d,U as c}from"./chunks/framework.d15d0c2c.js";const w=JSON.parse('{"title":"问题","description":"Windows问题记录","frontmatter":{"title":"问题","description":"Windows问题记录","category":"windows","tags":["Windows","FAQ"]},"headers":[],"relativePath":"cli/windows/FAQ.md","filePath":"cli/windows/FAQ.md","lastUpdated":1686303485000}'),t={name:"cli/windows/FAQ.md"},a=c('<h1 id="windows-problem" tabindex="-1">Windows Problem <a class="header-anchor" href="#windows-problem" aria-label="Permalink to &quot;Windows Problem&quot;">​</a></h1><h2 id="此系统上禁止运行脚本" tabindex="-1">此系统上禁止运行脚本 <a class="header-anchor" href="#此系统上禁止运行脚本" aria-label="Permalink to &quot;此系统上禁止运行脚本&quot;">​</a></h2><p>1、<code>win+x</code> 打开 <code>PowerShell</code>（管理员）</p><p>2、输入 <code>set-ExecutionPolicy RemoteSigned</code> 回车</p><p>3、键入 <code>Y</code> 或者 <code>A</code> 回车</p><p>4、输入 <code>get-executionpolicy</code> 回车</p><p>5、<code>RemoteSigned</code> 表示成功</p><h2 id="hdmi显示器颜色" tabindex="-1">HDMI显示器颜色 <a class="header-anchor" href="#hdmi显示器颜色" aria-label="Permalink to &quot;HDMI显示器颜色&quot;">​</a></h2><blockquote><p>设置显示器的颜色就和笔记本保持一致</p></blockquote><p>1、在桌面点击鼠标右键，选择 <code>NVIDIA 控制面板</code></p><p>2、在 <code>显示</code> 中选择 <code>更改分辨率</code></p><p>3、在 <code>应用以下设置</code> 中，选择 <code>使用 NVIDIA 颜色设置</code>，<code>输出动态范围</code> 改为 <code>完全</code></p>',12),i=[a];function n(s,r,l,p,_,h){return o(),d("div",null,i)}const u=e(t,[["render",n]]);export{w as __pageData,u as default};
