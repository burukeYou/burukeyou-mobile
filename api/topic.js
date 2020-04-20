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
	}
}


export default topic;