import { createApp } from 'vue'
import router from "./router/index"
import App from './App.vue'
import Antd from 'ant-design-vue';
import './assets/style/global.scss';
createApp(App)
.use(router)
.use(Antd)
.mount('#app')

