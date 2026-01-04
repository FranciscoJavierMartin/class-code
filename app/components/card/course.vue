<template>
  <NuxtLink :to="{ name: ROUTES.course, params: { id: course.id } }">
    <div
      class="group overflow-hidden rounded-lg border p-3 transition hover:shadow-sm"
    >
      <div class="relative aspect-video w-full overflow-hidden rounded-md">
        <NuxtImg
          :src="course.thumbnail"
          :alt="course.title"
          class="size-full object-cover"
        />
      </div>
      <div class="flex flex-col pt-2">
        <div
          class="line-clamp-2 text-lg font-medium group-hover:text-sky-700 md:text-base"
        >
          {{ course.title }}
        </div>
        <p class="text-muted-foreground text-xs">{{ category.title }}</p>
        <div class="my-3 flex items-center gap-x-2 text-sm md:text-xs">
          <div class="flex items-center gap-x-1 text-slate-500">
            <div>
              <BookOpen class="w-4" />
            </div>
            <span>{{ modules.length }} chapters</span>
          </div>
        </div>
        <!-- Course progress -->
        <div class="mt-4 flex items-center justify-between">
          <p class="text-md font-medium text-slate-700 md:text-sm">
            {{ formatPrice(course.price as unknown as number) }}
          </p>
          <Button variant="ghost" class="h-7 gap-1 text-xs text-sky-700">
            Enroll
            <ArrowRight class="w-3" />
          </Button>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { ROUTES } from '@/utils/constants/routes';
import type { Category, Course, Module } from '@/generated/prisma/client';
import { ArrowRight, BookOpen } from 'lucide-vue-next';

defineProps<{ course: Course; category: Category; modules: Module[] }>();
</script>
