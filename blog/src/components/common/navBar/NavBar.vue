<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',

  components: {},

  directives: {},

  data() {
    return {}
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 60px;
  line-height: 60px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(150, 150, 150, 0.5);
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>
