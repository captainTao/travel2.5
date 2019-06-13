<!-- 评分星星的组件 -->
<template>
    <!-- starType是星星的类型，不同的地方显示的星星大小不一样 -->
  <div class="star" :class="starType">
      <!-- itemClass是数组，有on,half,off，全星，半星，无 -->
    <span v-for="(item,index) in itemClass" class="star-item" :class="item" :key="index"></span>
  </div>
</template>

<script>
  const STAR_LEN = 5;   // 星星的个数
  export default {
    props: {  // 父组件传来星星的大小和分数
        size: String,
        score: {
            type: [String, Number],
            default: '0'
        }
    },
    computed: {
      starType() {
        return 'star-' + this.size;    // 计算属性，将starType变为star-星星大小
      },
      itemClass() {                      // 根据传来的分数，计算出星星的样式
        let result = [];
        let _score = this.score;
        if(this.score>5){
            _score = 5;
        }
        let totalStar = Math.floor(_score * 2) / 2;   // 当小数位大于5时，值为小数，4.2 == 4否则为整数4.5 == 4.5
        let onStar = Math.floor(totalStar);   // 取整为全星的数量
        let halfStar = totalStar % 1 !== 0;   // 有小数true，没有小数为false，只会有一个半星
        for(let i=0; i<onStar; i++)
        {
          result.push('on');    // 有多少全星就有多少on
        }
        if(halfStar) {
          result.push('half');
        }
        while(result.length < STAR_LEN) {   // 去掉全星和半星后的都是无星
          result.push('off');
        }
        return result;
      }
    }
  }
</script>

<style scoped>
  .star-48 .star-item {      /*大小为48的星星大小*/
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }
  .star-48 .star-item:last-child {
    margin-right: 0;
  }
  .star-48 .on {
    background: url('./star48_on@2x.png') no-repeat;
    background-size: 20px 20px;
  }
  .star-48 .half {
    background: url('./star48_half@2x.png') no-repeat;
    background-size: 20px 20px;
  }
  .star-48 .off {
    background: url('./star48_off@2x.png') no-repeat;
    background-size: 20px 20px;
  }

  .star-36 .star-item {      /*大小为36的星星大小*/
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }
  .star-36 .star-item:last-child {
    margin-right: 0;
  }
  .star-36 .on {
    background: url('./star36_on@2x.png') no-repeat;
    background-size: 15px 15px;
  }
  .star-36 .half {
    background: url('./star36_half@2x.png') no-repeat;
    background-size: 15px 15px;
  }
  .star-36 .off {
    background: url('./star36_off@2x.png') no-repeat;
    background-size: 15px 15px;
  }

  .star-24 .star-item {      /*大小为24的星星大小*/
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 5px;
  }
  .star-24 .star-item:last-child {
    margin-right: 0;
  }
  .star-24 .on {
    background: url('./star24_on@2x.png') no-repeat;
    background-size: 10px 10px;
  }
  .star-24 .half {
    background: url('./star24_half@2x.png') no-repeat;
    background-size: 10px 10px;
  }
  .star-24 .off {
    background: url('./star24_off@2x.png') no-repeat;
    background-size: 10px 10px;
  }
</style>
