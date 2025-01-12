<template>
  <Nav :is-sticky="true" />
  <NavSearchInput />
  <slot></slot>
  <Footer />
  <div class="bg-black">
    <FooterBottom />
  </div>
</template>

<script lang="ts" setup>
import SearchInput from '~/components/nav/SearchInput.vue';

const { locale } = useI18n();
useHead({
  htmlAttrs: {
    lang: locale,
  },
});
</script>
