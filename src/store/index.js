import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state={
      HaveSee: [],
      HasComlect: []

}

const mutations = {
      BecomeHave(state,arr){
            // Vue.set(state,'HaveSee',arr)
            state.HaveSee.push(arr)
        },
        Comlection(state,arr){
            // Vue.set(state,'HaveSee',arr)
            state.HasComlect.push(arr)
        }
}
const store=new Vuex.Store({
      state,
      mutations
})
export default store