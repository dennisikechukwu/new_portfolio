<script setup lang="ts">
import { HugeiconsIcon } from '@hugeicons/vue'
import { socials } from '~/data/socials'
import {
  Github01Icon,
  Linkedin01Icon,
  Mail01Icon,
  NewTwitterIcon,
  ArrowUpRight01Icon,
} from '@hugeicons/core-free-icons'

const socialIconMap: Record<string, unknown> = {
  github: Github01Icon,
  linkedin: Linkedin01Icon,
  mail: Mail01Icon,
  x: NewTwitterIcon,
}
</script>

<template>
  <section class="pt-24 pb-16 md:pt-32 md:pb-24">
    <!-- Content Grid -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
      
      <!-- Sticky Sidebar -->
      <div class="md:col-span-4 lg:col-span-3">
        <AppScrollReveal>
          <div class="md:sticky md:top-32">
            <h1 class="text-[40px] md:text-[48px] font-display font-bold text-text-primary leading-tight tracking-tight mb-12">
              Contact.
            </h1>
            <h2 class="text-[12px] text-text-primary font-body font-medium uppercase tracking-widest border-t border-text-primary pt-4 block w-12">
              Connect
            </h2>
          </div>
        </AppScrollReveal>
      </div>

      <!-- Main Content -->
      <div class="md:col-span-8 lg:col-span-9 flex flex-col space-y-10 pt-2">
        <AppScrollReveal :delay="150">
          <p class="text-[20px] md:text-[24px] leading-[1.6] text-text-primary font-body font-normal max-w-2xl">
            I'm always open to discussing new opportunities, full-stack architecture, and building incredible user experiences.
          </p>
        </AppScrollReveal>
        
        <AppScrollReveal :delay="250">
          <p class="text-[18px] md:text-[20px] text-text-secondary font-body font-normal leading-[1.7] max-w-3xl">
            Whether you need a robust distributed system built from scratch, or you just want to talk tech, my inbox is always open. Let's build something that scales.
          </p>
        </AppScrollReveal>

        <!-- Social Grid -->
        <div class="pt-8 border-t border-border">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            <AppScrollReveal
              v-for="(social, index) in socials" 
              :key="social.name"
              :delay="350 + (index * 100)"
              as="a"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center justify-between p-6 rounded-xl border border-border bg-border-light hover:border-text-primary hover:bg-surface transition-colors"
            >
              <div class="flex items-center gap-4">
                <HugeiconsIcon :icon="socialIconMap[social.iconName]" :size="24" class="text-text-primary" />
                <span class="text-[16px] font-body font-medium text-text-primary">{{ social.name }}</span>
              </div>
              <div class="text-text-tertiary group-hover:text-text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                <HugeiconsIcon :icon="ArrowUpRight01Icon" :size="20" />
              </div>
            </AppScrollReveal>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
