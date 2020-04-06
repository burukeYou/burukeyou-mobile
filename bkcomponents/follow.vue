<template>
	<!--  关注按钮 -->
	<view class="focus animated" :style="{color:color,'border-color': color}" @click="reverseFollow" hover-class="bounceIn">
		<view  v-if="localIsFollow" class="flex-all-center animated" hover-class="bounceIn">
			 已关注</view>
		<view v-else class="flex-all-center animated" hover-class="bounceIn">+ 关注</view>
	</view>
</template>

<script>
	export default {
		props:{
			isFollow:{
				type:Boolean,
				default:false
			},
			parentId:{
				require:false
			},
			color:{
				default:"#09BB07"
			}
		},
		data() {
			return {
				localIsFollow:this.isFollow //用本地变量接收,这样又能通过更改值来动态显示组件
			}
		},
		methods: {
			// (不能修改props)避免直接改变属性，因为当父组件重新呈现时，该值将被覆盖。相反，使用基于属性值的数据或计算属性
			reverseFollow(){
				this.localIsFollow = !this.localIsFollow;
				let args = {
					parentId:this.parentId,
					isFollow:this.localIsFollow
				}
				this.$emit('reverseFollow',args);
			}
		}
	}
	
</script>


<style>	
	.focus > view {
		border-width: 1px;
		border-style: solid;
		width: 90rpx;
		height: 50rpx;
		border-radius: 5rpx;
		padding:0rpx 2rpx;
	}
</style>
