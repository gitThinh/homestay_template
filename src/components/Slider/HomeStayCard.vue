<template>
  <div class="relative">
    <ClientOnly>
      <template #default>
        <swiper-container ref="containerRef" :init="false">
          <swiper-slide v-for="slideData in slidesData" :key="slideData.id" class="h-full">
            <CommonHomestayCard :card_data="slideData" class="h-full" />
          </swiper-slide>
        </swiper-container>
      </template>
      <template #fallback>
        <div class="w-full h-[377px] bg-neutral-300 animate-pulse rounded-lg"></div>
      </template>
    </ClientOnly>
    <div class="control_group absolute -top-20 right-5">
      <button class="prevbtn hidden sm:inline-block">
        <NuxtIcon name="circum:square-chev-left" class="w-12 h-12 block text-neutral-600"/>
      </button>
      <button class="nextbtn hidden sm:inline-block">
        <NuxtIcon name="circum:square-chev-right" class="w-12 h-12 block text-neutral-600"/>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IHomestayCard } from "~/types/homestay";

const props = defineProps({
  slidesData: {
    type: Object as PropType<IHomestayCard[]>,
    require: true,
  },
  loop: {
    default: true,
  },
  delayAuto: {
    default: 3000,
  }
});

const containerRef = ref(null);
useSwiper(containerRef, {
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: props.delayAuto ? {
    delay: props.delayAuto,
  } : false,
  loop: props.loop,
  navigation: {
    enabled: true,
    nextEl: ".nextbtn",
    prevEl: ".prevbtn",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    },
    1640: {
      slidesPerView: 5
    }
  }
})
</script>

<style>
.swiper-button-disabled {
  opacity: 0.5;
  cursor: default;
}
</style>