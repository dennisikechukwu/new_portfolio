<script setup lang="ts">
import { HugeiconsIcon } from '@hugeicons/vue'
import {
  Github01Icon,
  Linkedin01Icon,
  Mail01Icon,
  NewTwitterIcon,
  MapIcon
} from '@hugeicons/core-free-icons'
import { socials } from '~/data/socials'
import { Vue3Lottie } from 'vue3-lottie'

const socialIconMap: Record<string, unknown> = {
  github: Github01Icon,
  linkedin: Linkedin01Icon,
  mail: Mail01Icon,
  x: NewTwitterIcon,
}
</script>

<template>
  <footer class="mt-20 md:mt-32 pt-16 pb-12">
    <div class="mx-auto max-w-6xl px-6 lg:px-10">
      
      <!-- Top Row -->
      <div class="flex items-center justify-between w-full mb-16 md:mb-24">
        <NuxtLink to="/" class="font-display text-[32px] md:text-[40px] tracking-tight text-text-primary">
          Dennis.
        </NuxtLink>
        <div class="flex items-center gap-8">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-text-primary hover:opacity-60 transition-opacity"
            :aria-label="social.name"
          >
            <HugeiconsIcon :icon="socialIconMap[social.iconName]" :size="20" :stroke-width="1.5" />
          </a>
        </div>
      </div>

      <!-- Middle Row -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-center mb-24 md:mb-32">
        <!-- Location -->
        <div class="flex flex-col items-center gap-6">
          <HugeiconsIcon :icon="MapIcon" :size="24" :stroke-width="1.5" class="text-text-primary" />
          <p class="text-[14px] md:text-[15px] text-text-secondary font-body font-light tracking-wide">
            Lagos, Nigeria
          </p>
        </div>
        <!-- Email -->
        <div class="flex flex-col items-center gap-6">
          <HugeiconsIcon :icon="Mail01Icon" :size="24" :stroke-width="1.5" class="text-text-primary" />
          <a href="mailto:okwuchukwudennis001@gmail.com" class="text-[14px] md:text-[15px] text-text-secondary font-body font-light tracking-wide hover:text-text-primary transition-colors">
            okwuchukwudennis001@gmail.com
          </a>
        </div>
        <!-- Animated Greeting -->
        <div class="flex flex-col items-center gap-6">
          <div class="w-6 h-6 flex items-center justify-center">
            <!-- Custom Animated Robot Character -->
            <svg 
              class="animate-wave origin-bottom text-text-primary"
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              stroke-width="1.5" 
              stroke-linecap="round" 
              stroke-linejoin="round"
            >
              <path d="M12 2v2" />
              <rect x="3" y="6" width="18" height="14" rx="2" />
              <circle cx="9" cy="11" r="1" />
              <circle cx="15" cy="11" r="1" />
              <path d="M9 16h6" />
              <path d="M2 12h1" />
              <path d="M21 12h1" />
            </svg>
          </div>
          <p class="text-[14px] md:text-[15px] text-text-secondary font-body font-light tracking-wide">
            Say hello!
          </p>
        </div>
      </div>

      <!-- Bottom Row -->
      <div class="flex flex-col items-center justify-center text-center">
        <p class="text-[12px] md:text-[13px] text-text-tertiary font-body">
          © {{ new Date().getFullYear() }} Dennis Ikechukwu. All Rights Reserved.
        </p>
      </div>

    </div>
  </footer>
</template>
