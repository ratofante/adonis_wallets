<script setup lang="ts">
import { usePage } from '@inertiajs/vue3'

//Data
import { routes } from '~/consts'

const page = usePage()
</script>
<template>
  <nav>
    <ul class="flex">
      <li v-for="(route, i) in routes">
        <Button
          as-child
          variant="link"
          :key="i"
          :class="{
            'text-stone-900 underline hover:text-stone-900': page.url === route.path,
          }"
        >
          <Link :href="route.path">{{ route.name }}</Link>
        </Button>
      </li>
    </ul>
  </nav>
</template>
