<template>
  <Accordion :default-value="[list[0]?.key ?? '']" type="multiple">
    <CourseFiltersList
      v-for="{ title, options, key } in list"
      :key
      :title
      :options
      :value="key"
      @update="updateFilter(key, $event.option, $event.value)"
    />
  </Accordion>
</template>

<script setup lang="ts">
defineProps<{
  list: { title: string; key: string; options: Option[] }[];
}>();

const filters = defineModel<{ [key: string]: string | string[] }>();

function updateFilter(
  key: string,
  option: Option,
  value: boolean | 'indeterminate',
) {
  console.log(filters.value?.[key], value);
  if (filters.value?.[key]) {
    if (typeof filters.value?.[key] === 'string') {
      filters.value[key] = value ? option.value : '';
    } else {
      if (!value) {
        filters.value[key] = filters.value[key].filter(
          (opt) => opt !== option.value,
        );
      } else {
        filters.value[key] = [...filters.value[key], option.value];
      }
    }
  }

  console.log(filters.value);
}
</script>
