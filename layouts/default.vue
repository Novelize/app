<script lang="ts" setup>
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import ScrollPanel from "primevue/scrollpanel";
</script>

<template>
  <LayoutHeader class="fixed top-0 inset-0 z-50 h-10"/>

  <main class="fixed top-10 bottom-0 inset-0 bg-gray-50">
    <Splitter class="h-full" stateKey="wrapperSplitter">
      <SplitterPanel :minSize="50" :size="80">
        <div class="relative h-full">
          <LayoutContents class="absolute inset-y-0 left-0 w-48"/>

          <ScrollPanel class="absolute inset-y-0 right-0 left-48">
            <slot/>
          </ScrollPanel>
        </div>
      </SplitterPanel>

      <SplitterPanel :minSize="20" :size="20" class="h-full">
        <LayoutPanel class="h-full"/>
      </SplitterPanel>
    </Splitter>

  </main>
</template>
