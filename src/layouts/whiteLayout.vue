<template>
  <Nav class="!bg-primary-800 !bg-opacity-90 !shadow-sm" />
  <slot></slot>
  <Footer />
</template>

<script lang="ts" setup>
const { locale } = useI18n();
useHead({
  htmlAttrs: {
    lang: locale,
  },
});
</script>
