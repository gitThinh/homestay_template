<template>
  <div class="">
    <HeadlessPopover v-slot="{ open }" class="relative">
      <HeadlessPopoverButton
        class="outline-none"
      >
        <NuxtIcon name="tabler:menu-3" class="w-8 h-8 block bg-black"/>
      </HeadlessPopoverButton>

      <HeadlessTransitionRoot
        enter-active-class="transition duration-1000 ease-out"
        enter-from-class="-translate-x-[2/3] opacity-0"
        enter-to-class="translate-x-0 opacity-100"
        leave-active-class="transition duration-1000 ease-in"
        leave-from-class="translate-x-0 opacity-100"
        leave-to-class="-translate-x-[1/2] opacity-0"
      >
        <HeadlessPopoverPanel
          class="fixed top-0 left-0 bottom-0 z-10 w-3/4 transform"
        >
          <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
            <div class="bg-gray-50 p-4">
              <a
                href="##"
                class="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
              >
                <span class="flex items-center">
                  <span class="text-sm font-medium text-gray-900">
                    Documentation
                  </span>
                </span>
                <span class="block text-sm text-gray-500">
                  Start integrating products and tools
                </span>
              </a>
            </div>
          </div>
        </HeadlessPopoverPanel>
      </HeadlessTransitionRoot>
    </HeadlessPopover>
  </div>
</template>

<script setup>
</script>
