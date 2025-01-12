<template>
  <div
    class="hover_image_scale w-full h-full rounded-2xl cursor-pointer overflow-hidden hover:shadow-md border transition-all first-line:bg-neutral-50"
    v-if="show === 'col'"
  >
    <div class="w-full relative h-full">
      <NuxtLinkLocale
        :to="PATH_BUSINESS.detail(props.card_data?.name || '')"
        class="h-full w-full flex flex-col"
      >
        <div class="overflow-hidden">
          <NuxtImg
            :src="props.card_data?.thumbnail"
            :alt="props.card_data?.name"
            class="w-full aspect-video object-cover"
          />
          <!-- :placeholder="[1000, 1000]" -->
        </div>
        <!-- content -->
        <div class="p-3 space-y-2 flex flex-col flex-1">
          <div class="flex-1 space-y-2">
            <h3
              class="line-clamp-2 font-semibold text-lg md:text-xl cursor-pointer hover:underline"
            >
              {{ props.card_data?.name }}
            </h3>
            <!-- address -->
            <div class="flex flex-row space-x-1 items-center">
              <NuxtIcon
                name="ph:map-pin-light"
                class="w-4 h-4 block flex-shrink-0"
              />
              <p class="text-neutral-500 line-clamp-1 sm:line-clamp-2 text-sm">
                {{ props.card_data?.address }}
              </p>
            </div>
            <!-- rating -->
            <div class="flex flex-row items-center gap-1">
              <CommonRatingStar
                :star="props?.card_data?.rating?.star"
                size="text-base"
              />
              <p class="text-neutral-600 text-sm">
                {{ props?.card_data?.rating?.star }} ({{
                  props.card_data?.rating?.count
                }})
              </p>
            </div>
          </div>
          <div class="h-px w-full bg-neutral-200"></div>
          <!-- price -->
          <div class="flex justify-between items-center">
            <div class="flex flex-row items-center gap-1">
              <NuxtIcon name="mdi-light:clock" class="text-xl" />
              <p class="md:font-semibold font-medium">
                {{ props.card_data?.price?.[0]?.time }}h
              </p>
            </div>
            <span>
              <p class="hidden sm:block">
                {{ $t("common.from") }}
              </p>
              <span class="md:font-semibold font-medium"
                >{{ props.card_data?.price?.[0]?.value }}.000đ</span
              >
            </span>
          </div>
        </div>
      </NuxtLinkLocale>
    </div>
  </div>
  <div
    class="w-full relative p-3 rounded-2xl overflow-hidden hover:shadow-md border transition-all grid grid-cols-7 gap-3"
    v-else
  >
    <div class="col-span-2 w-full aspect-square relative">
      <NuxtImg
        loading="lazy"
        :src="props.card_data?.thumbnail"
        :alt="props.card_data?.name"
        class="w-full h-full rounded-2xl object-cover"
      />
      <button
        class="absolute top-0 right-3 p-2 rounded-full bg-neutral-50 translate-y-1/2 border hover:bg-primary-50 transition-colors"
        @click="
          () => {
            isWishlist = !isWishlist;
          }
        "
      >
        <NuxtIcon
          name="mdi:heart-outline"
          v-if="!isWishlist"
          class="text-xl block"
        />
        <NuxtIcon
          name="mdi:heart"
          v-if="isWishlist"
          class="text-xl block text-primary-300"
        />
      </button>
    </div>
    <!-- content -->
    <div class="p-3 space-y-2 flex flex-row col-span-5 divide-x">
      <div class="flex-1 space-y-2">
        <NuxtLinkLocale :to="PATH_BUSINESS.detail(props.card_data?.name || '')">
          <h3
            class="line-clamp-2 font-semibold text-xl cursor-pointer hover:underline w-11/12"
          >
            {{ props.card_data?.name }}
          </h3>
        </NuxtLinkLocale>
        <!-- address -->
        <div class="flex flex-row space-x-1 items-center">
          <NuxtIcon name="ph:map-pin-light" class="w-5 h-5 block" />
          <p class="text-neutral-600">{{ props.card_data?.address }}</p>
        </div>
        <!-- rating -->
        <div class="flex flex-row items-center gap-1">
          <CommonRatingStar
            :star="props?.card_data?.rating?.star"
            size="text-base"
          />
          <p class="text-neutral-600 text-sm">
            {{ props?.card_data?.rating?.star }} ({{
              props.card_data?.rating?.count
            }})
          </p>
        </div>
      </div>
      <!-- <div class="h-px w-full bg-neutral-200"></div> -->
      <!-- price -->
      <div class="flex justify-between items-center flex-col gap-5 pl-5">
        <div class="flex-1 flex flex-col justify-between items-center">
          <div class="flex flex-row items-center gap-1">
            <NuxtIcon name="mdi-light:clock" class="text-2xl" />
            <p class="font-semibold">
              {{ props.card_data?.price?.[0]?.time }}h
            </p>
          </div>
          <p>
            {{ $t("common.from") }}
            <span class="font-semibold text-lg"
              >{{ props.card_data?.price?.[0]?.value }}.000đ</span
            >
          </p>
        </div>
        <NuxtLinkLocale :to="PATH_BUSINESS.detail(props.card_data?.id || '')">
          <CommonButton
            class="w-full border border-amber-600 text-amber-600 font-medium hover:bg-primary-50"
          >
            View detail
          </CommonButton>
        </NuxtLinkLocale>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PATH_BUSINESS } from "~/constants/path";
import type { IHomestayCard } from "~/types/homestay";
const { t } = useI18n();

const props = defineProps({
  card_data: {
    type: Object as PropType<IHomestayCard>,
    require: true,
  },
  show: {
    type: String as PropType<"row" | "col">,
    default: "col",
  },
});

const isWishlist = ref(props?.card_data?.isWishlist);
</script>
