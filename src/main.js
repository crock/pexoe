// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';
import axios from 'axios';

Raven
    .config('https://fc465557c19a42bfbf558804bd8944cd@sentry.io/193994')
    .addPlugin(RavenVue, Vue)
    .install();

var VueFire = require('vuefire')
var Firebase = require('firebase')

Vue.use(VueFire)

axios.defaults.baseURL = 'https://pexoe.net'
Vue.config.productionTip = true
Vue.config.errorHandler = true

// Initialize Firebase
var config = {
	apiKey: "AIzaSyATyBXFAAaVbbIDhQjkZ6O1ApQ9nGWAJ8M",
	authDomain: "pexoe-668d2.firebaseapp.com",
	databaseURL: "https://pexoe-668d2.firebaseio.com",
	projectId: "pexoe-668d2",
	storageBucket: "pexoe-668d2.appspot.com",
	messagingSenderId: "339921013869"
};
var firebaseApp = Firebase.initializeApp(config)
var db = firebaseApp.database()

/* eslint-disable no-new */
var app = new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	},
	data: {
		site: 'pexoe'
	},
	firebase: function () {
		return {
			anObject: {
				source: db.ref(),
				asObject: true
			},
			anArray: db.ref()
		}
	}
})
