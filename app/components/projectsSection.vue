<template>
  <section id="projects" class="py-32 bg-surface/30 border-y border-surfaceBorder/60">
    <div class="max-w-7xl mx-auto px-6 mb-16">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-surfaceBorder text-neonCyan text-xs font-mono uppercase tracking-widest mb-4">
        <span>// 04. Selected Works</span>
      </div>
      <h2 class="font-display text-3xl md:text-5xl font-bold text-white">Featured Projects</h2>
    </div>

    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Project 1 -->
      <div class="group relative rounded-2xl overflow-hidden bg-surface border border-surfaceBorder p-8 flex flex-col justify-between hover:border-neonCyan transition-all duration-300">
        <div>
          <div class="flex items-center justify-between mb-6">
            <span class="text-xs font-mono text-neonCyan px-3 py-1 rounded bg-neonCyan/10">Unity 3D Engine</span>
            <span class="text-xs text-gray-500 font-mono">01 / 04</span>
          </div>
          <h3 class="font-display text-2xl font-bold text-white mb-3 group-hover:text-neonCyan transition-colors">Interactive 3D Technical Simulation</h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">
            High-fidelity interactive 3D simulation built in Unity, designed to enhance learning outcomes and experiential training for technical engineering concepts.
          </p>
        </div>
        <div class="flex flex-wrap gap-2 pt-4 border-t border-surfaceBorder text-xs font-mono text-gray-300">
          <span class="px-2 py-1 bg-darkBg rounded">C#</span>
          <span class="px-2 py-1 bg-darkBg rounded">Unity 3D</span>
          <span class="px-2 py-1 bg-darkBg rounded">Immersive UX</span>
        </div>
      </div>

      <!-- Project 2 -->
      <div class="group relative rounded-2xl overflow-hidden bg-surface border border-surfaceBorder p-8 flex flex-col justify-between hover:border-neonCyan transition-all duration-300">
        <div>
          <div class="flex items-center justify-between mb-6">
            <span class="text-xs font-mono text-neonCyan px-3 py-1 rounded bg-neonCyan/10">WebXR Demo</span>
            <span class="text-xs text-gray-500 font-mono">02 / 04</span>
          </div>
          <h3 class="font-display text-2xl font-bold text-white mb-3 group-hover:text-neonCyan transition-colors">WebXR Immersive Environment</h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">
            Browser-based virtual reality and augmented reality simulation demonstrating real-time 3D object manipulation and spatial audio integration.
          </p>
        </div>
        <div class="flex flex-wrap gap-2 pt-4 border-t border-surfaceBorder text-xs font-mono text-gray-300">
          <span class="px-2 py-1 bg-darkBg rounded">Three.js</span>
          <span class="px-2 py-1 bg-darkBg rounded">WebXR</span>
          <span class="px-2 py-1 bg-darkBg rounded">JavaScript</span>
        </div>
      </div>

      <!-- Project 3 -->
      <div class="group relative rounded-2xl overflow-hidden bg-surface border border-surfaceBorder p-8 flex flex-col justify-between hover:border-neonCyan transition-all duration-300">
        <div>
          <div class="flex items-center justify-between mb-6">
            <span class="text-xs font-mono text-neonCyan px-3 py-1 rounded bg-neonCyan/10">System Architecture</span>
            <span class="text-xs text-gray-500 font-mono">03 / 04</span>
          </div>
          <h3 class="font-display text-2xl font-bold text-white mb-3 group-hover:text-neonCyan transition-colors">Enterprise LMS Platform</h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">
            Learning Management System administration and maintenance ensuring robust uptime, optimized database queries, and frictionless user experiences.
          </p>
        </div>
        <div class="flex flex-wrap gap-2 pt-4 border-t border-surfaceBorder text-xs font-mono text-gray-300">
          <span class="px-2 py-1 bg-darkBg rounded">Web Architecture</span>
          <span class="px-2 py-1 bg-darkBg rounded">MongoDB</span>
          <span class="px-2 py-1 bg-darkBg rounded">Optimization</span>
        </div>
      </div>

      <!-- Project 4 -->
      <div class="group relative rounded-2xl overflow-hidden bg-surface border border-surfaceBorder p-8 flex flex-col justify-between hover:border-neonCyan transition-all duration-300">
        <div>
          <div class="flex items-center justify-between mb-6">
            <span class="text-xs font-mono text-neonCyan px-3 py-1 rounded bg-neonCyan/10">Nuxt 3 App</span>
            <span class="text-xs text-gray-500 font-mono">04 / 04</span>
          </div>
          <h3 class="font-display text-2xl font-bold text-white mb-3 group-hover:text-neonCyan transition-colors">Modern Portfolio & Web App</h3>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">
            High-performance web application engineered with Nuxt 3, Vue 3, and Tailwind CSS featuring fluid typography, GSAP animations, and SEO optimization.
          </p>
        </div>
        <div class="flex flex-wrap gap-2 pt-4 border-t border-surfaceBorder text-xs font-mono text-gray-300">
          <span class="px-2 py-1 bg-darkBg rounded">Nuxt.js</span>
          <span class="px-2 py-1 bg-darkBg rounded">Vue.js</span>
          <span class="px-2 py-1 bg-darkBg rounded">Tailwind CSS</span>
        </div>
      </div>
    </div>
  </section>
</template>