<template>
  <div class="col-span-1 md:col-span-1 h-[100vh] overflow-y-auto p-12 pt-0">
    <AvgPopulation />
    <div v-if="countries?.length" class="mb-4">
      <label for="sort" class="block text-gray-700 text-sm font-bold mb-2">Sort by:</label>
      <select
        id="sort"
        v-model="sortKey"
        class="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="name">Name</option>
        <option value="population">Population</option>
      </select>
    </div>
    <div v-if="countries?.length" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <CommonCard
        v-for="{ cca3, flags, name: { common }, capital, population, borders } in sortedCountries"
        :key="cca3"
        :on-click="() => selectedCountryStore.selectCountry(cca3)"
        :image="flags?.png"
        :alt="flags?.alt"
        :is-selected="cca3 === selectedCountryStore?.selectedCountry?.cca3"
      >
        <div class="flex-col justify-center items-center">
          <h2 class="text-lg font-semibold">{{ common }}</h2>
          <p><strong>Capital:</strong> {{ capital?.[0] }}</p>
          <p><strong>Population:</strong> {{ population.toLocaleString() }}</p>
          <p v-if="borders?.length"><strong>Borders:</strong> {{ borders?.join(', ') }}</p>
        </div>
      </CommonCard>
    </div>
    <div v-else class="text-gray-600 text-center mt-4">
      <p class="text-2xl font-semibold mb-2">No Search Results</p>
      <p class="text-lg">Try refining your search criteria.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCountriesStore, useSelectedCountryStore } from '@/stores'
import { CommonCard, AvgPopulation } from '@/components'
import { ref, computed, type ComputedRef } from 'vue'
import type { Country } from '@/types'

const countriesStore = useCountriesStore()
const { countries } = storeToRefs(countriesStore)

const selectedCountryStore = useSelectedCountryStore()

const sortKey = ref('name')

const sortedCountries: ComputedRef<Country[]> = computed(() => {
  const countriesToSort = [...countries.value]
  return countriesToSort.sort((a: Country, b: Country) => {
    if (sortKey.value === 'name') {
      return a.name.common.localeCompare(b.name.common)
    }
    return a.population - b.population
  })
})
</script>
