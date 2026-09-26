<script setup lang="ts">
import { coreTechnologies, coreCapabilities } from '~/data/technologies'
</script>

<template>
  <section class="py-24 px-6 lg:px-10 max-w-6xl mx-auto">
    <!-- Professional Expertise (Pills) -->
    <div class="text-center mb-16 md:mb-20">
      <AppScrollReveal>
        <h2 class="font-display text-[44px] md:text-[56px] leading-[1] tracking-tight text-text-primary">
          Toolkit
        </h2>
      </AppScrollReveal>
      <AppScrollReveal :delay="100">
        <p class="mt-5 text-[15px] md:text-[16px] leading-[1.7] text-text-secondary max-w-[500px] mx-auto">
          The languages, frameworks, and tools I use to build robust distributed systems.
        </p>
      </AppScrollReveal>
    </div>

    <!-- Tech Grid -->
    <div class="flex flex-wrap justify-center gap-3 md:gap-4 max-w-[800px] mx-auto mb-28">
      <AppScrollReveal 
        v-for="(tech, index) in coreTechnologies" 
        :key="tech.name" 
        :delay="150 + (index * 30)" 
        class="inline-block"
      >
        <AppTechPill
          :name="tech.name"
          :icon-url="tech.iconUrl"
        />
      </AppScrollReveal>
    </div>

    <!-- Core Capabilities (Cards) -->
    <div class="text-center mb-16">
      <AppScrollReveal>
        <h2 class="font-display text-[40px] md:text-[48px] leading-[1] tracking-tight text-text-primary">
          Core Capabilities
        </h2>
      </AppScrollReveal>
      <AppScrollReveal :delay="100">
        <p class="mt-5 text-[15px] md:text-[16px] leading-[1.7] text-text-secondary max-w-[600px] mx-auto">
          The engineering disciplines and architectural approaches I use to build scalable, high-quality software.
        </p>
      </AppScrollReveal>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <AppScrollReveal
        v-for="(capability, index) in coreCapabilities"
        :key="capability.id"
        :delay="150 + (index * 100)"
        class="bg-surface border border-border rounded-[20px] p-8 transition-shadow duration-300 hover:shadow-sm"
      >
        <h3 class="font-body font-semibold text-[18px] md:text-[20px] text-text-primary mb-3 tracking-tight">
          {{ capability.title }}
        </h3>
        <p class="text-[15px] leading-relaxed text-text-secondary">
          {{ capability.description }}
        </p>
      </AppScrollReveal>
    </div>
  </section>
</template>
