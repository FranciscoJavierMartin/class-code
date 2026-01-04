<template>
  <div>
    <AccordionItem value="item-1">
      <AccordionTrigger>Introduction</AccordionTrigger>
      <AccordionContent>
        <div
          class="mt-4 mb-6 flex flex-wrap items-center gap-x-5 text-sm text-gray-600"
        >
          <span class="flex items-center gap-1.5">
            <Video class="size-4" /> 12 lessons
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
        <CourseListLesson class="space-y-3" />
      </AccordionContent>
    </AccordionItem>
  </div>
</template>

<script setup lang="ts">
import { Video, NotepadText, FileQuestion, Radio } from 'lucide-vue-next';
</script>
