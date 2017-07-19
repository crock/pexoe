// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

var VueFire = require('vuefire')
var Firebase = require('firebase')

Vue.use(VueFire)

Vue.config.productionTip = false

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
	// firebase: {
	// 	anObject: {
	// 		source: db.ref("pexoe-668d2"),
	// 		asObject: true
	// 	}
	// }
})
