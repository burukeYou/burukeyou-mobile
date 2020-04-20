import {request} from "@/utils/request.js"
	
let baseUrl = '/system'

const channel = {
	/**
	 * 	获得所有频道
	 */
	getAll: () => {
		return request({
			url: baseUrl+'/channel',
			method:'GET'
		});
	}
}

export default channel