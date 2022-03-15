<template>
  <div id="container">
    <header>
      <h1 class="text-center" id="what">Portfolio</h1>
    </header>
    <main>
      <Nav v-on:change-content="changeContent" />
      <section id="suggest-section">
        <Suggest v-show="suggestShow" />
      </section>
      <section id="main-contents">
        <component :is="currentContent" v-on:change-content="changeContent" />
      </section>
    </main>
    <footer>
      <p>
        <small>© COPYRIGHT {{ latestYear }} ALL RIGHTS RESERVED</small>
      </p>
    </footer>
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Suggest from "./components/Suggest";
import Wait from "./components/ContentWait";
import Career from "./components/Career";
import Works from "./components/Works";
import Personal from "./components/Personal";
export default {
  name: "App",
  components: {
    Nav,
    Suggest,
    Wait,
    Career,
    Works,
    Personal,
  },
  data() {
    return {
      latestYear: new Date().getFullYear(),
      currentContent: "Wait",
      suggestShow: false,
    };
  },
  created() {
    // ロード時、コンテンツをfadeInさせる
    addEventListener("load", this.showSuggest);
  },
  methods: {
    showSuggest: function () {
      this.suggestShow = true;
    },
    // 表示するコンテンツの切り替え
    changeContent: function (content) {
      this.currentContent = content;
      this.suggestShow = false;
      this.clickSmoothScroll();
    },
    // コンテンツの切り替え時、コンテンツトップまでスクロール
    clickSmoothScroll: function () {
      this.$SmoothScroll(document.getElementById("suggest-section"), 800);
    },
  },
};
</script>

<style lang="scss">
@import url("https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Ubuntu:ital,wght@1,700&display=swap");
@import "./assets/css/main";
</style>
