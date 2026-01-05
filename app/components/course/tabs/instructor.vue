<template>
  <div class="rounded-md bg-gray-50 p-8">
    <div class="mb-8 md:flex md:gap-x-5">
      <div
        class="mb-5 flex h-77.5 w-67.5 max-w-full flex-none items-center justify-center rounded md:mb-0"
      >
        <NuxtImg
          class="size-50 rounded object-cover"
          :src="image ?? ''"
          :alt="name"
          height="200px"
          width="200px"
        />
      </div>
      <div class="flex-1">
        <div class="max-w-75">
          <h4 class="text-[34px] leading-12.75 font-bold">{{ name }}</h4>
          <div class="mb-6 font-medium text-gray-600">{{ designation }}</div>
          <ul class="space-y-4">
            <li class="flex space-x-3">
              <Presentation class="text-gray-600" />
              <div>10+ courses</div>
            </li>
            <li class="flex space-x-3">
              <Presentation class="text-gray-600" />
              <div>10+ courses</div>
            </li>
            <li class="flex space-x-3">
              <Presentation class="text-gray-600" />
              <div>10+ courses</div>
            </li>
            <li class="flex space-x-3">
              <Presentation class="text-gray-600" />
              <div>10+ courses</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <p class="text-gray-600">
      {{ bio }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { Presentation } from 'lucide-vue-next';

defineProps<{
  name: string;
  designation?: string | null;
  bio?: string | null;
  image?: string | null;
}>();
</script>
