<script lang="ts" setup>
import ToastManager from '~/components/ToastManager.vue'

defineProps<{
  messages: Record<string, Record<string, string>>
}>()
</script>
<template>
  <header class="fixed top-0 left-0 right-0 p-4">
    <div class="flex justify-between items-center">
      <!-- Logo-->
      <div class="w-8 h-8">
        <Logo class="w-full h-full" />
      </div>
      <!-- Nav & Buttons-->
      <div class="flex items-center gap-4">
        <!-- Nav -->
        <nav>
          <Button as-child variant="link" size="sm">
            <Link href="/">SignUp</Link>
          </Button>
          <Button variant="link" size="sm">
            <Link href="/login">Login</Link>
          </Button>
        </nav>
        <!-- Buttons -->
        <div>
          <ButtonTheme variant="button" />
        </div>
      </div>
    </div>
  </header>
  <main class="">
    <div
      class="min-h-screen bg-stone-200 dark:bg-stone-900 w-full grid place-items-center p-4 md:p-16"
    >
      <slot />
    </div>
  </main>
  <ToastManager :messages="messages" />
</template>
