<template>
    <div class="list" ref="wrapper">
        <div class="content">
            <div class="hotcity">
                <div class="title">热门城市</div>
                <div class="cities">
                    <ul>
                        <li v-for="item of hotCities" :key="item.id" @click="handleClick(item.name)">{{item.name}}</li>
                    </ul>
                </div>
            </div>
            <div class="licity" v-for="(item, key) of cities" :key="key" :ref="key">
                <div class="title" :id="key">{{key}}</div>
                <div class="cities">
                    <ul>
                        <li v-for="innerItem of item" :key="innerItem.id" @click="handleClick(innerItem.name)">{{innerItem.name}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default{
    name: 'citylist',
    props:{
        hotCities: Array,
        cities: Object,
        letter: String
    },
    methods:{
        handleClick(city){
            // this.$store.dispatch('changeCity', city)  //可以不通过dispatch去调用方法，可以直接通过commit方法
            // this.$store.commit('changeCity',city)
            this.changeCity(city) //用map的方法进行简写
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
    },
    mounted(){
        // let wrapper = document.querySelector('.wrapper') 
        // this.scroll = new BScroll(wrapper)
        // vue中用ref来传递dom元素
        this.scroll = new BScroll(this.$refs.wrapper,{click: true})
    },
    watch:{
        // letter(val, oldval){
        letter(){
            // console.log(val,oldval)
            if (this.letter) {
                // let id = this.letter
                // const element = this.$refs[id][0]
                // console.log(element)
                //这儿为什么用id获取不到？
                const element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
        }
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
