<script setup lang="ts">
import type { CaseStudy } from '~/data/case-studies'
import { HugeiconsIcon } from '@hugeicons/vue'
import { ArrowUpRight01Icon, Github01Icon } from '@hugeicons/core-free-icons'

defineProps<{
  caseStudy: CaseStudy
}>()
</script>

<template>
  <div class="work-card py-20 md:py-28 border-b border-border/40 last:border-b-0">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
      
      <!-- Left Column: MacOS Window Frame (6 cols) -->
      <AppScrollReveal class="lg:col-span-6 w-full group relative">
        <!-- Ambient Glow behind frame -->
        <div class="absolute -inset-4 rounded-3xl bg-gradient-to-br from-text-primary/[0.02] via-transparent to-text-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl pointer-events-none"></div>
        
        <template v-if="caseStudy.imageUrl">
          <!-- MacOS Window Frame -->
          <div class="relative w-full rounded-xl overflow-hidden border border-border/60 bg-[#1a1a1a] shadow-[0_8px_40px_rgb(0,0,0,0.08)] animate-[float_4s_ease-in-out_infinite] group-hover:[animation-play-state:paused] transition-shadow duration-500">
            <!-- Title Bar -->
            <div class="flex items-center gap-2 px-4 py-3 bg-[#2a2a2a] border-b border-white/[0.06]">
              <!-- Traffic Lights -->
              <div class="flex items-center gap-[6px]">
                <span class="w-[10px] h-[10px] rounded-full bg-[#ff5f57] shadow-[inset_0_-1px_0_rgba(0,0,0,0.15)]"></span>
                <span class="w-[10px] h-[10px] rounded-full bg-[#febc2e] shadow-[inset_0_-1px_0_rgba(0,0,0,0.15)]"></span>
                <span class="w-[10px] h-[10px] rounded-full bg-[#28c840] shadow-[inset_0_-1px_0_rgba(0,0,0,0.15)]"></span>
              </div>
              <!-- URL bar -->
              <div class="flex-1 flex justify-center">
                <div class="px-4 py-1 bg-white/[0.06] rounded-md text-[11px] text-white/40 font-body font-light tracking-wide truncate max-w-[240px]">
                  {{ caseStudy.liveUrl ? caseStudy.liveUrl.replace('https://', '').replace('http://', '') : caseStudy.title.toLowerCase().replace(/\s+/g, '-') + '.dev' }}
                </div>
              </div>
              <!-- Spacer for symmetry -->
              <div class="w-[52px]"></div>
            </div>
            <!-- Screenshot -->
            <img :src="caseStudy.imageUrl" :alt="caseStudy.title" class="w-full h-auto block" />
          </div>
        </template>
        
        <template v-else>
          <!-- System Design Fallback -->
          <div class="relative w-full rounded-xl overflow-hidden border border-border/60 bg-[#1a1a1a] shadow-[0_8px_40px_rgb(0,0,0,0.08)] animate-[float_4s_ease-in-out_infinite] group-hover:[animation-play-state:paused] transition-shadow duration-500">
            <!-- Title Bar -->
            <div class="flex items-center gap-2 px-4 py-3 bg-[#2a2a2a] border-b border-white/[0.06]">
              <div class="flex items-center gap-[6px]">
                <span class="w-[10px] h-[10px] rounded-full bg-[#ff5f57] shadow-[inset_0_-1px_0_rgba(0,0,0,0.15)]"></span>
                <span class="w-[10px] h-[10px] rounded-full bg-[#febc2e] shadow-[inset_0_-1px_0_rgba(0,0,0,0.15)]"></span>
                <span class="w-[10px] h-[10px] rounded-full bg-[#28c840] shadow-[inset_0_-1px_0_rgba(0,0,0,0.15)]"></span>
              </div>
              <div class="flex-1 flex justify-center">
                <div class="px-4 py-1 bg-white/[0.06] rounded-md text-[11px] text-white/40 font-body font-light tracking-wide">
                  architecture.sys
                </div>
              </div>
              <div class="w-[52px]"></div>
            </div>
            <!-- Terminal-style content -->
            <div class="w-full aspect-[4/3] relative flex items-center justify-center">
              <div class="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:20px_20px]"></div>
              <div class="relative z-10 flex flex-col items-center gap-3">
                <div class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 bg-[#28c840] rounded-full animate-pulse"></span>
                  <p class="text-white/50 font-body font-medium tracking-[0.2em] text-[14px] uppercase">{{ caseStudy.role }}</p>
                </div>
                <p class="text-white/20 font-body font-light text-[12px] tracking-[0.15em] uppercase">System Architecture</p>
              </div>
            </div>
          </div>
        </template>
      </AppScrollReveal>

      <!-- Right Column: Spec Sheet Details (6 cols) -->
      <div class="lg:col-span-6 flex flex-col">
        <!-- Header -->
        <AppScrollReveal :delay="150" class="mb-6">
          <div class="flex items-baseline gap-4 mb-3">
            <h2 class="text-[28px] md:text-[36px] font-display font-bold text-text-primary tracking-tight leading-none">
              {{ caseStudy.title }}
            </h2>
            <span v-if="caseStudy.year" class="text-[13px] text-text-tertiary font-body font-light tabular-nums">{{ caseStudy.year }}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 bg-text-primary rounded-full"></span>
            <p class="text-[13px] text-text-primary font-body font-medium tracking-[0.15em] uppercase">{{ caseStudy.role }}</p>
          </div>
        </AppScrollReveal>

        <!-- Overview -->
        <AppScrollReveal :delay="250">
          <p class="text-[15px] md:text-[16px] text-text-secondary font-body font-light leading-[1.8] mb-8">
            {{ caseStudy.overview }}
          </p>
        </AppScrollReveal>

        <!-- Engineering Highlights (Crosshair bullets) -->
        <AppScrollReveal :delay="350" class="mb-8">
          <h3 class="text-[11px] text-text-tertiary font-body font-medium uppercase tracking-[0.2em] mb-5">// Engineering Highlights</h3>
          <ul class="space-y-4">
            <li v-for="(feature, idx) in caseStudy.keyFeatures" :key="idx" class="flex items-start gap-3">
              <span class="mt-[7px] flex-shrink-0 w-[10px] h-[10px] border border-text-primary/30 rounded-[2px] relative">
                <span class="absolute inset-[3px] bg-text-primary rounded-[1px]"></span>
              </span>
              <span class="text-[14px] text-text-secondary font-body font-light leading-relaxed">{{ feature }}</span>
            </li>
          </ul>
        </AppScrollReveal>

        <!-- Tech Stack (Terminal Tags) -->
        <AppScrollReveal :delay="450" class="flex flex-wrap gap-2 mb-8">
          <span 
            v-for="tech in caseStudy.techStack" 
            :key="tech"
            class="px-3 py-1.5 bg-[#1a1a1a] border border-[#2a2a2a] rounded-md text-[11px] text-white/70 font-body font-medium tracking-wide"
          >
            {{ tech }}
          </span>
        </AppScrollReveal>

        <!-- Links (Sleek typography links) -->
        <AppScrollReveal :delay="550" class="flex flex-wrap items-center gap-8 pt-4">
          <a v-if="caseStudy.liveUrl && caseStudy.liveUrl !== '#'" :href="caseStudy.liveUrl" target="_blank" rel="noopener noreferrer" class="group relative flex items-center gap-2 text-[12px] text-text-primary font-body font-medium uppercase tracking-[0.15em] pb-1.5">
            <span>View Live</span>
            <HugeiconsIcon :icon="ArrowUpRight01Icon" :size="16" :stroke-width="2" class="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-1" />
            <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-text-primary transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"></span>
          </a>
          <a v-if="caseStudy.githubUrl && caseStudy.githubUrl !== '#'" :href="caseStudy.githubUrl" target="_blank" rel="noopener noreferrer" class="group relative flex items-center gap-2 text-[12px] text-text-primary font-body font-medium uppercase tracking-[0.15em] pb-1.5">
            <HugeiconsIcon :icon="Github01Icon" :size="16" :stroke-width="1.5" class="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5" />
            <span>Source Code</span>
            <span class="absolute bottom-0 left-0 w-0 h-[1px] bg-text-primary transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"></span>
          </a>
        </AppScrollReveal>
      </div>

    </div>
  </div>
</template>
