<template>
  <div class="relative">
    <HeadlessMenu>
      <HeadlessMenuButton class="flex items-center gap-3 w-full h-full">
        <div
          class="min-w-11 aspect-square border rounded-xl flex items-center justify-center"
        >
          <NuxtIcon name="solar:user-rounded-linear" class="text-2xl" />
        </div>
        <div
          v-if="pickedPeople"
          class="flex w-full items-center justify-between"
        >
          <h3 class="font-medium text-left line-clamp-1">
            {{ valuePickedPeople }}
          </h3>
          <NuxtIcon
            name="ion:close-circle-outline"
            class="text-xl text-red-600"
            @click="handlePickLocation('')"
          />
        </div>
        <div class="text-left" v-else>
          <h3 class="font-semibold">People</h3>
          <p class="text-neutral-500 text-sm">Choose number people</p>
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
          class="absolute z-50 -bottom-1 lg:-bottom-4 left-0 w-full translate-y-full bg-neutral-50 border rounded-lg p-3"
        >
          <HeadlessMenuItem
            v-for="people in peopleData"
            :key="people.id"
          >
            <div
              class="cursor-pointer hover:bg-neutral-200 py-1 px-2 rounded-lg"
              @click="() => handlePickLocation(people.value)"
            >
              <p>
                {{ people.name }}
              </p>
            </div>
          </HeadlessMenuItem>
        </HeadlessMenuItems>
      </HeadlessTransitionRoot>
    </HeadlessMenu>
  </div>
</template>

<script lang="ts" setup>
const pickedPeople = ref("");
const valuePickedPeople = computed(() => {
  const pick = peopleData.find((item) => item.value === pickedPeople.value);
  return pick?.name || '';
})

// emit
const emit = defineEmits<{
  (event: "pick-people", value: string): void;
}>();

// data
const peopleData = [
  { id: generateIds("people_"), name: "1-2 người lớn", value: "2l" },
  { id: generateIds("people_"), name: "2 người lớn, 1 trẻ em", value: "2l1n" },
  { id: generateIds("people_"), name: "2 người lớn, 2 trẻ em", value: "2l2n" },
  { id: generateIds("people_"), name: "3 người lớn", value: "3l" },
];

// methods
const handlePickLocation = (value: string) => {
    pickedPeople.value = value;
  emit("pick-people", value);
};
</script>
