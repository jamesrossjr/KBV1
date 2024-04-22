<script setup>
    import Header from '~/components/default/Header.vue'
    import Aside from '~/components/default/Aside.vue'
    import Footer from '~/components/default/Footer.vue'
</script>

<template>
  <div>
    <Header />
    <div class="flex">
    <aside>
      <Aside />
    </aside>
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>