<template>
  <HeadlessDialog
    as="div"
    :open="show"
    class="fixed inset-0 z-50 flex items-center justify-center"
    @close="handleClose"
  >
    <HeadlessDialogOverlay
      as="div"
      class="fixed inset-0 z-30 bg-black opacity-90"
    />
    <div
      class="h-auto relative z-50 flex aspect-[3/2] w-full container items-center"
    >
      <!-- main img -->
      <div class="w-full overflow-hidden">
        <div class="relative flex aspect-[3/2] items-center justify-center">
          <NuxtImg
            :src="images[currentIndex]"
            class="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
    <!-- button navigation -->
    <div
      class="absolute container top-1/2 z-50 flex justify-between -translate-y-1/2"
    >
      <CommonButton
        @click="handlePrev"
        :disabled="currentIndex === 0"
        disabledClass="invisible"
        class="bg-neutral-900 opacity-80 !rounded-full !p-4 flex items-center justify-center hover:bg-neutral-700 transition-all"
      >
        <NuxtIcon
          name="meteor-icons:chevron-left"
          class="w-6 h-6 block text-white"
        />
      </CommonButton>
      <CommonButton
        @click="handleNext"
        :disabled="currentIndex === images.length - 1"
        disabledClass="invisible"
        class="bg-neutral-900 opacity-80 !rounded-full !p-4 flex items-center justify-center hover:bg-neutral-700 transition-all"
      >
        <NuxtIcon
          name="meteor-icons:chevron-right"
          class="w-6 h-6 block text-white"
        />
      </CommonButton>
    </div>
    <!-- listing image navigation -->
    <div
      class="absolute bg-neutral-700 overflow-hidden bg-opacity-60 bottom-0 w-full container left-1/2 z-50 flex justify-center -translate-x-1/2"
    >
    <div class="mx-auto my-3 inline-flex h-14 gap-2">
      <div
        v-for="(img, index) in images"
        :key="`${img}-${index}`"
        class="cursor-pointer rounded-lg overflow-hidden"
        :class="`${currentIndex === index ? 'border scale-125' : ''}`"
        @click="currentIndex = index"
      >
        <NuxtImg
          :src="img"
          class="aspect-video object-cover object-center w-full h-full"
        />
      </div>
    </div>
    </div>
  </HeadlessDialog>
</template>

<script lang="ts" setup>
const props = defineProps({
  index: { type: Number, default: 0 },
  images: { type: Array as PropType<string[]>, required: true },
  show: { type: Boolean, required: true },
  handleClose: { type: Function as PropType<() => void>, required: true },
});

const currentIndex = ref(props.index);
const handlePrev = () => {
  currentIndex.value -= 1;
};
const handleNext = () => {
  currentIndex.value += 1;
};

watch(
  () => props.index,
  (index) => {
    currentIndex.value = index;
  },
);
</script>
