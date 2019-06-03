<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <router-link to="/list">Go to List</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import homeHeader from '@/views/home/nav.vue'
import homeSwiper from '@/views/home/swiper.vue'
export default {
  name: 'home',
  components: {
    // HelloWorld,
    homeHeader,
    homeSwiper
  }
}
</script>
