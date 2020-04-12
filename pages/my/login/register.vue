<template>
	<view>
		<!-- 1-header -->
		<view class="header">
			<image style="width: 300rpx;height: 80rpx;" src="/static/img/logo.png"></image>
		</view>
		
		<!-- 2- 注册表单 -->
		<view class="register" style="margin-top: 100rpx;padding: 0px 10px;">
			<input focus type="number" placeholder="手机号"/>
			<input type="text" placeholder="用户名"/>
			<input type="text" password   placeholder="密码"/>
		</view>
		
		<!-- 3 -- 注册按钮 -->
		<!-- 3-登陆按钮 -->
		<button class="bk-background-color " 
				type="primary" style="border-radius: 2.5rem;background-color: #007BFF;width: 86%
									box-shadow: 0 0 60rpx 0 rgba(0,0,0,.2);margin-top: 90rpx;">
			 注册
		</button>
</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
	
	
</script>

<style>
	.header {
		width:300rpx;
		height:80rpx;
		padding-top: 27rpx;
		margin: 38rpx auto;
	}
	
	.register > input {
		border-bottom-width: 1rpx;
		border-bottom-style: solid;
		border-bottom-color: #dee2e6;
		padding: 20rpx;
	}
</style>
