<script setup lang="ts">
import { ref } from 'vue'
import { featuredProjects } from '~/data/projects'
import { HugeiconsIcon } from '@hugeicons/vue'
import { ArrowUpRight01Icon, Github01Icon } from '@hugeicons/core-free-icons'

// Open the first project by default
const openProjectId = ref<string | null>(featuredProjects[0]?.id || null)

function toggleProject(id: string) {
  openProjectId.value = openProjectId.value === id ? null : id
}
</script>

<template>
  <section class="py-24 px-6 lg:px-10 max-w-[720px] mx-auto">
    <div class="text-center mb-16 md:mb-20">
      <h2 class="font-display text-[44px] md:text-[56px] leading-[1] tracking-tight text-text-primary">
        Projects
      </h2>
      <p class="mt-5 text-[15px] md:text-[16px] leading-[1.7] text-text-secondary max-w-[500px] mx-auto">
        A record of selected professional roles, key responsibilities, and technical contributions across software engineering projects.
      </p>
    </div>

    <div class="border-t border-border">
      <AppAccordion
        v-for="project in featuredProjects"
        :key="project.id"
        :title="project.title"
        :is-open="openProjectId === project.id"
        @toggle="toggleProject(project.id)"
      >
        <p>{{ project.shortDescription }}</p>
        
        <div class="mt-6 flex flex-wrap items-center gap-3">
          <AppButton
            v-if="project.liveUrl"
            :href="project.liveUrl"
            size="sm"
            variant="secondary"
          >
            Live Site
            <HugeiconsIcon :icon="ArrowUpRight01Icon" :size="14" />
          </AppButton>
          
          <AppButton
            v-if="project.githubUrl"
            :href="project.githubUrl"
            size="sm"
            variant="ghost"
            class="px-4 text-text-secondary hover:text-text-primary transition-colors"
          >
            <HugeiconsIcon :icon="Github01Icon" :size="16" />
            Source Code
          </AppButton>
        </div>
      </AppAccordion>
    </div>
  </section>
</template>
