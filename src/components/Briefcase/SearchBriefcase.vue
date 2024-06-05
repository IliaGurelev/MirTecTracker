<template>
  <div class="search">
    <input 
      type="text" 
      v-model="query" 
      placeholder="Найти..." 
      class="search__input"
      :class="{'--smouth-bottom': query.length === 0}"
    >
    <ul v-if="filteredItems.length" class="search__list --smouth-bottom">
        <li v-for="item in filteredItems" :key="item.id" class="search__item">
          <BriefcaseIcon 
          class="search__briefcase-icon" 
          :class="`portfolio-card__icon--${item.color}`"
          />
          {{ item.name }}
        </li>
    </ul>
  </div>
</template>

<script setup>
  import {ref, computed} from 'vue';
  import BriefcaseIcon from '@/assets/BriefcaseIcon.vue';

  const props = defineProps({
    briefcases: {
      type: Array,
      required: true,
    }
  })

  const query = ref('');

  const filteredItems = computed(() => {
      if (!query.value) {
          return [];
      }
      return props.briefcases.filter(briefcase => briefcase.name.toLowerCase().includes(query.value.toLowerCase()));
  });
</script>

<style lang="scss" scoped>
  .search {
    &__input {
      padding: 5px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;

      &:focus {
        outline: none;
      }
    }

    &__list {
      display: flex;
      flex-direction: column;
      row-gap: 5px;
      padding: 10px;
      background-color: #ffffff;
    }

    &__item {
      display: flex;
      align-items: center;
      column-gap: 10px;
      cursor: pointer;
    }

    &__briefcase-icon {
      width: 20px;
    }
  }

  .--smouth-bottom {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
</style>