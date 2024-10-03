export default defineNuxtConfig({
  css: [
    // '@/assets/css/tailwind.css',
    // 'animate.css/animate.min.css',
    // '~/assets/css/global.css', 
    'aos/dist/aos.css',
    'vuetify/styles',     
    '@mdi/font/css/materialdesignicons.css' 
  ],
  build: {
    transpile: ['vuetify'], // Transpile Vuetify
  },
});
