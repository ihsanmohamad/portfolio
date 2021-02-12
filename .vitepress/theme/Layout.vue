<template>
<!-- <div :class="!darkMode ? 'dark' : 'light'"> -->
<div :class="theme">
  <div class="antialiased dark:bg-dark">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0 ">
      <nav class="flex justify-between items-center py-6 font-bold">
        <a class="text-xl" href="/" aria-label="Ihsan Mohamad">
          <img class="inline-block mr-2" style="width:36px" alt="logo" src="/logo.svg" />
          <span v-if="!isIndex" class="hidden md:inline dark:text-gray-100">Ihsan Mohamad</span>
        </a>
        <div class="text-base space-x-5 text-gray-500 dark:text-gray-300 leading-5  inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <!-- <a class="hover:text-gray-700 dark:hover:text-gray-100 mr-4" href="/feed.rss">RSS Feed</a> -->
           <button @click="isDark" class="focus:outline-none">
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor"> 
                <path v-if="!darkMode" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                <path v-else="darkMode" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </button>
          <a class="hover:text-gray-700 dark:hover:text-gray-100"  href="/blog">Blog</a>
        </div>
      </nav>
    </div>
    <main class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0 min-h-screen ">
      <Home v-if="isIndex" />
      <Blog v-else-if="isBlog" />
      <Article v-else-if="isArticle" />
      <NotFound v-else />
    </main>
  
    <footer class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0 pt-6 pb-4 grid grid-cols-2 border-t-2 border-gray-200 dark:border-gray-800">
    <p class="text-left text-sm dark:text-gray-100">Designed by © Ihsan</p>
    <p class="text-right text-sm dark:text-gray-100">Powered with Vitepress</p>
    </footer>
  
  </div>
</div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute, useSiteData } from 'vitepress'
import Home from './Home.vue'
import NotFound from './NotFound.vue'
import Blog from './Blog.vue'
import Article from './Article.vue'

const route = useRoute()

const isIndex = computed(() => route.path.replace(/index.html$/, '') === '/')
const isBlog = computed(() => route.path === '/blog.html')

const posts = useSiteData().value.customData.posts

function findCurrentIndex() {
  return posts.findIndex(p => p.href === route.path)
}

const isArticle =  computed(() => route.path === posts[findCurrentIndex()].href )

const darkMode = ref(Boolean)

const isDark = async function() {
  darkMode.value = !darkMode.value
  localStorage.setItem('dark-mode', darkMode.value)
}

const setTheme = async () => {
  darkMode.value = localStorage.getItem('dark-mode')
}

const theme = computed(() => darkMode.value ? 'dark' : 'light')



// onBeforeMount(() => {
//   if(localStorage.getItem('dark-mode') !== null){
//     darkMode.value = localStorage.getItem('dark-mode')
//   }
//   else {
//     localStorage.setItem('dark-mode', false)
//     darkMode.value = localStorage.getItem('dark-mode')
//   }

// })


</script>