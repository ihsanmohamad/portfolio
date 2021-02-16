<template>
  <dl class="pt-6 pb-10 xl:pt-11 border-b xborder-gray-200 dark:border-gray-800">
    <dt class="sr-only">Authors</dt>
    <dd>
      <ul class="flex justify-center xl:block space-x-8 sm:space-x-12 xl:space-x-0 xl:space-y-8">
        <li class="flex items-center space-x-2">
          <img
            
            :src="$withBase('/profile-pic.webp')"
            alt="author image"
            class="w-10 h-10 rounded-full"
          />
          <dl class="text-sm font-medium leading-5 whitespace-nowrap">
            <dt class="sr-only">Name</dt>
            <dd class="text-gray-900 dark:text-gray-200">Ihsan Mohamad</dd>
            <dt v-if="data.linkedin" class="sr-only">LinkedIn</dt>
            <dd v-if="data.linkedin">
              <a
                :href="`https://www.linkedin.com/in/${data.linkedin}`"
                target="_blank"
                rel="noopnener noreferrer"
                class="link"
              >LinkedIn</a>
            </dd>
          </dl>
        </li>
      </ul>
    </dd>
  </dl>
</template>

<script setup>
import { useFrontmatter } from 'vitepress'

const data = useFrontmatter()
</script>