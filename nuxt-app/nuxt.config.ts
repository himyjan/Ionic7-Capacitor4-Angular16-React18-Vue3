// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['nuxt-ionic'],
  ionic: {
    // integrations: {
    //   icons: true,
    //   meta: true,
    //   pwa: true,
    //   router: true,
    // },
    // css: {
    //   core: true,
    //   basic: true,
    //   utilities: false,
    // },
  },
  // ssr: false,
  redirect: [{ from: '.', to: '/tab1', statusCode: 301 }],
});
