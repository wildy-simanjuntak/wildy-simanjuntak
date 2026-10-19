<template>
  <section id="about" class="relative py-32 px-6 max-w-7xl mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div class="lg:col-span-7 space-y-6">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-surfaceBorder text-neonCyan text-xs font-mono uppercase tracking-widest">
          <span>// 01. About Me</span>
        </div>
        <h2 class="font-display text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
          Architecting Immersive Worlds & High-Performance Web Systems.
        </h2>
        <p class="text-gray-400 text-base md:text-lg leading-relaxed font-sans">
          Informatics Engineering professional with over 3 years of hands-on expertise in software development, interactive 3D simulations, and web system management. I architect engaging Unity-based simulations and modern web applications utilizing Vue/Nuxt and Tailwind CSS, combining strong technical problem-solving with a passion for seamless, high-performance immersive user experiences. Based in Batam, Indonesia.
        </p>
        
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-surfaceBorder">
          <div>
            <div class="font-display text-3xl md:text-4xl font-bold text-neonCyan">3+</div>
            <div class="text-xs text-gray-400 uppercase tracking-wider mt-1">Years Experience</div>
          </div>
          <div>
            <div class="font-display text-3xl md:text-4xl font-bold text-white">Unity</div>
            <div class="text-xs text-gray-400 uppercase tracking-wider mt-1">3D / 2D Simulations</div>
          </div>
          <div>
            <div class="font-display text-3xl md:text-4xl font-bold text-neonCyan">WebXR</div>
            <div class="text-xs text-gray-400 uppercase tracking-wider mt-1">VR & AR Immersive</div>
          </div>
          <div>
            <div class="font-display text-3xl md:text-4xl font-bold text-white">3.47</div>
            <div class="text-xs text-gray-400 uppercase tracking-wider mt-1">GPA (Politeknik Batam)</div>
          </div>
        </div>
      </div>

      <div class="lg:col-span-5 relative">
        <div class="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-surface border border-surfaceBorder group">
          <!-- Parallax / stylistic visual placeholder for portrait -->
          <div class="absolute inset-0 bg-gradient-to-tr from-neonPurple/20 to-neonCyan/20 mix-blend-overlay"></div>
          <div class="absolute inset-0 flex items-center justify-center p-8 text-center">
            <div class="space-y-3">
              <div class="w-20 h-20 mx-auto rounded-full bg-neonCyan/10 border border-neonCyan flex items-center justify-center text-neonCyan font-display font-bold text-2xl">
                WJS
              </div>
              <h3 class="font-display text-xl font-bold text-white">Wildy Johanes Simanjuntak</h3>
              <p class="text-xs text-gray-400 font-mono">Batam, Riau Islands, Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>