<template>
  <div :class="[colorClass[props.color], border ? 'border' : '' ,' rounded-full bg-opacity-85 px-3 py-1.5 w-max font-medium text-xs inline-block']">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  color: {
    type: String as () => "purple" | "blue" | "green" | "yellow",
    required: true,
  },
  border: {
    type: Boolean,
    default: true,
  },
});

const colorClass = {
    purple: "bg-purple-100 text-purple-800 border-purple-600",
    blue: "bg-blue-100 text-blue-800 border-blue-600",
    green: "bg-green-100 text-green-800 border-green-600",
    yellow: "bg-yellow-100 text-yellow-800 border-yellow-600",
}
</script>