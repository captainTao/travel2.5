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
        @touchmove="touchmoveRes"
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
            letterlist:[]
        }
    },
    watch:{
        cities (val) {
            for(let key in val) {
               this.letterlist.push(key)
            }
        }
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
                const startY = this.$refs['A'][0].offsetTop
                const touchY = e.touches[0].clientY-75
                const index = Math.floor((touchY-startY)/24)
                this.$emit('change', this.letterlist[index-1])
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
    top: 2rem
    right: .2rem
    bottom: 1rem
    display: flex
    flex-direction: column
    justify-content: center
.slide li
    padding-top: .2rem
    color: $bgColor
</style>
