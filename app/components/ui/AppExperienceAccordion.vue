<script setup lang="ts">
import { HugeiconsIcon } from '@hugeicons/vue'
import { PlusSignIcon, MinusSignIcon } from '@hugeicons/core-free-icons'

defineProps<{
  role: string
  company: string
  date: string
  isOpen?: boolean
}>()

const emit = defineEmits<{
  (e: 'toggle'): void
}>()
</script>

<template>
  <div class="border-b border-border last:border-0">
    <button
      class="w-full py-6 md:py-8 flex flex-col focus:outline-none hover:opacity-70 transition-opacity duration-200 cursor-pointer text-left"
      @click="emit('toggle')"
      :aria-expanded="isOpen"
    >
      <div class="w-full flex items-start justify-between gap-4">
        <h3 class="text-[15px] md:text-[16px] font-body text-text-primary text-left">{{ role }}</h3>
        <span class="text-[13px] md:text-[14px] font-body text-text-secondary tracking-wide flex-shrink-0 whitespace-nowrap mt-[1px]">{{ date }}</span>
      </div>
      <div class="w-full flex items-start md:items-center justify-between gap-4 mt-1 md:mt-2">
        <span class="text-[14px] md:text-[15px] font-body text-text-secondary text-left">{{ company }}</span>
        <span class="text-text-tertiary flex-shrink-0 transition-transform duration-200" :class="{ 'rotate-180': isOpen }">
          <HugeiconsIcon :icon="isOpen ? MinusSignIcon : PlusSignIcon" :size="20" />
        </span>
      </div>
    </button>
    
    <div
      class="grid transition-[grid-template-rows] duration-300 ease-in-out"
      :class="isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
    >
      <div class="overflow-hidden">
        <div class="pb-8 text-[14px] md:text-[15px] leading-relaxed text-text-secondary pr-10">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
