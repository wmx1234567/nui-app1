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
const list1 = async (item) => {
	let data = await api({
		url: "article/api/article/search",
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
//热门回答
const hot = async (item) => {
	let data = await api({
		url:'question/api/question/hot',
		method: 'POST',
		data: item
	})
	return data
}
//最新问题
const new1 = async (item) => {
	let data = await api({
		url:'question/api/question/new',
		method: 'POST',
		data: item
	})
	return data
}
//等待回答
const wait = async (item) => {
	let data = await api({
		url:'question/api/question/wait',
		method: 'POST',
		data: item
	})
	return data
}
//验证码
const Code = async (item) => {
	let data = await api({
		url:'system/sms/code',
		method: 'POST',
		data: item
	})
	return data
}
//登录成功
const succeeded = async (item) => {
	let data = await api({
		url:'auth/login',
		method: 'POST',
		data: item
	})
	return data
}
//修改手机号
const modifyTel = async (item) => {
	let data = await api({
		url:'auth/user/mobile',
		method: 'PUT',
		data: item
	})
	return data
}
//修改昵称
const modifyName = async (item) => {
	let data = await api({
		url:'system/user',
		method: 'PUT',
		data: item
	})
	return data
}
export { //这是另一种导出方式
	swiper,
	list,
	floor,
	list1,
	hot,
	new1,
	wait,
	Code,
	succeeded,
	modifyTel,
	modifyName
}
