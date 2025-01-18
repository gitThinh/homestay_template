<template>
  <button class="outline-none btn_nude rounded-full" @click="handleOpenMenu">
    <div class="flex flex-col justify-center items-center">
      <NuxtIcon name="tabler:menu-3" class="w-6 h-6 block" :class="iconColor" />
      <span class="capitalize font-medium text-[10px]" :class="iconColor">{{
        $t("nav.menu")
      }}</span>
    </div>
  </button>
  <HeadlessTransitionRoot :show="isShowMenu" appear as="template">
    <HeadlessDialog
      as="div"
      class="fixed md:hidden h-dvh w-full overflow-y-auto z-40"
      @close="handleCloseMenu"
    >
      <HeadlessDialogOverlay
        class="fixed inset-0 z-0 bg-neutral-600 bg-opacity-30"
      />
      <HeadlessTransitionChild
        as="template"
        enter="transition duration-800 ease-out"
        :enter-from="
          sideMenu === 'left'
            ? '-translate-x-full opacity-30'
            : 'translate-x-full opacity-30'
        "
        :enter-to="
          sideMenu === 'left'
            ? 'translate-x-0 opacity-100'
            : 'translate-x-0 opacity-100'
        "
        leave="transition duration-800 ease-in"
        :leave-from="
          sideMenu === 'left'
            ? 'translate-x-0 opacity-100'
            : 'translate-x-0 opacity-100'
        "
        :leave-to="
          sideMenu === 'left'
            ? '-translate-x-full opacity-30'
            : 'translate-x-full opacity-30'
        "
      >
        <HeadlessDialogPanel
          class="fixed z-10 bottom-0 h-dvh w-5/6 sm:w-4/5 p-2 sm:p-4 rounded-s-lg overflow-hidden bg-neutral-50 shadow-lg ring-1 ring-black/5"
          :class="sideMenu === 'left' ? 'left-0' : 'right-0'"
        >
          <div class="flex flex-col h-full gap-5">
            <!-- close button and logo company -->
            <div class="sticky top-0 flex flex-row justify-between items-start">
              <button
                class="rounded-full p-1 hover:bg-neutral-100"
                @click="handleCloseMenu"
              >
                <NuxtIcon name="meteor-icons:xmark" class="w-6 h-6 block" />
              </button>
              <h1 class="text-4xl font-bold logo_black cursor-default">LOGO</h1>
            </div>
            <!-- main nav -->
            <div
              class="flex-1 flex w-full flex-col justify-between overflow-y-auto"
            >
              <div class="flex-1 px-3 py-3 sm:py-5 divide-y">
                <NavChildrenNavMobile
                  v-for="data in NAV_DATA"
                  :key="data.id"
                  :nav-data="{
                    title: `${data.name}`,
                    url: `${data.url}`,
                    isBlank: data.isBlank,
                  }"
                  :children="data.children"
                />
              </div>
              <div class="space-y-2 px-3">
                <div class="space-x-2 flex flex-row items-center">
                  <span class="font-medium"> Hotline: </span>
                  <a href="#" class="hover:text-blue-600 transition-colors"
                    >0123456xxx</a
                  >
                </div>
                <div class="space-x-2 flex flex-row items-center">
                  <span class="font-medium"> Email: </span>
                  <a
                    href="#"
                    class="hover:text-blue-600 line-clamp-1 transition-colors"
                    >Contact_abc@gmail.com</a
                  >
                </div>
              </div>
            </div>
            <!-- change language and login logout -->
            <div
              class="flex flex-col-reverse gap-2 min-[426px]:flex-row justify-between items-end min-[426px]:items-center"
            >
              <CommonButtonPrimary
                :href="PATH_AUTH.login"
                class="font-medium capitalize w-full min-[426px]:w-max !px-10 !py-3"
              >
                {{ t("logout") }}
              </CommonButtonPrimary>
              <NavSwitchLang
                position="topright"
                button-class="!text-black border shadow-sm rounded-lg hover:!bg-neutral-100"
              />
            </div>
          </div>
        </HeadlessDialogPanel>
      </HeadlessTransitionChild>
    </HeadlessDialog>
  </HeadlessTransitionRoot>
</template>

<script lang="ts" setup>
import { PATH_AUTH, PATH_BUSINESS, PATH_PAGE } from "~/constants/path";
import type { INav } from "~/types";

defineProps({
  iconColor: {
    type: String,
    default: "text-neutral-50",
  },
  sideMenu: {
    type: String as () => "left" | "right",
    default: "left",
  },
});

const { t } = useI18n();

//data
const NAV_DATA: INav[] = [
  // { id: generateIds("nav_"), name: t("footer.aboutUs"), url: "#" },
  { id: generateIds("nav_"), name: t("blogPage.blog"), url: PATH_PAGE.blogList },
  {
    id: generateIds("nav_"),
    name: t("contactPage.contact"),
    url: PATH_PAGE.contact,
  },
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
      {
        id: generateIds("navchild_"),
        name: "Blog",
        url: PATH_PAGE.blogDetail("blog-detail"),
      },
      {
        id: generateIds("navchild_"),
        name: t("nav.blogList"),
        url: PATH_PAGE.blogList,
      },
      {
        id: generateIds("navchild_"),
        name: t("error.title"),
        url: "/notfound",
      },
    ],
  },
  {
    id: generateIds("nav_"),
    name: t("nav.sourceCode"),
    url: "https://github.com/gitThinh/homestay_template",
    isBlank: true,
  },
  // { id: generateIds("nav_"), name: t("nav.setting"), url: "#" },
];

const isShowMenu = ref(false);

const handleCloseMenu = () => {
  isShowMenu.value = false;
};
const handleOpenMenu = () => {
  isShowMenu.value = true;
};
</script>
