<template>
    <CommonButton v-bind="attrs" class="text-neutral-50 !rounded-full bg-primary-400 hover:bg-primary-300 w-full">
        <slot />
    </CommonButton>
</template>

<script lang="ts" setup>
const attrs = useAttrs();
defineOptions({ inheritAttrs: false });
</script>