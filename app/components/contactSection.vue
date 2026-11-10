<template>
  <section ref="contactSec" class="contact flex flex-col justify-center items-center text-center min-h-[80vh] px-[5vw] relative">
    <p class="hero-subtitle gs-reveal text-[clamp(1rem,2vw,1.5rem)] text-[#94A3B8] uppercase tracking-[0.1em]">Let's build something immersive</p>
    
    <a href="mailto:wildy.simanjuntak13@gmail.com" class="big-email interactive gs-reveal text-[clamp(2rem,5vw,6rem)] my-8 inline-block transition-colors duration-300 hover:text-[#7DD3FC] font-['Syne']">
      Hello@Wildy.dev
    </a>
    
    <div class="social-links gs-reveal flex gap-8 mt-8">
      <a href="https://github.com" target="_blank" class="magnetic-btn interactive px-8 py-4 border border-[rgba(125,211,252,0.15)] rounded-full bg-transparent text-[#F8FAFC] transition-colors duration-300 hover:bg-[#7DD3FC]/10 inline-block">GitHub</a>
      <a href="https://linkedin.com" target="_blank" class="magnetic-btn interactive px-8 py-4 border border-[rgba(125,211,252,0.15)] rounded-full bg-transparent text-[#F8FAFC] transition-colors duration-300 hover:bg-[#7DD3FC]/10 inline-block">LinkedIn</a>
    </div>

    <footer class="absolute bottom-0 w-full text-center p-8 text-[#94A3B8] text-xs border-t border-[rgba(125,211,252,0.15)]">
      <div class="container mx-auto">
        <p>&copy; 2026 Wildy Johanes Simanjuntak. Handcrafted with Code & Coffee.</p>
      </div>
    </footer>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const contactSec = ref(null)
let ctx

onMounted(() => {
  ctx = gsap.context(() => {
    // 1. Scroll Reveal Animations
    gsap.utils.toArray('.gs-reveal').forEach(elem => {
      gsap.fromTo(elem, 
        { y: 50, opacity: 0 }, 
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: {
            trigger: elem,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })

    // 2. Magnetic Buttons Logic
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!prefersReducedMotion) {
      document.querySelectorAll('.magnetic-btn').forEach(btn => {
        
        const moveButton = (e) => {
          const rect = btn.getBoundingClientRect()
          const x = e.clientX - rect.left - rect.width / 2
          const y = e.clientY - rect.top - rect.height / 2
          gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: 'power2.out' })
        }
        
        const resetButton = () => {
          gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.3)' })
        }

        btn.addEventListener('mousemove', moveButton)
        btn.addEventListener('mouseleave', resetButton)
        
        // Cleanup listeners via context return
        return () => {
          btn.removeEventListener('mousemove', moveButton)
          btn.removeEventListener('mouseleave', resetButton)
        }
      })
    }
  }, contactSec.value)
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>