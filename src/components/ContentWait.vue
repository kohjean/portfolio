<template>
  <transition name="slide"> 
    <p>waiting</p>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      slide: false
    }
  },
  mounted() {
    this.slide = true
  },
}
</script>

<style scoped>

  .slide-enter-active,
  .slide-leave-active {
    will-change: transform;
    transform: translateY(-30px);
    transition: opacity 20s transform 3s;
  }

  .slide-enter,
  .slide-leave-to {
    transform: translateY(0);
    opacity: 0;
  } 
</style>