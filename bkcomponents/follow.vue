<template>
	<!--  关注按钮 -->
	<view class="focus animated"  @click="reverseFollow" hover-class="bounceIn">
		<view :style="{color:colored,'border-color': colored}"  v-if="localIsFollow" class="flex-all-center animated" hover-class="bounceIn">
			 已关注</view>
		<view :style="{color:color,'border-color': color}"  v-else class="flex-all-center animated" hover-class="bounceIn">+ 关注</view>
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
			},
			colored:{
				default: "#46A0FC"
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
	
	.focus-color {
		color: #09BB07;
		border-color:  #09BB07;
	}
	
	.unfocus-color {
		color: #46A0FC;
		border-color:  #46A0FC;
	}
	
</style>
