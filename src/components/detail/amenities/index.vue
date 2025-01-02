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
  { name: t("amenities.autoLock"), icon: "ion:finger-print" },
  { name: t("amenities.bathtub"), icon: "solar:bath-linear" },
  { name: t("amenities.airConditioner"), icon: "iconoir:air-conditioner" },
  { name: t("amenities.shampoBodySoap"), icon: "hugeicons:body-soap" },
  { name: t("amenities.waterEnergy"), icon: "hugeicons:water-energy" },
  { name: t("amenities.tivi"), icon: "hugeicons:tv-smart" },
  { name: t("amenities.netflix"), icon: "arcticons:netflix" },
  { name: t("amenities.hairDryer"), icon: "hugeicons:hair-dryer" },
  { name: t("amenities.CCTV"), icon: "hugeicons:cctv-camera" },
  { name: t("amenities.wifi5g"), icon: "healthicons:network-5g-outline" },
  { name: t("categories.kitchen"), icon: "guidance:kitchen" },
  { name: t("categories.barAndLou"), icon: "la:glass-martini" },
  { name: t("categories.projector"), icon: "solar:projector-outline" },
  { name: t("categories.boardGame"), icon: "fluent:board-games-20-regular" },
  { name: t("amenities.pets"), icon: "mdi:pets" },
];

</script>