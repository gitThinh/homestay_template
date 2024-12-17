<template>
  <div
    class="container mx-auto py-16 px-3 flex flex-row justify-between items-center"
  >
    <div class="w-full md:w-1/2 mx-auto lg:mx-0 xl:w-2/5 space-y-10">
      <h3 class="font-bold text-3xl">
        Subscribe To Our Mailing List And Stay Up To Date
      </h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div class="input p-4 bg-primary-500 bg-opacity-10 rounded-lg flex">
        <input
          type="text"
          placeholder="Your email"
          class="bg-transparent outline-none flex-1"
        />
        <button
          class="bg-primary-300 text-white py-3 px-6 uppercase font-semibold rounded-lg hover:bg-primary-200 transition-all"
        >
          Send
        </button>
      </div>
    </div>
    <div class="hidden md:block w-1/3 xl:w-2/5">
      <img
        src="/assets/images/pic-send-mail.png"
        loading="lazy"
        class="object-cover"
      />
    </div>
  </div>
</template>

<script lang="ts" setup></script>
