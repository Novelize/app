<script lang="ts" setup>
import Button from 'primevue/button';
import type {IconName} from "~/data/iconName.enum";

withDefaults(defineProps<{
  label?: string,
  color?: "secondary" | "info" | "success" | "warn" | "danger" | "contrast" | "help",
  icon?: IconName,
  text?: boolean,
  outlined?: boolean,
  width?: string,
  height?: string,
  disabled?: boolean,
}>(), {
  outlined: true
})
</script>

<template>
  <Button
    :class="['flex items-center gap-1 min-w-8 min-h-8', text && 'px-1', icon && 'w-(--p-button-sm-icon-only-width) h-(--p-button-sm-icon-only-width) p-1']"
    :disabled="disabled"
    :outlined
    :text
    :severity="color"
    size="small"
  >
    <UiIcon v-if="icon" :height :name="icon" :width/>
    {{ label }}
  </Button>
</template>
