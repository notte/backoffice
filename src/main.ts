import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueRouter from 'vue-router';
import VCharts from 'v-charts';
import store from './store';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import '@/assets/style.scss';

Vue.use(VueRouter);
Vue.use(ViewUI);
Vue.use(VCharts);
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
