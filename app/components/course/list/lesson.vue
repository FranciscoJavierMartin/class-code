<template>
  <div :class="$props.class">
    <button
      :class="
        cn(
          'flex w-full items-center gap-x-2 text-sm font-medium text-slate-500 transition-all hover:text-slate-600',
        )
      "
    >
      <div class="flex items-center gap-x-2">
        <Tv :size="16" class="text-slate-500" />
        What is React?
      </div>
    </button>
    <button
      :class="
        cn(
          'flex w-full items-center gap-x-2 text-sm font-medium text-slate-500 transition-all hover:text-slate-600',
        )
      "
    >
      <div class="flex items-center gap-x-2">
        <Tv :size="16" class="text-slate-500" />
        What is React?
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { Tv } from 'lucide-vue-next';
import { cn } from '@/lib/utils';

defineProps<{ class?: HTMLAttributes['class'] }>();
</script>
