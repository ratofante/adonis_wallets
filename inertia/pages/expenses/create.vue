<script setup lang="ts">
// Components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from '~/components/ui/number-field'
import { Button } from '~/components/ui/button'
import { FormField } from '~/components/ui/form'
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover'
import {
  CalendarDate,
  DateFormatter,
  getLocalTimeZone,
  parseDate,
  today,
} from '@internationalized/date'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'

// Libs
import { useForm, configure } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { cn } from '~/lib/utils'
import { router } from '@inertiajs/vue3'
import { watch, h, ref, computed } from 'vue'
import { Calendar as CalendarIcon } from 'lucide-vue-next'
import { toDate } from 'radix-vue/date'

const props = defineProps<{
  errors?: Record<string, string[]>
}>()

configure({
  validateOnBlur: false,
  validateOnChange: false,
  validateOnInput: false,
  validateOnModelUpdate: false,
})

const df = new DateFormatter('es-ES', {
  dateStyle: 'long',
})

const formSchema = toTypedSchema(
  z.object({
    name: z.string().min(3, 'Name must be at least 3 characters long').max(50),
    description: z.string().max(100, 'Description must be at most 100 characters long'),
    amount: z
      .number()
      .min(0.01, 'Amount must be at least 0.01')
      .max(99999999, 'Amount must be at most 99,999,999.99')
      .optional(),

    date: z.string().refine((v) => v, { message: 'A date is required' }),
  })
)

const placeholder = ref()

const { handleSubmit, setFieldValue, setFieldError, values } = useForm({
  validationSchema: formSchema,
  initialValues: {
    date: today(getLocalTimeZone()).toString(),
  },
})

const value = computed({
  get: () => (values.date ? parseDate(values.date) : undefined),
  set: (val) => val,
})

// const onSubmit = handleSubmit((values) => {
//   router.post('/expenses/store', values, {
//     onSuccess: () => {
//       console.log('Expense created successfully')
//     },
//     onError: (errors) => {
//       console.log('Expense creation failed', errors)
//     },
//   })
// })
const onSubmit = handleSubmit((values) => {
  console.log(values)
})

watch(
  () => props.errors,
  (newErrors) => {
    if (newErrors) {
      Object.entries(newErrors).forEach(([field, messages]) => {
        setFieldError(field as 'name' | 'amount' | 'description', messages)
      })
    }
  }
)
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Add Expense</CardTitle>
      <CardDescription>Add a new expense</CardDescription>
    </CardHeader>
    <CardContent>
      <form @submit="onSubmit" id="expense-create-form" class="space-y-4">
        <FormField name="date">
          <FormItem class="flex flex-col">
            <Popover>
              <PopoverTrigger as-child>
                <FormControl>
                  <Button
                    variant="outline"
                    :class="cn('ps-3 text-start font-normal', !value && 'text-muted-foreground')"
                  >
                    <span>{{ value ? df.format(toDate(value)) : 'Pick a date' }}</span>
                    <CalendarIcon class="ms-auto h-4 w-4 opacity-50" />
                  </Button>
                  <input hidden />
                </FormControl>
              </PopoverTrigger>
              <PopoverContent class="w-auto p-0">
                <Calendar
                  v-model:placeholder="placeholder"
                  v-bind="value"
                  calendar-label="Date"
                  initial-focus
                  :min-value="new CalendarDate(1900, 1, 1)"
                  :max-value="today(getLocalTimeZone())"
                  @update:model-value="
                    (v) => {
                      if (v) {
                        setFieldValue('date', v.toString())
                      } else {
                        setFieldValue('date', undefined)
                      }
                    }
                  "
                />
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ value }" name="amount">
          <FormItem>
            <FormLabel>Amount</FormLabel>
            <NumberField
              class="gap-2"
              :min="0"
              :format-options="{
                style: 'currency',
                currency: 'ARS',
                currencyDisplay: 'code',
                currencySign: 'accounting',
              }"
              :model-value="value"
              @update:model-value="
                (v) => {
                  if (v) {
                    setFieldValue('amount', v)
                  } else {
                    setFieldValue('amount', undefined)
                  }
                }
              "
            >
              <NumberFieldContent>
                <NumberFieldDecrement />
                <FormControl>
                  <NumberFieldInput />
                </FormControl>
                <NumberFieldIncrement />
              </NumberFieldContent>
            </NumberField>
            <FormDescription> Enter value between 10 and 5000. </FormDescription>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="name">
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input type="text" placeholder="Expense name" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="description">
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Some notes you might want to add..."
                class="resize-none"
                v-bind="componentField"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
      </form>
    </CardContent>
    <CardFooter class="gap-2">
      <Button variant="outline" size="lg" class="flex-1">Back</Button>
      <Button size="lg" variant="ghost" form="expense-create-form" class="flex-1">Save</Button>
    </CardFooter>
  </Card>
</template>
