import createWebSocket from "../plugins/socket";
import { createStore } from 'vuex'

const store = createStore({
    state: {
        ws: null,
        start: 0,
        data: [],
        newData: null,
        showGraph: false,
        showTable: false,
    },
    actions: {
        addData({ commit }, message) {
            commit("addData", message)
        },
        disconnect({ commit }){
            commit("disconnect")
        },
        connect({ commit }){
            commit("connect")
        }
    },
    mutations: {
        addData(state, newData) {
            state.data.push(newData)
            state.newData = newData
            state.start = newData['x'] + 1
        },
        disconnect(state) {
            state.ws.close()
        },
        connect(state){
            state.ws = createWebSocket(this, state.start);
        },
        toggleGraph(state){
            state.showGraph = !state.showGraph;
        },
        toggleTable(state){
            state.showTable = !state.showTable;
        }
    },
});
export default store