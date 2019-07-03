<template>
  <div class="detail">
    <detail-header></detail-header>
    <detail-nav></detail-nav>
    <div class="content">content</div>
  </div>
</template>

<script>

import detailHeader from '@/views/detail/header.vue'
import detailNav from '@/views/detail/topnav.vue'
export default {
  name: 'detail',
  components: {
    detailHeader,
    detailNav
  },
  data(){
    return{}
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
.content
  height: 50rem
</style>
