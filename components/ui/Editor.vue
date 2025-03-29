<script lang="ts" setup>
import {BubbleMenu, Editor, EditorContent, FloatingMenu} from '@tiptap/vue-3'
import {StarterKit} from "@tiptap/starter-kit";
import CharacterCount from '@tiptap/extension-character-count'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import {IconName} from "~/data/iconName.enum";

// TODO: Add ability to add images
// TODO: Get print scene working
// TODO: Make buttons in the 3 toolbars editable
// TODO: Get Tiptap Document, History, and Snapshot working
// TODO: Emit word count

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
      CharacterCount,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Underline,
    ]
  })
})

onUnmounted(() => {
  editor.value.destroy()
})

const charCount = computed(() => {
  return editor.value && editor.value.storage.characterCount.characters();
})

const wordCount = computed(() => {
  return editor.value && editor.value.storage.characterCount.words();
})

const canUndo = computed(() => {
  return editor.value && editor.value.can().undo();
})

const canRedo = computed(() => {
  return editor.value && editor.value.can().redo();
})

function bold() {
  editor.value.chain().focus().toggleBold().run()
}

function italic() {
  editor.value.chain().focus().toggleItalic().run()
}

function underline() {
  editor.value.chain().focus().toggleUnderline().run()
}

function strikethrough() {
  editor.value.chain().focus().toggleStrike().run()
}

function tint() {
  // TODO Get tint working
  // https://tiptap.dev/docs/editor/extensions/functionality/color
}

function highlight() {
  // TODO Get highlight working
  // https://tiptap.dev/docs/editor/extensions/marks/highlight
}

function h2() {
  editor.value.chain().focus().toggleHeading({level: 2}).run()
}

function h3() {
  editor.value.chain().focus().toggleHeading({level: 2}).run()
}

function horizontalRule() {
  editor.value.chain().focus().setHorizontalRule().run()
}

function alignLeft() {
  editor.value.chain().focus().setTextAlign('left').run()
}

function alignCenter() {
  editor.value.chain().focus().setTextAlign('center').run()
}

function alignRight() {
  editor.value.chain().focus().setTextAlign('right').run()
}

function alignJustify() {
  editor.value.chain().focus().setTextAlign('justify').run()
}

function undo() {
  editor.value.chain().focus().undo().run()
}

function redo() {
  editor.value.chain().focus().redo().run()
}
</script>

<template>
  <div class="h-full flex flex-col">
    <!-- Toolbar -->
    <Toolbar pt:root:class="border-0 px-3">
      <template #start>
        <div class="flex gap-1">
          <UiButton :icon="IconName.alignLeft" color="secondary" text @click="alignLeft"/>
          <UiButton :icon="IconName.alignCenter" color="secondary" text @click="alignCenter"/>
          <UiButton :icon="IconName.alignRight" color="secondary" text @click="alignRight"/>
          <UiButton :icon="IconName.alignJustify" color="secondary" text @click="alignJustify"/>
        </div>
      </template>

      <template #end>
        <div class="flex gap-5">
          <div class="flex items-center gap-1">
            <p class="text-xs text-slate-500">{{ charCount }} chars / {{ wordCount }} words</p>
          </div>

          <div class="flex gap-1">
            <UiButton :disabled="!canUndo" :icon="IconName.undo" color="secondary" text @click="undo"/>
            <UiButton :disabled="!canRedo" :icon="IconName.redo" color="secondary" text @click="redo"/>
          </div>
        </div>
      </template>
    </Toolbar>

    <ScrollPanel class="grow overflow-hidden">
      <div class="max-w-4xl mx-auto py-3 px-5">
        <!-- Add Node -->
        <FloatingMenu v-if="editor" :editor="editor" :tippy-options="{ duration: 100 }">
          <div class="flex gap-1 px-1">
            <UiButton :icon="IconName.h2" color="secondary" text @click="h2"/>
            <UiButton :icon="IconName.h3" color="secondary" text @click="h3"/>
            <!--            <UiButton :icon="IconName.image" color="secondary" text @click="image"/>-->
            <UiButton :icon="IconName.horizontalRule" color="secondary" text @click="horizontalRule"/>
          </div>
        </FloatingMenu>

        <!-- Format Text-->
        <BubbleMenu v-if="editor" :editor="editor" :tippy-options="{ duration: 100 }">
          <div class="flex gap-1 p-1 bg-slate-800 rounded-lg shadow">
            <UiButton :icon="IconName.bold" color="secondary" text @click="bold"/>
            <UiButton :icon="IconName.italic" color="secondary" text @click="italic"/>
            <UiButton :icon="IconName.underline" color="secondary" text @click="underline"/>
            <UiButton :icon="IconName.strikethrough" color="secondary" text @click="strikethrough"/>
            <UiButton :icon="IconName.tint" color="secondary" text @click="tint"/>
            <UiButton :icon="IconName.highlight" color="secondary" text @click="highlight"/>
          </div>
        </BubbleMenu>

        <EditorContent :editor="editor" class="text-slate-400"/>
      </div>
    </ScrollPanel>
  </div>
</template>
