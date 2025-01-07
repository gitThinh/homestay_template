<template>
  <div class="relative">
    <HeadlessMenu>
      <HeadlessMenuButton class="flex items-center gap-3 w-full h-full">
        <div
          class="min-w-11 aspect-square border rounded-xl flex items-center justify-center"
        >
          <NuxtIcon name="mynaui:location" class="text-2xl" />
        </div>
        <div v-if="pickedLocation" class="flex w-full items-center justify-between">
          <h3 class="font-medium text-left line-clamp-1">{{ pickedLocation }}</h3>
          <NuxtIcon
            name="ion:close-circle-outline"
            class="text-xl text-red-600"
            @click="handlePickLocation('')"
          />
        </div>
        <div class="text-left" v-else>
          <h3 class="font-semibold">Where</h3>
          <p class="text-neutral-500 text-sm">Choose location</p>
        </div>
      </HeadlessMenuButton>
      <HeadlessTransitionRoot
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <HeadlessMenuItems
          class="absolute z-50 -bottom-1 lg:-bottom-4 left-0  w-full translate-y-full bg-neutral-50 border rounded-lg p-3"
        >
          <HeadlessMenuItem
            v-for="location in locationsData"
            :key="location.id"
          >
            <div
              class="cursor-pointer hover:bg-neutral-200 py-1 px-2 rounded-lg"
              @click="() => handlePickLocation(location.name)"
            >
              <p>
                {{ location.name }}
              </p>
            </div>
          </HeadlessMenuItem>
        </HeadlessMenuItems>
      </HeadlessTransitionRoot>
    </HeadlessMenu>
  </div>
</template>

<script lang="ts" setup>
const pickedLocation = ref("");

// emit
const emit = defineEmits<{
  (event: "pick-location", location: string): void;
}>();

// data
const locationsData = [
  { id: generateIds("location_"), name: "Quận Liên Chiểu" },
  { id: generateIds("location_"), name: "Quận Hải Châu" },
  { id: generateIds("location_"), name: "Quận Ngũ Hành Sơn" },
  { id: generateIds("location_"), name: "Quận Sơn Trà" },
  { id: generateIds("location_"), name: "Quận Cẩm Lệ" },
  { id: generateIds("location_"), name: "Quận Thanh Khê" },
];

// methods
const handlePickLocation = (location: string) => {
  pickedLocation.value = location;
  emit("pick-location", location);
};
</script>
