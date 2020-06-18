<template>
  <div id="contact-component" class="component">     
    <h1>コンタクト</h1>
    <div class="content-area">
    </div>
    <div class="contents-pagenation">
      <ul>
        <li @click="changeContent('Works')">Works</li>
        <li @click="changeContent('Career')">Career</li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        content: String
      }
    },
    methods: {
      changeContent: function( content ) {
        this.content = content;
        this.$emit('change-content', content);
      }
    },
  }
</script>
<style lang="scss" scoped></style>