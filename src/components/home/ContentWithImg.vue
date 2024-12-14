<template>
  <div
    :class="props.positionImg ? 'flex-col lg:flex-row ' : 'flex-col-reverse lg:flex-row-reverse'"
    class="flex gap-10 lg:gap-0 px-0 lg:px-5"
  >
    <div
      class="content w-full lg:w-1/2 flex items-center"
      :class="props.positionImg ? 'justify-start' : 'justify-end'"
    >
      <div class="w-full lg:w-5/6 space-y-8 lg:space-y-12">
        <h2 class="text-3xl font-bold">Why Choose Us</h2>
        <div class="choose_us_content space-y-4">
            <div class="flex flex-row items-center gap-8" v-for="data in CONTENT_IMG_DATA">
                <NuxtImg :src="data.icon" class="w-10 md:w-14" />
                <div class="space-y-2">
                    <h4 class="font-medium text-lg">{{ data.title }}</h4>
                    <p v-if="data.desc">{{ data.desc }}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
    <div class="image_cover w-full lg:w-1/2">
      <NuxtImg
        loading="lazy"
        src="https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2Fabout%2F3%2F1.jpg&w=750&q=75"
        class="w-5/6 lg:w-full mx-auto rounded-3xl"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CONTENT_IMG_DATA } from '~/data/homepage';

const props = defineProps({
  positionImg: {
    type: Boolean,
    default: true, // true is right, false is left
  },
});
</script>

<style></style>
