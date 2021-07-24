<template>
  <div id="photo">
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
    <div class="show">
      <item v-for="item in items" class="show">
        <div slot="top"><img class="imgs" :src="item.img" alt="" /></div>
        <div slot="center">{{ item.title }}</div>

        <div class="bottom" slot="bottom">{{ item.text }}</div>
      </item>
    </div>
  </div>
</template>

<script>
import Item from '../../components/common/Item/Item.vue'
import NavBar from '../../components/common/navBar/NavBar.vue'
import DownMenu from '../Home/childComps/DownMenu.vue'
export default {
  name: 'Photo',

  components: { DownMenu, NavBar, Item },

  directives: {},

  data() {
    return {
      isDown: false,
      items: [
        {
          img: require('../../assets/img/cat.png'),

          text: '2021-1-1',
        },
        {
          img: require('../../assets/img/light.png'),

          text: '2020-6-8',
        },
        {
          img: require('../../assets/img/moon.png'),

          text: '2021-6-10',
        },
        {
          img: require('../../assets/img/tree.png'),

          text: '2020-9-1',
        },
        {
          img: require('../../assets/img/moon.png'),

          text: '2021-6-10',
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
  },
}
</script>

<style scoped>
.show {
  padding-top: 10px;
  margin-top: 30px;
}
#photo {
  background: #000;
  position: relative;
  height: fit-content;
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
.imgs {
  padding: 0;
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
.text2 {
  margin-top: 0px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.664);
}
.hr1 {
  margin-bottom: 0px;
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
