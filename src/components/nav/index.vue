<template>
  <div
    class="hidden md:block z-20 top-0 w-full transition-all backdrop-blur-md"
    :class="`${
      isScrolled
        ? 'bg-primary-800 bg-opacity-90 shadow-sm'
        : 'bg-primary-800 bg-opacity-60'
    } ${props.isSticky ? 'sticky' : 'fixed'}`"
  >
    <div
      class="flex items-center justify-between p-3 lg:px-10 lg:py-5 main_container"
    >
      <div class="space-x-3 hidden md:block">
        <!-- logo desktop -->
        <NuxtLinkLocale :to="PATH_PAGE.root">
          <h1 class="text-4xl font-bold text-neutral-50 logo_white">LOGO</h1>
        </NuxtLinkLocale>
      </div>

      <!-- logo mobile -->
      <NuxtLinkLocale :to="PATH_PAGE.root">
        <h1 class="block md:hidden text-4xl font-bold text-neutral-50">LOGO</h1>
      </NuxtLinkLocale>

      <!-- login signup desktop -->
      <div class="hidden md:flex space-x-3 flex-row items-center">
        <NavSwitchLang />
        <!-- redirect to signUp page -->
        <CommonButton
          class="!rounded-full font-semibold shadow-md"
          :href="PATH_AUTH.register"
          >{{ t("signUp") }}</CommonButton
        >
        <!-- redirect to login page -->
        <CommonButtonPrimary
          class="!rounded-full w-max font-semibold shadow-md"
          :href="PATH_AUTH.login"
        >
          {{ t("logIn") }}
        </CommonButtonPrimary>
      </div>
    </div>
  </div>
  <NavMobile />
</template>

<script lang="ts" setup>
import { PATH_AUTH, PATH_PAGE } from "~/constants/path";
const { t } = useI18n();

const props = defineProps({
  isSticky: {
    type: Boolean,
    default: false,
  },
});

const isScrolled = ref(false);
const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

// Attach and detach scroll listener
onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
