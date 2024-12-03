<template>
  <Nav />
  <slot></slot>
  <Footer />
</template>

<script lang="ts" setup>
const {locale} = useI18n();
useHead({
  htmlAttrs: {
    lang: locale,
  },
})
</script>
