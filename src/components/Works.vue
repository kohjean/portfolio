<template>
  <div id="works-component" class="component">
    <h1 class="text-center">制作システム</h1>
    <div class="content-area">
      <div class="block">
        <div class="text-center">
          <h1>Fishborn chart converter</h1>
          <a
            href="https://kohjean.github.io/markdown-to-fishborn-chart-converter/"
            target="_blank"
            rel="noopener"
          >
            <img src="img/fishbornchart-converter.png" />
          </a>
        </div>
        <h2>詳細情報</h2>
        <p>マークダウンから特性要因図を作図します。</p>
        <p>
          <i class="devicon-github-original colored"></i>
          <a
            href="https://kohjean.github.io/markdown-to-fishborn-chart-converter/"
            target="_blank"
          >
            Deploy Pages</a
          >
        </p>
        <p>
          <i class="devicon-github-original colored"></i>
          <a
            href="https://github.com/kohjean/markdown-to-fishborn-chart-converter"
            target="_blank"
          >
            Repository</a
          >
        </p>
        <DevBadges :srcset="md2fbc" />
      </div>
      <div class="block">
        <div class="text-center">
          <h1>Going Over CSS</h1>
          <a href="http://goingover.net" target="_blank">
            <img src="img/og-image.jpeg" />
          </a>
        </div>
        <h2>詳細情報</h2>
        <p>CSSファイルをCDNで配布,上書きしてサイトの見た目をハックします。</p>
        <p>
          無論、書き換えはクライアント側でのみ起こるので、元のサイトに影響は与えません。
        </p>
        <p>GitHubのリポジトリを活用し、コードを共有します。</p>
        <p><strong>Going Over:</strong>上から絵を描くこと。</p>
        <p>
          <a href="http://goingover.net" target="_blank"> GoingOverCSS </a>
        </p>
        <p>※PC環境向けです</p>
        <DevBadges :srcset="goingOver" />
      </div>
      <div class="block">
        <div class="text-center">
          <h1>Blog</h1>
          <a href="https://full-push.com" target="_blank">
            <img src="img/blog.png" />
          </a>
        </div>
        <h2>詳細情報</h2>
        <p>開発備忘録</p>
        <p>
          <a href="https://full-push.com" target="_blank"> full-push.com </a>
        </p>
        <DevBadges :srcset="fullpush" />
      </div>
      <div class="block">
        <div class="text-center">
          <h1>Sharm</h1>
          <a href="https://hotel-sharm.com" target="_blank noopener">
            <img src="img/sharm.png" />
          </a>
        </div>
        <h2>詳細情報</h2>
        <p>コミュニティでの共同開発</p>
        <p>
          <a href="https://hotel-sharm.com" target="_blank">
            hotel-sharm.com
          </a>
        </p>
        <DevBadges :srcset="sharm" />
      </div>
      <div class="block">
        <div class="text-center">
          <h1>記憶機能付き計算機</h1>
          <img src="img/remenber-calc.png" />
        </div>
        <h2>詳細情報</h2>
        <p>ユーザー登録機能を持った計算機です。</p>
        <p>
          自分作ったラベル対して計算結果をデータベースに保存していくことが出来ます。
        </p>
        <p>
          Ajaxを勉強する用として作成しました。非同期通信を行い、ページ遷移なくデータが追加されます。
        </p>
        <p>
          <a
            href="https://github.com/kohjean/rememberCalclator"
            target="_blank"
          >
            GitHub/kohjean
          </a>
        </p>
        <DevBadges :srcset="rememberCalc" />
      </div>
    </div>
    <div class="contents-pagenation">
      <ul>
        <li @click="changeContent('Career')">Career</li>
        <li @click="changeContent('Personal')">Personal</li>
      </ul>
    </div>
  </div>
</template>
<script>
import DevBadges from './DevBadges.vue';
export default {
  components: { DevBadges },
  data() {
    return {
      content: String,
      md2fbc: [
        'https://img.shields.io/badge/%20-React-282C34?style=flat-square&logo=react&logoColor=5ED3F3',
      ],
      goingOver: [
        'https://img.shields.io/badge/-jQuery-0769AD?style=flat-square&logo=jQuery&logoColor=white',
        'https://img.shields.io/badge/-EC2-FF9900?style=flat-square&logo=AmazonEC2&logoColor=white',
        'https://img.shields.io/badge/-Apache-D22128?style=flat-square&logo=Apache&logoColor=white',
        'https://img.shields.io/badge/-MySQL-42759C?style=flat-square&logo=MySQL&logoColor=white',
        'https://img.shields.io/badge/-PHP-7377AD?style=flat-square&logo=PHP&logoColor=white',
      ],
      fullpush: [
        'https://img.shields.io/badge/-Gatsby-663399?style=flat-square&logo=Gatsby&logoColor=white',
        'https://img.shields.io/badge/-Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=282C34',
        'https://img.shields.io/badge/-Lambda-FF9900?style=flat-square&logo=AWSLambda&logoColor=282C34',
        'https://img.shields.io/badge/-DynamoDB-4053D6?style=flat-square&logo=AmazonDynamoDB&logoColor=white',
        'https://img.shields.io/badge/-API Gateway-D2A23F?style=flat-square&logo=AmazonAPIGateway&logoColor=282C34',
      ],
      sharm: [
        'https://img.shields.io/badge/%20-React-282C34?style=flat-square&logo=react&logoColor=5ED3F3',
        'https://img.shields.io/badge/-Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=white',
      ],
      rememberCalc: [
        'https://img.shields.io/badge/-jQuery-0769AD?style=flat-square&logo=jQuery&logoColor=white',
        'https://img.shields.io/badge/-Apache-D22128?style=flat-square&logo=Apache&logoColor=white',
        'https://img.shields.io/badge/-MySQL-42759C?style=flat-square&logo=MySQL&logoColor=white',
        'https://img.shields.io/badge/-PHP-7377AD?style=flat-square&logo=PHP&logoColor=white',
      ],
    };
  },
  methods: {
    changeContent: function (content) {
      this.content = content;
      this.$emit('change-content', content);
    },
  },
};
</script>
<style lang="scss" scoped>
.content-area {
  margin: 0 auto;
  @include md {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .block {
    padding: 1rem 5% 5rem;
    @include md {
      width: 50%;
    }
    
    h1 {
      line-height: 3rem;
      margin-bottom: 4px;
    }
    h2 {
      padding: 0 2rem;
      margin: 1rem;
      font-size: 1.8rem;
    }
    p {
      margin: 1rem 0;
    }
    i {
      font-size: 2rem;
    }
    img {
      object-fit: contain;
      max-height: 500px;
    }
    &:last-child {
      justify-content: start;
    }
  }
}
</style>
