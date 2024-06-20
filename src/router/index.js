import Vue from "vue";
import VueRouter from "vue-router";
// import NewsView from "./../view/NewsView.vue";
// import JobsView from "./../view/JobsView.vue";
// import AskView from "./../view/AskView.vue";
// import UserView from "./../view/UserView.vue";
import CreateListView from '../view/CreateListView.js'
import UserView from "@/view/UserView.vue";
import ItemView from "@/view/ItemView.vue";
import bus from '../utils/bus.js';
import { store } from '../store/index.js'

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            path: '/news',
            name: 'news',
            component: CreateListView("NewsView"),
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name);
                next();
            },
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: CreateListView("JobsView"),
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name);
                next();
            },
        },
        {
            path: '/ask',
            name: 'ask',
            component: CreateListView("AskView"),
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name);
                next();
            },
        },
        {
            path: '/user/:id',
            name: 'user',
            component: UserView,
        },
        {
            path: '/item/:id',
            name: 'item',
            component: ItemView,
        },
    ]
})