<template>
	<view>
		<view class="search">
			<icon type="search" color="white" size="10"></icon>
			<input type="text" value="" placeholder="搜索商品" placeholder-class="placeholder" />
		</view>
		<view class="list">
			<view class="row" v-for="(item,index) in goodslist" @click="godetail(item.id)" :key="index">
				<!-- <view class="row"> -->
				<image :src="baseUrl +  item.img" mode="widthFix"></image>
				<view class="info">
					<text>{{item.goodsname}}</text>
					<text>￥{{item.price}}</text>
					<text>3565评论</text>
				</view>
			</view>
		</view>
		<!-- <view class="api">
			暂无商品数据！
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodslist: [],
			}
		},
		onLoad(options) {
			console.log(options.id);
			this.getgoodslist(options.id)
		},
		methods: {
			getgoodslist(fid, page = 1, size = 10) {
				this.http({
					url: '/api/getcategoodPage',
					data: {
						fid,
						page,
						size
					}
				}).then(res => {
					this.goodslist = res.data.list ? res.data.list[1] || [] : [];
					console.log(this.goodslist);
				})
			},
			godetail(id) {
				uni.navigateTo({
					url: '../details/details?id=' + id,
				})
			},
		}

	}
</script>

<style>
	.search {
		margin: 65rpx;
		height: 75rpx;
		background-color: #f26b11;
		border-radius: 80rpx;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	icon {
		margin: 0 10rpx 0 250rpx;
	}

	.placeholder {
		color: white;
		font-size: 25rpx;
	}

	.row {
		position: relative;
		margin: 10rpx 20rpx;
		height: 190rpx;
		border-bottom: 1rpx solid #AAAAAA;
	}

	image {
		position: absolute;
		top: 0;
		left: 10rpx;
		width: 160rpx;
	}

	.info {
		height: 85%;
		width: 100%;
		position: absolute;
		top: 0;
		left: 200rpx;
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		font-size: 25rpx;
	}

	.info text:nth-of-type(2) {
		color: red;
	}

	.info text:nth-of-type(3) {
		font-size: 20rpx;
		color: #AAAAAA;
	}

	.api {
		line-height: 200rpx;
		text-align: center;
		font-size: 40rpx;
		color: #006699;
	}
</style>
