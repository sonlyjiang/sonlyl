/*
* @Author: admin
* @Date:   2018-11-22 15:23:01
* @Last Modified by:   SONLY
* @Last Modified time: 2018-12-14 11:10:58
*/
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    count: 0,
    musicid:1,
    bftf:false,
  },
  mutations: {
    increment (state) {
      state.count++
    },
    nowmu(state,index){
    	state.musicid=index;
    	console.log(state.musicid)
    },
    bttf(state,tf){
    	state.bftf=tf;
    	console.log(state.bftf);
      if(tf){
        document.getElementById('music').play();
        
      }else{
        document.getElementById('music').pause();
        
      }
      
    }
  }
})