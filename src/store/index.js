import Vue from "vue"
import Vuex from "vuex"
// import * as types from "mutation-types"

Vue.use(Vuex)

const state={
      name:'小米'
}
const store=new Vue.Store({
      state
})
export default store