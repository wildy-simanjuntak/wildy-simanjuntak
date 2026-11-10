export default defineNuxtConfig({
  compatibilityDate: '2026-11-10',
  future: {
    compatibilityVersion: 4,
  },
  modules: ['@nuxtjs/tailwindcss'],
  
  css: ['~/assets/css/main.css'], 
  
  app: {
    head: {
      title: 'Wildy Johanes Simanjuntak | Web & Unity Developer',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Syne:wght@700;800&display=swap' }
      ]
    }
  }
})