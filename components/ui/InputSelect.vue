<script lang="ts" setup>
import Select from 'primevue/select';

export interface SelectOption {
  label: string;
  value: string | number | boolean | undefined;
}

const model = defineModel<never>({required: true})

withDefaults(defineProps<{
  placeholder?: string;
  options: SelectOption[];
  filter?: boolean;
  checkmark?: boolean;
  loading?: boolean;
  showClear?: boolean;
  fluid?: boolean;
  readonly?: boolean;
  disabled?: boolean;
}>(), {
  fluid: true,
})
</script>

<template>
  <Select
    v-model="model"
    :checkmark
    :disabled
    :filter
    :fluid
    :loading
    :options
    :placeholder
    :readonly
    :showClear
    optionLabel="label"
    optionValue="value"
  />
</template>
