<template>
  <div class="relative">
    <div class="flex items-center gap-3 w-full h-full">
      <div
        class="min-w-11 aspect-square border rounded-xl flex items-center justify-center"
      >
        <NuxtIcon name="mynaui:calendar" class="text-2xl" />
      </div>
      <div class="text-left">
        <h3 class="font-semibold">When</h3>
        <ClientOnly >
          <template #default>
            <RangePicker
              size="small"
              format="DD-MM-YYYY"
              placement="topRight"
              v-model:value="dateRange"
              @change="onDateChange"
            />
          </template>
          <template #fallback>
            <p>choose date range</p>
          </template>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RangePicker } from "ant-design-vue";
import { ref, watch } from "vue";
import dayjs from "dayjs";

const pickedDateRange = ref<[Date, Date] | null>(null);

// emit
const emit = defineEmits<{
  (event: "pick-date-range", dateRange: [Date, Date] | null): void;
}>();

// data
const dateRange = ref<[string, string] | [dayjs.Dayjs, dayjs.Dayjs] | undefined>(undefined);

// methods
const handlePickDateRange = (dateRange: [Date, Date] | null) => {
  pickedDateRange.value = dateRange;
  emit("pick-date-range", dateRange);
};

const onDateChange = (value: [string, string] | [dayjs.Dayjs, dayjs.Dayjs], dateString: [string, string]) => {
  if (Array.isArray(value) && value.length === 2) {
    const [start, end] = value;
    const startDate = dayjs.isDayjs(start) ? start.toDate() : dayjs(start, "DD-MM-YYYY").toDate();
    const endDate = dayjs.isDayjs(end) ? end.toDate() : dayjs(end, "DD-MM-YYYY").toDate();
    handlePickDateRange([startDate, endDate]);
  } else {
    handlePickDateRange(null);
  }
};

// watch dateRange to update pickedDateRange
watch(dateRange, (newDates) => {
  if (newDates) {
    const [start, end] = newDates;
    const startDate = dayjs(start, "DD-MM-YYYY").toDate();
    const endDate = dayjs(end, "DD-MM-YYYY").toDate();
    pickedDateRange.value = [startDate, endDate];
  } else {
    pickedDateRange.value = null;
  }
});
</script>
