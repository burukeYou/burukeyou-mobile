
import $config from "@/utils/config.js"

export function request(options = {}){
		options.url = $config.URL + options.url
		options.method = options.method || "GET"
		options.header = options.header || {"content-type":"application/json;charset=UTF-8"}
		
		let token = uni.getStorageSync('token');
		if(token !== null && token !== ''){
			console.log("请求之前从缓存中加载token: "+token)
			options.header['Authorization'] = 'Bearer ' + token;
		}
		
		
		// 验证权限
		
		// 不设置 success,fail之类回调函数,默认已 执行
		// return uni.request(options);	
		return new Promise((resolve,reject) => {
			 uni.request({
				...options,
				success:(res) => {
					if(res.statusCode !== 200){
						uni.showToast({
							titile: res.data.msg || "请求失败",
							icon: 'none'
						});
						return reject(res.data);
					}
					resolve(res.data);
				},
				fail: (error) => {
					uni.showToast({
						titile: errorerrMsg || "请求失败",
						icon: 'none'
					});
					return reject();
				}
			});
		});	
}



	