import Vue from "vue";
import Router from "vue-router";
import Home from "@/page/Home.vue";

// Vue.use(Router);
process.env.NODE_ENV === "development" ? Vue.use(Router) : null;


//默认不需要权限的页面

export const constantRouterMap = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  { path: '/login',name: 'login',component:() => import('@/page/login'),hidden: true},
]

// const routes = [
//   {
//     path: "/",
//     name: "Home",
//     component: Home
//   },
//   {
//     path: "/about",
//     name: "About",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/About.vue")
//   }
// ];

export default new Router({
  mode: "history",
  base: '/permission/', // 添加跟目录,对应服务器部署子目录
  routes:constantRouterMap
});

// export default router;
