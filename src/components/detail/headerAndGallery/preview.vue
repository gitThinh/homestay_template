<template>
  <HeadlessDialog
    as="div"
    :open="show"
    class="fixed inset-0 z-40"
    @close="handleClose"
  >
    <div
      class="fixed inset-0 bg-white rounded-lg text-left shadow-xl transform transition-all p-4 pt-10 pb-7"
    >
      <HeadlessDialogTitle
        as="div"
        class="fixed top-2 right-2 w-full flex justify-between items-center"
      >
        <div class=""></div>
        <NuxtIcon
          name="meteor-icons:xmark"
          class="w-6 h-6 xl:h-8 xl:w-8 block cursor-pointer"
          @click="handleClose"
        />
      </HeadlessDialogTitle>
      <div class="container h-full overflow-y-auto">
        <div
          class="columns-1 sm:columns-2 lg:columns-3 min-[1440px]:columns-4 gap-4"
        >
          <div v-for="(img, index) in images" :key="index" class="mb-2">
            <NuxtImg
              :src="img"
              class="h-auto rounded-xl cursor-pointer w-full"
              @click="handOpenFullview(index)"
            />
          </div>
        </div>
      </div>
    </div>
    <DetailHeaderAndGalleryListing :images="images" :show="showFullView" :handle-close="handleCloseGallery" :index="indexImgView" />
  </HeadlessDialog>
</template>

<script lang="ts" setup>
const props = defineProps({
  images: { type: Array as PropType<string[]>, required: true },
  show: { type: Boolean, required: true },
  handleClose: { type: Function as PropType<() => void>, required: true },
});

const showFullView = ref(false);
const indexImgView = ref(0);

const handOpenFullview = (index: number) => {
    showFullView.value = true;
    indexImgView.value = index;
}

const handleCloseGallery = () => {
    showFullView.value = false;
};
</script>
