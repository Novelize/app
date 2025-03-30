<script lang="ts" setup>
import {IconName} from "~/data/iconName.enum";
import ContextMenu from 'primevue/contextmenu';
import type {MenuItem} from "primevue/menuitem";
import PanelsContents from "~/components/panels/Contents.vue";
import PanelsDetails from "~/components/panels/Details.vue";
import PanelsCharacters from "~/components/panels/Characters.vue";
import PanelsLocations from "~/components/panels/Locations.vue";
import PanelsItems from "~/components/panels/Items.vue";
import PanelsEvents from "~/components/panels/Events.vue";
import PanelsNotes from "~/components/panels/Notes.vue";
import PanelsGroups from "~/components/panels/Groups.vue";

export interface PanelTab {
  id: number;
  label: string;
  panel: any;
  active?: boolean;
}

defineProps<{
  location: 'left' | 'bottom' | 'right',
  empty?: boolean,
}>()

const tabs = ref<PanelTab[]>([]);
const currentPanel = ref(undefined);
const contextMenu = ref();
const contextTabId = ref<number>(1);

const contentsTab: PanelTab = {id: 1, label: 'Contents', panel: markRaw(PanelsContents)}
const detailsTab: PanelTab = {id: 2, label: 'Details', panel: markRaw(PanelsDetails)}

const charactersTab: PanelTab = {id: 3, label: 'Characters', panel: markRaw(PanelsCharacters)}
const locationsTab: PanelTab = {id: 4, label: 'Locations', panel: markRaw(PanelsLocations)}
const itemsTab: PanelTab = {id: 5, label: 'Items', panel: markRaw(PanelsItems)}
const eventsTab: PanelTab = {id: 6, label: 'Events', panel: markRaw(PanelsEvents)}
const notesTab: PanelTab = {id: 7, label: 'Notes', panel: markRaw(PanelsNotes)}
const groupsTab: PanelTab = {id: 8, label: 'Groups', panel: markRaw(PanelsGroups)}

const contentsVisible = computed(() => tabs.value.findIndex(tab => tab.id === contentsTab.id) < 0)
const detailsVisible = computed(() => tabs.value.findIndex(tab => tab.id === detailsTab.id) < 0)
const charactersVisible = computed(() => tabs.value.findIndex(tab => tab.id === charactersTab.id) < 0)
const locationsVisible = computed(() => tabs.value.findIndex(tab => tab.id === locationsTab.id) < 0)
const itemsVisible = computed(() => tabs.value.findIndex(tab => tab.id === itemsTab.id) < 0)
const eventsVisible = computed(() => tabs.value.findIndex(tab => tab.id === eventsTab.id) < 0)
const notesVisible = computed(() => tabs.value.findIndex(tab => tab.id === notesTab.id) < 0)
const groupsVisible = computed(() => tabs.value.findIndex(tab => tab.id === groupsTab.id) < 0)

const separatorVisible = computed(() => {
  const hasTopItems = contentsVisible.value || detailsVisible.value;
  const hasBottomItems = charactersVisible.value || locationsVisible.value || itemsVisible.value || eventsVisible.value || notesVisible.value || groupsVisible.value;
  return hasTopItems && hasBottomItems;
})

const tabMenu = computed<MenuItem[]>(() => [
  {label: 'Contents', visible: contentsVisible.value, command: () => addTab(contentsTab)},
  {label: 'Details', visible: detailsVisible.value, command: () => addTab(detailsTab)},
  {separator: true, visible: separatorVisible.value},
  {label: 'Characters', visible: charactersVisible.value, command: () => addTab(charactersTab)},
  {label: 'Locations', visible: locationsVisible.value, command: () => addTab(locationsTab)},
  {label: 'Items', visible: itemsVisible.value, command: () => addTab(itemsTab)},
  {label: 'Events', visible: eventsVisible.value, command: () => addTab(eventsTab)},
  {label: 'Notes', visible: notesVisible.value, command: () => addTab(notesTab)},
  {label: 'Groups', visible: groupsVisible.value, command: () => addTab(groupsTab)},
])

// TODO: Add close others, close all, close to right to this context menu
const contextItems = ref([
  {label: 'Close', command: () => removeTab(contextTabId.value)},
]);

const onRightClick = (event: PointerEvent, tabId: number) => {
  contextMenu.value.show(event);
  contextTabId.value = tabId;
};

function addTab(tabToAdd: PanelTab) {
  changeActiveTab(tabToAdd)
  tabs.value.push(tabToAdd)
  // TODO: Save tabs to db
}

function removeTab(tabIdToRemove: number) {
  tabs.value = tabs.value.filter((tab) => tab.id !== tabIdToRemove)
  // TODO: Save tabs to db

  if (tabs.value.length) {
    changeActiveTab(tabs.value[0])
  } else {
    currentPanel.value = undefined;
  }
}

function changeActiveTab(tab: PanelTab) {
  tabs.value.forEach(tab => tab.active = false)
  tab.active = true;
  currentPanel.value = tab.panel;
  // TODO: Save current panel to db
}
</script>

<template>
  <div class="h-full flex flex-col bg-slate-900 rounded-lg overflow-hidden">
    <div class="shrink grow-0 flex items-center justify-between p-1 overflow-x-auto overflow-y-hidden">
      <div class="flex gap-1">
        <UiChip
          v-for="tab in tabs"
          :id="tab.id"
          :key="tab.id"
          :active="tab.active"
          :label="tab.label"
          @click="changeActiveTab(tab)"
          @contextmenu="onRightClick($event, tab.id)"
        />
      </div>

      <UiMenu :icon="IconName.add" :items="tabMenu"/>
      <ContextMenu ref="contextMenu" :model="contextItems"/>
    </div>

    <div v-if="currentPanel" class="grow overflow-hidden">
      <KeepAlive>
        <Component :is="currentPanel"/>
      </KeepAlive>
    </div>

    <!-- Empty Messages-->
    <div v-else class="h-full flex items-center justify-center">
      <!-- Left-->
      <div v-if="location === 'left'" class="pb-10">
        <UiIcon :name="IconName.dockLeft" class="text-slate-400"/>
        <p class="text-lg text-slate-300 font-bold">Left</p>
        <p>Open a new tab in this panel</p>
      </div>

      <!-- Right-->
      <div v-else-if="location === 'right'" class="pb-10 text-right">
        <UiIcon :name="IconName.dockRight" class="text-slate-400"/>
        <p class="text-lg text-slate-300 font-bold">Right</p>
        <p>Open a new tab in this panel</p>
      </div>

      <!-- Bottom-->
      <div v-else-if="location === 'bottom'" class="pb-10 text-center">
        <UiIcon :name="IconName.dockBottom" class="text-slate-400"/>
        <p class="text-lg text-slate-300">Bottom</p>
        <p>Open a new tab in this panel</p>
      </div>
    </div>
  </div>
</template>
