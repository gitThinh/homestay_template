<template>
  <div class="flex flex-row items-center">
    <NuxtIcon name="ion:star" class="text-yellow-500" :class="size" v-for="(star, index) in activeStar" :key="index"/>
    <NuxtIcon name="ion:star-half-outline" class="text-yellow-500" :class="size" v-if="hasHalfStar" />
    <NuxtIcon name="ion:star-outline" class="text-yellow-500" :class="size" v-for="(star, index) in emptyStar" :key="index" v-if="emptyStar > 0 && showEmptyStar" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    star: {
        type: Number,
        default: 5,
    },
    size: {
        type: String,
        default: "text-xl"
    },
    showEmptyStar: {
        type: Boolean,
        default: true
    }
})
const activeStar = computed(() => Math.floor(props.star));
const hasHalfStar = computed(() => props.star % 1 >= 0.5)
const emptyStar = computed(() => {
    const hasHalf = hasHalfStar.value ? 1 : 0
    return 5 - activeStar.value - hasHalf
});
</script>