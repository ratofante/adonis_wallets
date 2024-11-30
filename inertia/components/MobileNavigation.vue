<script setup lang="ts">
import UserDto from '~/dtos/user'
// Components
import { Button } from '~/components/ui/button'
import { Separator } from '~/components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from '~/components/ui/sheet'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import ButtonTheme from '~/components/custom/ButtonTheme.vue'
// Libs
import { usePage } from '@inertiajs/vue3'
// Icons
import { Menu, Settings, UserRoundCog } from 'lucide-vue-next'
// Data
import { routes } from '~/consts'

defineProps<{
  user: UserDto
}>()

const page = usePage()
console.log(page.props.user)
</script>

<template>
  <Sheet>
    <SheetTrigger>
      <Button variant="outline" size="icon" class="rounded-full dark:text-white">
        <Menu />
      </Button>
    </SheetTrigger>
    <SheetContent class="h-full flex flex-col p-4">
      <SheetHeader class="pt-8">
        <SheetTitle class="sr-only">Mobile Menu</SheetTitle>
        <SheetDescription class="sr-only">
          Access to the different sections of the application, theme toggle, profile, settings and
          logout options
        </SheetDescription>
      </SheetHeader>
      <div class="my-4">
        <div class="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <div class="text-lg font-semibold dark:text-stone-200">
              {{ user.username }}
            </div>
            <div class="text-xs text-stone-400">
              {{ user.email }}
            </div>
          </div>
        </div>
      </div>
      <Separator />
      <nav>
        <ul class="space-y-2">
          <li v-for="(route, i) in routes">
            <SheetClose as-child>
              <Button
                as-child
                variant="ghost"
                :key="i"
                class="w-full justify-start dark:text-stone-400"
                :class="{
                  'text-stone-950 dark:text-stone-200 hover:text-stone-950 ':
                    page.url === route.path,
                }"
              >
                <Link :href="route.path">{{ route.name }}</Link>
              </Button>
            </SheetClose>
          </li>
        </ul>
      </nav>

      <SheetFooter class="mt-auto">
        <div class="flex flex-col justify-between gap-4">
          <Separator />
          <ul class="space-y-2">
            <li class="flex items-center gap-2 dark:text-stone-400 text-sm font-medium px-4">
              Theme
              <ButtonTheme variant="switch" />
            </li>
          </ul>
          <Separator />
          <ul class="space-y-2">
            <li>
              <SheetClose as-child>
                <Button as-child variant="ghost" class="w-full justify-start">
                  <Link href="/profile" class="dark:text-stone-400"> <UserRoundCog />Profile </Link>
                </Button>
              </SheetClose>
            </li>
            <li>
              <SheetClose as-child>
                <Button as-child variant="ghost" class="w-full justify-start">
                  <Link href="/profile" class="dark:text-stone-400"> <Settings />Settings </Link>
                </Button>
              </SheetClose>
            </li>
          </ul>
          <Separator />
          <Button as-child class="w-full">
            <Link href="/logout" method="post" as="button">Logout</Link>
          </Button>
        </div>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>
