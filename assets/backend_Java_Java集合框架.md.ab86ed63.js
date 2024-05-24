import{_ as s,o as a,c as l,U as n}from"./chunks/framework.c0c21d38.js";const t="/vite-press/assets/Collection类图.5a54d589.jpg",o="/vite-press/assets/Collection类图02.6316f6f0.jpg",u=JSON.parse('{"title":"Java集合框架","description":"","frontmatter":{},"headers":[],"relativePath":"backend/Java/Java集合框架.md","filePath":"backend/Java/Java集合框架.md","lastUpdated":1716542031000}'),p={name:"backend/Java/Java集合框架.md"},e=n('<h1 id="java集合框架" tabindex="-1">Java集合框架 <a class="header-anchor" href="#java集合框架" aria-label="Permalink to &quot;Java集合框架&quot;">​</a></h1><h2 id="类图" tabindex="-1">类图 <a class="header-anchor" href="#类图" aria-label="Permalink to &quot;类图&quot;">​</a></h2><p><img src="'+t+'" alt=""></p><p><img src="'+o+`" alt=""></p><h2 id="java集合框架-1" tabindex="-1">Java集合框架 <a class="header-anchor" href="#java集合框架-1" aria-label="Permalink to &quot;Java集合框架&quot;">​</a></h2><h3 id="补充每个类的特性以及常用api" tabindex="-1">补充每个类的特性以及常用api <a class="header-anchor" href="#补充每个类的特性以及常用api" aria-label="Permalink to &quot;补充每个类的特性以及常用api&quot;">​</a></h3><ul><li><p>Collection</p><ul><li><p>List</p><ul><li>ArrayList</li><li>Vector <code>类似ArrayList</code> <code>线程(相对)安全;加入async</code> <code>允许添加null元素</code><ul><li>Stack <strong style="color:red;">栈;后进先出（LIFO，Last In First Out）</strong><ul><li><code>boolean empty()</code> <strong style="color:green;">测试栈是否为空</strong></li><li><code>Object peek()</code> <strong style="color:green;">查看栈顶部的对象，但不从栈中移除它</strong></li><li><code>Object pop()</code> <strong style="color:green;">移除栈顶部的对象，并作为此函数的值返回该对象</strong></li><li><code>Object push(Object element)</code> <strong style="color:green;">把对象压入栈顶部</strong></li><li><code>int search(Object element)</code> <strong style="color:green;">返回对象在栈中的位置，以 1 为基数</strong></li></ul></li></ul></li><li>LinkedList <strong style="color:red;">链表结构的列表(插入,删除效率高;查询效率低)</strong></li></ul></li><li><p>Set</p><ul><li><p>HashSet</p><ul><li><p>LinkedHashSet <strong style="color:red;">链表结构的Set;遍历Set时,根据add元素的顺序排序</strong></p></li><li><p>TreeSet <strong style="color:red;">排序后的Set集合;排序规则需要实现Comparator接口;由于要比较,不允许传null</strong></p><ul><li><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 实现Comparator接口</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">TreeSet</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Comparator</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">&gt;()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Override</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">compare</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">o1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">o2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> o1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">compareTo</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">o2</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">});</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 使用lambda</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">TreeSet</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">&gt;((</span><span style="color:#A6ACCD;">o1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> o2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">-&gt;</span><span style="color:#A6ACCD;"> o1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">compareTo</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">o2</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 简化后的lambda</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">TreeSet</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;">String</span><span style="color:#89DDFF;font-style:italic;">::</span><span style="color:#A6ACCD;">compareTo</span><span style="color:#89DDFF;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li></ul></li></ul></li><li><p>CopyOnWriteArraySet <strong style="color:red;">线程安全;</strong></p></li></ul></li><li><p>Queue</p><ul><li>ArrayDeque</li><li>PriorityQueue</li></ul></li></ul></li><li><p>Map</p><ul><li><p>HashMap</p><ul><li>LinkedHashMap</li></ul></li><li><p>WeakHashMap</p></li><li><p>IdentityHashMap</p></li><li><p>TreeMap <strong style="color:red;">根据Key排序后的Map集合;排序规则需要实现Comparator接口;由于要比较,不允许key传null</strong></p><ul><li><div class="language-java line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 实现Comparator接口</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">TreeMap</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">Comparator</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">&gt;()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">Override</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">compare</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">o1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">o2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> o1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">compareTo</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">o2</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">});</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 使用lambda</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">TreeMap</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">&gt;((</span><span style="color:#A6ACCD;">o1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> o2</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">-&gt;</span><span style="color:#A6ACCD;"> o1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">compareTo</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">o2</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 简化后的lambda</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">TreeMap</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C792EA;">String</span><span style="color:#89DDFF;">&gt;(</span><span style="color:#A6ACCD;">String</span><span style="color:#89DDFF;font-style:italic;">::</span><span style="color:#A6ACCD;">compareTo</span><span style="color:#89DDFF;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li></ul></li><li><p>ConcurrentHashMap <strong style="color:red;">并发+Map集合</strong></p></li><li><p>HashTable <strong style="color:red;">key和value都不允许传null;线程安全</strong></p></li></ul></li></ul><h2 id="基于上面的整理-归纳成表格" tabindex="-1">基于上面的整理,归纳成表格 <a class="header-anchor" href="#基于上面的整理-归纳成表格" aria-label="Permalink to &quot;基于上面的整理,归纳成表格&quot;">​</a></h2><ul><li>是否线程安全(为什么线程安全)</li><li>能否传null</li><li>结合面试宝典里面的总结整理表格</li><li>把这些集合常用的函数列举出来;写算法需要用到的</li></ul><table><thead><tr><th>序号</th><th>分类</th><th>类名</th><th>是否线程安全</th><th>是否能传null</th><th>特性</th></tr></thead><tbody><tr><td>1</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>2</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>3</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>4</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>5</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>6</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>7</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>8</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>9</td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>`,10),r=[e];function c(i,y,d,D,A,C){return a(),l("div",null,r)}const b=s(p,[["render",c]]);export{u as __pageData,b as default};
