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

    <section class="container space-y-6 py-8 md:py-12 lg:py-24">
      <div class="flex items-center justify-between">
        <HomeSectionTitle>Categories</HomeSectionTitle>
        <NuxtLink
          class="flex items-center gap-1 text-sm font-medium hover:opacity-80"
        >
          Browse all <ArrowRightIcon class="size-4" />
        </NuxtLink>
      </div>
      <div
        class="mx-auto grid grid-cols-2 justify-center gap-4 md:grid-cols-3 2xl:grid-cols-4"
      >
        <NuxtLink
          v-for="category in categories"
          :key="category.id"
          class="bg-background relative overflow-hidden rounded-lg border p-2 transition-all duration-500 ease-in-out hover:scale-105"
        >
          <div
            class="flex flex-col items-center justify-between gap-4 rounded-md p-6"
          >
            <img
              :src="category.thumbnail"
              :alt="category.title"
              width="100px"
              height="100px"
            />
            <h3 class="font-bold">{{ category.title }}</h3>
          </div>
        </NuxtLink>
      </div>
    </section>

    <section class="container space-y-6 py-8 md:py-12 lg:py-24">
      <div class="flex items-center justify-between">
        <HomeSectionTitle>Courses</HomeSectionTitle>
        <NuxtLink
          class="flex items-center gap-1 text-sm font-medium hover:opacity-80"
        >
          Browse all <ArrowRightIcon class="size-4" />
        </NuxtLink>
      </div>
      <div
        class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <NuxtLink
          v-for="course in courses"
          :key="course.id"
          :to="{ name: ROUTES.course, params: { id: course.id } }"
        >
          <div
            class="group h-full overflow-hidden rounded-lg border p-3 transition hover:shadow-sm"
          >
            <div
              class="relative aspect-video w-full overflow-hidden rounded-md"
            >
              <img
                :src="course1"
                alt="course image"
                fill
                class="object-cover"
              />
            </div>
            <div class="flex flex-col pt-2">
              <div
                class="line-clamp-2 text-lg font-medium group-hover:text-sky-700 md:text-base"
              >
                Reactive accelerator
              </div>
              <p class="text-muted-foreground text-xs">Development</p>
              <div class="my-3 flex items-center gap-x-2 text-sm md:text-xs">
                <div class="flex items-center gap-x-1 text-slate-500">
                  <div>
                    <BookOpen class="w-4" />
                  </div>
                  <span>4 chapters</span>
                </div>
              </div>
              <!-- Course progress -->
              <div class="mt-4 flex items-center justify-between">
                <p class="text-md font-medium text-slate-700 md:text-sm">
                  {{ formatPrice(49) }}
                </p>
              </div>
              <Button variant="ghost" class="h-7 gap-1 text-xs text-sky-700">
                Enroll <ArrowRight class="w-3" />
              </Button>
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight, ArrowRightIcon, BookOpen } from 'lucide-vue-next';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { ROUTES } from '@/utils/constants/routes';
import designCategoryImage from '@/assets/images/categories/design.jpg';
import developmentCategoryImage from '@/assets/images/categories/development.jpg';
import itCategoryImage from '@/assets/images/categories/it_software.jpg';
import marketingCategoryImage from '@/assets/images/categories/marketing.jpg';
import musicCategoryImage from '@/assets/images/categories/music.jpg';
import personalDevelopmentCategoryImage from '@/assets/images/categories/personal_development.jpg';
import photographyCategoryImage from '@/assets/images/categories/photography.jpg';
import programmingCategoryImage from '@/assets/images/categories/programming.jpg';
import course1 from '@/assets/images/courses/course_1.png';

const categories = [
  {
    id: 1,
    title: 'Design',
    thumbnail: designCategoryImage,
  },
  {
    id: 2,
    title: 'Development',
    thumbnail: developmentCategoryImage,
  },
  {
    id: 3,
    title: 'Marketing',
    thumbnail: marketingCategoryImage,
  },
  {
    id: 4,
    title: 'IT & Software',
    thumbnail: itCategoryImage,
  },
  {
    id: 5,
    title: 'Personal Development',
    thumbnail: personalDevelopmentCategoryImage,
  },
  {
    id: 6,
    title: 'Business',
    thumbnail: programmingCategoryImage,
  },
  {
    id: 7,
    title: 'Photography',
    thumbnail: photographyCategoryImage,
  },
  {
    id: 8,
    title: 'Music',
    thumbnail: musicCategoryImage,
  },
];

const courses = [
  {
    id: 1,
    title: 'Design',
    thumbnail: designCategoryImage,
  },
  {
    id: 2,
    title: 'Development',
    thumbnail: developmentCategoryImage,
  },
  {
    id: 3,
    title: 'Marketing',
    thumbnail: marketingCategoryImage,
  },
  {
    id: 4,
    title: 'IT & Software',
    thumbnail: itCategoryImage,
  },
  {
    id: 5,
    title: 'Personal Development',
    thumbnail: personalDevelopmentCategoryImage,
  },
  {
    id: 6,
    title: 'Business',
    thumbnail: programmingCategoryImage,
  },
  {
    id: 7,
    title: 'Photography',
    thumbnail: photographyCategoryImage,
  },
  {
    id: 8,
    title: 'Music',
    thumbnail: musicCategoryImage,
  },
];
</script>
