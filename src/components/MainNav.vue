<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 h-16 w-full bg-white z-10">
      <div class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
        <span
          :id="title"
          role="title"
          class="flex h-full items-center text-xl"
          data-test-id="title"
          >{{ title }}</span
        >
        <AuthorText :author="author" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { AuthorText } from '@/components'

const title = 'Kpler Countries'
const author = 'John Tsourtis'
</script>
