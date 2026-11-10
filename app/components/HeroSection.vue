<template>
  <section ref="heroSection" class="hero h-screen flex items-center justify-center overflow-hidden perspective-[1000px] relative">
    <div class="hero-bg-glow absolute top-1/2 left-1/2 w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(125,211,252,0.15)_0%,rgba(11,18,32,0)_70%)] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>
    
    <div ref="heroContent" class="hero-content text-center [transform-style:preserve-3d] z-10">
      <h1 class="hero-title text-[clamp(3rem,8vw,8rem)] leading-none uppercase mb-4 font-['Syne']">Wildy J.<br>Simanjuntak</h1>
      <p class="hero-subtitle text-[clamp(1rem,2vw,1.5rem)] text-[#94A3B8] uppercase tracking-[0.1em] mb-8">Web & Unity Developer</p>
      
      <!-- Tombol Download CV -->
      <a href="/CV - Wildy Johanes Simanjuntak.pdf" download="CV - Wildy Johanes Simanjuntak.pdf" class="interactive px-8 py-3 border border-[#7DD3FC] text-[#7DD3FC] rounded-full hover:bg-[#7DD3FC]/10 transition-colors duration-300 inline-block font-['JetBrains_Mono'] text-sm tracking-widest uppercase">
        Download CV
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const heroSection = ref(null)
const heroContent = ref(null)
let ctx

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!prefersReducedMotion) {
    ctx = gsap.context(() => {
      const handleMouseMove = (e) => {
        const x = (e.clientX - window.innerWidth / 2) / 50
        const y = (e.clientY - window.innerHeight / 2) / 50
        
        gsap.to(heroContent.value, {
          rotateX: -y,
          rotateY: x,
          x: x * 2,
          y: y * 2,
          duration: 1,
          ease: 'power2.out'
        })
      }

      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }, heroSection.value)
  }
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>