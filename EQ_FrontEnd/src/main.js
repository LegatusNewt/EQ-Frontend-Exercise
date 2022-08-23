import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/main.css";
import PrimeVue from "primevue/config";
import StyleClass from "primevue/styleclass";

import pvDataTable from "primevue/datatable";
import pvColumn from "primevue/column";
import pvButton from "primevue/button";
import pvToolBar from "primevue/toolbar";
import pvDivider from "primevue/divider";

import SinGraph from "/src/components/Graph.vue";
import SinTable from "/src/components/Table.vue";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(PrimeVue);

app.component("SinGraph", SinGraph);
app.component("SinTable", SinTable);
app.component("pvDataTable", pvDataTable);
app.component("pvColumn", pvColumn);
app.component("Button", pvButton);
app.component("pvToolBar", pvToolBar);
app.component("pvDivider", pvDivider);

app.directive("styleclass", StyleClass);

app.mount("#app");
