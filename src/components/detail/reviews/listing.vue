<template>
  <div class="space-y-4">
    <div v-for="(comment, index) in data" :key="comment.userId">
      <div class="flex gap-2">
        <CommonAvatar :name="comment.name" :img-url="comment.avatar" />
        <div class="p-2 w-full">
          <div class="flex items-center justify-between">
            <span class="flex items-center gap-2">
              <p class="user_name font-medium text-lg">{{ comment.name }}</p>
              <CommonBadget :color="colorType?.[comment.type]" class="!py-1 !px-2 capitalize hidden sm:block" v-if="comment.type && colorType?.[comment.type]">{{ comment.type }}</CommonBadget>
            </span>
            <CommonRatingStar :star="comment.rating" class="gap-1 hidden sm:block" />
          </div>
          <p class="text-sm text-neutral-500">{{ converDate(comment.date, locale) }}</p>
          <CommonRatingStar :star="comment.rating" class="gap-1 sm:hidden" />
          <p v-html="comment.comment" class="my-2"></p>
          <DetailReviewsImageGallery :images="comment.images" v-if="comment.images?.length"/>
        </div>
      </div>
      <div class="h-px w-full sm:w-2/3 mx-auto bg-neutral-200 my-4"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IUserComment } from "~/types/homestay";
const { locale } = useI18n();

defineProps<{
  data: IUserComment[];
}>();

const colorType: { [key: string]: "green" | "blue" | "purple" | "yellow" } = {
  user: "green",
  admin: "blue",
  other: "purple",
};
</script>
