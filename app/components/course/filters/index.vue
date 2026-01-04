<template>
  <Accordion :default-value="[list[0]?.key ?? '']" type="multiple">
    <CourseFiltersList
      v-for="{ title, options, key } in list"
      :key
      v-model="filters[key]"
      :title
      :options
      :value="key"
    />
  </Accordion>
</template>

<script setup lang="ts">
defineProps<{
  list: { title: string; key: string; options: Option[] }[];
}>();

const filters = defineModel<{ [key: string]: Option | Option[] }>({
  required: true,
});
// function updateFilter(
//   key: string,
//   option: Option,
//   value: boolean | 'indeterminate',
// ) {
//   if (filters.value?.[key]) {
//     if (Array.isArray(filters.value?.[key])) {
//       if (!value) {
//         filters.value[key] = (filters.value[key] as Option[]).filter(
//           (opt) => opt.value !== option.value,
//         );
//       } else {
//         filters.value[key] = [...(filters.value[key] as Option[]), option];
//       }
//     } else {
//       filters.value[key] = value ? option : { label: '', value: '' };
//     }
//   }
// }
</script>
