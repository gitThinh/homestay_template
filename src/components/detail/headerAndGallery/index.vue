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

<<<<<<< HEAD
  <DetailHeaderAndGalleryPreview :images="galleryImgs" :show="openGallery" :handle-close="handleCloseGallery" />
=======
  <HeadlessTransitionRoot
    as="template"
    enter-active-class="duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
    :show="openGallery"
    @close="handleCloseGallery"
  >
    <HeadlessDialog
      as="div"
      class="fixed inset-0 z-50"
      @close="handleCloseGallery"
    >
      <div
        class="fixed inset-0 bg-white rounded-lg text-left shadow-xl transform transition-all p-4 pt-10 pb-7"
      >
        <HeadlessDialogTitle as="div" class="fixed top-2 right-2 w-full flex justify-between items-center">
          <div class=""></div>
          <NuxtIcon
            name="meteor-icons:xmark"
            class="w-6 h-6 xl:h-8 xl:w-8 block cursor-pointer"
            @click="handleCloseGallery"
          />
        </HeadlessDialogTitle>
        <div class="container h-full overflow-y-auto lg:flex lg:items-center lg:justify-center">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 min-[1440px]:grid-cols-4 gap-4">
            <div v-for="(img, index) in galleryImgs" :key="index" class="">
              <NuxtImg
                :src="img"
                class="object-cover aspect-video rounded-xl cursor-pointer w-full"
                :class="`${
                  selectedImg === index ? 'border-2 border-primary-500' : ''
                }`"
                @click="selectedImg = index"
              />
            </div>
              <!-- <ClientOnly>
                <swiper-container ref="containerRef" :init="false" class="w-full swiper">
                  <swiper-slide v-for="(img, index) in galleryImgs" :key="index" class="h-full">
                    <NuxtImg
                      :src="img"
                      class="object-cover aspect-video rounded-xl cursor-pointer w-full h-40"
                      :class="`${
                        selectedImg === index ? 'border-2 border-primary-500' : ''
                      }`"
                      @click="selectedImg = index"
                    />
                  </swiper-slide>
                </swiper-container>
              </ClientOnly> -->
          </div>
        </div>
      </div>
    </HeadlessDialog>
  </HeadlessTransitionRoot>
>>>>>>> main
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
