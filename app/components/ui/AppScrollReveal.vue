<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  delay?: number
  as?: string
}>()

const target = ref<HTMLElement | null>(null)
const isVisible = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (props.delay) {
            setTimeout(() => {
              isVisible.value = true
            }, props.delay)
          } else {
            isVisible.value = true
          }
          observer?.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  )

  if (target.value) {
    observer.observe(target.value)
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <component
    :is="as || 'div'"
    ref="target"
    class="transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
  >
    <slot />
  </component>
</template>
