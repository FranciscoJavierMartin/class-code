<template>
  <div>
    <div class="overflow-x-hidden">
      <CourseHeader
        :title="data?.course.title ?? ''"
        :subtitle="data?.course.subtitle ?? ''"
        :thumbnail="data?.course.thumbnail ?? ''"
      />
    </div>

    <section v-if="data" class="py-8 md:py-12 lg:py-24">
      <div class="container">
        <span
          class="inline-block rounded-full bg-green-500 px-4 py-0.5 text-xs font-medium text-white"
        >
          {{ data.course.category.title }}
        </span>
        <h3
          class="mt-3 text-2xl font-bold md:text-3xl lg:text-4xl 2xl:text-5xl"
        >
          {{ data.course.title }}
        </h3>
        <p class="mt-3 text-sm text-gray-600">{{ data.course.subtitle }}</p>
        <div
          class="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6 md:gap-20"
        >
          <div class="flex items-center gap-2">
            <NuxtImg
              class="size-10 rounded-full"
              width="40px"
              height="40px"
              :src="data.course.instructor.image"
              :alt="data.course.instructor.name"
            />
            <p class="font-bold">{{ data.course.instructor.name }}</p>
          </div>
          <div class="flex items-center gap-2 text-sm">
            <span class="font-semibold">Last updated:</span>
            <span>{{ formatDate(data.course.updatedAt) }}</span>
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

    <CourseTestimonials
      v-if="data?.course.testimonials"
      :testimonials="data.course.testimonials"
    />
    <CourseRelated />
  </div>
</template>

<script setup lang="ts">
import type { Course } from '@/generated/prisma/client';

const route = useRoute();
const id = computed<string>(() => route.params.id as string);

const { data } = await useAsyncData<{
  course: Course;
}>(
  `course-${id.value}`,
  async (_nuxtApp, { signal }) => {
    const { course } = await $fetch<{
      course: Course;
    }>(`/api/courses/${id.value}`, {
      signal,
    });

    return {
      course,
    };
  },
  {
    watch: [id],
  },
);
</script>
