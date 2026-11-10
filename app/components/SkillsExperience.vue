<template>
  <section ref="expertiseSec" class="container mx-auto px-[5vw] py-[10vh] grid grid-cols-1 md:grid-cols-2 gap-16">
    <!-- Kolom Kiri: Core Stack -->
    <div>
      <h2 class="section-title gs-reveal text-5xl mb-12 text-[#7DD3FC] font-['Syne']">Core Stack</h2>
      <div class="skill-list gs-reveal space-y-6">
        <p><strong>Engines & 3D:</strong> Unity 6, URP, Shader Graph, WebXR, Three.js</p>
        <p><strong>Frontend:</strong> Nuxt.js (Nuxt 3), Vue.js (Vue 3), JavaScript ES6, Tailwind CSS, HTML5/CSS3</p>
        <p><strong>Backend & Tools:</strong> Node.js, C#, MongoDB, Git, GitHub, Firebase</p>
      </div>
    </div>

    <!-- Kolom Kanan: Experience & Education -->
    <div>
      <h2 class="section-title gs-reveal text-5xl mb-12 text-[#7DD3FC] font-['Syne']">Experience</h2>
      <div class="exp-list">
        
        <!-- Pekerjaan 1 -->
        <div class="exp-item gs-reveal mb-8 pl-6 border-l border-[rgba(125,211,252,0.15)] relative">
          <div class="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-[#7DD3FC] rounded-full"></div>
          <h3 class="exp-role text-2xl font-['Syne']">Unity Developer (Contract)</h3>
          <p class="exp-company text-[#7DD3FC] my-2 text-sm font-bold">Apr 2023 - Present • PT Labtech Penta International</p>
          <p class="exp-desc text-[#94A3B8] text-sm leading-relaxed">
            Architected and engineered 15+ interactive 2D/3D simulations using Unity and C#. Conducted extensive performance profiling (draw call reduction, LOD management) cutting memory usage by 25% and ensuring steady 60 FPS execution.
          </p>
        </div>

        <!-- Pekerjaan 2 -->
        <div class="exp-item gs-reveal mb-8 pl-6 border-l border-[rgba(125,211,252,0.15)] relative">
          <div class="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-[#7DD3FC] rounded-full"></div>
          <h3 class="exp-role text-2xl font-['Syne']">Web Software Developer Intern</h3>
          <p class="exp-company text-[#7DD3FC] my-2 text-sm font-bold">Jul 2022 - Mar 2023 • PT Labtech Penta International</p>
          <p class="exp-desc text-[#94A3B8] text-sm leading-relaxed">
            Developed and shipped responsive web modules utilizing Vue.js, Nuxt.js, and Tailwind CSS. Maintained and optimized Learning Management Systems (LMS) serving over 1,000 active users, diagnosing bugs and maintaining 99.8% system uptime.
          </p>
        </div>
      </div>

      <!-- Education Section -->
      <h2 class="section-title gs-reveal text-5xl mb-12 mt-16 text-[#7DD3FC] font-['Syne']">Education</h2>
      <div class="exp-list">
        <div class="exp-item gs-reveal mb-8 pl-6 border-l border-[rgba(125,211,252,0.15)] relative">
          <div class="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-[#7DD3FC] rounded-full"></div>
          <h3 class="exp-role text-2xl font-['Syne']">Diploma III (D3) in Informatics Engineering</h3>
          <p class="exp-company text-[#7DD3FC] my-2 text-sm font-bold">Politeknik Negeri Batam • GPA: 3.47/4.00</p>
          <p class="exp-desc text-[#94A3B8] text-sm leading-relaxed">
            Relevant Coursework & Focus: Software Engineering, Object-Oriented Programming (OOP), Data Structures & Algorithms, Web Architecture, and Computer Graphics.
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const expertiseSec = ref(null)
let ctx

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.utils.toArray('.gs-reveal').forEach(elem => {
      gsap.fromTo(elem, 
        { y: 50, opacity: 0 }, 
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })
  }, expertiseSec.value)
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>