<template>
  <NuxtLayout name="white-layout">
    <div
      class="min-h-dvh main_container flex flex-col items-center justify-center py-24 pt-10 space-y-10"
    >
      <h1 class="text-5xl font-bold capitalize">{{ t("logIn") }}</h1>
      <div class="max-w-sm w-full">
        <form class="w-full space-y-4">
          <label class="block">
            <span>Email</span>
            <CommonInput label="Email" placeholder="example@gmail.com" />
          </label>
          <label class="block">
            <span class="flex flex-row items-center justify-between">
              {{ t("auth.password") }}
              <NuxtLinkLocale
                :to="PATH_AUTH.forgot"
                class="underline font-medium text-sm hover:no-underline"
                >{{ t("forgotPassword") }}?
              </NuxtLinkLocale>
            </span>
            <CommonInput label="Email" type="password" />
          </label>
          <CommonButtonPrimary @click.prevent="">
            <p class="text-lg font-semibold text-neutral-50">{{ t("logIn") }}</p>
          </CommonButtonPrimary>
        </form>
      </div>
      <span class="text-center">
        {{ t("auth.dontHaveAccount") }}
        <NuxtLinkLocale
          :to="PATH_AUTH.register"
          class="underline hover:no-underline font-medium"
          >{{ t("auth.createAccount") }}</NuxtLinkLocale
        >
      </span>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { PATH_AUTH } from '~/constants/path';
const {t} = useI18n();

useSeoMeta({
  title: t("logIn")
})
</script>
