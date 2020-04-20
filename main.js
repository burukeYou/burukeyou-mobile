import Vue from 'vue'
import App from './App'


Vue.config.productionTip = false

//=========== 1 - 引入自定义全局组件  =====================================================
import divider from "./bkcomponents/divider"
Vue.component('divider',divider)

//   =================  2- 引入自定义全局js依赖    ========================================
//import system from "./utils/System"
//Vue.prototype.sysytem = system
import $config from "@/utils/config.js"
Vue.prototype.$config =  $config

import $global from "@/utils/Global.js"
Vue.prototype.$global =  $config

//import request from "@/utils/request.js"
import api from "@/api/index.js"
Vue.prototype.$http =  api

// ===========================3 - Vuex=========================================
import store from "@/vuex/index.js"
Vue.prototype.$store = store;

// ===========================4 - 自定义prototype Auth=========================================
Vue.prototype.$auth = (callback) =>{
	// 
	if(!store.state.loginStatus){
		uni.navigateTo({
			url:"/pages/my/login/login"
		});
		return;
	}
	
	callback();	
}

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
