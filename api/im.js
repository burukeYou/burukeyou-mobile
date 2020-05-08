import {request} from "@/utils/request.js"

let baseUrl = "/msgPush"

const IM = {
	/**
	 * 	发送消息
	 * @param {Object} args	
	 */
	sendMsg(args){
		return request({
			url: baseUrl + "/sendMsg",
			method: "POST",
			data:args,
			header: {'content-type': 'application/x-www-form-urlencoded'}
		});
	}
	
}

export default IM