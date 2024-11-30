<script lang="ts" setup>
import UserDto from '~/dtos/user'
// Components
import Navigation from '~/components/Navigation.vue'
import ProfileMenu from '~/components/ProfileMenu.vue'
import ToastManager from '~/components/ToastManager.vue'
import MobileNavigation from '~/components/MobileNavigation.vue'

defineProps<{
  messages: Record<string, Record<string, string>>
  user: UserDto
}>()
</script>

<template>
  <header class="fixed top-0 left-0 right-0 p-4 h-16">
    <div class="flex justify-between items-center">
      <!-- Logo-->
      <div class="w-8 h-8">
        <Logo class="w-full h-full" />
        <span class="sr-only">Wallets App Logo</span>
      </div>
      <div class="hidden md:flex gap-8">
        <Navigation />
        <ProfileMenu :user="user" />
      </div>
      <div class="md:hidden">
        <MobileNavigation :user="user" />
      </div>
    </div>
  </header>
  <main class="min-h-screen bg-stone-200 dark:bg-stone-900 w-full pt-32 pb-0 px-4 md:px-8 lg:px-16">
    <slot />
  </main>
  <ToastManager :messages="messages" />
</template>
