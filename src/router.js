import Vue from "vue";
import VueRouter from "vue-router";
import Top from "./views/Top";
import Vote from "./views/Vote";
import Ranking from "./views/Ranking"
import Result from "./views/Result"
import Test from "./views/Test"
import Rule from "./views/Rule"


Vue.use(VueRouter);
const routes = [
    {
        path: "/",
        name: "top",
        component: Top
    },
    {
        path: "/vote",
        name: "vote",
        component: Vote
    },
    {
        path: "/ranking",
        name: "ranking",
        component: Ranking
    },
    {
        path: "/result",
        name: "result",
        component: Result
    },
    {
        path: "/rule",
        name: "rule",
        component: Rule
    },
    {
        path: "/test",
        name: "test",
        component: Test
    },
];

export default new VueRouter({
    routes: routes
})