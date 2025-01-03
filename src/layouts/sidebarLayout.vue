<template>
  <div class="grid grid-cols-12 gap-5">
    <div :class="isLeft ? 'order-2 col-span-12 lg:col-span-8' : 'col-span-12 lg:col-span-8'">
      <slot name="content"></slot>
    </div>
    <div :class="isLeft ? 'order-1 hidden lg:block col-span-4 sticky top-14 h-max' : 'hidden lg:block col-span-4 sticky top-14 h-max'">
      <slot name="sidebar"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  isLeft: {
    type: Boolean,
    default: false,
  },
});
</script>
