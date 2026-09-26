<script setup lang="ts">
</script>

<template>
  <section class="pt-24 pb-16 md:pt-32 md:pb-24">
    <!-- Content Grid -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
      
      <!-- Sticky Sidebar -->
      <div class="md:col-span-4 lg:col-span-4">
        <AppScrollReveal>
          <div class="md:sticky md:top-32">
            <h1 class="text-[40px] md:text-[48px] font-display font-bold text-text-primary leading-tight tracking-tight mb-12">
              Work.
            </h1>
            <h2 class="text-[12px] text-text-primary font-body font-medium uppercase tracking-widest border-t border-text-primary pt-4 block w-12">
              Selected
            </h2>
          </div>
        </AppScrollReveal>
      </div>

      <!-- Main Prose -->
      <div class="md:col-span-8 lg:col-span-8 flex flex-col space-y-6 pt-2">
        <AppScrollReveal :delay="150">
          <p class="text-[22px] md:text-[28px] leading-[1.4] text-text-primary font-body font-light tracking-tight">
            A curated selection of work highlighting my focus on scalable architectures, real-time systems, and complex product engineering.
          </p>
        </AppScrollReveal>
        
        <AppScrollReveal :delay="250">
          <p class="text-[16px] md:text-[18px] text-text-secondary font-body font-light leading-[1.7] max-w-2xl">
            From high-throughput financial ledgers to AI-driven web applications, these projects demonstrate a commitment to precision, performance, and delivering measurable business value.
          </p>
        </AppScrollReveal>
      </div>
    </div>
  </section>
</template>
