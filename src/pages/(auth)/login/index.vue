<template>
  <NuxtLayout name="white-layout">
    <div
      class="min-h-screen flex flex-col items-center justify-center py-24 space-y-10"
    >
      <h1 class="text-5xl font-bold">Đăng nhập</h1>
      <div class="max-w-sm w-full">
        <form class="w-full space-y-4">
          <label class="block">
            <span>Email</span>
            <CommonInput label="Email" placeholder="example@gmail.com" />
          </label>
          <label class="block">
            <span class="flex flex-row items-center justify-between">
              Mật khẩu
              <a
                href="#"
                class="underline font-medium text-sm hover:no-underline"
                >Quên mật khẩu?</a
              >
            </span>
            <CommonInput label="Email" type="password" />
          </label>
          <CommonButtonPrimary @click.prevent="">
            <p class="text-lg font-semibold text-neutral-50">Đăng nhập</p>
          </CommonButtonPrimary>
        </form>
      </div>
      <span class="text-center">
        Bạn chưa có tài khoản?
        <NuxtLinkLocale
          :to="PATH_PAGE.register"
          class="underline hover:no-underline font-medium"
          >Tạo tài khoản</NuxtLinkLocale
        >
      </span>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { PATH_PAGE } from "~/constants/path";
</script>
