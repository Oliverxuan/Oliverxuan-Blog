<template>
  <div id="items">
    <div class="title"><slot name="title"></slot></div>
    <div class="about"><slot name="about"></slot></div>
    <div class="skills"><slot name="skills"></slot></div>
    <div class="link">
      <slot name="kinds"></slot>
      <slot name="github"></slot>
      <slot name="look"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Items',

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
.link {
  color: rgb(170, 163, 163);
  display: flex;
}
</style>
