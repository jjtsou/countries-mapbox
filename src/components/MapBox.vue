<template>
  <div class="col-span-1 md:col-span-1">
    <div id="mapContainer" class="w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]" />
  </div>
</template>

<script setup lang="ts">
import mapboxgl, { Map } from 'mapbox-gl'
import { onMounted, onUnmounted, watch } from 'vue'
import { useSelectedCountryStore } from '@/stores'
import { transformCsvData, addMarkerOnMap, displayCsvTracksOnMap } from '@/utils'
import csvData from '@/trackers.csv'

const selectedCountryStore = useSelectedCountryStore()

let map: Map

onMounted(() => {
  mapboxgl.accessToken = 'Your_personal_mapbox_token'

  map = new mapboxgl.Map({
    container: 'mapContainer',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [0, 0],
    zoom: 1
  })

  const data = transformCsvData(csvData)
  displayCsvTracksOnMap({ data, map })
})

onUnmounted(() => map.remove())

watch(
  () => selectedCountryStore.selectedCountry,
  (country) => {
    if (country) addMarkerOnMap({ map, country })
  },
  { immediate: true }
)
</script>
