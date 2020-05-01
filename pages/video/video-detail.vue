<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt" >
			<view>
				<video style="width: 685rpx;" id="myVideo" 
				src="http://burukeyou.oss-cn-shenzhen.aliyuncs.com/video/14_%E5%AE%9E%E9%AA%8C%E4%BA%8C%E6%89%A9%E5%B1%95%E7%8E%AF%E8%8A%82.mp4"
					@error="videoErrorCallback" page-gesture autoplay
					:danmu-list="danmuList" enable-danmu danmu-btn controls></video>
			</view>
		        
	    </view>
		   
		   
		 <!-- 2- 评论 -->
		 <view>
		 	<view class="" style="font-size: 30rpx;font-weight: 400;">评论列表: 309</view>
		 	
		 	<view class="uni-comment-list">
		 	    <view class="uni-comment-face">
		 	        <image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png" mode="widthFix"></image>
		 	    </view>
		 	    <view class="uni-comment-body">
		 	        <view class="uni-comment-top">
		 	            <text>小猫咪</text>
		 	        </view>
		 	        <view class="uni-comment-content">支持国产，支持DCloud!</view>
		 	        <view class="uni-comment-date">
		 	            <view>2天前</view>
		 	            <view class="uni-comment-replay-btn">5回复</view>
		 	        </view>
		 	    </view>
		 	</view>
		 	 <view class="uni-comment-list-replay">
		 	     <view class="uni-comment-face">
		 	         <image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png" mode="widthFix"></image>
		 	     </view>
		 	     <view class="uni-comment-body">
		 	         <view class="uni-comment-top">
		 	             <text>小猫咪</text>
		 	         </view>
		 	         <view class="uni-comment-content">支持国产，支持DCloud!</view>
		 	         <view class="uni-comment-date">
		 	             <view>2天前</view>
		 	             <view class="uni-comment-replay-btn">5回复</view>
		 	         </view>
		 	     </view>
		 	 </view> 
		 </view>  
		   
		   
		  <!-- 3 底部操作 -->
		  <view class="fixed-bottom flex justify-aroud align-center border-top bg-white" 
		  		style="height: 100rpx;background-color: #EEEEEE;padding: 7rpx;">
		  	<input @confirm="sendDanmu" placeholder="发送弹幕" v-model="danmuValue" type="text" style="flex: 1;margin: 0px 10rpx;background-color: #FFFFFF;padding: 5rpx;"/>
		  	<view style="font-size: 24px;color: #BBBBBB;" class="iconfont iconfasong" @click="sendDanmu"></view>
		  </view>
		  
	</view>
</template>

<script>
	export default {
		onLoad(args) {
			console.log("当前视频id为:"+args.id)
		},
		data() {
			return {
				src: '',
				danmuList: [{
						text: '第 1s 出现的弹幕',
						color: '#ff0000',
						time: 1
					},
					{
						text: '第 3s 出现的弹幕',
						color: '#ff00ff',
						time: 3
					}
				],
				danmuValue: ''
			}
		},
		onReady: function(res) {
			 //创建并返回 video 上下文 videoContext 对象。
			 this.videoContext = uni.createVideoContext('myVideo')
		},
		methods: {
			// 发弹幕
			 sendDanmu: function() {
				 this.videoContext.sendDanmu({
					 text: this.danmuValue,
					 color: this.getRandomColor()
				 });
				 this.danmuValue = '';
			 },
			 videoErrorCallback: function(e) {
				 uni.showModal({
					 content: e.target.errMsg,
					 showCancel: false
				 })
			 },
			 getRandomColor: function() {
				 const rgb = []
				 for (let i = 0; i < 3; ++i) {
					 let color = Math.floor(Math.random() * 256).toString(16)
					 color = color.length == 1 ? '0' + color : color
					 rgb.push(color)
				 }
				 return '#' + rgb.join('')
			 }
		}
	}
</script>

<style>
</style>
