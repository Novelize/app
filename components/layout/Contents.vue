<script lang="ts" setup>
const items = [
  {label: "Prologue", order: null, children: [{label: "Scene 1"}]},
  {
    label: "Chapter 1",
    order: 1,
    children: [
      {label: "Scene 1"},
      {label: "Scene 2"}
    ]
  },
  {
    label: "Chapter 2",
    order: 2,
    children: [
      {label: "Scene 1"},
      {label: "This is a really long title for scene 2"},
      {label: "Scene 3"},
      {label: "Scene 4"}
    ]
  },
  {label: "Chapter 3", order: 3, children: [{label: "Scene 1"}]},
  {label: "Chapter With a Really Long Title", order: 4, children: [{label: "Scene 1"}]},
  {
    label: "Chapter 5",
    order: 5,
    children: [
      {label: "Scene 1"},
      {label: "Scene 2"}
    ]
  },
  {label: "Chapter 6", order: 6, children: [{label: "Scene 1"}]},
  {
    label: "Chapter 7",
    order: 7,
    children: [
      {label: "Scene 1"},
      {label: "Scene 2"},
      {label: "Scene 3"}
    ]
  },
  {label: "Chapter 8", order: 8, children: [{label: "Scene 1"}]},
  {label: "Chapter 9", order: 9, children: [{label: "Scene 1"}]},
  {label: "Chapter 10", order: 20, children: [{label: "Scene 1"}]},
]
</script>

<template>
  <nav class="absolute inset-0">
    <ScrollPanel class="absolute inset-0">
      <ul class="space-y-6 pt-6 pb-8 pl-8 pr-4">
        <li v-for="(item, itemIndex) in items" :key="item.label + itemIndex">
          <div class="relative text-sm ">
            <p v-if="item.order" class="absolute top-0 -left-6 w-4 text-right text-gray-400">{{ item.order }}</p>
            <p class="font-semibold text-gray-500">{{ item.label }}</p>
          </div>

          <ul v-if="item.children" class="pl-1">
            <li
              v-for="(child, childIndex) in item.children"
              :key="child.label + childIndex + 'child'"
              class="flex items-center gap-2 py-1 border-l-2 border-gray-200 text-xs text-gray-400  hover:text-orange-600"
            >
              <span class="text-gray-300">&mdash;</span>
              <span>{{ child.label }}</span>
            </li>
          </ul>
        </li>
      </ul>
    </ScrollPanel>
  </nav>
</template>
