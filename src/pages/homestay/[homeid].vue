<template>
  <NuxtLayout name="default-layout">
    <div class="min-h-dvh w-full py-10 container mx-auto">
      <div class="grid grid-cols-12 gap-5">
        <div class="col-span-12 lg:col-span-9">
          <DetailHeaderAndGallery :images="galleryImgs" />
        </div>
        <div class="shadow-sm rounded-xl border hidden lg:block col-span-3 overflow-hidden">
          <ClientOnly>
            <template #default>
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                :src="`https://www.google.com/maps/embed?origin=mfe&pb=!1m4!2m1!1s${'03 quang trung da nang'}!4f15!5e0!6i10`"
              ></iframe>
            </template>
            <template #fallback>
              <div class="w-full h-full animate-pulse bg-neutral-300"></div>
            </template>            
          </ClientOnly>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { galleryImgs } from "~/data/detail";

const route = useRoute();

const homeid = route.params.homeid;

useSeoMeta({
  title: String(homeid) || "homestay",
});
</script>
