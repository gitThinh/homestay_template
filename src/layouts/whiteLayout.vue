<template>
  <Nav :is-sticky="true" />
  <slot></slot>
  <Footer />
  <div class="bg-black">
    <FooterBottom />
  </div>
</template>

<script lang="ts" setup>
const { locale } = useI18n();
useHead({
  htmlAttrs: {
    lang: locale,
  },
});
</script>
