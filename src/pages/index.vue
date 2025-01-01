<template>
  <NuxtLayout name="bg-img-layout">
    <!-- header page -->
    <div class="min-h-dvh w-full bg_main_image">
      <div
        class="main_container h-dvh flex flex-col justify-center items-center text-neutral-50 space-y-8"
      >
        <h1
          class="text-4xl sm:text-6xl lg:text-7xl !leading-tight font-bold text-center w-4/5"
        >
          {{ t("homepage.chooseCountry") }}
        </h1>
        <!-- input search -->
        <div class="w-full">
          <InputMainHomePage />
        </div>
        <!-- or using search with categories -->
        <p class="text-neutral-100">{{ t("homepage.orSelectType") }}</p>
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
    <CommonSectionWrap :title="t('homepage.popularLocation')">
      <div>
        <SliderHomeStayCard :slidesData="CARD_DATA" />
      </div>
    </CommonSectionWrap>

    <!-- section things to do -->
    <div class="bg-primary-50 bg-opacity-65">
      <HomeThingsToDo />
    </div>

    <!-- section list trending location -->
    <CommonSectionWrap :title="t('homepage.trendDestinations')">
      <HomeTrendingLocation />
    </CommonSectionWrap>

    <!-- section image and content -->
    <CommonWrapperBackgroudRadius>
      <HomeContentWithImg />
    </CommonWrapperBackgroudRadius>
    <!-- why choose us -->
     <HomeWhyChooseUs />

     <!-- customer reviews -->
    <div class="bg-primary-50 bg-opacity-65">
      <CommonSectionWrap :title="t('homepage.customerSaying')" titleClass="!text-3xl" seeMore="#">
        <HomeCustomerReview />
      </CommonSectionWrap>
    </div>

    <!-- Section event/sales -->
    <HomeEventSales />

    <!-- Section send mail -->
    <div class="section_sendmail">
      <HomeSubcribeEmail />
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { CARD_DATA } from "~/data/homepage";
const {t} = useI18n();


useSeoMeta({
  title: t("homeSeo.title"),
  description: t("homeSeo.desc"),
});

const CATS_DATA = [
  {
    id: 1,
    name: t("categories.kitchen"),
    icon: "guidance:kitchen",
  },
  {
    id: 2,
    name: t("categories.barAndLou"),
    icon: "la:glass-martini",
  },
  {
    id: 3,
    name: t("categories.projector"),
    icon: "solar:projector-outline",
  },
  {
    id: 4,
    name: t("categories.boardGame"),
    icon: "fluent:board-games-20-regular",
  },
];
</script>

<style>
.section_sendmail {
  background-image: url('https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2Fcta%2F2%2Fbg.png&w=1920&q=75');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
