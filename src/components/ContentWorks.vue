<template>
  <div id="works-component" class="component">
    <h1 class="text-center">制作システム</h1>
    <div class="content-area">
      <article>
        <div class="text-center">
          <h1>Going Over CSS</h1>
          <img src="img/og-image.jpeg" />
        </div>
        <h2>詳細情報</h2>
        <p>ユーザーのGitHubリポジトリに置かれたCSSファイルを登録し、CDN経由で配布します。</p>
        <p>公開されているWEBサイトに上書きする形でCSSを書き換え、"落書き"感覚でコードを共有できます。</p>
        <p>無論、元のサイトに影響はありません。書き換えはクライアント側でのみ起こります。</p>
        <p></p>
        <p><a href="http://goingover.net">GoingOverCSS</a></p>
        <p>※PC環境向けです</p>
      </article>
      <article>
        <div class="text-center">
          <h1>リメンバー・カリキュレーター</h1>
          <img src="img/remenber-calc.png" />
        </div>
        <h2>詳細情報</h2>
        <p>ユーザー登録機能を持った計算機です。</p>
        <p>自分作ったラベル対して計算結果をデータベースに保存していくことが出来ます。</p>
        <p>Ajax通信を勉強する用として作成しました。ページ遷移なくデータが追加されます。</p>
        <p><a href="https://github.com/kohjean/rememberCalclator">GitHub/kohjean</a></p>
      </article>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style lang="scss" scoped>
  .content-area {
    margin: 0 auto;

    @include sm {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      // padding: 1rem;
    }
  }

  article {
    padding-bottom: 5rem;

    h1 {
      text-align: center;
    }

    h2 {
      padding: 0 2rem;
      margin: 1rem;
      font-size: 1.8rem;
      // text-align: left;
    }

    p {
      margin: 1rem;
      padding: 0 2rem;
      font-size: 1.6rem;
    }

    img {
      width: 100%;
    }

    @include sm {
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