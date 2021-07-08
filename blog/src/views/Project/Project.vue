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
    <div class="items">
      <item v-for="item in items" class="item">
        <h3 slot="top">{{ item.name }}</h3>
        <div slot="center">{{ item.detil }}</div>
        <button></button>
      </item>
    </div>
  </div>
</template>

<script>
import Item from '../../components/common/Item/Item.vue'
import NavBar from '../../components/common/navBar/NavBar.vue'
import DownMenu from '../Home/childComps/DownMenu.vue'

export default {
  name: 'Project',

  components: { NavBar, DownMenu, Item },

  directives: {},

  data() {
    return {
      isDown: false,
      items: [
        { name: 'vue商场', detil: 'vue+vuex+vuerouter', url: 'www.baidu.com' },
        { name: 'vue商场', detil: 'vue+vuex+vuerouter', url: 'www.baidu.com' },
        { name: 'vue商场', detil: 'vue+vuex+vuerouter', url: 'www.baidu.com' },
        { name: 'vue商场', detil: 'vue+vuex+vuerouter', url: 'www.baidu.com' },
        { name: 'vue商场', detil: 'vue+vuex+vuerouter', url: 'www.baidu.com' },
        { name: 'vue商场', detil: 'vue+vuex+vuerouter', url: 'www.baidu.com' },
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
  },
}
</script>

<style scoped>
#project {
  background: #000;
  position: relative;
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
.items {
  padding-top: 80px;
}
</style>
