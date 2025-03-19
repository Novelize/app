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
  <div class="py-2 bg-white rounded border border-gray-200">
    <!--    <Toolbar pt:root:class="border-0 px-2">-->
    <!--      <template #start>-->
    <!--        <div class="flex divide-x divide-gray-200">-->
    <!--          <div class="flex px-2">-->
    <!--            <UiButton icon="bold" text @click="editor.chain().focus().toggleBold().run()"/>-->
    <!--            <UiButton icon="italic" text/>-->
    <!--            <UiButton icon="underline" text/>-->
    <!--            <UiButton icon="strikethrough" text/>-->
    <!--          </div>-->

    <!--          <div class="flex px-2">-->
    <!--            <UiButton icon="align-left" text/>-->
    <!--            <UiButton icon="align-center" text/>-->
    <!--            <UiButton icon="align-right" text/>-->
    <!--            <UiButton icon="align-justify" text/>-->
    <!--          </div>-->

    <!--          <div class="flex px-2">-->
    <!--            <UiButton icon="link" text/>-->
    <!--            <UiButton icon="indent" text/>-->
    <!--            <UiButton icon="outdent" text/>-->
    <!--          </div>-->

    <!--          <div class="flex px-2">-->
    <!--            <UiButton icon="tint" text/>-->
    <!--            <UiButton icon="highlighter" text/>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </template>-->

    <!--      <template #end>-->
    <!--        <div class="flex divide-x divide-gray-200">-->
    <!--          <div class="flex px-2">-->
    <!--            <UiButton icon="undo" text/>-->
    <!--            <UiButton icon="redo" text/>-->
    <!--          </div>-->

    <!--          <div class="flex px-2">-->
    <!--            <UiButton icon="print" text/>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </template>-->
    <!--    </Toolbar>-->

    <FloatingMenu v-if="editor" :editor="editor" :tippy-options="{ duration: 100 }">
      <div class="flex gap-1 px-1 border border-gray-200 rounded-lg">
        <UiButton icon="h2" text/>
        <UiButton icon="h3" text/>
        <UiButton icon="image" text/>
        <UiButton icon="horizontalRule" text/>
        <UiButton icon="listUl" text/>
        <UiButton icon="listOl" text/>
      </div>
    </FloatingMenu>

    <div class="pt-2 px-6">
      <EditorContent :editor="editor"/>
    </div>
  </div>
</template>
