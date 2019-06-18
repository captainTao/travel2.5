<template>
  <div class="cityhead">
    <div class="nav">
        <div class="top">
            <router-link to='/'><span class="iconfont">&#xe624;</span></router-link>
            城市选择
        </div>
        <div class="bottom">
            <div class="bottom-left f1 actived">境内</div>
            <div class="bottom-right f1">境外.港澳台</div>
        </div>    
    </div>
  </div>
</template>

<script>

export default{
    name: 'cityhead'
}
</script>


<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/mixins.styl'

.nav
    background: $bgColor
    line-height: .7rem
    color: #fff
    font-weight: bold
.top, .bottom
    margin: 0 .2rem
    height: .7rem
.top span
    float: left
    color: #fff
.f1
    flex: 1
.bottom
    display: flex
    padding: .05rem .9rem
    height: .7rem
    align-items: center
.bottom-left, .bottom-right 
    height:.5rem
    line-height: .5rem
    border: .02rem solid #fff
    textEllipsis()
.bottom-left
    border-radius: .05rem 0 0 .05rem
.bottom-right
    border-radius: 0 .05rem .05rem 0
.actived
    background: #fff
    color: #00bcd4
</style>
