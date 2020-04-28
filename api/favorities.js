import {request} from "@/utils/request.js"


let baseUrl = "/user/collection"

const favorities = {
	/**
	 * 	创建收藏夹
	 * @param {Object} args	
	 */
	save(args){
		return request({
			url: baseUrl,
			method:"POST",
			data:args
		});
	},
	
	/**
	 * 	根据类型获得所有的收藏夹
	 */
	getAll(args){
		return request({
			url: baseUrl + '/'+args.type+'/'+args.userId,
			method:"GET"
		});
	},
	
	/**	获取收藏夹下所有target
	 * @param {Object} args
	 */
	getTargetListByFavoritiesId(args){
		return request({
			url: baseUrl + '/'+args.id,
			method:"GET",
			data:{
				page:args.page,
				size:args.size,
				type:args.type,
			}
		});
	},
	
	/**
	 * 	 获取收藏夹详情
	 */
	getOne(id){
		return request({
			url: baseUrl + '/getOne',
			method:"GET",
			data:{
				id:id
			}
		});
	},
	
	/**
	 *   添加进收藏夹
	 */
	addCollection(args){
		return request({
			url: baseUrl + '/'+args.favoritiesId+'/'+args.collectionType+'/'+args.collectionId,
			method:"POST"
		});
	},
	
	/**
	 *   取消进收藏
	 */
	cancelCollection(args){
		return request({
			url: baseUrl + '/'+args.favoritiesId+'/'+args.collectionType+'/'+args.collectionId,
			method:"DELETE"
		});
	},
	
	/**
	 * 	获取收藏品所属收藏夹id
	 */
	getFavoritiesByCollection(args){
		return request({
			url: baseUrl+'/getFavoritiesId',
			method:"GET",
			data:args
		});
	}
	
}



export default favorities;

