<template>
  <div class="relative block">
    <HeadlessMenu as="div">
      <HeadlessMenuButton
        :class="[buttonClass, 'flex flex-row items-center px-4 py-2 gap-1 rounded-full btn_nude']"
      >
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
          :class="[positionMenu[props.position] ,'absolute w-max bg-neutral-50 border rounded-lg p-4']"
        >
          <div class="flex flex-col gap-2 md:flex-row md:space-x-2">
            <HeadlessMenuItem v-for="item in locales" :key="item.code">
              <button
                class="rounded-lg px-4 py-2 hover:bg-neutral-100 hover:bg-opacity-70 transition-all"
                :class="
                  locale === item.code ? 'bg-neutral-100 bg-opacity-70' : ''
                "
                @click="setLocale(item.code)"
              >
                <span class="flex items-center gap-1">
                  <NuxtImg
                    :src="item.flag"
                    class="w-8 aspect-video rounded-md overflow-hidden"
                  />
                  <p class="text-sm font-medium text-neutral-800">
                    {{ item.name }}
                  </p>
                </span>
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

type TPositionMenu = "topleft" | "topright" | "bottomleft" | "bottomright";

const props = defineProps({
  buttonClass: {
    type: String,
    default: "",
  },
  position: {
    type: String as () => TPositionMenu,
    default: "bottomright",
  },
});

const positionMenu: Record<TPositionMenu, string> = {
  topleft: "-top-2 left-0 -translate-y-full",
  topright: "-top-2 right-0 -translate-y-full",
  bottomleft: "-bottom-2 left-0 translate-y-full",
  bottomright: "-bottom-2 right-0 translate-y-full",
};
</script>
