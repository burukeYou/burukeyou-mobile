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
	}
}