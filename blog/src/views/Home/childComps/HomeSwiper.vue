<template>
  <div>
    <swiper>
      <swiper-item v-for="item in images">
        <img :src="item.img" alt="" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import Swiper from '../../../components/common/swiper/Swiper.vue'
import SwiperItem from '../../../components/common/swiper/SwiperItem.vue'
export default {
  name: 'Homeswiper',

  components: { Swiper, SwiperItem },

  directives: {},

  data() {
    return {
      images: [
        { img: require('@/assets/img/moon.png') },
        { img: require('@/assets/img/light.png') },
        { img: require('@/assets/img/tree.png') },
        { img: require('@/assets/img/cat.png') },
      ],
    }
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped></style>
