import {request} from "@/utils/request.js"

let baseUrl = "/user"

const user = {
	
	/**		用户登陆
	 * @param {Object} args 登陆参数
	 * 
	 */
	login(args){
		return request({
			url: baseUrl + '/user/login',
			method:"POST",
			data: args
		});
	},
	
	/**
	 *   用户注册
	 * @param {Object} args	
	 */
	register(args){
		return request({
			url: baseUrl + '/user/save',
			method:"POST",
			data: args
		});
	},
	
	/**
	 * 	搜索用户
	 */
	searchUser(uniqueId){
		return request({
			url: baseUrl + "/user/app/"+uniqueId,
			method:"GET",
		});
	}
	
}


export default user