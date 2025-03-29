<script lang="ts" setup>
import {IconName} from "~/data/iconName.enum";
import type {PanelTab} from "~/composables/usePanels";

const props = defineProps<{
  side: 'left' | 'right' | 'bottom' | 'center'
  tabs?: PanelTab[];
  hideTabs?: boolean,
  empty?: boolean,
}>()

const icon = ref(IconName.dockLeft);
const title = ref('');

if (props.side === 'left') {
  icon.value = IconName.dockLeft;
  title.value = 'Left Panel'
}

if (props.side === 'right') {
  icon.value = IconName.dockRight;
  title.value = 'Right Panel'
}

if (props.side === 'bottom') {
  icon.value = IconName.dockBottom;
  title.value = 'Bottom Panel'
}

</script>

<template>
  <div class="h-full flex flex-col bg-slate-900 rounded-lg overflow-hidden">
    <div v-if="empty" class="h-full flex items-center justify-center">
      <div class="pb-10">
        <UiIcon :name="icon" class="text-slate-400"/>
        <p class="text-lg text-slate-300">{{ title }}</p>
        <p>Open a new tab in this panel</p>
      </div>
    </div>

    <template v-else>
      <div v-if="!hideTabs" class="shrink grow-0 flex items-center justify-between p-1 overflow-x-auto">
        <div class="flex gap-1">
          <UiChip v-for="tab in tabs" :key="tab.value" :active="tab.active" :label="tab.label"/>
        </div>
        <UiButton :icon="IconName.add" text/>
      </div>

      <div class="grow overflow-hidden">
        <slot/>
      </div>
    </template>
  </div>
</template>
