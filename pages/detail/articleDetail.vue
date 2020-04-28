<template>
	<view style="padding: 20rpx;">
		<!-- 1-头像昵称关注 -->
		<view class="flex-center-between">
				<view class="flex align-center" @click="toUserHome">
					<image class="rounded " :src="article.userAvatar" style="margin-right: 20rpx;height: 65rpx;width: 65rpx;" lazy-load>
					<view>
						<view style="font-size: 30rpx;line-height: 1.2">{{article.userNickname}}</view>
						<text style="color: #909399;font-size: 25rpx;">{{article.createdTime}}</text>
					</view>
				</view>
				<view>	
					<follow @reverseFollow="postOrCanelFollow" :isFollow="article.focusUser"></follow>
				</view> 
		</view>
		
		<!-- 2-标题 -->
		<view style="color: #0E151D;font-size: 42rpx;font-weight: 700;">
			{{article.title}}
		</view>
		
		<!-- 3-图片 -->
	<!-- 	<view>
			<image src="../../static/img/content.jpg" @click="preview('/static/img/content.jpg')" class="w-100"></image>
		</view> -->
		
		<!-- 4 -内容 -->
		<view class="mt-2">
			<rich-text v-html="article.htmlContent"></rich-text>
		</view>
		
		<!-- 5 -标签 -->
		<view class="flex mt-2">
			<view style="color: #FFFFFF;padding: 3rpx 15rpx;" class="border rounded-16  ml-1 bg-blue font-small" v-for="(e,i) in article.labels" :key="i">
				{{e}}
			</view>
		</view>
		
		
		<!-- ˜6 - 点赞量 ,访问量 -->
		<view class="text-light-muted mt-2 flex align-center justify-between">
			<view>
				<text>赞  {{article.thumbupCount}}</text>
				<text>阅读  {{article.visitsCount}}</text>
				<text>评论  {{article.commentCount}}</text>
			</view>
			<view @click="toOpenFavorities" class="animated" hover-class="bounceIn">
				<view  v-if="article.favorities" class="iconfont iconshoucang2  bg-orign" ></view>
				<view  v-else class="iconfont iconshoucang2 " ></view>
			</view>
			
		</view>
		
		<divider></divider>
		
		<!-- 7- 评论 -->
		<view>
			<view class="" style="font-size: 30rpx;font-weight: 400;">评论列表: 309</view>
			
			<bk-list :loadMoreStatus="loadMoreStatus" @loadMore="loadMore" stys="margin-bottom: 100rpx;" >
				<view  class="uni-comment-list" v-for="(e,i) in commentList" :key="i">
				    <view class="uni-comment-face">
				        <image :src="e.userAvatar" mode="widthFix"></image>
				    </view>
				    <view class="uni-comment-body">
				        <view class="uni-comment-top">
				            <text>{{e.userNickname}}</text> 
				        </view>
				        <view @click="toReply(e._id)" class="uni-comment-content">{{e.content}}</view>
				        <view class="uni-comment-date">
				            <view>{{e.createdTime}}</view>
				            <view class="uni-comment-replay-btn iconfont iconzan">{{e.thumbupCount}}
							</view>
							 {{e.replyCount}}回复
				        </view>
				    </view>
				</view>	
			</bk-list>
			
		</view>
		
		
		<!-- 8 发表评论 -->
		<view class="fixed-bottom flex justify-aroud align-center border-top bg-white" 
				style="height: 80rpx;padding: 4rpx;">
			<input disabled class="rounded-16" @click="toComment"  v-model="message" type="text" placeholder="输入评论..."
			style="flex: 1;margin: 0px 10rpx;background-color: #EEEEEE;padding: 5rpx;"/>
			<!-- <view style="font-size: 24px;color: #BBBBBB;" class="iconfont iconfasong">
				
			</view>
			 -->
			<view @click="postThump" class="flex-all-center animated" hover-class="bounceIn">
				<text v-if="article.like"   class="iconfont iconzan" style="color: #007BFF;margin-right: 5rpx;"></text>
				<text v-else  class="iconfont iconzan" style="margin-right: 5rpx;"></text>	
				<text>{{article.thumbupCount}}</text>
			</view>
			
			<view  class="flex-all-center" >
				<text class="iconfont iconpinglun" style="margin-right: 5rpx;"></text>	
				<text>{{article.commentCount}}</text>
			</view>	
		</view>
		
		<!-- 9 - 底部弹出框 -->
		<van-popup :show="selectVisable" position="bottom" custom-style="height: 20%;" @close="onBottomCardClose">
			<van-radio-group :value="radio" @change="onSelectChange">
			  <van-cell-group>
					<block v-for="(e,i) in favoritiesOptions">
						<van-cell :title="e.name" clickable :data-name="i" :key="i" @click="postFavorities(e)">
							<van-radio slot="right-icon" :name="i" />
						</van-cell>
					</block>
			  </van-cell-group>
			</van-radio-group>		
			
		</van-popup>
		
	</view>
</template>

<script>
	
	import follow from "@/bkcomponents/follow.vue"
	import BkList from "@/bkcomponents/bk-list.vue"
	export default {
		data() {
			return {
				article:{
					//favorities:false
				},
				//
				favoritiesOptions:[],
				selectVisable: false,
				radio: null,
				//
				commentList:[],
				condition:{
					parentType:'Article',
					parentId:'',
					page:0,
					size:10
				},
				loadMoreStatus:"more"
			
			}
		},
		onLoad: function (option) {
		     console.log(option.id); //打印出上个页面传递的参数。
			 this.initArticleDetail(option.id);
		},
		onShow() {
			console.log("评论show"+this.article)
			this.condition.parentId = this.article.id;
			this.condition.parentType = 'Article';
			
			// if(this.commentList.length <= 0){
			// 	return;
			// }
			this.commentList = [];
			this.condition.page = 0;
			 this.initCommentList();
		},
		components:{
			follow,BkList
		},
		methods: {
			initArticleDetail(id){
				this.$http.article.getDetailById(id).then(res => {
					this.article = res.data;
					this.condition.parentId = this.article.id;
					this.initCommentList();
				}).catch(err => console.log(err));
			},
			initCommentList(){
				this.$http.comment.getPageNewly(this.condition).then(res => {
					if(res.data.content.length <= 0){
						this.loadMoreStatus = "noMore";
						return;
					}
					 res.data.content.forEach(e => this.commentList.push(e));
					//this.commentList = res.data.content;
					this.loadMoreStatus = "more"
				}).catch(err => console.log(err));
			},
			// 去评论页
			toComment(){
				this.$global.open('detail/public-comment?parentType=Article'+'&parentId='+this.article.id+'&isComment=true');
			},
			// 去回复列表
			toReply(commentId){
				console.log(commentId);
				this.$global.open('detail/reply?commentId='+commentId+'&parentType=Article'+'&parentId='+this.article.id);
			},
			// 跟新关注状态
			postOrCanelFollow(value){
				console.log("关注用户"+this.article.user_id+"---现在的值:"+value)
			},
			// 预览图片
			preview(src){	
				console.log(src)
				uni.previewImage({
					urls: [src,src]
				});
			},
			// 去用户主页
			toUserHome(){
				 console.log("去用户主页");
			},
			// 更改收藏状态 
			toOpenFavorities(){
				this.$auth(() => {
					//
					if(!this.article.favorities){			
						let args = {type: 'Article',userId:this.$store.state.loginUser.id}
						this.$http.favorities.getAll(args).then(res => {
							this.favoritiesOptions  =res.data;
							this.selectVisable = true;
						}).catch(err => console.log(err));	
					}else{			
						let args = {
							favoritiesId : this.article.favoritiesId,
							collectionType : "Article",
							collectionId : this.article.id,
						}
						this.$http.favorities.cancelCollection(args).then(res => {
							if(res.code === "200"){
								uni.showToast({
									title:"取消收藏成功"
								})
								this.selectVisable = false;
								this.article.favorities = false;
							}else{
								uni.showToast({
									title:"取消收藏失败",
									icon:"none"
								})
							}
						}).catch(err => console.log(err));
					}
				});

				//this.article.favorities = !this.article.favorities;
				//console.log(this.article.favorities);
			},
			onBottomCardClose(){
				this.selectVisable = false;
			},
			onSelectChange(event){
				this.radio = event.detail;
			},
			// 收藏
			postFavorities(event){
				//let name =  event.currentTarget.dataset;
				console.log("选择了:"+JSON.stringify(event))
				let args = {
					favoritiesId : event.id,
					collectionType : "Article",
					collectionId : this.article.id,
				}
				this.$http.favorities.addCollection(args).then(res => {
					if(res.code === "200"){
						uni.showToast({
							title:"收藏成功"
						})
						this.selectVisable = false;
						this.article.favorities = true;
					}else{
						uni.showToast({
							title:args.message,
							icon:"none"
						})
					}
				}).catch(err => console.log(err));
			},
			loadMore(){
				if(this.loadMoreStatus === "noMore")
					return;
				this.loadMoreStatus = "loading";
				this.condition.page += 1;
				this.initCommentList();
			}
		
		},
		
	}
</script>

<style>
	.bg-orign{
		color: #FDA429;
	}

</style>
