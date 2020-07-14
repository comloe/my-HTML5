import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username:"Tom",
    age:20,
    sex:true,
    friends:[
      {
        uname:'Rose',
        age:21,
        address:'山东省'
      },
      {
        uname:'Frank',
        age:22,
        address:'河南省'
      },
      {
        uname:'David',
        age:16,
        address:'山西省'
      },
    ]
  },
  mutations: {
    age_increment_mutation(state,payload){
      state.age<=0&&payload<=0?state.age=0:state.age+=payload
    },
    username_change_mutation(state,payload){
      state.username=payload
    }
  },
  actions: {
    //向WEB服务器发送异步的AJAX的请求
    //context译为上下文，代表当前storte中的mutation
    get_server_data(context){
      //该数据是服务器返回的结果
      let username="Frank";
      //要通知Mutations中的方法来改变state中的数据
      context.commit('username_change_mutation',username);
    }
  },
  modules: {
  }
})
