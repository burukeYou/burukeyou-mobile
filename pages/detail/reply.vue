<template>
	<view class="bg-color2">
		<view class="p-2 bg-white border-bottom">
				<view  class="uni-comment-list">
					<view class="uni-comment-face">
						<image :src="comment.userAvatar" mode="widthFix"></image>
					</view>
					<view class="uni-comment-body">
						<view class="uni-comment-top">
							<text>{{comment.userNickname}}</text> 
						</view>
						<view  class="uni-comment-content">{{comment.content}}</view>
						<view class="uni-comment-date">
							<view>{{comment.createdTime}}</view>
							<view class="uni-comment-replay-btn">{{comment.thumbupCount}}点赞  {{comment.replyCount}}回复</view>
						</view>
					</view>
				</view>	
		</view>
		
		<view class="mt-2 bg-white" >
			<bk-list :loadMoreStatus="loadMoreStatus" @loadMore="loadMore" stys="margin-bottom: 100rpx;" >
				<view  class="uni-comment-list border-bottom" v-for="(e,i) in replyList" :key="i">
					<view class="uni-comment-face">
						<image :src="e.userAvatar" mode="widthFix"></image>
						{{e.userAvatar}}
					</view>
					<view class="uni-comment-body">
						<view class="uni-comment-top">
							<text>{{e.userNickname}}</text> 
						</view>
						<view @click="toComment(e.userId,e.userNickname)" class="uni-comment-content">
							回复 <text style="color: #007BFF;"> {{e.respUserNickname}} :</text>	{{e.content}}
						</view>
						<view class="uni-comment-date">
							<view>{{e.createdTime}}</view>
							<view class="uni-comment-replay-btn iconfont iconzan">{{e.thumbupCount}}</view>
						</view>
					</view>
				</view>	
			</bk-list>
		</view>
		
		
		<!-- 8 发表评论 -->
		<view class="fixed-bottom flex justify-aroud align-center border-top bg-white" 
				style="height: 80rpx;padding: 4rpx;">
			<input disabled class="rounded-16" @click="toComment(comment.userId,comment.userNickname)"  
			v-model="message" type="text" :placeholder="'回复 '+comment.userNickname"
			style="flex: 1;margin: 0px 10rpx;background-color: #EEEEEE;padding: 10rpx;"/>
		</view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				comment:{},
				page:0,
				size:10,
				replyList:[],
				
				condition:{
					commentId:"",
					parentType:"",
					parentId:"",
				},
				
				loadMoreStatus:"more"
			}
		},
		
		onLoad(options) {
			console.log(JSON.stringify(options));
			this.condition = options;
			this.intitComment(options.commentId);
		},
		onShow() {
			console.log("回复show:"+this.comment)
			// if(this.replyList.length <= 0){
			// 	return;
			// }
			
			this.replyList = [];
			this.page = 0;
			this.getReplyPage();		
		},
		methods:{
			intitComment(id){
				this.$http.comment.getById(id).then(res => {
						this.comment = res.data;
						this.getReplyPage();
				}).catch(err => console.log(err));
			},
			getReplyPage(){
				let args = {commentId:this.comment._id,page:this.page,size:this.size}
				this.$http.comment.getPageReply(args).then(res => {
					res.data.content.forEach(e => this.replyList.push(e));
				}).catch(err => console.log(err));
			},
			// 去评论页
			toComment(userId,userNickname){
				this.$global.open('detail/public-comment?parentType='+this.condition.parentType+'&parentId='+this.condition.parentId+'&commentId='+this.condition.commentId+'&respUserId='+userId+'&respUserNickname='+userNickname+'&isComment=false');               
			},
			loadMore(){
				if(this.loadMoreStatus === "noMore")
					return;
				this.loadMoreStatus = "loading";
				this.page += 1;
				this.getReplyPage();
			}
		}
		
		
	}
</script>

<style>
	
</style>
