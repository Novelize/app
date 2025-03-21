<script lang="ts" setup>
import {Form, type FormSubmitEvent} from '@primevue/forms';
import {zodResolver} from '@primevue/forms/resolvers/zod';
import type {ZodObject} from 'zod';

const props = defineProps<{
  initialValues: Record<string, any>,
  rules: ZodObject<Record<string, any>>,
}>();

const submitButton = ref()

const resolver = zodResolver(props.rules);

function submit() {
  submitButton.value.click()
}

const onFormSubmit = (form: FormSubmitEvent) => {
  if (form.valid) {
    // TODO: Do something
  }
};

defineExpose({submit})
</script>

<template>
  <Form :initialValues :resolver @submit="onFormSubmit">
    <slot/>
    <Button ref="submitButton" class="hidden" label="Submit" type="submit" @click="onFormSubmit"/>
  </Form>
</template>
