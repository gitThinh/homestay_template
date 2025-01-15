<template>
  <NuxtLayout name="search-nav-layout">
    <div
      class="bg_beach_image hidden md:block main_container lg:object-contain lg:aspect-[5/2] lg:mx-20 lg:rounded-ee-xl lg:rounded-es-xl lg:w-auto"
    >
      <div
        class="w-full h-full flex justify-center items-center flex-col py-10 lg:py-0 lg:space-y-10"
      >
        <div class="space-y-4 text-white text-center hidden lg:block">
          <h1 class="text-6xl font-bold">{{ $t("searchPage.title") }}</h1>
          <p class="text-base">{{ $t("searchPage.description") }}</p>
        </div>
        <!-- <SearchMainInput /> -->
         <InputMainHomePage />
      </div>
    </div>
    <div class="main_container my-8 w-full grid grid-cols-12 gap-5 lg:gap-8">
      <div class="col-span-12 lg:col-span-3 h-max">
        <SearchSidebar class="hidden lg:block" />
        <SearchSidebarMobile class="lg:hidden" />
      </div>
      <div class="col-span-12 lg:col-span-9 space-y-6">
        <div class="flex justify-between items-center px-1">
          <p>11 {{ $t("common.results") }}</p>
          <SearchInputSort />
        </div>
        <SearchListing />
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: "Search page",
});
</script>
