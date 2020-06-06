Vue.config.devtools = true;
Vue.component('wait', {
  template: "<i class='material-icons'>chat_bubble_outline</i>"
})

Vue.component('carrer', {
  template: `
    <div id="carrer-component">
      <div class="content-area">
        <table>
          <tr>
            <th>年</th>
            <th>月</th>
            <th>職歴・学歴</th>
          </tr>
          <tr>
            <td>2016</td>
            <td>3</td>
            <td>龍谷大学経済学部卒業</td>
          </tr>
          <tr>
            <td>2016</td>
            <td>4</td>
            <td>京都市内の社会福祉法人にて3年半勤務</td>
          </tr>
          <tr>
            <td>2019</td>
            <td>10</td>
            <td>職業訓練校でプログラミングを学ぶ</td>
          </tr>
        </table>
        <aside id="modalContent">
          <img @click="modalToggle()" src="img/nekoatsume.JPG" />
          <div id="overlay" v-cloak v-if="showContent" @click="modalToggle">
            <div id="overlay-content">
              <img src="img/row-nekoatsume.JPG" />
              <p class="text-center">猫が好き</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  `
})

Vue.component('work', {
  template: `
  <div id="works-component">
    <div class="content-area">
      <article>
        <h1>Going Over CSS</h1>
        <p>CSSをGoingOverするサイトです。</p>
        <img src="img/og-image.jpeg" />
      </article>
      <article>
        <h1>リメンバー・カリキュレーター</h1>
        <p>ユーザー登録機能を持った計算機です</p>
        <img src="img/remenber-calc.png" />
        <p><a href="https://github.com/kohjean/rememberCalclator">GitHubリポジトリ</a></p>
      </article>
      <article>
        <h1>アニマル・ウェルフェアOSS</h1>
      </article>
    </div>
  </div>
    `
})

Vue.component('contact', {
  template: `
    <div id="contact-component">
      <div class="content-area">
        <h3>コンタクト</h3>
      </div>
    </div>
    `
})

var modalWindow = new Vue({
  el: '#modalContent',
  data: {
    showContent: false
  },
  methods: {
    modalToggle: function() {
      showContent = !showContent;
    }
  }
})

var content = new Vue({
  el: '#container',
  data: {
    currentContent: 'wait',
  },
  methods: {
    changeContent: function(content) {
      this.currentContent = content;
    }
  }
})

