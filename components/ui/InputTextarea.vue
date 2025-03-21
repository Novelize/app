<script lang="ts" setup>
import Textarea from 'primevue/textarea';

const model = defineModel<string>({required: true})

withDefaults(defineProps<{
  placeholder?: string;
  rows?: number;
  autoResize?: boolean;
  fluid?: boolean;
  readonly?: boolean;
  disabled?: boolean;
}>(), {
  rows: 3,
  fluid: true,
})
</script>

<template>
  <Textarea v-model="model" :autoResize :disabled :fluid :placeholder :readonly :rows/>
</template>
