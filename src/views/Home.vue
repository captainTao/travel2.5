<template>
  <div class="home">
    <home-header :city="city"></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-rec></home-rec>
    <home-hot :hotList='hotList'></home-hot>
    <home-like :likeList='likeList'></home-like>
  </div>
</template>

<script>

import homeHeader from '@/views/home/nav.vue'
import homeSwiper from '@/views/home/swiper.vue'
import homeIcons from '@/views/home/icons.vue'
import homeRec from '@/views/home/rec.vue'
import homeHot from '@/views/home/hot.vue'
import homeLike from '@/views/home/like.vue'
import axios from 'axios'
// import { mapState } from 'vuex'

export default {
  name: 'home',
  components: {
    // HelloWorld,
    homeHeader,
    homeSwiper,
    homeIcons,
    homeRec,
    homeHot,
    homeLike
  },
  data(){
    return{
      city:'',
      lastCity:'',
      swiperList:[],
      iconList:[],
      hotList:[],
      likeList:[]
    }
  },
  computed: {
    // ...mapState(['city'])
  },
  methods: {
    getHomeInfo(){
      axios.get('/api/index')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      // console.log(res)
      res = res.data
      if(res.ret && res.data){
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.hotList = data.hotList
        this.likeList = data.likeList
      }
    }
  },
  mounted(){
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated(){
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>
