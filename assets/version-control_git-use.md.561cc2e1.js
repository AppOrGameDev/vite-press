import{_ as t,c as e,o as i,d as r}from"./app.f674114a.js";const u=JSON.parse('{"title":"Git \u4F7F\u7528","description":"","frontmatter":{},"headers":[{"level":2,"title":"Git \u4ED3\u5E93\u540C\u6B65","slug":"git-\u4ED3\u5E93\u540C\u6B65","link":"#git-\u4ED3\u5E93\u540C\u6B65","children":[]}],"relativePath":"version-control/git-use.md","lastUpdated":1668255723000}'),a={name:"version-control/git-use.md"},o=r('<h1 id="git-\u4F7F\u7528" tabindex="-1">Git \u4F7F\u7528 <a class="header-anchor" href="#git-\u4F7F\u7528" aria-hidden="true">#</a></h1><h2 id="git-\u4ED3\u5E93\u540C\u6B65" tabindex="-1">Git \u4ED3\u5E93\u540C\u6B65 <a class="header-anchor" href="#git-\u4ED3\u5E93\u540C\u6B65" aria-hidden="true">#</a></h2><ol><li>\u9996\u5148\u901A\u8FC7git clone --mirror \u5C06\u6240\u6709\u7684\u5206\u652F\u90FD\u62C9\u4E0B\u6765\u3002</li></ol><p>\u4E00\u822C\u6211\u4EEC\u7528git clone\u547D\u4EE4\u53EA\u4F1A\u62C9\u53D6master\u7684\u6700\u65B0\u4FE1\u606F\u3002</p><p>\u4F46\u662F\u4F7F\u7528--mirror\u4F1A\u5C06\u6240\u6709\u5206\u652F\u5185\u5BB9\u90FD\u62C9\u4E0B\u6765\u3002</p><ol start="2"><li>git remote update --prune origin</li></ol><p>\u5C06\u8FDC\u7AEF\u5DF2\u7ECF\u5220\u9664\u7684\u5206\u652F\u5728\u672C\u5730\u6E05\u7406\u6389\u3002</p><p>\u8FD9\u4E2A\u53EF\u4EE5\u53C2\u8003\u8FD9\u4E2A\u535A\u6587\uFF1A\u804A\u4E0B git remote prune origin_\u738B\u6E05\u57F9-CSDN\u535A\u5BA2</p><ol start="3"><li>git push -f --prune --all \u76EE\u6807\u4ED3\u5E93\u5730\u5740</li></ol><p>git push -f --prune --all ssh://gerrit.../dest_repo_name</p><ol start="4"><li>\u540C\u6B65tag</li></ol><p>git tag --sort==-createordate | head -n2000 | git push -f ssh://gerrit.../dest_repo_name</p><p>\u6700\u8FD1\u53D1\u73B0\u4E00\u4E2A\u8FC1\u79FB\u4ED3\u5E93\u7684\u547D\u4EE4\uFF0C\u7279\u522B\u7B80\u5355\u3002</p><p>\u573A\u666F\uFF1A\u9700\u8981\u5C06\u4E00\u4E2A\u5E73\u53F0\uFF08\u5982gitlab\uFF09\u7684\u4ED3\u5E93\u76F4\u63A5\u63A8\u9001\u5230\u53E6\u4E00\u4E2A\u5E73\u53F0\uFF1A\u5982gerrit\u3002</p><p>\u524D\u63D0\uFF1A\u9700\u8981\u6709\u5F3A\u5236\u63A8\u9001\u7684\u6743\u9650\u3002\u5982\u679C\u662F\u5F80gitlab\u63A8\u9001\uFF0C\u9700\u8981\u628A\u5206\u652F\u4FDD\u62A4\u5173\u95ED\u3002\u5982\u679C\u8981\u5F80gerrit\u63A8\u9001\uFF0C\u9700\u8981\u7ED9\u63A8\u9001\u7528\u6237\u914D\u7F6E\u4E00\u4E2A\u5F3A\u5236\u63A8\u9001\u7684\u6743\u9650\u3002</p><p>\u4E09\u6761\u547D\u4EE4\uFF1A</p><p>git clone --bare \u6E90git\u4ED3\u5E93\u5730\u5740 #\u6E90\u4ED3\u5E93</p><p>cd project.git/</p><p>git push --mirror \u76EE\u6807git\u4ED3\u5E93\u5730\u5740 #\u76EE\u6807\u4ED3\u5E93</p>',19),p=[o];function s(l,n,g,c,d,_){return i(),e("div",null,p)}const m=t(a,[["render",s]]);export{u as __pageData,m as default};
