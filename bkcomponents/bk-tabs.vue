<template>
	<view >
		<!-- 1-  -->	
		<view :class="borderBottom ? 'border-bottom' : ''" style="display: flex;align-items: center;justify-content:center;background-color: #FFFFFF;">
			<view style="width: 90%;text-align: center;">
				<scroll-view :scroll-into-view="scrollIntoView"  scroll-x="true" scroll-with-animation
							 style="height: 80rpx;white-space: nowrap;">
					<view   class="ml-4 "  v-for="(e,i) in tabList" :key="i"  :id="'tab'+i"  style="display: inline-block;"
							:class="tabIndex === i ? 'selectStyle' : ''" @click="changeTab(i)">
							{{e.name }}
					</view>
				</scroll-view> 
			</view>
			<view>
				<slot name="right"></slot>
			</view>
		</view>
		
	
		<!-- 2 - -->	
		<view style="background-color: #FFFFFF;margin-top: 5rpx;">
			<swiper :style="{'height':listHeight}" :duration="150" 
					:current="tabIndex" 
					@change="onSwiperChange">
				<swiper-item   v-for="(e,i) in tabList" :key="i">	
					 <bk-list @loadMore="loadMore" :loadMoreStatus="loadMoreStatus"> 
						 <!-- 动态绑定name不可以用 :形式 -->
						 <slot name="{{i}}"></slot>	 			 
					 </bk-list>		 
				</swiper-item>
			</swiper>
		</view>
		
	</view>
</template>

<script>
	/**
	 *  Bk-Tabs 标签拦 + 滑屏 + 上拉加载 
	 * @description 用于列表中，做滚动加载使用，展示 loading 的各种状态
	 * @property {Array} tabList  标签拦
	 * @property {String} listHeight swiper的高度	
	 * @property {String} loadMoreStatus 上拉加载状态  
	  			- value:	more（loading前）,loading（loading中）,noMore（没有更多了）
	 * @event {Function} changeTab 切换标签栏触发,返回点击的标签对象
	 * @event {Function} loadMore 加载更多触发
	 */
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
	import BkList from "@/bkcomponents/bk-list.vue"

	export default {
		props:{
			'tabList':{
				type:Array
			},
			listHeight:{
				type:String,
				require:false,
				default:"1022rpx"
			},
			loadMoreStatus:{
				type:String,
				default:"more"  // more（loading前）,loading（loading中）,noMore（没有更多了）
			},
			borderBottom:{
				type: Boolean,
				require: false,
				default:false
			}
		},
		data() {
			return {
			  scrollIntoView:"",  // 配合swiper 时使用
			  tabIndex: 0 ,// 激活第几个tab  				
			};
		},
		onLoad() {
		},
		onShow() {
			console.log("tab show");
		},
		methods:{
			// 1- 初始化高度
			initListHeight(){
				console.log(" 初始化列表高度");
				uni.getSystemInfo({
					success:res => {
						this.listHeight =  res.windowHeight - uni.upx2px(100);
					}
				});
			},
			// 2 - 切换tab标签栏时
			changeTab(index){
				this.loadMoreStatus = "more";
				
				if(index === this.tabIndex)
					return;
				
				this.tabIndex = index;	
				this.scrollIntoView = 'tab'+index;
				
				console.log("当前tabIndex为:"+this.tabIndex);
				console.log("当前scroll id为:"+this.scrollIntoView);
				
				this.$emit('changeTab',this.tabList[index]);
			},
			// 3 -swiper切换时,联动切换tab
			onSwiperChange(e){
				this.changeTab(e.detail.current); 
			},
			// 4 - 加载更多
			loadMore(){
				this.$emit('loadMore')
			},
			// 5 -
			refresh(){
				
			}
			
		},
		components:{
			uniLoadMore,BkList
		}
	}
	
</script>

<style>
	.selectStyle {
		color: #1a73e8;
		font-size: 35rpx;
		font-weight: 500;
		
		border-bottom-width: 4rpx;
		border-bottom-style: solid;
		border-bottom-color: #007AFF;
	}
	
</style>
