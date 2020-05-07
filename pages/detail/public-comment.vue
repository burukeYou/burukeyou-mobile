<template>
	<view class="p-3">
		 <textarea v-if="isComment" placeholder="回复:发表评论" auto-focus="true" auto-height="" v-model="comment.content">		
		</textarea>
		<textarea v-else :placeholder="'回复:'+reply.respUserNickname" auto-focus="true" auto-height="" v-model="reply.content">
		</textarea>
		
		<view v-if="isComment" style="text-align: center;margin-top: 100rpx;" >
			<button v-if="comment.content" size="mini" @click="addComment" style="background-color: #46A0FC;color: #FFFFFF;">发送</button>
			<button v-else disabled="true" size="mini" @click="addComment">发送</button>
		</view>
		
		<view v-else style="text-align: center;margin-top: 100rpx;" >
			<button v-if="reply.content" size="mini" @click="addReply" style="background-color: #46A0FC;color: #FFFFFF;">发送</button>
			<button v-else disabled="true" size="mini" @click="addReply">发送</button>
		</view>
		
	</view>
</template>

<script>
	export default {
		data(){
			return{
				comment:{
					parentId:"",
					parentType:"",
					content:"",
					parentUserId:"",
					parentTitle:""
				},
				
				reply:{
					parentId:"",
					parentType:"",
					respUserId:"",
					respUserNickname:"",
					commentId:"",
					content:""
				},
				
				isComment: true
				
			}
		},
		
		onLoad(args) {
			console.log(JSON.stringify(args));	
			if(args.isComment === "false"){
				this.reply.parentType = args.parentType;
				this.reply.parentId = args.parentId;
				this.isComment = false;
				this.reply.respUserId = args.respUserId;
				this.reply.respUserNickname = args.respUserNickname;
				this.reply.commentId = args.commentId;
			}else{
				// console.log("SBSBBSBSB");
				// isComment: true
				this.comment.parentType = args.parentType;
				this.comment.parentId = args.parentId;
				this.comment.parentUserId = args.parentUserId;
				this.comment.parentTitle = args.parentTitle;
			}
		},
		methods:{
			addComment(){
				this.$auth(() => {
					this.$http.comment.publishComment(this.comment).then(res => {
							if(res.code === "200"){
								uni.showToast({
									title:"评论成功",
								})
								uni.navigateBack({
									delta:-1
								})
							}
					}).catch(err => console.log(err));
				})		
			},
			addReply(){
				this.$http.comment.publicReply(this.reply).then(res => {
					if(res.code === "200"){
						uni.showToast({
							title:"回复成功",
						})
						uni.navigateBack({
							delta:-1
						})
					}
				}).catch(err => console.log(err));
			}
		}
		
		
		
	
	}
	
	
</script>

<style>
</style>
