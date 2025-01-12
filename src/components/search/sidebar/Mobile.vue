<template>
  <div>
    <CommonButton
      class="border border-primary-300 flex items-center gap-1 text-primary-400"
      @click="handleOpenFilters"
    >
      <span class="capitalize">{{ $t("searchPage.filter") }}</span>
      <NuxtIcon name="hugeicons:filter" class="w-5 h-5 block" />
    </CommonButton>
    <HeadlessDialog
      :open="showFilters"
      class="fixed inset-0 z-40 md:hidden"
      @close="handleCloseFilters"
    >
      <HeadlessDialogOverlay class="w-full h-full bg-neutral-600 opacity-30" />
      <HeadlessDialogPanel
        as="div"
        class="absolute flex flex-col h-dvh overflow-y-auto top-0 bottom-0 right-0 w-5/6 bg-neutral-50"
      >
        <div class="sticky top-0 left-0 w-full shadow-sm p-3 bg-neutral-50">
          <div class="flex justify-between items-center">
            <NuxtIcon
              name="meteor-icons:xmark"
              class="w-6 h-6 xl:h-8 xl:w-8 block cursor-pointer"
              @click="handleCloseFilters"
            />
            <p class="font-medium">{{ $t("searchPage.searchfilter") }}</p>
          </div>
        </div>

        <!-- filters -->
        <div class="space-y-4 p-3 flex-1">
          <div class="space-y-3" v-for="filter in filterData" :key="filter.id">
            <h3 class="font-medium capitalize">
              {{ $t(`searchPage.${filter.mainTitle}`) }}
            </h3>
            <div
              class="grid grid-cols-2 gap-2"
              v-if="filter.mainTitle !== 'rating'"
            >
              <div
                v-for="item in filter.items"
                :class="[
                  { 'border-primary-300 active_filter': selectedFilters?.[filter.mainTitle as FilterType].includes(item.value)},
                  'w-full rounded-md border py-1.5 text-center shadow-sm cursor-pointer hover:border-primary-300'
                ]"
                @click="() => handleSelectFilter(filter.mainTitle, item.value)"
              >
                <p>{{ item.name }}</p>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-2" v-else>
              <div
                v-for="item in filter.items"
                :class="[
                  { 'border-primary-300 active_filter': selectedFilters?.[filter.mainTitle as FilterType].includes(item.value) },
                  'w-full rounded-md border py-1.5 text-center shadow-sm cursor-pointer hover:border-primary-300'
                ]"
                @click="() => handleSelectFilter(filter.mainTitle, item.value)"
              >
                <p>{{ `${item.name !== 5 ? $t('common.from') : ''} ${item.name} ${$t('searchPage.star')}`}}</p>
                <!-- <span class="flex items-center justify-center gap-1">
                 <p>{{item.name}}</p>
                 <NuxtIcon name="ion:star" class="w-4 h-4 text-yellow-500 block"/>
                </span> -->
              </div>
            </div>
          </div>
        </div>

        <div class="sticky bottom-0 left-0 w-full p-3 bg-neutral-50">
          <div class="grid grid-cols-2 gap-4">
            <CommonButton
              @click="handleResetFilter"
              class="border border-primary-300 text-primary-400 font-medium"
            >
              {{ $t("common.reset") }}</CommonButton
            >
            <CommonButtonPrimary
              class="!rounded-lg text-white font-medium"
              @click="handleAppyFilter"
              >{{ $t("common.apply") }}
            </CommonButtonPrimary>
          </div>
        </div>
      </HeadlessDialogPanel>
    </HeadlessDialog>
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

const showFilters = ref(false);
const selectedFilters: Ref<{
  type: string[];
  rating: string[];
  location: string[];
}> = ref({
  type: route.query?.type ? String(route.query?.type).split(",") : [],
  rating: route.query?.rating ? String(route.query?.rating).split(",") : [],
  location: route.query?.location
    ? String(route.query?.location).split(",")
    : [],
});

let backupSelectedFilter: {
  type: string[];
  rating: string[];
  location: string[];
};

type FilterType = "type" | "rating" | "location";

// methods
const backUpFilter = () => {
  backupSelectedFilter = JSON.parse(JSON.stringify(selectedFilters.value));
};

const handleOpenFilters = () => {
  backUpFilter();
  showFilters.value = true;
};
const handleCloseFilters = () => {
  showFilters.value = false;
  selectedFilters.value = backupSelectedFilter;
};

const handleSelectFilter = (mainTitle: string, value: string) => {
  if (selectedFilters.value[mainTitle as FilterType].includes(value)) {
    selectedFilters.value[mainTitle as FilterType] = selectedFilters.value[
      mainTitle as FilterType
    ].filter((i) => i !== value);
  } else {
    selectedFilters.value?.[mainTitle as FilterType].push(value);
  }
};

const handleAppyFilter = () => {
  const query = { ...router.currentRoute.value.query };
  backUpFilter();

  Object.keys(selectedFilters.value).forEach((key) => {
    if (selectedFilters.value[key as FilterType].length > 0) {
      query[key] = selectedFilters.value[key as FilterType].join(",");
    } else {
      delete query[key];
    }
  });

  router.push({ query });
  handleCloseFilters();
};

const handleResetFilter = () => {
  Object.keys(selectedFilters.value).forEach((key) => {
    selectedFilters.value[key as FilterType] = [];
  });
};
</script>

<style scoped>
.active_filter {
  position: relative;
  overflow: hidden;
}
.active_filter::before {
  content: "";
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #d4a276;
  height: 35px;
  width: 35px;
  transform: translate(-50%, -62%) rotate(55deg);
}
.active_filter::after {
  font-family: sans-serif;
  content: "\2713";
  font-size: 10px;
  color: #fff;
  z-index: 11;
  position: absolute;
  top: 0;
  left: 3px;
}
</style>
