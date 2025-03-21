<script lang="ts" setup>
import Button from 'primevue/button';

withDefaults(defineProps<{
  label?: string;
  icon?: IconName;
  text?: boolean;
  outlined?: boolean;
}>(), {
  outlined: true
})
</script>

<template>
  <Button
    :class="['flex items-center gap-1 min-w-8 min-h-8', text && 'px-1', icon && 'w-(--p-button-sm-icon-only-width) h-(--p-button-sm-icon-only-width) p-1']"
    :outlined
    :text
    size="small"
  >
    <UiIcon v-if="icon" :name="icon"/>
    {{ label }}
  </Button>
</template>
