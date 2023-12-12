<template>
  <h2 class="ml-8 flex h-full items-center">Developed by {{ author }}</h2>
</template>

<script setup lang="ts">
const { author } = defineProps({
  author: { type: String, required: false, default: '' }
})
</script>
