<template>
  <h3 class="text-2xl">Course description</h3>
  <p class="mt-4">
    {{ description }}
  </p>
  <div class="mt-8 space-y-6 rounded-md bg-gray-50 p-8">
    <h4 class="text-2xl">What you will learn?</h4>
    <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <li v-for="learn in learning" :key="learn" class="flex space-x-3">
        <div class="relative top-1 flex-none">
          <CheckCheck />
        </div>
        <div class="flex-1">
          {{ learn }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { CheckCheck } from 'lucide-vue-next';

defineProps<{ description: string; learning: string[] }>();
</script>
