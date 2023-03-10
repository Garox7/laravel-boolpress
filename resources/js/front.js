require('./bootstrap');

import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import PageHome from './pages/PageHome';
import PageAbout from './pages/PageAbout';
import PagePosts from './pages/PagePosts';
import PageSinglePost from './pages/PageSinglePost';
import Page404 from './pages/Page404';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: PageHome,
    },
    {
        path: '/about',
        name: 'about',
        component: PageAbout,
    },
    {
        path: '/posts',
        name: 'postIndex',
        component: PagePosts,
    },
    {
        path: '/posts/:slug',
        name: 'postsShow',
        component: PageSinglePost,
        props: true,
    },
    {
        path: '*',
        name: 'page404',
        component: Page404,
    },
];

const router = new VueRouter({
    mode: 'history',
    routes
});

new Vue({
    el: '#root',
    render: h => h(App),
    router
});
