import {request} from "@/utils/request.js"

let baseUrl = '/system'

const label = {
	/**
	 * 	获取标签列表
	 */
	getPage(condition){
		return request({
			url: baseUrl + '/label/app/page',
			method:"Get",
			data:condition
		});
	},
	
	/**
	 * 	 搜索前10条标签
	 */
	getSelectLabel(arg){
		return request({
			url: baseUrl + '/label/page',
			method:"Get",
			data:{
				name:arg,
				page:0,
				size:10
			}
		});
	}
	
	
}


export default label;