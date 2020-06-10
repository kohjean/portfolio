Vue.config.devtools = true;
Vue.component('wait', {
   template: "<p>wainting ...</p>"
})

Vue.component('carrer', {
  template: `
		
  `
})

Vue.component('work', {
  template: `
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

const content = new Vue({
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

const contentNav = document.getElementById('content-nav');
const suggest = document.getElementById('click-suggest');
const icons = suggest.getElementsByClassName('material-icons');
let timer;

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
const rect = suggest.getBoundingClientRect();
const position = rect.top;

contentNav.onclick = function() {
	suggest.remove();	
	clearInterval(timer);
	$('html,body').animate({
		scrollTop: position
	}, 500, 'swing');
}

// end click suggest

//  for chart
const chartConfig = {
	type: 'pie',
	data: {
		labels: ['CSS', 'JS', 'PHP', 'HTML', 'Others'],
		position: 'right',
		animation: {
			onProgress: function(animation) {
					progress.value = animation.animationObject.currentStep / animation.animationObject.numSteps;
			}
		},
		boxWidth: 10,
		datasets: [{
			backgroundColor: [
				"#e76f51",
				"#f4a261",
				"#e9c46a",
				"#2a9d8f",
				"#264653"
			],
			data: [25, 20, 20, 15, 20],
		}]
	},
	options:{
		legend: {
			position: 'right',
			labels: {
				boxWidth: 16,
			},
		},
		title: {
			display: true,
			text: '学習時間の割合',
			position: 'top',
		}
	}
}

$('#skill-chart').on('inview', function() {
	const ctx = document.getElementById('skill-chart');
	const myChart = new Chart(ctx, chartConfig);
});
// 