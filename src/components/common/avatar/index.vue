<template>
  <div>
    <div class="w-16 h-16 rounded-full overflow-hidden border border-neutral-400">
      <NuxtImg v-if="imgUrl" :src="imgUrl" class="w-full h-full object-cover" />
      <div class="h-full w-full flex items-center justify-center" :style="{backgroundColor: avatarColor }" v-else>
        <p class="font-bold text-xl text-neutral-100">{{ userChar }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  name?: string,
  imgUrl?: string;
  checked?: boolean;
}>();

const userName = ref(props.name || "User");
const userChar = ref(userName.value.charAt(0).toUpperCase());

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

const avatarColor = avatarColors[userChar.value.charCodeAt(0) % avatarColors.length];
</script>