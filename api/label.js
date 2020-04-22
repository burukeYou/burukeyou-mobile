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
	}
	
	
	
}


export default label;