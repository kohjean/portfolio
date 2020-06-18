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
    <ContentsNav v-on:change-content="changeContent"></ContentsNav>

    <section id="suggest-section">
      <ContentsSuggest v-show="suggestShow"></ContentsSuggest>
    </section>

    <section id="main-contents">
      <component :is="currentContent"></component>
    </section>

  </div>
</template>

<script>
  import ContentsNav from './components/TheContentNav'
  import ContentsSuggest from './components/ContentsSuggest'
  import Wait from './components/ContentWait'
  import Carrer from './components/ContentCarrer'
  import Works from './components/ContentWorks'
  import Contact from './components/ContentContact'
  export default {
    name: 'App',
    components: {
      ContentsNav,
      ContentsSuggest,
      Wait,
      Carrer,
      Works,
      Contact
    },
    data() {
      return {
        latestDay: '2020 / 6/ 18',
        currentContent: 'Wait',
        suggestShow: false,
      }
    },
    created() {
      addEventListener('load', this.showSuggest);
    },
    methods: {
      showSuggest: function() {
        this.suggestShow = true
      },
      changeContent: function(content) {
        this.currentContent = content;
        this.suggestShow = false;
        this.clickSmoothScroll();
      },
      clickSmoothScroll: function() {
        event.preventDefault()
        this.$SmoothScroll(
          document.querySelector('#suggest-section'),
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