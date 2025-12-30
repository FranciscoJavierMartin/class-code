<template>
  <Drawer direction="top">
    <DrawerTrigger as-child>
      <button class="flex items-center space-x-2 lg:hidden">
        <Menu />
      </button>
    </DrawerTrigger>
    <DrawerContent aria-describedby="Navigation">
      <div
        class="bg-popover text-popover-foreground mx-auto my-10 w-full max-w-sm"
      >
        <nav class="grid w-full grid-flow-row auto-rows-auto text-sm">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.toName"
            class="w-full rounded-md border-b px-2 py-5 text-center text-sm font-extrabold hover:underline"
          >
            {{ link.title }}
          </NuxtLink>
        </nav>
      </div>
    </DrawerContent>
  </Drawer>
</template>

<script setup lang="ts">
import { Menu } from 'lucide-vue-next';
import { ROUTES } from '@/utils/constants/routes';

const navLinks = [
  {
    title: 'Features',
    toName: ROUTES.features,
  },
  {
    title: 'Pricing',
    toName: ROUTES.pricing,
  },
  {
    title: 'Blog',
    toName: ROUTES.blog,
  },
  {
    title: 'Documentation',
    toName: ROUTES.documentation,
  },
];
</script>
