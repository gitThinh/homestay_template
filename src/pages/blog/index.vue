<template>
  <NuxtLayout name="search-nav-layout">
    <div>
      <!-- header -->
      <div
        :style="{ backgroundImage: `url('/images/bloglist.webp')` }"
        class="bg_img relative w-full lg:w-11/12 mx-auto h-[500px] bg-neutral-100 lg:rounded-xl"
      >
        <NuxtImg
          src="/images/coverbottom.svg"
          class="absolute bottom-0 left-0 w-full object-contain"
        />
        <div
          class="h-full flex flex-col justify-center items-center w-11/12 mx-auto text-neutral-50 text-center space-y-5"
        >
          <h1
            class="text-5xl md:text-6xl font-semibold lg:text-7xl lg:w-11/12 lg:font-bold"
          >
            {{ t("blogPage.headerTitle") }}
          </h1>
          <p>
            {{ t("blogPage.headerDesc") }}
          </p>
        </div>
      </div>
      <!-- content blog -->
      <div class="container my-16 space-y-10">
        <div class="flex flex-row items-center justify-center gap-5">
          <button
            :class="[
              'border border-neutral-300 px-4 py-2 rounded-full font-medium text-neutral-500 capitalize',
              { 'border-neutral-900': filterType === 'all' },
            ]"
            @click="handleChangeTypeFilter('all')"
          >
            {{ t("common.all") }}
          </button>
          <button
            v-for="type in blogTypes"
            :key="type"
            :class="[
              'border border-neutral-300 px-4 py-2 rounded-full font-medium text-neutral-500 capitalize',
              { 'border-neutral-900': filterType === type },
            ]"
            @click="handleChangeTypeFilter(type)"
          >
            {{ t(`blogPage.${type}`) }}
          </button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CommonBlogCard
            v-for="blog in showedBlogList"
            :card_data="blog"
            :key="blog.id"
          />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { BLOG_LISTING, type IBlogCardType } from "~/data/blog";
const {t} = useI18n();

const blogTypes = ref([...new Set(BLOG_LISTING.map((blog) => blog.type))]);

const filterType = ref<IBlogCardType | "all">("all");
const showedBlogList = computed(() => {
  if (filterType.value !== "all") {
    return BLOG_LISTING.filter((i) => i.type === filterType.value);
  }
  return BLOG_LISTING;
});

useSeoMeta({
  title: "Blog",
  description: t("blogPage.headerTitle"),
  ogImage: "/images/bloglist.webp",
});

// methods
const handleChangeTypeFilter = (type: IBlogCardType | "all") => {
  filterType.value = type;
};
</script>

<style>
.bg_img {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
