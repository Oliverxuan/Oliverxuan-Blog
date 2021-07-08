<template>
  <div class="title">
    <div class="bbo"></div>
    <item>
      <div slot="center">
        <h1>Hi👋 &nbsp; I'am Oliver</h1>
        <div class="text-s">
          <h3>I am trying to make my life better</h3>
          <div>
            这里是我的个人网站,我将展示一些学习项目
          </div>
          <div>
            以及一些个人摄影作品。
          </div>
        </div>
      </div>
    </item>
    <item v-for="item in items">
      <div slot="top"><img class="imgs" :src="item.img" alt="" /></div>
      <div slot="center">{{ item.title }}</div>
      <div slot="bottom">{{ item.text }}</div>
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
          img: require('../../../assets/img/light.png'),
          title: '网球社团',
          text: '在校期间担任网球社社长一职，多次组织开展校园网球比赛。',
        },
        {
          img: require('../../../assets/img/moon.png'),
          title: '媒体技术',
          text: 'Ps  Pr  Lr  CAD 草图大师',
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
  float: left;
  text-align: left;
  padding: 25px;
}
.bbo {
  padding-top: 25px;
  padding-bottom: 20px;
}
</style>
