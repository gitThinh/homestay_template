<template>
  <NuxtLayout name="white-layout">
    <div
      class="min-h-dvh flex flex-col items-center justify-center py-24 space-y-10"
    >
      <h1 class="text-5xl font-bold capitalize">{{ t("forgotPassword") }}</h1>
      <div class="max-w-sm w-full">
        <form class="w-full space-y-4">
          <label class="block">
            <span>Email</span>
            <CommonInput label="Email" placeholder="example@gmail.com" />
          </label>
          <CommonButtonPrimary @click.prevent="">
            <p class="text-lg font-semibold text-neutral-50">{{ t("forgotPassword") }}</p>
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
  title: t("forgotPassword")
})
</script>
