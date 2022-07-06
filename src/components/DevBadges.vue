<template>
  <div class="dev-badges">
    <ul>
      <li v-for="src in srcset" :key="src">
        <img :src="src" alt="develop-icon" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    srcset: {
      type: Array,
    },
  },
};
</script>

<style scoped lang="scss">
.dev-badges {
  ul {
    display: flex;
    flex-wrap: wrap;
  }
  img {
    height: 3.2rem;
  }
}
</style>
