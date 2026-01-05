<template>
  <div>
    <span class="flex items-center gap-1.5">
      <BookCheck class="size-4" /> {{ modules.length }} chapters
    </span>
    <span class="flex items-center gap-1.5">
      <Clock10 class="size-4" /> {{ durationCourse }}
    </span>
    <span class="flex items-center gap-1.5">
      <Radio class="size-4" /> 4 Live class
    </span>
  </div>

  <Accordion
    :default-value="['item-1', 'item-2', 'item-3']"
    type="multiple"
    collapsible
    class="w-full"
  >
    <CourseListModule
      v-for="module in modules"
      :key="module.id"
      :module
      :duration="durationModules[module.id] ?? 0"
    />
  </Accordion>
</template>

<script setup lang="ts">
import { BookCheck, Clock10, Radio } from 'lucide-vue-next';

const { modules, duration } = defineProps<{
  modules: ModuleWithLessons[];
  duration: number;
  durationModules: Record<string, number>;
}>();

const durationCourse = computed(() => formatTime(duration));
</script>
