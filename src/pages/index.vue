<template>
    <div class="newspaper mx-auto bg-white border border-gray-300 shadow-xl h-screen max-w-full sm:w-[800px] overflow-y-auto" id="scrollableSection">
        <div class="text-gray-800 text-center border-b border-gray-800 p-6 md:p-24">
            <h1 class="text-2xl md:text-4xl font-bold">Portfolio/Knowledge Base</h1>
            <p class="text-lg md:text-xl my-4">This web application stores my knowledge.</p>
            <div class="flex flex-col md:flex-row justify-center gap-4">
                <a href="#" class="px-4 md:px-6 py-2 border border-gray-800 rounded hover:bg-white hover:text-black transition-colors">Get Started</a>
                <a href="https://github.com/" class="px-4 md:px-6 py-2 border border-gray-800 rounded hover:bg-white hover:text-black transition-colors">GitHub</a>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [{ id: 1, text: 'Initial content...'}],
        nextItemId: 2
      };
    },
    methods: {
      loadMoreContent() {
        let newItems = [];
        for (let i = 0; i < 5; i++) {
          newItems.push({ id: this.nextItemId++, text: 'More content loading...' });
        }
        this.items = [...this.items, ...newItems];
      }
    },
    mounted() {
      const section = this.$el;
      section.addEventListener('scroll', () => {
        if (section.scrollTop + section.clientHeight >= section.scrollHeight) {
          this.loadMoreContent();
        }
      });
    }
  }
  </script>
  
  <style scoped>
  .newspaper {
    font-family: 'Times New Roman', serif;
    margin: auto;
    background-color: white;
    border: 1px solid #ddd;
    box-shadow: 0 2px 15px rgba(0,0,0,0.1);
    overflow-y: auto;
    height: 100vh;
  }
  </style>