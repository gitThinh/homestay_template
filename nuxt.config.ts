// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  srcDir: 'src/',
  css: ["~/assets/main.css"],
  modules: [
    'nuxt-lodash',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    'nuxt-headlessui',
    'nuxt-swiper',
    '@ant-design-vue/nuxt',
  ],
  // swiper config
  swiper: {
    bundled: true,
    enableComposables: true,
  },

  // nuxt icon config
  icon: {
    componentName: "NuxtIcon",
  },

  // dark and light UI config
  colorMode: {
    // classSuffix: "",
    // preference: "light",
  //   fallback: "light",
  },

  // eslint config
  eslint: {
    config: {
      typescript: true,
    },
  },

  // lodash config
  lodash: {
    prefix: "_",
    prefixSkip: ["string"],
    upperAfterPrefix: false,
    exclude: ["map"],
    alias: [
      ["camelCase", "stringToCamelCase"], // => stringToCamelCase
      ["kebabCase", "stringToKebab"], // => stringToKebab
      ["isDate", "isLodashDate"], // => _isLodashDate
    ],
  },

  // i18n config
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        file: 'en.json'
      },
      {
        code: 'vi',
        name: 'Tiếng Việt',
        iso: 'vi-VN',
        file: 'vi.json'
      },
    ],
    defaultLocale: 'vi', // default lang
    lazy: true, // only load file when request
    langDir: 'locales', // dir folder key trans
    strategy: 'prefix_except_default',
    restructureDir: 'src/i18n/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },

  // env variable
  runtimeConfig: {
  },
})
