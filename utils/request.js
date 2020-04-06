
import $config from "@/utils/config.js"

export default{
	// 通用配置
	common:{ 
		method:"GET",
		header:{
			"content-type":"application/json;charset=UTF-8"
		},
		data:{}
	},
	// 通用请求
	request(options = {}){
		options.url = $config.URL + options.url
		options.method = options.method || this.common.method
		options.header = options.header || this.common.header
		
		// 验证权限
		
		// 不设置 success,fail之类回调函数,默认已 执行
		// return uni.request(options);	
		new Promise((res,eror) => {
			return this.request({
				...options,
				success:(res) => {
					if(res.statusCode !== 200){
						uni.showToast({
							titile: res.data.msg || "请求失败",
							icon: 'none'
						});
						return rej(res.data);
					}
					
					res(res.data.data);
				},
				fail: (error) => {
					uni.showToast({
						titile: errorerrMsg || "请求失败",
						icon: 'none'
					});
					return rej();
				}
			});
		});	
	},	
	
	// get 请求
	get(url,data = {}){
		let options = {};
		options.url = url;
		options.data = data;
		
		return this.request(options);
	},
	
	// post 请求
	post(url,data = {}){
		let options = {};
		options.url = url;
		options.data = data;
		options.method = 'POST';
		return this.request(options)
	},
	
	// delete 请求
	delete(url,data = {},options = {}){
		options.url = url
		options.data = data
		options.method = 'DELETE'
		return this.request(options)
	}
}