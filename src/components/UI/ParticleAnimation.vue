<template>
  <div ref="particles" class="particles"></div>
</template>

<script>
import particlesJS from 'particles.js'

export default {
  mounted() {
    particlesJS(this.$refs.particles, {
      particles: {},
      interactivity: {}
    })
  }
}
</script>

<style scoped>
.particles {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
