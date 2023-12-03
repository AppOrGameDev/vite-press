import{_ as s,o as n,c as a,U as l}from"./chunks/framework.c0c21d38.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/base/JS常用API.md","filePath":"frontend/base/JS常用API.md","lastUpdated":1701587179000}'),p={name:"frontend/base/JS常用API.md"},o=l(`<h3 id="集合常用api" tabindex="-1">集合常用API <a class="header-anchor" href="#集合常用api" aria-label="Permalink to &quot;集合常用API&quot;">​</a></h3><h4 id="数组常用api" tabindex="-1">数组常用API <a class="header-anchor" href="#数组常用api" aria-label="Permalink to &quot;数组常用API&quot;">​</a></h4><ol><li><p>创建数组</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 创建长度为3的数组</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Array</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// [,,]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 返回[&#39;G&#39;,&#39;r&#39;,&#39;e&#39;,&#39;g&#39;]</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Array</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Greg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//如果省略new 这只创建长度为1的数组</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Array</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// [3]</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Array</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Greg</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// [&#39;Greg&#39;]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 入参将类数组结构转换成新的数组实例</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Array</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">from</span><span style="color:#A6ACCD;">(arr) </span><span style="color:#676E95;font-style:italic;">// 入参可以是Array,Map,Set,或者迭代器</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 将一组参数转换成数组</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Array</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">of</span><span style="color:#A6ACCD;">(a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">c</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">d) </span><span style="color:#676E95;font-style:italic;">//[a,b,c,d]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ... 展开运算法</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ...只能展开类数组，不能展开对象</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//典型应用场景:合并数组</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> newArr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [newHeader</span><span style="color:#89DDFF;">,...</span><span style="color:#A6ACCD;">oldArr</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">newFooter] </span><span style="color:#676E95;font-style:italic;">// 添加新头和尾结点的数组</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//典型应用场景:合并多个对象</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> personObj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{...</span><span style="color:#A6ACCD;">oldPerson</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">newName</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 将name属性的Value替换为newName</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 检测是否尾数组</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (arr </span><span style="color:#89DDFF;">instanceof</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 是数组,balabala</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (Array</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">isArray</span><span style="color:#A6ACCD;">(arr)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 是数组,balabala</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// js迭代集合中的元素要用of，如果是用in则迭代的是索引值，比如说index</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p><code>{...P}可以</code><strong style="color:red;">(...P) 不行</strong></p></li><li><p>数组复制和填充</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 用填充值补全 开始&lt;=索引&lt;结束</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 索引开始/结束值遇到负数就加一个数组长度; 忽略正数超过长度,负数低于长度的索引，越界了</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 填充值是必填,开始和结束索引值非必填</span></span>
<span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">fill</span><span style="color:#A6ACCD;">(填充的值</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">索引开始值</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">索引结束值)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 从复制的位置开始,复制长度,插入到插入位置</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 插入位置索引必填,后面两个非必填</span></span>
<span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">copyWith</span><span style="color:#A6ACCD;">(插入位置索引</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">复制位置索引</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">复制长度)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li><li><p>数组转换</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">valueOf</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 都是[a, b, c]  这样的字符串</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 自定义连接符</span></span>
<span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">|</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)  </span><span style="color:#676E95;font-style:italic;">// 用|连接数组元素</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li><li><p>栈</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(item1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> item2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> item3) </span><span style="color:#676E95;font-style:italic;">// 入栈,可以一次入栈多个</span></span>
<span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pop</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// 出栈,并返回弹出的结点</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><p>队列</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#A6ACCD;">(item1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> item2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> item3) </span><span style="color:#676E95;font-style:italic;">// 入队列尾部,可以一次入多个</span></span>
<span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pop</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// 出队列尾部,并返回弹出的结点</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 以上操作队列尾部</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">unshift</span><span style="color:#A6ACCD;">(item1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> item2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> item3) </span><span style="color:#676E95;font-style:italic;">// 入队列头部,可以一次入多个</span></span>
<span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">shift</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// 弹出队列第一个,并返回弹出的结点</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 以上操作队列头部</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li><li><p>排序</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sort</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// 正序</span></span>
<span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reverse</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// 倒叙</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 数字和字符串的大小比较</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 自定义比较函数</span></span>
<span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sort</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">b</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> : </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li><li><p>操作</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 打平数组</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> newarr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">concat(item</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">item1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> item2</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 复制原数组，在新数组尾部加入参数中的元素和数组展开后的多个元素，得到一个新数组并返回；原数组不变</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> newarr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">slice</span><span style="color:#A6ACCD;">(开始复制索引值</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 结束复制索引值) </span><span style="color:#676E95;font-style:italic;">// 返回 开始复制&lt;= 索引 &lt; 结束复制 的新的数组</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 以上方法都不会对原数组有改动，都是返回的新数组</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 删除数组某些元素,则必传2个参数， 删除的索引位置,删除长度;返回的数组就是删除的元素</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 插入元素,则必传3个及以上参数, 插入索引位置,删除长度0,插入元素</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 替换元素,则必传3个及以上参数, 插入索引位置,删除长度,插入元素</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> newarr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">  arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">splice</span><span style="color:#A6ACCD;">(删除</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">插入的索引位置</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">删除长度</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">插入的元素1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">插入的元素2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">插入的元素3)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></li><li><p>搜索和位置</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 严格相等</span></span>
<span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">indexOf</span><span style="color:#A6ACCD;">(要搜索的元素</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">起始位置)</span></span>
<span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">lastIndexOf</span><span style="color:#A6ACCD;">(要搜索的元素</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">起始位置)</span></span>
<span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">includes</span><span style="color:#A6ACCD;">(要搜索的元素</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">起始位置)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 断言</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> item </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">find</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">element</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">index</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">array</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">element</span><span style="color:#89DDFF;">==</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 查找元素为1的元素</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> itemIndex </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">findIndex</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">element</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">index</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">array</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">element</span><span style="color:#89DDFF;">==</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 查找元素为1的元素索引</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li><li><p>迭代</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 入参都是函数,是以数组每一项作为参数运行的函数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 数组arr每个元素都大于2,则返回true,否则返回false</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> isAllBig2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">every</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">item</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">index</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">array</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 传入函数，数组每个元素都为true则为true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 数组arr有一个元素大于2,则返回true,否则返回false</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> is ExistBig2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">some</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">item</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">index</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">array</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 传入函数，数组有一个元素为true则为true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 返回大于2的元素组成的新数组</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> newarr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">filter</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">item</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">index</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">array</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 返回执行为true的元素，组成的新数组</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 返回元素组每一项都乘2的结果，组成的新数组</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> newarr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">item</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">index</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">array</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 构造一个跟原数组一一对应的新数组</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 对数组每一项都执行操作,修改了原数组。没有返回值，类似for循环</span></span>
<span class="line"><span style="color:#A6ACCD;">arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">item</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">index</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">array</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">/*执行操作*/</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></li><li><p>归并</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 数组每个项之和</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// pre 上一次归并的值</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// curr 当前元素值</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 函数返回结果作为下</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> sum </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> arr</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reduce</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">pre</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">curr</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">index</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">array</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> pre </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> curr) </span><span style="color:#676E95;font-style:italic;">//</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li></ol>`,3),e=[o];function t(r,c,y,i,D,A){return n(),a("div",null,e)}const b=s(p,[["render",t]]);export{F as __pageData,b as default};
