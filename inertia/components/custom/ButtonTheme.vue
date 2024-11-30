<script setup lang="ts">
import { Switch } from '~/components/ui/switch'
import { MoonStar, Sun } from 'lucide-vue-next'
import { ref, onMounted } from 'vue'

defineProps({
  variant: {
    type: String,
    default: 'button',
  },
})

const currentTheme = ref('light')
const toggleTheme = () => {
  if (currentTheme.value === 'dark') {
    localStorage.theme = 'light'
    document.documentElement.classList.remove('dark')
    currentTheme.value = 'light'
  } else {
    localStorage.theme = 'dark'
    document.documentElement.classList.add('dark')
    currentTheme.value = 'dark'
  }
}
onMounted(() => {
  // Check user theme preference
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
    currentTheme.value = 'dark'
  } else {
    // Set default theme to light if no preference is found
    localStorage.theme = 'light'
    currentTheme.value = 'light'
  }
})
</script>
<template>
  <Button
    v-if="variant === 'button'"
    @click="toggleTheme"
    variant="outline"
    size="icon"
    class="rounded-full dark:text-white"
  >
    <Sun v-if="currentTheme === 'dark'" />
    <MoonStar v-else />
  </Button>
  <Switch v-else :checked="currentTheme === 'dark'" @update:checked="toggleTheme">
    <template #thumb>
      <div class="w-full h-full grid place-items-center">
        <Sun v-if="currentTheme === 'dark'" class="w-3 h-3 text-stone-300" />
        <MoonStar v-else class="w-3 h-3" />
      </div>
    </template>
  </Switch>
</template>
