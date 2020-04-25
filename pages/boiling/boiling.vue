<template>
	<view>
		<view @click="toPublicBoiling" class="iconfont iconcombinedshape"
			style="position: fixed;right: 20px;bottom: -30px;z-index: 1030;
			color: #2376E5;font-size: 38px;opacity:1.0">		
		</view>
		
		
		<bk-tabs :tabList="tabList" :loadMoreStatus="loadMoreStatus" @changeTab="changeTab" @loadMore="loadMore">
			<view :slot="index" v-for="(item,index) in tabList">
				<block v-for="(e,i) in boilingList"	>
					<boiling-card :key="i" :boiling="e"></boiling-card>		
				</block>	
			</view>
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
				boilingList:[],				
				
				// about data
				tabList:[],
				loadMoreStatus: "more",
				
				// about query condition
				condition:{
					page:1,
					size:10,
					topicId:""
				}
			
			}
		},
		// ===================生命周期================================================
		onLoad() {
			
		},
		onShow() {
			this.condition = {page:1,size:10,topicId:""}
			this.loadMoreStatus = "more";
			this.boilingList = [];
			this.initTabList();
		},
		mounted() {
			
		},
		// ===================Methods================================================
		methods: {
			// 初始化tabs
			initTabList(){
				 this.$http.topic.getTop10Topic().then(res => {
					this.tabList = res.data.records;
					this.tabList.unshift({id:"",name:"全部"});
					this.condition.topicId = this.tabList[0].id;
					
					this.search();
				}).catch(err => console.log(err));
			},
			// 2-初始化数据  async + await 相当于实现了同步调用. await得定义在async方法里面
			// async getData(){
			// 	await this.$http.get('/boilling/102',{page:this.page,size:this.size}).then(res => {
			// 		console.log("getData:"+JSON.stringify(res));
			// 	});				
			// },
			//
			changeTab(e){
				this.loadMoreStatus = "more";
				console.log("切换:"+JSON.stringify(e));
				this.condition.topicId = e.id;
				this.boilingList = [];
				this.condition.page = 1;
				this.search();
			},
			loadMore(){		
				if(this.loadMoreStatus === "noMore")
					return;
				
				this.condition.page += 1;
				this.loadMoreStatus = "loading";
				this.search()
			},
			search(){
				console.log(JSON.stringify(this.condition))
				this.$http.boiling.getPageCondition(this.condition).then(res =>{
					if(res.data.records.length <= 0){
						this.loadMoreStatus = "noMore"
						return;
					}
					
					res.data.records.forEach(e => this.boilingList.push(e));
				}).catch(err => console.log(err));
			},
			toPublicBoiling(){
				this.$global.open("boiling/public-boiling")
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
