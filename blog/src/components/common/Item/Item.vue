<template>
  <div class="item">
    <div class="top">
      <slot name="top"></slot>
    </div>

    <div class="center"><slot name="center"></slot></div>
    <div class="bottom"><slot name="bottom"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'Item',

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
.item {
  margin: 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 100%;
  background-color: rgb(94, 92, 92);
}

.center {
  flex: 1;
  font-size: 20px;
  padding-bottom: 10px;
  padding-top: 10px;
  color: azure;
}
.skill {
  flex: 1;
  background-color: rgba(138, 202, 152, 0.561);
  width: 30px;
  height: 20px;
  font-size: 10px;
  text-align: center;

  color: aliceblue;
}
.bottom {
  color: rgba(243, 243, 243, 0.685);
}
</style>
