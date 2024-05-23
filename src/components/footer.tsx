import { For } from 'solid-js'
import IconDeno from './icons/deno'
import ModeToggle from './dark-mode'
import { contacts, socialSite } from '@/utils/constants'

export default function Footer() {
  return (
    <footer class="container mx-auto p-5 max-w-[90rem] pt-10 border-t">
      <div class="flex flex-wrap p-1 justify-between gap-10">
        <nav>
          <a href="/" class="flex items-center gap-1">
            <h3 class="dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-opacity-50 text-2xl font-bold">Sebastian García</h3>
          </a>
        </nav>
        <div>
          <h3 class="dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-opacity-50 text-xl font-bold">Socials</h3>
          <nav class="mt-3 flex flex-col gap-1">
            <For each={socialSite}>
              {({ name, url }) => (
                <a class="hover:underline" href={url}>{name}</a>
              )}
            </For>
          </nav>
        </div>
        <div>
          <h3 class="dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-opacity-50 text-xl font-bold">Contacts</h3>
          <nav class="mt-3 flex flex-col gap-1">
            <For each={contacts}>
              {({ name, url }) => (
                <a class="hover:underline" href={url}>{name}</a>
              )}
            </For>
          </nav>
        </div>

        <ModeToggle />

      </div>
      <div class="flex flex-col justify-center items-center gap-1 pt-10">
        <p class="text-sm text-muted-foreground">© 2024 Sebastian Garcia Dev.</p>
        <a class="relative tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium no-underline hover:opacity-80 active:opacity-disabled transition-opacity flex justify-end items-center gap-2 text-muted-foreground" tabindex="0" role="link" href="https://deno.com/deploy" rel="noopener noreferrer" target="_blank">
          <p class="font-normal">Deployed on</p>
          <IconDeno />
        </a>
      </div>
    </footer>
  )
}