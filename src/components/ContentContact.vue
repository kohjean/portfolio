<template>
  <div id="contact-component" class="component">
    <h1>コンタクト</h1>
    <div class="content-area">
      <div id="mail-link">
        <h2>mail</h2>
        <a href="mailto:Hi.kojiIshii@gmail.com" target="_blank" rel="noopener">
          <div class="wrapper">
            <i class="material-icons">email</i>
            <p>Hi.kojiIshii@gmail.com</p>
          </div>
        </a>
        <p class="attention">メールソフトが開きます</p>
      </div>
      <div>
        <h2>転職サイト</h2>
        <a href="https://www.wantedly.com/users/135378965?ql=gaJpZM4AqgCe" target="_blank" rel="noopener">
          <div class="wrapper">
            <p>wantedly</p>
          </div>
        </a>
        <p class="attention">外部サイトが開きます</p>
      </div>
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
        content: String,
      }
    },
    methods: {
      changeContent: function(content) {
        this.content = content;
        this.$emit('change-content', content);
      }
    },
  }
</script>
<style lang="scss" scoped>
  .content-area>div {
    margin-bottom: 3rem;
  }

  .wrapper {
    // transition: 0.4s ease-out;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative; //transition用
    color: #111;
    border: solid 2px#264653;
    background-color: #f3f3f3;
    width: 90%;
    margin: 0 auto;
    padding: 2rem;

    border-radius: 1.6rem;

    i {
      font-size: 6rem;
      color: #264653;
      margin-right: 1rem;

    }

    p {
      font-size: 2rem;
    }
  }

  .attention {
    font-size: 1.4rem;
    margin-top: 4px;
    text-align: center;

    &::before {
      content: "※";
    }
  }
</style>