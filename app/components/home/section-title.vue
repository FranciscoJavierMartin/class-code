<template>
  <h2 :class="cn('text-xl font-bold md:text-2xl lg:text-3xl', $props.class)">
    <slot />
  </h2>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'vue';

defineProps<{
  class?: HTMLAttributes['class'];
}>();
</script>
