<script lang="ts" setup>
import {BubbleMenu, Editor, EditorContent, FloatingMenu} from '@tiptap/vue-3'
import {StarterKit} from "@tiptap/starter-kit";

const editor = ref();
const model = defineModel<string>();

onMounted(() => {
  editor.value = new Editor({
    content: model.value,
    editorProps: {
      attributes: {
        class: 'focus:outline-none',
      },
    },
    extensions: [
      StarterKit,
    ]
  })
})

onUnmounted(() => {
  editor.value.destroy()
})
</script>

<template>
  <Toolbar pt:root:class="border-0">
    <template #start>
      <div class="flex divide-x divide-gray-200">
        <div class="flex px-2">
          <UiButton :icon="IconName.alignLeft" text/>
          <UiButton :icon="IconName.alignCenter" text/>
          <UiButton :icon="IconName.alignRight" text/>
          <UiButton :icon="IconName.alignJustify" text/>
        </div>

        <div class="flex px-2">
          <UiButton :icon="IconName.link" text/>
          <UiButton :icon="IconName.indent" text/>
          <UiButton :icon="IconName.outdent" text/>
        </div>
      </div>
    </template>

    <template #end>
      <div class="flex divide-x divide-gray-200">
        <div class="flex px-2">
          <UiButton :icon="IconName.undo" text/>
          <UiButton :icon="IconName.redo" text/>
        </div>

        <div class="flex px-2">
          <UiButton :icon="IconName.print" text/>
        </div>
      </div>
    </template>
  </Toolbar>

  <ScrollPanel class="h-full pb-4 border-t border-gray-200">
    <div class="px-6">
      <div class="max-w-3xl my-4 mx-auto p-4 bg-white border border-gray-200 rounded-lg">
        <FloatingMenu v-if="editor" :editor="editor" :tippy-options="{ duration: 100 }">
          <div class="flex gap-1 px-1 border border-gray-200 rounded-lg">
            <UiButton :icon="IconName.h2" text/>
            <UiButton :icon="IconName.h3" text/>
            <UiButton :icon="IconName.image" text/>
            <UiButton :icon="IconName.horizontalRule" text/>
            <UiButton :icon="IconName.listUl" text/>
            <UiButton :icon="IconName.listOl" text/>
          </div>
        </FloatingMenu>

        <BubbleMenu v-if="editor" :editor="editor" :tippy-options="{ duration: 100 }">
          <div class="flex gap-1 px-1 bg-white border border-gray-200 rounded-lg divide-x divide-gray-200">
            <div class="flex px-2">
              <UiButton :icon="IconName.bold" text @click="editor.chain().focus().toggleBold().run()"/>
              <UiButton :icon="IconName.italic" text/>
              <UiButton :icon="IconName.underline" text/>
              <UiButton :icon="IconName.strikethrough" text/>
            </div>

            <div class="flex px-2">
              <UiButton :icon="IconName.tint" text/>
              <UiButton :icon="IconName.highlight" text/>
            </div>
          </div>
        </BubbleMenu>

        <EditorContent :editor="editor"/>
      </div>
    </div>
  </ScrollPanel>
</template>
