<template>
  <section id="skills" class="py-32 bg-surface/40 border-y border-surfaceBorder/60 relative">
    <div class="max-w-7xl mx-auto px-6 mb-16">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-surfaceBorder text-neonCyan text-xs font-mono uppercase tracking-widest mb-4">
        <span>// 02. Technical Arsenal</span>
      </div>
      <h2 class="font-display text-3xl md:text-5xl font-bold text-white">Core Competencies & Stack</h2>
    </div>

    <div class="relative w-full overflow-hidden whitespace-nowrap py-4 bg-surfaceBorder/20 border-y border-surfaceBorder">
      <div class="inline-flex gap-8 animate-marquee text-neonCyan font-mono text-sm tracking-widest uppercase">
        <span v-for="n in 2" :key="n" class="inline-flex gap-8 items-center">
          <span>C#</span> &bull;
          <span>Unity 2D/3D</span> &bull;
          <span>Vue.js</span> &bull;
          <span>Nuxt.js</span> &bull;
          <span>Tailwind CSS</span> &bull;
          <span>Three.js</span> &bull;
          <span>WebXR (VR & AR)</span> &bull;
          <span>JavaScript</span> &bull;
          <span>MongoDB</span> &bull;
          <span>LMS Architecture</span> &bull;
        </span>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="p-8 rounded-2xl bg-surface border border-surfaceBorder hover:border-neonCyan transition-all duration-300 group">
        <div class="text-neonCyan font-mono text-xs mb-4">01 // LANGUAGES</div>
        <h3 class="font-display text-xl font-bold text-white mb-3">Programming</h3>
        <p class="text-gray-400 text-sm leading-relaxed">C#, JavaScript, HTML5, CSS3 built with clean code standards.</p>
      </div>

      <div class="p-8 rounded-2xl bg-surface border border-surfaceBorder hover:border-neonCyan transition-all duration-300 group">
        <div class="text-neonCyan font-mono text-xs mb-4">02 // FRONTEND</div>
        <h3 class="font-display text-xl font-bold text-white mb-3">Web Ecosystem</h3>
        <p class="text-gray-400 text-sm leading-relaxed">Nuxt.js, Vue.js, Tailwind CSS, Three.js for interactive responsive apps.</p>
      </div>

      <div class="p-8 rounded-2xl bg-surface border border-surfaceBorder hover:border-neonCyan transition-all duration-300 group">
        <div class="text-neonCyan font-mono text-xs mb-4">03 // IMMERSIVE</div>
        <h3 class="font-display text-xl font-bold text-white mb-3">Simulation & XR</h3>
        <p class="text-gray-400 text-sm leading-relaxed">Unity 2D/3D high-fidelity engines, WebXR Virtual & Augmented Reality.</p>
      </div>

      <div class="p-8 rounded-2xl bg-surface border border-surfaceBorder hover:border-neonCyan transition-all duration-300 group">
        <div class="text-neonCyan font-mono text-xs mb-4">04 // DOMAIN</div>
        <h3 class="font-display text-xl font-bold text-white mb-3">Systems & LMS</h3>
        <p class="text-gray-400 text-sm leading-relaxed">Simulation Architecture, Web Systems, LMS Administration & Maintenance.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  display: inline-flex;
  animation: marquee 25s linear infinite;
}
</style>