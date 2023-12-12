import { defineStore, storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useCountriesStore } from '@/stores'
import type { Country } from '@/types'

export const useSelectedCountryStore = defineStore('useSelectedCountryStore', () => {
  const countriesStore = useCountriesStore()
  const { countries } = storeToRefs(countriesStore)

  const selectedCountry = ref<Country | null>(null)
  const selectCountry = (countryId: string) => {
    const foundCountry = countries.value.find((country: Country) => country.cca3 === countryId)
    if (foundCountry) selectedCountry.value = foundCountry
  }

  return { selectedCountry, selectCountry }
})
