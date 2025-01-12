<template>
  <div class="relative block">
    <HeadlessMenu as="div">
      <HeadlessMenuButton class="flex flex-row items-center px-4 py-2 gap-1 rounded-full btn_nude">
          <p>{{ t("languages") }}</p>
          <NuxtIcon name="flowbite:angle-down-outline" class="block w-5 h-5" />
      </HeadlessMenuButton>
      <HeadlessTransitionRoot
        as="template"
        enter-active="transition duration-100 ease-out"
        enter-from="transform scale-95 opacity-0"
        enter-to="transform scale-100 opacity-100"
        leave-active="transition duration-75 ease-in"
        leave-from="transform scale-100 opacity-100"
        leave-to="transform scale-95 opacity-0"
      >
        <HeadlessMenuItems
          class="absolute -bottom-2 right-0 w-max translate-y-full bg-neutral-50 border rounded-lg p-4"
        >
          <div class="flex space-x-2">
            <HeadlessMenuItem v-for="item in locales" :key="item.code">
              <button
                class="rounded-lg px-4 py-2 hover:bg-primary-50 hover:bg-opacity-70 transition-all"
                :class="locale === item.code ? 'bg-primary-50 bg-opacity-70' : ''"
                @click="setLocale(item.code)"
              >
                {{ item.name }}
              </button>
            </HeadlessMenuItem>
          </div>
        </HeadlessMenuItems>
      </HeadlessTransitionRoot>
    </HeadlessMenu>
  </div>
</template>

<script lang="ts" setup>

const { t, locale, locales, setLocale } = useI18n();
</script>
