<template>
  <div class="container space-y-6 py-6 dark:bg-transparent">
    <div
      class="flex flex-col items-center justify-between gap-4 border-b border-gray-200 pb-6 lg:flex-row"
    >
      <InputGroup class="border-none max-lg:w-full">
        <InputGroupInput placeholder="Search courses..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>
      <div class="flex items-center justify-end gap-2 max-lg:w-full">
        <Select>
          <SelectTrigger class="w-full overflow-hidden lg:w-45">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem
                v-for="option in SORT_OPTIONS"
                :key="option.value"
                :value="option.value"
                class="cursor-pointer"
              >
                {{ option.label }}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div class="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <Filter class="size-6" />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Filter courses</SheetTitle>
                <Accordion :default-value="['categories']" type="multiple">
                  <AccordionItem value="categories">
                    <AccordionTrigger
                      class="py-3 text-sm text-gray-400 hover:text-gray-500"
                    >
                      <span class="font-medium text-gray-900">
                        Categories
                      </span>
                    </AccordionTrigger>
                    <AccordionContent class="pt-6">
                      <ul class="space-y-4">
                        <li
                          v-for="option in data?.categories"
                          :key="option.id"
                          class="flex items-center"
                        >
                          <Checkbox :id="option.id" />
                          <Label
                            :for="option.id"
                            class="ml-3 cursor-pointer text-sm text-gray-600"
                          >
                            {{ option.title }}
                          </Label>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="price">
                    <AccordionTrigger
                      class="py-3 text-sm text-gray-400 hover:text-gray-500"
                    >
                      <span class="font-medium text-gray-900"> Price </span>
                    </AccordionTrigger>
                    <AccordionContent class="pt-6">
                      <ul class="space-y-4">
                        <li
                          v-for="option in PRICE_OPTIONS"
                          :key="option.value"
                          class="flex items-center"
                        >
                          <Checkbox :id="option.value" />
                          <Label
                            :for="option.value"
                            class="ml-3 cursor-pointer text-sm text-gray-600"
                          >
                            {{ option.label }}
                          </Label>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap items-center gap-2">
      <Button></Button>
    </div>
    <section class="pt-6 pb-24">
      <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
        <div class="hidden lg:block">
          <Accordion :default-value="['categories']" type="multiple">
            <AccordionItem value="categories">
              <AccordionTrigger
                class="py-3 text-sm text-gray-400 hover:text-gray-500"
              >
                <span class="font-medium text-gray-900"> Categories </span>
              </AccordionTrigger>
              <AccordionContent class="pt-6">
                <ul class="space-y-4">
                  <li
                    v-for="option in data?.categories"
                    :key="option.id"
                    class="flex items-center"
                  >
                    <Checkbox :id="option.id" />
                    <Label
                      :for="option.id"
                      class="ml-3 cursor-pointer text-sm text-gray-600"
                    >
                      {{ option.title }}
                    </Label>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="price">
              <AccordionTrigger
                class="py-3 text-sm text-gray-400 hover:text-gray-500"
              >
                <span class="font-medium text-gray-900"> Price </span>
              </AccordionTrigger>
              <AccordionContent class="pt-6">
                <ul class="space-y-4">
                  <li
                    v-for="option in data?.categories"
                    :key="option.id"
                    class="flex items-center"
                  >
                    <Checkbox :id="option.id" />
                    <Label
                      :for="option.id"
                      class="ml-3 cursor-pointer text-sm text-gray-600"
                    >
                      {{ option.title }}
                    </Label>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div
          class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3"
        >
          <CardCourse
            v-for="course in data?.courses"
            :key="course.id"
            :course="course"
            :category="course.category"
            :modules="course.modules"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Filter, Search } from 'lucide-vue-next';
import type { Category, Course } from '@/generated/prisma/client';

const SORT_OPTIONS = [
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
];

const PRICE_OPTIONS = [
  { label: 'Free', value: 'free' },
  { label: 'Paid', value: 'paid' },
];

const { data } = await useAsyncData<{
  courses: Course[];
  categories: Category[];
}>(
  'questions',
  async (_nuxtApp, { signal }) => {
    const [{ courses }, { categories }] = await Promise.all([
      $fetch<{
        courses: Course[];
      }>('/api/courses', {
        signal,
      }),
      $fetch<{
        categories: Category[];
      }>('/api/categories', {
        signal,
      }),
    ]);

    return {
      categories,
      courses,
    };
  },
  {},
);
</script>
