<template>
  <div>
    <AccordionItem value="item-1">
      <AccordionTrigger>{{ module.title }}</AccordionTrigger>
      <AccordionContent>
        <div
          class="mt-4 mb-6 flex flex-wrap items-center gap-x-5 text-sm text-gray-600"
        >
          <span class="flex items-center gap-1.5">
            <Clock10 class="size-4" /> {{ durationModule }}
          </span>
          <span class="flex items-center gap-1.5">
            <Video class="size-4" /> {{ module.lessons.length }} lessons
          </span>
          <span class="flex items-center gap-1.5">
            <NotepadText class="size-4" /> 10 notes
          </span>
          <span class="flex items-center gap-1.5">
            <FileQuestion class="size-4" /> 10 quiz
          </span>
          <span class="flex items-center gap-1.5">
            <Radio class="size-4" /> 1 Live class
          </span>
        </div>
        <div class="flex flex-col gap-y-3">
          <CourseListLesson
            v-for="lesson in module.lessons"
            :key="lesson.id"
            :lesson
          />
        </div>
      </AccordionContent>
    </AccordionItem>
  </div>
</template>

<script setup lang="ts">
import {
  Video,
  NotepadText,
  FileQuestion,
  Radio,
  Clock10,
} from 'lucide-vue-next';

const { duration } = defineProps<{
  module: ModuleWithLessons;
  duration: number;
}>();

const durationModule = computed(() => formatTime(duration));
</script>
