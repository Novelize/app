<script lang="ts" setup>
const visible = defineModel<boolean>('visible')
</script>

<template>
  <UiModal v-model:visible="visible" header="General Settings">
    <p>Hello</p>
  </UiModal>
</template>
