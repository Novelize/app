import tailwindcss from "@tailwindcss/vite";
import {theme} from "./assets/theme";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['~/assets/main.css'],
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    "nuxt-lodash",
    '@primevue/nuxt-module',
  ],
  primevue: {
    options: {
      theme: {
        preset: theme,
        options: {
          darkModeSelector: true,
        }
      }
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
