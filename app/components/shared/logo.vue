<template>
  <div>
    <span :class="cn('max-w-50', $props.class)">
      CodeClass &copy; {{ new Date().getFullYear() }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { cn } from '@/lib/utils';

defineProps<{ class?: HTMLAttributes['class'] }>();
</script>
