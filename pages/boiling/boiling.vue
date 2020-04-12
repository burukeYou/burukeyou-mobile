<template>
	<view>
		<bk-tabs :tabList="tabList" :loadMoreStatus="loadMoreStatus" @changeTab="changeTab" @loadMore="loadMore">
			<view slot="开源推荐" >
					<boiling-card v-for="(e,i) in boilingList" :key="i" :boiling="e"></boiling-card>
				
			</view>
			<view slot="内退招聘" ></view>
			<view slot="相亲视角"></view>
			<view slot="上班墨鱼"></view>
			<view slot="right" style="margin-left: 10rpx;" class="iconfont icongengduo1"></view>
		</bk-tabs>
		
		
	
	</view>
</template>

<script>
	import BoilingCard from "@/bkcomponents/boilingCard"
	import BkTabs from "@/bkcomponents/bk-tabs.vue"
	export default {
		data() {
			return {
				// about style
				active: 1,
				scrollHight:400,
				boilingList:[
					{
							"id":"22",
						   "userId":"998",
							userNickname:"小芙蓉100",
							userAvatar:"/static/img/home.png",
							createdTime:"2020-10-22",
							content:"闪避不能看发就是看到好风景",
							contentPic:[
								"/static/img/content.jpg",
								"/static/img/content.jpg",
								"/static/img/content.jpg",
								"/static/img/content.jpg",
								"/static/img/content.jpg",
								"/static/img/content.jpg",
								"/static/img/content.jpg",
								"/static/img/content.jpg",
								"/static/img/content.jpg"
							],
							topicName:"提问回答",
							visitsCount:"20",
							thumbupCount:"10",
							commentCount: "30",
							url:"",
							isFollow:true,
							isThumbup:false	
					}
				],				
				
				// about data
				page:0,
				size:10,
				
				tabList:[
					{id:"1",name:"开源推荐",isshow:true},
					{id:"2",name:"内退招聘",isshow:true},
					{id:"3",name:"相亲视角",isshow:true},
					{id:"4",name:"上班墨鱼",isshow:true},
				],
				loadMoreStatus: "more",
			
			}
		},
		// ===================生命周期================================================
		onLoad() {
			this.initHeight();
			this.getData();
		},
		mounted() {
			
		},
		// ===================Methods================================================
		methods: {
			//1- 初始化高度
			initHeight(){
				// 110px;
				uni.getSystemInfo({
					success:res=>{
						console.log("windowHeight: "+res.windowHeight);// px
						this.scrollHight =  res.windowHeight - 44;
						console.log("scrollHight: "+this.scrollHight);// px
					}
				});
			},
			// 2-初始化数据  async + await 相当于实现了同步调用. await得定义在async方法里面
			async getData(){
				await this.$http.get('/boilling/102',{page:this.page,size:this.size}).then(res => {
					console.log("getData:"+JSON.stringify(res));
				});				
			},
			//
			changeTab(e){
				this.loadMoreStatus = "more";
				console.log("切换:"+JSON.stringify(e));
			},
			loadMore(){		
				this.loadMoreStatus = "loading";
				setTimeout(()=>{
					console.log("加载数据完成");
					this.loadMoreStatus = "noMore";
				},3000);
			}
		},
		// ===================components================================================
		components:{
			BoilingCard,BkTabs
		},
	}
</script>

<style>
	.nav-class {
		background-color: #117A8B;
		font-size: 100px;
	}
	
	view {
		font-size:28rpx;
		line-height:3;
	}
</style>
