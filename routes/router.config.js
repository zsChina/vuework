import general from "../components/general.vue";
import college from "../components/college.vue";
import major from "../components/major.vue";
const routes=[
    {
        name:"general",
        path:"/general",
        component:general
    },
    {
        name:"college",
        path:"/college",
        component:college
    },
    {
        name:"major",
        path:"/major",
        component:major
    },
    {
        path:"/",
        redirect:{
            name:"general"
        }
    }
];

export default routes;
