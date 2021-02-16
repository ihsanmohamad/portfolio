<template>
<div class="flex h-screen">
    <div class=" mx-auto my-20">
        <h1 class="text-black dark:text-white">Not Found</h1>
        <p class="text-black dark:text-white">Back to <a class="font-bold underline" href="/">Homepage</a></p>
    </div>
    
</div>

</template>

<script setup>
import { onBeforeMount } from 'vue'
import { useRouter } from 'vitepress'

const router = useRouter()

onBeforeMount(() =>{
    router.go('/404')
})
</script>