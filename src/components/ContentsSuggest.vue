<template>
  <transition name="fade">
    <div>
      <ul class="flex text-center" id="suggestIcons">
        <li>
          <i class="material-icons">{{ icon }}</i>
        </li>
        <li>
          <i class="material-icons">{{ icon }}</i>
        </li>
        <li>
          <i class="material-icons">{{ icon }}</i>
        </li>
      </ul>
      <p class="text-center">Please click icon.</p>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      icon: "keyboard_arrow_up",
      slide: false,
    };
  },
  mounted() {
    addEventListener("load", this.suggestMove);
    this.slide = true;
  },
  methods: {
    suggestMove: function () {
      const suggest = document.getElementById("suggestIcons");
      const icons = suggest.getElementsByClassName("material-icons");
      setTimeout(function () {
        for (let i = 0; i < icons.length; i++) {
          icons[i].style.transform = "translateY(-3rem)";
          icons[i].style.opacity = 1;
        }
      }, 1200);
    },
  },
};
</script>
<style lang="scss" scoped>
.fade-enter-active {
  will-change: opacity;
  opacity: 1;
  transition: opacity 2s cubic-bezier(0.3, 0, 0.4, 0) 0ms;
}

.fade-enter,
.fade-leave-to,
.fade-leave-active {
  will-change: opacity;
  opacity: 0;
  transition: opacity 0.3s;
}

// .slide-enter-active,
// .slide-leave-active {
//   will-change: transform;
//   transform: translateY(-30px);
//   opacity: 1;
//   transition: opacity 2s transform 3s;
// }

// .slide-enter,
// .slide-leave-to {
//   transform: translateY(0);
//   opacity: 0;
// }

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
