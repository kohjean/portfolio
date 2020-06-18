<template>
  <div id="carrer-component" class="component">
    <h1 class="text-center">経歴 / スキル</h1>
    <div class="content-area">
      <div id="carrer-header">
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
      <div id="skillset">
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
          <dd>コーディングはセマンティクスを意識しつつ、見易さを重視。</dd>
          <dd>レスポンシブデザインできます。</dd>
          <dd>半年ほど前からはSCSSを使用。Bootstrap4も多少使用経験あり。</dd>
          <dt>JavaScript</dt>
          <dd>開発歴：<span>2019/ 4 ~</span></dd>
          <dd>学習初期からjQueryを使用。バニラjsはあまり触っていない。</dd>
          <dd>jQueryと併用する形でVue.jsも学習中。</dd>
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
          <dd>一番得意(≒好き)な言語。</dd>
          <dd>データベースドリブンWebサイトが作れる。</dd>
          <dd>セキュリティに配慮した実装を心掛け、不安があれば検証する。</dd>
          <dt>MySQL</dt>
          <dd>開発歴：<span>2019/ 12 ~</span></dd>
        </dl>
        <h2>開発ツール,フレームワーク</h2>
        <div class="devIcons">
          <i class="devicon-git-plain-wordmark colored"></i>
          <i class="devicon-jquery-plain-wordmark colored"></i>
          <i class="devicon-vuejs-plain-wordmark colored"></i>
        </div>
        <dl>
          <dt>Git</dt>
          <dd>基本的な使い方は理解している。CLIで使用。</dd>
          <dt>bash</dt>
          <dd>基本的なコマンドは使える。オプションは不自由。</dd>
          <dd>間違っても<code>rm -rf /</code>やその変形を実行する事はない。</dd>
          <dt>Linux</dt>
          <dd>教材に沿ってUbuntu環境でVagrantを使った開発経験あり。CircleCI, Node.jsに触れた。</dd>
          <dt>Vim</dt>
          <dd><code>vimtutor</code>3章まで学習。</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
  import RadarChart from './RadarChart'
  import PieChart from './PieChart'
  export default {
    name: 'ContentCarrer',
    data() {
      return {
      }
    },
    components: {
      RadarChart,
      PieChart
    }
  }
</script>

<style lang="scss" scoped>

#carrer-header {
  @include sm {
    display: flex;
    justify-content: space-around;
  }
}

dl {
  width: 100%;

  td:nth-child(2) {
    text-align: center;
  }

  dt {
    border-bottom: 1px solid #264653;
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

aside {
  img {
    width: 100%;
  }
  figcaption {
    font-size: 12px;
    text-align: center;
  }
  @include sm {
    width: 30%;

    img {
      width: 100%;
      border-radius: 10px;
    }
  }
}

.devIcons {
  text-align: center;
  font-size: 8rem;
  i {
    margin: 0 1rem;
  }
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