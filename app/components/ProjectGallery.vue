<template>
  <section class="projects-container h-screen flex items-center overflow-hidden" ref="container">
    <div class="projects-wrapper flex gap-16 px-[5vw] w-fit" ref="wrapper">
      
      <!-- Looping data proyek -->
      <a v-for="(proj, index) in projects" :key="index" :href="proj.link" class="project-card interactive w-[400px] h-[550px] bg-white/2 border border-[rgba(125,211,252,0.15)] rounded-2xl p-8 flex flex-col justify-end relative preserve-3d transition-colors duration-300 hover:border-[#7DD3FC]">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B1220]/90 rounded-2xl z-[1] -translate-z-5"></div>
        <div class="project-content z-[2] translate-z-8">
          <h3 class="text-2xl mb-2 font-['Syne']">{{ proj.title }}</h3>
          <p class="text-sm text-[#94A3B8] mb-4">{{ proj.desc }}</p>
          <div class="flex gap-2 flex-wrap text-xs text-[#7DD3FC]">
            <span v-for="tech in proj.tech" :key="tech" class="px-2 py-1 bg-[#7DD3FC]/10 rounded">{{ tech }}</span>
          </div>
        </div>
      </a>
      
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const container = ref(null)
const wrapper = ref(null)
let ctx

// Data Proyek disesuaikan persis dengan CV Anda
const projects = [
  { 
    title: 'Automotive & EV Technology', 
    desc: 'Architected interactive 3D simulations detailing Electric Motorcycle Engine mechanics and Battery Management System (BMS) energy flow visualization.', 
    tech: ['Unity 3D', 'C#', 'Simulation Architecture'], 
    link: '#' 
  },
  { 
    title: 'HVAC Simulation Modules', 
    desc: 'Engineered realistic interactive modules covering thermodynamic components, Vacuum & Evacuation, and Recovery & Recharging cycles.', 
    tech: ['Unity', 'zSpace', '3D Optimization'], 
    link: '#' 
  },
  { 
    title: 'Electrical Engineering', 
    desc: 'Developed real-time circuit logic and interactive experiment systems for Ohm\'s Law, switches, and complete Residential Wiring installations.', 
    tech: ['C#', 'Circuit Logic', 'WebXR'], 
    link: '#' 
  }
]

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  if (!prefersReducedMotion) {
    ctx = gsap.context(() => {
      
      // KITA GANTI: Animasikan wrapper-nya langsung, bukan sections-nya
      gsap.to(wrapper.value, {
        // Geser ke kiri sejauh (Total panjang konten - Lebar layar saat ini)
        x: () => -(wrapper.value.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: container.value,
          pin: true,
          scrub: 1,
          // end-nya kita buat dinamis berdasarkan panjang wrapper
          end: () => "+=" + (wrapper.value.scrollWidth - window.innerWidth)
        }
      })
      
    }, container.value) 
  }
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>