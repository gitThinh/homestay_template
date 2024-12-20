<template>
  <div
    v-if="galleryImgs.length > 0"
    class="grid grid-cols-2 gap-x-4 gap-y-2 lg:grid-cols-3"
  >
    <div
      class="row-span-1"
      :class="`${index === 0 ? 'col-span-2 lg:!row-span-2' : 'col-span-1'}`"
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
          class="aspect-video object-cover object-center w-full h-full"
          :placeholder="[3000, 3000]"
        />
        <span
          v-if="index === 2 && galleryImgsLength > 3"
          class="absolute font-semibold text-3xl z-10 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >+{{ galleryImgsLength - 3 }}</span
        >
      </div>
    </div>
  </div>

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
      class="fixed inset-0 z-50 max-h-dvh overflow-y-hidden flex items-center justify-center"
      @close="handleCloseGallery"
    >
      <div
        class="flex justify-center items-end pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <HeadlessDialogOverlay
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
        <div
          class="bg-white rounded-lg text-left shadow-xl transform transition-all container"
        >
          <NuxtIcon
            name="meteor-icons:xmark"
            class="absolute top-2 right-2 w-6 h-6 block cursor-pointer"
            @click="handleCloseGallery"
          />
          <div class="py-8 px-4">
            <div class="grid grid-cols-12 gap-3">
              <div class="col-span-8 h-full">
                <NuxtImg
                  :src="galleryImgs[selectedImg]"
                  class="object-cover w-full rounded-xl aspect-video"
                  placeholder-class="animate-pulse bg-gray-300"
                />
                <div class="mt-2">
                  <ClientOnly>
                    <swiper-container :slides-per-view="5" :space-between="10">
                      <swiper-slide
                        v-for="(img, index) in galleryImgs"
                        :key="index"
                        class="h-full"
                      >
                        <NuxtImg
                          :src="img"
                          class="object-cover aspect-video rounded-xl cursor-pointer"
                          @click="selectedImg = index"
                        />
                      </swiper-slide>
                    </swiper-container>
                  </ClientOnly>
                </div>
              </div>
              <div class="col-span-4 h-full overflow-y-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </HeadlessDialog>
  </HeadlessTransitionRoot>
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
// const handlePrevImg = () => {
//   selectedImg.value = selectedImg.value === 0 ? 0 : selectedImg.value - 1;
// };
// const handleNextImg = () => {
//   selectedImg.value = selectedImg.value === galleryImgsLength - 1 ? selectedImg.value : selectedImg.value + 1;
// };
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
