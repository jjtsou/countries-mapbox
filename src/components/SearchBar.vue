<template>
  <div class="col-span-1 md:col-span-2">
    <div class="w-10/12 mx-auto">
      <input
        v-model="searchValue"
        type="text"
        placeholder="Search..."
        class="w-full p-3 pl-12 border border-gray-300 rounded-full text-xl focus:outline-none focus:ring focus:border-blue-300"
        style="
          background-image: url('/search_icon.png');
          background-size: 24px;
          background-position: 16px center;
          background-repeat: no-repeat;
        "
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSearchStore } from '@/stores'

const searchStore = useSearchStore()
const { searchValue } = storeToRefs(searchStore)
</script>
