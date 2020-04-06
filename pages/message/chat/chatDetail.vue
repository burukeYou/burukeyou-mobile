<template>
	<!-- 消息卡片 -->
	<view>
			<view v-if="convertTime" class="py-2 flex-all-center font-sm text-light-muted">
				{{convertTime}}
			</view>
						
			<!-- 左边气泡 -->
			<view v-if="!isSelf" class="flex align-start px-2 my-2">	
				<image :src="msgItem.avatar" class="rounded-circle" 
						style="height: 100rpx;width: 100rpx;">
				</image>
				<view class="bg-light p-2 rounded mx-2" style="max-width: 400rpx;">
					{{msgItem.content}}
				</view>	
			</view>
			
			<!-- 右边气泡  -->
			<view v-if="isSelf" class="flex flex-row-reverse align-start px-2">
				<image :src="msgItem.avatar" class="rounded-circle" 
						style="height: 100rpx;width: 100rpx;">
				</image>
				<view class="p-2 rounded mx-2" style="max-width: 400rpx;background-color: #A2E563;">
					{{msgItem.content}}
				</view>	
			</view>	
	</view>

</template>

<script>
	import TimeUtil from "@/common/time.js" 
	
	export default {
		props:{
			'msgItem':{
				type:Object
			},
			'index':Number,   
			'preTime':[Number,String] //上一条消息时间
		},
		data() {
			return {
				
			}
		},
		onShow() {
				
		},
		computed:{
			isSelf(){
				return this.msgItem.userId === '1';
			},
			convertTime(){
				return TimeUtil.getChatTime(this.msgItem.createTime,this.preTime);
			}
		},
		methods: {
			
		}
	}
	
	
</script>
	
<style>
</style>
