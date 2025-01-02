<template>
  <div class="space-y-6">
    <div class="w-full flex items-center justify-between gap-5">
      <select
        key="room_picker"
        @change="changeRoom"
        :class="['px-3 py-1.5 rounded-xl border outline-none shadow-sm overflow-hidden text-ellipsis w-full']"
      >
        <option :value="room.id" :key="room.id" v-for="room in PRICE_DATA">
          {{ room.name }}
        </option>
      </select>
      <div class="w-max text-nowrap">
        <button
          @click="handleShowGallery"
          class="text-sm text-blue-500 hover:underline outline-none"
        >
          {{ $t("detail.viewRoom") }}
        </button>
        <DetailHeaderAndGalleryListing
          :images="pickedRoom.albums"
          :handle-close="handleCloseGallery"
          :show="showGalleryRoom"
        />
      </div>
    </div>
    <div class="space-y-2 divide-y px-2">
      <div
        class="flex items-center justify-between gap-3 pt-2"
        v-for="price in pickedRoom.prices"
      >
        <p class="font-medium text-lg">{{ price.time }}:</p>
        <p class="">{{ price.price }}đ</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const PRICE_DATA = [
  {
    id: "room1",
    name: "Space room",
    prices: [
      { time: "2h", price: "160.000" },
      { time: "4h", price: "200.000" },
      { time: "22h-10h", price: "320.000" },
      { time: "14h-12h", price: "460.000" },
    ],
    albums: [
      "/images/gallery-3.jpg",
      "/images/gallery-4.jpg",
      "/images/gallery-5.jpg",
    ],
  },
  {
    id: "room2",
    name: "Ocean room Ocean room Ocean room Ocean room",
    prices: [
      { time: "2h", price: "180.000" },
      { time: "4h", price: "220.000" },
      { time: "22h-10h", price: "350.000" },
      { time: "14h-12h", price: "500.000" },
    ],
    albums: [
      "/images/gallery-1.jpg",
      "/images/gallery-4.jpg",
      "/images/gallery-2.jpg",
    ],
  },
  {
    id: "room3",
    name: "Pink room",
    prices: [
      { time: "2h", price: "140.000" },
      { time: "4h", price: "180.000" },
      { time: "22h-10h", price: "300.000" },
      { time: "14h-12h", price: "400.000" },
    ],
    albums: [
      "/images/gallery-2.jpg",
      "/images/gallery-4.jpg",
      "/images/gallery-3.jpg",
    ],
  },
];

const showGalleryRoom = ref(false);
const pickedRoom = ref(PRICE_DATA[0]);

// methods
const handleShowGallery = () => {
  showGalleryRoom.value = true;
};
const handleCloseGallery = () => {
  showGalleryRoom.value = false;
};

const changeRoom = (event: Event) => {
  const selectedRoomId = (event.target as HTMLSelectElement).value;
  pickedRoom.value =
    PRICE_DATA.find((room) => room.id === selectedRoomId) || PRICE_DATA[0];
};
</script>
