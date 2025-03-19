<template>
  <aside class="bg-gray-100">
    <Tabs lazy scrollable value="1">
      <TabList>
        <Tab value="1">
          <UiButton icon="details" text/>
        </Tab>
        <Tab value="2">
          <UiButton icon="character" text/>
        </Tab>
        <Tab value="3">
          <UiButton icon="location" text/>
        </Tab>
        <Tab value="4">
          <UiButton icon="item" text/>
        </Tab>
        <Tab value="5">
          <UiButton icon="event" text/>
        </Tab>
        <Tab value="6">
          <UiButton icon="group" text/>
        </Tab>
        <Tab value="7">
          <UiButton icon="note" text/>
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
