import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
	{
		path: '/',
		name: 'Home',
	},
	// 導流率
	{
		path: '/FirstLogin',
		name: 'FirstLogin',
		component: () => import('@/views/FirstLogin.vue'),
	},
	// 個人紀錄
	{
		path: '/PersonalRecord',
		name: 'PersonalRecord',
		component: () => import('@/views/PersonalRecord.vue'),
	},
	// 遊戲設定
	{
		path: '/GameSetting',
		name: 'GameSetting',
		component: () => import('@/views/GameSetting.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
