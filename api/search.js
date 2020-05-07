import {request} from "@/utils/request.js"

let baseUrl = "/search"

const search = {
	search(args){
		return request({
			url: baseUrl + "/search",
			data:args
		});
	}
	
}



export default search