<script setup lang="ts">
import { stackData } from '~/data/stack'
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
              Stack.
            </h1>
            <h2 class="text-[12px] text-text-primary font-body font-medium uppercase tracking-widest border-t border-text-primary pt-4 block w-12">
              Toolkit
            </h2>
          </div>
        </AppScrollReveal>
      </div>

      <!-- Main Stack List -->
      <div class="md:col-span-8 lg:col-span-9 pt-2">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
          <AppScrollReveal
            v-for="(category, index) in stackData" 
            :key="category.id"
            :delay="150 + (index * 100)"
            class="flex flex-col"
          >
            <h3 class="text-[20px] font-display font-medium text-text-primary mb-6 border-b border-border pb-4">
              {{ category.title }}
            </h3>
            <ul class="flex flex-col space-y-4">
              <AppScrollReveal
                v-for="(item, idx) in category.items" 
                :key="idx"
                :delay="150 + (index * 100) + (idx * 50)"
                as="li"
                class="text-[16px] text-text-secondary font-body font-light flex items-center before:content-[''] before:w-[4px] before:h-[4px] before:bg-text-tertiary before:rounded-full before:mr-4"
              >
                {{ item }}
              </AppScrollReveal>
            </ul>
          </AppScrollReveal>
        </div>
      </div>
    </div>
  </section>
</template>
