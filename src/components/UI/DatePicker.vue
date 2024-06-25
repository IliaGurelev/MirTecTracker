<template>
  <input ref="datePickerInput" type="text" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.min.css'

const datePickerInput = ref(null)

onMounted(() => {
  flatpickr(datePickerInput.value, {
    enableTime: true,
    dateFormat: 'Y-m-d H:i',
    onClose: (selectedDates, dateStr) => {
      selectDate(dateStr)
    }
  })
})

const selectDate = (dateStr) => {
  datePickerInput.value.value = dateStr
}
</script>
