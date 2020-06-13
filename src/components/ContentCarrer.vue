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
          <img src="img/nekoatsume.JPG" />
        </aside>
      </div>
      <div id="skill-graph">
        <Chart>

        </Chart>
      </div>
      <div id="skillset">
        <h2>フロントサイド</h2>
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
        <dl>
          <dt>PHP7</dt>
          <dd>開発歴：<span>2019/ 12 ~</span></dd>
          <dd>一番得意(≒好き)な言語。</dd>
          <dd>データベースドリブンWebサイトが作れる。</dd>
          <dd>セキュリティに配慮した実装を心掛け、不安があれば検証する。</dd>
          <dt>MySQL</dt>
          <dd>開発歴：<span>2019/ 12 ~</span></dd>
        </dl>
        <h2>開発ツール等</h2>
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
  import Chart from './Chart.vue'
  export default {
    // name: 'ContentCarrer',
    components: {
      Chart
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

  // ¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥
  #skill-graph {
    width: 100%;

    @include sm {
      display: block;
      // position: relative;
      width: 100%;
      margin: 0 auto;

      canvas {
        max-width: 480px;
      }
    }
  }

  aside {
    img {
      width: 100%;
    }

    @include sm {
      width: 30%;

      img {
        width: 100%;
        border-radius: 10px;
      }
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
  }
</style>