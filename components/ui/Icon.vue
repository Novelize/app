<script lang="ts" setup>
import type {IconName} from "~/composables/useIcon";

withDefaults(defineProps<{
  name: IconName,
  width?: string,
  height?: string,
}>(), {
  width: 'w-8',
  height: 'h-8',
})
</script>

<template>
  <Icon :class="`${width} ${height}`" :name="name"/>
</template>
