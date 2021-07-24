<template>
  <div id="project">
    <nav-bar class="nav-bar">
      <div class="left" slot="left">
        <span class="glyphicon glyphicon-menu-left" @click="backHome"></span>
      </div>
      <div class="nav-center" slot="center">Oliver-xuan</div>
      <div slot="right">
        <span
          @click="downClick"
          class="glyphicon glyphicon-align-justify"
        ></span>
        <down-menu v-show="isDown"></down-menu>
      </div>
    </nav-bar>

    <div class="items-home">
      <items class="items" v-for="item in items">
        <div class="title" slot="title">{{ item.name }}</div>
        <div class="skills" slot="skills">{{ item.skill }}</div>
        <div class="about" slot="about">{{ item.detil }}</div>
        <div class="kinds" slot="kinds">{{ item.kinds }}</div>
        <div @click="goto(item.git)" class="git" slot="github">
          {{ item.isgit }}
        </div>
      </items>
    </div>
    <div class="box"></div>
  </div>
</template>

<script>
import Item from '../../components/common/Item/Item.vue'
import NavBar from '../../components/common/navBar/NavBar.vue'
import Items from '../../components/content/items/Items.vue'
import DownMenu from '../Home/childComps/DownMenu.vue'

export default {
  name: 'Project',

  components: { NavBar, DownMenu, Item, Items },

  directives: {},

  data() {
    return {
      isDown: false,
      items: [
        {
          name: 'Oliver-Blog',
          skill: 'vue+vuex+vue-router+html+css+js',
          detil: '基于Vue的个人网站',
          git: 'https://github.com/Oliverxuan/Oliverxuan-Blog',
          isgit: '源码(GitHub)',
          kinds: '前端',
        },
        {
          name: '购物街',
          skill: 'vue+vuex+axios+html+js+css+axios',
          detil: '基于Vue的商场项目',
          git: 'https://github.com/Oliverxuan/supermall',
          isgit: '源码(GitHub)',
          kinds: '前端',
        },
        {
          name: '网抑云音乐',
          skill: 'vue+vue-router+html+css+js+axios',
          detil: 'Vue初体验',
          git: 'https://github.com/Oliverxuan/supermall',
          isgit: '源码(GitHub)',
          kinds: '前端',
        },
        {
          name: 'Oliver',
          skill: 'Html+Css+JavaScript',
          detil: '个人静态网站',
          git: 'https://github.com/Oliverxuan/supermall',
          isgit: '源码(GitHub)',
          kinds: '前端',
        },
        {
          name: '尚硅谷书城',
          skill: 'html+css+js+servlet+mysql+jdbc',
          detil: 'JavaWeb初体验',
          git: 'https://github.com/Oliverxuan/supermall',
          isgit: '源码(GitHub)',
          kinds: '后端',
        },
        {
          name: '商品信息管理系统',
          skill: 'Java+Jdbc+mysql',
          detil: 'jdbc与mysql的练习项目',
          git: 'https://github.com/Oliverxuan/supermall',
          isgit: '源码(GitHub)',
          kinds: '后端',
        },
        {
          name: '工作人员调度系统',
          skill: 'Java',
          detil: '深刻理解MVC设计模式，巩固Java基础',
          git: 'https://github.com/Oliverxuan/supermall',
          isgit: '源码(GitHub)',
          kinds: '后端',
        },
      ],
    }
  },

  mounted() {},

  methods: {
    downClick() {
      this.isDown = !this.isDown
    },
    backHome() {
      this.$router.push('/home')
    },
    goto(url) {
      console.log(url)
      window.open(url)
    },
  },
}
</script>

<style scoped>
#project {
  background: #000;
  position: relative;
  height: auto;
}
.nav-bar {
  height: 60px;
  background-color: rgb(31, 30, 30);
  color: aliceblue;
  font-size: 25px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  padding-bottom: 0;
}
.items-home {
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.title {
  font-size: 30px;
  color: rgb(253, 253, 253);
}
.skills {
  font-size: 15px;
  color: rgba(178, 185, 82, 0.746);
}
.about {
  font-size: 15px;
  font-weight: 150;
  color: rgb(230, 230, 230);
}
.items {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  padding-bottom: 5px;
  border-radius: 5px 5px 5px 5px;
  width: 95%;
  height: auto;
  background-color: rgb(73, 73, 73);
}
.num {
  color: rgb(221, 221, 221);
}
.git {
  padding: 1px;
  margin-left: 50px;
  padding-left: 3px;
  padding-right: 3px;
  border-radius: 5px 5px 5px 5px;
  background: rgb(155, 116, 116);
}
.kinds {
  padding: 1px;
  padding-left: 3px;
  padding-right: 3px;
  border-radius: 5px 5px 5px 5px;
  background: rgb(24, 118, 124);
}
.box {
  height: 30px;
}
</style>
