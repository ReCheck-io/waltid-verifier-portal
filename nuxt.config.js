export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'EBSI Verifier',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  },

  css: ['~/assets/scss/fonts.scss', '~/assets/scss/main.scss'],

  components: true,
  plugins: [],

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  buildModules: ['@nuxtjs/eslint-module', '@nuxt/postcss8'],

  modules: ['@nuxtjs/axios'],

  axios: {
    proxy: true,
  },

  proxy: {
    // '/verifier-api/': 'https://wallet.waltid.org',
    // '/api/': 'https://wallet.waltid.org'
    '/verifier-api/': 'http://localhost:8080/',
    '/api/': 'http://localhost:8080/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build

  build: {
    babel: {
      compact: true,
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  ssr: false,
  server: {
    port: 4000,
  },
}
