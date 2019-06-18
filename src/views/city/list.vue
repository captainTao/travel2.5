<template>
    <div class="list" ref="wrapper">
        <div class="content">
            <div class="hotcity">
                <div class="title">热门城市</div>
                <div class="cities">
                    <ul>
                        <li v-for="item of hotCities" :key="item.id">{{item.name}}</li>
                    </ul>
                </div>
            </div>
            <div class="licity" v-for="(item, key) of cities" :key="key">
                <div class="title">{{key}}</div>
                <div class="cities">
                    <ul>
                        <li v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default{
    name: 'citylist',
    props:{
        hotCities: Array,
        cities: Object
    },
    mounted(){
        // let wrapper = document.querySelector('.wrapper')
        // this.scroll = new BScroll(wrapper)
        this.scroll = new BScroll(this.$refs.wrapper)
    }
}
</script>


<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'

.list
    overflow: hidden
    position: absolute
    top: 1.5rem
    left: 0
    right: 0
    bottom: 0
    background: #f5f2f2
.hotcity, .licity
    padding-top: .2rem
.title
    text-align: left
    height: .24rem
    line-height: .24rem
    padding-bottom: .14rem
    margin: 0 .24rem
    font-size: .2rem
.cities
    background: #fff
    overflow: hidden
.cities li
    border-bottom: .02rem solid #ccc    
    margin-bottom: -.02rem
    box-sizing: border-box
    width: 33.33%
    text-align: center
    height: .72rem
    line-height: .72rem
    float: left
    textEllipsis()
.cities li:nth-child(3n-1)
    border-right: .02rem solid #ccc
.cities li:nth-child(3n-2)
    border-right: .02rem solid #ccc

</style>
