<template>
  <form @submit.prevent="handleSubmit" class="p-5 space-y-3 mx-auto max-w-3xl">
    <div class="w-full text-center mb-5">
      <h3 class="text-3xl font-semibold capitalize">
        {{ t("contactPage.contactWUs") }}
      </h3>
    </div>
    <div class="flex flex-col md:flex-row space-y-3 md:space-y-0 md:gap-3">
      <CommonInput
        v-model="formData.name"
        :placeholder="t('contactPage.name')"
        required
      />
      <CommonInput
        v-model="formData.phone"
        :placeholder="t('contactPage.phone')"
        required
        type="tel"
        pattern="^[0-9]{}$"
      />
    </div>
    <CommonInput
      v-model="formData.email"
      placeholder="Email"
      required
      type="email"
    />
    <CommonInput
      v-model="formData.email"
      :placeholder="t('common.title')"
      required
      type="text"
    />
    <textarea
      v-model="formData.message"
      :placeholder="t('contactPage.message')"
      rows="5"
      class="outline-none block px-4 py-3 w-full border border-neutral-200 bg-white focus:border-primary-300 focus:ring focus:ring-primary-400 focus:ring-opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 rounded-2xl font-normal mt-1"
    />
    <CommonButtonPrimary
      type="submit"
      class="!py-4 !rounded-lg font-semibold !mt-5 !shadow-lg"
    >
      {{ t("contactPage.sendMessage") }}
    </CommonButtonPrimary>
  </form>
</template>

<script lang="ts" setup>
const { t } = useI18n();

const formData = reactive({
  name: '',
  phone: '',
  email: '',
  title: '',
  message: ''
});

const handleSubmit = () => {
  if (formData.name && formData.phone && formData.email && formData.title && formData.message) {
    // Handle form submission
    // console.log('Form submitted:', formData);
  } else {
    // console.log('Please fill in all required fields.');
  }
};

useSeoMeta({
  title: t("contactPage.contact"),
});
</script>

<style></style>
