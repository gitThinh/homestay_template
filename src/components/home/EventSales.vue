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
        <CommonButton href="#" class="w-max text-black py-4 !px-8 font-medium">
            More detail
        </CommonButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const EVENT_SALES_DATA = [
  {
    id: 1,
    desc: "Enjoy these cool staycation promotions.",
    title: "Best staycation deals",
    bgImg:
      "https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2Fcta%2F5%2F1.jpg&w=640&q=75",
  },
  {
    id: 2,
    desc: "Don't forget to check out these activities.",
    title: "All Time Favourite Activities in Dubai",
    bgImg:
      "https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2Fcta%2F5%2F2.jpg&w=640&q=75",
  },
  {
    id: 3,
    desc: "80% Discount",
    title: "Discover the wow of Europe",
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