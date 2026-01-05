<template>
  <div class="rounded-md bg-gray-50 p-8">
    <div class="mb-8 md:flex md:gap-x-5">
      <div v-if="pending" class="flex items-center space-x-4">
        <Skeleton class="size-50 rounded-full" />
        <div class="flex flex-col gap-y-3">
          <Skeleton class="h-9 w-62.5" />
          <div class="flex flex-col gap-y-2">
            <Skeleton class="h-5 w-50" />
            <Skeleton class="h-5 w-50" />
            <Skeleton class="h-5 w-50" />
          </div>
        </div>
      </div>
      <template v-else>
        <div
          class="mb-5 flex h-77.5 w-67.5 max-w-full flex-none items-center justify-center rounded md:mb-0"
        >
          <NuxtImg
            class="size-50 rounded-full object-cover"
            :src="data?.instructor.image ?? ''"
            :alt="data?.instructor.name"
            height="200px"
            width="200px"
          />
        </div>
        <div class="flex-1">
          <div class="max-w-75">
            <h4 class="text-[34px] leading-12.75 font-bold">
              {{ data?.instructor.name }}
            </h4>
            <div class="mb-6 font-medium text-gray-600">
              {{ data?.instructor.designation }}
            </div>
            <ul class="space-y-4">
              <li class="flex space-x-3">
                <Presentation class="text-gray-600" />
                <div>{{ courses }}</div>
              </li>
              <li class="flex space-x-3">
                <UsersRound class="text-gray-600" />
                <div>{{ enrollments }}</div>
              </li>
              <li class="flex space-x-3">
                <MessageSquare class="text-gray-600" />
                <div>{{ reviews }}</div>
              </li>
              <li class="flex space-x-3">
                <Star class="fill-yellow-600 text-yellow-600" />
                <div>{{ data?.rating }}</div>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </div>
    <p class="text-gray-600">
      {{ data?.instructor.bio }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { MessageSquare, Presentation, Star, UsersRound } from 'lucide-vue-next';

const { id } = defineProps<{
  id: string;
}>();

const { data, pending } = await useLazyFetch<{
  instructor: {
    name: string;
    designation: string;
    bio?: string | null;
    image?: string | null;
  };
  courses: number;
  enrollments: number;
  reviews: number;
  rating: number;
}>(`/api/instructor/${id}`, { watch: [() => id] });

const courses = computed(() => {
  const value = data.value?.courses ?? 0;
  return value === 1 ? `${value} course` : `${value} courses`;
});

const enrollments = computed(() => {
  const value = data.value?.enrollments ?? 0;
  return value === 1 ? `${value} enrollment` : `${value} enrollments`;
});

const reviews = computed(() => {
  const value = data.value?.reviews ?? 0;
  return value === 1 ? `${value} reviews` : `${value} reviews`;
});
</script>
