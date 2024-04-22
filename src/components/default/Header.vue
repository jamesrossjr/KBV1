<template>
  <nav class="bg-black/80 p-4 relative">
    <div class="flex justify-between items-center px-2 mx-auto max-w-7xl">
      <!-- Logo / Site Title -->
      <div class="flex items-center space-x-4">
        <a href="#" class="text-xl font-semibold text-white">
          JRRJR<sup class="text-xs font-thin">KBV1</sup>
        </a>
      </div>

      <!-- Hamburger Menu for Mobile -->
      <div class="md:hidden">
        <button @click="isMenuOpen = !isMenuOpen" class="text-white hover:text-gray-300">
          <!-- Hamburger Icon (Example with Heroicons) -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
          </svg>
        </button>
      </div>

      <!-- Primary Navigation -->
      <ul :class="{'hidden': !isMenuOpen, 'flex': isMenuOpen}" class="flex-col md:flex-row md:space-x-4 md:flex md:items-center absolute top-full left-0 right-0 md:static bg-black/80 md:bg-transparent w-full md:w-auto z-50">
        <li><a href="/" class="text-gray-300 hover:text-white block px-4 py-2 md:py-0">Home</a></li>
        <li><a href="/about" class="text-gray-300 hover:text-white block px-4 py-2 md:py-0">About Me</a></li>
        <li><a href="/portfolio" class="text-gray-300 hover:text-white block px-4 py-2 md:py-0">Portfolio</a></li>
        <li><a href="/knowledgebase" class="text-gray-300 hover:text-white block px-4 py-2 md:py-0">Knowledge Base</a></li>
        <li><a href="/blog" class="text-gray-300 hover:text-white block px-4 py-2 md:py-0">Blog</a></li>
        <li><a href="/services" class="text-gray-300 hover:text-white block px-4 py-2 md:py-0">Services</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const isMenuOpen = ref(false)
</script>

<style scoped>
/* Additional styles if needed */
</style>
