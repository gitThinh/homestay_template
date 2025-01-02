<template>
  <div class="flex flex-row gap-2 mt-4">
    <div
      class="w-1/5 aspect-square rounded-lg overflow-hidden relative cursor-pointer"
      :class="index === 3 && images.length > 4 ? 'count_img' : ''"
      v-for="(image, index) in images.slice(0, 4)"
      v-if="images?.length"
      @click="openReviewImageGallery"
    >
      <NuxtImg :src="image" class="w-full h-full object-cover" />
      <span
        v-if="index === 3 && images.length > 4"
        class="absolute font-semibold text-3xl z-10 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
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
const showReviewImageGallery = ref(false);
const overCountImage = computed(() => props.images.length - 4);

// methods
const closeReviewImageGallery = () => {
  showReviewImageGallery.value = false;
};
const openReviewImageGallery = () => {
  showReviewImageGallery.value = true;
};
</script>
