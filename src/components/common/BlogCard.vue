<template>
  <div
    class="shadow_sm_full w-full p-4 h-full rounded-3xl cursor-pointer overflow-hidden border border-neutral-200 transition-all"
  >
    <!-- v-if="show === 'col'" -->
    <div class="w-full relative h-full">
      <NuxtLinkLocale
        :to="PATH_PAGE.blogDetail(card_data?.id || '')"
        class="h-full w-full flex flex-col space-y-4"
      >
        <div class="overflow-hidden relative rounded-2xl">
          <NuxtImg
            :src="card_data?.thumbnail"
            :alt="card_data?.title"
            class="w-full aspect-video object-cover"
          />
          <CommonBadget
            :border="true"
            color="purple"
            class="absolute top-4 left-4 capitalize"
          >
            {{ $t(`blogPage.${card_data?.type}`) }}
          </CommonBadget>
        </div>
        <!-- content -->
        <div class="px-2 space-y-2 flex flex-col flex-1">
          <div class="flex-1 space-y-2">
            <h3
              class="line-clamp-2 font-bold sm:text-lg cursor-pointer text-neutral-500"
            >
              {{ card_data?.title }}
            </h3>
            <!-- description -->
            <div class="flex flex-row items-center">
              <p class="text-neutral-500 line-clamp-2 text-sm">
                {{ card_data?.description }}
              </p>
            </div>
          </div>
        </div>
        <!-- date upload blog -->
         <div class="">
        <CommonBadget :border="false" color="blue" class="rounded-md">{{
          converDate(card_data?.date || "", locale)
        }}</CommonBadget>

         </div>
      </NuxtLinkLocale>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PATH_PAGE } from "~/constants/path";
import type { IBlogCard } from "~/types/blog";

const { locale } = useI18n();

defineProps({
  card_data: {
    type: Object as PropType<IBlogCard>,
    required: true,
  },
});

</script>

<style>
.shadow_sm_full {
  box-shadow: 0 0 4px #d6dade;
}
.shadow_sm_full:hover {
  box-shadow: 0 2px 5px #c0c6cb;
}
</style>
