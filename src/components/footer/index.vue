<template>
  <div class="bg-primary-800 text-neutral-50 py-16">
    <div class="container mx-auto px-3 grid grid-cols-12 gap-10">
      <div class="space-y-3 col-span-12 lg:col-span-4 xl:col-span-5 ">
        <h3 class="font-semibold text-2xl text-white">Contact</h3>
        <div class="w-10 h-px bg-primary-50 rounded-full"></div>
        <div class="space-y-2">
          <div class="space-x-2 flex flex-row items-center">
            <NuxtIcon name="mynaui:location" class="w-6 h-6 inline-block" />
            <a
              href="#"
              class="hover:text-blue-600 transition-colors"
              >910A Ngô Quyền, An Hải, Sơn Trà, Đà Nẵng 550000, Việt Nam</a
            >
          </div>
          <div class="space-x-2 flex flex-row items-center">
            <NuxtIcon name="ic:round-phone" class="w-6 h-6 inline-block" />
            <a
              href="#"
              class="hover:text-blue-600 transition-colors"
              >0123456xxx</a
            >
          </div>
          <div class="space-x-2 flex flex-row items-center">
            <NuxtIcon name="ion:mail-outline" class="w-6 h-6 inline-block" />
            <a
              href="#"
              class="hover:text-blue-600 transition-colors"
              >Contact_abc@gmail.com</a
            >
          </div>
        </div>
        <div class="w-full h-px bg-primary-50 rounded-full"></div>
        <!-- social -->
        <div class="flex flex-row gap-4 items-center justify-between">
          <h3 class="font-medium text-xl">Follow Us</h3>
          <div class="space-x-4">
            <a
              href="#"
              class="hover:text-blue-600 transition-colors"
            >
              <NuxtIcon
                name="icon-park-outline:facebook-one"
                class="w-6 h-6 inline-block"
              />
            </a>
            <a
              href="#"
              class="hover:text-blue-600 transition-colors"
            >
              <NuxtIcon name="ri:twitter-x-line" class="w-6 h-6 inline-block" />
            </a>
            <a
              href="#"
              class="hover:text-blue-600 transition-colors"
            >
              <NuxtIcon
                name="akar-icons:instagram-fill"
                class="w-6 h-6 inline-block"
              />
            </a>
            <a
              href="#"
              class="hover:text-blue-600 transition-colors"
            >
              <NuxtIcon name="jam:linkedin" class="w-6 h-6 inline-block" />
            </a>
          </div>
        </div>
      </div>
      <div
        class="space-y-3 col-span-6 sm:col-span-3 lg:col-span-2"
        v-for="data in FOOTER_DATA"
        :key="data.id"
      >
        <h3 class="font-semibold text-2xl text-white">{{ data.title }}</h3>
        <div class="space-y-2">
          <a :href="field.url" v-for="field in data.fields" :key="field.id" class="block hover:text-blue-600 transition-colors">
            {{ field.content }}
          </a>
        </div>
      </div>
      <div class="space-y-3 col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3">
        <h3 class="font-semibold text-2xl text-white">Newsletter</h3>
        <div class="flex flex-row items-center gap-2 p-4 bg-neutral-50 rounded-xl text-neutral-800">
          <input type="text" class="outline-none bg-transparent flex-1" placeholder="Your email address">
          <button class="font-medium">Send</button>
        </div>
        <p>Subscribe to the free newsletter and stay up to date</p>
        <div class="w-full h-px bg-primary-50 rounded-full"></div>
        <h3 class="font-semibold text-2xl text-white">Mobile Apps</h3>
        <div class="flex flex-row items-center gap-2">
          <NuxtIcon name="ri:apple-line" class="w-6 h-6 inline-block" />
          <a href="#" class="hover:text-blue-600 transition-colors">
            IOS App
          </a>
        </div>
        <div class="flex flex-row items-center gap-2">
          <NuxtIcon name="ri:android-line" class="w-6 h-6 inline-block" />
          <a href="#" class="hover:text-blue-600 transition-colors">
            Android App
          </a>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const FOOTER_DATA = [
  {
    id: 1,
    title: "About Us",
    fields: [
      {
        id: 1,
        content: "Information",
        url: "#",
      },
      {
        id: 2,
        content: "Term and policy",
        url: "#",
      },
      {
        id: 3,
        content: "Site map",
        url: "#",
      },
      {
        id: 4,
        content: "Contact Us",
        url: "#",
      },
      {
        id: 5,
        content: "Data policy",
        url: "#",
      },
    ],
  },
  {
    id: 2,
    title: "Support",
    fields: [
      {
        id: 1,
        content: "How it works",
        url: "#",
      },
      {
        id: 2,
        content: "Help center",
        url: "#",
      },
      {
        id: 3,
        content: "Chat with us",
        url: "#",
      },
    ],
  },
];
</script>
