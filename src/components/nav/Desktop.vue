<template>
  <div class="flex flex-row">
    <div v-for="nav in NAV_DATA" :key="nav.id">
      <NuxtLinkLocale
        v-if="!nav.children"
        :to="nav.url"
        :target="nav.isBlank ? '_blank' : '_self'"
        class="px-4 py-2 block text-neutral-50 font-semibold text-lg cursor-pointer"
      >
        {{ nav.name }}
      </NuxtLinkLocale>
      <div class="relative nav_dropdown" v-else>
        <button
          class="px-4 py-2 capitalize flex flex-row items-center gap-1 text-neutral-50 font-semibold text-lg"
        >
          <span>{{ nav.name }}</span>
          <NuxtIcon name="flowbite:angle-down-outline" class="block w-4 h-4" />
        </button>
        <div
          class="nav_dropdown_menu border w-max hidden p-3 rounded-lg absolute transition-all top-full left-0 bg-white grid-cols-1"
        >
          <NuxtLinkLocale
            :to="child.url"
            :target="child.isBlank ? '_blank' : '_self'"
            class="px-3 py-1.5 block font-medium hover:underline hover:text-primary-400 cursor-pointer"
            v-for="child in nav.children"
          >
            <span>{{ child.name }}</span>
          </NuxtLinkLocale>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PATH_BUSINESS, PATH_PAGE } from "~/constants/path";
import type { INav } from "~/types";

const { t } = useI18n();
const NAV_DATA: INav[] = [
  // { id: generateIds("nav_"), name: t("footer.aboutUs"), url: "#" },
  {
    id: generateIds("nav_"),
    name: t("nav.pages"),
    children: [
      {
        id: generateIds("navchild_"),
        name: t("nav.search"),
        url: PATH_BUSINESS.search,
      },
      {
        id: generateIds("navchild_"),
        name: "Homestay",
        url: PATH_BUSINESS.detail("ids"),
      },
      { id: generateIds("navchild_"), name: "Blog", url: "/blog" },
      {
        id: generateIds("navchild_"),
        name: t("error.title"),
        url: "/notfound",
      },
    ],
  },  
  {
    id: generateIds("nav_"),
    name: t("contactPage.contact"),
    url: PATH_PAGE.contact,
  },
  {
    id: generateIds("nav_"),
    name: t("nav.sourceCode"),
    url: "https://github.com/gitThinh/homestay_template",
    isBlank: true,
  },
  // { id: generateIds("nav_"), name: t("nav.setting"), url: "#" },
];
</script>

<style scoped>
.nav_dropdown:hover .nav_dropdown_menu {
  display: grid;
}
</style>
