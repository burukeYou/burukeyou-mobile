import {request} from "@/utils/request.js"


let baseUrl  = "/comment"

const comment = {
	/**
	 * 	 发表评论
	 */
	publishComment(args){
		return request({
			url: baseUrl+"/comment/publish",
			method:"POST",
			data:args
		});
	},
	
	/**
	 * 	分页获取最新评论
	 * @param {Object} args
	 */
	getPageNewly(args){
		return request({
			url: baseUrl + '/comment/'+args.parentType+'/'+args.parentId,
			method:"GET",
			data:{
				page:args.page,
				size:args.size
			}
		});
	},
	
	/**
	 *  
	 * @param {Object} id
	 */
	getById(id){
		return request({
			url: baseUrl + '/comment/'+id,
			method:"GET"
			
		});
	},
	
	/**
	 * 	获取回复列表
	 */
	getPageReply(args){
		return request({
			url: baseUrl + "/reply/"+args.commentId,
			method:"GET",
			data:{
				page:args.page,
				size:args.size
			}
		});
	},
	
	/**
	 *  发表回复
	 * @param {Object} args	
	 */
	publicReply(args){
		return request({
			url: baseUrl + "/reply/publish",
			method:"POST",
			data:args
		});
	}
	
	
}

export default comment;