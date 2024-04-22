<template>
    <nav class="bg-black/80 p-4">
      <div class="flex justify-between items-center px-4 max-w-full">
        <!-- Logo / Site Title -->
        <div class="flex items-center space-x-4">
          <a href="#" class="text-xl font-semibold text-white">
            JRRJR<sup class="text-xs font-thin">KBV1</sup>
          </a>
          <!-- Primary Navigation -->
          <ul class="hidden md:flex space-x-4">
            <li><a href="/" class="text-gray-300 hover:text-white">Home</a></li>
            <li><a href="/about" class="text-gray-300 hover:text-white">About Me</a></li>
            <li><a href="/portfolio" class="text-gray-300 hover:text-white">Portfolio</a></li>
            <li><a href="/knowledgebase" class="text-gray-300 hover:text-white">Knowledge Base</a></li>
            <li><a href="/blog" class="text-gray-300 hover:text-white">Blog</a></li>
            <li><a href="/services" class="text-gray-300 hover:text-white">Services</a></li>
          </ul>
        </div>
    
        <!-- Search and Actions -->
        <div class="flex items-center">
          <!-- Search -->
          <div class="relative">
            <input type="search" placeholder="Search documentation..." class="bg-gray-900 text-white rounded-md pl-10 pr-4 py-2">
            <span class="absolute left-3 top-2 text-gray-500">
              <!-- Search Icon -->
            </span>
          </div>
          <div class="flex space-x-4">
          <!-- Replace 'href' with your social media links and include the icons -->
          <a href="https://x.com/" class="text-white hover:text-blue-400">
            <!-- X Icon -->
          </a>
          <a href="https://linkedin.com/in/jamesrossjr" class="text-white hover:text-blue-700">
            <!-- LinkedIn Icon -->
          </a>
          <a href="https://instagram.com/" class="text-white hover:text-pink-600">
            <!-- Instagram Icon -->
          </a>
          <!-- Share Button -->
          <button onclick="shareContent()" class="text-white hover:text-gray-300">
            <!-- Share Icon -->
          </button>
        </div>
          <button class="text-gray-300 hover:text-white ml-4">
            <!-- Theme Toggle Icon -->
          </button>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  // Your script here
  </script>
  
  <style scoped>
  /* You can add additional styling if necessary */
  </style>