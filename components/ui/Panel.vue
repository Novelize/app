<script lang="ts" setup>

import Panel from 'primevue/panel';

defineProps<{
  header: string,
  toggleable?: boolean;
  collapsed?: boolean;
}>()
</script>

<template>
  <Panel :collapsed :header :toggleable>
    <slot/>

    <template #footer>
      <slot name="footer"/>
    </template>
  </Panel>
</template>
