<template>
  <aside class="pt-2">
    <Tabs lazy scrollable value="1">
      <TabList pt:tabList:class="justify-around">
        <Tab value="1">
          <UiIcon :name="IconName.details" height="h-6" width="w-6"/>
        </Tab>
        <Tab value="2">
          <UiIcon :name="IconName.character" height="h-6" width="w-6"/>
        </Tab>
        <Tab value="3">
          <UiIcon :name="IconName.location" height="h-6" width="w-6"/>
        </Tab>
        <Tab value="4">
          <UiIcon :name="IconName.item" height="h-6" width="w-6"/>
        </Tab>
        <Tab value="5">
          <UiIcon :name="IconName.event" height="h-6" width="w-6"/>
        </Tab>
        <Tab value="6">
          <UiIcon :name="IconName.group" height="h-6" width="w-6"/>
        </Tab>
        <Tab value="7">
          <UiIcon :name="IconName.note" height="h-6" width="w-6"/>
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel value="1">
          <PanelsDetails/>
        </TabPanel>
        <TabPanel value="2">
          <PanelsCharacters/>
        </TabPanel>
        <TabPanel value="3">
          <PanelsLocations/>
        </TabPanel>
        <TabPanel value="4">
          <PanelsItems/>
        </TabPanel>
        <TabPanel value="5">
          <PanelsEvents/>
        </TabPanel>
        <TabPanel value="6">
          <PanelsGroups/>
        </TabPanel>
        <TabPanel value="7">
          <PanelsNotes/>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </aside>
</template>
<script lang="ts" setup>
</script>
