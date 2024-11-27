import { type HeadConfig, defineConfig } from "vitepress";
import lightbox from "vitepress-plugin-lightbox";
const siteName = "Keigo Ando's portfolio" as const;

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: siteName,
  description:
    "Keigo is a full stack + Unity editor extension engineer working in Japan 🇯🇵.",
  locales: {
    root: {
      label: "日本語",
      lang: "ja",
    },
    en: {
      label: "English",
      lang: "en",
      themeConfig: {
        nav: [
          { text: "Skills", link: "/en/skills" },
          { text: "Works", link: "/en/works" },
        ],
      },
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Skills", link: "/skills" },
      { text: "Works", link: "/works" },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/anchan828" },
      { icon: "x", link: "https://x.com/kyusyukeigo" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/keigoando/" },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 0L0 1.33333V22.6667L1 24H23L24 22.6667V1.33333L23 0H1ZM2 4.34756V21.3333H22V4.34711L11.9999 16.4686L2 4.34756ZM20.4132 2.66667H3.58648L11.9999 12.8647L20.4132 2.66667Z"/></svg>',
        },
        link: "mailto:contact@keigo.dev",
      },
    ],
  },
  head: [
    [
      "script",
      {
        defer: "",
        src: "https://static.cloudflareinsights.com/beacon.min.js",
        "data-cf-beacon": '{"token": "fd09692013ad4159899220d451f26260"}',
      },
    ],
  ],
  markdown: {
    config: (md) => {
      md.use(lightbox, {});
    },
  },
  transformHead: ({ pageData, title, description }) => {
    const head: HeadConfig[] = [];

    // Open Graph
    head.push(
      ["meta", { property: "og:site_name", content: siteName }],
      ["meta", { property: "og:title", content: title }],
      ["meta", { property: "og:description", content: description }],
      [
        "meta",
        {
          property: "og:image",
          content: "https://keigo-dev.vercel.app/images/keigo.jpg",
        },
      ]
    );

    // Twitter Card
    head.push(
      ["meta", { property: "twitter:card", content: "summary_large_image" }],
      ["meta", { property: "twitter:title", content: title }],
      ["meta", { property: "twitter:description", content: description }],
      [
        "meta",
        {
          property: "twitter:image",
          content: "https://keigo-dev.vercel.app/images/keigo.jpg",
        },
      ]
    );

    return head;
  },
});
