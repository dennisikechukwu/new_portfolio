<script setup lang="ts">
import { ref } from 'vue'
import { workExperience } from '~/data/experience'

const openExperienceId = ref<string | null>(workExperience[0]?.id || null)

function toggleExperience(id: string) {
  openExperienceId.value = openExperienceId.value === id ? null : id
}
</script>

<template>
  <section class="py-24 px-6 lg:px-10 max-w-[720px] mx-auto">
    <div class="text-center mb-16 md:mb-20">
      <AppScrollReveal>
        <h2 class="font-display text-[44px] md:text-[56px] leading-[1] tracking-tight text-text-primary">
          Work History
        </h2>
      </AppScrollReveal>
      <AppScrollReveal :delay="100">
        <p class="mt-5 text-[15px] md:text-[16px] leading-[1.7] text-text-secondary max-w-[500px] mx-auto">
          A record of my professional roles, key responsibilities, and contributions across software development projects.
        </p>
      </AppScrollReveal>
    </div>

    <div class="border-t border-border">
      <AppScrollReveal
        v-for="(exp, index) in workExperience"
        :key="exp.id"
        :delay="150 + (index * 100)"
      >
        <AppExperienceAccordion
          :role="exp.role"
          :company="exp.company"
          :date="exp.date"
          :is-open="openExperienceId === exp.id"
          @toggle="toggleExperience(exp.id)"
        >
          <ul class="space-y-3">
            <li v-for="(point, idx) in exp.highlights" :key="idx" class="flex items-start gap-3">
              <span class="mt-[7px] flex-shrink-0 w-[10px] h-[10px] border border-text-primary/30 rounded-[2px] relative">
                <span class="absolute inset-[3px] bg-text-primary rounded-[1px]"></span>
              </span>
              <span class="text-[14px] md:text-[15px] text-text-secondary font-body font-light leading-relaxed">{{ point }}</span>
            </li>
          </ul>
        </AppExperienceAccordion>
      </AppScrollReveal>
    </div>
  </section>
</template>
