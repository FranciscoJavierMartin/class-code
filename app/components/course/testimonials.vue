<template>
  <section class="pb-8 md:pb-12 lg:pb-24">
    <div class="container">
      <TitleSection class="mb-6">Testimonials</TitleSection>
      <Carousel
        :opts="{ align: 'start' }"
        class="mx-auto w-full max-2xl:w-[90%]"
      >
        <CarouselContent>
          <CarouselItem
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            class="md:basis-1/2 lg:basis-1/3"
          >
            <CardTestimonial
              :name="testimonial.student.name"
              :avatar="testimonial.student.image"
              :rating="testimonial.rating"
              :text="testimonial.content"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Testimonial } from '@/generated/prisma/client';

defineProps<{ testimonials: Testimonial[] }>();
</script>
