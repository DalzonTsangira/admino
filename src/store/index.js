import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images:[],
    products:[]
  },
  getters:{
    getTotalProd(state){
      return state.products.length;
    }
  },
  mutations: {
    SET_IMAGES:(state,data)=>{
      state.images=[...data]
    },
    SET_PRODUCT:(state,data)=> {
      state.products.unshift(data);
    },
    SET_PRODUCTS:(state,data)=> {
      state.products=data
    },
    DELETE_PR:(state,item)=>{
      
     var indexO=state.products.indexOf(item);
     if(indexO!=-1){
      state.products.splice(indexO,1);
     }
    }
  },
  actions: {


    ///get images
  async  getImages({commit}){
    const resp=await Axios.get("http://127.0.0.1:4040/images");
   
    commit('SET_IMAGES',resp.data);
    },

    /// add product
    async addProduct({commit},data){
      
      const resp=await Axios.post("http://127.0.0.1:4040/products",data);
      
      commit('SET_PRODUCT',resp.data)
    },

    async getProducts({commit}){
      const resp=await Axios.get("http://127.0.0.1:4040/products");
      
      commit('SET_PRODUCTS',resp.data)
    },
    async deleteProduct(context,item){
      context.commit("DELETE_PR",item)
     await Axios.delete("http://127.0.0.1:4040/products/"+item.id);
     
      
     
      
    }
  },
  modules: {
  }
})
