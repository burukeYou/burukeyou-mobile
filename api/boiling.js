import {request} from "@/utils/request.js"

let baseUrl = "/boiling"

const boiling = {
	/**
	 *   多条件分页获取
	 */
	getPageCondition(args){
		return request({
			url: baseUrl+"/boiling/page",
			method:"GET",
			data:args
		});
	},
	
	/**
	 * 	发表沸点
	 */
	publishBoilling(args){
		return request({
			url: baseUrl + "/boiling",
			method:"POST",
			data:args
			//header: {'content-type': 'multipart/form-data'},
		});
	}
	
	
}


export default boiling;