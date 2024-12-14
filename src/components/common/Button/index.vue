<template>
  <button
    class="px-4 py-2 rounded-lg shadow-sm bg-neutral-50 hover:bg-neutral-100 transition-colors"
    :class="disabled ? 'opacity-80' : ''"
    v-bind="$attrs"
    @click="$emit('clickBtn', $event)"
    :disabled="props.disabled"
    v-if="!href"
  >
    <NuxtIcon name="eos-icons:loading" class="w-8 h-8 block" v-if="isLoading" />
    <slot />
  </button>
  <NuxtLinkLocale :to="props.href" v-bind="$attrs" class="px-4 py-2 rounded-lg shadow-sm bg-neutral-50 hover:bg-neutral-100 transition-colors cursor-pointer text-center" v-else>
    <slot />
  </NuxtLinkLocale>
</template>

<script lang="ts" setup>
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  href: {
    type: String,
    default: '',
  },
});

// Stop inheriting attributes into the root component element
defineOptions({ inheritAttrs: false });
</script>