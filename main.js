import Vue from "./js/vue.js";
import store from "./store/store.js";
import index from "./components/index.vue";
import router from "./routes/routes";
import axios from "./axios/axios.js";
Vue.use(axios);
new Vue({
    store,
    router:router,
    render:function(createElement){
        return createElement(index);
    },
    mounted:function(){
        
    }
}).$mount(".container")
if(module.hot){
    module.hot.accept()
}