<script lang="ts" setup>
import { UtensilsCrossed } from 'lucide-vue-next'
</script>

<template>
  <div class="space-y-2">
    <div class="flex gap-2 items-end">
      <div
        class="shrink-0 flex flex-col w-9 h-9 bg-stone-200 rounded-md items-center justify-center p-2"
      >
        <span class="font-medium text-base text-stone-500 leading-3">28</span>
        <span class="text-[11px] leading-3 text-stone-500">Sept</span>
      </div>
      <!-- <div class="shrink-0 bg-stone-200 rounded-md h-9 w-9 flex justify-center items-center p-2">
          <UtensilsCrossed class="w-full text-stone-700" />
        </div> -->

      <div class="flex-1 text-xl">$9,899.00</div>
      <div class="flex-auto overflow-x-hidden text-ellipsis leading-6 text-nowrap text-xs">
        Chicken for dinner because I got home late
      </div>
    </div>
    <div class="flex gap-2 items-end">
      <div
        class="shrink-0 flex flex-col w-9 h-9 bg-stone-200 rounded-md items-center justify-center p-2"
      >
        <span class="font-medium text-base text-stone-500 leading-3">28</span>
        <span class="text-[11px] leading-3 text-stone-500">Sept</span>
      </div>
      <!-- <div class="shrink-0 bg-stone-200 rounded-md h-9 w-9 flex justify-center items-center p-2">
          <UtensilsCrossed class="w-full text-stone-700" />
        </div> -->

      <div class="flex-1 text-xl">$12,300.00</div>
      <div class="flex-auto overflow-x-hidden text-ellipsis leading-6 text-nowrap text-xs">
        Dentist visit
      </div>
    </div>
  </div>
</template>
