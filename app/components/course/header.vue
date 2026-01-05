<template>
  <header class="pt-12 sm:pt-16">
    <div class="container">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h1 class="font-inter px-6 text-lg text-gray-600">
            {{ subtitle }}
          </h1>
          <p
            class="mt-5 text-4xl leading-tight font-bold text-gray-900 sm:text-5xl lg:text-6xl"
          >
            <span class="relative inline-flex sm:inline">
              <span
                class="absolute inset-0 size-full bg-linear-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-30 blur-lg filter"
              />
              <span class="relative">{{ title }}</span>
            </span>
          </p>
          <div class="mt-6 flex flex-wrap items-center justify-center gap-3">
            <NuxtLink :class="cn(buttonVariants({ size: 'lg' }))">
              Enroll now
            </NuxtLink>
            <NuxtLink
              :class="cn(buttonVariants({ variant: 'outline', size: 'lg' }))"
            >
              See intro
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="mt-6 pb-12">
        <div class="relative">
          <div class="absolute inset-0 h-2/3" />
          <div class="relative mx-auto">
            <div class="lg:mx-auto lg:max-w-3xl">
              <NuxtImg
                :src="thumbnail"
                alt="Course image"
                width="768px"
                height="463px"
                class="h-115.75 w-3xl rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

defineProps<{
  title: string;
  subtitle: string;
  thumbnail: string;
}>();
</script>
