<template>
  <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
    <div :key="data.userId" v-for="data in USER_COMMENT.slice(0, 3)" class="divide-y px-5 py-6 bg-neutral-50 rounded-xl border space-y-5 flex flex-col">
      <div class="space-y-3 flex-1">
        <div class="" v-if="data.comment">“{{ data.comment }}“</div>
        <CommonRatingStar :star="data.rating" size="text-2xl" />
      </div>
      <div class="flex flex-row gap-4 items-center pt-5">
        <CommonUserAvt :user-name="data.name" :avatar="data.avatar" :is-verify="data.isVerify" />
        <div>
          <h4 class="capitalize font-medium line-clamp-1">{{ data.name }}</h4>
          <p v-if="data.type" class="capitalize text-sm">{{ data.type }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { USER_COMMENT } from '~/data/homepage';


</script>