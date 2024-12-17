<template>
  <div class="grid grid-cols-12 gap-5 sm:gap-10 container mx-auto py-16">
    <div class="col-span-6 lg:col-span-3 flex flex-col justify-center items-center text-center space-y-4" :key="data.id" v-for="data in CHOOSE_US_DATA">
        <NuxtImg :src="data.icon" :width="60" />
        <div class="space-y-2">
            <h2 class="text-3xl font-bold">{{ data.title }}</h2>
            <p class="font-medium">{{ data.desc }}</p>
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const {t} = useI18n();
const CHOOSE_US_DATA = [
  {
    id: 1,
    title: "932M",
    desc: t("homepage.totalDonation"),
    icon: "https://viatour-nextjs.vercel.app/img/icons/3/1.svg",
  },
  {
    id: 2,
    title: "24M",
    desc: t("homepage.campaigns"),
    icon: "https://viatour-nextjs.vercel.app/img/icons/3/2.svg",
  },
  {
    id: 3,
    title: "10M",
    desc: t("homepage.happyPeople"),
    icon: "https://viatour-nextjs.vercel.app/img/icons/3/3.svg",
  },
  {
    id: 4,
    title: "65M",
    desc: t("homepage.ourVolunteers"),
    icon: "https://viatour-nextjs.vercel.app/img/icons/3/4.svg",
  },
]
</script>