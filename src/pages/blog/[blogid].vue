<template>
  <NuxtLayout name="search-nav-layout">
    <div>
      <!-- header -->
      <div
        :style="{ backgroundImage: `url(${BLOG_DATA.thumbnail})` }"
        class="bg_img relative w-full lg:w-11/12 mx-auto h-[550px] bg-neutral-100 lg:rounded-xl"
      >
        <NuxtImg
          src="/images/coverbottom.svg"
          class="absolute bottom-0 left-0 w-full object-contain"
        />
        <div
          class="h-full flex flex-col justify-center items-center w-11/12 mx-auto text-neutral-50 text-center space-y-3"
        >
          <h1
            class="text-5xl md:text-6xl font-semibold lg:text-7xl lg:w-11/12 lg:font-bold"
          >
            {{ BLOG_DATA.title }}
          </h1>
        </div>
      </div>
      <!-- content blog -->
      <div class="container max-w-screen-lg my-16">
        <CommonBadget :border="true" color="green" class="mb-5">
          {{ converDate(BLOG_DATA.date, locale) }}
        </CommonBadget>
        <p class="mb-8 italic" v-if="BLOG_DATA.description">
          {{ BLOG_DATA.description }}
        </p>
        <div v-html="BLOG_DATA.content"></div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { BLOG_DATA } from "~/data/blog";

const { locale } = useI18n();

useSeoMeta({
  title: BLOG_DATA.title,
  description: BLOG_DATA.description,
  ogImage: BLOG_DATA.thumbnail,
});
</script>

<style>
.bg_img {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
