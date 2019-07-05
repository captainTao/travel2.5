<template>
  <div class="detail">
    <detail-header></detail-header>
    <detail-nav></detail-nav>
    <detail-list :list='list'></detail-list>
    <div class="content"></div>
  </div>
</template>

<script>

import detailHeader from '@/views/detail/header.vue'
import detailNav from '@/views/detail/topnav.vue'
import detailList from '@/views/detail/detailist.vue'
import axios from 'axios'
export default {
  name: 'detail',
  components: {
    detailHeader,
    detailNav,
    detailList
  },
  data(){
    return{
      list: [{
        title:'成人票',
        children:[{
          title: '成人三馆联票',
          children: [{
            title: '成人三馆联票-VIP'
          }]
        },{
          title: '成人五馆联票'
        }]
    },{
      title:'学生票'
    },{
      title:'儿童票'
    },{
      title:'特惠票'
    },]
    }
  },
  methods: {
    getDetailInfo(){
      // axios.get('/api/detail?id='+this.$route.params.id)
      axios.get('/api/detail',{
        params:{
          id: this.$route.params.id
        }}
      ).then(this.handleGetDataSucc)
    },
    handleGetDataSucc(res){
      res=res.data
      if(res.ret&&res.data){
        // const data = res.data
        //数据处理...console.log(data)
      }
    }
  },
  mounted(){
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
.content
  height: 50rem
</style>
