<script></script>

<template>
  <div class="container__advantages">
    <div class="animation">
      <h1>Преимущества использования <span>Миртек Трекер</span>:</h1>
      <div class="row">
        <div class="advantages">
          <i class="fa-solid fa-thumbs-up"></i>
          <h2>Повышение продуктивности</h2>
          <p>
            Cконцентрируйтесь на самых важных задачах, уменьшите стресс, используйте время более
            эффективно.
          </p>
        </div>
        <div class="advantages">
          <i class="fa-solid fa-map"></i>
          <h2>Улучшение планирования</h2>
          <p>
            Создавайте четкие планы, не упускайте важные события, контролируйте выполнение задач.
          </p>
        </div>
        <div class="advantages">
          <i class="fa-solid fa-user-tie"></i>
          <h2>Увеличение ответственности</h2>
          <p>
            Фиксируйте задачи, назначайте сроки, отслеживайте прогресс, увеличивайте свою
            ответственность за достижение целей.
          </p>
        </div>
        <div class="advantages">
          <i class="fa-solid fa-users"></i>
          <h2>Лучшая коммуникация</h2>
          <p>
            Делитесь задачами, отслеживайте прогресс совместных проектов, улучшайте коммуникацию с
            коллегами.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container__advantages {
  width: 100%;
  height: auto;
  padding: 0 8%;
  margin-top: 2rem;
  margin-bottom: 4rem;
}
.container__advantages span {
  color: var(--color-text-important);
}
.container__advantages h1 {
  text-align: center;
  margin-bottom: 60px;
  font-weight: 600;
  position: relative;
  font-size: 50px;
}

.row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;
}

.advantages {
  text-align: center;
  padding: 25px 10px;
  border-radius: 8px;
  font-size: 14px;
  background: transparent;
  transition:
    transform 0.5s,
    background 0.5s,
    color 0.5s;
}

.advantages i {
  font-size: 40px;
  margin-bottom: 10px;
  color: var(--color-text-important);
}

.advantages h2 {
  font-weight: 600;
  margin-bottom: 8px;
}
.advantages p {
  font-weight: 550;
  font-size: 16px;
}

.advantages:hover {
  background: var(--color-text-important);
  color: white;
  transform: scale(1.05);
}

.advantages:hover i {
  color: white;
  transform: scale(1.05);
}
</style>
