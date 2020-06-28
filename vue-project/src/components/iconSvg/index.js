// 存放一些全局的组件
import Vue from 'vue'
import IconSvg from './IconSvg'
//全局注册icon-svg
Vue.component('icon-svg', IconSvg)

// const requireAll = requireContext => requireContext.keys().map(requireContext)
// const req = require.context('./svg', false, /\.svg$/)
// requireAll(req)