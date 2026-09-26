<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  to?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  href: undefined,
  to: undefined,
})

const baseClasses =
  'inline-flex items-center justify-center gap-2 font-body font-medium rounded-full transition-all duration-200 cursor-pointer select-none'

const variantClasses: Record<string, string> = {
  primary:
    'bg-btn-primary-bg text-btn-primary-text hover:bg-btn-primary-hover',
  secondary:
    'border border-border text-text-primary bg-surface hover:bg-bg',
  ghost:
    'text-text-secondary hover:text-text-primary',
}

const sizeClasses: Record<string, string> = {
  sm: 'px-5 py-2 text-[13px] tracking-wide',
  md: 'px-6 py-2.5 text-sm tracking-wide',
  lg: 'px-8 py-3.5 text-base tracking-wide',
}

const classes = computed(() =>
  [baseClasses, variantClasses[props.variant], sizeClasses[props.size]].join(' '),
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
    v-bind="linkProps"
  >
    <slot />
  </component>
</template>
