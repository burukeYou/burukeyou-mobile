import {request} from "@/utils/request.js"

let baeUrl = "/notification"

const notification = {
	/**
	 * 	 根据通知类型获取通知
	 */
	getPageByType(args){
		return request({
			url: baeUrl + "/notification/page",
			data:args
		});
	}
	
}

export default notification