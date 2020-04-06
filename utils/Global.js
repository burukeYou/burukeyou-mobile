export default {
	
	open(path){
		let p = `/pages/${path}`;
		console.log(p)
		uni.navigateTo({
			url: p
		})
	},
}