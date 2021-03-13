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
          <li class="px-1"><a href="https://www.facebook.com/ihsan.mohamad.56" target="_blank"><svg  xmlns="http://www.w3.org/2000/svg"  stroke="none" fill="currentColor" viewBox="0 0 512 512" class="w-8 h-8 "><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg></a></li>
          <li class="px-1"><a href="https://github.com/ihsanmohamad" target="_blank"><svg  xmlns="http://www.w3.org/2000/svg"  stroke="none" fill="currentColor" viewBox="0 0 512 512" class="w-8 h-8 "><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path></svg></a></li>
          <li class="px-1"><a href="https://www.linkedin.com/in/ihsanmohamad13/" target="_blank"><svg  xmlns="http://www.w3.org/2000/svg"  stroke="none" fill="currentColor" viewBox="0 0 512 512" class="w-8 h-8 "><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></a></li>
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

    <div class="mt-10 md:mt-14 space-y-5">
    <h1 class="text-2xl leading-9 font-bold text-gray-800 dark:text-gray-200">My Projects - There is more coming soon!</h1>

    <div v-if="projects && projects.length > 0" class="grid gap-2 mt-2 sm:gap-4 sm:grid-cols-3">
          <div v-for="project in projects" :key="project.title " >
            <ProjectsItem
              :project="project"/>
          </div>

    </div>
    </div>
    
    <div class="mt-10 md:mt-14 space-y-5 w-full">
    <h1 class="text-2xl leading-9 font-bold text-gray-800 dark:text-gray-200 ">Technologies that I use</h1>

    <div v-if="stacks && stacks.length > 0" class="w-full flex flex-wrap justify-center">
          <div v-for="stack in stacks" :key="stack.name " >
            <StackItem
              :stack="stack"/>
          </div>

    </div>
    </div>
      
    <div class="mt-10 md:mt-14 space-y-5 w-full">
      <h1 class="text-2xl leading-9 font-bold text-gray-800 dark:text-gray-200 ">Next technologies to learn</h1>

      <div v-if="nextStacks && nextStacks.length > 0" class="w-full flex flex-wrap justify-center">
            <div v-for="stack in nextStacks" :key="stack.name " >
              <StackItem
                :stack="stack"/>
            </div>

      </div>
    </div>

    </div>

  </div>

</template>

<script setup>
import GithubReposItem from './components/GithubReposItem.vue'
import ProjectsItem from './components/ProjectsItem.vue'
import StackItem from './components/StackItem.vue'
    
      const repos = [{
        id: 303935864,
        name: "Async-Tutorial-with-FastApi",
        description: "Simple test of async and sync capabilities",
        language: 'Python',
        html_url: "https://github.com/ihsanmohamad/Async-Tutorial-with-FastApi",
        stargazers_count: 0,
        forks: 0
      },
      {
        id: 318259406,
        name: "sport-jom",
        description: "Frontend built using Ionic Vue with Vuex.",
        language: 'Vue',
        html_url: "https://github.com/ihsanmohamad/sport-jom",
        stargazers_count: 1,
        forks: 0
      },
      
      {
        id: 344974779,
        name: "sport-jom-backend",
        description: "Backend Server of Sport Jom, built with FastAPI",
        language: 'Python',
        html_url: "https://github.com/ihsanmohamad/sport-jom-backend",
        stargazers_count: 1,
        forks: 0
      },
      ]
   
      const projects = [{
        title: "Cari Makan",
        description: "Search for places to eat with review analysis",
        url: "https://carimakan.netlify.app",
        image: "/img/project-cari-makan.webp"
      }]

      const stacks = [{
        name: 'Javascript',
        viewbox: '0 0 512 512',
        icon: [{
          color: '#EFD81D',
          path: 'M0 0v512h512V0H0zm274.286 397.714c0 49.84-29.44 74.137-72.057 74.137-38.492 0-60.835-19.931-72.172-43.988l39.177-23.714c7.555 13.405 13.292 24.742 29.783 24.742 13.714 0 24.983-6.182 24.983-30.24V237.714h50.286v160zm113.543 72.995c-44.675 0-73.543-20.16-87.635-48L339.429 400c10.285 16.846 23.714 28.069 47.428 28.069 19.932 0 31.509-8.823 31.509-22.572 0-16.491-11.92-22.331-33.92-32l-12.023-5.166c-34.72-14.765-57.737-33.325-57.737-72.514 0-36.08 27.485-62.434 70.445-62.434 30.595 0 52.572 9.508 68.4 37.348L416 294.857c-8.251-14.777-17.143-20.571-30.926-20.571-14.091 0-23.028 8.937-23.028 20.571 0 14.434 8.937 20.274 29.554 29.212l12.023 5.154c40.903 17.531 63.931 35.428 63.931 75.611.012 43.315-34.011 65.875-79.725 65.875z'
        }],
      },
      {
        name: 'HTML5',
        viewbox: '0 0 512 512',
        icon: [{
          color: '#dd4b25',
          path: 'M64 32l34.94 403.21L255.77 480 413 435.15 448 32zm308 132H188l4 51h176l-13.51 151.39L256 394.48l-98.68-28-6.78-77.48h48.26l3.42 39.29L256 343.07l53.42-14.92L315 264H148l-12.59-149.59H376.2z'
        }]
      },
      {
        name: 'Vue',
        viewbox: '0 0 512 512',
        icon: [{
          color: '#35495E',
          path: 'M256 144.03l-55.49-96.11h-79.43L256 281.61 390.92 47.92h-79.43L256 144.03z'
        },
        {
          color: '#41B883',
          path: 'M409.4 47.92L256 313.61 102.6 47.92H15.74L256 464.08 496.26 47.92H409.4z'
        }
        ],
        
      },
      {
        name: 'TailwindCSS',
        viewbox: '0 0 50 50',
        icon: [{
          color: '#07b6d5',
          path: 'M14 20.8c1.466-5.866 5.134-8.8 11-8.8 8.8 0 9.9 6.6 14.3 7.7 2.934.733 5.5-.366 7.7-3.3-1.467 5.866-5.134 8.8-11 8.8-8.8 0-9.9-6.6-14.3-7.7-2.934-.734-5.5.366-7.7 3.3zM3 34c1.466-5.866 5.134-8.8 11-8.8 8.8 0 9.9 6.6 14.3 7.7 2.933.733 5.5-.367 7.7-3.3-1.467 5.866-5.134 8.8-11 8.8-8.8 0-9.9-6.6-14.3-7.7-2.934-.734-5.5.366-7.7 3.3z'
        }
        ]
      },
      {
        name: 'Php',
        viewbox: '0 0 24 24',
        icon: [{
          color: '#8B5CF6',
          path: 'M2.778 8.054h3.098c.91.01 1.569.354 1.977 1.03.409.677.544 1.6.405 2.772a6.6 6.6 0 01-.358 1.576c-.178.515-.424.98-.74 1.393-.386.526-.798.859-1.237 1-.44.142-.894.212-1.364.212H3.17l-.44 2.879H1.126L2.778 8.054zm1.353 1.727l-.694 4.545c.046.01.093.015.139.015h.162c.74.01 1.356-.086 1.85-.288.493-.212.824-.95.994-2.212.138-1.06 0-1.671-.417-1.833-.408-.161-.92-.237-1.537-.227-.093.01-.181.015-.266.015h-.243l.012-.015M10.088 5.16h1.596l-.451 2.894h1.433c.787.02 1.372.233 1.758.636.393.404.508 1.172.346 2.303l-.774 5.044h-1.619l.74-4.817c.077-.505.054-.863-.07-1.075-.122-.212-.388-.318-.797-.318l-1.283-.016-.948 6.226H8.424l1.664-10.876zM16.484 8.054h3.098c.91.01 1.568.354 1.977 1.03.408.677.543 1.6.404 2.772a6.6 6.6 0 01-.358 1.576c-.177.515-.424.98-.74 1.393-.385.526-.798.859-1.237 1-.44.142-.894.212-1.364.212h-1.387l-.44 2.879H14.83l1.654-10.862zm1.352 1.727l-.693 4.545c.046.01.092.015.138.015h.162c.74.01 1.357-.086 1.85-.288.493-.212.825-.95.994-2.212.139-1.06 0-1.671-.416-1.833-.409-.161-.921-.237-1.538-.227-.092.01-.18.015-.266.015h-.242l.011-.015'
        }
        ]
      },
      {
        name: 'Python',
        viewbox: '-20 -20 312 312',
        icon: [{
          color: '#2682ff',
          path: 'M126.915866,0.0722755491 C62.0835831,0.0722801733 66.1321288,28.1874648 66.1321288,28.1874648 L66.2044043,57.3145115 L128.072276,57.3145115 L128.072276,66.0598532 L41.6307171,66.0598532 C41.6307171,66.0598532 0.144551098,61.3549438 0.144551098,126.771315 C0.144546474,192.187673 36.3546019,189.867871 36.3546019,189.867871 L57.9649915,189.867871 L57.9649915,159.51214 C57.9649915,159.51214 56.8001363,123.302089 93.5968379,123.302089 L154.95878,123.302089 C154.95878,123.302089 189.434218,123.859386 189.434218,89.9830604 L189.434218,33.9695088 C189.434218,33.9695041 194.668541,0.0722755491 126.915866,0.0722755491 L126.915866,0.0722755491 L126.915866,0.0722755491 Z M92.8018069,19.6589497 C98.9572068,19.6589452 103.932242,24.6339846 103.932242,30.7893845 C103.932246,36.9447844 98.9572068,41.9198193 92.8018069,41.9198193 C86.646407,41.9198239 81.6713721,36.9447844 81.6713721,30.7893845 C81.6713674,24.6339846 86.646407,19.6589497 92.8018069,19.6589497 L92.8018069,19.6589497 L92.8018069,19.6589497 Z'
        }, 
        {
          color: '#ffcd00',
          path: 'M128.757101,254.126271 C193.589403,254.126271 189.540839,226.011081 189.540839,226.011081 L189.468564,196.884035 L127.600692,196.884035 L127.600692,188.138693 L214.042251,188.138693 C214.042251,188.138693 255.528417,192.843589 255.528417,127.427208 C255.52844,62.0108566 219.318366,64.3306589 219.318366,64.3306589 L197.707976,64.3306589 L197.707976,94.6863832 C197.707976,94.6863832 198.87285,130.896434 162.07613,130.896434 L100.714182,130.896434 C100.714182,130.896434 66.238745,130.339138 66.238745,164.215486 L66.238745,220.229038 C66.238745,220.229038 61.0044225,254.126271 128.757101,254.126271 L128.757101,254.126271 L128.757101,254.126271 Z M162.87116,234.539597 C156.715759,234.539597 151.740726,229.564564 151.740726,223.409162 C151.740726,217.253759 156.715759,212.278727 162.87116,212.278727 C169.026563,212.278727 174.001595,217.253759 174.001595,223.409162 C174.001618,229.564564 169.026563,234.539597 162.87116,234.539597 L162.87116,234.539597 L162.87116,234.539597 Z'
        }
        ]
      },
      {
        name: 'FastAPI',
        viewbox: '0 50 5 75',
        icon: [{
          color: '#009688',
          path: 'm 1.4365174,55.50154 c -17.6610514,0 -31.9886064,14.327532 -31.9886064,31.988554 0,17.661036 14.327555,31.988586 31.9886064,31.988586 17.6609756,0 31.9885196,-14.32755 31.9885196,-31.988586 0,-17.661022 -14.327544,-31.988554 -31.9885196,-31.988554 z m -1.66678692,57.63069 V 93.067264 H -11.384533 L 4.6417437,61.847974 V 81.912929 H 15.379405 Z'
        }
        ]
      },
      ]

      const nextStacks = [
        {
        name: 'Docker',
        viewbox: '0 0 30 30',
        icon: [{
          color: '#009dbb',
          path: 'M 29.371846,12.438214 C 28.69672,11.969773 27.149557,11.794108 25.939957,12.028328 25.799305,10.857226 25.15231,9.832511 24.027101,8.9249066 L 23.380105,8.4564655 22.930021,9.1298496 c -0.562605,0.8783264 -0.843908,2.1079844 -0.759516,3.2790864 0.02812,0.409886 0.168781,1.141825 0.590734,1.785931 -0.393823,0.234221 -1.2096,0.526996 -2.278549,0.526996 H 0.14452461 l -0.05626044,0.234221 c -0.19691175,1.171102 -0.19691175,4.830797 2.10976813,7.641443 1.744075,2.137262 4.3320573,3.220531 7.7358165,3.220531 7.3701232,0 12.8273902,-3.542584 15.3872422,-9.95437 1.012689,0.02928 3.178718,0 4.275798,-2.195817 0.02812,-0.05856 0.08439,-0.175665 0.281301,-0.614829 l 0.112526,-0.23422 z M 16.403805,4.1819416 h -3.094327 v 2.9277562 h 3.094327 z m 0,3.5133073 h -3.094327 v 2.9277561 h 3.094327 z m -3.656932,0 H 9.6525465 v 2.9277561 h 3.0943265 z m -3.6569313,0 H 5.995615 V 10.623005 H 9.0899417 Z M 5.4330102,11.208556 H 2.3386835 v 2.927756 h 3.0943267 z m 3.6569315,0 H 5.995615 v 2.927756 h 3.0943267 z m 3.6569313,0 H 9.6525465 v 2.927756 h 3.0943265 z m 3.656932,0 h -3.094327 v 2.927756 h 3.094327 z m 3.656931,0 H 16.96641 v 2.927756 h 3.094326 z'
        }
        ]
      }
      ]

</script>