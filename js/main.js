Vue.config.devtools = true;
Vue.component('wait', {
   template: "<p>wainting ...</p>"
})

Vue.component('carrer', {
  template: `
		<div id="carrer-component" class="component">
			<h1 class="text-center">経歴 / スキル</h1>
			<div class="content-area">
				<div id="carrer-table">
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
  `
})

Vue.component('work', {
  template: `
		<div id="works-component" class="component">
			<h1 class="text-center">制作システム</h1>
			<div class="content-area">
				<article>
					<h1>Going Over CSS</h1>
					<img src="img/og-image.jpeg" />
					<h2>詳細情報</h2>
					<p>ユーザーのGitHubリポジトリに置かれたCSSファイルを登録し、CDN経由で配布します。</p>
					<p>公開されているWEBサイトに上書きする形でCSSを書き換え、"落書き"感覚でコードを共有できます。</p>
					<p>無論、元のサイトに影響はありません。書き換えはクライアント側でのみ起こります。</p>
					<p></p>
					<p><a href="http://goingover.net">GoingOverCSS</a></p>
					<p>※PC環境向けです</p>
				</article>
				<article>
					<h1>リメンバー・カリキュレーター</h1>
					<img src="img/remenber-calc.png" />
					<h2>詳細情報</h2>
					<p>ユーザー登録機能を持った計算機です。</p>
					<p>自分作ったラベル対して計算結果をデータベースに保存していくことが出来ます。</p>
					<p>Ajax通信を勉強する用として作成しました。ページ遷移なくデータが追加されます。</p>
					<p><a href="https://github.com/kohjean/rememberCalclator">GitHub/kohjean</a></p>
				</article>
			</div>
		</div>
  `
})

Vue.component('contact', {
  template: `
    <div id="contact-component" class="component">
      <div class="content-area">
        <h3>コンタクト</h3>
      </div>
    </div>
  `
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

var contentNav = document.getElementById('content-nav');
var suggest = document.getElementById('click-suggest');
var icons = suggest.getElementsByClassName('material-icons');
var timer;

// for click suggest
window.onload = function() {
	$('#click-suggest p').css({ opacity: 1});
	suggestMove();
}

// 矢印の動き
function suggestMove() {
	timer = setTimeout( function() {
		for (i=0; i<icons.length; i++) {
			icons[i].style.transform = 'translateY(-3rem)'; 
			icons[i].style.opacity = 1; 
		}
	}, 800);
}

// コンテンツクリック -> suggestを消してスクロールする
var rect = suggest.getBoundingClientRect();
var position = rect.top;

contentNav.onclick = function() {
	suggest.remove();	
	clearInterval(timer);
	$('html,body').animate({
		scrollTop: position
	}, 500, 'swing');
}

// end click suggest

