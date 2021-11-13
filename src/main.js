// 引入的不再是vue构造函数，引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 创建应用实例对象-app（类似于之前vue2中的vm）
const app = createApp(App)
app.use(router)
// 挂载
app.mount('#app')

// vue2写法
/*
import Vue from 'vue'
import App from './App.vue'
const vm = new Vue({
    render:(h) => h(App),
})
vm.$mount('#app')
*/