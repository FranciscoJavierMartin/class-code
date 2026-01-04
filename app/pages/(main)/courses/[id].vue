<template>
  <div>
    <div class="overflow-x-hidden">
      <header class="pt-12 sm:pt-16">
        <div class="container">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-2xl text-center">
              <h1 class="font-inter px-6 text-lg text-gray-600">
                Master Javascript
              </h1>
              <p
                class="mt-5 text-4xl leading-tight font-bold text-gray-900 sm:text-5xl lg:text-6xl"
              >
                <span class="relative inline-flex sm:inline">
                  <span
                    class="absolute inset-0 size-full bg-linear-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-30 blur-lg filter"
                  />
                  <span class="relative">Other text</span>
                </span>
              </p>
              <div
                class="mt-6 flex flex-wrap items-center justify-center gap-3"
              >
                <NuxtLink :class="cn(buttonVariants({ size: 'lg' }))">
                  Enroll now
                </NuxtLink>
                <NuxtLink
                  :class="
                    cn(buttonVariants({ variant: 'outline', size: 'lg' }))
                  "
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
                  <img
                    :src="courseImg"
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
    </div>

    <section class="py-8 md:py-12 lg:py-24">
      <div class="container">
        <span
          class="inline-block rounded-full bg-green-500 px-4 py-0.5 text-xs font-medium text-white"
        >
          Development
        </span>
        <h3
          class="mt-3 text-2xl font-bold md:text-3xl lg:text-4xl 2xl:text-5xl"
        >
          My super text
        </h3>
        <p class="mt-3 text-sm text-gray-600">Master Javascript</p>
        <div
          class="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6 md:gap-20"
        >
          <div class="flex items-center gap-2">
            <img
              className="size-10 rounded-full"
              src="https://i.pravatar.cc"
              alt="John"
            />
            <p class="font-bold">John Doe</p>
          </div>
          <div class="flex items-center gap-2 text-sm">
            <span class="font-semibold">Last updated:</span>
            <span>Jan 06, 2026</span>
          </div>
        </div>
        <div class="my-6">
          <Tabs default-value="instructor" class="w-full">
            <TabsList class="my-6 grid w-full max-w-3xl grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <CourseTabsOverview />
            </TabsContent>
            <TabsContent value="curriculum">
              <CourseTabsCurriculum />
            </TabsContent>
            <TabsContent value="instructor">
              <CourseTabsInstructor />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>

    <CourseTestimonials />
    <CourseRelated />
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import courseImg from '@/assets/images/courses/course_1.png';
</script>
