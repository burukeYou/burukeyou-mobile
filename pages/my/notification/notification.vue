<template>
	<view class="bg-color2">
		<bk-tabs :borderBottom="true" :loadMoreStatus="loadMoreStatus" :tabList="tabList"  @changeTab="changeTab">
		
			<view slot="0">
				<block v-for="(e,i) in userNotificationList">
					<view v-if="e.content.pd === '文章'" :key="i" class="flex align-start border-bottom" style="padding: 20rpx;background-color: #FFFFFF;">
						<view>
							<image src="../../../static/img/my.png" style="width: 80rpx;height: 80rpx;"></image>
						</view>
						<view class="flex flex-column justify-between" style="margin-left: 10rpx;">
							<view>
								<text class="font-md">{{e.content.nickname}}   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</text>
								<text >{{e.content.tt}}{{e.content.pd}}</text>
								<view style="color: #007AFF;">{{e.content.title}}</view>
							</view>
							<view class="text-light-muted">{{e.createdTime}}</view>
						</view>
					</view>
					
				</block>
				
			</view>
			<view slot="1" class="p-2">
					<view class="border-bottom  p-1" v-for="(e,i) in systemNotificationList">
						<view>
							<text style="color: red;margin-right: 10rpx;">*</text>{{e.content.title}}
						</view>
					</view>
			</view>
		
		</bk-tabs>
		
		
			
	</view>
</template>

<script>
	import BkTabs from "@/bkcomponents/bk-tabs.vue"
	export default {
		data() {
			return {
				loadMoreStatus: "more",
				tabList:[
					{id:"1",name:"用户消息",value:"USER"},
					{id:"2",name:"系统消息",value:"SYSTEM"}
				],
				condition:{
					type:"USER",
					page:1,
					size:40
				},
				userNotificationList:[],
				systemNotificationList:[]
			}
		},
		onShow() {
			this.search()	;
		},
		methods: {
			//
			changeTab(e){
				this.loadMoreStatus = "more";
				console.log("切换:"+JSON.stringify(e));
				this.condition.type = e.value;
				this.search();
			},
			loadMore(){
				this.loadMoreStatus = "loading";
				setTimeout(()=>{
					console.log("加载数据完成");
					this.loadMoreStatus = "noMore";
				},3000);
			},
			search(){
				this.$http.notification.getPageByType(this.condition).then(res => {
					if(this.condition.type === "USER")
						this.userNotificationList = res.data.records;
					else 
						this.systemNotificationList = res.data.records;
				}).catch(err => console.log(err));
			}
		},
		components:{
			BkTabs
		}
	}
</script>

<style>

</style>
