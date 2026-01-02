<template>
  <NuxtLink
    class="bg-background relative overflow-hidden rounded-lg border p-2 transition-all duration-500 ease-in-out hover:scale-105"
  >
    <div
      class="flex flex-col items-center justify-between gap-4 rounded-md p-6"
    >
      <img :src="thumbnail" :alt="title" width="100px" height="100px" />
      <h3 class="font-bold">{{ title }}</h3>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{ title: string; id: string; thumbnail: string }>();
</script>
