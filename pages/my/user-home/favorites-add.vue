<template>
	<view class="bg-color2">
		<view class="bg-white p-2">
			<input v-model="favorities.name" class="border-bottom" placeholder="名称" />
			
			<textarea class="mt-1" v-model="favorities.description" placeholder="描述(可选)" style="height: 200rpx;" 
				auto-height=""></textarea>
		</view>
	
		<view class="bg-white mt-2 p-2">
			<view class="flex justify-between">
				<view>类型</view>
				<view>
					<picker  @change="typeChange" :range="typeList"  :value="currentTypeIndex" >
							<view class="uni-input">{{typeList[currentTypeIndex]}}</view>
					</picker>
				</view>
			</view>
			<view class="flex justify-between">
				<view class="title">是否公开</view>
				<view>
					<switch @change="switchChange" :checked="favorities.ispublic" name="switch" />
				</view>
			</view>
		</view>
			
		<view class="bg-white p-2 flex justify-between mt-2 align-center">
			<view>上传收藏夹背景图片</view>
			<view @click="selectImg">
				<image v-if="img" :src="img" style="width: 80rpx;height: 80rpx;"></image>
				<view  v-else class="bg-color2 p-2 iconfont icontianjiajiahaowubiankuang">
					
				</view>
			</view>
		</view>
		
		<view class="mt-2">
			<text>仅支持jpg,jpeg和png格式的图片</text>
		</view>
		
		
		<view @click="add" class="bg-blue mt-5 font-md rounded-16" style="color: #FFFFFF;margin: auto;width: 100rpx;text-align: center;">
			创建
		</view>
	
		
	</view>
</template>

<script>
	export default {
		components:{
			
		},
		data(){
			return{
				favorities:{
					name:"",
					description:"",
					background:"",
					ispublic:true,
					type:"Article",
				},
				
				img:"",
				typeList:['文章','视频'],
				currentTypeIndex:0
			}
		},
		onLoad(options) {
			console.log(JSON.stringify(options));
			if(options.id){
				this.initFavoritiesInfo(options.id)
			}
		},
		methods:{
			initFavoritiesInfo(id){
				this.$http.favorities.getOne(id).then(res => {
					let vo = res.data;
					this.favorities = {
						id: vo.id,
						name: vo.name,
						description:vo.description,
						background: vo.background,
						ispublic:vo.ispublic,
						type:vo.type
					};
					this.img = vo.background;
				}).catch(err => console.log(err));
			},
			typeChange(e){
				this.currentTypeIndex = e.target.value
				if(this.currentTypeIndex === 0){
					this.favorities.type = 'Article'
				}else{
					this.favorities.type = 'Video'
				}
				console.log(JSON.stringify(this.favorities));
			},
			switchChange(e){
				this.favorities.ispublic =  e.target.value;
			},
			// 选择图片
			selectImg(){
				let _this = this;
				uni.chooseImage({
					count:1,
					success(res) {
						console.log(JSON.stringify(res.tempFilePaths));
						_this.img = res.tempFilePaths[0];
						_this.getBase64Image(_this.img);
					}
				})
			},
			// 转base64
			 getBase64Image(url) {  
				 let _this = this;
			    let toBase64Url;
			     uni.request({
					url: url,
					method: 'GET',
					responseType: 'arraybuffer',
					success:  res => {
						let base64 = wx.arrayBufferToBase64(res.data); //把arraybuffer转成base64
						toBase64Url = 'data:image/jpeg;base64,' + base64; //不加上这串字符，在页面无法显示
						_this.favorities.background = toBase64Url;
					}
			    }); 
			},
			add(){
				console.log(JSON.stringify(this.favorities));
				this.$http.favorities.save(this.favorities).then(res => {
					if(res.code === "200"){
						uni.showToast({
							title:"添加成功"
						});
						uni.navigateBack({
							delta:-1
						})
					}else{
						uni.showToast({
							title:"添加失败",
							icon:"none"
						})
					}
				}).catch(err => console.log(err));
			}
		}
	}
	
</script>

<style>
</style>
