<template>
  <Button variant="outline" @click="toggleTheme">
    <Moon
      class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
    />
    <Sun
      class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 text-yellow-500 transition-all dark:scale-100 dark:rotate-0"
    />
    <span class="sr-only">Toggle theme</span>
  </Button>
</template>

<script setup lang="ts">
import { Moon, Sun } from 'lucide-vue-next';
const colorMode = useColorMode();

function toggleTheme(): void {
  colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light';
}
</script>
