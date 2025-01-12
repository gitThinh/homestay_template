<template>
  <div>
    <div class="grid grid-cols-2 sm:grid-cols-1 gap-3">
      <div v-for="item in listingData" :key="item.id">
        <CommonHomestayCard
          :card_data="item"
          show="row"
          class="hidden sm:grid"
        />
        <CommonHomestayCard :card_data="item" class="sm:hidden" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CARD_DATA } from "~/data/homepage";

const listingData = CARD_DATA;
</script>
