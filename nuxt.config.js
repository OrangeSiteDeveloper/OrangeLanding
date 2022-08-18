import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  meta: {
    title: "橙果工作室",
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },
  nitro: {
    storage: {
      redis: {
        driver: "redis",
        port: 6379,
        host: "127.0.0.1",
        username: "", // needs Redis >= 6
        password: "",
        db: 0,
      },
    },
  },
  // naive UI配置支持
  build: {
    transpile:
      process.env.NODE_ENV === "production"
        ? [
            "naive-ui",
            "vueuc",
            "@css-render/vue3-ssr",
            "@juggle/resize-observer",
          ]
        : ["@juggle/resize-observer"],
  },
  vite: {
    optimizeDeps: {
      include:
        process.env.NODE_ENV === "development"
          ? ["naive-ui", "vueuc", "date-fns-tz/esm/formatInTimeZone"]
          : [],
    },
  },
});
