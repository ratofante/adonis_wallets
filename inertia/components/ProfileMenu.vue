<script lang="ts" setup>
import UserDto from '~/dtos/user'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuContent,
} from '~/components/ui/dropdown-menu'
import { Button } from '~/components/ui/button'

// Icons
import { UserRound, Settings, UserRoundCog } from 'lucide-vue-next'

defineProps<{ user: UserDto }>()
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline" size="icon" class="rounded-full dark:text-white">
        <UserRound />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-56">
      <DropdownMenuLabel>
        <div>
          <div class="text-lg font-semibold">
            {{ user.username }}
          </div>
          <div class="text-sm font-normal">
            {{ user.email }}
          </div>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Link href="/profile" class="flex-1 flex flex-items-center gap-2">
          <UserRoundCog class="w-5 h-5 text-stone-500" />Profile
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Link href="/settings" class="flex-1 flex items-center gap-2">
          <Settings class="w-5 h-5 text-stone-500" />Settings</Link
        >
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem as-child class="w-full">
        <Link href="/logout" method="post" as="button" as-child>
          <Button variant="default" class="w-full">Logout</Button></Link
        >
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
