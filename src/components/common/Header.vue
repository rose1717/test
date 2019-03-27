<template>
    <div class="header">
        <!-- 折叠按钮 -->
        <div class="logo"><img src="/static/img/gh_logo_sprite.png"></div>
        <div class="collapse-btn" @click="collapseChage">
            <i class="el-icon-menu"></i>
        </div>
      
        <div class="header-right">
            <div class="header-user-con">
                <!-- <div class="btn-bell">
                    <el-tooltip effect="dark" :content="message?`有${message}条未读消息`:`消息中心`" placement="bottom">
                        <router-link to="/tabs">
                            <i class="el-icon-bell"></i>
                        </router-link>
                    </el-tooltip>
                    <span class="btn-bell-badge" v-if="message"></span>
                </div> -->
                <!-- 余额 -->
                <div class="balance" @click="ceshi">余额：10000元</div>
                <!-- 提现 -->
               <el-button type="primary" plain round  class="mar10">提现</el-button>
                <!-- 投诉与客服 -->
               <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">客服与投诉<i class="el-icon-caret-bottom"></i></span>
                    <el-dropdown-menu slot="dropdown">
                           <dl class="service_box">
                                <label>客服QQ：</label>
                                <dd>635747055<img src="static/img/10_online.gif"></dd>
                                <dd>635747055<img src="static/img/10_online.gif"></dd>
                                <label>投诉QQ：</label>
                                <dd>635747055<img src="static/img/10_online.gif"></dd>
                                <dd>635747055<img src="static/img/10_online.gif"></dd>
                           </dl>
                    </el-dropdown-menu>
                </el-dropdown>
                <!-- 用户头像 -->
                <div class="user-avator"><img src="static/img/img.jpg"></div>
                <!-- 用户名下拉菜单 -->
                <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{username}} <i class="el-icon-caret-bottom"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <a href="#" target="_blank">
                            <el-dropdown-item>个人设置</el-dropdown-item>
                        </a>
                        <a href="#" target="_blank">
                            <el-dropdown-item>我的钱包</el-dropdown-item>
                        </a> 
                        <el-dropdown-item   command="loginout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                 <!-- 全屏显示 -->
                <div class="btn-fullscreen" @click="handleFullScreen">
                    <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                        <i class="el-icon-rank"></i>
                    </el-tooltip>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
                collapse: false,
                fullscreen: false,
                name: 'linxin',
                message: 2

            }
        },
        computed:{
            username(){
                let username = localStorage.getItem('ms_username');
                return username ? username : this.name;
            }
        },
        methods:{
            ceshi:function(){
                this.$layer.open({
                    content:'html' ,
                    area:['800px','600px'],
                    title: '我在测试弹窗'
                    });
            },
            // 用户名下拉菜单选择事件
            handleCommand(command) {
                if(command == 'loginout'){
                    localStorage.removeItem('ms_username')
                    this.$router.push('/login');
                }
            },
            // 侧边栏折叠
            collapseChage(){
                this.collapse = !this.collapse;
                bus.$emit('collapse', this.collapse);
            },
            // 全屏事件
            handleFullScreen(){
                let element = document.documentElement;
                if (this.fullscreen) {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                } else {
                    if (element.requestFullscreen) {
                        element.requestFullscreen();
                    } else if (element.webkitRequestFullScreen) {
                        element.webkitRequestFullScreen();
                    } else if (element.mozRequestFullScreen) {
                        element.mozRequestFullScreen();
                    } else if (element.msRequestFullscreen) {
                        // IE11
                        element.msRequestFullscreen();
                    }
                }
                this.fullscreen = !this.fullscreen;
            }
        },
        mounted(){
            if(document.body.clientWidth < 1500){
                this.collapseChage();
            }
        }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        color: #fff;
    }
    .collapse-btn{
        float: left;
        padding: 0 10px;
        cursor: pointer;
        line-height: 70px;
    }
    .header .logo{
        float: left;
        width:210px;
        line-height: 70px;
        text-align: center;
        
    }
    .header .logo img{vertical-align: middle;margin:0 auto}
    .header-right{
        float: right;
    }
    .header-user-con{
        display: flex;
        height: 70px;
        align-items: center;
    }
    .btn-fullscreen{
        transform: rotate(45deg);
        margin-right: 5px;
        font-size: 24px;
    }
    .btn-bell, .btn-fullscreen{
        position: relative;
        width: 30px;
        height: 30px;
        text-align: center;
        border-radius: 15px;
        cursor: pointer;
        padding:0 15px;
    }
    .btn-bell-badge{
        position: absolute;
        right: 0;
        top: -2px;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background: #f56c6c;
        color: #fff;
    }
    .btn-bell .el-icon-bell{
        color: #fff;
    }
    .user-name{
        margin-left: 10px;
    }
    .user-avator{
        margin-left: 20px;
    }
    .user-avator img{
        display: block;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-link{
        color: #fff;
        cursor: pointer;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
    .balance, .service{padding:0 25px;font-size: 14px;}
    .service_box{padding: 0 15px;font-size: 14px;}
    .service_box label{font-weight: bold;line-height: 24px}
    .service_box dd{line-height: 24px}
</style>
