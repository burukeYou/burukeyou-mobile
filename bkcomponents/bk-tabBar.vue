<template>
	<view>
		<view style="height: 64rpx;" class="flex-all-center">
			<view :class="i === tabIndex ? 'selectStyle':''" v-for="(e,i) in tabBar" :key="i" 
									style="flex: 1;text-align: center;" @click="changeTab(i)">
					{{e.name}}
			</view>
		</view>
		
	</view>

</template>

<script>
	export default {
		data() {
			return {
				tabIndex: 0, //当前选中的tab
				tabBar:[
					{id:"1",name:"专栏",isshow:true},
					{id:"2",name:"沸点",isshow:true},
					{id:"3",name:"收藏",isshow:true},
					{id:"4",name:"其他",isshow:true},
				],
			}
		},
		methods: {
			// 切换tab标签栏时
			changeTab(index){
				this.tabIndex = index;
			}
		}
	}
	
	
</script>
	
<style>
</style>
