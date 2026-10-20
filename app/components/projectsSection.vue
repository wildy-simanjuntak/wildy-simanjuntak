<template>
  <section id="projects" class="py-32 bg-surface/30 border-y border-surfaceBorder/60">
    <div class="max-w-7xl mx-auto px-6 mb-16">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-surfaceBorder text-neonCyan text-xs font-mono uppercase tracking-widest mb-4">
        <span>// 04. Selected Works</span>
      </div>
      <h2 class="font-display text-3xl md:text-5xl font-bold text-white">Featured Projects</h2>
    </div>

    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 gap-8">
      <div class="group relative rounded-2xl overflow-hidden bg-surface border border-surfaceBorder p-8 md:p-12 flex flex-col justify-between hover:border-neonCyan transition-all duration-300">
        <div>
          <div class="flex items-center justify-between mb-6">
            <span class="text-xs font-mono text-neonCyan px-3 py-1 rounded bg-neonCyan/10">Latest Release / 3D World Simulation</span>
            <span class="text-xs text-gray-500 font-mono">01 / 01</span>
          </div>
          <h3 class="font-display text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-neonCyan transition-colors">Interactive Grass Forest & Character World</h3>
          <p class="text-gray-400 text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
            Latest portfolio project featuring an immersive mini-world environment with a lush grass forest. Optimized with occlusion culling for performance, atmospheric skybox integration, environmental fog, advanced post-processing visual effects, and a responsive character movement system.
          </p>
        </div>
        <div>
          <div class="flex flex-wrap gap-2 pt-4 border-t border-surfaceBorder text-xs font-mono text-gray-300 mb-8">
            <span class="px-2.5 py-1 bg-darkBg rounded">Skybox</span>
            <span class="px-2.5 py-1 bg-darkBg rounded">Occlusion Culling</span>
            <span class="px-2.5 py-1 bg-darkBg rounded">Post-Processing</span>
            <span class="px-2.5 py-1 bg-darkBg rounded">Fog</span>
            <span class="px-2.5 py-1 bg-darkBg rounded">Character Movement</span>
          </div>
          <div>
            <a 
              href="https://drive.google.com/file/d/1BECYKA0La9cD3KTpNdzbbC4ZHIeG_L7_/view?usp=drive_link" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neonCyan/10 border border-neonCyan/50 text-neonCyan font-mono text-sm hover:bg-neonCyan hover:text-darkBg transition-all duration-300"
            >
              <span>Watch Demo Preview</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>