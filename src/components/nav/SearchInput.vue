<template>
  <div
    class="md:hidden z-20 border sticky top-0 w-full transition-all shadow-sm backdrop-blur-md bg-white border-t py-3 px-3 md:px-5"
  >
  <div class="flex flex-row items-center">
    <div class="cursor-pointer mr-3" @click="router.back()">
      <NuxtIcon name="ion:arrow-back" class="h-6 w-6 min-w-5 block"/>
    </div>
    <div
      class="flex flex-1 border border-orange-400 items-center flex-row gap-2 bg-neutral-100 rounded-lg"
    >
      <NuxtIcon
        name="ph:map-pin-light"
        class="w-5 h-5 block text-neutral-900 ml-2"
      />
      <input
        type="text"
        v-model="searchQuery"
        :placeholder="t('common.location')"
        class="outline-none flex-1 bg-transparent text-neutral-800 min-w-0"
      />
      <NuxtLinkLocale
        :href="{ path: PATH_BUSINESS.search, query: { q: searchQuery } }"
        class="rounded-e-lg bg-orange-400 p-2"
      >
        <NuxtIcon name="radix-icons:magnifying-glass" class="w-5 h-5 block text-white" />
      </NuxtLinkLocale>
    </div>
  </div>
  </div>
</template>

<script lang="ts" setup>
import { PATH_BUSINESS } from "~/constants/path";
const { t } = useI18n();
const router = useRouter();
const route = useRoute();

const searchQuery = ref(route.query.q ?? '');
</script>
