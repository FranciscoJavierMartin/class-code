<template>
  <div>
    <header class="space-y-6 pt-6 pb-8 md:pt-10 md:pb-12 lg:py-32">
      <div
        class="relative isolate container flex max-w-5xl flex-col items-center gap-4 text-center"
      >
        <div
          aria-hidden="true"
          class="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            :style="{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }"
            class="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <span
          class="bg-muted rounded-2xl border px-4 py-1.5 text-sm font-medium shadow-lg"
        >
          Hey, welcome
        </span>
        <h1 class="text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          Learn by doing with <br /><span class="">Code Class</span>
        </h1>
        <p
          class="text-muted-foreground max-w-2xl leading-normal sm:text-xl sm:leading-8"
        >
          “You don’t understand anything until you learn it more than one way.”
        </p>
        <div class="flex flex-wrap items-center justify-center gap-3">
          <NuxtLink :class="cn(buttonVariants({ size: 'lg' }))">
            Explore now
          </NuxtLink>
          <NuxtLink
            :class="cn(buttonVariants({ size: 'lg', variant: 'outline' }))"
          >
            Become an instructor
          </NuxtLink>
        </div>
      </div>
    </header>

    <HomeElement />

    <section class="container space-y-6 py-8 md:py-12 lg:py-24">
      <div class="flex items-center justify-between">
        <TitleSection>Categories</TitleSection>
        <NuxtLink
          class="flex items-center gap-1 text-sm font-medium hover:opacity-80"
        >
          Browse all <ArrowRightIcon class="size-4" />
        </NuxtLink>
      </div>
      <div
        class="mx-auto grid grid-cols-2 justify-center gap-4 md:grid-cols-3 2xl:grid-cols-4"
      >
        <CardCategory
          v-for="category in data?.categories"
          :key="category.id"
          v-bind="category"
        />
      </div>
    </section>

    <section class="container space-y-6 py-8 md:py-12 lg:py-24">
      <div class="flex items-center justify-between">
        <TitleSection>Courses</TitleSection>
        <NuxtLink
          :to="{ name: ROUTES.courses }"
          class="flex items-center gap-1 text-sm font-medium hover:opacity-80"
        >
          Browse all <ArrowRightIcon class="size-4" />
        </NuxtLink>
      </div>
      <div
        class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <CardCourse
          v-for="course in data?.courses"
          :key="course.id"
          :course="course"
          :category="course.category"
          :modules="course.modules"
        />
      </div>
    </section>

    <HomeSupport />
  </div>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from 'lucide-vue-next';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { ROUTES } from '@/utils/constants/routes';
import type { Category } from '@/generated/prisma/client';

const { data } = await useAsyncData<{
  courses: FullCourse[];
  categories: Category[];
}>(
  'courses',
  async (_nuxtApp, { signal }) => {
    const [{ courses }, { categories }] = await Promise.all([
      $fetch<{
        courses: FullCourse[];
      }>('/api/courses', {
        signal,
      }),
      $fetch<{
        categories: Category[];
      }>('/api/categories', {
        signal,
      }),
    ]);

    return {
      categories,
      courses,
    };
  },
  {},
);
</script>
