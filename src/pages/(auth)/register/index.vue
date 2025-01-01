<template>
  <NuxtLayout name="white-layout">
    <div
      class="min-h-dvh flex flex-col items-center justify-center py-24 space-y-10"
    >
      <h1 class="text-5xl font-bold capitalize">{{ t("signUp") }}</h1>
      <div class="max-w-sm w-full">
        <form action="#"  class="w-full space-y-4">
          <label class="block">
            <span>{{ t("auth.name") }}</span>
            <CommonInput :placeholder="t('auth.name')" />
          </label>
          <label class="block">
            <span>Email</span>
            <CommonInput placeholder="example@gmail.com" />
          </label>
          <label class="block">
            <span class="flex flex-row items-center justify-between">
              {{ t("auth.password") }}
            </span>
            <CommonInput type="password" />
          </label>
          <label class="block">
            <span class="flex flex-row items-center justify-between">
              {{ t("auth.confirmPassword") }}
            </span>
            <CommonInput type="password" />
          </label>
          <CommonButtonPrimary @click.prevent="">
            <p class="text-lg font-semibold text-neutral-50">{{ t("signUp") }}</p>
          </CommonButtonPrimary>
        </form>
      </div>
      <span class="text-center">
        {{ t("auth.alreadyAccount") }}
        <NuxtLinkLocale
          :to="PATH_AUTH.login"
          class="underline hover:no-underline font-medium"
          >{{ t("logIn") }}</NuxtLinkLocale
        >
      </span>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { PATH_AUTH } from '~/constants/path';
const {t} = useI18n();

useSeoMeta({
  title: t("signUp")
})
</script>
