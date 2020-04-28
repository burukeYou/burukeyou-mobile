<template>
<view class="container">
		
		<view class="flex justify-between">
			<view>标题</view>
			<view><input v-model="article.title" class="uni-input" name="input" placeholder="请输入标题" /></view>
		</view>
		<view class="flex justify-between">
			<view>简介</view>
			<view>
				<textarea v-model="article.description" auto-height style="padding: 20rpx;"/>
			</view>
		</view>
		<view class="flex justify-between">
			<view>专栏</view>
			<view class="text-muted">
				<picker @change="colunmuChange" :value="currentColumnIndex" :range="columnList">
				      <view class="uni-input">{{columnList[currentColumnIndex]}}</view>
				</picker>
			</view>
		</view>
		<view class="flex justify-between">
			<view>系统频道</view>
			<view class="text-muted">
				 <picker @change="bindPickerChange" :value="currentChannelIndex" :range="channelList">
				       <view class="uni-input">{{channelList[currentChannelIndex]}}</view>
				 </picker>
			</view>
		</view>
		<view class="">
			<view>标签</view>
			<view class="text-muted">
				<input type="text" placeholder="请输入标签" @input="searchlabel"/>
				<view class="flex align-center flex-wrap p-2">
					<block v-for="(e,i) in labelList">
						<view :key="i"   @click="selectLabel(e)" class="ml-2 rounded-16 mt-1" 
								:class="e.select ? 'select':'unselect'"
								style="padding: 5rpx 10rpx;">{{e.name}}</view>
					</block>
				</view>
			</view>
		</view>
		<view class="flex justify-between">
			<view class="title">是否公开</view>
			<view>
				<switch @change="switchChange" checked name="switch" />
			</view>
		</view>
			
		<!-- 2 - 内容编辑 -->
		<view>文章内容编辑<text class="text-light-muted">(建议PC端写好)</text></view>
		<editor id="editor" class="ql-container" :placeholder="placeholder" @ready="onEditorReady"></editor>
		
		<!-- 3-提交 -->
		<view class="flex-all-center">
			<view><button @click="publicArticle">发布</button></view>
			<view><button type="warn" @tap="undo">清空</button></view>
		</view>
	
		

		
</view>
</template>

<script>	

	export default {
		components:{
			
		},
		data(){
			return{
				//
				tempChannelData:[],
				channelList:[],	
				currentChannelIndex: 0,
				//
				tempColumnData:[],
				columnList:[],
				currentColumnIndex: 0,	
				//
				labelList:[{id:"",name:""}],
				//
				article:{
					title:"",
					description:"",
					columnId:"",
					columnName:"",	
					channelId:"",
					channelName:"",
					labels:[],
					htmlContent:"",
					ispublic:true
				}
				
			}
		},
		methods:{
			//
			initChannel(){
				this.channelList = []
				this.$http.channel.getAll().then(res => {
					 this.tempChannelData = res.data;
					 res.data.forEach(e =>  this.channelList.push(e.name)); 
					 this.channelList.unshift("---请选择--")
				}).catch(err => console.log(err));
			},
			initColumn(){
				this.columnList = [];
				this.$http.column.getAllByUserId(this.$store.state.loginUser.id).then(res => {
					this.tempColumnData = res.data;
					res.data.forEach(e =>  this.columnList.push(e.name)); 
				}).catch(err => console.log(err))
			},
			onEditorReady() {
                uni.createSelectorQuery().select('#editor').context((res) => {
                    this.editorCtx = res.context
                }).exec()
            },
            undo() {
                this.editorCtx.undo()
            },
			//
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.currentChannelIndex = e.target.value
				this.article.channelName = this.tempChannelData[e.target.value-1].name;
				this.article.channelId = this.tempChannelData[e.target.value-1].id;
			},
			colunmuChange(e){
				this.currentColumnIndex = e.target.value
				this.article.columnName = this.tempColumnData[e.target.value].name;
				this.article.columnId = this.tempColumnData[e.target.value].id;
				console.log(JSON.stringify(this.article));
			},
			searchlabel(e){
				console.log(e.detail)
				this.$http.label.getSelectLabel(e.detail.value).then(res => {
					  this.labelList = res.data.records;
				}).catch(err => console.log(err));
			},
			switchChange(e){
				this.article.ispublic =  e.target.value;
			},
			// 选择标签
			selectLabel(e){
				e.select = !e.select
				if(e.select){
					this.article.labels.push({id:e.id,name:e.name});
				}else{
					let arrs = this.article.labels;
					for(let i=0;i<arrs.length;i++){
						if(arrs[i].id === e.id){
							arrs.splice(i,1);
							break;
						}
					}
				}
				console.log(JSON.stringify(this.article.labels));
			},
			publicArticle(){
				this.editorCtx.getContents({
				    success: res => {
				       this.article.htmlContent =  res.html
				    }
				})
				
				if(this.isValiade){
					console.log(JSON.stringify(this.article));
					this.$http.article.publicArticle(this.article).then(res => {
						if(res.code === "200"){
							uni.showToast({
								title:"发布成功"
							})
						}else{
							uni.showToast({
								title:"发布失败",
								icon:"none"
							})
						}
					}).catch(err => console.log(err));
				}else{
					uni.showToast({
						title:"标题/内容不能为空",
						icon:"none"
					})
				}
			}
			
		},
		onLoad() {
			
		},
		
		onShow() {
			this.$global.restoreUserState();
			this.initChannel();
			this.initColumn();
		},
		computed:{
			isValiade(){
				return this.article.title !== "" &&   this.article.content !== "";
			}
		}
	}
	
</script>

<style>
	.container {
        padding: 10px;
    }

    #editor {
        width: 100%;
        height: 300px;
        background-color: #CCCCCC;
    }

    button {
        margin-top: 10px;
    }
	
	.select {
		background-color: #007BFF;
		color: #FFFFFF;
		font-weight: 400;
	}
	
	.unselect {
		background-color: #EEEEEE;
		font-weight: 400;
	}
	
	
</style>
