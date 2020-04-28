<template>
	<view >
         <textarea v-model="boliling.content" @blur="bindTextAreaBlur" auto-height style="padding: 20rpx;"  placeholder="请输入沸点内容"/>
		
		
		<van-uploader @delete="removeImg" :file-list="imgfiles" @after-read="afterRead" />
		
		
		<view class="flex align-center justify-start mt-2" style="color: #007AFF;">
			<view class="rounded p-1" >
				{{boliling.topicName}}
			</view> 
			
			<view class="ml-2 mr-2" style="height: 30rpx;width: 0rpx;border: 1rpx solid #E8E8E8"></view>
			
			<scroll-view  :scroll-into-view="scrollIntoView" scroll-with-animation scroll-x="true" style="height:60rpx;white-space: nowrap;width: 70%;">
				<block v-for="(e,i) in topicSelectList">
					<view class="rounded ml-2" @click="changeTab(i)" :key="i" :id="'tab'+i" 
					style="display: inline-block;border: 1rpx solid #007BFF;border-radius: 8rpx;padding: 5rpx 10rpx;">{{e.name}}</view> 
				</block>
			</scroll-view>	
		</view>
		
	   <view class="uni-list mt-3">
				<view class="uni-list-cell uni-list-cell-pd">
					<view class="uni-list-cell-db">是否公开</view>
					<switch   @change="switchChange" checked />
				</view>
		</view>
		
		
		<view class="flex justify-center" @click="publicBoiling" style="border: 1px solid #007BFF;border-radius: 15rpx;
		padding: 10rpx 15rpx;color: #FFFFFF;background-color: #007BFF;margin: auto;margin-top: 100rpx;">
			<view>发布</view>
		</view>

	</view>
</template>

<script>
export default{
	components:{
		
	},
	data(){
		return{
			scrollIntoView:"",
			currentTopic:{
				id:"",
				name:"添加话题"
			},
			topicSelectList:[],
			
			boliling:{
				content:"",
				topicId:"",
				topicName:"添加话题",
				ispublic:true,
				imgfiles:[]
			},
			imgfiles:[]
			
		}
	},
	
	methods:{
		intitTopicSelectList(){
			this.$http.topic.getTop10Topic().then(res => {
				this.topicSelectList = res.data.records;				
			}).catch(err => console.log(err));
		},
		changeTab(index){
			this.scrollIntoView = 'tab'+index;
			this.boliling.topicName = this.topicSelectList[index].name;
			this.boliling.topicId = this.topicSelectList[index].id;
		},
		afterRead(event) {
			const  file  = event.detail;
			console.log(JSON.stringify(file));
			this.imgfiles.push({ url: file.file.path, name: file.name });
			this.getBase64Image(file.file.path);
			  
		},
		removeImg(e){
			 this.boliling.imgfiles.splice(e,1);
			 this.boliling.imgfiles.splice(e,1);
		},
		// 发表沸点
		publicBoiling(){			
			this.$http.boiling.publishBoilling(this.boliling).then(res => {
				if(res.code  === "200"){
					uni.showToast({
						title:"发布成功"
					});
					uni.navigateBack({
						delta:-1
					})	
				}else{
					uni.showToast({
						title:"发布失败"
					})
				}
			}).catch(err => console.log(err))
		},
		switchChange(e){
			this.boliling.ispublic =  e.target.value;
		},
		// 转base64
		 getBase64Image(url) {  
		    let toBase64Url;
		     uni.request({
				url: url,
				method: 'GET',
				responseType: 'arraybuffer',
				success:  res => {
					let base64 = wx.arrayBufferToBase64(res.data); //把arraybuffer转成base64
					toBase64Url = 'data:image/jpeg;base64,' + base64; //不加上这串字符，在页面无法显示
					this.boliling.imgfiles.push(toBase64Url);
				}
		    }); 
		}
	
		
	},
	
	
	onLoad() {
		
	},
	
	onShow() {
		this.intitTopicSelectList();
	}
	
}
	
	
</script>

<style>
	
	
	
	
</style>
