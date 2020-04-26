<template>
	<view>
		<bk-tabs :borderBottom="true" :loadMoreStatus="loadMoreStatus" :tabList="tabList"  @changeTab="changeTab">
			
			<view  slot="0">
				<block v-for="(e,i) in dataList">
					<view :key="i" @click="open('my/user-home/favorites-detail?id='+e.id+'&type='+e.type)" class="flex justify-between align-center border-bottom" style="padding: 20rpx;">
						<view class="flex">
							<view>
								<image :src="e.background" style="height: 80rpx;width: 80rpx;"></image>
							</view>
							<view style="margin-left: 20rpx;">
								 <view>{{e.name}}</view>
								 <view class="text-light-muted">{{e.count}}篇 {{e.userNickname}}</view>
							</view>
						</view>
						<view>
							<text class="iconfont iconarrow-right"></text>
						</view>
					</view>
					
				</block>
			</view>
			<view  slot="1">
					4
			</view>
		
			<view @click="open('my/user-home/favorites-add')" slot="right" style="font-size: 40rpx;color: #2376E5;"
					class="iconfont icontianjiajiahaowubiankuang">
			</view>
			
		</bk-tabs>
		
		
		
	</view>
</template>

<script>
	import BkTabs from "@/bkcomponents/bk-tabs.vue"
	export default {
		data(){
			return{
				loadMoreStatus: "more",
				tabList:[
					{id:"1",name:"文章",value:'Article'},
					{id:"2",name:"视频",value:'Video'}
				],
				condition:{
					type: 'Article',
					userId:''
				},
				
				dataList:[]
			}
		},
		methods:{
			// 打开path页面
			open(path){
				let p = `/pages/${path}`;
				console.log(p)
				uni.navigateTo({
					url: p
				})
			},
			// 
			changeTab(e){
				this.loadMoreStatus = "more";
				console.log("切换:"+JSON.stringify(e));
				this.condition.type = e.value
			}
		},
		components:{
			BkTabs
		},
		onLoad(options) {
			console.log("当前收藏夹用户id:"+options.userId);
			this.condition.userId = options.userId;
		},
		onShow() {
			if(this.condition.userId === '')
				return;
			this.$http.favorities.getAll(this.condition).then(res => {
				this.dataList  =res.data;
			}).catch(err => console.log(err));
		}
	}
	
</script>

<style>
</style>
