<script lang="ts" setup>
import type { LabelProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { Label } from '~/components/ui/label'
import { cn } from '~/lib/utils'
import { useFormField } from './useFormField'

const props = defineProps<LabelProps & { class?: HTMLAttributes['class'] }>()

const { error, formItemId } = useFormField()
</script>

<template>
  <Label
    class="dark:text-stone-300"
    :class="cn(error && 'text-red-500 dark:text-rose-400', props.class)"
    :for="formItemId"
  >
    <slot />
  </Label>
</template>
