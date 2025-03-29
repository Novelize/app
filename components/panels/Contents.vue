<script lang="ts" setup>
import PanelMenu from 'primevue/panelmenu';

const novel = useNovel();
</script>

<template>
  <ScrollPanel>
    <nav class="py-4 px-2">
      <PanelMenu :model="novel.toc" multiple/>
    </nav>
  </ScrollPanel>
</template>
