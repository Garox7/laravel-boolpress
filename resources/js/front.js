require('./bootstrap');

import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import PageHome from './pages/PageHome';
import PageAbout from './pages/PageAbout';
import PagePosts from './pages/PagePosts';
import PageSinglePost from './pages/PageSinglePost';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'pageHome',
        component: PageHome,
    },
    {
        path: '/about',
        name: 'pageAbout',
        component: PageAbout,
    },
    {
        path: '/posts',
        name: 'pagePosts',
        component: PagePosts,
    },
    {
        path: '/posts/params',
        name: 'PageSinglePost',
        component: PageSinglePost,
    },
];

const router = new VueRouter({
    routes
});

new Vue({
    el: '#root',
    render: h => h(App),
    router
});
