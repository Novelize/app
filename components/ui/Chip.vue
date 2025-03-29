<script lang="ts" setup>
import Chip from 'primevue/chip';

defineProps<{
  label: string;
  active?: boolean;
}>()
</script>

<template>
  <Chip :class="['text-xs border', active ? 'border-slate-400' : 'border-slate-800']" :label removable/>
</template>
