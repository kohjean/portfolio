<template>
  <nav id="content-nav">
    <ul class="flex text-center">
      <li @click="changeContent('Career')">
        <i class="material-icons">&#xe85e;</i>
        <p>Career / Skill</p>
      </li>
      <li @click="changeContent('Works')">
        <i class="material-icons">&#xe30c;</i>
        <p>Works</p>
      </li>
      <li @click="changeContent('Contact')">
        <i class="material-icons">&#xe8af;</i>
        <p>Contact</p>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      content: String,
    };
  },
  methods: {
    changeContent: function (content) {
      this.content = content;
      this.$emit("change-content", content);
    },
  },
};
</script>

<style lang="scss" scoped>
$main-color: #e9c46a;
nav {
  overflow-y: auto;
  height: 140px;
  padding: 2rem 0;

  ul {
    justify-content: space-between;
  }

  li {
    font-size: 1.6rem;
    width: calc(100% / 3);
    position: relative;
    color: #fff;

    &:hover {
      cursor: pointer;
    }

    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 1rem;
      left: 0;
      height: 80%;
      width: 2px;
      color: $main-color;
      background-color: $main-color;
    }

    &:first-child::after {
      display: none;
    }
  }
}
</style>
