<script setup lang="ts">
const interests = [
  {
    title: 'Basketball',
    description: 'Analyzing plays, studying the game, and applying on-court strategy to real-world problem solving.',
    media: [
      '/curry1_new.jpg',
      '/curry2.jpg',
      '/curry3.jpg',
    ],
    theme: 'dark'
  },
  {
    title: 'Anime',
    description: 'Appreciating world-building, complex narratives, and the artistry of Japanese animation.',
    media: [
      '/gojo_new.jpg',
      '/ayanokoji.jpg',
      '/kakashi.jpg',
    ],
    theme: 'dark'
  },
  {
    title: 'Continuous Learning',
    description: "Whether it's exploring new backend paradigms, Web3 integration, or AI, the learning never actually stops.",
    media: [
      'https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif',
      'https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif',
      'https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif',
    ],
    theme: 'light'
  }
]
</script>

<template>
  <section class="py-16 md:py-24">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
      
      <!-- Sticky Sidebar -->
      <div class="md:col-span-4 lg:col-span-3">
        <AppScrollReveal>
          <div class="md:sticky md:top-32">
            <h2 class="text-[12px] text-text-primary font-body font-medium uppercase tracking-widest border-t border-text-primary pt-4 block w-12">
              Off Duty
            </h2>
          </div>
        </AppScrollReveal>
      </div>

      <!-- Gallery Grid -->
      <div class="md:col-span-8 lg:col-span-9 pt-2">
        <div class="flex flex-col gap-12">
          
          <!-- Each Interest Block -->
          <div 
            v-for="(interest, idx) in interests" 
            :key="interest.title"
          >
            <!-- Interest Header -->
            <AppScrollReveal :delay="150" class="mb-5">
              <h3 class="text-[22px] md:text-[28px] font-display font-medium text-text-primary tracking-tight mb-2">{{ interest.title }}</h3>
              <p class="text-[14px] md:text-[15px] text-text-secondary font-body font-light leading-relaxed max-w-lg">{{ interest.description }}</p>
            </AppScrollReveal>

            <!-- Media Gallery Row -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <AppScrollReveal 
                v-for="(src, srcIdx) in interest.media" 
                :key="srcIdx"
                :delay="200 + (srcIdx * 150)"
                class="group relative aspect-[4/3] rounded-xl overflow-hidden bg-[#1a1a1a] border border-border/40 shadow-[0_4px_20px_rgb(0,0,0,0.06)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)]"
              >
                <!-- Image / GIF -->
                <img 
                  :src="src" 
                  :alt="`${interest.title} media ${srcIdx + 1}`"
                  class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <!-- Subtle Vignette Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </AppScrollReveal>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>


