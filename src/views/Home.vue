<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <router-link to="/list">Go to List</router-link>
  </div>
</template>

<script>

// import HelloWorld from '@/components/HelloWorld.vue'
import homeHeader from '@/views/home/nav.vue'
import homeSwiper from '@/views/home/swiper.vue'
import homeIcons from '@/views/home/icons.vue'
export default {
  name: 'home',
  components: {
    // HelloWorld,
    homeHeader,
    homeSwiper,
    homeIcons
  }
}
</script>
