<script>
export default {
    data() {
  return {
    posts: [
      { id: 1, title: 'Discovering Hidden Gems in Rome', content: 'Explore the lesser-known attractions and secret spots in Rome.' },
      { id: 2, title: 'The Art of Coffee Making', content: 'Dive into the world of coffee brewing.' },
      { id: 3, title: 'Tech Innovations in 2023', content: 'A look at the latest technological advances.' },
      { id: 4, title: 'Sustainable Living Tips', content: 'Learn eco-friendly lifestyle tips.' },
      { id: 5, title: 'Guide to Freelancing', content: 'Everything to start your freelancing career.' },
      { id: 6, title: 'Meditation and Mindfulness', content: 'Improving mental health through meditation.' },
      { id: 7, title: 'The Future of Remote Work', content: 'Insights into remote work.' },
      { id: 8, title: 'Fitness Routines to Try at Home', content: 'Effective routines with minimal equipment.' },
      { id: 9, title: 'Budget Travel Destinations', content: 'Top travel destinations on a budget.' },
      { id: 10, title: 'Best DIY Home Decor Ideas', content: 'DIY decor ideas to refresh your space.' }
    ]
  };
},

  methods: {
    // Simulates the loading of more posts
    loadMorePosts() {
      let newPosts = [];
      for (let i = 0; i < 5; i++) {
        newPosts.push({
          id: this.nextPostId,
          title: `Blog Post ${this.nextPostId}`,
          content: `Exciting new content in post number ${this.nextPostId}.`
        });
        this.nextPostId++;
      }
      this.posts = [...this.posts, ...newPosts];
    },
    
    // Debounces function calls
    debounce(func, wait) {
      let timeout;
      return function() {
        const later = () => {
          clearTimeout(timeout);
          func.apply(this, arguments);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    }
  },

  mounted() {
    const section = this.$el;
    // Adds debounced scroll event listener to load more posts
    const debouncedLoadMorePosts = this.debounce(() => {
      if (section.scrollTop + section.clientHeight >= section.scrollHeight) {
        this.loadMorePosts();
      }
    }, 300);
    section.addEventListener('scroll', debouncedLoadMorePosts);
  }
}
</script>

<template>
  <div class="max-w-4xl w-full mx-auto bg-white border border-gray-300 shadow-xl h-screen overflow-y-auto" id="scrollableSection">
    <div class="p-6">
      <h1 class="text-3xl font-bold text-center mb-6">Our Blog</h1>
      <div v-for="post in posts" :key="post.id" class="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 class="text-2xl font-semibold">{{ post.title }}</h2>
        <p class="text-gray-600 mt-4">{{ post.content }}</p>
      </div>
    </div>
  </div>
</template>

<style>
/* No additional styling needed as Tailwind CSS is being used */
</style>

  
