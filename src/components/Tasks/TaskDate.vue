<template>
  <span class="date">
    <time :datetime="dateCreated">
      <i class="fa-regular fa-calendar-days"></i> {{ formateDate }}
    </time>
  </span>
</template>

<script setup>
import formatDate from '@/utils/format-date'

const props = defineProps({
  dateCreated: {
    type: String,
    required: true
  }
})

const formateDate = formatDate(props.dateCreated)
</script>

<style lang="scss" scoped>
.date {
  color: var(--light-grey);
  font-size: 12px;
  font-weight: 700;
}
</style>
