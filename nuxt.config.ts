import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
  ],

  css: ['~/assets/css/main.css'],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    quality: 85,
    format: ['webp', 'png'],
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Dennis Ikechukwu — Software Engineer',
      meta: [
        { name: 'description', content: 'Full-Stack Software Engineer specialising in robust Spring Boot backends and modern frontends with Vue, React, Nuxt, and Next. Based in Lagos, Nigeria.' },
        { name: 'author', content: 'Dennis Ikechukwu' },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@300;400;500;600&display=swap',
        },
      ],
    },
  },
})