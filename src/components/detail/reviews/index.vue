<template>
  <div class="space-y-6">
    <div
      class="flex flex-col gap-5 justify-center items-center sm:flex-row sm:justify-evenly"
    >
      <div class="space-y-2 text-center sm:text-left">
        <h3 class="font-medium text-xl">Overall rating</h3>
        <CommonRatingStar :star="data.rating.star" class="gap-1" />
        <p class="text-neutral-700">{{ data.rating.count }} reviews</p>
      </div>
      <div class="space-y-2 text-right">
        <div
          class="flex flex-row items-center gap-2"
          v-for="(_, index) in [...Array(5).keys()].reverse()"
          :key="index"
        >
          <CommonRatingStar
            :star="5 - index"
            :show-empty-star="false"
            class="gap-1 flex-1 justify-end"
            size="h-4 w-4"
          />
          <progress
            :max="data.rating.count"
            :value="data.rating.overall?.[`${5 - index}`]"
            class="h-1 rounded-full overflow-hidden"
          ></progress>
          <p class="text-left w-28">
            {{ data.rating.overall?.[`${5 - index}`] }} reviews
          </p>
        </div>
      </div>
    </div>
    <div class="h-px w-full rounded-full bg-neutral-200"></div>
    <DetailReviewsListing :data="data.review" />
  </div>
</template>

<script lang="ts" setup>
import type { IDetailHomeStay } from "~/types/homestay";

defineProps<{
  data: IDetailHomeStay;
}>();
</script>

<style scoped>
progress::-webkit-progress-bar {
  background-color: #e7eaec;
}
progress::-webkit-progress-value {
  background-color: #e7bc91;
  border-radius: 10px;
}
</style>
