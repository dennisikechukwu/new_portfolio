<script setup lang="ts">
useSeoMeta({
  title: 'Dennis Ikechukwu — Software Engineer',
  description: 'Full-Stack Software Engineer specialising in robust Spring Boot backends and modern frontends with Vue, React, Nuxt, and Next. Based in Lagos, Nigeria.',
  ogTitle: 'Dennis Ikechukwu — Software Engineer',
  ogDescription: 'Full-Stack Software Engineer specialising in robust Spring Boot backends and modern frontends with Vue, React, Nuxt, and Next.',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div>
    <HomeHero />
    <AppScrollReveal>
      <HomeProjects />
    </AppScrollReveal>
    <AppScrollReveal>
      <HomeStack />
    </AppScrollReveal>
    <AppScrollReveal>
      <HomeExperience />
    </AppScrollReveal>
  </div>
</template>