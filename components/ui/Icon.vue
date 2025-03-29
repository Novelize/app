<script lang="ts" setup>
import type {IconName} from "~/data/iconName.enum";

withDefaults(defineProps<{
  name: IconName | string,
  width?: string,
  height?: string,
}>(), {
  width: 'w-5',
  height: 'h-5',
})
</script>

<template>
  <Icon :class="`${width} ${height}`" :name="name"/>
</template>
