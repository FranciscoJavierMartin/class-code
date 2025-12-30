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
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
</script>
