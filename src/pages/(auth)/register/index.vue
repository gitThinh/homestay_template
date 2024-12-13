<template>
  <NuxtLayout name="white-layout">
    <div
      class="min-h-screen flex flex-col items-center justify-center py-24 space-y-10"
    >
      <h1 class="text-5xl font-bold">Đăng ký</h1>
      <div class="max-w-sm w-full">
        <form action="#"  class="w-full space-y-4">
          <label class="block">
            <span>Họ và tên</span>
            <CommonInput placeholder="Họ và tên" />
          </label>
          <label class="block">
            <span>Email</span>
            <CommonInput placeholder="example@gmail.com" />
          </label>
          <label class="block">
            <span class="flex flex-row items-center justify-between">
              Mật khẩu
            </span>
            <CommonInput type="password" />
          </label>
          <label class="block">
            <span class="flex flex-row items-center justify-between">
              Nhập lại mật khẩu
            </span>
            <CommonInput type="password" />
          </label>
          <CommonButtonPrimary @click.prevent="">
            <p class="text-lg font-semibold text-neutral-50">Đăng ký</p>
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
