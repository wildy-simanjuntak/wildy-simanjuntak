<template>
  <div 
    ref="preloaderRef" 
    class="fixed inset-0 z-[100] bg-darkBg flex flex-col items-center justify-center text-white pointer-events-none"
  >
    <div class="overflow-hidden mb-4">
      <h1 class="font-display text-2xl md:text-4xl font-bold tracking-wider text-neonCyan uppercase">
        Wildy Johanes Simanjuntak
      </h1>
    </div>
    <div class="flex items-center gap-4">
      <div class="w-48 h-[2px] bg-surfaceBorder overflow-hidden relative">
        <div ref="barRef" class="absolute top-0 left-0 h-full w-full bg-neonCyan -translate-x-full"></div>
      </div>
      <span ref="counterRef" class="font-mono text-xl text-neonCyan font-bold">00%</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const emit = defineEmits(['complete'])
const preloaderRef = ref(null)
const barRef = ref(null)
const counterRef = ref(null)

onMounted(() => {
  const tl = gsap.timeline({
    onComplete: () => {
      emit('complete')
    }
  })

  const obj = { val: 0 }
  tl.to(obj, {
    val: 100,
    duration: 1.8,
    ease: 'power4.inOut',
    onUpdate: () => {
      if (counterRef.value) {
        counterRef.value.innerText = `${Math.floor(obj.val)}%`
      }
    }
  })
  .to(barRef.value, {
    x: '0%',
    duration: 1.8,
    ease: 'power4.inOut'
  }, 0)
  .to(preloaderRef.value, {
    yPercent: -100,
    duration: 0.8,
    ease: 'power4.inOut'
  })
})
</script>