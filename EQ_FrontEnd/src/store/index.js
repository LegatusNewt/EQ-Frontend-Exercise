import createWebSocket from "../plugins/socket";
import { createStore } from "vuex";

const store = createStore({
  state: {
    ws: null,
    start: 0,
    data: [],
    newData: null,
    showGraph: true,
    showTable: false,
    connected: false,
  },
  actions: {
    addData({ commit }, message) {
      commit("addData", message);
    },
    disconnect({ commit }) {
      commit("disconnect");
    },
    connect({ commit }) {
      commit("connect");
    },
  },
  mutations: {
    addData(state, newData) {
      state.data.push(newData);
      state.newData = newData;
      state.start = newData["x"] + 1; //for keeping track of what X value you left off on
    },
    disconnect(state) {
      // In case you want to pause / stop the data stream
      state.ws.close();
      state.connected = false;
    },
    connect(state) {
      // The ws connection is attached to state rather than being used as a plugin
      // As a plugin it would be difficult to create a new ws instance in case of disconnect
      state.ws = createWebSocket(this, state.start);
      state.connected = true;
    },
    toggleGraph(state) {
      state.showGraph = !state.showGraph;
    },
    toggleTable(state) {
      state.showTable = !state.showTable;
    },
  },
});
export default store;
