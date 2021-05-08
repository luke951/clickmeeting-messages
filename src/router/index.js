import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage/HomePage.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'HomePage',
		component: HomePage
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	},
	routes
})

export default router
