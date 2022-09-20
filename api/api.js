import api from '../common/common/js/request.js'

const swiper = async () => { //轮播图
	let data = await api({
		url: 'article/api/category/label/list',
		method: 'get',
	})
	return data
}
const list = async (item) => {
	let data = await api({
		url: "course/api/course/search",
		method: 'POST',
		data: item
	})
	return data
}
const floor = async () => { //楼层
	let data = await api({
		url: 'home/floordata'
	})
	return data
}
// export const floor = async () => { //楼层   这是一种导出方式
// 	let data = await api({
// 		url: 'home/floordata'
// 	})
// 	return data
// }
export { //这是另一种导出方式
	swiper,
	list,
	floor
}
