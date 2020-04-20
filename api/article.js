import {request} from "@/utils/request.js"
	

let baseUrl = '/system'


const article = {
	getAll(){
		return request({
		  url: baseUrl+'/channel',
		  method:'GET'
		});
	},	
}

export default article