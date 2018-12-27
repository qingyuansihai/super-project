import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
Vue.use(Vuex) //安装使用这个功能

// var MY_HIDE = "hideMaizuoTabbar"
const store = new Vuex.Store({
	state:{
		isShow:true,
		datalist:[],
		//共享状态
	},

	actions:{
		// getComingSoonListRequest(store){
		// 	console.log("数据请求")

		// 	axios({
		// 		url:"",
		// 		method: 'get',
		// 		headers:{
		// 			'X-Client-Info': '{"a":"3000","ch":"1002","v":"1.0.0","e":"154277371928424093566579"}',
		// 			'X-Host': 'mall.film-ticket.film.list'
		// 		}
		// 	}).then(res=>{
		// 		console.log(res.data) //res.data 才是后端返回的接口 axios自己在外面包装的data
		// 		store.commit("setDatalist",res.data.data.films)
		// 	})
		// }
	},


	mutations:{
		// [MY_HIDE](state,payload){
		// 	state.isShow = false;
		// },
		// //修改状态， 只能做同步操作
		// // hideMaizuoTabbar(state,payload){
		// // 	console.log(payload);
		// // 	state.isShow = false;
		// // },
		// showMaizuoTabbar(state,payload){
		// 	state.isShow = true;
		// },

		// setDatalist(state,payload){
		// 	state.datalist= payload;
		// }
	}
})

//store "全局"对象
export default store  
