<template>
  <div
    :class="[
      'border rounded-lg p-4 shadow-md transform transition-transform hover:scale-105 hover:cursor-pointer',
      { 'scale-105': isSelected }
    ]"
    @click="onClick"
  >
    <img class="w-auto h-auto bg-cover bg-center bg-no-repeat mb-4" :alt="alt" :src="image" />
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'

const { isSelected, onClick, alt, image } = defineProps({
  image: { type: String, required: false, default: '' },
  alt: { type: String, required: false, default: '' },
  onClick: {
    type: Function as PropType<(payload: MouseEvent) => void>,
    required: false,
    default: () => {}
  },
  isSelected: { type: Boolean, required: false, default: false }
})
</script>

<style scoped>
.transition-transform {
  transition: transform 0.3s ease;
}
</style>
