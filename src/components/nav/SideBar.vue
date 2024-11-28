<template>
  <div class="">
    <HeadlessPopover v-slot="{ open }" class="relative">
      <HeadlessPopoverButton
        class="outline-none btn_nude p-1 rounded-full"
      >
        <NuxtIcon name="tabler:menu-3" class="w-8 h-8 block text-neutral-50"/>
      </HeadlessPopoverButton>

      <HeadlessTransitionRoot
        as="div"
        class="fixed top-0 left-0 bottom-0 z-10 w-3/4"
        enter="transition duration-800 ease-out"
        enter-from="-translate-x-full opacity-30"
        enter-to="translate-x-0 opacity-100"
        leave="transition duration-800 ease-in"
        leave-from="translate-x-0 opacity-100"
        leave-to="-translate-x-full opacity-30"
        >
        <HeadlessPopoverPanel class="h-full rounded-e-lg overflow-hidden bg-neutral-50 shadow-lg ring-1 ring-black/5">
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
        </HeadlessPopoverPanel>
      </HeadlessTransitionRoot>
    </HeadlessPopover>
  </div>
</template>

<script setup>
</script>
