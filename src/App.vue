<template>
  <MainNav />
  <div class="grid grid-cols-1 md:grid-cols-2 gap-14 mx-12 mt-24 mb-6">
    <SearchBar />
    <CountriesList />
    <MapBox />
  </div>
</template>

<script setup lang="ts">
import { MainNav, SearchBar, CountriesList, MapBox } from '@/components'
</script>
