<template>
	<view>
		<!-- 一般需要设置高度 -->
		<scroll-view  @scrolltolower="loadMore" scroll-y="true" :style="{'height':listHeight}" >
			<slot></slot>
								
			<!--  上拉加载 -->
			<uni-load-more :status="loadMoreStatus"></uni-load-more>
		
		</scroll-view>
	</view>
</template>

<script>
	/**
	 * 		loadMoreStatus:  more（loading前）,loading（loading中）,noMore（没有更多了）
	 */
	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"
	export default {
		props:{
			listHeight:{
				type:String,
				default:"1022rpx"
			},
	
			loadMoreStatus:{
				type:String,
				default:"more"   // more（loading前）,loading（loading中）,noMore（没有更多了）
			}
		},
		data(){
			return{
				
			}
		},
		components:{
			uniLoadMore
		},
		methods:{
			// 4 - 加载更多
			loadMore(){
				this.$emit('loadMore');
			},
		}
	}
</script>

<style>
</style>
