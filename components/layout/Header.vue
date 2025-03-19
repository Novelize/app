<script lang="ts" setup>
import Select from 'primevue/select';
import Avatar from 'primevue/avatar';

const novels = [
  {value: 1, label: 'Psycho Shifters'},
  {value: 2, label: 'Psycho Fae'},
  {value: 3, label: 'Psycho Beasts'}
]

const currentNovel = ref(novels[0]);
</script>

<template>
  <header class="flex items-center justify-between">
    <div class="flex items-center h-full">
      <p class="h-full content-center px-2 bg-orange-500 text-lg text-white">Novelize</p>

      <Select v-model="currentNovel" :options="novels" class="w-48 border-0" optionLabel="label"/>

      <div class="flex items-center gap-2 pl-4 border-l-1 border-gray-200">
        <UiButton label="Goals" text/>
        <UiButton label="Manage" text/>
        <UiButton label="Export" text/>
      </div>

      <p class="ml-6 pt-0.5 text-xs text-gray-400">last saved 12/25/2024 4:20 pm</p>
    </div>

    <div class="flex items-center gap-2 px-2">
      <Avatar label="JE" size="small"/>
    </div>
  </header>
</template>
