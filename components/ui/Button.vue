<script lang="ts" setup>
import Button from 'primevue/button';

withDefaults(defineProps<{
  label?: string;
  icon?: string;
  text?: boolean;
  outlined?: boolean;
}>(), {
  outlined: true
})

const {string} = useIcon();
</script>

<template>
  <Button
    :class="['flex items-center gap-1', text && 'px-1', icon && 'w-(--p-button-sm-icon-only-width) h-(--p-button-sm-icon-only-width) p-1']"
    :outlined
    :text
    size="small"
  >
    <Icon v-if="icon" :name="string(icon)" class="w-8 h-8"/>
    {{ label }}
  </Button>
</template>
