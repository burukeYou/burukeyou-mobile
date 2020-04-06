<template>
	<view>
		<!-- <!-- 1- 导航栏 -->
		<uni-nav-bar style="float: left;" fixed status-bar  color="#333333" background-color="#FFFFFF">
			<view class="input-view" slot="left">
				<uni-icons class="input-uni-icon" type="search" size="22" color="#666666" />
				<input disabled confirm-type="search" class="nav-bar-input" type="text" placeholder="输入搜索关键词">
			</view>
		</uni-nav-bar> 
		
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	
	export default {
		data() {
			return {
				
			}
		},
		components:{
			uniNavBar
		},
		methods: {
			
		}
	}
	
</script>

<style>
	.input-view {
			/* #ifndef APP-PLUS-NVUE */
			display: flex;
			/* #endif */
			flex-direction: row;
	
			flex: 1;
			background-color: #f8f8f8;
			height: 30px;
			border-radius: 15px;
			padding: 0 15px;
			flex-wrap: nowrap;
			margin: 7px 0;
			line-height: 30px;	
	}
	
	.input-uni-icon {
		line-height: 30px;
	}
	
	.nav-bar-input {
		height: 30px;
		line-height: 30px;
		/* #ifdef APP-PLUS-NVUE */
		width: 370rpx;
		/* #endif */
		padding: 0 5px;
		font-size: 28rpx;
		background-color: #f8f8f8;
		width: 400rpx;
	}
</style>
