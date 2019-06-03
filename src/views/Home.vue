<template>
  <div class="home">
    <my-nav></my-nav>
    <router-link to="/list">Go to List</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import myNav from '@/views/home/nav.vue'
export default {
  name: 'home',
  components: {
    HelloWorld,
    myNav
  }
}
</script>
