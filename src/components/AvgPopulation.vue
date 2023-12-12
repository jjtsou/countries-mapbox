<template>
  <div class="mb-8">
    <div class="p-3 bg-gray-100 rounded-lg shadow-sm">
      <section name="average population" class="flex flex-col justify-center items-center">
        <h2 class="text-lg font-semibold text-gray-800">Average Population</h2>
        <p class="text-gray-600">{{ avgPopulation.toLocaleString() }}</p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCountriesStore } from '@/stores'

const countriesStore = useCountriesStore()
const { avgPopulation } = storeToRefs(countriesStore)
console.log(avgPopulation)
</script>
