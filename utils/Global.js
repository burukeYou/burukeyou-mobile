import store from "@/vuex/index.js"

export default {
	
	open(path){
		let p = `/pages/${path}`;
		console.log(p)
		uni.navigateTo({
			url: p
		})
	},
	
	initHeight(){
		console.log("初始化列表高度");
		uni.getSystemInfo({
			success:res => {
				console.log("高度为:"+res.windowHeight)
				return res.windowHeight //- uni.upx2px(100);
			}
		});
	},
	
	restoreUserState(){
		if(!store.state.loginStatus){
			let token = uni.getStorageSync('token');
			if(token !== null && token !== ''){
				let user = uni.getStorageSync('user');
				
				if(user !== null && user !== '')
					user = JSON.parse(user);
				console.log("重新:"+JSON.stringify(user));	
				store.commit('login',{user:user,access_token:token})
			}
		}
	}
}