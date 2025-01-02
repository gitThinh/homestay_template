<template>
  <div class="flex items-center">
    <button
      class="flex gap-2 items-center px-3 py-1.5 rounded-xl hover:bg-neutral-100"
    >
      <NuxtIcon name="solar:share-outline" class="w-6 h-6 block" />
      <span class="text-sm font-medium">{{ $t("common.share") }}</span>
    </button>
    <button
      @click="like = !like"
      class="flex gap-2 items-center px-3 py-1.5 rounded-xl hover:bg-neutral-100"
    >
      <NuxtIcon
        :name="like ? 'solar:heart-bold' : 'solar:heart-linear'"
        class="w-6 h-6 block"
      />
      <span class="text-sm font-medium">{{ like ? $t("common.unlike") : $t("common.like") }}</span>
    </button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  like: {
    type: Boolean,
    default: false,
  },
});
const like = ref(props.like);
</script>
