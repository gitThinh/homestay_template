<template>
  <div class="w-full">
    <NuxtLinkLocale
      :to="navData?.url ?? '#'"
      :target="navData.isBlank ? '_blank' : '_self'"
      v-if="!children?.length"
      class="cursor-pointer text-lg font-semibold capitalize py-2 block"
      >{{ navData.title }}
    </NuxtLinkLocale>
    <HeadlessDisclosure v-slot="{ open }" v-else>
      <HeadlessDisclosureButton
        class="flex w-full flex-row justify-between items-center py-2"
      >
        <p class="text-lg font-semibold capitalize">{{ navData.title }}</p>
        <NuxtIcon
          name="flowbite:angle-down-outline"
          class="h-5 w-5 text-neutral-400 transition-all"
          :class="open ? 'rotate-180' : 'rotate-0'"
        />
      </HeadlessDisclosureButton>
      <HeadlessTransitionRoot
        as="template"
        enter-active="transition !duration-1000 ease-out"
        enter-from="max-h-0"
        enter-to="max-h-none"
        leave-active="transition !duration-1000 ease-in"
        leave-from="max-h-none"
        leave-to="max-h-0"
      >
        <HeadlessDisclosurePanel class="pl-4 divide-y">
          <div class="py-2" v-for="child in children" :key="child.id">
            <NuxtLinkLocale
              :to="child.url ?? '/'"
              :target="navData.isBlank ? '_blank' : '_self'"
            >
              <p class="text-base font-medium capitalize text-neutral-600">
                {{ child.name }}
              </p>
            </NuxtLinkLocale>
          </div>
        </HeadlessDisclosurePanel>
      </HeadlessTransitionRoot>
    </HeadlessDisclosure>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  navData: {
    title: string;
    url?: string;
    isBlank?: boolean;
  };
  children?: { id: string; url: string; name: string; isBlank?: boolean }[];
}>();
</script>
