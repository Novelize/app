<script lang="ts" setup>
import {FormField} from '@primevue/forms';

defineProps<{
  name: string;
  initialValue?: string;
}>()
</script>

<template>
  <FormField v-slot="$field" :initialValue :name class="flex flex-col gap-1">
    <slot/>
    <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{ $field.error?.message }}</Message>
  </FormField>
</template>
