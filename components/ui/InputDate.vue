<script lang="ts" setup>
import DatePicker from 'primevue/datepicker';

const model = defineModel<Date | null | undefined>({required: true});

withDefaults(defineProps<{
  placeholder?: string;
  dateFormat?: string;
  showIcon?: boolean;
  showButtonBar?: boolean;
  showTime?: boolean;
  timeOnly?: boolean;
  inline?: boolean;
  minDate?: Date;
  maxDate?: Date;
  fluid?: boolean;
  readonly?: boolean;
  disabled?: boolean;
}>(), {
  dateFormat: 'dd/mm/yy',
  fluid: true,
})
</script>

<template>
  <DatePicker
    v-model="model"
    :dateFormat
    :disabled
    :fluid
    :inline
    :maxDate
    :minDate
    :placeholder
    :readonly
    :showButtonBar
    :showIcon
    :showTime
    :timeOnly
  />
</template>
