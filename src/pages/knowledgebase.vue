<template>
    <div class="newspaper mx-auto bg-white border border-gray-300 shadow-xl h-screen w-[800px] overflow-y-auto" id="scrollableSection">
      <!-- Content goes here -->
      <p v-for="item in items" :key="item.id" class="text-base font-serif my-2">{{ item.text }}</p>
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