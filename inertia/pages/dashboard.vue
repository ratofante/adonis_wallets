<script setup lang="ts">
import ExpenseCardRecord from '~/components/ExpenseCardRecord.vue'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { Separator } from '~/components/ui/separator'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle
        >$15,290.00 <span class="text-lg font-medium text-stone-500">Total Balance</span></CardTitle
      >
      <!-- <Separator /> -->
      <CardDescription class="flex flex-row">
        <div class="flex gap-2">
          <span class="text-stone-800 font-medium">92</span> expenses<br />
          <Separator orientation="vertical" />
          <span class="text-stone-800 font-medium">3</span> wallets
        </div>
      </CardDescription>
      <Separator />
    </CardHeader>
    <CardContent>
      <!--TODO: Make ExpenseCardRecord Component -->
      <ExpenseCardRecord />
    </CardContent>

    <CardFooter class="gap-2 justify-between">
      <Button variant="outline" as-child class="flex-1">
        <Link href="/expenses/show">View Expenses</Link>
      </Button>
      <Button as-child class="flex-1">
        <Link href="/expenses/create">Add Expense</Link>
      </Button>
    </CardFooter>
  </Card>
</template>
