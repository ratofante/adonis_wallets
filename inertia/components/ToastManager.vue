<script setup lang="ts">
import { Toaster } from '~/components/ui/sonner'
import { toast } from 'vue-sonner'
import { onMounted, watchEffect } from 'vue'

type Toast = string | Record<string, string>

const props = defineProps<{
  messages: Record<string, Toast>
}>()

console.log(props.messages)

onMounted(() => {
  runToasts({
    exceptions: props.messages.errorsBag,
    success: props.messages.success,
  })
})

watchEffect(() => {
  runToasts({
    exceptions: props.messages.errorsBag,
    success: props.messages.success,
  })
})

function runToasts(toasts: { exceptions: Toast; success: Toast }) {
  const exceptions = getToastMessage(toasts.exceptions)
  const success = getToastMessage(toasts.success)

  if (exceptions.length) {
    toast.error('An error ocurred', {
      description: toasts.exceptions,
    })
  }

  if (success.length) {
    toast.success(toasts.success)
  }
}

function getToastMessage(toast: Toast) {
  if (typeof toast === 'string') return toast
  if (typeof toast === 'object') return Object.values(toast).join(', ')
  return ''
}
</script>

<template>
  <Toaster class="pointer-events-auto" rich-colors />
</template>
