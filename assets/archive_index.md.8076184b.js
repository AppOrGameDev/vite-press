import{j as L,G as b,k as o,l as i,B as a,I as g,F as w,Q as j,C as Y,E as H,_ as T,a6 as N,u,R as B,S as G,s as J,b as A,d as W,w as q,a7 as z,q as h,K as R,L as X,n as E,x as Z}from"./chunks/framework.d15d0c2c.js";import{u as tt}from"./chunks/useNamespace.75a6a06b.js";import{u as O,b as F,a as et,c as at,d as rt}from"./chunks/theme.2762d432.js";const k=JSON.parse('[{"title":"后端","order":4,"sidebar":true,"path":"backend/","updatedDate":1685713537000,"createdDate":1668678076000},{"title":"开始","description":"开始","category":"koa","tags":["Koa"],"path":"backend/koa/start","updatedDate":1686303485000,"createdDate":1669538509000},{"title":"实战","description":"Koa + MySQL + TS","category":"koa","tags":["Koa","MySQL","ts"],"path":"backend/koa/use","updatedDate":1686303485000,"createdDate":1669538509000},{"title":"安装","description":"MySQL安装","category":"mysql","tags":["MySQL"],"path":"backend/mysql/install","updatedDate":1686303485000,"createdDate":1669197850000},{"title":"安装","description":"Redis安装","category":"redis","tags":["Redis"],"path":"backend/redis/install","updatedDate":1686303485000,"createdDate":1669197850000},{"title":"问题","description":"Git问题记录","category":"git","tags":["FAQ"],"path":"cli/git/FAQ","updatedDate":1686303485000,"createdDate":1684143388000},{"title":"CLI","description":"Git常用命令","category":"git","tags":["Git","CLI"],"path":"cli/git/cli","updatedDate":1686303485000,"createdDate":1667900642000},{"title":"集成","description":"Git集成：GitHub、Gitee","category":"git","tags":["Git","Hub"],"path":"cli/git/hub","updatedDate":1686303485000,"createdDate":1668091917000},{"title":"使用","description":"Git使用记录","category":"git","tags":["Git"],"path":"cli/git/use","updatedDate":1686303485000,"createdDate":1683798302000},{"title":"CLI","order":3,"sidebar":true,"group":false,"path":"cli/","updatedDate":1685959982000,"createdDate":1683798302000},{"title":"CLI","description":"Linux常用命令","category":"linux","tags":["Linux","CLI"],"path":"cli/linux/cli","updatedDate":1686303485000,"createdDate":1683798302000},{"title":"使用","description":"Linux命令使用记录","category":"linux","tags":["Linux","CLI"],"path":"cli/linux/use","updatedDate":1686303485000,"createdDate":1668268217000},{"title":"问题","description":"Windows问题记录","category":"windows","tags":["Windows","FAQ"],"path":"cli/windows/FAQ","updatedDate":1686303485000,"createdDate":1683798302000},{"title":"CLI","description":"Windows常用命令","category":"windows","tags":["Windows","CLI"],"path":"cli/windows/cli","updatedDate":1686303485000,"createdDate":1683798302000},{"title":"基础知识","description":"浏览器常问的基础知识","category":"browser","tags":["浏览器"],"path":"frontend/browser/basics","updatedDate":1686303485000,"createdDate":1680941618000},{"title":"浏览器缓存","description":"浏览器缓存方式以及区别","category":"browser","tags":["浏览器","缓存","强制缓存","协商缓存"],"path":"frontend/browser/cache","updatedDate":1686303485000,"createdDate":1683798302000},{"title":"数据存储","description":"浏览器中的数据存储方式","category":"browser","tags":["browser","storage"],"path":"frontend/browser/storage","updatedDate":1686303485000,"createdDate":1685285908000},{"title":"构建TS库","description":"使用rollup构建一个ts库","category":"rollup","tags":["rollup","lib","ts"],"path":"frontend/build/rollup/lib-ts","updatedDate":1686303485000,"createdDate":1667489157000},{"title":"构建JS库","description":"使用rollup构建一个js库","category":"rollup","tags":["rollup","js","lib"],"path":"frontend/build/rollup/lib","updatedDate":1686303485000,"createdDate":1667489157000},{"title":"turbo构建单仓库应用","description":"如何使用turbo管理monorepo","category":"build","tags":["build","turbo","monorepo"],"path":"frontend/build/turbo-monorepo","updatedDate":1685713537000,"createdDate":1685713537000},{"title":"构建TS库","description":"用vite构建一个TS编写的库","category":"vite","tags":["vite","ts"],"path":"frontend/build/vite/ts","updatedDate":1686303485000,"createdDate":1685713537000},{"title":"构建ICON库","description":"使用webpack打包svg图标","category":"webpack","tags":["Webpack","svg","icon"],"path":"frontend/build/webpack/icon","updatedDate":1686303485000,"createdDate":1667489157000},{"title":"防抖与节流","description":"防抖与节流","category":"code","tags":["防抖","节流"],"path":"frontend/code/debounce-throttle","updatedDate":1686303485000,"createdDate":1683447948000},{"title":"JSON导出EXCEL","description":"json转出Excel以及解析Excel为json","category":"code","tags":["JSON","EXCEL"],"path":"frontend/code/excel-json","updatedDate":1686303485000,"createdDate":1683798302000},{"title":"图片懒加载","description":"新版本浏览器图片懒加载实现","category":"code","tags":["懒加载"],"path":"frontend/code/image-lazy","updatedDate":1686303485000,"createdDate":1683447948000},{"title":"列表与树","description":"树与列表相互转换","category":"code","tags":["list","tree"],"path":"frontend/code/list-tree","updatedDate":1686303485000,"createdDate":1683798302000},{"title":"其他应用","description":"js实用技巧","category":"code","tags":["code"],"path":"frontend/code/others","updatedDate":1686303485000,"createdDate":1683798302000},{"title":"选择器","description":"CSS选择器","category":"css","tags":["CSS","选择器"],"path":"frontend/css/selector","updatedDate":1686303485000,"createdDate":1668850909000},{"title":"权重","description":"CSS选择器的权重","category":"css","tags":["weight","css"],"path":"frontend/css/weight","updatedDate":1686303485000,"createdDate":1685192308000},{"path":"frontend/html/","updatedDate":1685959982000,"createdDate":1683282487000},{"title":"前端","tags":["HTML","JS","CSS","ES6","NPM"],"order":2,"sidebar":true,"path":"frontend/","updatedDate":1685354573000,"createdDate":1667580197000},{"title":"浏览器监听","description":"监听元素变化、浏览器干预行为","category":"javascript","tags":["浏览器","Observer"],"path":"frontend/javascript/BOMObserver","updatedDate":1686303485000,"createdDate":1679229619000},{"title":"调用栈","description":"掌握函数的调用关系","category":"javascript","tags":["调用栈"],"path":"frontend/javascript/CallStack","updatedDate":1686303485000,"createdDate":1679229619000},{"title":"ES6+","description":"ES新版本API总结","category":"javascript","tags":["ES6","ES7","ES8","ES9","ES10","ES11","ES12","ES13"],"order":1,"ignore":false,"path":"frontend/javascript/ES6+","updatedDate":1686303485000,"createdDate":1678267635000},{"title":"元素位置","description":"获取元素位置和鼠标位置","category":"javascript","tags":["scroll","client","offset"],"path":"frontend/javascript/ElementPosition","updatedDate":1686303485000,"createdDate":1679229619000},{"title":"事件循环","description":"了解离不开的事件循环","category":"javascript","tags":["EventLoop"],"path":"frontend/javascript/EventLoop","updatedDate":1686303485000,"createdDate":1679133976000},{"title":"Ajax","description":"Ajax的了解和使用","category":"javascript","tags":["Ajax"],"path":"frontend/javascript/ajax","updatedDate":1686303485000,"createdDate":1685192308000},{"title":"数组","description":"按版本分类的数组方法","category":"javascript","tags":["Array","ES5","ES6","ES7","ES10","ES13"],"path":"frontend/javascript/array","updatedDate":1686303485000,"createdDate":1678267635000},{"title":"二进制","description":"js中的二进制使用方法","category":"javascript","tags":["Blob"],"path":"frontend/javascript/binary","updatedDate":1686303485000,"createdDate":1677576113000},{"title":"辞海","description":"开发中常用术语","category":"javascript","tags":["Dictionary","web"],"path":"frontend/javascript/dictionary","updatedDate":1686303485000,"createdDate":1683282487000},{"title":"fetch","description":"了解支持promise的HTTP请求方法","category":"javascript","tags":["fetch"],"path":"frontend/javascript/fetch","updatedDate":1686303485000,"createdDate":1674033221000},{"title":"对象","description":"按版本分类的对象方法","category":"javascript","tags":["Object","ES5","ES6","ES8","ES10","ES13"],"path":"frontend/javascript/object","updatedDate":1686303485000,"createdDate":1678267635000},{"title":"Promise","description":"详细介绍promise","category":"javascript","tags":["javascript","promise"],"path":"frontend/javascript/promise","updatedDate":1686303485000,"createdDate":1685612483000},{"title":"原型链","description":"百问不厌的原型链","category":"javascript","tags":["prototype"],"path":"frontend/javascript/prototype","updatedDate":1686303485000,"createdDate":1680866917000},{"title":"作用域","description":"代码调试中遇到的作用域","category":"javascript","tags":["作用域"],"path":"frontend/javascript/scope","updatedDate":1686303485000,"createdDate":1677576113000},{"title":"字符串","description":"按版本分类的字符串方法","category":"javascript","tags":["String","ES5","ES6","ES8","ES10","ES11","ES12","ES13"],"order":2,"path":"frontend/javascript/string","updatedDate":1686303485000,"createdDate":1678267635000},{"title":"实际应用","description":"实际开发中用到的网络内容","category":"network","tags":["network","FAQ"],"path":"frontend/network/FAQ","updatedDate":1686303485000,"createdDate":1686303485000},{"title":"长连接","description":"了解实现长连接的几种方式","category":"network","tags":["network","KeepAlive"],"path":"frontend/network/KeepAlive","updatedDate":1686303485000,"createdDate":1685459648000},{"title":"跨域","description":"什么是跨域","category":"network","tags":["network","cors"],"path":"frontend/network/cors","updatedDate":1686303485000,"createdDate":1685459648000},{"title":"加密算法","description":"了解常用的加密算法","category":"network","tags":["network","encryption"],"path":"frontend/network/encryption","updatedDate":1686303485000,"createdDate":1685459648000},{"title":"HTTP","description":"介绍什么是HTTP","category":"network","tags":["network","HTTP"],"path":"frontend/network/http","updatedDate":1686303485000,"createdDate":1680941618000},{"title":"网络安全","description":"常见的网络攻击手段与防护","category":"network","tags":["network","security"],"path":"frontend/network/security","updatedDate":1686303485000,"createdDate":1685459648000},{"title":"TCP","description":"介绍什么是TCP","category":"network","tags":["network","TCP","UDP"],"path":"frontend/network/tcp","updatedDate":1686303485000,"createdDate":1685459648000},{"title":"版本规范","description":"npm包的版本规范","category":"npm","tags":["NPM","SemVer"],"path":"frontend/npm/SemVer","updatedDate":1686303485000,"createdDate":1680443355000},{"title":"CLI","description":"npm命令行","category":"npm","tags":["NPM","CLI"],"path":"frontend/npm/cli","updatedDate":1686303485000,"createdDate":1684314891000},{"title":"常用推荐","description":"常用的npm效率工具库","category":"npm","tags":["NPM"],"path":"frontend/npm/libs","updatedDate":1686303485000,"createdDate":1667900642000},{"title":"开源许可协议","description":"七中开源许可协议","category":"npm","tags":["license"],"path":"frontend/npm/license","updatedDate":1686303485000,"createdDate":1671108760000},{"title":"package-exports","description":"package中的expors使用记录","category":"npm","tags":["NPM","package","exports"],"path":"frontend/npm/package-exports","updatedDate":1686303485000,"createdDate":1680688772000},{"title":"package.json","description":"package.json中的字段详解","category":"npm","tags":["NPM","package.json"],"path":"frontend/npm/package-json","updatedDate":1686303485000,"createdDate":1680688772000},{"title":"打补丁","description":"修改依赖包之后对其打补丁","category":"npm","tags":["NPM","patch"],"path":"frontend/npm/package-patch","updatedDate":1686303485000,"createdDate":1667557112000},{"title":"基础概念","description":"正则基础概念","category":"regex","tags":["Regex"],"path":"frontend/regex/basics","updatedDate":1686303485000,"createdDate":1668850909000},{"title":"正则应用","description":"正则使用记录","category":"regex","tags":["Regex"],"path":"frontend/regex/use","updatedDate":1686303485000,"createdDate":1668850909000},{"layout":"home","title":"首页","titleTemplate":"小路的开发笔记","hero":{"name":"小路的开发笔记","text":"</dev>","tagline":"writing","image":{"src":"/logo.svg","alt":"logo"},"actions":[{"theme":"brand","text":"快速开始","link":"/frontend/"},{"theme":"alt","text":"在 GitHub 上查看","link":"https://github.com/peiyanlu/vite-press/"}]},"features":[{"icon":"⚡️","title":"vite + vue3","details":"两岸猿声啼不住，轻舟已过万重山"},{"icon":"🖖","title":"知新","details":"好记性不如烂笔头"},{"icon":"🛠️","title":"温故","details":"书读百遍其义自见"}],"path":"","updatedDate":1685612483000,"createdDate":1667489157000},{"title":"导航","layoutClass":"site-nav-layout","outline":[2,3,4],"aside":true,"lastUpdated":false,"editLink":false,"order":1,"path":"navigation/","updatedDate":1685354573000,"createdDate":1677824942000},{"title":"起源","order":0,"path":"origin/","updatedDate":1685354573000,"createdDate":1668268217000}]'),C=k.filter(t=>{var r;return(r=t.tags)==null?void 0:r.length}).reduce((t,r)=>{var c;return(c=r.tags)==null||c.forEach(s=>{(t[s]??(t[s]=[])).push(r),t[s].sort((n,p)=>p.createdDate-n.createdDate)}),t},{}),ot=(t=k)=>t.sort((r,c)=>c.createdDate-r.createdDate).reduce((r,c)=>{var p;const s=`${new Date(c.createdDate).getFullYear()}年`,n=`${new Date(c.createdDate).getMonth()+1}月`;return r[s]??(r[s]={}),((p=r[s])[n]??(p[n]=[])).push(c),r},{}),st=t=>["monkey","rooster","dog","pig","rat","ox","tiger","rabbit","dragon","snake","horse","goat"].at(t%12),dt=t=>["申猴","酉鸡","戌狗","亥猪","子鼠","丑牛","寅虎","卯兔","辰龙","巳蛇","午马","未羊"].at(t%12),it={class:"doc-metadata"},ct={class:"group"},nt=["title"],pt=["innerHTML"],lt=["title"],ut=["innerHTML"],gt={key:0,class:"item"},Dt={class:"tag-list"},ht=L({__name:"DocMetaData",props:{doc:{}},emits:["getSelected"],setup(t,{emit:r}){const s=O(F).smaller("sm"),n=d=>et(d).value,p=d=>at(d,s.value?"MM/DD HH:mm":"YYYY/MM/DD HH:mm:ss").value,_=d=>{r("getSelected",d,C[d])};return(d,I)=>{var m;const v=b("svg-icon"),S=b("doc-tag");return o(),i("div",it,[a("div",ct,[a("div",{title:`创建于：${n(d.doc.createdDate)}`,class:"item"},[g(v,{name:"create"}),a("div",{innerHTML:p(d.doc.createdDate)},null,8,pt)],8,nt),a("div",{title:`更新于：${p(d.doc.updatedDate)}`,class:"item"},[g(v,{name:"update"}),a("div",{innerHTML:n(d.doc.updatedDate)},null,8,ut)],8,lt)]),(m=d.doc.tags)!=null&&m.length?(o(),i("div",gt,[g(v,{name:"tags"}),a("div",Dt,[(o(!0),i(w,null,j(d.doc.tags,y=>(o(),Y(S,{key:y,text:y,onClick:M=>_(y)},null,8,["text","onClick"]))),128))])])):H("",!0)])}}});const _t=T(ht,[["__scopeId","data-v-ed944117"]]),vt=t=>(B("data-v-e74b6647"),t=t(),G(),t),mt={class:"empty-block"},yt=vt(()=>a("div",{class:"loader"},[a("div",{class:"outer"}),a("div",{class:"middle"}),a("div",{class:"inner"})],-1)),ft=[yt],bt=L({__name:"LoadingBlock",setup(t){N(n=>({"795be780":u(s)}));const s=O(F).smaller("sm").value?"200px":"300px";return(n,p)=>(o(),i("div",mt,ft))}});const kt=T(bt,[["__scopeId","data-v-e74b6647"]]),St=t=>(B("data-v-d3bbee99"),t=t(),G(),t),wt={class:"doc-archive"},jt={class:"doc-archive-title"},xt={class:"tag"},Et={key:0},Ct={key:1},Lt={class:"doc-timeline"},Tt=["title"],It=St(()=>a("div",{class:"line"},null,-1)),Mt={class:"group-header"},Pt={class:"subgroup-header"},$t={class:"title"},At=["href"],Ht={key:0},Nt=L({__name:"DocTimeline",setup(t){N(e=>({"1f7e4465":u(M)}));const r=R({loader:()=>X(()=>import("./chunks/WordCloud.fa7ece5f.js"),["assets/chunks/WordCloud.fa7ece5f.js","assets/chunks/theme.2762d432.js","assets/chunks/framework.d15d0c2c.js","assets/chunks/useNamespace.75a6a06b.js"]),delay:200,loadingComponent:kt}),{escape:c}=rt(),{isDark:s}=J(),n=A({}),p=A(!1),_=W({type:"",data:[]}),d=(e=location.search)=>Object.fromEntries(new URLSearchParams(e)),I=(e="")=>{const l=()=>location.href.split(location.search||"?").shift();history.replaceState("","",l()+e)},v=e=>{n.value=ot(e)},S=(e,l)=>{_.type=e,_.data=l,v(l),I(e?`?tag=${encodeURIComponent(e)}`:"")};q(()=>c.value,e=>{p.value&&e&&(p.value=!1,S("",k))}),z(()=>{const{tag:e}=d();let l=decodeURIComponent(e);e&&C[l]?m(e,C[l]):v(k)});const m=(e,l)=>{p.value=!0,S(e,l)},y=e=>new Date().getFullYear()===e,M=s?"rgba(125, 125, 125, .1)":"rgba(0, 0, 0, .1)",x=tt("doc-timeline-item");return(e,l)=>{const P=b("svg-icon"),Q=b("doc-tag"),U=b("DocShici");return o(),i("div",wt,[g(u(r),{onGetSelected:m}),a("div",jt,[a("div",xt,[g(P,{name:"tags"}),g(Q,{text:_.type},null,8,["text"])]),p.value?(o(),i("div",Et,h(`共 ${_.data.length} 篇，持续更新中`),1)):(o(),i("div",Ct,h(`共 ${u(k).length} 篇，持续更新中`),1))]),g(U,{class:"doc-shici"}),a("div",Lt,[(o(!0),i(w,null,j(n.value,(K,f)=>(o(),i("div",{key:f,class:E([u(x).b(),{current:y(parseInt(f))}])},[a("div",{class:E(u(x).e("line"))},[a("div",{title:u(dt)(parseInt(f)),class:"icon"},[g(P,{name:`zodiac-${u(st)(parseInt(f))}`},null,8,["name"])],8,Tt),It],2),a("div",{class:E(u(x).e("wrapper"))},[a("div",Mt,h(f),1),(o(!0),i(w,null,j(K,(V,$)=>(o(),i("div",{key:$,class:"group-content"},[a("div",Pt,h($),1),(o(!0),i(w,null,j(V,D=>(o(),i("div",{key:D.path,class:"subgroup-content"},[a("div",$t,[a("a",{href:u(Z)(D.path)},h(D.category?`${D.category} / `:"")+h(D.title),9,At),D.description?(o(),i("div",Ht,"-- "+h(D.description),1)):H("",!0)]),g(_t,{doc:D,onGetSelected:m},null,8,["doc"])]))),128))]))),128))],2)],2))),128))])])}}});const Bt=T(Nt,[["__scopeId","data-v-d3bbee99"]]);const Ut=JSON.parse('{"title":"归档","description":"","frontmatter":{"title":"归档","layout":"doc","layoutClass":"doc-archive","aside":false,"lastUpdated":false,"editLink":false,"order":5},"headers":[],"relativePath":"archive/index.md","filePath":"archive/index.md","lastUpdated":1685354573000}'),Gt={name:"archive/index.md"},Kt=Object.assign(Gt,{setup(t){return(r,c)=>(o(),i("div",null,[g(Bt)]))}});export{Ut as __pageData,Kt as default,C as t};
