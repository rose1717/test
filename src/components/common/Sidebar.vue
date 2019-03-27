<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                            {{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
                collapse: false,
                items: [
                    {
                        icon: 'el-icon-setting',
                        index: 'dashboard',
                        title: '公告中心'
                    },
                    {
                        icon: 'el-icon-tickets',
                        index: 'table',
                        title: '渠道管理'
                    },
                    {
                        icon: 'el-icon-message',
                        index: 'tabs',
                        title: '游戏管理'
                    },
                    {
                        icon: 'el-icon-date',
                        index: '3',
                        title: 'APP管理',
                        subs: [
                            {
                                index: 'permission',
                                title: 'APP管理'
                            },
                            {
                                index: 'editor',
                                title: 'APP管理用户管理'
                            },
                            {
                                index: 'markdown',
                                title: 'APP管理用户充值管理'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-star-on',
                        index: 'charts',
                        title: '个人中心',
                        subs: [
                            {
                                index: 'form',
                                title: '个人设置'
                            },
                            {
                                index: 'drag',
                                title: '我的钱包'
                            }
                        ]
                    }
                    
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 210px;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
