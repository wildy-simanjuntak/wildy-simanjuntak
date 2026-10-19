<template>
  <div class="min-h-screen bg-darkBg text-white relative">
    <div class="noise-overlay"></div>
    <Navbar />
    <slot />
    <footer class="py-8 border-t border-surfaceBorder text-center text-xs text-gray-500 font-mono">
      <div class="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>&copy; 2026 Wildy Johanes Simanjuntak. All rights reserved.</p>
        <a href="#" class="hover:text-neonCyan transition-colors">Back to Top &uarr;</a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'

let lenis

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) return

  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    smooth: true
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
})

onUnmounted(() => {
  if (lenis) lenis.destroy()
})
</script>