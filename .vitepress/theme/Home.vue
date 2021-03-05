<template>
  <div class="divide-y divide-gray-200 dark:divide-gray-800 ">
    <div class="py-8 md:py-20 w-full flex flex-col md:flex-row flex-wrap items-center justify-center text-center md:justify-start md:text-left">
      <figure class="md:w-1/3 order-first md:order-none pb-4 md:pb-0">
      <img src="/img/profile-pic.webp" class="w-36 md:w-auto md:mx-auto p-1 md:p-2" alt="profile picture">
      </figure>
      <div class="md:w-2/3 md:pl-10 bg flex flex-wrap justify-center space-y-2 md:justify-start">
          <h1
          class="text-3xl leading-9 font-bold text-gray-800 dark:text-gray-200 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
          >{{ $frontmatter.textTitle }}</h1>

          <ul class="py-4 w-full flex flex-wrap justify-center md:justify-start text-lg text-gray-800 dark:text-gray-200">
          <li class="px-1"><a href="#" target="_blank"><svg  xmlns="http://www.w3.org/2000/svg"  stroke="none" fill="currentColor" viewBox="0 0 512 512" class="w-8 h-8 "><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg></a></li>
          <li class="px-1"><a href="#" target="_blank"><svg  xmlns="http://www.w3.org/2000/svg"  stroke="none" fill="currentColor" viewBox="0 0 512 512" class="w-8 h-8 "><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path></svg></a></li>
          <li class="px-1"><a href="#" target="_blank"><svg  xmlns="http://www.w3.org/2000/svg"  stroke="none" fill="currentColor" viewBox="0 0 512 512" class="w-8 h-8 "><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></a></li>
          </ul>

          <p class="text-xl leading-7 text-green-500 dark:text-green-400 font-bold">{{ $frontmatter.subtext }}</p>
          <p class="text-base md:text-xl leading-7 text-gray-500 dark:text-gray-400">I'm a fresh graduate from University of Malaya. While I do like networking, I have a newfound passion in web development. Currently learning both front end and backend. 
            Looking forward to build great web apps!
          </p>
      </div>
    <div class="mt-10 md:mt-20 w-full space-y-5">
    <h1 class="text-2xl leading-9 font-bold text-gray-800 dark:text-gray-200">My Github Repositories</h1>

    <div v-if="repos && repos.length > 0" class="flex flex-wrap">
          <div v-for="repo in repos" :key="repo.id" class="w-full md:w-1/2 lg:w-1/3 md:pr-6 pb-4">
            <GithubReposItem
              :repository="repo"/>
          </div>

    </div>
    </div>
      

    </div>

  </div>

</template>

<script setup>
import GithubReposItem from './components/GithubReposItem.vue'

    
      const repos = [{
        id: 1,
        name: "test",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet sem id tortor malesuada gravida hendrerit vel magna.",
        language: 'vue',
        stargazers_count: 20,
        forks: 100
      },
      {
        id: 1,
        name: "test",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet sem id tortor malesuada gravida hendrerit vel magna.",
        language: 'vue',
        stargazers_count: 20,
        forks: 100
      },
      
      {
        id: 1,
        name: "test",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet sem id tortor malesuada gravida hendrerit vel magna.",
        language: 'vue',
        stargazers_count: 20,
        forks: 100
      },
      ]
   


</script>