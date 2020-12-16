<template>
	<view class="">
		<!-- 搜索框区域 -->
		<view class="head">
			<image src="../../static/index/logo.jpg" mode="widthFix"></image>
			<view class="searchview">
				<input type="text" value="" placeholder="寻找商品" @focus="getsearch" />
			</view>
		</view>
		<!-- 快速分类导航 滚动视图 -->
		<scroll-view scroll-x class="quicknav">
			<view v-for="(item,index) in quicknav" @click="gogoodslist(item.id)" :key="index">
				<text :class="index == topindex ? 'navactive' : '' ">{{item.catename}}</text>
			</view>
		</scroll-view>
		<!-- 轮播图 -->
		<swiper indicator-dots circular autoplay :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in swipers" :key="index">
				<image :src="item.img" mode=widthFix></image>
			</swiper-item>
		</swiper>
		<!-- 功能导航 -->
		<view class="funnav">
			<view class="funnavrow" v-for="(item,index) in funNavList" @click="gosecondcate(index,item.id)" :key="index">
				<image :src="item.icon" mode="widthFix"></image>
				<text>{{item.name}}</text>
			</view>
		</view>
		<!-- 秒杀商品推荐区域 -->
		<view class="seckill">
			<!-- 秒杀左侧区域 -->
			<view class="leftseckill">
				<view class="title">
					<image src="../../static/index/xianshi.jpg" mode="widthFix"></image>
					<text>限时秒杀</text>
				</view>
				<view class="info">
					<text>{{this.activetip}}</text>
				</view>
				<view class="time">
					<view>{{parseInt(resttime / 3600) > 9 ? parseInt(resttime / 3600) : '0' + parseInt(resttime / 3600) }}</view>:
					<view>{{ parseInt(resttime % 3600 / 60) > 9 ? parseInt(resttime % 3600 / 60) : '0' + parseInt(resttime % 3600 / 60)}}</view>:
					<view>{{ parseInt(resttime % 60) > 9 ? parseInt(resttime % 60) : '0' + parseInt(resttime % 60)}}</view>
					<view>{{seckill.title}}</view>
				</view>
				<image :src="seckill.img" mode="widthFix" class="goodimg" @click="godetail(seckill.goodsid)"></image>
			</view>
			<!-- 秒杀右侧区域 -->
			<view class="rightseckill">
				<view class="top">
					<view class="topinfo">
						<text>品牌上新 <text style="background: #f33182;font-size: 28rpx;color: white;">折</text></text>
						<text>每天九点，抢大牌</text>
					</view>
					<image src="../../static/index/goods1.jpg" mode="widthFix"></image>
				</view>
				<view class="bottom">
					<view class="bottomgood">
						<text>每日十件</text>
						<text>只为您好选</text>
						<image src="../../static/index/goods1.jpg" mode="widthFix"></image>
					</view>
					<view class="bottomgood">
						<text>每日十件</text>
						<text>只为您好选</text>
						<image src="../../static/index/goods1.jpg" mode="widthFix"></image>
					</view>
				</view>
			</view>
		</view>
		<!-- 广告图片推送区域 -->
		<view class="gg">
			<image src="../../static/index/swiper1.jpg" mode="widthFix"></image>
		</view>
		<!-- 推荐商品区域 -->
		<view class="recommendgood">
			<!-- 推荐导航 -->
			<view class="recommendnav">
				<!-- recommendactive -->
				<view v-for="(item,index) in recomandtit" :class="bottomtabindex == index ? 'recommendactive' :'' " :key="index"
				 @click="changetab(index)">
					<text>{{item}}</text>
				</view>
			</view>
			<view class="recommendlist">
				<view class="recommendrow" v-for="(item,index) in itemgoods" :key="index">
					<image :src="item.img" mode="widthFix"></image>
					<view class="recommendrowinfo">
						<text>{{item.goodsname}}</text>
						<text>现价格： ￥{{item.price}}</text>
						<text>原价格：￥{{item.market_price}}</text>
						<text @click="godetail(item.id)">
							立即抢购
						</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				recomandtit: ['热门推荐', '上新推荐', '所有商品'],
				quicknav: ['家电', '手机', '电脑', '衣服', '食品', '家装'], //快速分类导航,
				topindex: 0,
				swipers: ['../../static/index/swiper.jpg', '../../static/index/swiper1.jpg'],
				products: [], //热销、上新、所有商品数据
				funNavList: [{ //功能导航数据

						name: "限时抢购",
						icon: require("../../static/index/xiaohuoban.png")
					},
					{
						name: "积分商城",
						icon: require("../../static/index/jifentixicopy.png")
					},
					{
						name: "联系我们",
						icon: require("../../static/index/lianxiwomen.png")
					},
					{
						name: "商品分类",
						icon: require("../../static/index/-shangpinfenlei-gai.png")
					}
				],
				allgoods: [],
				itemgoods: [],
				bottomtabindex: 0,
				seckill: {},
				activetip: '',
				resttime: {},
			}

		},
		onLoad() {
			this.getcate();
			this.getbanner();
			this.getgoodslist();
			this.getseckill();
		},
		methods: {
			// 获取一级分类
			getcate() {
				this.http({
					url: '/api/getcate'
				}).then(res => {
					this.quicknav = res.data.list;
				})
			},
			// 获取轮播图
			getbanner() {
				this.http({
					url: '/api/getbanner'
				}).then(res => {
					// console.log(res);
					this.swipers = res.data.list;
					this.swipers.forEach(item => {
						item.img = this.baseUrl + item.img;
					})
				})
			},
			// 去往二级分类
			gosecondcate(index, id) {
				if (index != 3) {
					return
				}
				uni.navigateTo({
					url: `../classify/classify?id=${id}`,
				})
			},
			// 获取所有商品  选项卡
			getgoodslist() {
				this.http({
					url: '/api/getindexgoods'
				}).then(res => {
					// console.log(res);
					this.allgoods = res.data.list ? res.data.list : [];
					this.changetab(0)
				})
			},
			// 切换选项卡
			changetab(index) {
				this.bottomtabindex = index;
				this.itemgoods = this.allgoods[index].content;
				this.itemgoods.forEach(item => {
					item.img = this.baseUrl + item.img;
				})
			},
			// 获取限时秒杀
			getseckill() {
				this.http({
					url: '/api/getseckill'
				}).then(res => {
					this.seckill = res.data.list[0];
					this.seckill.img = this.baseUrl + this.seckill.img;
					let bt = parseInt(this.seckill.begintime);
					let et = parseInt(this.seckill.endtime);
					this.timer = setInterval(() => {
						let nt = parseInt((new Date).getTime());
						if (bt <= nt && et >= nt) {
							this.activetip = '距离活动结束剩余'
							this.resttime = (et - new Date().getTime()) / 1000;
						} else if (this.seckill.begintime > (new Date).getTime()) {
							this.activetip = ' 距离活动开始剩余 ';
							this.resttime = (bt - new Date().getTime()) / 1000;
						} else {
							this.activetip = '暂无活动';
							clearInterval(this.timer);
						}
					})
				})
			},
			godetail(id) {
				uni.navigateTo({
					url: '../details/details?id=' + id,
				})
			},
			gogoodslist(id) {
				console.log(111);
				uni.navigateTo({
					url: '../product/product?id=' + id,
				})
			}
		},
	}
</script>

<style>
	@import url("../../common/css/index.css");
</style>
