<script setup lang="ts">
import { FormField } from '~/components/ui/form'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { router } from '@inertiajs/vue3'
import { watch } from 'vue'

const props = defineProps<{
  errors?: Record<string, string[]>
}>()

const formSchema = toTypedSchema(
  z
    .object({
      username: z.string().min(3, 'Username must be at least 3 characters long').max(25),
      email: z.string().email(),
      password: z.string().min(8, 'Password must be at least 8 characters long'),
      confirmPassword: z.string().min(8, 'Password must be at least 8 characters long'),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
    })
)

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
  console.log('Sign Up form submitted')
  router.post('/register', values, {
    onSuccess: () => {
      console.log('Login successful')
    },
    onError: (errors) => {
      console.log('Login failed', errors)
    },
  })
})

watch(
  () => props.errors,
  (newErrors) => {
    if (newErrors) {
      Object.entries(newErrors).forEach(([field, messages]) => {
        form.setFieldError(field as 'username' | 'email' | 'password', messages)
      })
    }
  },
  { immediate: true }
)
</script>

<template>
  <div class="w-full">
    <form @submit="onSubmit" id="signup-form" class="w-full space-y-4">
      <FormField v-slot="{ componentField }" name="username">
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input type="text" placeholder="How should we call you..." v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="email">
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input type="email" placeholder="your@email.com" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="password">
        <FormItem>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <Input type="password" placeholder="Your secret password..." v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="confirmPassword">
        <FormItem>
          <FormLabel>Confirm password</FormLabel>
          <FormControl>
            <Input type="password" placeholder="Confirm your password" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
    </form>
    <Button
      type="submit"
      form="signup-form"
      size="lg"
      variant="default"
      class="h-12 mt-6 w-full rounded-full font-medium min-w-40"
      >Sign Up</Button
    >
  </div>
</template>
