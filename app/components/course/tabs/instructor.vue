<template>
  <div class="rounded-md bg-gray-50 p-8">
    <div class="mb-8 md:flex md:gap-x-5">
      <div class="mb-5 h-77.5 w-67.5 max-w-full flex-none rounded md:mb-0">
        <img
          class="size-full rounded object-cover"
          src="https://i.pravatar.cc"
          alt="John"
        />
      </div>
      <div class="flex-1">
        <div class="max-w-75">
          <h4 class="text-[34px] leading-12.75 font-bold">John Doe</h4>
          <div class="mb-6 font-medium text-gray-600">Web developer</div>
          <ul class="space-y-4">
            <li class="flex space-x-3">
              <Presentation class="text-gray-600" />
              <div>10+ courses</div>
            </li>
            <li class="flex space-x-3">
              <Presentation class="text-gray-600" />
              <div>10+ courses</div>
            </li>
            <li class="flex space-x-3">
              <Presentation class="text-gray-600" />
              <div>10+ courses</div>
            </li>
            <li class="flex space-x-3">
              <Presentation class="text-gray-600" />
              <div>10+ courses</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <p class="text-gray-600">
      There are many variations of passages of Lorem Ipsum available, but the
      majority have suffered alteration in some form, by injected humour, or
      randomised words which do not look even slightly believable. If you are
      going to use a passage of Lorem Ipsum, you need to be sure there is not
      anything embarrassing hidden in the middle of text. All the Lorem Ipsum
      generators on the Internet tend.
    </p>
  </div>
</template>

<script setup lang="ts">
import { Presentation } from 'lucide-vue-next';
</script>
