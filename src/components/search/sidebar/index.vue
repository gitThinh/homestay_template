<template>
  <div class="w-full px-4 py-6 border rounded-xl shadow-sm space-y-3">
    <HeadlessDisclosure
      v-slot="{ open }"
      v-for="filter in filterData"
      :key="filter.id"
    >
      <HeadlessDisclosureButton :class="['w-full transition-colors']">
        <div class="flex w-full justify-between gap-1 items-center">
          <p class="font-medium text-lg capitalize">
            {{ $t(`searchPage.${filter.mainTitle}`) }}
          </p>
          <NuxtIcon
            name="flowbite:angle-down-outline"
            class="h-5 w-5 text-primary-400 transition-all"
            :class="open ? 'rotate-180' : 'rotate-0'"
          />
        </div>
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
        <HeadlessDisclosurePanel
          v-if="filter.mainTitle !== 'rating'"
          class="space-y-2"
        >
          <div class="px-2 w-full" v-for="item in filter.items" :key="item.id">
            <InputCheckbox
              :default-check="selectedFilters?.[filter.mainTitle as FilterType].includes(item.value)"
              :value="item.value"
              @change="
                updateSelectedFilter(
                  $event,
                  item.value,
                  filter.mainTitle as FilterType
                )
              "
            >
              <p>{{ item.name }}</p>
            </InputCheckbox>
          </div>
        </HeadlessDisclosurePanel>
        <HeadlessDisclosurePanel v-else class="space-y-2">
          <div class="px-2" v-for="item in filter.items" :key="item.id">
            <InputCheckbox
              :default-check="selectedFilters?.[filter.mainTitle as FilterType].includes(item.value)"
              :value="item.value"
              @change="
                updateSelectedFilter(
                  $event,
                  item.value,
                  filter.mainTitle as FilterType
                )
              "
            >
              <CommonRatingStar
                :star="Number(item.name)"
                :show-empty-star="false"
                size="w-4 h-4"
                class="gap-1"
              />
            </InputCheckbox>
          </div>
        </HeadlessDisclosurePanel>
      </HeadlessTransitionRoot>
      <div class="w-full h-px bg-neutral-200 last:hidden"></div>
    </HeadlessDisclosure>
    <!-- <div class="flex justify-end">
      <CommonButton class="w-max border border-red-500">
        <p class="font-medium text-red-500">
          Clear
        </p>
      </CommonButton>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
const route = useRoute();

const filterData = [
  {
    id: generateIds("filters_"),
    mainTitle: "type",
    items: [
      {
        id: generateIds("filter_"),
        value: "homestay",
        name: "Homestay",
      },
      {
        id: generateIds("filter_"),
        value: "hotel",
        name: "Hotel",
      },
      {
        id: generateIds("filter_"),
        value: "villa",
        name: "Villa",
      },
    ],
  },
  {
    id: generateIds("filters_"),
    mainTitle: "rating",
    items: [
      {
        id: generateIds("filter_"),
        value: "5star",
        name: 5,
      },
      {
        id: generateIds("filter_"),
        value: "4star",
        name: 4,
      },
      {
        id: generateIds("filter_"),
        value: "3star",
        name: 3,
      },
      {
        id: generateIds("filter_"),
        value: "2star",
        name: 2,
      },
      {
        id: generateIds("filter_"),
        value: "1star",
        name: 1,
      },
    ],
  },
  {
    id: generateIds("filters_"),
    mainTitle: "location",
    items: [
      {
        id: generateIds("filter_"),
        name: "Quận Liên Chiểu",
        value: "lienchieu",
      },
      { id: generateIds("filter_"), name: "Quận Hải Châu", value: "haichau" },
      {
        id: generateIds("filter_"),
        name: "Quận Ngũ Hành Sơn",
        value: "nguhanhson",
      },
      { id: generateIds("filter_"), name: "Quận Sơn Trà", value: "sontra" },
      { id: generateIds("filter_"), name: "Quận Cẩm Lệ", value: "camle" },
      { id: generateIds("filter_"), name: "Quận Thanh Khê", value: "thanhkhe" },
    ],
  },
];

const selectedFilters: {
  type: string[];
  rating: string[];
  location: string[];
} = {
  type: route.query?.type ? String(route.query?.type).split(",") : [],
  rating: route.query?.rating ? String(route.query?.rating).split(",") : [],
  location: route.query?.location
    ? String(route.query?.location).split(",")
    : [],
};

type FilterType = "type" | "rating" | "location";

const updateSelectedFilter = (
  event: any,
  value: string,
  mainTitle: FilterType
) => {
  if (event.target.checked) {
    if (!selectedFilters?.[mainTitle].includes(value)) {
      selectedFilters[mainTitle].push(value);
    }
  } else {
    selectedFilters[mainTitle] = selectedFilters[mainTitle].filter(
      (item) => item !== value
    );
  }

  // handle change query url
  const query = { ...router.currentRoute.value.query };
  if (selectedFilters[mainTitle].length > 0) {
    query[mainTitle] = selectedFilters[mainTitle].join(",");
  } else {
    delete query[mainTitle];
  }

  router.push({ query });
};

watch([selectedFilters], () => {
  console.log(selectedFilters);
});
</script>

<style></style>
