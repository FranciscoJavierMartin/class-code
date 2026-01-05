<template>
  <div class="sm:break-inside-avoid">
    <blockquote class="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
      <div class="flex items-center gap-4">
        <img
          :alt="name"
          :src="avatar"
          width="56"
          height="56"
          class="size-14 rounded-full object-cover"
        />
        <div>
          <p class="mt-0.5 text-lg font-medium text-gray-900">{{ name }}</p>
          <div class="flex justify-start gap-0.5 text-yellow-600">
            <Star
              v-for="(_, index) in Array(integer)"
              :key="index"
              class="size-5 fill-yellow-600"
            />
            <StarHalf v-if="showHalfStar" class="size-5 fill-yellow-600" />
          </div>
        </div>
      </div>
      <p class="mt-4 text-gray-700">
        {{ text }}
      </p>
    </blockquote>
  </div>
</template>

<script setup lang="ts">
import { Star, StarHalf } from 'lucide-vue-next';

const { rating } = defineProps<{
  avatar: string;
  name: string;
  rating: number | string;
  text: string;
}>();

const integer = computed<number>(() => Math.floor(+rating));
const showHalfStar = computed<boolean>(() => +rating % 1 >= 0.5);
</script>
