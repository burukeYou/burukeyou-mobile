import {request} from "@/utils/request.js"


let baseUrl = '/system'

const topic = {
	/**
	 * 	 	
	 */
	getTop10Topic(){
		return request({
			url: baseUrl+'/topic/page',
			method:'GET',
			data:{
			  page:0,
			  size:10,
			  orderField:"boiling_count",
			  order:"Desc"
			}
		});		
	},
	
	/**
	 * 	 分页获取话题
	 */
	getTopicPage(condition){
		return request({
			url: baseUrl + '/topic/app/page',
			method:"Get",
			data:condition
		});
	},
	
	/**
	 * 	
	 */
	getById(id){
		return request({
			url: baseUrl + '/topic/'+id,
			method:"Get",
		});
	}
	
}


export default topic;