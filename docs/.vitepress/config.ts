import { withPwa } from "@vite-pwa/vitepress";
import container from "markdown-it-container";
import { defineConfig } from "vitepress";
import { renderSandbox } from "vitepress-plugin-sandpack";
import { BASE_URL, withBase } from "./config/common";
import { nav, sidebar } from "./config/menu";
import { pwa } from "./config/pwa";
import { algolia } from "./config/search";
import { vite } from "./config/vite";
import "./helper/restart-trigger";

export default withPwa(
  defineConfig({
    title: "开发笔记",
    titleTemplate: "开发笔记",
    description: "AppOrGameDev开发笔记",
    head: [
      ["link", { rel: "icon", href: withBase("/logo.svg") }],
      ["meta", { property: "og:title", content: "开发笔记" }],
      ["meta", { property: "og:image", content: withBase("/logo.svg") }],
      ["meta", { property: "og:description", content: "AppOrGameDev开发笔记" }]
    ],
    lang: "zh-CN",
    base: BASE_URL,
    appearance: true,
    ignoreDeadLinks: true,
    lastUpdated: true,
    cleanUrls: true,
    markdown: {
      lineNumbers: true,
      config(md) {
        md
          // the second parameter is html tag name
          .use(container, "sandbox", {
            render(tokens: any[], idx: number) {
              return renderSandbox(tokens, idx, "sandbox");
            }
          });
      }
    },
    themeConfig: {
      logo: "/logo.svg",
      siteTitle: "开发笔记",
      i18nRouting: true,
      outline: {
        level: "deep",
        label: "快速导航"
      },
      nav: nav,
      aside: true,
      sidebar: sidebar,
      editLink: {
        pattern:
          "https://github.com/AppOrGameDev/vite-press/edit/docs-deploy/docs/:path",
        text: `编辑此页`
      },
      docFooter: {
        prev: "上一节",
        next: "下一节"
      },
      footer: {
        message: "Released under the MIT License.",
        copyright: `Copyright © 2022-${new Date().getFullYear()} YanLuPei`
      },
      sidebarMenuLabel: "菜单",
      returnToTopLabel: "返回顶部",
      lastUpdated: {
        text: "上次更新"
      },
      darkModeSwitchLabel: "外观",
      langMenuLabel: "切换语言",
      socialLinks: [
        { icon: "github", link: "https://github.com/AppOrGameDev/vite-press/" }
      ],
      search: algolia,
      externalLinkIcon: true
    },
    locales: {
      root: {
        label: "中文",
        lang: "zh-CN"
      }
    },
    vite: vite as any,
    pwa: pwa
  })
);
