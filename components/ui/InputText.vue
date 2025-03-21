<script lang="ts" setup>
import InputText from 'primevue/inputtext';
import type {InputTypeHTMLAttribute} from "vue";

const model = defineModel<string>({required: true})

withDefaults(defineProps<{
  placeholder?: string;
  type: InputTypeHTMLAttribute;
  inputmode: "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";
  fluid?: boolean;
  readonly?: boolean;
  disabled?: boolean;
}>(), {
  fluid: true,
})
</script>

<template>
  <InputText v-model="model" :disabled :fluid :inputmode :placeholder :readonly :type/>
</template>
