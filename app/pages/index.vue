<template>
  <div class="noise fixed inset-0 pointer-events-none opacity-[0.04] z-[9999]"></div>
  
  <div ref="cursorDot" class="cursor-dot fixed w-2 h-2 bg-[#7DD3FC] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"></div>
  <div ref="cursorOutline" class="cursor-outline fixed w-10 h-10 border border-[#7DD3FC] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-all duration-200"></div>

  <main>
    <HeroSection />
    <AboutSection />
    <ProjectGallery />
    <SkillsExperience />
    <ContactSection />
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

gsap.registerPlugin(ScrollTrigger)

const cursorDot = ref(null)
const cursorOutline = ref(null)
const preloader = ref(null)
const heroContent = ref(null)

let lenis
let ctx 
let animationFrameId

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  ctx = gsap.context(() => {
    const tl = gsap.timeline()
    tl.to('.preloader-text', { y: -50, opacity: 0, duration: 0.5, ease: 'power2.in' })
      .to(preloader.value, { yPercent: -100, duration: 0.8, ease: 'expo.inOut' })
      .from('.hero-title', { y: 100, opacity: 0, duration: 1, ease: 'expo.out' }, '-=0.3')
      .from('.hero-subtitle', { y: 50, opacity: 0, duration: 1, ease: 'expo.out' }, '-=0.6')

    if (!prefersReducedMotion) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true
      })

      lenis.on('scroll', ScrollTrigger.update)
      gsap.ticker.add((time) => { lenis.raf(time * 1000) })
      gsap.ticker.lagSmoothing(0)

      let mouseX = window.innerWidth / 2
      let mouseY = window.innerHeight / 2
      let outlineX = mouseX
      let outlineY = mouseY

      const handleMouseMove = (e) => {
        mouseX = e.clientX
        mouseY = e.clientY
        
        gsap.to(cursorDot.value, { x: mouseX, y: mouseY, duration: 0 })

        const x = (mouseX - window.innerWidth / 2) / 50
        const y = (mouseY - window.innerHeight / 2) / 50
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

      const renderCursor = () => {
        outlineX += (mouseX - outlineX) * 0.15
        outlineY += (mouseY - outlineY) * 0.15
        gsap.set(cursorOutline.value, { x: outlineX, y: outlineY })
        animationFrameId = requestAnimationFrame(renderCursor)
      }
      renderCursor()

    }
  })
})

onUnmounted(() => {
  if (ctx) ctx.revert()
  if (lenis) {
    lenis.destroy()
    gsap.ticker.remove((time) => { lenis.raf(time * 1000) })
  }
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
})
</script>