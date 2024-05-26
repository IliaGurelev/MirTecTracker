<script setup>
</script>

<template>
  <div class="task__tags" :class="$attrs.class">
    <span class="task__tag task__tag--develop">Разработка</span>
  </div>
</template>

<style scoped>
  .task__tags {
  display: flex;
  align-items: center;
  justify-content: space-between;
  }

  .task__tag {
    border-radius: 100px;
    padding: 2px 13px;
    font-size: 12px;
    font-weight: 700;
  }

  .task__tag--develop {
    color: var(--tag-4-text);
    background-color: var(--tag-4);
  }

  .task__tag--mark {
      color: var(--tag-3-text);
      background-color: var(--tag-3);
    }

  .task__tag--buy {
    color: var(--tag-2-text);
    background-color: var(--tag-2);
  }

  .task__tag--financ {
    color: var(--tag-5-text);
    background-color: var(--tag-5);
  }
</style>