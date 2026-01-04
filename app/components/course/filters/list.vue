<template>
  <AccordionItem :value>
    <AccordionTrigger class="py-3 text-sm text-gray-400 hover:text-gray-500">
      <span class="font-medium text-gray-900"> {{ title }} </span>
    </AccordionTrigger>
    <AccordionContent class="pt-6">
      <ul class="space-y-4">
        <li
          v-for="option in options as Option[]"
          :key="option.value"
          class="flex items-center"
        >
          <Checkbox
            :id="option.value"
            v-model="options1"
            @update:model-value="$emit('update', { option, value: $event })"
          />
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
</template>

<script setup lang="ts">
defineProps<{
  value: string;
  title: string;
  options: Option[];
}>();

const options1 = defineModel<Option | Option[]>();

defineEmits<{
  (
    e: 'update',
    value: { option: Option; value: boolean | 'indeterminate' },
  ): void;
}>();

// const isList = computed<boolean>(() => Array.isArray(options.value));
</script>
