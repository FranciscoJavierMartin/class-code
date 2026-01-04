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
            v-for="(_, index) in new Array(5).fill('')"
            :key="index"
            class="md:basis-1/2 lg:basis-1/3"
          >
            <CardTestimonial
              name="John Doe"
              avatar="https://i.pravatar.cc/56"
              :rating="4.5"
              text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit
        rerum incidunt, a consequuntur recusandae ab saepe illo est quia
        obcaecati neque quibusdam eius accusamus error officiis atque voluptates
        magnam!"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </section>
</template>
