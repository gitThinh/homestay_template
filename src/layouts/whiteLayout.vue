<template>
  <Nav :is-sticky="true" />
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
