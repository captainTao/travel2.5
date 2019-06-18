<template>
  <div class="header">
     <div class="header-left"><span class="iconfont">&#xe624;</span></div>
     <div class="header-input"><input class="iconfont" type="text" :placeholder="icon"/></div>
     <router-link to="/city">
        <div class="header-right">{{this.city}}<span class="iconfont">&#xe6aa;</span></div>
     </router-link>
  </div>
</template>

<script>
export default{
    name: 'myNav',
    props: {
        city: String
    },
    data(){
        return {
            icon:'\ue632 输入城市/景点/游玩主题'
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.header
    height: .86rem
    display: flex
    background: $bgColor
    line-height: .86rem
    color: #fff
.header-left
    width: .64rem
.header-input
    flex:1
    background: #fff
    border-radius: .1rem
    margin: .12rem .1rem
    color: #ccc
    line-height: 0.64rem
    text-align: left
    padding: 0 .2rem
.header-input input
    width: 100%
    color: green
    font-size: .3rem
.header-right
    width: 1.24rem
    color: #fff
.header-right span
    margin-left:.05rem
input::-webkit-input-placeholder, textarea::-webkit-input-placeholder
    color: #ccc

</style>
