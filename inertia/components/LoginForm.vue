<script setup lang="ts">
import { FormField } from '~/components/ui/form'
import { useForm, configure } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { router } from '@inertiajs/vue3'
import { watch } from 'vue'

const props = defineProps<{
  errors?: Record<string, string[]>
}>()

configure({
  validateOnBlur: false,
  validateOnChange: false,
  validateOnInput: false,
  validateOnModelUpdate: false,
})
const formSchema = toTypedSchema(
  z.object({
    email: z.string().email(),
    password: z.string(),
  })
)
const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
  router.post('/login', values, {
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
        form.setFieldError(field as 'email' | 'password', messages)
      })
    }
  }
)
</script>

<template>
  <div class="w-full">
    <form @submit="onSubmit" id="login-form" class="w-full space-y-4">
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
            <Input type="password" placeholder="*********" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
    </form>
    <Button
      type="submit"
      form="login-form"
      size="lg"
      variant="default"
      class="h-12 mt-6 w-full rounded-full font-medium min-w-40"
      >Sign In</Button
    >
  </div>
</template>
