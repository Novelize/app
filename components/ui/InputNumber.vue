<script lang="ts" setup>
import InputNumber from 'primevue/inputnumber';

const model = defineModel<number | null>({required: true})

withDefaults(defineProps<{
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
  fluid?: boolean;
  readonly?: boolean;
  disabled?: boolean;
}>(), {
  fluid: true,
})
</script>

<template>
  <InputNumber v-model="model" :disabled :fluid :max :min :placeholder :readonly :step/>
</template>
