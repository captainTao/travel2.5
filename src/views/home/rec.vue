<template>
	<div class="rec">
		<div class="subrec border-right">
			<span class="iconfont">&#xe618;</span><span>定位失败</span>
		</div>
		<div class="subrec border-left">
			<span class="iconfont">&#xe629;</span><span>必游榜单</span>
		</div>
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
.subrec
	flex: 1
	line-height: 1rem
	text-align: center
	color: #333
</style>