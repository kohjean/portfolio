<template>
  <div id="personal-component" class="component">
    <h1>Personal</h1>
    <div class="content-area">
      <h3>Hobby</h3>
      <div class="item-container">
        <section>
          <p>Skateboard</p>
          <div class="gif-flame">
            <img
              src="../../public/img/skate.gif"
              alt="スケートボードに乗って階段から飛び降りるgif。"
            />
          </div>
        </section>
        <section>
          <p>湧水巡り</p>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1v9d-5X_C-WgT18W4n99VuWeO6a_afQmZ&ehbc=2E312F"
            width="640"
            height="480"
          ></iframe>
        </section>
        <section>
          <p>Bonfire</p>
          <img
            src="../../public/img/atsukan.jpg"
            alt="キャンプをした時の写真。徳利を湯煎する様子。"
          />
        </section>
        <section>
          <p>Develop in Garage</p>
          <img src="../../public/img/develop_warehouse.png" />
        </section>
      </div>

      <h3>Personality</h3>
      <div class="item-container">
        <section class="position-anchor">
          <p>Gamushara</p>
          <figure>
            <img
              src="../../public/img/when-i-was-kid.jpg"
              alt="作成者が幼稚園生の頃の写真。運動会で綱引きをしている様子"
            />
            <figcaption class="text-center">
              歯をむき出しにしているのが私です
            </figcaption>
          </figure>
          <div id="stamp">
            <img src="../../public/img/stamp.png" />
          </div>
        </section>
      </div>
    </div>
    <div class="contents-pagenation">
      <ul>
        <li @click="changeContent('Works')">Works</li>
        <li @click="changeContent('Career')">Career</li>
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
      this.$emit('change-content', content);
    },
  },
};
</script>
<style lang="scss" scoped>
h3 {
  font-family: 'Ubuntu', 'Lobster', cursive;
  font-size: 3.2rem;
  margin-left: 1.6rem;
}

img {
  max-height: 40rem;
  object-fit: cover;
}

.content-area {
  & > div {
    margin-bottom: 3rem;
  }
}

section {
  margin: 2.4rem 0;
  & > p {
    font-size: 1.8rem;
    margin: 0.8rem 1.6rem;
    line-height: 1.6rem;
    text-align: left;
    font-weight: bold;
  }
}

iframe {
  max-width: 100%;
  height: 40rem;
  border: none;
}

@include md {
  h3 {
    display: inline-block;
    border-bottom: 4px solid #c21500;
    border-image: linear-gradient(to right, #c21500 0%, #ffc500 100%);
    border-image-slice: 1;
    margin-left: 6%;
  }
  .item-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    section {
      width: 46%;
      padding: 0 4%;
      margin: 3.2rem 2%;
      & > p {
        margin: 0.8rem 0;
      }
    }
    .gif-flame {
      filter: drop-shadow(2px 4px 6px $main-black);
    }
  }
}

// 大変よくがんばりますスタンプの表示
.position-anchor {
  position: relative;
  width: 100%;
}
#stamp {
  position: absolute;
  top: -1rem;
  right: 3rem;
  width: 33%;
  transform: rotate(9deg);
}
</style>
