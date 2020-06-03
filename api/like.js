import {request} from "@/utils/request.js"



let baseUrl = '/like'

const like = {
	/**
	 *  点赞/取消点赞
	 * @param {Object} args
	 */
	postLike(args){
		return request({
			url: baseUrl +'/like/'+args.isLike+'/'+args.parentType+'/'+args.parentId,
			method:"POST"
		})
	}
	
	// postLike(args){
	// 	return request({
	// 		url: baseUrl+'/like'+args.isLike+'/'+args.parentType+'/'+args.parentId,
	// 		method:"POST",
	// 		data:condition,
	// 		header: {'content-type': 'application/x-www-form-urlencoded'},
	// 	});
	// },
	
	
}

export default like