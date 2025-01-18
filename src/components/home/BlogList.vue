<template>
  <div class="grid gap-3 lg:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <!-- show only 3 blog -->
    <CommonBlogCard
      :card_data="blog"
      :key="blog.id"
      v-for="blog in BLOG_LISTING.slice(0, 3)"
    />
  </div>
</template>

<script lang="ts" setup>
import { BLOG_LISTING } from "~/data/blog";

const { t } = useI18n();
</script>

<style>
.backgroundImg {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
