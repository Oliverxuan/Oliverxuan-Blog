<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div class="nav-center" slot="center">Oliver-xuan</div>
      <div slot="right">
        <span
          @click="downClick"
          class="glyphicon glyphicon-align-justify"
        ></span>
        <down-menu v-show="isDown"></down-menu>
      </div>
    </nav-bar>
    <show-item class="show-item" />

    <detil></detil>
  </div>
</template>

<script>
import NavBar from '../../components/common/navBar/NavBar.vue'
import Detil from './childComps/Detil.vue'
import DownMenu from './childComps/DownMenu.vue'
import HomeSwiper from './childComps/HomeSwiper.vue'
import ShowItem from './childComps/ShowItem.vue'

export default {
  name: 'Home',

  components: { NavBar, HomeSwiper, ShowItem, Detil, DownMenu },

  directives: {},

  data() {
    return {
      isDown: false,
    }
  },

  mounted() {},

  methods: {
    downClick() {
      this.isDown = !this.isDown
    },
  },
}
</script>

<style scoped>
#home {
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
.show-item {
  margin-top: 30px;
}
</style>
