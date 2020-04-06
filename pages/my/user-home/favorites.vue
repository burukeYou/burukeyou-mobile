<template>
	<view>
		<bk-tabs :borderBottom="true" :loadMoreStatus="loadMoreStatus" :tabList="tabList"  @changeTab="changeTab">
			
			<view  slot="文章">
				<view @click="open('my/user-home/favorites-detail?id=4')" class="flex justify-between align-center border-bottom" style="padding: 20rpx;">
					<view class="flex">
						<view>
							<image src="../../../static/logo.png" style="height: 80rpx;width: 80rpx;"></image>
						</view>
						<view style="margin-left: 20rpx;">
							 <view>java并发</view>
							 <view class="text-light-muted">3篇 李白的手机</view>
						</view>
					</view>
					<view>
						<text class="iconfont iconarrow-right"></text>
					</view>
				</view>
				
				
				<view class="flex justify-between align-center border-bottom" style="padding: 20rpx;">
					<view class="flex">
						<view>
							<image src="../../../static/logo.png" style="height: 80rpx;width: 80rpx;"></image>
						</view>
						<view style="margin-left: 20rpx;">
							 <view>默认</view>
							 <view class="text-light-muted">3篇 李白的手机</view>
						</view>
					</view>
					<view>
						<text class="iconfont iconarrow-right"></text>
					</view>
				</view>
								
			</view>
			<view  slot="视频">
					4
			</view>
		
			
			
		</bk-tabs>
		
		
		
	</view>
</template>

<script>
	import BkTabs from "@/bkcomponents/bk-tabs.vue"
	export default {
		data(){
			return{
				loadMoreStatus: "more",
				tabList:[
					{id:"1",name:"文章",isshow:true},
					{id:"2",name:"视频",isshow:true}
				],
			}
		},
		methods:{
			// 打开path页面
			open(path){
				let p = `/pages/${path}`;
				console.log(p)
				uni.navigateTo({
					url: p
				})
			},
			// 
			changeTab(e){
				this.loadMoreStatus = "more";
				console.log("切换:"+JSON.stringify(e));
			}
		},
		components:{
			BkTabs
		}
	}
	
</script>

<style>
</style>
