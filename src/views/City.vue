<template>
  <div class="city">
    <city-header :cities="cities"></city-header>  
    <city-list :hotCities="hotCities" :cities="cities" :letter='letter'></city-list>
    <city-slide :cities="cities" @change='anchorChange'></city-slide>
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
      cities:{},
      letter:''
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
    },
    anchorChange(letter){
      this.letter = letter
    }
  },
  mounted(){
    this.getCityInfo()
  }
}
</script>
