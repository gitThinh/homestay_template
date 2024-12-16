<template>
  <div class="container mx-auto p-4 sm:p-10 sm:rounded-3xl" :class="bgColor">
    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps({
    bgColor: {
        type: String,
        default: "bg-primary-50"
    }
})
</script>