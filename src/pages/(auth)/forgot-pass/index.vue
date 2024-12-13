<template>
  <NuxtLayout name="white-layout">
    <div
      class="min-h-dvh flex flex-col items-center justify-center py-24 space-y-10"
    >
      <h1 class="text-5xl font-bold">Quên mật khẩu</h1>
      <div class="max-w-sm w-full">
        <form class="w-full space-y-4">
          <label class="block">
            <span>Email</span>
            <CommonInput label="Email" placeholder="example@gmail.com" />
          </label>
          <CommonButtonPrimary @click.prevent="">
            <p class="text-lg font-semibold text-neutral-50">Quên mật khẩu</p>
          </CommonButtonPrimary>
        </form>
      </div>
      <span class="text-center">
        Bạn đã có tài khoản?
        <NuxtLinkLocale
          :to="PATH_AUTH.login"
          class="underline hover:no-underline font-medium"
          >Đăng nhập</NuxtLinkLocale
        >
      </span>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { PATH_AUTH } from '~/constants/path';

</script>
