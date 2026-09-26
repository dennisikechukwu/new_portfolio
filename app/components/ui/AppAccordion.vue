<script setup lang="ts">
import { HugeiconsIcon } from '@hugeicons/vue'
import { PlusSignIcon, MinusSignIcon } from '@hugeicons/core-free-icons'

defineProps<{
  title: string
  isOpen?: boolean
}>()

const emit = defineEmits<{
  (e: 'toggle'): void
}>()
</script>

<template>
  <div class="border-b border-border last:border-0">
    <button
      class="w-full py-5 md:py-6 flex items-center justify-between text-left focus:outline-none hover:opacity-70 transition-opacity duration-200 cursor-pointer"
      @click="emit('toggle')"
      :aria-expanded="isOpen"
    >
      <h3 class="text-[15px] md:text-[16px] font-body text-text-primary">{{ title }}</h3>
      <span class="text-text-tertiary ml-4 flex-shrink-0 transition-transform duration-200" :class="{ 'rotate-180': isOpen }">
        <HugeiconsIcon :icon="isOpen ? MinusSignIcon : PlusSignIcon" :size="20" />
      </span>
    </button>
    <div
      class="grid transition-[grid-template-rows] duration-300 ease-in-out"
      :class="isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
    >
      <div class="overflow-hidden">
        <div class="pb-6 text-[14px] md:text-[15px] leading-relaxed text-text-secondary pr-10">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
