<script setup lang="ts">
import { HugeiconsIcon } from '@hugeicons/vue'
import { Menu02Icon, Cancel01Icon, ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import { primaryNav, allNav } from '~/data/navigation'

const isMobileMenuOpen = ref(false)

function openMenu() {
  isMobileMenuOpen.value = true
  document.body.style.overflow = 'hidden'
}

function closeMenu() {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

const route = useRoute()
watch(() => route.path, () => closeMenu())
</script>

<template>
  <header class="sticky top-0 z-50 bg-bg/95 backdrop-blur-sm border-b border-border">
    <div class="mx-auto max-w-6xl px-6 lg:px-10">
      <div class="flex items-center justify-between h-[72px]">
        <!-- Wordmark -->
        <NuxtLink
          to="/"
          class="font-display text-xl tracking-tight text-text-primary hover:opacity-70 transition-opacity duration-200"
        >
          Dennis.
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-8" aria-label="Primary navigation">
          <NuxtLink
            v-for="item in allNav"
            :key="item.to"
            :to="item.to"
            class="relative text-[14px] font-body tracking-wide hover:text-text-primary transition-colors duration-200"
            :class="[
              route.path === item.to || route.path.startsWith(item.to + '/') 
                ? 'text-text-primary font-medium' 
                : 'text-text-secondary font-normal'
            ]"
          >
            {{ item.label }}
            <!-- Active indicator dot -->
            <span 
              v-if="route.path === item.to || route.path.startsWith(item.to + '/')" 
              class="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-[4px] h-[4px] bg-text-primary rounded-full"
            ></span>
          </NuxtLink>
        </nav>

        <!-- Right Side Actions -->
        <div class="flex items-center gap-3">
          <!-- Resume Button -->
          <AppButton
            href="/Dennis_Ikechukwu_Resume.pdf"
            target="_blank"
            size="sm"
          >
            Resume
            <HugeiconsIcon :icon="ArrowUpRight01Icon" :size="14" />
          </AppButton>

          <!-- Mobile Menu Toggle -->
          <button
            class="lg:hidden flex items-center justify-center w-10 h-10 -mr-2 text-text-primary hover:opacity-60 transition-opacity duration-200 cursor-pointer"
            aria-label="Open navigation menu"
            @click="openMenu"
          >
            <HugeiconsIcon :icon="Menu02Icon" :size="22" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Teleport to="body">
      <Transition name="mobile-menu">
        <div
          v-if="isMobileMenuOpen"
          class="fixed inset-0 z-[100] bg-bg"
        >
          <!-- Mobile Menu Header -->
          <div class="px-6 flex items-center justify-between h-[72px] border-b border-border">
            <NuxtLink
              to="/"
              class="font-display text-xl tracking-tight text-text-primary"
              @click="closeMenu"
            >
              Dennis.
            </NuxtLink>
            <button
              class="flex items-center justify-center w-10 h-10 -mr-2 text-text-primary hover:opacity-60 transition-opacity duration-200 cursor-pointer"
              aria-label="Close navigation menu"
              @click="closeMenu"
            >
              <HugeiconsIcon :icon="Cancel01Icon" :size="22" />
            </button>
          </div>

          <!-- Mobile Menu Links -->
          <nav class="px-6 pt-8 pb-10 flex flex-col" aria-label="Mobile navigation">
            <NuxtLink
              v-for="item in allNav"
              :key="item.to"
              :to="item.to"
              class="relative flex items-center py-4 text-[28px] font-display tracking-tight border-b border-border-light first:border-t-0 hover:opacity-60 transition-opacity duration-200"
              :class="[
                route.path === item.to || route.path.startsWith(item.to + '/')
                  ? 'text-text-primary'
                  : 'text-text-secondary'
              ]"
              @click="closeMenu"
            >
              <span 
                v-if="route.path === item.to || route.path.startsWith(item.to + '/')"
                class="absolute left-0 w-1.5 h-1.5 bg-text-primary rounded-full -ml-4"
              ></span>
              {{ item.label }}
            </NuxtLink>

            <div class="mt-5 flex flex-col gap-4">
              <AppButton href="/Dennis_Ikechukwu_Resume.pdf" target="_blank" size="lg" class="w-full">
                Resume
                <HugeiconsIcon :icon="ArrowUpRight01Icon" :size="14" />
              </AppButton>

              <AppButton to="/contact" variant="secondary" size="lg" class="w-full">
                Get in Touch
              </AppButton>
            </div>
          </nav>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.mobile-menu-enter-from {
  opacity: 0;
  transform: translateY(-8px);
}

.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
