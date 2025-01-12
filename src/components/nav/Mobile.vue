<template>
  <div
    class="md:hidden z-40 fixed bottom-0 w-full transition-all backdrop-blur-md bg-white border-t"
  >
    <div class="w-full p-3 flex justify-around items-end">
      <NuxtLinkLocale :href="PATH_PAGE.root">
        <div class="flex flex-col justify-center items-center">
          <NuxtIcon
            name="solar:home-2-outline"
            class="w-6 h-6 block text-neutral-500"
          />
          <span class="capitalize font-medium text-[10px] text-neutral-500"
            >{{ $t("nav.home") }}</span
          >
        </div>
      </NuxtLinkLocale>
      <NuxtLinkLocale :href="PATH_BUSINESS.search">
        <div class="flex flex-col justify-center items-center">
          <NuxtIcon
            name="radix-icons:magnifying-glass"
            class="w-6 h-6 block text-neutral-500"
          />
          <span class="capitalize font-medium text-[10px] text-neutral-500"
            >{{ $t("nav.search") }}</span
          >
        </div>
      </NuxtLinkLocale>
      <NuxtLinkLocale :href="PATH_AUTH.login">
        <div class="flex flex-col justify-center items-center">
          <NuxtIcon
            name="la:user-solid"
            class="w-6 h-6 block text-neutral-500"
          />
          <span class="capitalize font-medium text-[10px] text-neutral-500"
            >{{ $t("nav.user") }}</span
          >
        </div>
      </NuxtLinkLocale>
      <!-- Nav Sidebar Mobile -->
      <NavSideBar
        class="block md:hidden"
        icon-color="text-neutral-500"
        side-menu="right"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PATH_AUTH, PATH_BUSINESS, PATH_PAGE } from "~/constants/path";
</script>
