import {request} from "@/utils/request.js"

let baseUrl = "/"

const IM = {
	/**
	 * 	发送消息
	 * @param {Object} args	
	 */
	sendMsg(args){
		return request({
			url: baseUrl + "/sendMsg",
			method: "POST",
			data:args
		});
	}
	
}

export default IM