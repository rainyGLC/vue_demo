import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";



// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

import ElementUI from 'element-ui'

// import('element-ui/lib/theme-chalk/index.css')
import 'element-ui/lib/theme-chalk/index.css';

import './components/iconSvg' // iconSvg

import '@/mockjs';  //mock数据 

//i18N国际化
import i18n from "@/lang";


Vue.config.productionTip = false;
Vue.use(ElementUI, { size: 'mini'});


new Vue({
  router,
  store,
  i18n, //便于可以直接在组件中通过this.$i18n使用，也可以按需引用
  render: h => h(App)
}).$mount("#app");
