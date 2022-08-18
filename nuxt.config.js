import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  meta: {
    title: "橙果工作室",
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
    ],
  },
  nitro: {
    storage: {
      redis: {
        driver: "redis",
        /* redis connector options */
        port: 6379, // Redis port
        host: "127.0.0.1", // Redis host
        username: "", // needs Redis >= 6
        password: "",
        db: 0, // Defaults to 0
      },
    },
  },
});
