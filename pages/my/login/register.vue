<template>
	<view>
		<!-- 1-header -->
		<view class="header">
			<image style="width: 300rpx;height: 80rpx;" src="/static/img/logo.png"></image>
		</view>
		
		<!-- 2- 注册表单 -->
		<view class="register" style="margin-top: 100rpx;padding: 0px 10px;">
			<input  v-model="condition.username" type="text" placeholder="账号"/>
			<input  v-model="condition.nickname" type="text" placeholder="昵称"/>
			<input  v-model="condition.password" type="password" password   placeholder="密码"/>
		</view>
		
		<!-- 3 -- 注册按钮 -->
		<!-- 3-登陆按钮 -->
		<button @click="register" class="bk-background-color " 
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
				condition:{
					username:"",
					nickname:"",
					password:""
				}
			}
		},
		methods: {
			register(){
				if(this.validationInput){
					this.$http.user.register(this.condition).then(res => {
						if(res.code === "200"){
							uni.showToast({
								title:"注册成功"
							});
							uni.navigateBack({
								delta:-1
							});
						}
					}).catch(err => console.log(err));
				}else{
					uni.showToast({
						title:"账号密码不能为空",
						icon:"none"
					})
				}
			}
		},
		computed:{
			validationInput(){
				console.log(this.condition)
				return this.condition.username === '' || this.condition.password === '' 
						|| this.condition.nickname === '' ? false : true
			}
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
