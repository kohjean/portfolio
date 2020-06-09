Vue.config.devtools = true;
Vue.component('wait', {
  template: "<i class='material-icons'>chat_bubble_outline</i>"
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
			<h1 class="text-center">制作物</h1>
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

var suggest = document.getElementById('click-suggest');
var contentNav = document.getElementById('content-nav');
var icons = suggest.getElementsByClassName('material-icons');
var timer, timer2;
window.onload = function() {
	suggest.style.opacity = 1;
	suggestMove();
}

function suggestMove() {
	timer = setTimeout( function() {
		for (i=0; i<icons.length; i++) {
			icons[i].style.transform = 'translateY(-40px)'; 
			icons[i].style.opacity = 0; 
		}
		clearInterval(timer2);	
		suggestClear();
	}, 2000);
}

function suggestClear() {
	timer2 = setTimeout( function() {
		for (i=0; i<icons.length; i++) {
			icons[i].style.opacity = 1; 
			icons[i].style.transform = 'translateY(0)'; 
		}
		clearInterval(timer);
		suggestMove();
	}, 1600);
}

contentNav.onclick = function() {
	suggest.remove();	
	clearInterval(timer);
	clearInterval(timer2);	
}

