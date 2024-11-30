<script lang="ts" setup>
import AuthLayout from '~/layouts/AuthLayout.vue'

defineOptions({
  layout: AuthLayout,
})
defineProps<{
  errors?: Record<string, string[]>
}>()
</script>
<template>
  <AppHead title="Login" description="Login to your account" />
  <div class="w-full max-w-sm">
    <LoginForm :errors="errors" />
    <Link href="/register" class="group font-medium text-stone-500 text-sm text-center block mt-8">
      Don't have an account?
      <span class="text-stone-500 group-hover:text-rose-400 transition-colors">Sign Up</span>
    </Link>
  </div>
</template>
