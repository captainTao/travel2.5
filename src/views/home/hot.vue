<template>
	<div class="hot">
		<div class="hotNav">
			<div class="navLeft subhot">
				<img :src="iconurl" class="hotimg"/>
				<span>本周热门榜单</span>
			</div>
			<div class="navRight subhot">
				<span>全部榜单</span>
				<span class="iconfont">&#xe64c;</span>
			</div>
		</div>
		<div class="hotContent">
			<ul>
				<li class="hotli" v-for='item of hotlist' :key=item.id>
					<div class="hottag"><img :src="item.tagurl"></div>
					<div class="hotpic"><img :src="item.imgurl"></div>
					<div class="hotdesc">{{item.desc}}</div>
					<div class="hotprice"><span>￥{{item.price}}</span>起</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default{
	name: 'indexHot',
	data(){
		return {
			iconurl:'http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png',
			hotlist:[{
				id:'001',
				tagurl:'http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png',
				imgurl:'http://img1.qunarzz.com/sight/p0/201309/24/977fea7b3c5cd758c8d65eac.jpg_250x250_145eeeb5.jpg',
				desc:'大熊猫繁育研究基地',
				price:'19.8'
			},{
				id:'002',
				tagurl:'http://img1.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png',
				imgurl:'http://img1.qunarzz.com/sight/p0/201407/03/a584374ee80b738e2600d6bcaf1299e3.jpg_250x250_986e4594.jpg',
				desc:'都江堰',
				price:'38'
			},{
				id:'003',
				tagurl:'http://img1.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png',
				imgurl:'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_250x250_427ee986.jpg',
				desc:'海昌极地海洋公园',
				price:'38'
			},{
				id:'004',
				tagurl:'',
				imgurl:'http://img1.qunarzz.com/sight/p0/1505/b0/b0132e78efa00572.water.jpg_250x250_419e0690.jpg',
				desc:'青城山',
				price:'28'
			},{
				id:'005',
				tagurl:'',
				imgurl:'http://img1.qunarzz.com/sight/p0/201403/03/77a8f60ea243465fdf2c937e2edd33dd.jpg_250x250_cbf0adb9.jpg',
				desc:'国色天乡·水上乐园',
				price:'135'
			},{
				id:'006',
				tagurl:'',
				imgurl:'http://img1.qunarzz.com/sight/p0/1807/ad/ad574bfe6c9e1ceda3.img.png_250x250_d7de3c80.png',
				desc:'成都欢乐谷',
				price:'28'
			}]
		}
	}
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/styles/mixins.styl'
.hot
	background: #f5f5f5
	padding-top: .15rem
.hotNav
	display: flex
	width: 100%
	height: .8rem
	background: #fff
.subhot
	flex: 1
	height: .8rem
	line-height: .8rem
.navLeft
	text-align: left
	margin-left: .1rem
	font-size: .32rem
.hotimg
	width: .3rem
	vertical-align:middle
	margin-bottom: .11rem
.navRight
	text-align: right
	margin-right: .1rem
	font-size:.22rem
	display: flex
	justify-content: flex-end
	padding-top: .05rem
.navRight span
	align-items: center
.hotContent
	height: 0
	padding-bottom: 3.3rem
	width: 100%
	padding-left: .1rem
	padding-right: .1rem
	background: #fff
.hotContent ul
	white-space: nowrap
	overflow-x: scroll
	height: 3.2rem
	padding-right: .3rem
.hotli
	width: 2rem
	position: relative
	margin: .1rem
	font-size: .26rem
	display: inline-block
.hotli img
	width: 100%
.hottag
	width: .84rem
	position: absolute
	left: 0
	top: 0
.hotpic
	padding-top: .1rem
.hotdesc
	text-align:center
	margin-top: .1rem
	height: .28rem
	line-height: .28rem
	textEllipsis()
.hotprice
	margin-top: .1rem
.hotprice span
	color: #ff8300
</style>