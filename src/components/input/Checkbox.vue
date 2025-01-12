<template>
  <label :for="uniqueId" class="cursor-pointer flex gap-3 max-w-max">
    <div
      :class="[
        size,
        'rounded-md border border-primary-800 flex items-center justify-center',
        { 'bg-primary-50': isCheck },
      ]"
    >
      <NuxtIcon
        name="iconoir:check"
        v-if="isCheck"
        class="w-5 h-5 block text-primary-500"
      />
    </div>
    <input
      :checked="isCheck"
      type="checkbox"
      :id="uniqueId"
      class="hidden"
      @click="handleControlCheckBox"
    />
    <slot />
  </label>
</template>

<script lang="ts" setup>
const props = defineProps({
  size: {
    type: String,
    default: "w-5 h-5 min-w-5",
  },
  defaultCheck: {
    type: Boolean,
    default: false,
  },
  value: {
    type: String,
    required: false,
  },
});

const isCheck = ref(props.defaultCheck);
const uniqueId = ref(generateIds("checkbox_"));

const handleControlCheckBox = () => {
  isCheck.value = !isCheck.value;
};
</script>
