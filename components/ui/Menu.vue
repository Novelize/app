<script lang="ts" setup>
import Menu from 'primevue/menu';
import Divider from 'primevue/divider';
import type {MenuItem} from "primevue/menuitem";
import type {IconName} from "~/data/iconName.enum";

defineProps<{
  items: MenuItem[];
  icon: IconName;
}>()

const menu = ref();

function toggleMenu(event: any) {
  menu.value.toggle(event);
}
</script>

<template>
  <UiButton
    :icon color="secondary" height="h-5"
    text width="w-5"
    @click="toggleMenu"
  />

  <Menu ref="menu" :model="items" popup>
    <template #item="{ item }">
      <Divider v-if="item.divider"/>
      <button
        v-else
        class="flex items-center gap-2 py-1 px-2 pointer"
        type="button"
        @click="item.command ? item.command : null"
      >
        <UiIcon v-if="item.icon" :name="item.icon" height="h-4" width="w-4"/>
        {{ item.label }}
      </button>
    </template>
  </Menu>
</template>
