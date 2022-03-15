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
export default {
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
}

h1 {
  line-height: 3rem;
  margin-bottom: 4px;
}

.block {
  padding-bottom: 5rem;
  h2 {
    padding: 0 2rem;
    margin: 1rem;
    font-size: 1.8rem;
  }

  p {
    margin: 1rem;
    padding: 0 2rem;
    font-size: 1.6rem;
  }
  i {
    font-size: 2rem;
  }

  @include md {
    width: 50%;
    img {
      width: 80%;
    }
  }

  &:last-child {
    justify-content: start;
  }
}
</style>
