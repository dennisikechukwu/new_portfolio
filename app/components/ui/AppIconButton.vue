<script setup lang="ts">
interface Props {
  label: string
  href?: string
  to?: string
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  href: undefined,
  to: undefined,
  size: 'md',
})

const sizeClasses: Record<string, string> = {
  sm: 'w-8 h-8',
  md: 'w-9 h-9',
  lg: 'w-12 h-12',
}

const classes = computed(() =>
  [
    'inline-flex items-center justify-center rounded-full transition-opacity duration-200 hover:opacity-60 cursor-pointer',
    'text-text-primary',
    sizeClasses[props.size],
  ].join(' '),
)

const tag = computed(() => {
  if (props.href) return 'a'
  if (props.to) return resolveComponent('NuxtLink')
  return 'button'
})

const linkProps = computed(() => {
  if (props.href) return { href: props.href, target: '_blank', rel: 'noopener noreferrer' }
  if (props.to) return { to: props.to }
  return {}
})
</script>

<template>
  <component
    :is="tag"
    :class="classes"
    :aria-label="label"
    v-bind="linkProps"
  >
    <slot />
  </component>
</template>
