<template>
  <NuxtLayout name="default-layout">
    <div class="min-h-dvh w-full py-24 container mx-auto">
      <DetailHeaderAndGallery :images="galleryImgs" />
    </div>
  </NuxtLayout>    
</template>

<script lang="ts" setup>
import { galleryImgs } from '~/data/detail';

const route = useRoute();

const homeid = route.params.homeid;

useSeoMeta({
  title: String(homeid) || "homestay"
})
</script>