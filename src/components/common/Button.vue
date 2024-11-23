<template>
  <button
    class="px-4 py-2 rounded-lg border bg-neutral-50 hover:bg-neutral-100"
    v-bind="$attrs"
    @click="$emit('clickBtn', $event)"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
defineProps({
  type: {
    type: String,
    default: 'button',
  },
});

// Stop inheriting attributes into the root component element
defineOptions({ inheritAttrs: false });
</script>