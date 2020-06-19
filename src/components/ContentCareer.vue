<template>
  <div id="career-component" class="component">
    <h1>経歴 / スキル</h1>
    <div class="content-area">
      <div id="career-header">
        <div>
          <h2>Hello World!</h2>
          <p>1992年生まれ徳島県出身。18歳から京都在住。</p>
          <p>京都は好きだけど暑くて寒いのがキライ。アウトドア派。</p>
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
              <td>職業訓練校で6ヶ月間のWebプログラマー講座を受講</td>
            </tr>
          </table>
        </div>
        <aside>
          <figure>
            <img src="img/nekoatsume.JPG" alt="私が酒蔵の縁側に座っている写真です。周りにphotoshopで合成した猫がたくさんいます。" />
            <figcaption>I like Neko.</figcaption>
          </figure>
        </aside>
      </div>
      <div id="charts">
        <RadarChart class="skill-graph" />
        <PieChart class="skill-graph" />
      </div>
      <div id="skill-set">
        <h2>フロントサイド</h2>
        <div class="devIcons">
          <i class="devicon-html5-plain-wordmark colored"></i>
          <i class="devicon-css3-plain-wordmark colored"></i>
          <i class="devicon-javascript-plain colored"></i>
        </div>
        <dl>
          <dt>HTML5 & CSS3</dt>
          <dd>開発歴：<span>2019/ 4 ~</span></dd>
          <dd></dd>
          <dd>セマンティクスを意識してコーディングしてます。</dd>
          <dd>レスポンシブデザインできます。</dd>
          <dd>2020年の頭ぐらいからSCSSを使ってます。Bootstrap4も多少使用経験あります。</dd>
          <dt>JavaScript</dt>
          <dd>開発歴：<span>2019/ 4 ~</span></dd>
          <dd>学習初期からバニラjsとjQueryを併用しながら使用。</dd>
          <dd>jQueryのajax通信で非同期処理を実装することができます。
          <dd>コンソール画面が好き。</dd>
        </dl>
        <h2>サーバサイド</h2>
        <div class="devIcons">
          <i class="devicon-php-plain colored"></i>
          <i class="devicon-mysql-plain-wordmark colored"></i>
        </div>
        <dl>
          <dt>PHP7</dt>
          <dd>開発歴：<span>2019/ 12 ~</span></dd>
          <dd>開発環境にはMAMPを使用しています。</dd>
          <dd>ログイン認証機能が作れます。</dd>
          <dd>画像のアップロード機能が作れます。</dd>
          <dt>MySQL</dt>
          <dd>開発歴：<span>2019/ 12 ~</span></dd>
          <dd>個人開発の小規模なデータベースを構築しました。</dd>
          <dd>簡単なサブクエリ,テーブル結合を行うSQL文まで書けます。</dd>
        </dl>
        <h2>開発ツール,フレームワーク、その他</h2>
        <div class="devIcons">
          <i class="devicon-git-plain-wordmark colored"></i>
          <i class="devicon-linux-plain colored" style="color:rgb(9,105,203)"></i>
          <i class="devicon-vuejs-plain-wordmark colored"></i>
        </div>
        <dl>
          <dt>Git</dt>
          <dd>CLIベースでの基本的な使い方がわかります。</dd>
          <dd>独学で利用していたので多人数での共同開発に用いた経験はありません。</dd>
          <dt>Linux</dt>
          <dd>簡単なコマンドを使ってファイルの移動や中身の確認、Vimを使って編集するなどの操作が出来ます。</dd>
          <dd>教材に沿ってですがUbuntu環境でVagrantを使った開発も経験しました。同様の教材でCircleCI, Node.jsに触れました。苦手意識を持たないように普段から積極的に使用しています。</dd>
          <dd>古いPCを調達してLinuxMintをブートしたので徐々に使っていこうと思ってます。</dd>
          <dt>Vue.js</dt>
          <dd>このポートフォリオを作るのに使用しました。てこずりました。</dd>
          <dd>
            <code>vue --version</code>
            <code>@vue/cli 4.4.1</code>
          </dd>
          <dd><a href="https://github.com/kohjean/portfolio">GitHubリポジトリ</a></dd>
        </dl>
      </div>
    </div>
    <div class="contents-pagenation">
      <ul>
        <li @click="changeContent('Contact')">Contact</li>
        <li @click="changeContent('Works')">Works</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import RadarChart from './RadarChart'
  import PieChart from './PieChart'
  export default {
    name: 'ContentCareer',
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
    components: {
      RadarChart,
      PieChart
    }
  }
</script>

<style lang="scss" scoped>
#career-header {
  p {
    width: 90%;
    margin: 0 auto;
  }
  @include md {
    display: flex;
    justify-content: space-around;
  }
}

table {
  width: 90%;
  margin: 2rem auto;

  th:nth-child(2) {
    text-align: center;
    padding-right: 1rem;
  }
  td {
    vertical-align: text-top;
  }
  td:nth-child(2) {
    text-align: center;
    padding-right: 1rem;
  }
  
}

aside {
  img {
    width: 100%;
  }
  figcaption {
    font-size: 14px;
    text-align: center;
  }
  @include md {
    width: 30%;

    img {
      width: 100%;
      border-radius: 10px;
    }
  }
}

#charts {
  @include md {
    display: flex;
  }
}

.skill-graph {
  width: 80%;
  margin: 0 auto;
  padding: 2rem 0 4rem;

  @include sm {
    display: block;
    width: 50%;
    max-width: 480px;
    margin: 0 auto;
  }
  @include md {
    width: 40%; 
  }
}

#skill-set {
  width: 90%;
  margin: 0 auto;
  .devIcons {
    text-align: center;
    font-size: 8rem;
    @include md {
      font-size: 12rem
    }
    i {
      margin: 0 1rem;
    }
  }

  dl {
    width: 100%;
    margin-bottom: 5rem;
  }
  
  dt {
    font-size: 1.8rem;
    border-bottom: 2px solid #e76f51e6;
    padding-bottom: 0.8rem;
    margin: 3rem 0 2rem; 
    text-align: center;
  }
  dd {
    padding: 1rem;
  }
  code {
    width: 100%;
    background-color: #eee;
  }
}

.content-area {
  padding-bottom: 3rem;
}

.content-area>div {
  margin-bottom: 5rem;
}

.content-area>div:nth-child(2n) {
  background-color: #e3e3e3;
}
  // #overlay {
  //   z-index: 99;
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background-color: rgba(0, 0, 0, 0.5);
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;

  //   #overlay-content {
  //     z-index: 100;
  //     width: 64%;

  //     p {
  //       background-color: #eee;
  //     }
  //   }
  // }
</style>