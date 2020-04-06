<template>
	<view>
		<uni-swipe-action >
			<uni-swipe-action-item :options="options"  @click="bindClick" :auto-close="true">
				<view @click="open('message/chat/chat')" class="flex align-center border-bottom " style="padding: 20rpx;">
					<image :src="src" style="height: 80rpx;width: 80rpx;" 
									class="rounded-circle"></image>
					<view class="flex flex-column" style="flex: 1;" > 
							<view class="flex align-center justify-between ">
									<text style="font-size:35rpx">{{nickname}}</text>
									<text style="color: #6c757d;font-size: 25rpx;">{{time}}</text>
							</view>
							
							<view class="flex align-center justify-between ">
								<text  class="text-secondary text-ellipsis" style="max-width: 550rpx;">
									{{msg}}
								</text>
								<uni-badge v-if="count > 0" :text="count" type="error"></uni-badge>
							</view>
					</view>
				</view>
			</uni-swipe-action-item>
		</uni-swipe-action>
		
		
	</view>

</template>

<script>
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
	import uniSwipeActionItem from '@/components/uni-swipe-action-item/uni-swipe-action-item.vue'
	
	export default {
		props:[
			'src',
			'nickname',
			'time',
			'msg',
			'count'
		],
		data() {
			return {
				options: [{
					text: '标为未读',
					style: {
						backgroundColor: '#007aff'
					}
				}, {
					text: '删除',
					style: {
						backgroundColor: '#dd524d'
					}
				}]
			}
		},
		components:{
			uniSwipeAction,uniSwipeActionItem
		},
		methods: {
			//
			bindClick(e) {
				console.log(e);
				uni.showToast({
					title: `点击了${e.content.text}按钮`,
					icon: 'none'
				})
			},
			// 打开path页面
			open(path){
				let p = `/pages/${path}`;
				console.log(p)
				uni.navigateTo({
					url: p
				});
			},
		}
	}
	
	
</script>
	
<style>
</style>
