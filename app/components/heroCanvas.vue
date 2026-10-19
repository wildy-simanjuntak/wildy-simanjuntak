<template>
  <div ref="canvasContainer" class="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-60"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const canvasContainer = ref(null)
let scene, camera, renderer, particles, animationFrameId
let mouseX = 0, mouseY = 0
let targetX = 0, targetY = 0

const onMouseMove = (event) => {
  mouseX = (event.clientX - window.innerWidth / 2) * 0.001
  mouseY = (event.clientY - window.innerHeight / 2) * 0.001
}

onMounted(() => {
  if (typeof window === 'undefined') return
  
  // Check reduce motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (prefersReducedMotion) return

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 5

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  canvasContainer.value.appendChild(renderer.domElement)

  // Low-poly floating geometric particle field representing simulation nodes
  const geometry = new THREE.BufferGeometry()
  const count = 700
  const positions = new Float32Array(count * 3)

  for(let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  const material = new THREE.PointsMaterial({
    size: 0.03,
    color: 0x00f0ff,
    transparent: true,
    opacity: 0.7,
  })

  particles = new THREE.Points(geometry, material)
  scene.add(particles)

  // Add an interactive low-poly wireframe torus/icosahedron
  const geoShape = new THREE.IcosahedronGeometry(1.8, 1)
  const matShape = new THREE.MeshBasicMaterial({
    color: 0x7928ca,
    wireframe: true,
    transparent: true,
    opacity: 0.25
  })
  const meshShape = new THREE.Mesh(geoShape, matShape)
  meshShape.position.set(0, 0, -1)
  scene.add(meshShape)

  window.addEventListener('mousemove', onMouseMove)

  const handleResize = () => {
    if (!camera || !renderer) return
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }
  window.addEventListener('resize', handleResize)

  const animate = () => {
    animationFrameId = requestAnimationFrame(animate)

    targetX += (mouseX - targetX) * 0.05
    targetY += (mouseY - targetY) * 0.05

    particles.rotation.x += 0.001 + targetY * 0.2
    particles.rotation.y += 0.002 + targetX * 0.2

    meshShape.rotation.x -= 0.003
    meshShape.rotation.y += 0.004

    renderer.render(scene, camera)
  }
  animate()

  onUnmounted(() => {
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('resize', handleResize)
    cancelAnimationFrame(animationFrameId)
    if (renderer && renderer.domElement) {
      renderer.dispose()
      canvasContainer.value?.removeChild(renderer.domElement)
    }
  })
})
</script>