<template>
	<div class="like">
		<div class="likeNav">
			<img :src="iconurl" class="likeimg"/>
			<span>猜你喜欢</span>
		</div>
		<div class="likeContent">
			<ul>
				<router-link tag="li" :to="'/detail/'+item.id" class="likeli border-bottom" v-for='item of likeList' :key=item.id>
					<div class="left">
						<div class="liketag"><img :src="item.tagurl"></div>
						<div class="likepic"><img :src="item.imgurl"></div>
					</div>
					<div class="right">
						<div class="liketitle">{{item.title}}</div>
						<div class="likestar"><home-star size="24" :score="item.score"></home-star></div>
						<div class="likeprice"><span>￥{{item.price}}</span>起</div>
						<div class="likecomment">{{item.com}}</div>
					</div>
				</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
import homeStar from '@/components/star/star.vue'
export default{
	name: 'like',
	components: {
		homeStar
	},
	props: {
		likeList: Array
	},
	data(){
		return{
			iconurl:'http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png'
		}
	}
}
</script>

<style lang='stylus' scoped>
@import '~@/assets/styles/mixins.styl'
.like
	background: #f5f5f5
	padding-top: .15rem
.likeNav
	width: 100%
	height: .8rem
	line-height: .8rem
	background: #fff
	text-align: left
	padding-left: .2rem
	font-size: .32rem
.likeimg
	width: .3rem
	vertical-align:middle
	margin-bottom: .11rem
	margin-right: .1rem
.likeContent
	padding-left: .1rem
	padding-right: .1rem
	background: #fff
.likeli
	position: relative
	padding: .2rem
	font-size: .26rem
	display: flex
.left
	flex: 0 0 2rem
.right
	flex: 1
	text-align: left
	padding-left: .3rem
.likeli img
	width: 100%
.likepic
	width: 2rem
.liketag
	width: .84rem
	position: absolute
	left: .2rem
	top: .2rem
.liketitle
	padding-top: .1rem
	height: .28rem
	line-height: .28rem
	textEllipsis()
	font-size: .30rem
.likestar
	padding-top: .2rem
.likeprice
	padding-top: .3rem
.likeprice span
	color: #ff8300
	font-size: .42rem
.likecomment
	padding-top: .2rem
	color: red
</style>
