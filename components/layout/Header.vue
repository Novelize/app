<script lang="ts" setup>
import {IconName} from "~/data/iconName.enum";

const panels = usePanels();

const showNotebookCreate = ref(false);
const showNotebookView = ref(false);

const showNovelCreate = ref(false);
const showNovelExport = ref(false);
const showNovelGoals = ref(false);
const showNovelManage = ref(false);

const showSettingsAccount = ref(false);
const showSettingsBilling = ref(false);
const showSettingsGeneral = ref(false);

const items = ref([
  {label: 'Manage Novel', icon: IconName.novel, command: () => showNovelManage.value = true},
  {label: 'Novel Goals', icon: IconName.goals, command: () => showNovelGoals.value = true},
  {label: 'Export Novel', icon: IconName.download, command: () => showNovelExport.value = true},
  {divider: true},
  {label: 'Create Novel', icon: IconName.add, command: () => showNovelCreate.value = true},
  {label: 'Create Notebook', icon: IconName.add, command: () => showNotebookCreate.value = true},
  {divider: true},
  {label: 'View Novels', icon: IconName.novel, command: () => showNotebookView.value = true},
  {label: 'View Notebooks', icon: IconName.notebook, command: () => showNotebookView.value = true},
  {divider: true},
  {label: 'Settings', icon: IconName.settings, command: () => showSettingsGeneral.value = true},
  {label: 'Account', icon: IconName.account, command: () => showSettingsAccount.value = true},
  {label: 'Billing', icon: IconName.billing, command: () => showSettingsBilling.value = true},
  {divider: true},
  {label: 'Logout', icon: IconName.logout, command: logout},
]);

function logout() {
  // TODO Get Logout working
}
</script>

<template>
  <header class="flex items-center justify-between">
    <div class="flex items-center gap-1">
      <UiButton
        :class="{'text-slate-200': panels.state.showLeft}"
        :icon="IconName.dockLeft"
        text
        @click="panels.toggleLeftPanel()"
      />
      <UiButton
        :class="{'text-slate-200': panels.state.showBottom}"
        :icon="IconName.dockBottom"
        color="secondary"
        text
        @click="panels.toggleBottomPanel()"
      />
      <UiButton
        :class="{'text-slate-200': panels.state.showRight}"
        :icon="IconName.dockRight"
        color="secondary"
        text
        @click="panels.toggleRightPanel()"
      />
    </div>

    <div class="absolute inset-y-0 left-1/2 w-32 -ml-16 flex items-center justify-center rounded-b text-orange-500">
      <p class="font-bold text-sm uppercase tracking-wide">Novelize</p>
    </div>

    <div>
      <div class="flex items-center gap-2">
        <UiButton
          :icon="IconName.notifications" color="secondary" height="h-5"
          text width="w-5"
        />

        <UiMenu ref="menu" :icon="IconName.menu" :items="items"/>
      </div>
    </div>

    <ModalNotebookCreate v-model:visible="showNotebookCreate"/>
    <ModalNotebookView v-model:visible="showNotebookView"/>

    <ModalNovelCreate v-model:visible="showNovelCreate"/>
    <ModalNovelExport v-model:visible="showNovelExport"/>
    <ModalNovelGoals v-model:visible="showNovelGoals"/>
    <ModalNovelManage v-model:visible="showNovelManage"/>

    <ModalSettingsAccount v-model:visible="showSettingsAccount"/>
    <ModalSettingsBilling v-model:visible="showSettingsBilling"/>
    <ModalSettingsGeneral v-model:visible="showSettingsGeneral"/>
  </header>
</template>
