<template>
<a :href="project.url" target="_blank">
  <div
    class="bg-gray-100 rounded ring-1 ring-gray-200 dark:ring-gray-700 dark:bg-dark"
  >
<div class="rounded-tl rounded-tr bg-gray-100 dark:bg-dark" >
        <img :src="project.image" draggable="false" alt="project image">
   </div>

    <div v-if="project.title || project.description" class="p-4">
      <h3
        class="text-lg font-medium text-gray-900 truncate hover:underline dark:text-gray-100"
        :title="project.title"
      >
        {{ project.title }}
      </h3>

      <p
        v-if="project.description"
        class="text-gray-700 line-clamp-2 dark:text-gray-300"
      >
        {{ project.description }}
      </p>
    </div>
  </div>
</a>
</template>

<script>
export default {
  name: "ProjectsItem",
  props: {
    project: {
      type: Object,
      default: () => {
        return {};
      }
    },
    
  },
}
</script>