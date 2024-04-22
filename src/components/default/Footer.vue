<template>
    <footer class="bg-black/80">
      <div class="max-w-7xl mx-auto px-4 py-6 flex flex-col items-center space-y-4">
        <!-- Social Media Links -->
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
        <!-- Footer Text -->
        <div class="text-white text-center">
          Built by<a href="#" class="text-xl font-semibold text-white">
            JRRJR<sup class="text-xs font-thin">KBV1</sup>
          </a> Follow me on
          <a href="https://github.com" class="text-blue-500 hover:text-blue-300">GitHub</a>.
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  // Define the shareContent function
  function shareContent() {
    if (navigator.share) {
      navigator.share({
        title: 'Check out this website',
        url: window.location.href
      }).then(() => {
        console.log('Thanks for sharing!');
      })
      .catch(console.error);
    } else {
      // Fallback for browsers that do not support the Web Share API
      console.log('Web Share API is not supported in your browser.');
    }
  }
  </script>
  
  <style scoped>
  /* You can add additional styles here */
  </style>