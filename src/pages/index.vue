<template>
  <NuxtLayout name="default-layout">
    <!-- header page -->
    <div class="min-h-dvh w-full bg_main_image">
      <div
        class="main_container h-dvh flex flex-col justify-center items-center text-neutral-50 space-y-8"
      >
        <h1
          class="text-4xl sm:text-6xl lg:text-7xl font-bold text-center w-4/5"
        >
          Choose a Country For Your Next Adventure?
        </h1>
        <!-- input search -->
        <div class="w-full">
          <InputMainHomePage />
        </div>
        <!-- or using search with categories -->
        <p class="text-neutral-100">Or browse the selected type</p>
        <div class="flex flex-row flex-wrap items-center justify-center gap-3">
          <CommonButton
            v-for="cate in CATS_DATA"
            :key="cate.id"
            class="btn_nude hover:bg-neutral-50 hover:bg-opacity-30 !rounded-full !px-3"
          >
            <div class="flex flex-row space-x-1">
              <NuxtIcon :name="cate.icon" class="w-7 h-7" />
              <p class="whitespace-nowrap">{{ cate.name }}</p>
            </div>
          </CommonButton>
        </div>
      </div>
    </div>
    <!-- section slider popular location -->
    <CommonSectionWrap title="Popular location">
      <div>
       <SliderHomeStayCard :slidesData="CARD_DATA" />
      </div>
    </CommonSectionWrap>
    
    <!-- section things to do -->
     <div class="bg-primary-50 bg-opacity-65">
      <HomeThingsToDo />
     </div>
    <!-- section slider popular location -->
    <CommonSectionWrap title="Popular location">
      <div>
        <SliderHomeStayCard :slidesData="CARD_DATA" />
      </div>
    </CommonSectionWrap>

    <!-- section things to do -->
    <div class="bg-primary-50 bg-opacity-65">
      <HomeThingsToDo />
    </div>

    <!-- section list trending location -->
    <CommonSectionWrap title="Trending Destinations">
      <HomeTrendingLocation />
    </CommonSectionWrap>

    <!-- section image and content -->
    <CommonWrapperBackgroudRadius>
      <HomeContentWithImg />
    </CommonWrapperBackgroudRadius>
    <!-- why choose us -->
     <HomeWhyChooseUs />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { CARD_DATA, CATS_DATA } from "~/data/homepage";

useSeoMeta({
  title: "Home",
  description: "Search any Homestay in Da Nang",
});
</script>
