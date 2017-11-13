import Vue from "../js/vue.js";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import routes from "./router.config";
//import "./js/general";
var router=new VueRouter({
    routes:routes
})
export default router;
