<template>
	<!-- animated fast fadeIn 特效 -->
	<view class="top animated fast fadeIn">
		<view style="display: flex;align-items: center;padding: 20rpx;">
			<!-- 已登陆 -->
			<block v-if="loginStatus">
				<image src="/static/img/boilinged.png" style="width: 80rpx;height: 80rpx;"
				class="rounded-circle" @click="open('my/user-home/user-home')"></image>
				
				<view style="display: flex;flex-direction: column;padding-left: 20rpx;flex: 1;">
					<text style="font-size: 30rpx;font-weight: 600;text: #343a40">李白的手机</text>
					<text style="color: #6c757d;">简介....</text>
				</view>
				
			</block>
			<block v-else>
				<!-- 未登陆 -->
				<image src="/static/img/my.png" style="width: 80rpx;height: 80rpx;"class="rounded-circle"></image>
				<view @click="open('my/login/login')" style="display: flex;flex-direction: column;padding-left: 20rpx;flex: 1;">
					<text style="font-size: 30rpx;font-weight: 600;text: #343a40">登陆/注册</text>
				</view>	
				<text class="iconfont iconarrow-right" style="font-size: 21px;"></text>
			</block>
			
			
		</view>
		

		<view class="sub" style="margin-top: 20rpx;">
			<uni-list-item title="消息中心" @click="open('my/notification/notification')" showExtraIcon :show-arrow="false" :show-badge="true" badge-text="12" badgeType="error" style="border-bottom: 1px solid #A9A5A0">
				<text slot="icon" class="iconfont iconling" style="color: #007BFF;"></text>
			</uni-list-item>
			<uni-list-item title="我赞过的" showExtraIcon>
				<text slot="icon" class="iconfont icondianzan1-copy" style="color: #09BB07;"></text>
			</uni-list-item>
			<uni-list-item title="收藏"  showExtraIcon rightText="2个"  @click="open('my/user-home/favorites')" :show-arrow="false">
				<text slot="icon" class="iconfont iconshoucang2" style="color:#FFC107;"></text>
			</uni-list-item>
			<uni-list-item title="浏览历史" showExtraIcon>
				<text slot="icon" class="iconfont iconweibiaoti3" ></text>
			</uni-list-item>
			<uni-list-item title="标签管理" showExtraIcon @click="open('focus/focus-label')">
				<text slot="icon" class="iconfont iconbiaoqian" ></text>
			</uni-list-item>
		</view>	
				
		
		<view style="background-color: #FFFFFF;margin-top: 30rpx;" >
			<uni-list-item  @click="open('my/feedback/feedback')"   title="意见反馈" showExtraIcon>
				<text slot="icon" class="iconfont iconyijianfankui1" ></text>
			</uni-list-item>
			<uni-list-item @click="open('my/setting/setting')"   title="设置" showExtraIcon>
				<text slot="icon" class="iconfont iconshezhi" ></text>
			</uni-list-item>
		</view>
		
			
	</view>
</template>

<script>
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
	export default {
		data() {
			return {
				loginStatus: this.$store.state.loginStatus
			}
		}, 
		onLoad() {
				console.log("onLoad:"+this.loginStatus)
		},
		onShow() {
			this.loginStatus = this.$store.state.loginStatus;
		    console.log("onShow:"+this.loginStatus)
		    console.log("当前用户信息:"+  JSON.stringify(this.$store.state.loginUser));
			
			
		},
		mounted() {
				console.log("mounted:"+this.loginStatus)
		},
		components: {
			uniListItem
		},
		methods: {
			toSetting(){
				console.log("toSetting");
				uni.navigateTo({
					url:"/pages/my/setting/setting"
				});
			},
			toFeedBack(){
				console.log("toSetting");
				uni.navigateTo({
					url:"/pages/my/feedback/feedback"
				});
			},
			// 打开path页面
			open(path){
				let p = `/pages/${path}`;
				console.log(p)
				uni.navigateTo({
					url: p
				})
			},
		}
	}
</script>

<style>
	.top {
		background-color:  #F5F5F4;;
		padding: 30rpx 0rpx;
	}
	.top >  view {
		background-color: #FFFFFF;
	}
	
	.sub   uni-list-item {
		margin-top: 5rpx;
	}

	.sub > uni-list-item {
		border-bottom: 1px solid  #A9A5A0;
	}

</style>
