<template>
  <section ref="aboutSec" class="about container mx-auto px-[5vw] py-[10vh] relative">
    <p class="about-text gs-reveal text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.4] max-w-[1000px] text-[#94A3B8] font-['Syne']">
      Informatics Engineering professional based in Batam. I architect engaging <span class="text-[#F8FAFC]">Unity-based simulations</span> and modern web applications utilizing <span class="text-[#F8FAFC]">Vue, Nuxt, and Tailwind CSS</span>. I combine strong technical problem-solving with a passion for seamless, <span class="text-[#F8FAFC]">high-performance immersive user experiences</span>.
    </p>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const aboutSec = ref(null)
let ctx

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.fromTo('.gs-reveal', 
      { y: 50, opacity: 0 }, 
      {
        y: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: {
          trigger: '.gs-reveal',
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    )
  }, aboutSec.value)
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>