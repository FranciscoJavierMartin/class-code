<template>
  <Button
    v-for="item in list"
    :key="item"
    variant="ghost"
    class="bg-muted h-7 gap-1 rounded-full text-xs text-sky-700"
  >
    {{ item }}
    <X class="w-3" />
  </Button>
</template>

<script setup lang="ts">
import { X } from 'lucide-vue-next';

defineProps<{ list: string[] }>();
</script>
