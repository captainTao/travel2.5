<template>
    <div class="icons border-bottom">
        <swiper :options="swiperOption" v-if='showSwiper'>
            <swiper-slide v-for="(page,index) of pages" :key="index" >
                <div v-for="item of page" :key="item.id" class="icon">
                    <a href="avascript:;">
                        <div class="imgContainer">
                            <img class="iconImg" :src="item.imgUrl">
                        </div>
                        <p>{{item.desc}}</p>
                    </a>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default{
    name:'icons',
    props: {
        iconList: Array
    },
    data(){
        return{
            swiperOption:{
                pagination:'.swiper-pagination',
                loop: true,
                paginationClickable:true
            }
        }
    },
    computed:{
        showSwiper(){
            return this.iconList.length
        },
        pages(){
            const pages = []
            this.iconList.forEach(function(item, index){
                let page = Math.floor(index/8)
                if(!pages[page]){
                    pages[page]=[]
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
@import '~@/assets/styles/mixins.styl'
.icons >>> .swiper-container
    height: 0
    padding-bottom: 55%
.icons >>> .swiper-pagination-bullet-active
    background: rgba(0,175,190,.8)
.icons >>> .swiper-pagination-bullets
    bottom: .1rem
.icons >>> .swiper-pagination-bullet
    width: .12rem
    height: .12rem
.icons
    width: 100%
    height: 0
    padding-bottom: 55%
    overflow: hidden
    margin-top: .1rem
    position: relative
.icon
    position: relative
    width: 25%
    height: 0
    padding-bottom: 25%
    overflow: hidden
    float: left
.imgContainer
	position: absolute
	left: 0
	right: 0
	top: 0
	bottom: .44rem
.iconImg
    height: 100%
    display: block
    margin: 0 auto
.icon p
	position: absolute
	left: 0
	right: 0
	bottom: 0
	height: .44rem
	line-height: .44rem
	text-align: center
	color: $darkTextColor
	textEllipsis()
</style>
