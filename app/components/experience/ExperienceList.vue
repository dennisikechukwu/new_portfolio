<script setup lang="ts">
import { workExperience } from '~/data/experience'
</script>

<template>
  <section class="pt-24 pb-16 md:pt-32 md:pb-24">
    <!-- Content Grid -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
      
      <!-- Sticky Sidebar -->
      <div class="md:col-span-4 lg:col-span-4">
        <AppScrollReveal>
          <div class="md:sticky md:top-32">
            <h1 class="text-[40px] md:text-[48px] font-display font-bold text-text-primary leading-tight tracking-tight mb-12">
              Experience.
            </h1>
            <h2 class="text-[12px] text-text-primary font-body font-medium uppercase tracking-widest border-t border-text-primary pt-4 block w-12">
              Career
            </h2>
          </div>
        </AppScrollReveal>
      </div>

      <!-- Experience List -->
      <div class="md:col-span-8 lg:col-span-8 flex flex-col pt-2">
        <AppScrollReveal
          v-for="(job, index) in workExperience" 
          :key="job.id"
          :delay="150 + (index * 100)"
          class="flex flex-col gap-6 py-12 border-b border-border first:pt-0 last:border-0 group"
        >
          <!-- Role Details -->
          <div class="flex-grow flex flex-col space-y-5">
            <div>
              <span class="text-[12px] text-text-tertiary font-body font-medium uppercase tracking-widest mb-3 block">
                {{ job.date }}
              </span>
              <h3 class="text-[22px] md:text-[28px] font-display font-medium text-text-primary group-hover:opacity-80 transition-opacity">
                {{ job.role }}
              </h3>
              <p class="text-[16px] text-text-secondary font-body mt-1">{{ job.company }}</p>
            </div>
            <ul class="space-y-4 max-w-3xl">
              <li v-for="(point, idx) in job.highlights" :key="idx" class="flex items-start gap-3">
                <span class="mt-[7px] flex-shrink-0 w-[10px] h-[10px] border border-text-primary/30 rounded-[2px] relative">
                  <span class="absolute inset-[3px] bg-text-primary rounded-[1px]"></span>
                </span>
                <span class="text-[15px] md:text-[16px] text-text-secondary font-body font-light leading-[1.8]">{{ point }}</span>
              </li>
            </ul>
          </div>
        </AppScrollReveal>
      </div>
    </div>
  </section>
</template>
