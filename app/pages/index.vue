<template>
  <div>
    <Preloader v-if="isLoading" @complete="isLoading = false" />
    
    <section class="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">
      <HeroCanvas />
      
      <div class="max-w-7xl mx-auto w-full z-10 text-center space-y-6">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-surfaceBorder text-neonCyan text-xs font-mono uppercase tracking-widest">
          <span>// Unity Developer & Interactive 3D Specialist</span>
        </div>
        
        <h1 class="font-display text-fluid-hero font-extrabold tracking-tighter text-white uppercase">
          Wildy <span class="text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-neonPurple">Simanjuntak</span>
        </h1>
        
        <p class="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-sans">
          Building award-level immersive simulations, WebXR experiences, and modern high-performance web systems from Batam, Indonesia.
        </p>

        <div class="pt-8 flex items-center justify-center gap-4">
          <a href="#projects" class="px-6 py-3 rounded-full bg-neonCyan text-darkBg font-bold text-xs uppercase tracking-wider hover:bg-white transition-all">
            Explore Work
          </a>
          <a href="#contact" class="px-6 py-3 rounded-full bg-surface border border-surfaceBorder text-white font-bold text-xs uppercase tracking-wider hover:border-neonCyan transition-all">
            Get in Touch
          </a>
        </div>
      </div>
>
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 font-mono text-xs z-10">
        <span>SCROLL TO DISCOVER</span>
        <div class="w-[1px] h-12 bg-surfaceBorder relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-1/2 bg-neonCyan animate-bounce"></div>
        </div>
      </div>
    </section>

    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <EducationSection />
    <ContactSection />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isLoading = ref(true)
</script>