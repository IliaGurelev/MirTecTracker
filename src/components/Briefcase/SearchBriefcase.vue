<template>
  <div class="search">
    <input 
      type="text" 
      v-model="query" 
      placeholder="Найти..." 
      class="search__input"
      :class="{'--smouth-bottom': query.length === 0}"
      @focus="switchFocus(true)"
      @blur="switchFocus(false)"
    >
    <ul v-if="isFocus" class="search__list --smouth-bottom">
        <li v-if="availableBriefcase">
          <p class="search__text">У вас нет порфелей добавте их <RouterLink :to="{name: 'Briefcase'}" class="search__link">здесь</RouterLink></p> 
        </li>
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
      required: false,
      default: [],
    }
  })

  const query = ref('');
  const isFocus = ref(false);
  const availableBriefcase = computed(() => props.briefcases.length === 0);

  const filteredItems = computed(() => {
    if (!isFocus.value && !query.value) {
      return [];
    }
    return props.briefcases.filter(briefcase => briefcase.name.toLowerCase().includes(query.value.toLowerCase()));
  });

  const switchFocus = (state) => {
    isFocus.value = state
  }
</script>

<style lang="scss" scoped>
  .search {
    position: relative;
    z-index: 2;

    &__input {
      padding: 5px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;

      &:focus {
        outline: none;
      }
    }

    &__list {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      max-height: 90px;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
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

    &__text {
      font-size: 14px;
    }

    &__link {
      color: var(--color-text-important)
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