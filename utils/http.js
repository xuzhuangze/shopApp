let baseUrl = null
if (process.env.NODE_ENV === 'development') {
	baseUrl = "http://localhost:3000"
} else {
	baseUrl = "https://api.zhaowei.shop"
}
const http = (option) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + option.url,
			method: option.method || "GET",
			data: option.data || {},
			header: option.header || {
				'content-type': 'application/x-www-form-urlencoded'
			},
			success: resolve,
			fail: reject
		})
	})
}
export default{
	http,
	baseUrl
}
