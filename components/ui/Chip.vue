<script lang="ts" setup>
import Chip from 'primevue/chip';

defineProps<{
  id?: string | number;
  label: string;
  active?: boolean;
}>()
</script>

<template>
  <Chip :id="id" :class="['text-xs border cursor-pointer', active ? 'border-slate-400' : 'border-slate-800']" :label/>
</template>
