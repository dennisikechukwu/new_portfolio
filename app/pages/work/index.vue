<script setup lang="ts">
import { caseStudies } from '~/data/case-studies'

useHead({
  title: 'Work - Dennis Ikechukwu',
  meta: [
    { name: 'description', content: 'A collection of case studies focusing on full-stack implementation, interactive frontend experiences, and robust API design.' }
  ]
})
</script>

<template>
  <div class="px-6 lg:px-10 max-w-6xl mx-auto">
    <WorkHero />
    <div class="pb-24">
      <WorkCard 
        v-for="study in caseStudies" 
        :key="study.id" 
        :case-study="study" 
      />
    </div>
  </div>
</template>
