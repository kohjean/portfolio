<template>
  <div id="container">
    <header>
      <h1 class="text-center" id="what">Portfolio</h1>
      <h2 class="text-center" id="who">Koji Ishii</h2>
      <p id="when">
        <span class="text-wrap">Latest Update</span>
        <span class="text-wrap">: 2020/ 6/ 11</span>
      </p>
    </header>
    <nav id="content-nav">
      <ul class="flex text-center">
        <li @click="changeContent('carrer')">
          <i class="material-icons">assignment_ind</i>
          <p>Carrer / Skill</p>
        </li>
        <li @click="changeContent('work')">
          <i class="material-icons">desktop_windows</i>
          <p>Works</p>
        </li>
        <li @click="changeContent('contact')">
          <i class="material-icons">question_answer</i>
          <p>Contact / Recruit</p>
        </li>
      </ul>
    </nav>
    <div id="click-suggest">
      <ul class="flex text-center"> 
        <li>
          <i class="material-icons">keyboard_arrow_up</i>
        </li>
        <li>
          <i class="material-icons">keyboard_arrow_up</i>
        </li>
        <li>
          <i class="material-icons">keyboard_arrow_up</i>
        </li>
      </ul>
      <p class="text-center">Please click icon.</p>
    </div>
    <section id="main-contents">
      <component :is="currentContent">
        
      </component>
    </section>
  </div>
</template>

<script>
import ContentCarrer from './components/ContentCarrer.vue'
export default {
  name: 'App',
  components: {
    ContentCarrer
  }
}
</script>

<style lang="scss" scope>
@import 'https://fonts.googleapis.com/icon?family=Material+Icons';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
