<template>
    <CommonButton v-bind="attrs" class="!rounded-full bg-primary-400 hover:bg-primary-300 w-full py-3">
        <slot />
    </CommonButton>
</template>

<script lang="ts" setup>
const attrs = useAttrs();
</script>