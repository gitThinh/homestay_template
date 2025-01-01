<template>
  <div class="grid grid-cols-12 gap-5">
    <div class="col-span-12 lg:col-span-8">
      <slot name="content"></slot>
    </div>
    <div class="hidden lg:block col-span-4 sticky top-14 h-max">
      <slot name="sidebar"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
