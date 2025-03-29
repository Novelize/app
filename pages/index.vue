<script lang="ts" setup>
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';

useSeoMeta({title: 'Novelize'})

const panels = usePanels();
</script>

<template>
  <div class="fixed inset-0 px-2 pt-9 pb-7 dark:bg-slate-950">
    <LayoutHeader class="absolute top-0 inset-x-0 h-9 px-3"/>

    <Splitter :gutterSize="8" class="h-full border-none" stateKey="Splitter1">
      <!-- Left -->
      <SplitterPanel v-if="panels.state.showLeft" :minSize="15" :size="30">
        <LayoutLeft/>
      </SplitterPanel>

      <SplitterPanel :size="70">
        <Splitter :gutterSize="8" class="h-full border-none" stateKey="Splitter2">
          <SplitterPanel :size="70">
            <Splitter :gutterSize="8" class="h-full border-none" layout="vertical" state-key="Splitter3">
              <!-- Main -->
              <SplitterPanel :size="75">
                <LayoutMain/>
              </SplitterPanel>

              <!-- Bottom -->
              <SplitterPanel v-if="panels.state.showBottom" :minSize="10" :size="30">
                <LayoutBottom/>
              </SplitterPanel>
            </Splitter>
          </SplitterPanel>

          <!-- Right -->
          <SplitterPanel v-if="panels.state.showRight" :minSize="15" :size="30">
            <LayoutRight/>
          </SplitterPanel>
        </Splitter>
      </SplitterPanel>
    </Splitter>

    <LayoutFooter class="absolute bottom-0 inset-x-0 h-7 px-3"/>
  </div>
</template>
