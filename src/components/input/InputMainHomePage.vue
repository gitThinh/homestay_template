<template>
  <div class="p-3 flex min-w-80 w-4/5 md:w-3/5 lg:w-2/5 mx-auto items-center flex-row gap-2 bg-neutral-50 rounded-full">
    <NuxtIcon name="ph:map-pin-light" class="w-6 h-6 block text-neutral-900 ml-2" />
    <input type="text" :placeholder="t('common.location')" class="outline-none bg-transparent text-neutral-800 flex-1">
    <button class="rounded-full bg-orange-400 p-2">
        <NuxtIcon name="radix-icons:magnifying-glass" class="w-7 h-7 block" />
    </button>
  </div>
</template>

<script lang="ts" setup>
const {t} = useI18n();
</script>