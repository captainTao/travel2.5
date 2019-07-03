<template>
    <div class="detailTop">
      <div class="detailHeader" @click="headerClick">
        <div class="detailimg">
            <img src="//img1.qunarzz.com/sight/p0/1903/b6/b6255aaa6dd79ac6a3.img.jpg_600x330_6ee23e52.jpg">
        </div>
        <div class="ctx"><p>三亚海上观光巴士</p></div>
        <div class="pic">26</div>
      </div>
      <detail-preview v-if='showPreview' @back="viewback"></detail-preview>        
    </div>
</template>

<script>
import detailPreview from '@/views/detail/preview.vue'
export default {
  name: 'detailHeader',
  components:{
    detailPreview
  },
  data(){
    return{
        showPreview: false
    }
  },
  methods:{
    headerClick(){
        this.showPreview = true
    },
    viewback(){
        this.showPreview = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.detailHeader
    width: 100%
    height: 0
    padding-bottom: 55%
    overflow:hidden
    background: #eee
    position: relative
.detailimg
    width: 100%
    height: 0
    padding-bottom: 55%
    overflow:hidden
    background: #eee
.detailimg img
    width: 100%
.ctx
    position: absolute
    left: .2rem
    bottom: .2rem
    color: #fff
    line-height: .35rem
    font-size: .35rem
    font-weight: bold
    background-image: -webkit-linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
.pic
    position: absolute
    left: .4rem
    bottom: .7rem
    color: #fff
    line-height: .3rem
    font-size: .15rem
    font-weight: bold
    width: .7rem
    height: .3rem
    background: rgba(0,0,0,.5)
    border-radius: .2rem
</style>
