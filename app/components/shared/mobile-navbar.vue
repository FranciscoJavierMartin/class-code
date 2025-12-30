<template>
  <Drawer direction="top">
    <DrawerTrigger as-child>
      <Button variant="outline"> Open Drawer </Button>
    </DrawerTrigger>
    <DrawerContent aria-describedby="Navigation">
      <div
        class="bg-popover text-popover-foreground mx-auto my-10 w-full max-w-sm"
      >
        <nav class="grid w-full grid-flow-row auto-rows-auto text-sm">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.toName"
            class="w-full rounded-md border-b px-2 py-5 text-center text-sm font-black hover:underline"
          >
            {{ link.title }}
          </NuxtLink>
        </nav>
      </div>
    </DrawerContent>
  </Drawer>
</template>

<script setup lang="ts">
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
