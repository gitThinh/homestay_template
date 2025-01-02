<template>
  <div :class="{ 'max-h-36 overflow-hidden relative': !showFullDescription }">
    <div v-html="data.description"></div>
    <div
      v-if="!showFullDescription"
      class="absolute bottom-0 left-0 w-full h-14 bg-gradient-to-t from-neutral-50 to-transparent"
    ></div>
  </div>
  <button
    @click="toggleDescription"
    class="flex gap-1 mx-auto px-3 py-1.5 rounded-xl shadow-sm border hover:bg-neutral-100 transition-all hover:shadow-md"
    :class="showFullDescription ? 'items-center' : 'items-end'"
  >
    {{ showFullDescription ? $t("common.showLess") : $t("common.showMore") }}
    <NuxtIcon
      :name="
        showFullDescription
          ? 'heroicons:chevron-up-solid'
          : 'heroicons:chevron-down-solid'
      "
      class="w-5 h-5 block"
    />
  </button>
</template>

<script lang="ts" setup>
import type { IDetailHomeStay } from "~/types/homestay";

defineProps<{
  data: IDetailHomeStay;
}>();

const showFullDescription = ref(false);

const toggleDescription = () => {
  showFullDescription.value = !showFullDescription.value;
  if (!showFullDescription.value) {
    scrollToDescription();
  }
};

const scrollToDescription = () => {
  const descriptionElement = document.querySelector("#description");
  if (descriptionElement) {
    descriptionElement.scrollIntoView({ behavior: "smooth" });
  }
};
</script>
