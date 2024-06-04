<template>
  <section
    class="portfolio-card"
    :class="'portfolio-card--' + props.briefcase.color + '-color'"
  >
    <p class="portfolio-card__name">{{ props.briefcase.name }}</p>
    <BriefcaseIcon />
  </section>
</template>

<script setup>
  import BriefcaseIcon from '@/assets/BriefcaseIcon.vue';

  const props = defineProps({
    briefcase: {
      type: Object,
      required: true,
    }
  })
</script>

<style lang="scss" scoped>
  .portfolio-card {
		position: relative;
		display: flex;
		align-items: center;
		overflow: hidden;
		width: 300px;
		height: 100px;
		padding: 20px;
		border-radius: 15px;
		background: linear-gradient(to bottom, var(--tag-3), var(--tag-3-light-dark));
		cursor: pointer;
		transition: box-shadow 0.3s;

    &:hover {
      box-shadow: 0px 0px 20px 0px rgb(224, 224, 224);
    }

    &__name {
      font-size: 35px;
      font-weight: 500;
      color: var(--tag-3-text);
    }

    &__icon {
      position: absolute;
      right: -20px;
      width: 200px;
      fill: var(--tag-3-text);
      filter: opacity(15%);
    }

     /* первый цвет карточки */
    &--blue-color {
      background: linear-gradient(to bottom, var(--tag-1), var(--tag-1-light-dark));

      .portfolio-card__name  {
        color: var(--tag-1-text);
      }

      .portfolio-card__icon {
        fill: var(--tag-1-text);
      }
    }

    /* второй цвет карточки */
    &--green-color {
      background: linear-gradient(to bottom, var(--tag-2), var(--tag-2-light-dark));

      .portfolio-card__name  {
        color: var(--tag-2-text);
      }

      .portfolio-card__icon {
        fill: var(--tag-2-text);
      }
    }

    &--purple-color {
      background: linear-gradient(to bottom, var(--tag-4), var(--tag-4-light-dark));

      .portfolio-card__name  {
        color: var(--tag-4-text);
      }

      .portfolio-card__icon {
        fill: var(--tag-4-text);
      }
    }

    &--orange-color {
		  background: linear-gradient(to bottom, var(--tag-5), var(--tag-5-light-dark));

      .portfolio-card__name  {
        color: var(--tag-5-text);
      }

      .portfolio-card__icon {
        fill: var(--tag-5-text);
      }
    }
	}
</style>