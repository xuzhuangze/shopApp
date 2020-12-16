<template>
	<view class="container">
		<!-- left左侧一级分类列表 -->
		<scroll-view scroll-y class="left">
			<!-- 循环遍历的 -->
			<view class="left_list" @click="getsecondcate(ind,item.id)" :class="activeIndex == ind ? 'activeList' : ''" v-for="(item,ind) in cateData"
			 :key="ind">
				<label for="">{{ item.catename }}</label>
			</view>
		</scroll-view>
		<!-- right右侧二级分类详情 -->
		<scroll-view scroll-y class="right">
			<view class="row">
				<view class="row_list" v-for="(item,index) in classify" :key="index">
					<image :src="item.img" mode="widthFix"></image>
					<text>{{item.catename}}</text>
				</view>
				<view class="" style="text-align: center;" v-if="classify.length == 0">
					该分类下没有分类
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: 0,
				cateData: [], //左侧一级分类数据
				classify: [{
						catename: "华为电脑",
						img: "../../static/classify/1.jpg"
					},
					{
						catename: "华为电脑",
						img: "../../static/classify/2.jpg"
					},
					{
						catename: "华为电脑",
						img: "../../static/classify/3.jpg"
					},
					{
						catename: "华为电脑",
						img: "../../static/classify/4.jpg"
					},
				] //右侧二级分类详情	
			}
		},
		onLoad(options) {
			console.log(options);
			this.getfistcate();
		},
		methods: {
			getfistcate() {
				this.http({
					url: '/api/getcates'
				}).then(res => {
					this.cateData = res.data.list ? res.data.list : [];
					this.getsecondcate(0, res.data.list[0].id)
				})

			},
			getsecondcate(index, id) {
				this.activeIndex = index;
				this.cateData.map(item => {
					if (id == item.id) {
						this.classify = item.children ? item.children : [];
						this.classify.forEach(item => {
							item.img = this.baseUrl + item.img;
						})
					}
				})
			}
		}
	}
</script>

<style>
	/* 导入外部的样式文件 */
	@import url("../../common/css/classify.css");

	/* 点击左侧导航，显示动态样式 */
	.activeList {
		border-left: 6rpx solid #f26b11;
		color: #f26b11;
	}
</style>
