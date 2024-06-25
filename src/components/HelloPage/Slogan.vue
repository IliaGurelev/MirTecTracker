<script></script>

<template>
  <div class="slogan">
    <div class="container_slogan">
      <div class="animation">
        <h1>
          Обретите спокойствие и ясность с помощью одного из самых популярных в мире приложений для
          повышения продуктивности
        </h1>
        <button class="button__start-works">Начать работу</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container_slogan {
  width: 100%;
  padding: 100px 50px;
  margin: auto;
  text-align: center;
  background: var(--color-text-important);
}

.slogan {
  background: var(--color-text-important);
}

.slogan h1 {
  font-size: 50px;
  color: white;
}

.button__start-works {
  margin-top: 2rem;
  cursor: pointer;
  position: relative;
  padding: 10px 24px;
  font-size: 30px;
  color: white;
  border-radius: 8px;
  background-color: var(--color-text-important);
  font-weight: 600;
  overflow: hidden;
  margin-bottom: 1rem;
  border: 2px solid var(--color-text-important);
  -webkit-transition:
    background-color 0.2s linear,
    color 0.2s linear,
    color 0.2s linear,
    color 0.2s linear,
    border 0.2s linear,
    color 0.2s linear,
    transform 0.5s;
  transition:
    background-color 0.2s linear,
    color 0.2s linear,
    color 0.2s linear,
    color 0.2s linear,
    border 0.2s linear,
    color 0.2s linear,
    transform 0.5s;
}
.button__start-works:hover {
  color: var(--color-text-important);
  background-color: var(--bg);
  border: 2px solid var(--color-text-important);
  transform: scale(1.05);
}
</style>
