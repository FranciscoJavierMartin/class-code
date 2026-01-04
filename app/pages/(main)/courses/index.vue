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
                <CourseFilters v-model="filters" />
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap items-center gap-2">
      <CourseFiltersApplied
        :active-filters="activeFilters.categories"
        @remove-filter="removeFilter('categories', $event)"
      />
      <CourseFiltersApplied
        :active-filters="activeFilters.price"
        @remove-filter="removeFilter('price', $event)"
      />
    </div>
    <section class="pt-6 pb-24">
      <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
        <div class="hidden lg:block">
          <CourseFilters v-model="filters" />
        </div>
        <div
          class="grid h-full grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3"
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
import type { Category } from '@/generated/prisma/client';

const filters = reactive<{
  categories: Option[];
  price: Option[];
  sort: Option;
}>({
  categories: [],
  price: [],
  sort: { label: '', value: '' },
});

const SORT_OPTIONS = [
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
];

const { data } = await useAsyncData<{
  courses: FullCourse[];
  categories: Category[];
}>(
  'courses',
  async (_nuxtApp, { signal }) => {
    const [{ courses }, { categories }] = await Promise.all([
      $fetch<{
        courses: FullCourse[];
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

watch(
  data,
  (newValue) => {
    filters.categories =
      newValue?.categories.map((cat) => ({
        label: cat.title,
        value: cat.id,
        selected: false,
      })) ?? [];
    filters.price = [
      { label: 'Free', value: 'free', selected: false },
      { label: 'Paid', value: 'paid', selected: false },
    ];
  },
  { immediate: true, once: true },
);

const activeFilters = computed(() => {
  return {
    categories:
      filters.categories?.filter((category) => category.selected) ?? [],
    price: filters.price?.filter((price) => price.selected) ?? [],
  };
});

function removeFilter(key: string, id: string) {
  if (filters[key] && Array.isArray(filters[key])) {
    filters[key] =
      filters[key]?.map((item) =>
        item.value === id ? { ...item, selected: false } : item,
      ) ?? [];
  }
}
</script>
