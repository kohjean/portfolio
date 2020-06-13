<template>
  <div>
    <transition name="slide">
      <ul class="flex text-center" id="suggestIcons">
        <li><i class="material-icons">keyboard_arrow_up</i></li>
        <li><i class="material-icons">keyboard_arrow_up</i></li>
        <li><i class="material-icons">keyboard_arrow_up</i></li>
      </ul>
    </transition>
    <p class="text-center">Please click icon.</p>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="scss" scoped>
  .fade-enter-active,
  .fade-leave-active {
    will-change: opacity;
    transition: opacity 2s cubic-bezier(0.3, 0, 0.4, 0) 0ms;
  }
  .fade-enter, 
  .fade-leave-to {
    opacity: 0;
  }

  .slide-enter-active,
  .slide-leave-active {
    opacity: 0;
    transition: all 2s ease;
    transform: translateY(-30px) ;
  }
  .slide-enter,
  .slide-leave-to {
    opacity: 0;
    transition: all 2s ease;
    transform: translateY(0);
  }

  li {
    width: calc(100% / 3);

    i {
      transition: 2s;
      transform: translateY(0);
    }
  }

  p {
    color: #fff;
    font-size: 2.4rem;
    letter-spacing: 3px;
    transition: 2s;
  }
</style>