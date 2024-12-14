<template>
  <div class="grid grid-cols-12 w-full gap-4">
    <div
      v-for="data in TREND_DATA"
      :key="data.id"
      class="block_trending cursor-pointer hover_image_scale col-span-6 sm:col-span-4 lg:col-span-3 xl:col-span-2 flex flex-col h-full"
    >
      <div class="w-full flex-1 rounded-lg overflow-hidden">
        <NuxtImg loading="lazy" :src="data.image" class="object-cover w-full h-full" />
      </div>
      <div class="content px-2 py-3">
        <h3 class="font-medium text-lg">{{ data.title }}</h3>
        <p v-if="data.desc">{{ data.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { TREND_DATA } from "~/data/homepage";
</script>

<style>
.block_trending:hover .content p {
  color: #55C7F8;
}
</style>
