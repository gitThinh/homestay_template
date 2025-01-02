<template>
  <div class="">
    <div
      v-for="(contact, index) in data.contact"
      :key="index"
      class="flex justify-between items-center px-4 py-2 gap-2 rounded-xl odd:bg-neutral-100"
    >
      <div class="font-medium">{{ $t(`contactType.${contact.type}`) }}:</div>
      <div class="line-clamp-1">
        <a href="#" class="text-blue-600 hover:underline">{{
          contact.value
        }}</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IDetailHomeStay } from "~/types/homestay";

defineProps<{
  data: IDetailHomeStay;
}>();
</script>
