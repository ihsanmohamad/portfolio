<template>
  <div class="h-full rounded p-4 flex flex-row">
    <div>
      <svg  xmlns="http://www.w3.org/2000/svg"  :viewBox="stack.viewbox" class="w-20 h-20 text-gray-800 dark:text-gray-100" aria-hidden="true">
        <path v-for="i in stack.icon" :d="i.path" :fill="i.color"></path>
      </svg>
      <p class="text-center font-medium text-gray-800 dark:text-gray-100">{{ stack.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StackItem",
  props: {
    stack: {
      type: Object,
      default: () => {
        return {};
      }
    },
    
  }
}
</script>