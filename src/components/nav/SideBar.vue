<template>
  <HeadlessPopover v-slot="{ open }">
    <HeadlessPopoverButton class="outline-none btn_nude rounded-full">
      <div class="flex flex-col justify-center items-center">
        <NuxtIcon
          name="tabler:menu-3"
          class="w-6 h-6 block"
          :class="iconColor"
        />
        <span class="capitalize font-medium text-[10px]" :class="iconColor">{{
          $t("nav.menu")
        }}</span>
      </div>
    </HeadlessPopoverButton>

    <HeadlessTransitionRoot
      as="template"
      enter="transition duration-800 ease-out"
      :enter-from="
        sideMenu === 'left'
          ? '-translate-x-full opacity-30'
          : 'translate-x-full opacity-30'
      "
      :enter-to="
        sideMenu === 'left'
          ? 'translate-x-0 opacity-100'
          : 'translate-x-0 opacity-100'
      "
      leave="transition duration-800 ease-in"
      :leave-from="
        sideMenu === 'left'
          ? 'translate-x-0 opacity-100'
          : 'translate-x-0 opacity-100'
      "
      :leave-to="
        sideMenu === 'left'
          ? '-translate-x-full opacity-30'
          : 'translate-x-full opacity-30'
      "
    >
      <HeadlessPopoverPanel
        class="fixed z-20 bottom-0 h-dvh w-3/4 rounded-s-lg overflow-hidden bg-neutral-50 shadow-lg ring-1 ring-black/5"
        :class="sideMenu === 'left' ? 'left-0' : 'right-0'"
      >
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
</template>

<script lang="ts" setup>
defineProps({
  iconColor: {
    type: String,
    default: "text-neutral-50",
  },
  sideMenu: {
    type: String as () => "left" | "right",
    default: "left",
  },
});
</script>
