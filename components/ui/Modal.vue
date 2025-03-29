<script lang="ts" setup>
import Dialog from 'primevue/dialog';

const visible = defineModel<boolean>('visible')

defineProps<{
  header?: string,
}>()
</script>

<template>
  <Dialog v-model:visible="visible" :header blockScroll dismissableMask modal position="top">
    <slot/>
  </Dialog>
</template>
