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
				<li class="hotli" v-for='item of hotList' :key=item.id>
					<div class="hottag"><img :src="item.tagurl"></div>
					<div class="hotpic"><img :src="item.imgUrl"></div>
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
	props: {
		hotList: Array
	},
	data(){
		return {
			iconurl:'http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png'
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
	margin-left: .15rem
	font-size: .32rem
.hotimg
	width: .3rem
	vertical-align:middle
	margin-bottom: .11rem
	margin-right: .05rem
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