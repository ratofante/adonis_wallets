<script lang="ts" setup>
defineProps({
  classes: {
    type: String,
    required: false,
  },
})
</script>
<template>
  <div class="bg-stone-100 dark:bg-stone-700 rounded-lg p-8" :class="classes">
    <slot />
  </div>
</template>
