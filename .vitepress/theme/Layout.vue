<template>
  <div class="antialiased dark:bg-dark">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <nav class="flex justify-between items-center py-10 font-bold">
        <a class="text-xl" href="/" aria-label="Ihsan Mohamad">
          <img class="inline-block mr-2" style="width:36px" alt="logo" src="/logo.svg" />
          <span v-if="!isIndex" class="hidden md:inline dark:text-gray-100">Ihsan Mohamad</span>
        </a>
       
      </nav>
    </div>
    <main class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <Home v-if="isIndex" />
      <Article v-else />
    </main>
  
    <footer class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0 py-10 grid grid-cols-2 border-t-2 border-gray-200 dark:border-gray-800">
    <p class="text-left text-sm dark:text-gray-100">Designed by © Ihsan</p>
    <p class="text-right text-sm dark:text-gray-100">Powered with Vitepress</p>
    </footer>
  
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import Home from './Home.vue'
import Article from './Article.vue'

const route = useRoute()
const isIndex = computed(() => route.path.replace(/index.html$/, '') === '/')
</script>