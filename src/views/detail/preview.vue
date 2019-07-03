<template>
  <div class="detailPreivew" @click="viewClick">
        <swiper :options="swiperOption">
            <swiper-slide>
                <img src="//img1.qunarzz.com/sight/p0/1903/b6/b6255aaa6dd79ac6a3.img.jpg_600x330_6ee23e52.jpg">
            </swiper-slide>
            <swiper-slide>
                <img src="http://img1.qunarzz.com/sight/p0/1903/a6/a687f83eff54a056a3.img.jpg_r_800x800_f7d9ae43.jpg">
            </swiper-slide>
            <swiper-slide>
                <img src="http://img.mp.itc.cn/upload/20161211/5a7928922d694a7eb95cedfb2334414d_th.jpg">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
  </div>
</template>

<script>
export default {
  name: 'detailPreivew',
  data(){
    return{
        swiperOption:{
            pagination:'.swiper-pagination',
            loop: true,
            effect:'slide',
            paginationType: 'fraction',
            observer: true, //这两个是监控父级元素刷新的话会重新刷新下swiper
            observeParents: true
        }
    }
  },
  methods:{
    viewClick(){
        this.$emit('back')
    }
  }
}

</script>

<style lang="stylus" scoped>
.detailPreivew >>>.swiper-pagination-fraction
    color: #fff
    font-weight: bold
    position: absolute
    bottom: .5rem
.detailPreivew >>> .swiper-container
    height: 100%
.detailPreivew >>> .swiper-wrapper > div
    display: flex
    align-items: center
.detailPreivew
    position: absolute
    left: 0
    top: 0
    bottom: 0
    right: 0
    width: 100%
    height: 100%
    background: #000
    z-index: 99
    display: flex
    align-items: center
.detailPreivew img
    width: 100%
</style>
