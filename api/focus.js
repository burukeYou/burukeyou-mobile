import {request} from "@/utils/request.js"

let baseUrl = "/focus"

const focus = {
	/**
	 * 	关注
	 * @param {Object} condition
	 */
	postFocus(condition){
		return request({
			url: baseUrl+'/focus',
			method:"POST",
			data:condition,
			header: {'content-type': 'application/x-www-form-urlencoded'},
		});
	},
	
	/**
	 * 	取消关注
	 * @param {Object} condition
	 */
	cancelFocus(condition){
		return request({
			url: baseUrl+'/focus/'+condition.type+'/'+condition.id,
			method:"Delete"
		});
	}
	
	
	
	
}


export default focus;