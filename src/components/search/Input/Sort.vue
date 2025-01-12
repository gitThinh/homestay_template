<template>
  <HeadlessListbox v-model="selectedSort">
    <div class="relative">
      <HeadlessListboxButton class="border px-3 py-1.5 rounded-lg shadow-sm">
        <span class="flex items-center gap-1">
          <p>{{ $t("searchPage.sortBy") }}: {{ selectedSort.name }}</p>
          <NuxtIcon
            name="flowbite:angle-down-outline"
            class="h-5 w-5 text-neutral-400 transition-all"
          />
        </span>
      </HeadlessListboxButton>
      <HeadlessTransitionRoot
        as="template"
        enter-active="transition duration-100 ease-out"
        enter-from="transform scale-95 opacity-0"
        enter-to="transform scale-100 opacity-100"
        leave-active="transition duration-75 ease-in"
        leave-from="transform scale-100 opacity-100"
        leave-to="transform scale-95 opacity-0"
      >
        <HeadlessListboxOptions
          class="absolute z-10 bg-white -bottom-1 translate-y-full right-0 w-full py-3 px-2 border shadow-md rounded-lg space-y-2"
        >
          <HeadlessListboxOption
            v-for="(item, index) in sortType"
            :key="item.id"
            :value="item.name"
            as="template"
            @click="handleSelectSort(index)"
          >
            <div
              class="cursor-pointer hover:bg-neutral-50 rounded-lg px-2 py-1"
              :class="[{'bg-neutral-50' :item.id === selectedSort.id}]"
            >
              {{ item.name }}
            </div>
          </HeadlessListboxOption>
        </HeadlessListboxOptions>
      </HeadlessTransitionRoot>
    </div>
  </HeadlessListbox>
</template>

<script lang="ts" setup>
const {t} = useI18n();
// data
const sortType = [
  {
    id: generateIds("sort_"),
    value: "type1",
    name: `${t("common.type")} 1`,
  },
  {
    id: generateIds("sort_"),
    value: "type2",
    name: `${t("common.type")} 2`,
  },
  {
    id: generateIds("sort_"),
    value: "type3",
    name: `${t("common.type")} 3`,
  },
  {
    id: generateIds("sort_"),
    value: "type4",
    name: `${t("common.type")} 4`,
  },
];

const router = useRouter();
const route = useRoute();
const defaultSort = route.query?.by ? String(route.query?.by) : ""

// state
const selectedSort = ref(sortType.find(item => item.value === defaultSort) ?? sortType[0]);

// methods
const handleSelectSort = (index: number) => {
  selectedSort.value = sortType[index];
  const query = { ...router.currentRoute.value.query };
  query["by"] = sortType[index].value;
  router.replace({query})
};
</script>

<style></style>
