<template>
  <NuxtLayout name="search-nav-layout">
    <div class="min-h-dvh w-full py-10 container mx-auto">
      <!-- header and gallery -->
      <div class="grid grid-cols-12 gap-5">
        <div class="col-span-12 lg:col-span-9">
          <DetailHeaderAndGallery :images="detailData.images" />
        </div>
        <div
          class="shadow-sm rounded-xl border hidden lg:block col-span-3 overflow-hidden"
        >
          <ClientOnly>
            <template #default>
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                :src="`https://www.google.com/maps/embed?origin=mfe&pb=!1m4!2m1!1s${detailData.address}!4f15!5e0!6i10`"
              ></iframe>
            </template>
            <template #fallback>
              <div class="w-full h-full animate-pulse bg-neutral-300"></div>
            </template>
          </ClientOnly>
        </div>
      </div>

      <NuxtLayout name="sidebar-layout">
        <template #content>
          <!-- summary info -->
          <div class="listingSection__wrap mt-10">
            <DetailMainInform :data="detailData" />
          </div>
          <!-- description -->
          <div class="listingSection__wrap mt-10">
            <div class="space-y-4" id="description">
              <div class="font-semibold text-2xl">{{ t("detail.description") }}</div>
              <div class="w-20 h-px bg-neutral-100"></div>
              <DetailDescription :data="detailData" />
            </div>
          </div>
          <!-- Prices -->
          <div class="listingSection__wrap mt-10 lg:!hidden">
            <div class="space-y-4">
              <div class="font-semibold text-2xl">{{ t("detail.prices") }}</div>
              <div class="w-20 h-px bg-neutral-100"></div>
              <DetailSidebar />
            </div>
          </div>
          <!-- Amenities -->
          <div class="listingSection__wrap mt-10">
            <div class="space-y-4">
              <div class="font-semibold text-2xl">{{ t("detail.amenities") }}</div>
              <p class="text-neutral-500">
                {{ t("detail.amenitiesAbout") }}
              </p>
              <div class="w-20 h-px bg-neutral-100"></div>
              <DetailAmenities :data="detailData" />
            </div>
          </div>
          <!-- contacts -->
          <div class="listingSection__wrap mt-10">
            <div class="space-y-4">
              <div class="font-semibold text-2xl">{{ t("detail.contacts") }}</div>
              <div class="w-20 h-px bg-neutral-100"></div>
              <DetailContact :data="detailData" />
            </div>
          </div>
          <!-- reviews -->
          <div class="listingSection__wrap mt-10">
            <div class="space-y-4">
              <div class="font-semibold text-2xl">{{ t("detail.reviews") }}</div>
              <div class="w-20 h-px bg-neutral-100"></div>
              <DetailReviews :data="detailData" />
            </div>
          </div>
        </template>
        <template #sidebar>
          <div class="listingSection__wrap mt-10 shadow-md">
            <DetailSidebar />
          </div>
        </template>
      </NuxtLayout>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { detailHomeStay } from "~/data/detail";

const {t} = useI18n();

// const route = useRoute();
// const homeid = route.params.homeid;
const detailData = detailHomeStay;

useSeoMeta({
  // title: String(homeid) || "homestay",
  title: detailData.name || "Homestay",
});
</script>

<style scoped>
.listingSection__wrap {
  @apply w-full flex flex-col sm:rounded-2xl border-b sm:border-t sm:border-l sm:border-r border-neutral-200 dark:border-neutral-700 space-y-6 sm:space-y-8 pb-10 px-0 sm:p-4 xl:p-8;
}
</style>
