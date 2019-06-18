<template>
  <div class="city">
    <city-header></city-header>  
    <city-list :hotCities="hotCities" :cities="cities"></city-list>
    <city-slide></city-slide>
    <h1>This is the city page</h1>
    <router-link to="/">Go to Home</router-link>
  </div>
</template>

<script>
import cityHeader from '@/views/city/header.vue'
import cityList from '@/views/city/list.vue'
import citySlide from '@/views/city/slide.vue'
import axios from 'axios'
export default {
  name: 'City',
  components:{
    cityHeader,
    citySlide,
    cityList
  },
  data(){
    return{
      hotCities:[],
      cities:{}
    }
  },
  methods: {
    getCityInfo(){
      axios.get('/api/city').then(this.getCityInfoSucc)
    },
    getCityInfoSucc(res){
      res=res.data
      if (res.ret&&res.data) {
        const data=res.data
        this.hotCities=data.hotCities
        this.cities=data.cities
      }
    }
  },
  mounted(){
    this.getCityInfo()
  }
}
</script>
