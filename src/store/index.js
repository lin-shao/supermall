import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    cartList:[]
  },
  mutations:{
    addList(state,payload){

      let oldProduct = state.cartList.find(item => item.iid === payload.iid)
      if(oldProduct){
        oldProduct.count += 1
      }else{
        payload.count = 1
        state.cartList.push(payload)
      }
    }
  }
})

export default store
