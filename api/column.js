import {request} from "@/utils/request.js"

let baseUrl = "/user/column"

const column = {
	/**
	 *  	查找用户专栏
	 * @param {Object} userId	
	 */
	getPage(args){
		return request({
			url: baseUrl+"/page/"+args.userId,
			method:"GET",
			data: {
				page: args.page,
				size: args.size
			}
		});
	},
	
	/**
	 *  	查找用户所有专栏
	 * @param {Object} userId	
	 */
	getAllByUserId(userId){
		return request({
			url: baseUrl+"/all/"+userId,
			method:"GET",
		});
	},
	
	
	
	/**	查找专栏详情
	 * 
	 * @param {Object} id	
	 */
	getOne(id){
		return request({
			url: baseUrl+"/"+id,
			method:"GET"
		});
	}
	
	
	
}


export default column;