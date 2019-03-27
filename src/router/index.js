import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
            {
                path: '/',
            redirect: '/dashboard'
            }, 
            {
            path: '/',
            component: function(resolve) {
                return require(['../components/common/Home.vue'], resolve);
            },
            meta: {title: '自述文件'},
                    children: [{
                        path: '/dashboard',
                        component: function(resolve) {
                        return require(['../components/page/Dashboard.vue'], resolve);
                        },
                        meta: {title: '公告中心'}
                    }, {
                        path: '/table',
                        component: function(resolve) {
                        return require(['../components/page/BaseTable.vue'], resolve);
                        },
                        meta: {title: '渠道管理'}
                    }, {
                        path: '/tabs',
                        component: function(resolve) {
                        return require(['../components/page/Tabs.vue'], resolve);
                        },
                        meta: {title: '游戏管理'}
                    }, {
                        path: '/form',
                        component: function(resolve) {
                        return require(['../components/page/BaseForm.vue'], resolve);
                        },
                        meta: {title: '个人设置'}
                    }, {
                        path: '/editor',
                        component: function(resolve) {
                        return require(['../components/page/VueEditor.vue'], resolve);
                        },
                        meta: {title: 'APP管理用户管理'}
                    }, {
                        path: '/markdown',
                        component: function(resolve) {
                        return require(['../components/page/Markdown.vue'], resolve);
                        },
                        meta: {title: 'APP管理用户充值管理'}
                    }, {
                        path: '/upload',
                        component: function(resolve) {
                        return require(['../components/page/Upload.vue'], resolve);
                        },
                        meta: {title: '文件上传'}
                    }, {
                        path: '/charts',
                        component: function(resolve) {
                        return require(['../components/page/BaseCharts.vue'], resolve);
                        },
                        meta: {title: 'schart图表'}
                    }, {
                        path: '/drag',
                        component: function(resolve) {
                        return require(['../components/page/DragList.vue'], resolve);
                        },
                        meta: {title: '我的钱包'}
                    }, {
                        path: '/permission',
                        component: function(resolve) {
                        return require(['../components/page/Permission.vue'], resolve);
                        },
                        meta: {
                        title: 'APP管理',
                        permission: true
                        }
                    }]
                }, {
                path: '/login',
                component: function(resolve) {
                    return require(['../components/page/Login.vue'], resolve);
                }
                }, {
                path: '/404',
                component: function(resolve) {
                    return require(['../components/page/404.vue'], resolve);
                }
                }, {
                path: '/403',
                component: function(resolve) {
                    return require(['../components/page/403.vue'], resolve);
                }
                } ,{
                path: '*',
                redirect: '/404'
                }]
});
