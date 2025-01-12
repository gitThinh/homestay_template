<template>
  <div class="relative">
    <ClientOnly>
      <template #default>
        <swiper-container ref="containerRef" :init="false">
          <swiper-slide
            v-for="slideData in slidesData"
            :key="slideData.id"
            class="h-full"
          >
            <CommonHomestayCard :card_data="slideData" class="h-full" />
          </swiper-slide>
        </swiper-container>
      </template>
      <template #fallback>
        <div class="flex flex-row flex-nowrap gap-5">
          <div
            v-for="item in 4"
            key="item"
            class="h-full w-full"
            :class="getVisibilityClass(item)"
          >
            <div
              class="rounded-2xl cursor-pointer overflow-hidden border transition-all flex flex-col bg-neutral-50"
            >
              <div
                class="animate-pulse h-60 w-full rounded-2xl bg-gray-200"
              ></div>
              <button
                class="opacity-0 absolute bottom-0 p-2 rounded-full right-2 bg-neutral-50 translate-y-1/2 border hover:bg-primary-50 transition-colors"
              ></button>
              <div class="p-3 space-y-2 flex flex-col flex-1">
                <div class="animate-pulse h-4 bg-gray-200 w-3/4 rounded-md"></div>
                <div class="animate-pulse h-4 bg-gray-200 w-1/2 mt-2 rounded-md"></div>
                <div class="animate-pulse h-4 bg-gray-200 w-1/3 mt-2 rounded-md"></div>
                <div class="h-px w-full bg-neutral-200"></div>
                <div class="animate-pulse h-4 bg-gray-200 w-1/4 mt-2 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </ClientOnly>
    <div class="control_group absolute -top-20 right-5">
      <button class="prevbtn hidden sm:inline-block">
        <NuxtIcon
          name="circum:square-chev-left"
          class="w-12 h-12 block text-neutral-600"
        />
      </button>
      <button class="nextbtn hidden sm:inline-block">
        <NuxtIcon
          name="circum:square-chev-right"
          class="w-12 h-12 block text-neutral-600"
        />
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
  },
});

const containerRef = ref(null);

useSwiper(containerRef, {
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: props.delayAuto
    ? {
        delay: props.delayAuto,
      }
    : false,
  loop: props.loop,
  navigation: {
    enabled: true,
    nextEl: ".nextbtn",
    prevEl: ".prevbtn",
  },
  breakpoints: {
    426: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    },
    1640: {
      slidesPerView: 5,
    },
  },
});

// Methods
// set class fallback methods
const getVisibilityClass = (item: number) => {
  switch (item) {
    case 3:
      return "hidden min-[1440px]:block";
    case 2:
      return "hidden lg:block";
    case 1:
      return "hidden sm:block";
    default:
      return "";
  }
};
</script>

<style>
.swiper-button-disabled {
  opacity: 0.5;
  cursor: default;
}
</style>
