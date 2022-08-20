import { createStore } from 'vuex'
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
import './assets/main.css'

const store = createStore({
    state: {
        data: []
    },
    mutations: {
        updateData(state, newData) {

        }
    },
    actions: {
        getData({ commit }, x) {
            
        }
    }
});

const app = createApp(App)

app.use(store)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
