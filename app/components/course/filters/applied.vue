<template>
  <Button
    v-for="item in activeFilters"
    :key="item.value"
    variant="ghost"
    class="bg-muted h-7 gap-1 rounded-full text-xs text-sky-700"
    @click="$emit('removeFilter', item.value)"
  >
    {{ item.label }}
    <X class="w-3" />
  </Button>
</template>

<script setup lang="ts">
import { X } from 'lucide-vue-next';

defineProps<{ activeFilters: Option[] }>();
defineEmits<{
  (e: 'removeFilter', id: string): void;
}>();
</script>
