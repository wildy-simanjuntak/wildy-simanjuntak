<template>
  <section class="projects-container h-screen flex items-center overflow-hidden" ref="container">
    <div class="projects-wrapper flex gap-16 px-[5vw] w-fit" ref="wrapper">
      
      <a v-for="(proj, index) in projects" :key="index" :href="proj.link" target="_blank" class="project-card interactive w-[400px] h-[550px] border border-[rgba(125,211,252,0.15)] rounded-2xl p-8 flex flex-col justify-end relative overflow-hidden preserve-3d transition-all duration-300 hover:border-[#7DD3FC]">
        
        <div class="absolute inset-0 z-0">
          <img :src="proj.image" :alt="proj.title" class="w-full h-full object-cover transition-transform duration-700 hover:scale-105 opacity-40">
        </div>

        <div class="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/80 to-transparent z-[1]"></div>
        
        <div class="project-content z-[2] translate-z-8">
          <h3 class="text-2xl mb-2 font-['Syne'] text-[#F8FAFC]">{{ proj.title }}</h3>
          <p class="text-sm text-[#94A3B8] mb-4 leading-relaxed">{{ proj.desc }}</p>
          <div class="flex gap-2 flex-wrap text-xs text-[#7DD3FC]">
            <span v-for="tech in proj.tech" :key="tech" class="px-2 py-1 bg-[#7DD3FC]/10 rounded">{{ tech }}</span>
          </div>
        </div>
      </a>
      
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const container = ref(null)
const wrapper = ref(null)
let ctx

const projects = [
    { 
    title: 'World (3D Simulation)', 
    desc: 'Immersive 3D mini world simulation featuring custom skybox, occlusion culling, dynamic post-processing, atmospheric fog, and character movement.', 
    tech: ['Unity 6', 'URP', 'Shader Graph', 'Post-Processing'], 
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop', 
    link: 'https://drive.google.com/file/d/1BECYKA0La9cD3KTpNdzbbC4ZHIeG_L7_/view?usp=drive_link', 
  },
  { 
    title: 'Automotive & EV Technology', 
    desc: 'Architected interactive 3D simulations detailing Electric Motorcycle Engine mechanics and Battery Management System (BMS) energy flow visualization.', 
    tech: ['Unity 3D', 'C#', 'Simulation Architecture'], 
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop', // Ganti dengan URL gambar Anda
    link: '#' 
  },
  { 
    title: 'HVAC Simulation Modules', 
    desc: 'Engineered realistic interactive modules covering thermodynamic components, Vacuum & Evacuation, and Recovery & Recharging cycles.', 
    tech: ['Unity', 'zSpace', '3D Optimization'], 
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop', // Ganti dengan URL gambar Anda
    link: '#' 
  },
  { 
    title: 'Electrical Engineering', 
    desc: 'Developed real-time circuit logic and interactive experiment systems for Ohm\'s Law, switches, and complete Residential Wiring installations.', 
    tech: ['C#', 'Circuit Logic'], 
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=800&auto=format&fit=crop', // Ganti dengan URL gambar Anda
    link: '#' 
  }
]

onMounted(async () => {
  await nextTick()

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  if (!prefersReducedMotion) {
    setTimeout(() => {
      if (!wrapper.value || !container.value) return;

      ctx = gsap.context(() => {
        const getScrollAmount = () => {
          let amount = wrapper.value.scrollWidth - window.innerWidth
          return amount > 0 ? amount : 0 
        }

        if (getScrollAmount() === 0) return;

        gsap.to(wrapper.value, {
          x: () => -getScrollAmount(),
          ease: "none",
          scrollTrigger: {
            trigger: container.value,
            pin: true,
            scrub: 1,
            end: () => "+=" + getScrollAmount(),
            invalidateOnRefresh: true
          }
        })
        
      }, container.value) 
    }, 100)
  }
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>