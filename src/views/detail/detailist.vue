<template>
  <div class="detailist">
    <div v-for="(item,index) of list" :key=index class="border-bottom">
        <div class="item-title">
            <span class="item-icon"></span>
            <span>{{item.title}}</span>
        </div>
        <div v-if="item.children" class="item-children">
            <detail-list :list="item.children"></detail-list>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailList',
  props: {
    list: Array
  }

}
</script>


<style lang="stylus" scoped>
.item-title
    position: relative
    height: .8rem
    line-height: .8rem
    font-size: .32rem
    padding: 0 .2rem
    text-indent: .4rem
    text-align: left
.item-icon
    position: absolute
    display: inline-block
    width: .36rem
    height: .36rem
    top: .2rem
    left: .2rem
    background:url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -.45rem no-repeat
    background-size: .4rem 3rem
.item-children
    padding: 0 .2rem
</style>
