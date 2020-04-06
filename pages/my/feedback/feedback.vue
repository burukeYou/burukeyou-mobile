<template>
	<view>
			<uni-collapse  >
			    <uni-collapse-item title="标题文字" showAnimation>
						付款了;阿设计的疯狂了;阿设计费了;ask
			    </uni-collapse-item>
			</uni-collapse>
			
			<uni-collapse>
			    <uni-collapse-item title="标题文字"  showAnimation>
				付款了;阿设计的疯狂了;阿设计费了;ask
			    </uni-collapse-item>
			</uni-collapse>

	</view>
</template>

<script>
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	
	export default {
		data() {
			return {
				
			}
		},
		components:{
			uniCollapse,uniCollapseItem
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
