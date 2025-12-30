<template>
  <div class="min-h-screen px-0 py-12">
    <div
      class="flex w-full flex-col items-center bg-fuchsia-50 p-6 pt-5 pb-10 pl-10 md:flex-row"
    >
      <div class="py-10 text-center md:w-1/2 md:text-left">
        <h3 class="mb-2 text-lg font-semibold text-blue-600">
          Fast-track your learning
        </h3>
        <h2 class="mb-4 text-5xl font-bold text-gray-800">Learn by doing</h2>
        <p class="text-gray-600">
          Learn Programing skills, from absolute beginner to advanced mastery.We
          try to create project base course which help your to learn
          professionally and make you fell as a complete developer
        </p>
      </div>
      <div class="mt-6 flex justify-center md:mt-0 md:w-1/2">
        <img
          :src="two"
          alt="Learning by doing"
          width="500px"
          height="400px"
          class="rounded-lg"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import two from '@/assets/images/two.png';
</script>
