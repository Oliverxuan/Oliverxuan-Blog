<template>
  <div class="title">
    <div class="bbo"></div>
    <item>
      <div slot="center">
        <h1>Hi👋 &nbsp; I'am Oliver</h1>
        <div class="text-s">
          <div class="text2">
            <h3 class="h3">I am trying to make my life better</h3>
          </div>
          <hr class="hr1" />

          <div class="text2">
            <div>
              这里是我的个人网站,我将展示一些学习项目
            </div>
            <div>
              以及一些个人摄影作品。
            </div>
          </div>
        </div>
      </div>
    </item>
    <item v-for="item in items">
      <div slot="top"><img class="imgs" :src="item.img" alt="" /></div>
      <div slot="center">{{ item.title }}</div>
      <div slot="hr"><hr class="hr1" /></div>
      <div class="bottom" slot="bottom">{{ item.text }}</div>
    </item>
    <div class="bbo"></div>
  </div>
</template>

<script>
import Item from '../../../components/common/Item/Item.vue'
export default {
  name: 'Showitem',

  components: { Item },

  directives: {},

  data() {
    return {
      items: [
        {
          img: require('../../../assets/img/moon.png'),
          title: '前端技术栈',
          text: 'Html  Css  Javascript  Vue  node.js  axios  bootstrap  Es6',
        },
        {
          img: require('../../../assets/img/cat.png'),
          title: '后端技术栈',
          text: 'Java C Jdbc  Mysql  servlet',
        },
        {
          img: require('../../../assets/img/tree.png'),
          title: '服务器搭建',
          text: 'Tomcat',
        },

        {
          img: require('../../../assets/img/moon.png'),
          title: '媒体技术',
          text: 'Ps  Pr  Lr  CAD 草图大师',
        },
        {
          img: require('../../../assets/img/light.png'),
          title: '网球社团',
          text: '担任网球社社长，多次组织开展校园网球比赛。',
        },
      ],
    }
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped>
.imgs {
  width: 100%;
  height: auto;
}
.text-s {
  text-align: center;
  text-align-last: left;
  padding: 25px;
  padding-top: 10px;
  font-weight: 200;
}
.bbo {
  padding-top: 25px;
  padding-bottom: 20px;
}
.text2 {
  margin-top: 0px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.664);
}
.hr1 {
  margin-bottom: 10px;
  height: 1px;
  border: none;
  border-top: 1px solid rgb(207, 207, 207);
}
.bottom {
  text-align-last: center;
}
.text2 {
  align-content: center;
}
.h3 {
  text-align: center;

  color: aliceblue;
}
</style>
