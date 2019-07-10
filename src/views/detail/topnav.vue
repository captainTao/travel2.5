<template>
    <div>
        <div class="topnav" v-if='shownav' :style='opacityStyle'>
          <router-link to='/' class="left" tag="div"><span class="iconfont">&#xe624;</span></router-link>
          <div class="right">普洱国家公园犀牛坪</div>
        </div>
        <router-link to='/' tag="div" class="back" v-else>
            <span class="iconfont">&#xe624;</span>
        </router-link>      
    </div>
</template>

<script>

export default {
  name: 'topnav',
  data(){
    return{
        shownav: false,
        opacityStyle: {
            opacity: 0
        }
    }
  },
  methods:{
    handleScoll(){
        const top = document.documentElement.scrollTop
        if (top > 44) {
            this.shownav = true
            let opacity = (top-44)/(230-44)
            opacity = opacity>1? 1:opacity
            this.opacityStyle = {opacity: opacity}
        }else{
            this.shownav = false
        }
    }
  },
  mounted(){
    window.addEventListener('scroll', this.handleScoll)
  },
  destroyed(){
    window.removeEventListener('scroll', this.handleScoll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/mixins.styl'
.topnav
    position: fixed
    top: 0
    left: 0
    right: 0
    width: 100%
    height: .88rem
    color: #fff
    background: $bgColor
    line-height: .88rem
    font-size: .35rem
    z-index: 3
    display: flex
    font-weight: bold
    textEllipsis()
.left
    width: .8rem
.left span
    font-size: .35rem
.right
    flex: 1
    padding-right: .8rem  
.back
    width: .88rem
    height: .88rem
    line-height: .88rem
    color: #fff
    font-weight: bold
    font-size: .35rem
    background: rgba(0,0,0,0.5)
    border-radius: .42rem
    position: absolute
    top: 0
    left: 0
</style>
