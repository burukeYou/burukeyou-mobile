import {request} from "@/utils/request.js"

let baseUrl = "/friend"

const friend = {
	/**
	 *  发送好友请求
	 * @param {Object} args	
	 */
	sendFriendRequest(args){
		return request({
			url: baseUrl + "/request",
			method:"POST",
			data:args
		});
	},
	
	/**
	 * 	查看好友请求列表
	 */
	getFriendRequestList(id){
		return request({
			url: baseUrl + "/request/"+id,
			method:"GET"
		});
	},
	
	/**
	 * 	操作好友请求
	 */
	opFriendRequest(args){
		return request({
			url: baseUrl + "/request/operation",
			method:"POST",
			data:{
				sendUserId: args.sendUserId,
				sendUserNickname: args.sendUserNickname,
				sendUserAvatar: args.sendUserAvatar,
				operation: args.operation,
			},
			header:{
				"Content-Type":"application/x-www-form-urlencoded"
			}
		});
	},
	
	/**
	 * 	 获得当前用户好友列表
	 */
	getFriendList(){
		return request({
			url: baseUrl + "/relation"
		});	
	},
	/**
	 * 	 删除好友
	 */
	deleteFriend(friendId){
		return request({
			url: baseUrl + "/relation/"+friendId,
			method:"DELETE"
		});	
	},
	
	
	
}

export default friend;