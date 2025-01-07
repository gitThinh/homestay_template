<template>
  <div
    class="w-2/3 md:w-1/2 lg:w-5/6 xl:w-3/4 bg-white rounded-lg p-4 flex flex-col lg:flex-row gap-5 shadow-xl border"
  >
    <div class="grid grid-cols-1 lg:grid-cols-3 flex-1 divide-y lg:divide-y-0 lg:divide-x gap-3">
      <SearchInputWhere />
      <SearchInputDate class="pt-3 lg:py-0 lg:pl-2" />
      <SearchInputPeople class="pt-3 lg:py-0 lg:pl-2" />
    </div>
    <CommonButton
      class="bg-primary-300 text-white flex flex-row items-center justify-center gap-1 !py-1.5 !px-3 hover:bg-primary-200 shadow-md"
      @click="updateParams"
    >
      <NuxtIcon
        name="radix-icons:magnifying-glass"
        class="w-5 h-5 block text-white"
      />
      <p class="lg:hidden xl:block">Search</p>
    </CommonButton>
  </div>
</template>

<script lang="ts" setup>

const router = useRouter();

const updateParams = (params: { [key: string]: string }[]) => {};
</script>
