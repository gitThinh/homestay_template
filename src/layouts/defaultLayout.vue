<template>
  <Nav />
  <slot></slot>
</template>

<script lang="ts" setup>
const {locale} = useI18n();
useHead({
  htmlAttrs: {
    lang: locale,
  },
})
</script>
