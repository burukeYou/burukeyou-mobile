<template>
	<view class="top" style="background-color: #F5F5F4;padding: 30rpx 0rpx;">
		<!-- 1 -->
		<view style="background-color: #FFFFFF;">	
			<uni-list-item title="手机" rightText="17922031681"></uni-list-item>
			<uni-list-item title="邮箱" rightText="23249999@qq.com"></uni-list-item>
			<uni-list-item title="修改密码"></uni-list-item>
		</view>
		
		<!-- 2  -->
		<view class="uni-list"> 
			 <view class="uni-list-cell uni-list-cell-pd">
					<view class="uni-list-cell-db">绑定微信</view>
					<view class="text-light-muted " style="margin-right: 10rpx;">李白的手机</view>
					<switch checked />
			 </view>	
		</view>
		<!-- 3 -->
		<view style="background-color: #FFFFFF;">
			<uni-list-item title="清除缓存" @click="clearCache">
				<view slot="right" class="text-muted">{{cacheSize|format}}</view>
			</uni-list-item>
			<uni-list-item  title="设置新消息通知"></uni-list-item> 
		</view>
		<!-- 4 -->
		<view @click="logout" style="background-color: #FFFFFF;padding: 20rpx;color: #FF3333;text-align: center;">
			退出账号
		</view>
		
	</view>
</template>

<script>
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue';
	export default {
		data() {
			return {
				cacheSize:0
			}
		},
		components: {
			uniListItem
		},
		onLoad() {
			this.intitCacheSize();
		},
		filters:{
			format(value){
				// toFixed 保留消暑两位
				return value > 1024 ? (value/1024).toFixed(2)+ 'MB' : value.toFixed(2) + 'kb';
			}
		},
		methods: {
			//清楚缓存
			clearCache(){
				uni.showModal({
					title: '提示',
					content: '是否要清楚所有缓存',
					showCancel: true,
					cancelText: '取消',
					confirmText: '确认',
					success: res => {
						if(res.confirm){
							uni.clearStorageSync(); //同步清楚缓存
							this.intitCacheSize();
							uni.showToast({
								title: "清楚成功",
								icon: 'none'
							})
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			
			// 
			intitCacheSize(){
				 this.cacheSize = uni.getStorageInfoSync();	
			},
			
			// 注销
			logout(){
				this.$store.commit('logout');
				console.log("注销成功:"+this.$store.state.loginStatus);
				
				uni.navigateBack({
				    delta: 1
				});
			}
		}
	}
</script>

<style>
	.top > view {
		margin-top: 20rpx;
	}
</style>
