import { createStore } from 'vuex'
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './assets/main.css'
import PrimeVue from 'primevue/config';
import StyleClass from 'primevue/styleclass';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column'
import Button from 'primevue/button'
import ToolBar from 'primevue/toolbar'
import Divider from 'primevue/divider';

import Graph from '/src/components/Graph.vue'
import Table from '/src/components/Table.vue'

const app = createApp(App);


app.use(store);
app.use(router);
app.use(PrimeVue);

app.component('Graph', Graph);
app.component('Table', Table)
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('Button', Button);
app.component('ToolBar', ToolBar);
app.component('Divider', Divider);

app.directive('styleclass', StyleClass);

app.mount('#app');
