<script setup lang="ts">
defineProps<{
  name: string
  iconUrl: string
}>()
</script>

<template>
  <div class="inline-flex items-center gap-3 rounded-[100px] bg-btn-primary-bg px-6 py-3 shadow-sm hover:opacity-80 transition-opacity cursor-default">
    <img :src="iconUrl" :alt="name + ' logo'" class="w-[18px] h-[18px]" loading="lazy" />
    <span class="text-[14px] md:text-[15px] font-body font-medium text-btn-primary-text tracking-wide">{{ name }}</span>
  </div>
</template>
