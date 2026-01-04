<template>
  <Accordion :default-value="[keys[0] ?? '']" type="multiple">
    <CourseFiltersList
      v-for="key in keys"
      :key
      v-model="filters[key]!"
      :title="filterMetadata[key]?.title ?? ''"
      :value="filterMetadata[key]?.value ?? ''"
    />
  </Accordion>
</template>

<script setup lang="ts">
const filters = defineModel<{ [key: string]: Option[] }>({
  required: true,
});

const keys = computed(() => Object.keys(filters.value));

const filterMetadata: { [key: string]: { title: string; value: string } } = {
  categories: {
    title: 'Categories',
    value: 'categories',
  },
  price: {
    title: 'Price',
    value: 'price',
  },
};
</script>
