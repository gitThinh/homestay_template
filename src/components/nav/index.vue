<template>
  <div class="fixed z-50 top-0 w-full transition-all" :class="isScrolled ? 'bg-primary-800 bg-opacity-90 shadow-sm' : 'bg-transparent'">
    <div
      class="flex items-center justify-between p-3 lg:px-10 lg:py-5 main_container"
    >
      <div class="space-x-3 hidden md:block">
        <!-- logo desktop -->
        <NuxtLinkLocale :to="PATH_PAGE.root">
          <h1 class="text-4xl font-bold text-neutral-50">LOGO</h1>
        </NuxtLinkLocale>
      </div>

      <!-- Nav Sidebar Mobile -->
      <NavSideBar class="block md:hidden" />

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
          >Sign Up</CommonButton
        >
        <!-- redirect to login page -->
        <CommonButton
          class="!rounded-full font-semibold shadow-md"
          :href="PATH_AUTH.login"
          >Log In</CommonButton
        >
      </div>

      <!-- user login mobile -->
      <div class="block md:hidden">
        <!-- redirect to login page -->
        <NuxtLinkLocale :to="PATH_AUTH.login" class="block p-1 rounded-full btn_nude">
          <NuxtIcon name="la:user-solid" class="w-8 h-8 block text-neutral-50" />
        </NuxtLinkLocale>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PATH_AUTH, PATH_PAGE } from '~/constants/path';

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
