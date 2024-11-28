<template>
  <div class="fixed top-0 w-full transition-all" :class="isScrolled ? 'bg-neutral-700 bg-opacity-80 shadow-sm' : 'bg-transparent'">
    <div
      class="flex items-center justify-between p-3 lg:px-10 lg:py-5 container"
    >
      <div class="space-x-3 hidden md:block">
        <!-- logo desktop -->
        <h1 class="text-4xl font-bold text-neutral-50">LOGO</h1>
      </div>

      <!-- Nav Sidebar Mobile -->
      <NavSideBar class="block md:hidden" />

      <!-- logo mobile -->
      <h1 class="block md:hidden text-4xl font-bold text-neutral-50">LOGO</h1>

      <!-- login signup desktop -->
      <div class="hidden md:flex space-x-3 flex-row items-center">
        <NavSwitchLang />
        <!-- redirect to signUp page -->
        <CommonButton
          class="!rounded-full font-semibold shadow-md"
          @clickBtn="() => console.log('click signup')"
          >Sign Up</CommonButton
        >
        <!-- redirect to login page -->
        <CommonButton
          class="!rounded-full font-semibold shadow-md"
          @clickBtn="() => console.log('click login')"
          >Log In</CommonButton
        >
      </div>

      <!-- user login mobile -->
      <div class="block md:hidden">
        <!-- redirect to login page -->
        <button class="p-1 rounded-full btn_nude">
          <NuxtIcon name="la:user-solid" class="w-8 h-8 block text-neutral-50" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const isScrolled = ref(false);
const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

// Attach and detach scroll listener
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
