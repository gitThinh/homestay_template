<template>
  <div
    v-if="galleryImgs.length > 0"
    class="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3"
  >
    <div
      class="row-span-1"
      :class="`${index === 0 ? 'col-span-2 sm:!row-span-2' : 'col-span-1'}`"
      v-for="(img, index) in galleryImgs.slice(0, 3)"
      @click="handleOpenGallery"
      :key="`${img}-${index}`"
    >
      <div
        class="cursor-pointer rounded-lg overflow-hidden"
        :class="`${
          index === 2 && galleryImgsLength > 3 ? 'relative count_img' : ''
        }`"
      >
        <NuxtImg
          :src="img"
          class="aspect-[3/2] object-cover object-center w-full h-full"
        />
        <span
          v-if="index === 2 && galleryImgsLength > 3"
          class="absolute font-semibold text-3xl z-10 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >+{{ galleryImgsLength - 3 }}</span
        >
      </div>
    </div>
  </div>

  <DetailHeaderAndGalleryPreview :images="galleryImgs" :show="openGallery" :handle-close="handleCloseGallery" />
</template>

<script lang="ts" setup>
const props = defineProps<{
  images: string[];
}>();
// slide state
const selectedImg = ref(0);

// gallery State
const openGallery = ref(false);
const galleryImgs = ref(props.images ?? []);
const galleryImgsLength = galleryImgs.value.length;

// methods
const handleOpenGallery = () => {
  openGallery.value = true;
};
const handleCloseGallery = () => {
  openGallery.value = false;
  selectedImg.value = 0;
};

const containerRef = ref(null);
useSwiper(containerRef, {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
</script>

<style>
.count_img::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  background-color: #19191979;
}
</style>
