<template>
  <h3 class="text-2xl">Course description</h3>
  <p class="mt-4">
    This tutorial will help you learn quickly and thoroughly. Lorem ipsum, or
    lipsum as it sometimes known, is dummy text used in laying out print,
    graphic or web designs. Lorem ipsum dolor sit amet, consectetuer adipiscing
    elit. Donec odio. Quisque volutpat mattis eros. <br />
    <br />
    You’ll be exposed to principles and strategies, but, more importantly,
    you’ll learn how actually apply these abstract concepts by coding three
    different websites for three very different the audiences. Lorem ipsum is
    dummy text used in laying out print, graphic or web designs Lorem ipsum
    blinding shot chinwag knees.
  </p>
  <div class="mt-8 space-y-6 rounded-md bg-gray-50 p-8">
    <h4 class="text-2xl">What you will learn?</h4>
    <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <li class="flex space-x-3">
        <div class="relative top-1 flex-none">
          <CheckCheck />
        </div>
        <div class="flex-1">
          Learn how perspective works and how to incorporate your art
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { CheckCheck } from 'lucide-vue-next';
</script>
