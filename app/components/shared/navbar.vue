<template>
  <div class="flex w-full justify-between gap-6 lg:gap-10">
    <NuxtLink :to="{ name: ROUTES.home }">
      <SharedLogo />
    </NuxtLink>
    <nav class="hidden gap-6 lg:flex">
      <NuxtLink
        v-for="link in navLinks"
        :key="link.toName"
        :to="{ name: link.toName }"
        class="hover:text-foreground/80 flex items-center text-lg font-medium transition-colors sm:text-sm"
      >
        {{ link.title }}
      </NuxtLink>
    </nav>
    <nav class="flex items-center gap-3">
      <div class="hidden items-center gap-3 lg:flex">
        <NuxtLink
          :to="{ name: ROUTES.login }"
          :class="cn(buttonVariants({ size: 'sm' }), 'px-4')"
        >
          Login
        </NuxtLink>
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="outline" size="sm">Register</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" class="mt-4 w-56">
            <DropdownMenuItem class="cursor-pointer">
              <NuxtLink>Student</NuxtLink>
            </DropdownMenuItem>
            <DropdownMenuItem class="cursor-pointer">
              <NuxtLink>Instructor</NuxtLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <div class="cursor-pointer">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@ariyan" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" class="mt-4 w-56">
          <DropdownMenuItem class="cursor-pointer" as-child>
            <NuxtLink href="account">Profile</NuxtLink>
          </DropdownMenuItem>
          <DropdownMenuItem class="cursor-pointer" as-child>
            <NuxtLink href="account/enrolled-courses">My Courses</NuxtLink>
          </DropdownMenuItem>
          <DropdownMenuItem class="cursor-pointer" as-child>
            <NuxtLink href="">Testimonials & Certificates</NuxtLink>
          </DropdownMenuItem>
          <DropdownMenuItem class="cursor-pointer" as-child>
            <NuxtLink href="">Logout</NuxtLink>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ROUTES } from '@/utils/constants/routes';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

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
