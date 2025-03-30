<script lang="ts" setup>
import Menu from 'primevue/menu';
import type {MenuItem} from "primevue/menuitem";
import type {IconName} from "~/data/iconName.enum";

const props = defineProps<{
  items: MenuItem[];
  icon: IconName;
}>()

const menu = ref();

const menuDisabled = computed(() => {
  return props.items.filter(item => {
    if (Object.prototype.hasOwnProperty.call(item, 'visible')) {
      return item.visible === true;
    }
    return true;
  }).length === 0;
})

function toggleMenu(event: any) {
  menu.value.toggle(event);
}
</script>

<template>
  <UiButton
    :disabled="menuDisabled" :icon color="secondary"
    height="h-5" text
    width="w-5"
    @click="toggleMenu"
  />

  <Menu ref="menu" :model="items" popup>
    <template #item="{ item }">
      <button
        :disabled="!!item.disabled"
        class="flex items-center gap-2 py-1 px-2 cursor-pointer"
        type="button"
        @click="item.command ? item.command : null"
      >
        <UiIcon v-if="item.icon" :name="item.icon" height="h-4" width="w-4"/>
        {{ item.label }}
      </button>
    </template>
  </Menu>
</template>
