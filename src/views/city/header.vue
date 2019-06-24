<template>
  <div class="cityhead">
    <div class="nav">
        <div class="top">
            <router-link to='/'><div><span class="iconfont">&#xe624;</span></div></router-link>
            <div class="f1">城市选择</div>
        </div>
        <div class="bottomPlan">
            <div class="bottom" v-if='seen'>
                <div class="bottom-left f1 actived">境内</div>
                <div class="bottom-right f1">境外.港澳台</div>
            </div>
            <div class="bottom" v-else>
                <input class="iconfont" type="text" :placeholder="icon" @change="keywordSearch" v-model="keyword"/>
            </div>
            <div class="searchIcon" @click='switchPlan'><span class="iconfont">&#xe632;</span></div>
        </div>    
    </div>
    <div class="searchContent" v-if="keyword" ref="search">
        <ul>
            <li v-for="(item,index) of resultlist" :key="index" @click="handleClick(item)">{{item}}</li>
            <li v-if="!resultlist.length" class="lastli">没有找到相匹配的数据</li>
        </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default{
    name: 'cityhead',
    props: {
        cities: Object
    },
    data(){
        return {
            icon:'\ue632 输入城市/景点/游玩主题',
            seen: false,
            keyword: '',
            resultlist: [],
            timer: null
        }
    },
    methods:{
        switchPlan(){
            this.seen = !this.seen
        },
        keywordSearch(){},
        handleClick(city){
            this.$store.commit('changeCity', city)
            this.$router.push('/')
            this.keyword = ''
        }
    },
    mounted(){
        // 在这儿加载scroll报错是因为获取不到dom
    },
    watch:{
        keyword(val){
            const result = []
            const inputVal=val.trim()
            if(this.timer){
                clearTimeout(this.timer)
            }
            // 输入为空的时候，直接返回空
            if (!inputVal) {
              this.resultlist = []
              return
            }
            for (let i in this.cities){
                this.cities[i].map((obj)=>{
                    if(obj.spell.indexOf(inputVal) > -1 || obj.name.indexOf(inputVal) > -1) {
                        result.push(obj.name)
                    }
                })    
            }
            this.resultlist = result
            // 延时执行是因为生命周期，在mounted的时候没获取到DOM
            if(result.length){
                this.timer=setTimeout(() =>{
                    this.scroll = new BScroll(this.$refs.search,{click: true})
                },10)
            }
        } 
    }
}
</script>


<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/mixins.styl'

.nav
    background: $bgColor
    line-height: .86rem
    color: #fff
    font-weight: bold
    height: 1.5rem
.top, .bottom
    margin: 0 .2rem
    height: .7rem
    display: flex
.top span
    float: left
    color: #fff
    height: .86rem
.bottom input
    border-radius: .05rem
    padding: 0 .2rem
    width: 100%
    height: 78%
    color:  $bgColor
.searchIcon
    position: absolute
    top: .7rem
    right: .4rem
    height: .8rem
    line-height: .8rem
.searchIcon span
    font-size: .4rem
.f1
    flex: 1
.bottom
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
.searchContent
    position: absolute
    top: 1.5rem
    left: 0
    right: 0
    bottom: 0
    background: #f5f2f2
    z-index: 100
    overflow: hidden
.searchContent li
    background: #fff
    border-bottom: .02rem solid #ccc    
    box-sizing: border-box
    width: 33.33%
    text-align: center
    height: .72rem
    line-height: .72rem
    float: left
    textEllipsis()
.searchContent li:nth-child(3n-1)
    border-right: .02rem solid #ccc
.searchContent li:nth-child(3n-2)
    border-right: .02rem solid #ccc
.searchContent .lastli
    width: 100%
    background: #f5f2f2
    border-bottom: none
.searchContent ul:after
    clear: both
    content: ""
    display: block
    width: 0
    height: 0
</style>
