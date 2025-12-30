<template>
  <div class="text-foreground border-b border-gray-700 px-4 py-5 md:px-16">
    <div
      class="mx-auto flex max-w-7xl flex-col items-center space-y-12 md:flex-row md:space-y-0 md:space-x-8"
    >
      <div class="flex-1">
        <p
          class="font-poppins mt-5 text-3xl leading-tight font-bold text-gray-900 sm:text-5xl"
        >
          <span className="relative inline-flex sm:inline">
            <span
              className="bg-linar-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"
            >
            </span>
            <span className="relative">Let us know for support</span>
          </span>
        </p>
        <p className="text-foreground leading-relaxed mb-8 mt-8">
          CodeClass was founded to empower novice and professional software
          engineers to enhance their skills, increase their earning potential,
          and transform their lives for the better.
        </p>
        <div>
          <a href="#"> Contact Us </a>
          <a class="#"> Call for support </a>
        </div>
      </div>
      <div class="flex flex-1 justify-center">
        <img
          :src="support"
          alt="Support"
          width="500px"
          height="400px"
          class="h-100 w-125 rounded-lg object-cover object-top"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import support from '@/assets/images/support2.webp';
</script>
