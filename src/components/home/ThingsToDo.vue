<template>
  <div
    class="container mx-auto grid grid-cols-12 gap-5 lg:gap-10 py-16 space-y-8 px-3"
  >
    <div
      class="col-span-12 lg:col-span-5 space-y-5 h-full flex justify-center text-center md:text-left flex-col"
    >
      <h3 class="text-3xl font-semibold text-primary-500">
        {{ t("homepage.popularThingToDo") }}
      </h3>
      <p>
        {{ t("homepage.loremIpsum") }}
      </p>
      <CommonButton
        href="#"
        class="py-4 bg-primary-400 text-white hover:bg-primary-300"
        ><span class="font-medium">{{
          t("common.seeAll")
        }}</span></CommonButton
      >
    </div>
    <div class="col-span-12 lg:col-span-7 grid grid-cols-12 gap-4 md:gap-8">
      <div
        class="py-5 col-span-6 md:col-span-4 text-center bg-neutral-50 rounded-xl space-y-2"
        v-for="data in THING_TO_DO_DATA"
        :key="data.id"
      >
        <div class="w-max mx-auto rounded-full bg-primary-50 p-3">
          <NuxtIcon
            :name="data.icon"
            class="w-10 h-10 block text-primary-800"
          />
        </div>
        <h4 class="text-xl font-semibold">
          {{ data.title }}
        </h4>
        <p>{{ data.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const {t} = useI18n();
const THING_TO_DO_DATA = [
  {
    id: 1,
    icon: "material-symbols-light:camping-outline",
    title: t("categories.camping"),
    desc: "60+",
  },
  {
    id: 2,
    icon: "material-symbols-light:villa-outline-rounded",
    title: t("categories.villa"),
    desc: "60+",
  },
  {
    id: 3,
    icon: "fluent:beach-24-regular",
    title: t("categories.beachView"),
    desc: "60+",
  },
  {
    id: 4,
    icon: "ri:billiards-line",
    title: t("categories.bia"),
    desc: "60+",
  },
  {
    id: 5,
    icon: "arcticons:privatelock",
    title: t("categories.privateInOut"),
    desc: "60+",
  },
  {
    id: 6,
    icon: "fluent:building-32-regular",
    title: t("categories.apartment"),
    desc: "60+",
  },
];
</script>
