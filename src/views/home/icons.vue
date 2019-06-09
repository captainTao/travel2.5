<template>
    <div class="icons border-bottom">
        <swiper :options="swiperOption">
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
    data(){
        return{
            iconList:[{
                id:'001',
                imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                desc:"景点门票"
            },{
                id:'002',
                imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
                desc:"一日游"
            },{
                id:'003',
                imgUrl:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
                desc:"成都必游"
            },{
                id:'004',
                imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png",
                desc:"川剧变脸"
            },{
                id:'005',
                imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/b6/aae239efe3496602.png",
                desc:"成都火锅"
            },{
                id:'006',
                imgUrl:"http://img1.qunarzz.com/piao/fusion/1805/57/1e29afd06f881102.png",
                desc:"稻城亚丁"
            },{id:'007',
                imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
                desc:"游乐场"
            },{
                id:'008',
                imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png",
                desc:"熊猫基地"
            },{
                id:'009',
                imgUrl:"http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
                desc:"动植物园"
            },{
                id:'010',
                imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/f04285731d7121da1b9028e2bf431695.png",
                desc:"都江堰"
            }],
            swiperOption:{
                pagination:'.swiper-pagination',
                loop: true,
                paginationClickable:true
            }
        }
    },
    computed:{
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
