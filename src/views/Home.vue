<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-rec></home-rec>
    <home-hot></home-hot>
    <router-link to="/list">Go to List</router-link>
  </div>
</template>

<script>

import homeHeader from '@/views/home/nav.vue'
import homeSwiper from '@/views/home/swiper.vue'
import homeIcons from '@/views/home/icons.vue'
import homeRec from '@/views/home/rec.vue'
import homeHot from '@/views/home/hot.vue'
export default {
  name: 'home',
  components: {
    // HelloWorld,
    homeHeader,
    homeSwiper,
    homeIcons,
    homeRec,
    homeHot
  }
}
</script>
