<template>
  <div class="container mx-auto py-16 px-3">
    <div class="grid gap-3 lg:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div
        class="flex flex-col justify-between text-neutral-50 p-10 rounded-xl backgroundImg"
        :style="{ backgroundImage: `url('${data.bgImg}')` }"
        :key="data.id"
        v-for="data in EVENT_SALES_DATA"
      >
        <div class="space-y-4 flex-1 mb-14">
          <p>{{ data.desc }}</p>
          <h3 class="font-bold text-2xl">{{ data.title }}</h3>
        </div>
        <CommonButton
          :href="PATH_PAGE.blogDetail(data.id)"
          class="w-max text-black py-4 !px-8 font-medium"
        >
          {{ t("common.moreDetail") }}
        </CommonButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PATH_PAGE } from "~/constants/path";

const { t } = useI18n();
const EVENT_SALES_DATA = [
  {
    id: "blog_1",
    title: "Top 4 khách sạn tốt nhất tại Đà Lạt cho kỳ nghỉ của bạn",
    // desc: t("homepage.enjoyCool"),
    bgImg: "/images/blog.webp",
  },
  {
    id: "blog_2",
    title: t("homepage.allTimeFavorite"),
    desc: t("homepage.dontForgetCheck"),
    bgImg:
      "https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2Fcta%2F5%2F2.jpg&w=640&q=75",
  },
  {
    id: "blog_3",
    title: t("homepage.discountOfEurope"),
    desc: `80% ${t("homepage.discount")}`,
    bgImg:
      "https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2Fcta%2F5%2F3.jpg&w=640&q=75",
  },
];
</script>

<style>
.backgroundImg {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
