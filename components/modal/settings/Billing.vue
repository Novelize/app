<script lang="ts" setup>
const visible = defineModel<boolean>('visible')
</script>

<template>
  <UiModal v-model:visible="visible" header="Billing">
    <p>Hello</p>
  </UiModal>
</template>
