<template>
  <div class="flex flex-row gap-2 mt-4">
    <div
      class="aspect-square rounded-lg overflow-hidden relative cursor-pointer"
      :class="[index === MAX_IMAGE-1 && images.length > MAX_IMAGE ? 'count_img' : '', `w-1/${MAX_IMAGE}`]"
      v-for="(image, index) in images.slice(0, MAX_IMAGE)"
      v-if="images?.length"
      @click="openReviewImageGallery"
    >
      <NuxtImg :src="image" class="w-full h-full object-cover" />
      <span
        v-if="index === MAX_IMAGE-1 && images.length > MAX_IMAGE"
        class="absolute font-semibold text-xl md:text-3xl z-10 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >+{{ overCountImage }}</span
      >
    </div>
    <DetailHeaderAndGalleryListing
      v-if="images?.length"
      :images="images"
      :show="showReviewImageGallery"
      :handle-close="closeReviewImageGallery"
    />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  images: string[];
}>();

// state
let MAX_IMAGE = ref(4);
const showReviewImageGallery = ref(false);
const overCountImage = computed(() => props.images.length - 4);

const updateMaxImage = () => {
  MAX_IMAGE.value = window.innerWidth <= 425 ? 3 : 4;
};

onMounted(() => {
  updateMaxImage();
  window.addEventListener('resize', updateMaxImage);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateMaxImage);
});

// methods
const closeReviewImageGallery = () => {
  showReviewImageGallery.value = false;
};
const openReviewImageGallery = () => {
  showReviewImageGallery.value = true;
};
</script>
