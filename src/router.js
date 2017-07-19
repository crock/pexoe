import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from './containers/Home'
import profile from './containers/Profile'
import generator from './containers/Generator'
import login from './containers/Login'

// application routes
const routes = [{
		path: '/',
		component: home
	},
	{
		path: '/profile',
		component: profile
	},
	{
		path: '/generator',
		component: generator
	},
	{
		path: '/login',
		component: login
	}
]
// export router instance
export default new Router({
	mode: 'history',
	routes,
	linkActiveClass: 'is-active'
})
