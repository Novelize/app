<script lang="ts" setup>
const panels = usePanels()
</script>

<template>
  <LayoutPanel :tabs="panels.state.leftTabs" side="left">
    <PanelsContents/>
  </LayoutPanel>
</template>
