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
    <nav id="content-nav">
      <ul class="flex text-center">
        <li @click="changeContent('Carrer')">
          <i class="material-icons">assignment_ind</i>
          <p>Carrer / Skill</p>
        </li>
        <li @click="changeContent('Works')">
          <i class="material-icons">desktop_windows</i>
          <p>Works</p>
        </li>
        <li @click="changeContent('Contact')">
          <i class="material-icons">question_answer</i>
          <p>Contact / Recruit</p>
        </li>
      </ul>
    </nav>
    <transition name="fade">
      <ContentsSuggest v-if="show"></ContentsSuggest>
    </transition>
    <section id="main-contents">
      <component :is="currentContent"></component>
    </section>

  </div>
</template>

<script>
  import ContentsSuggest from './components/ContentsSuggest.vue'
  import Wait from './components/ContentWait.vue'
  import Carrer from './components/ContentCarrer.vue'
  import Works from './components/ContentWorks.vue'
  import Contact from './components/ContentContact.vue'
  export default {
    name: 'App',
    components: {
      ContentsSuggest,
      Wait,
      Carrer,
      Works,
      Contact
    },
    data: function() {
      return {
        latestDay: '2020 / 6/ 14',
        currentContent: 'Wait',
        show: false
      }
    },
    created: function() {
      addEventListener('load', this.showSuggest);
      addEventListener('load', this.suggestMove);
      // const carrer = document.getElementById('carrer');
      // carrer.addEventListner('click', function() {})
    },
    methods: {
      showSuggest: function() {
        this.show = true
      },
      changeContent: function(content) {
        this.currentContent = content;
      },
      suggestMove: function() {
        const suggest = document.getElementById('suggestIcons');
        const icons = suggest.getElementsByClassName('material-icons');
        // let timer;
        setTimeout(function() {
          for (let i = 0; i < icons.length; i++) {
            icons[i].style.transform = 'translateY(-3rem)';
            icons[i].style.opacity = 1;
          }
        }, 800);
      }
    }
  }
</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
  @import "./assets/css/main";
  
</style>