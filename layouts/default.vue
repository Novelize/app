<script lang="ts" setup>
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
</script>

<template>
  <LayoutHeader class="fixed top-0 left-56 right-0 z-50 h-12"/>

  <Splitter class="fixed top-12 bottom-0 left-56 right-0 bg-gray-50 border-none" stateKey="splitter">
    <SplitterPanel :minSize="50" :size="75" class="relative h-full">
      <slot/>
    </SplitterPanel>

    <SplitterPanel :minSize="25" :size="25" class="relative h-full border-l border-gray-200">
      <LayoutPanel/>
    </SplitterPanel>
  </Splitter>

  <LayoutContents class="fixed inset-y-0 left-0 w-56 bg-gray-50 border-r border-gray-200"/>
</template>
