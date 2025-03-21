<script lang="ts" setup>
import Avatar from 'primevue/avatar';
</script>

<template>
  <header class="flex items-center justify-between">
    <div class="grow flex flex-col h-full">
      <div class="grow flex items-center">
        <div class="flex items-center gap-2 pl-2">
          <UiButton label="Goals" text/>
          <UiButton label="Manage" text/>
          <UiButton label="Export" text/>
        </div>

        <p class="ml-6 pt-0.5 text-xs text-gray-400">last saved 12/25/2024 4:20 pm</p>

        <div class="ml-auto pr-2">
          <Avatar label="JE" size="small"/>
        </div>
      </div>

      <!-- Progress -->
      <div class="w-full h-1 bg-orange-200">
        <div class="h-full w-1/3 bg-orange-600"/>
      </div>
    </div>
  </header>
</template>
