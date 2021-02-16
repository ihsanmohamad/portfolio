<template>
 <div class="pt-8 ">
          <a class="link" href="/blog">← Back to the blog</a>
        </div>
  <article class="">
    <header class="pt-6 xl:pb-10 space-y-1 text-center">
      <Date :date="date" />
      <h1
        class="text-3xl leading-9 font-extrabold text-gray-900 dark:text-gray-200 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"
      >{{ data.title }}</h1>
      
    </header>
    <!-- <div
      class="divide-y xl:divide-y-0 divide-gray-200 xl:grid xl:grid-cols-4 xl:gap-x-6 pb-16 xl:pb-20"
      style="grid-template-rows: auto 1fr;"
    > -->
    <div>
      <Author />
      <div class="divide-y divide-gray-200 dark:divide-gray-800 xl:pb-0 xl:col-span-3 xl:row-span-2">
        <Content class="prose dark:prose-dark max-w-none pt-10 pb-8 text-base sm:text-xl dark:text-gray-300"/>
      </div>

      <footer
        class="text-sm font-medium leading-5 divide-y divide-gray-200 dark:divide-gray-800 xl:col-start-1 xl:row-start-2"
      >
     
      <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0 py-6 grid grid-cols-2 border-t-2 border-gray-200 dark:border-gray-800">
        <div v-if="prevPost" class="text-left py-2">
          <h2 class="text-xs tracking-wide uppercase text-gray-500 dark:text-gray-200">Previous Article</h2>
          <div class="link">
            <a :href="prevPost.href">{{ prevPost.title }}</a>
          </div>
          
        </div>
        <div v-else>
            <p style="visibility:hidden"></p>
          </div>
        <div v-if="nextPost" class="text-right py-2">
          <h2 class="text-xs tracking-wide uppercase text-gray-500 dark:text-gray-200">Next Article</h2>
          <div class="link">
            <a :href="nextPost.href">{{ nextPost.title }}</a>
          </div>
        </div>
        </div>
        
      </footer>
    </div>
  </article>
</template>

<script setup>
import Date from './Date.vue'
import Author from './Author.vue'
import { computed } from 'vue'
import { useFrontmatter, useSiteData, useRoute } from 'vitepress'

const data = useFrontmatter()
const route = useRoute()
const posts = useSiteData().value.customData.posts

function findCurrentIndex() {
  return posts.findIndex(p => p.href === route.path)
}

// use the customData date which contains pre-resolved date info
const date = computed(() => posts[findCurrentIndex()].date)
const nextPost = computed(() => posts[findCurrentIndex() - 1])
const prevPost = computed(() => posts[findCurrentIndex() + 1])
</script>