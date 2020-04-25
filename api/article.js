import {request} from "@/utils/request.js"
	

let baseUrl = '/article'


const article = {
	/**
	 * 	发布文章
	 * @param {Object} data
	 */
	publicArticle(data){
		return request({
			url: baseUrl + '/article',
			method:"POST",
			data:data
		});
	},
	
	/**
	 * 	分页获取
	 */
	getArticlePage(args){
		return request({
			url: baseUrl + '/article/page',
			method:"Get",
			data:args
		});
	}
	
}

export default article