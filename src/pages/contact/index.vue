<template>
  <NuxtLayout name="white-layout">
    <div class="main_container !px-0 pb-10 min-h-dvh">
      <div class="w-full aspect-video max-h-96 relative">
        <ClientOnly>
          <template #default>
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              :src="`https://www.google.com/maps/embed?origin=mfe&pb=!1m4!2m1!1s910A Ngô Quyền, An Hải, Sơn Trà, Đà Nẵng 550000, Việt Nam!4f15!5e0!6i10`"
            ></iframe>
          </template>
          <template #fallback>
            <div class="w-full h-full animate-pulse bg-neutral-300"></div>
          </template>
        </ClientOnly>
        <NuxtImg
          src="/images/coverbottom.svg"
          class="absolute bottom-0 w-full"
        />
      </div>
      <div class="py-10 space-y-8">
        <!-- inform contacts -->
        <div class="w-full text-center space-y-2">
          <a href="#" class="hover:text-blue-600 transition-colors font-medium">
            910A Ngô Quyền, An Hải, Sơn Trà, Đà Nẵng 550000, Việt Nam
          </a>
          <div
            class="space-x-4 flex flex-row items-center justify-center w-full"
          >
            <a href="#" class="hover:text-blue-600 transition-colors">
              0123456xxx
            </a>
            <a href="#" class="hover:text-blue-600 transition-colors">
              Contact_abc@gmail.com
            </a>
          </div>
        </div>
        <!-- form contact -->
        <FormContact />
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup></script>
