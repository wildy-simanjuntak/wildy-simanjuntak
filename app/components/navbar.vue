<template>
  <header class="fixed top-0 left-0 w-full z-50 px-6 py-6 transition-all duration-300 backdrop-blur-md bg-darkBg/60 border-b border-surfaceBorder/40">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <a href="#" class="font-display font-bold text-lg tracking-wider text-white hover:text-neonCyan transition-colors">
        WILDY<span class="text-neonCyan">.</span>JS
      </a>
      
      <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
        <a href="#about" class="hover:text-neonCyan transition-colors">About</a>
        <a href="#skills" class="hover:text-neonCyan transition-colors">Skills</a>
        <a href="#experience" class="hover:text-neonCyan transition-colors">Experience</a>
        <a href="#projects" class="hover:text-neonCyan transition-colors">Projects</a>
        <a href="#contact" class="hover:text-neonCyan transition-colors">Contact</a>
      </nav>

      <div class="flex items-center gap-4">
        <a 
          href="mailto:wildy.simanjuntak13@gmail.com"
          class="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-darkBg bg-neonCyan rounded-full hover:bg-white transition-all transform hover:scale-105"
        >
          Let's Talk
        </a>
      </div>
    </div>
  </header>
</template>