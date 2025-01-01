<template>
  <div class="container mx-auto py-16 space-y-8 px-3">
    <!-- header section -->
    <div
      class="flex items-center"
      :class="props.position === 'left' ? 'justify-between' : 'justify-center'"
    >
      <div
        :class="props.position === 'left' ? 'text-left' : 'text-center'"
        class="space-y-3"
      >
        <h2 class="font-bold text-4xl text-primary-500" :class="titleClass">
          {{ props.title }}
        </h2>
        <p class="text-primary-300 text-lg" v-if="props.desc">
          {{ props.desc }}
        </p>
        <div class="w-16 h-1 bg-primary-200 rounded-full" v-else></div>
      </div>
      <!-- see more left -->
      <NuxtLink
        :to="seeMore"
        v-if="seeMore && props.position === 'left'"
        class="flex items-center hover:underline"
      >
        <span>{{ $t("common.seeMore") }}</span>
        <NuxtIcon
          name="iconoir:arrow-right"
          class="ml-1 text-sm inline-block"
        />
      </NuxtLink>
    </div>
    <slot />
    <!-- see more center -->
    <div class="mx-auto w-max">
      <NuxtLink
        :to="seeMore"
        v-if="seeMore && props.position === 'center'"
        class=""
      >
        <CommonButton class="!bg-primary-400 text-neutral-50 !rounded-full font-medium text-lg border hover:!bg-primary-300">See more</CommonButton>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  titleClass: String,
  desc: String,
  position: {
    type: String as PropType<"center" | "left">,
    default: "left",
  },
  seeMore: String,
});
</script>
