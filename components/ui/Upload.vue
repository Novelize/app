<script lang="ts" setup>
import FileUpload from 'primevue/fileupload';

withDefaults(defineProps<{
  auto?: boolean;
  maxFileSize?: number;
  accept?: string;
  chooseLabel?: string;
  url?: string;
}>(), {
  auto: true,
  maxFileSize: 1000000,
  accept: 'image/*',
  chooseLabel: 'Browse',
})

defineEmits<{
  (e: 'upload', file: File | File[]): void
}>()

function onUpload() {
  // TODO: do something
}
</script>

<template>
  <FileUpload
    :accept
    :auto
    :chooseLabel
    :maxFileSize
    :url
    mode="basic"
    @upload="onUpload"
  />

</template>
