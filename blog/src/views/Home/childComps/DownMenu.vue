<template>
  <div class="down">
    <div @click="home">
      主页
    </div>
    <div @click="project">
      项目
    </div>
    <div @click="photo">摄影</div>
    <div @click="me">我</div>
  </div>
</template>

<script>
export default {
  name: 'Downmenu',

  components: {},

  directives: {},

  data() {
    return {}
  },

  mounted() {},

  methods: {
    home() {
      console.log('home')
      this.$router.push('/home')
    },
    me() {
      console.log('me')
      this.$router.push('/me')
    },
    photo() {
      console.log('photo')
      this.$router.push('/photo')
    },
    project() {
      console.log('project')
      this.$router.push('/project')
    },
  },
}
</script>

<style scoped>
.down {
  margin-top: 0;

  background: rgb(31, 31, 31);
}
.down div {
  color: rgb(255, 255, 255);
  font-size: 15px;
}
</style>
