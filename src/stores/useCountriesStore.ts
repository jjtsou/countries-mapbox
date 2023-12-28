import { defineStore, storeToRefs } from 'pinia'
import { computed, ref, watchEffect } from 'vue'
import { useSearchStore } from '@/stores'
import type { Countries, Country } from '@/types'

export const useCountriesStore = defineStore('useCountriesStore', () => {
  const searchStore = useSearchStore()
  const { searchValue } = storeToRefs(searchStore)

  const countries = ref<Countries>([])
  const avgPopulation = computed(() => {
    const totalPopulation = countries.value.reduce?.(
      (sum, country: Country) => sum + country.population,
      0
    )
    return countries.value.length > 0 ? Math.round(totalPopulation / countries.value.length) : 0
  })

  const fetchCountries = async (name: string) => {
    try {
      // API does not support pagination
      const response = await fetch(
        `https://restcountries.com/v3.1/${
          name ? `name/${name}` : 'all'
        }?fields=cca3,name,capital,flags,population,borders,latlng`
      )
      const data = await response.json()

      if (data?.status === 404) countries.value = []
      else countries.value = data
    } catch (error) {
      console.error('Error fetching countries:', error)
      countries.value = []
    }
  }

  watchEffect(() => {
    fetchCountries(searchValue.value)
  })

  return { countries, avgPopulation }
})
