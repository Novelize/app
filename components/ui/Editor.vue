<script lang="ts" setup>
import {Editor, EditorContent} from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

const editor = ref();

onMounted(() => {
  editor.value = new Editor({
    content: '',
    extensions: [StarterKit],
  })
})

onUnmounted(() => {
  editor.value.destroy()
})
</script>

<template>
  <EditorContent :editor="editor"/>
</template>


