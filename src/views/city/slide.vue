<template>
    <ul class="slide">
        <!-- 用系统的方法： -->
        <!-- <li v-for="(item, key) of cities" :key="key"><a :href="'#'+key">{{key}}</a></li> -->
        <!-- 用自定义重写的方法: -->
        <!-- <li v-for="(item, key) of cities" :key="key" @click="goAnchor('#'+key)">{{key}}</li> -->
        <li 
        v-for="(item, key) of cities" :key="key"
        :ref='key' 
        @click="anchorClick"
        @touchstart="touchstartRes"
        @touchmove.prevent="touchmoveRes"
        @touchend="touchendRes"
        >{{key}}</li>
    </ul>
</template>

<script>
export default{
    name: 'slide',
    props: {
        cities: Object
    },
    data(){
        return{
            touchstatus: false,
            letterlist:[],
            startY: 0,
            timmer: null
        }
    },
    watch:{
        cities (val) {
            for(let key in val) {
               this.letterlist.push(key)
            }
        }
    },
    updated(){
        this.startY = this.$refs['A'][0].offsetTop
    },
    methods: {
        //自定义goAnchor方法：可以包装成 mixin 或 directive进行复用
        // goAnchor(selector){
        //     let anchor = document.querySelector(selector).parentNode
        //     let list = document.querySelector('.list')
        //     list.scrollTop = anchor.offsetTop
        // },
        anchorClick(e){
            this.$emit('change', e.target.innerText)
        },
        touchstartRes(){
            this.touchstatus = true
        },
        touchmoveRes(e){
            if (this.touchstatus) {
                if(this.timmer){
                    clearTimeout(this.timmer)
                }
                //节流：限制函数执行的频率
                this.timmer = setTimeout(()=>{
                    const touchY = e.touches[0].clientY-75
                    const index = Math.floor((touchY-this.startY)/20)
                    if (0<index && index<=this.letterlist.length) {
                        this.$emit('change', this.letterlist[index-1])
                    }
                },5)
            }
        },
        touchendRes(){
            this.touchstatus = false
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/mixins.styl'

.slide
    position: absolute
    top: 1.8rem
    right: .2rem
    display: flex
    flex-direction: column
    justify-content: center
.slide li
    // padding-top: .2rem
    height: .4rem
    line-height: .4rem
    color: $bgColor
</style>
