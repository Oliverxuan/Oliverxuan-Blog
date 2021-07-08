<template>
  <div id="me">
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
    <div class="me">
      <h1>Oliver-xuan</h1>
    </div>
  </div>
</template>

<script>
import NavBar from '../../components/common/navBar/NavBar.vue'
import DownMenu from '../Home/childComps/DownMenu.vue'
export default {
  name: 'Me',

  components: { NavBar, DownMenu },

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
    backHome() {
      this.$router.push('/home')
    },
  },
}
</script>

<style scoped>
#me {
  background: #000;
  position: relative;
  height: 100vh;
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
.me {
  padding-top: 40px;
  color: aliceblue;
}
</style>
