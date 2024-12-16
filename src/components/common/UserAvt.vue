<template>
  <div
    :style="{ backgroundColor: props.avatar ? '' : bgcolor }"
    class="w-14 h-14 rounded-full relative"
  >
    <NuxtImg
      :src="props.avatar"
      v-if="props.avatar"
      class="h-full w-full object-cover rounded-full"
    />
    <span v-else
      class="flex items-center justify-center h-full w-full text-3xl uppercase font-medium text-white"
      >{{ charName[0] }}</span
    >
    <div class="absolute -top-0.5 -right-0.5 bg-blue-400 rounded-full p-1" v-if="props.isVerify">
      <NuxtIcon name="mingcute:check-fill" class="w-3 h-3 block text-white" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  avatar: {
    require: false,
    type: String,
  },
  userName: {
    require: false,
    type: String,
  },
  isVerify: {
    type: Boolean,
    default: false,
  },
});

const charName = ref(props.userName || "User");

const bgcolor = computed(() => {
  const charCode = charName.value.charCodeAt(0);
  const index = charCode % avatarColors.length;
  return avatarColors[index];
});

const avatarColors = [
  "#ffdd00",
  "#fbb034",
  "#ff4c4c",
  "#c1d82f",
  "#f48924",
  "#7ac143",
  "#30c39e",
  "#06BCAE",
  "#0695BC",
  "#037ef3",
  "#146eb4",
  "#8e43e7",
  "#ea1d5d",
  "#fc636b",
  "#ff6319",
  "#e01f3d",
  "#a0ac48",
  "#00d1b2",
  "#472f92",
  "#388ed1",
  "#a6192e",
  "#4a8594",
  "#7B9FAB",
  "#1393BD",
  "#5E13BD",
  "#E208A7",
];
</script>