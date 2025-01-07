<template>
  <NuxtLayout name="white-layout">
    <div
      class="bg_beach_image  main_container lg:object-contain lg:aspect-[5/2] lg:mx-20 lg:rounded-ee-xl lg:rounded-es-xl lg:w-auto"
    >
      <div class="w-full h-full flex justify-center items-center flex-col py-10 lg:py-0 lg:space-y-10">
        <div class="space-y-4 text-white text-center hidden lg:block">
          <h1 class="text-6xl font-bold">Your world of joy</h1>
          <p class="text-base">From local escapes to far-flung adventures, find what makes you happy anytime, anywhere</p>
        </div>
        <SearchMainInput />
      </div>
    </div>
    <div class="main_container">
      <NuxtLayout name="sidebar-layout" :is-left="true">
        <template #sidebar>
          <div class="">sidebar</div>
        </template>
        <template #content>
          <div class="">content</div>
        </template>
      </NuxtLayout>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: "Search page",
});
</script>

