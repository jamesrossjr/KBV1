<template>
  <div class="newspaper h-screen bg-black/80 p-8">
    <div class="container mx-auto px-4 py-10">
      <h1 class="text-4xl font-bold text-white mb-8">Portfolio</h1>
      
      <!-- Portfolio items container -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <!-- Replace with dynamic content as needed -->
        <div v-for="project in projects" :key="project.id" class="bg-gray-800 p-6 rounded-lg shadow-md overflow-hidden">
          <img :src="project.image" :alt="project.name" class="w-full h-64 object-cover object-center mb-4 rounded">
          <h3 class="text-xl font-semibold text-white mb-3">{{ project.name }}</h3>
          <p class="text-gray-400 mb-4">{{ project.description }}</p>
          <a :href="project.link" class="text-indigo-500 hover:text-indigo-400 transition-colors duration-300" target="_blank" rel="noopener">View Project</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import dummy project data or fetch from an API
const projects = [
  {
    id: 1,
    name: 'CES Powerwash',
    description: 'A local powerwashing company.',
    image: '/',  // Make sure to replace '/' with actual image paths in your application
    link: 'http://cespowerwash.com'
  },
  // ... other projects
];
</script>

<style scoped>
    .newspaper {
      font-family: 'Times New Roman', serif;
      width: 800px;
      margin: auto;
      background-color: white;
      border: 1px solid #ddd;
      box-shadow: 0 2px 15px rgba(0,0,0,0.1);
    }
  /* Adjusted portfolio card width */
  /* By setting max-width and using width in percentages, we ensure they are responsive */
  .portfolio-card {
    max-width: 400px;  /* Maximum width to maintain the 1/2 size relation */
    width: 100%;       /* Make it responsive */
  }
</style>

