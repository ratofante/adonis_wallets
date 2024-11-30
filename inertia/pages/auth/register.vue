<script setup lang="ts">
import AuthLayout from '~/layouts/AuthLayout.vue'

defineOptions({
  layout: AuthLayout,
})
defineProps<{
  errors?: Record<string, string[]>
}>()
</script>

<template>
  <AppHead title="Sign up" description="Sign up to your account" />
  <div class="w-full max-w-sm">
    <RegisterForm :errors="errors" />
    <Link href="/login" class="group font-medium text-stone-500 text-sm text-center block mt-8">
      Already have an account?
      <span class="text-stone-500 group-hover:text-rose-400 transition-colors">Log in</span>
    </Link>
  </div>
</template>
