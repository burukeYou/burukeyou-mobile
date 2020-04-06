<template>
	<view class="bg-color2">
		<bk-tabs :borderBottom="true" :loadMoreStatus="loadMoreStatus" :tabList="tabList"  @changeTab="changeTab">
		
			<view slot="用户消息">
				<view class="flex align-start border-bottom" style="padding: 20rpx;background-color: #FFFFFF;">
					<view>
						<image src="../../../static/img/my.png" style="width: 80rpx;height: 80rpx;"></image>
					</view>
					<view class="flex flex-column justify-between" style="margin-left: 10rpx;">
						<view>
							<text>zhangshan </text>
							<text>评论了你的文章</text>
							<text style="color: #007AFF;">使用jenkin持续集成快速部署项目</text>
						</view>
						<view class="text-light-muted">3 星期前</view>
					</view>
				</view>
			</view>
			<view slot="系统消息">
				4
				
				
			</view>
		
		</bk-tabs>
		
		
			
	</view>
</template>

<script>
	import BkTabs from "@/bkcomponents/bk-tabs.vue"
	export default {
		data() {
			return {
				loadMoreStatus: "more",
				tabList:[
					{id:"1",name:"用户消息",isshow:true},
					{id:"2",name:"系统消息",isshow:true}
				],
			}
		},
		methods: {
			//
			changeTab(e){
				this.loadMoreStatus = "more";
				console.log("切换:"+JSON.stringify(e));
			},
			loadMore(){
				this.loadMoreStatus = "loading";
				setTimeout(()=>{
					console.log("加载数据完成");
					this.loadMoreStatus = "noMore";
				},3000);
			}
		},
		components:{
			BkTabs
		}
	}
</script>

<style>

</style>
