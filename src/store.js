import Vue from 'vue'
import Vuex from 'vuex'
import state from './store/state'
import mutation from './store/mutation'
Vue.use(Vuex)



export default new Vuex.Store({
  state: state,
  mutations: mutation,
  actions: {
    changeCity(ctx, city){
        ctx.commit('changeCity', city) //ctx为上下文
    }
  },
  getters: { //它相当于vue中的computed，避免数据的冗余
    doubleCity(state){
      return state.city+' '+state.city
    }
  }
})
