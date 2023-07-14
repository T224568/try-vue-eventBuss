
import { createApp } from 'vue';
import App from './App.vue';
import mitt from 'mitt'
const emitter = mitt()
import AddNumbers from './components/AddNumbers.vue'
import DisplayNumbers from './components/DisplayNumbers.vue'
// import store from './store'
import index from './store/index'
// import './index.css'
import router from './router'
const app = createApp(App)
// .use(store)
                .use(index)
                .use(router)
// app.config.globalProperties.$mybus = mitt()
app.config.globalProperties.$emitter = emitter


app
.component('AddNumbers',AddNumbers)
.component('DisplayNumbers',DisplayNumbers)
.mount("#app");
