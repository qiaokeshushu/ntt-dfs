import { createStore } from 'vuex';

export default createStore({
	state: {
    bgc: '',
    isNavTransparent: true, // 顶部导航是否透明
	},
	mutations: {
		changeBgc(state, value) {
			state.bgc = value;
		},
		isNavTransparent(state, value) {
			state.isNavTransparent = value;
		},
	},
});
