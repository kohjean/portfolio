<template>
  <div id="container">
    <header>
      <h1 class="text-center" id="what">Portfolio</h1>
      <h2 class="text-center" id="who">Koji Ishii</h2>
      <p id="when">
        <span class="text-wrap">Latest Update</span>
        <span class="text-wrap">: {{ latestDay }}</span>
      </p>
    </header>
    
    <ContentsNav v-on:change-content="changeContent" />

    <section id="suggest-section">
      <ContentsSuggest v-show="suggestShow" />
    </section>

    <section id="main-contents">
      <component :is="currentContent" v-on:change-content="changeContent" />
    </section>

  </div>
</template>

<script>
  import ContentsNav from './components/TheContentNav'
  import ContentsSuggest from './components/ContentsSuggest'
  import Wait from './components/ContentWait'
  import Career from './components/ContentCareer'
  import Works from './components/ContentWorks'
  import Contact from './components/ContentContact'
  export default {
    name: 'App',
    components: {
      ContentsNav,
      ContentsSuggest,
      Wait,
      Career,
      Works,
      Contact
    },
    data() {
      return {
        latestDay: '2020 / 6/ 20',
        currentContent: 'Wait',
        suggestShow: false,
      }
    },
    created() {
      // ロード時、コンテンツをfadeInさせる
      addEventListener('load', this.showSuggest);
    },
    methods: {
      showSuggest: function() {
        this.suggestShow = true
      },
      // 表示するコンテンツの切り替え
      changeContent: function(content) {
        this.currentContent = content;
        this.suggestShow = false;
        this.clickSmoothScroll();
      },
      // コンテンツの切り替え時、コンテンツトップまでスクロール
      clickSmoothScroll: function() {
        this.$SmoothScroll(
          document.getElementById('suggest-section'),
          800
        );
      }
    }
  }

</script>

<style lang="scss">
  @import url("https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css");
  @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
  @import "./assets/css/main";
  
</style>