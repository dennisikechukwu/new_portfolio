<script setup lang="ts">
// AboutHero component
</script>

<template>
  <section class="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border">
    <!-- Content Grid -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
      
      <!-- Sticky Sidebar -->
      <div class="md:col-span-4 lg:col-span-3">
        <AppScrollReveal>
          <div class="md:sticky md:top-32">
            <h1 class="text-[40px] md:text-[48px] font-display font-bold text-text-primary leading-tight tracking-tight mb-12">
              About.
            </h1>
            <h2 class="text-[12px] text-text-primary font-body font-medium uppercase tracking-widest border-t border-text-primary pt-4 block w-12">
              Story
            </h2>
          </div>
        </AppScrollReveal>
      </div>

      <!-- Main Prose -->
      <div class="md:col-span-8 lg:col-span-9 flex flex-col space-y-10 pt-2">
        <AppScrollReveal :delay="150">
          <p class="text-[20px] md:text-[24px] leading-[1.6] text-text-primary font-body font-normal">
            I engineer systems that scale, blending rigorous mathematical logic with modern software architecture.
          </p>
        </AppScrollReveal>

        <AppScrollReveal :delay="250">
          <p class="text-[18px] md:text-[20px] text-text-secondary font-body font-normal leading-[1.7] max-w-4xl">
            My journey into software engineering didn't start with a compiler—it started with equations. I studied Mathematics at the University of Lagos (Unilag), where I learned how to break down complex, abstract problems into absolute truths.
          </p>
        </AppScrollReveal>
        
        <AppScrollReveal :delay="350">
          <div class="space-y-6 text-[15px] md:text-[16px] text-text-secondary font-body font-light leading-[1.8] max-w-3xl">
            <p>
              Today, I apply that exact same mathematical rigor to full-stack software engineering. Whether I'm building pixel-perfect, highly reactive frontend interfaces in Vue and React, or engineering bank-grade distributed systems in Java, I approach every layer of the stack with the precision of a mathematical proof.
            </p>
            <p>
              I don't just write code to make things work. I architect robust systems and seamless user experiences. My primary focus spans modern frontend frameworks like Vue, Nuxt, and Next.js, down to secure, highly scalable backend engineering with Java and Spring Boot.
            </p>
          </div>
        </AppScrollReveal>
      </div>
    </div>
  </section>
</template>
