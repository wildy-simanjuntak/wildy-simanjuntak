// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Wildy Johanes Simanjuntak — Unity & Web Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Informatics Engineering professional and Unity/Web Developer specializing in immersive 3D simulations, WebXR, and modern web apps.' },
        { name: 'author', content: 'Wildy Johanes Simanjuntak' },
        { property: 'og:title', content: 'Wildy Johanes Simanjuntak — Portfolio' },
        { property: 'og:description', content: 'Explore interactive 3D simulations and high-performance web systems.' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Syne:wght@700;800&display=swap' }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Wildy Johanes Simanjuntak",
            "jobTitle": "Unity Developer & Web Developer",
            "url": "https://github.com/wildy-simanjuntak",
            "email": "wildy.simanjuntak13@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Batam",
              "addressRegion": "Riau Islands",
              "addressCountry": "Indonesia"
            },
            "alumniOf": "Politeknik Negeri Batam",
            "sameAs": [
              "https://github.com/wildy-simanjuntak"
            ]
          })
        }
      ]
    }
  },
  css: ['~/assets/css/main.css']
})