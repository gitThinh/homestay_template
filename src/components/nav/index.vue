<template>
  <div class="flex items-center justify-between p-3 lg:px-10 lg:py-5">
    <div class="space-x-3 hidden md:block ">
      <!-- logo desktop -->
      <h1 class="text-4xl font-bold">LOGO</h1>
    </div>

    <!-- Nav Sidebar Mobile -->
    <NavSideBar class="block md:hidden" />
    
    <!-- logo mobile -->
    <h1 class="block md:hidden text-4xl font-bold">LOGO</h1>
    
    <!-- login signup desktop -->
    <div class="hidden md:block space-x-3">
      <CommonButton class="!rounded-full font-semibold shadow-md" @clickBtn="() => console.log('click signup')">Sign Up</CommonButton>
      <CommonButton class="!rounded-full font-semibold shadow-md" @clickBtn="() => console.log('click login')">Log In</CommonButton>
    </div>
    
    <!-- user login mobile -->
    <div class="block md:hidden">
      <button class="p-1 rounded-full hover:bg-neutral-100">
        <NuxtIcon name="la:user-solid" class="w-8 h-8 block" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>