<template>
    <input type="text" v-bind="attrs" class="outline-none block px-4 py-3 w-full border border-neutral-200 bg-white focus:border-primary-300 focus:ring focus:ring-primary-400 focus:ring-opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 rounded-2xl font-normal mt-1">
</template>

<script lang="ts" setup>
const attrs = useAttrs();
</script>