<template>
  <Nav />
  <slot></slot>
  <Footer />
  <div class="bg-black">
    <FooterBottom />
  </div>
  <link rel="preload" as="image" href="/images/homestay.webp">
</template>

<script lang="ts" setup>
const {locale} = useI18n();
useHead({
  htmlAttrs: {
    lang: locale,
  },
})
</script>
