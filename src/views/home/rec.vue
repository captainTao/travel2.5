<template>
	<div class="rec">
		<div class="subrec border-right"><span class="iconfont">&#xe618;</span>定位失败</div>
		<div class="subrec border-left"><span class="iconfont">&#xe629;</span>必游榜单</div>
	</div>
</template>

<script>
export default{
	name:'rec'
}
</script>
<style lang = 'stylus' scoped>
.rec
	display: flex
	height: 1rem
	margin-bottom: .2rem
.subrec
	flex: 1
	line-height: 1rem
	text-align: center
	color: #333
</style>