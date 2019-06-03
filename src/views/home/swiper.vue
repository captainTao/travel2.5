<template>
	<div class="wrapper">
		<swiper :options="swiperOption">
			<swiper-slide v-for="item of dataList" :key='item.id'>
				<img class='swiper-img' :src="item.imgUrl">
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
export default{
	name: 'homeSwiper',
	data(){
		return{
			swiperOption:{
				pagination:'.swiper-pagination',
				loop: true
			},
			dataList:[{
				id:'001',
				imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/fe8d03b9f1d5b7391b0c882ca519f279.jpg_750x200_1cc2aa0f.jpg'
			},{
				id:'002',
				imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/b2816bed3f46772d0ba57decd833bc0a.jpg_750x200_0517517a.jpg'
			},{
				id:'003',
				imgUrl:'http://img1.qunarzz.com/piao/fusion/1807/5e/cfee2e9e2f357202.jpg_750x200_b0308a43.jpg'
			}]
		}
	}
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
	background: #fff !important
.wrapper
	width: 100%
	height: 0
	padding-bottom: 26.67%
	overflow: hidden
	background: #eee
.swiper-img
	width: 100%

</style>