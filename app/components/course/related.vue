<template>
  <section>
    <div class="container">
      <TitleSection>Related courses</TitleSection>
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
            Courses
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </section>
</template>
