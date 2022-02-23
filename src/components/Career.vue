<template>
  <div id="career-component" class="component">
    <h1>経歴 / スキル</h1>
    <div class="content-area">
      <div id="career-header">
        <div>
          <h2>Hello World!</h2>
          <p>1992年生まれ徳島県出身。18歳から京都在住。</p>
          <p>アウトドア派。スケートボード, キャンプが趣味。飲み物が好き。</p>
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
              <td>2019</td>
              <td>10</td>
              <td>京都市内の社会福祉法人にて3年半勤務のち退職</td>
            </tr>
            <tr>
              <td>2020</td>
              <td>4</td>
              <td>職業訓練校で6ヶ月間のWebプログラマー講座を受講終了</td>
            </tr>
            <tr>
              <td>2020</td>
              <td>7</td>
              <td>株式会社アペイロンにてプログラマーとして勤務</td>
            </tr>
            <tr>
              <td>2021</td>
              <td>11</td>
              <td>株式会社アペイロンを退職</td>
            </tr>
          </table>
        </div>
        <aside>
          <figure>
            <img
              src="img/nekoatsume.JPG"
              alt="私が酒蔵の縁側に座っている写真です。周りにphotoshopで合成した猫がたくさんいます。"
            />
            <figcaption>I like Neko.</figcaption>
          </figure>
        </aside>
      </div>
      <div id="charts">
        <RadarChart class="skill-graph" />
        <PieChart class="skill-graph" />
      </div>
      <div id="skill-set">
        <h2>フロントエンド</h2>
        <div class="devIcons">
          <i class="devicon-sass-original colored"></i>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg"
          />
          <i class="devicon-react-original-wordmark colored"></i>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-original-wordmark.svg"
          />
        </div>
        <h2>サーバサイド</h2>
        <div class="devIcons">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
          />
          <i class="devicon-express-original-wordmark colored"></i>
        </div>
        <h2>クラウド</h2>
        <div class="devIcons">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
          />
          <img src="../../public/img/netlify_logo_icon.png" />
        </div>
        <h2>その他、ツール</h2>
        <div class="devIcons">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
          />
        </div>
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
import RadarChart from "./RadarChart";
import PieChart from "./PieChart";
export default {
  name: "ContentCareer",
  data() {
    return {
      content: String,
    };
  },
  methods: {
    changeContent: function (content) {
      this.content = content;
      this.$emit("change-content", content);
    },
  },
  components: {
    RadarChart,
    PieChart,
  },
};
</script>

<style lang="scss" scoped>
#career-header {
  p,
  table {
    width: 90%;
  }

  p {
    margin: 0 auto;
  }
  table {
    margin: 2rem auto;
    border-collapse: collapse;
    th {
      text-align: center;
      border-bottom: 1px solid #999999;
    }
    td {
      vertical-align: text-top;
      &:nth-child(1),
      &:nth-child(2) {
        padding-right: 4px;
      }
      &:nth-child(2) {
        text-align: right;
      }
    }
  }

  aside {
    figcaption {
      font-size: 14px;
      text-align: center;
    }
    @include md {
      width: 30%;
      img {
        max-width: 380px;
        border-radius: 10px;
      }
    }
  }

  @include md {
    display: flex;
    justify-content: space-around;
  }
}

#charts {
  @include md {
    display: flex;
  }
}

.skill-graph {
  width: 80%;
  max-width: 380px;
  margin: 0 auto;
  padding: 2rem 0 4rem;

  @include md {
    width: 40%;
  }
}

#skill-set {
  width: 90%;
  margin: 0 auto;
  h2 {
    margin-bottom: 1.6rem;
  }
  @include md {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    h2 {
      border-bottom: 2px solid #264653e3;
      color: #264653e3;
    }
    .block {
      width: 48%;
    }
  }
  @include lg {
    .block {
      width: 24%;
    }
  }
  .devIcons {
    text-align: center;
    overflow-wrap: break-word;
    margin-bottom: 2rem;
    * {
      margin: 0 0.8rem;
    }
    i,
    img {
      font-size: 100px;
      width: 100px;
      vertical-align: middle;
      @include md {
        font-size: 120px;
        width: 120px;
      }
    }
  }

  dl {
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

.content-area > div {
  margin-bottom: 5rem;
}

.content-area > div:nth-child(2n) {
  background-color: #e3e3e3;
}
</style>
