<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 gap-5 w-full">
    <div class="flex flex-row gap-2 items-center" v-for="cate in Amenities_demos" :key="cate.icon">
        <NuxtIcon :name="cate.icon" class="w-5 h-5 block" />
        <p>{{ cate.name }}</p>
    </div>
    <!-- <CommonButton class="w-max border !rounded-full">
        Show more
    </CommonButton> -->
  </div>
</template>

<script lang="ts" setup>
import type { IDetailHomeStay } from '~/types/homestay';
const {t} = useI18n();

defineProps<{
    data: IDetailHomeStay
}>();

const Amenities_demos = [
  { name: "Auto lock", icon: "ion:finger-print" },
  { name: "Bathtub", icon: "solar:bath-linear" },
  { name: "Air conditioner", icon: "iconoir:air-conditioner" },
  { name: "Shampoo, Body soap", icon: "hugeicons:body-soap" },
  { name: "Water Energy", icon: "hugeicons:water-energy" },
  { name: "Tivi", icon: "hugeicons:tv-smart" },
  { name: "Netflix", icon: "arcticons:netflix" },
  { name: "Hair dryer", icon: "hugeicons:hair-dryer" },
  { name: "CCTV", icon: "hugeicons:cctv-camera" },
  { name: "Wifi 5G", icon: "healthicons:network-5g-outline" },
  { name: t("categories.kitchen"), icon: "guidance:kitchen" },
  { name: t("categories.barAndLou"), icon: "la:glass-martini" },
  { name: t("categories.projector"), icon: "solar:projector-outline" },
  { name: t("categories.boardGame"), icon: "fluent:board-games-20-regular" },
  { name: "Pet", icon: "mdi:pets" },
];

</script>