<template>
  <div class="bg-primary-800 text-neutral-50 py-16">
    <div class="container mx-auto px-3 grid grid-cols-12 space-y-10 md:gap-10 md:space-y-0">
      <div class="space-y-3 col-span-12 lg:col-span-4 xl:col-span-5 ">
        <h3 class="font-semibold text-2xl text-white capitalize">{{ t("common.contact") }}</h3>
        <div class="w-10 h-px bg-primary-50 rounded-full"></div>
        <div class="space-y-2">
          <div class="space-x-2 flex flex-row items-center">
            <NuxtIcon name="mynaui:location" class="w-6 h-6 inline-block" />
            <a
              href="#"
              class="hover:text-blue-600 transition-colors"
              >910A Ngô Quyền, An Hải, Sơn Trà, Đà Nẵng 550000, Việt Nam</a
            >
          </div>
          <div class="space-x-2 flex flex-row items-center">
            <NuxtIcon name="ic:round-phone" class="w-6 h-6 inline-block" />
            <a
              href="#"
              class="hover:text-blue-600 transition-colors"
              >0123456xxx</a
            >
          </div>
          <div class="space-x-2 flex flex-row items-center">
            <NuxtIcon name="ion:mail-outline" class="w-6 h-6 inline-block" />
            <a
              href="#"
              class="hover:text-blue-600 transition-colors"
              >Contact_abc@gmail.com</a
            >
          </div>
        </div>
        <div class="w-full h-px bg-primary-50 rounded-full"></div>
        <!-- social -->
        <div class="flex flex-row gap-4 items-center justify-between">
          <h3 class="font-medium text-xl capitalize">{{ t("footer.followUs") }}</h3>
          <div class="space-x-4">
            <a
              href="#"
              class="hover:text-blue-600 transition-colors"
            >
              <NuxtIcon
                name="icon-park-outline:facebook-one"
                class="w-6 h-6 inline-block"
              />
            </a>
            <a
              href="#"
              class="hover:text-blue-600 transition-colors"
            >
              <NuxtIcon name="ri:twitter-x-line" class="w-6 h-6 inline-block" />
            </a>
            <a
              href="#"
              class="hover:text-blue-600 transition-colors"
            >
              <NuxtIcon
                name="akar-icons:instagram-fill"
                class="w-6 h-6 inline-block"
              />
            </a>
            <a
              href="#"
              class="hover:text-blue-600 transition-colors"
            >
              <NuxtIcon name="jam:linkedin" class="w-6 h-6 inline-block" />
            </a>
          </div>
        </div>
      </div>
      <div
        class="space-y-3 col-span-6 sm:col-span-3 lg:col-span-2"
        v-for="data in FOOTER_DATA"
        :key="data.id"
      >
        <h3 class="font-semibold text-2xl text-white capitalize">{{ data.title }}</h3>
        <div class="space-y-2">
          <a :href="field.url" v-for="field in data.fields" :key="field.id" class="block hover:text-blue-600 transition-colors">
            {{ field.content }}
          </a>
        </div>
      </div>
      <div class="space-y-3 col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3">
        <h3 class="font-semibold text-2xl text-white capitalize">{{ t("footer.newsLetter") }}</h3>
        <div class="flex flex-row items-center gap-2 p-4 bg-neutral-50 rounded-xl text-neutral-800">
          <input type="text" class="outline-none bg-transparent flex-1" :placeholder="t('common.yourEmail')">
          <button class="font-medium">{{ t("common.send") }}</button>
        </div>
        <p>{{ t("footer.subToFree") }}</p>
        <div class="w-full h-px bg-primary-50 rounded-full"></div>
        <h3 class="font-semibold text-2xl text-white capitalize">{{ t("footer.mobileApp") }}</h3>
        <div class="flex flex-row items-center gap-2">
          <NuxtIcon name="ri:apple-line" class="w-6 h-6 inline-block" />
          <a href="#" class="hover:text-blue-600 transition-colors">
            IOS App
          </a>
        </div>
        <div class="flex flex-row items-center gap-2">
          <NuxtIcon name="ri:android-line" class="w-6 h-6 inline-block" />
          <a href="#" class="hover:text-blue-600 transition-colors">
            Android App
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const {t} = useI18n();
const FOOTER_DATA = [
  {
    id: 1,
    title: t("footer.aboutUs"),
    fields: [
      {
        id: 1,
        content: t("footer.info"),
        url: "#",
      },
      {
        id: 2,
        content: t("footer.termAndPolicy"),
        url: "#",
      },
      {
        id: 3,
        content: t("footer.siteMap"),
        url: "#",
      },
      {
        id: 4,
        content: t("footer.contactUs"),
        url: "#",
      },
      {
        id: 5,
        content: t("footer.dataPolicy"),
        url: "#",
      },
    ],
  },
  {
    id: 2,
    title: t("common.support"),
    fields: [
      {
        id: 1,
        content: t("footer.howItWork"),
        url: "#",
      },
      {
        id: 2,
        content: t("footer.helpCenter"),
        url: "#",
      },
      {
        id: 3,
        content: t("footer.chatWithUs"),
        url: "#",
      },
    ],
  },
];
</script>
