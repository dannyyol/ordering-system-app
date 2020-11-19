require('./bootstrap');
window.Vue = require('vue');
import Vue from 'vue';
import VueRouter from 'vue-router';
import 'animate.css';
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import VuePageTransition from 'vue-page-transition'
import VueScrollReveal from 'vue-scroll-reveal';

import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import vuescroll from 'vuescroll';
// import $ from 'jquery'


// import vuescroll from "vuescroll/dist/vuescroll-native";
// import the css file 
import "vuescroll/dist/vuescroll.css";

Vue.use(SequentialEntrance);
 
// Using ScrollReveal's default configuration
Vue.use(VueScrollReveal);
Vue.use(VuePageTransition)



Vue.use(BootstrapVue)
Vue.use(VueRouter);

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 800,
  scale: 1,
  distance: '10px',
  mobile: false
});

// You can set global config here.
 Vue.use(vuescroll);



const routes = [
    //Admin Url
    { path: '', component: require('./components/frontend/Home.vue').default },
    { path: '/products', component: require('./components/frontend/Products.vue',).default },
    { path: '/cart', component: require('./components/frontend/Cart.vue').default },
    { path: '/order', component: require('./components/frontend/Order.vue').default },
    { path: '/order-list', component: require('./components/frontend/OrderList.vue').default },
    { path: '/customize', component: require('./components/frontend/Customize.vue').default },
    { path: '/checkout', component: require('./components/frontend/checkout.vue').default },
    { path: '/qr-code', component: require('./components/frontend/QrCode.vue').default },
    { path: '/credit-card-payment', component: require('./components/frontend/CreditCardPayment.vue').default },
    { path: '/cash-payment', component: require('./components/frontend/CashPayment.vue').default },
    { path: '/success', component: require('./components/frontend/DineSuccessMessage.vue').default },
    { path: '/add-to-order', component: require('./components/frontend/AddToOrder.vue').default },
    { path: '/customize-food', component: require('./components/frontend/CustomizeFood.vue').default },
    { path: '/menu', component: require('./components/frontend/Menu.vue').default },

]
const router = new VueRouter({
    routes,
	mode: 'history',
});

const app = new Vue({
    el: '#app',
    router,
    created () {
    AOS.init()
  },
});
