<script setup>
</script>

<template>
  <div class="status__owners">
    <span class="status__owner status--open">
      <i class="fa-solid fa-circle-notch"></i> Открыт
    </span>
  </div>
</template>

<style scoped>
  .status__owners {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .status__owner{
    border-radius: 100px;
    padding: 2px 13px;
    font-size: 12px;
    font-weight: 700;
  }

  .status--close {
    color: var(--status-close-text);
    background-color: var(--status-close);
  }

  .status--open {
    color: var(--status-open-text);
    background-color: var(--status-open);
  }

  .status--inwork {
    color: var(--status-inwork-text);
    background-color: var(--status-inwork);
  }
</style>