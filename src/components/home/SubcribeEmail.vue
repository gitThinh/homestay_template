<template>
  <div
    class="container mx-auto py-16 px-3 flex flex-row justify-between items-center"
  >
    <div class="w-full md:w-1/2 mx-auto lg:mx-0 xl:w-2/5 space-y-10">
      <h3 class="font-bold text-3xl">
        {{ t("homepage.subToMailList") }}
      </h3>
      <p>{{ t("homepage.loremIpsum") }}</p>
      <div class="input p-4 bg-primary-500 bg-opacity-10 rounded-lg flex">
        <input
          type="text"
          :placeholder="t('common.yourEmail')"
          class="bg-transparent outline-none flex-1"
        />
        <button
          class="bg-primary-300 text-white py-3 px-6 uppercase font-semibold rounded-lg hover:bg-primary-200 transition-all"
        >
          {{ t("common.send") }}
        </button>
      </div>
    </div>
    <div class="hidden md:block w-1/3 xl:w-2/5">
      <NuxtImg
        src="/images/pic-send-mail.png"
        class="object-cover"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const {t} = useI18n();
</script>
