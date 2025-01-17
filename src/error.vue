<template>
  <NuxtLayout name="white-layout">
    <div
      class="flex min-h-dvh flex-col md:flex-row gap-8 items-center py-10 main_container"
    >
      <div class="w-full md:w-1/2">
        <NuxtImg
          loading="lazy"
          src="/images/img_404.svg"
          class="w-full object-cover max-w-screen-sm mx-auto"
        />
      </div>
      <div
        class="w-full md:w-1/2 h-full flex flex-col justify-center space-y-5"
      >
        <h2
          class="text-8xl font-bold md:text-9xl lg:text-[11rem] xl:text-[12rem] text-neutral-700"
        >
          40<span class="text-primary-400">4</span>
        </h2>
        <p class="text-primary-300 font-semibold text-2xl md:text-3xl">
          {{ t("error.message") }}
        </p>
        <p class="text-neutral-700">{{ t("error.description") }}</p>
        <CommonButtonPrimary
          :href="PATH_PAGE.root"
          class="w-max px-6 py-3 !rounded-lg"
          >{{ t("error.backToHome") }}</CommonButtonPrimary
        >
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { PATH_PAGE } from "./constants/path";
const { t } = useI18n();

window.scrollTo(0, 0)

useSeoMeta({
  title: t("error.title"),
  description: t("error.message"),
});
</script>
