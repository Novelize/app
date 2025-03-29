<script lang="ts" setup>
const visible = defineModel<boolean>('visible')
</script>

<template>
  <UiModal v-model:visible="visible" header="Account Settings">
    <p>Hello</p>
  </UiModal>
</template>
