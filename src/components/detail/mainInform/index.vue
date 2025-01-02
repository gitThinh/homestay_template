<template>
  <div class="space-y-5">
    <div class="header_info flex justify-between items-center gap-5">
      <CommonBadget color="blue">{{ data.type }}</CommonBadget>
      <DetailMainInformLikeShareBtn :like="data.isWishlist" />
    </div>
    <div class="main_info flex flex-col gap-5 items-center md:flex-row">
      <div class="flex justify-center items-center w-full md:w-max">
        <NuxtImg
          :src="data.thumbnail"
          :alt="data.name"
          class="object-cover w-full max-w-56 min-w-48 h-full border rounded-xl shadow-sm"
        />
      </div>
      <div class="space-y-2 w-fit">
        <h2 class="capitalize font-semibold text-3xl">{{ data.name }}</h2>
        <span class="address flex gap-2 items-center">
          <NuxtIcon name="ion:location-outline" class="w-5 h-5 block" />
          <span class="flex flex-row gap-2 flex-wrap">
            <p class="text-sm text-neutral-500">{{ data.address }}</p>
            <a
              target="_blank"
              :href="`https://www.google.com/maps?q=${data.address}}`"
              class="text-sm text-gray-500 underline"
              >{{ $t("detail.viewMap") }}</a
            >
          </span>
        </span>
        <div
          :class="openClass?.[data?.openState?.isOpen ? 'open' : 'close']"
          class="flex gap-2 items-center"
        >
          <NuxtIcon
            name="ion:time-outline"
            class="w-6 h-6 block"
            :class="openClass?.[data?.openState?.isOpen ? 'open' : 'close']"
          />
          <span class="font-medium">{{ $t("common.open") }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IDetailHomeStay } from "~/types/homestay";

const props = defineProps<{
  data: IDetailHomeStay;
}>();

const openClass = {
  open: "text-green-500",
  close: "text-red-500",
};
</script>
