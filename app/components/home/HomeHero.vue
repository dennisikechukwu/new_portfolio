<script setup lang="ts">
import { HugeiconsIcon } from '@hugeicons/vue'
import {
  Github01Icon,
  Linkedin01Icon,
  Mail01Icon,
  Download01Icon,
  NewTwitterIcon,
} from '@hugeicons/core-free-icons'
import { socials } from '~/data/socials'

const socialIconMap: Record<string, unknown> = {
  github: Github01Icon,
  linkedin: Linkedin01Icon,
  mail: Mail01Icon,
  x: NewTwitterIcon,
}
</script>

<template>
  <section class="min-h-[calc(100vh-72px)] flex flex-col items-center justify-center px-6 py-24 lg:py-0">
    <!-- Portrait -->
    <AppScrollReveal>
      <div class="relative w-[176px] h-[176px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden bg-[#2e2e2e]">
        <NuxtImg
          src="/dennis-portrait.png"
          alt="Dennis Ikechukwu — Software Engineer"
          width="400"
          height="400"
          format="webp"
          quality="85"
          class="absolute inset-0 w-full h-full object-cover object-[center_15%] scale-[1.15]"
          loading="eager"
        />
      </div>
    </AppScrollReveal>

    <!-- Name -->
    <AppScrollReveal :delay="100">
      <h1 class="mt-8 font-display text-[44px] md:text-[56px] lg:text-[64px] leading-[1.05] tracking-tight text-text-primary text-center">
        Dennis Ikechukwu
      </h1>
    </AppScrollReveal>

    <!-- Subtitle -->
    <AppScrollReveal :delay="200">
      <p class="mt-5 text-[15px] md:text-[16px] leading-[1.7] text-text-secondary text-center max-w-[560px]">
        Full-Stack Software Engineer building robust APIs and crafting seamless frontend experiences with Vue and React
      </p>
    </AppScrollReveal>

    <!-- Social Icons -->
    <AppScrollReveal :delay="300">
      <div class="mt-7 flex items-center gap-5">
        <AppIconButton
          v-for="social in socials"
          :key="social.name"
          :href="social.url"
          :label="social.name"
          size="lg"
        >
          <HugeiconsIcon :icon="socialIconMap[social.iconName]" :size="28" />
        </AppIconButton>
      </div>
    </AppScrollReveal>

    <!-- CTA -->
    <AppScrollReveal :delay="400">
      <div class="mt-8">
        <AppButton href="/Dennis_Ikechukwu_Resume.pdf" size="lg" download="Dennis_Ikechukwu_Resume.pdf">
          Download CV
          <HugeiconsIcon :icon="Download01Icon" :size="18" />
        </AppButton>
      </div>
    </AppScrollReveal>
  </section>
</template>
