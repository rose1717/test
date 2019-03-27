<template>
    <div>
        <el-row :gutter="20">
            <!-- <el-col :span="8">
                <el-row>
                    <el-col>
                        <el-card shadow="hover" class="mgb20">
                            <div class="user-info">
                                <img src="static/img/img.jpg" class="user-avator" alt="">
                                <div class="user-info-cont">
                                    <div class="user-info-name">{{name}}</div>
                                    <div>{{role}}</div>
                                </div>
                            </div>
                            <div class="user-info-list">上次登录时间：<span>2018-01-01</span></div>
                            <div class="user-info-list">上次登录地点：<span>东莞</span></div>
                        </el-card>
                        <el-card shadow="hover">
                            <div slot="header" class="clearfix">
                                <span>语言详情</span>
                            </div>
                            Vue
                            <el-progress :percentage="57.2" color="#42b983"></el-progress>
                            JavaScript
                            <el-progress :percentage="29.8" color="#f1e05a"></el-progress>
                            CSS
                            <el-progress :percentage="11.9"></el-progress>
                            HTML
                            <el-progress :percentage="1.1" color="#f56c6c"></el-progress>
                        </el-card>
                    </el-col>
                </el-row>
            </el-col> -->
            <el-col :span="24">
                <!-- <el-row :gutter="20" class="mgb20">
                    <el-col :span="6">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-1">
                                <i class="el-icon-view grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">1234</div>
                                    <div>用户访问量</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-2">
                                <i class="el-icon-message grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">321</div>
                                    <div>系统消息</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-3">
                                <i class="el-icon-goods grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">5000</div>
                                    <div>数量</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-4">
                                <i class="el-icon-setting grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">5000</div>
                                    <div>测试数据</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row> -->
                <el-card shadow="hover" >
                    <div slot="header" class="clearfix">
                        <span>公告中心</span>
                    </div>
                  
                      <ul class="noticeList">
                          <li v-for="(item,index) in todoList" :key="index">
                              <h2>{{item.title}}</h2>
                              <p>{{item.time}}</p>
                              <div class="contextText">{{item.content}}</div>
                          </li>  
                      </ul>
                       
                       
  
                </el-card>

            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'dashboard',
        data() {
            return {
                name: localStorage.getItem('ms_username'),
                todoList: [
                    {
                        title: '【小米重要通知】小米渠道暂停充值',
                        content: '因小米相关推广、结算政策调整，为避免所有可能损失，暂停小米渠道一切CPS推广，具体恢复时间等待后续通知，请及时调整您的推广策略！因小米相关推广、结算政策调整，为避免所有可能损失，暂停小米渠道一切CPS推广，具体恢复时间等待后续通知，请及时调整您的推广策略！因小米相关推广、结算政策调整，为避免所有可能损失，暂停小米渠道一切CPS推广，具体恢复时间等待后续通知，请及时调整您的推广策略！因小米相关推广、结算政策调整，为避免所有可能损失，暂停小米渠道一切CPS推广，具体恢复时间等待后续通知，请及时调整您的推广策略！因小米相关推广、结算政策调整，为避免所有可能损失，暂停小米渠道一切CPS推广，具体恢复时间等待后续通知，请及时调整您的推广策略！',
                        time: '2018-08-04 17:29',
                        
                    },
                    {
                        title: '【小米重要通知】小米渠道暂停充值',
                        content: '因小米相关推广、结算政策调整，为避免所有可能损失，暂停小米渠道一切CPS推广，具体恢复时间等待后续通知，请及时调整您的推广策略！因小米相关推广、结算政策调整，为避免所有可能损失，暂停小米渠道一切CPS推广，具体恢复时间等待后续通知，请及时调整您的推广策略！因小米相关推广、结算政策调整，为避免所有可能损失，暂停小米渠道一切CPS推广，具体恢复时间等待后续通知，请及时调整您的推广策略！因小米相关推广、结算政策调整，为避免所有可能损失，暂停小米渠道一切CPS推广，具体恢复时间等待后续通知，请及时调整您的推广策略！因小米相关推广、结算政策调整，为避免所有可能损失，暂停小米渠道一切CPS推广，具体恢复时间等待后续通知，请及时调整您的推广策略！',
                        time: '2018-08-04 17:29'
                    },
                   {
                        title: '【小米重要通知】小米渠道暂停充值',
                        content: '因小米相关推广、结算政策调整，为避免所有可能损失，暂停小米渠道一切CPS推广，具体恢复时间等待后续通知，请及时调整您的推广策略！因小米相关推广、结算政策调整，为避免所有可能损失，暂停小米渠道一切CPS推广，具体恢复时间等待后续通知，请及时调整您的推广策略！因小米相关推广、结算政策调整，为避免所有可能损失，暂停小米渠道一切CPS推广，具体恢复时间等待后续通知，请及时调整您的推广策略！因小米相关推广、结算政策调整，为避免所有可能损失，暂停小米渠道一切CPS推广，具体恢复时间等待后续通知，请及时调整您的推广策略！因小米相关推广、结算政策调整，为避免所有可能损失，暂停小米渠道一切CPS推广，具体恢复时间等待后续通知，请及时调整您的推广策略！',
                        time: '2018-08-04 17:29'
                    }, {
                        title: '【小米重要通知】小米渠道暂停充值',
                        content: '因小米相关推广、结算政策调整，为避免所有可能损失，暂停小米渠道一切CPS推广，具体恢复时间等待后续通知，请及时调整您的推广策略！因小米相关推广、结算政策调整，为避免所有可能损失，暂停小米渠道一切CPS推广，具体恢复时间等待后续通知，请及时调整您的推广策略！因小米相关推广、结算政策调整，为避免所有可能损失，暂停小米渠道一切CPS推广，具体恢复时间等待后续通知，请及时调整您的推广策略！因小米相关推广、结算政策调整，为避免所有可能损失，暂停小米渠道一切CPS推广，具体恢复时间等待后续通知，请及时调整您的推广策略！因小米相关推广、结算政策调整，为避免所有可能损失，暂停小米渠道一切CPS推广，具体恢复时间等待后续通知，请及时调整您的推广策略！',
                        time: '2018-08-04 17:29'
                    },
                   {
                        title: '【小米重要通知】小米渠道暂停充值',
                        content: '因小米相关推广、结算政策调整，为避免所有可能损失，暂停小米渠道一切CPS推广，具体恢复时间等待后续通知，请及时调整您的推广策略！因小米相关推广、结算政策调整，为避免所有可能损失，暂停小米渠道一切CPS推广，具体恢复时间等待后续通知，请及时调整您的推广策略！因小米相关推广、结算政策调整，为避免所有可能损失，暂停小米渠道一切CPS推广，具体恢复时间等待后续通知，请及时调整您的推广策略！因小米相关推广、结算政策调整，为避免所有可能损失，暂停小米渠道一切CPS推广，具体恢复时间等待后续通知，请及时调整您的推广策略！因小米相关推广、结算政策调整，为避免所有可能损失，暂停小米渠道一切CPS推广，具体恢复时间等待后续通知，请及时调整您的推广策略！',
                        time: '2018-08-04 17:29'
                    },
                   {
                        title: '【小米重要通知】小米渠道暂停充值',
                        content: '因小米相关推广、结算政策调整，为避免所有可能损失，暂停小米渠道一切CPS推广，具体恢复时间等待后续通知，请及时调整您的推广策略！因小米相关推广、结算政策调整，为避免所有可能损失，暂停小米渠道一切CPS推广，具体恢复时间等待后续通知，请及时调整您的推广策略！因小米相关推广、结算政策调整，为避免所有可能损失，暂停小米渠道一切CPS推广，具体恢复时间等待后续通知，请及时调整您的推广策略！因小米相关推广、结算政策调整，为避免所有可能损失，暂停小米渠道一切CPS推广，具体恢复时间等待后续通知，请及时调整您的推广策略！因小米相关推广、结算政策调整，为避免所有可能损失，暂停小米渠道一切CPS推广，具体恢复时间等待后续通知，请及时调整您的推广策略！',
                        time: '2018-08-04 17:29'
                    }
                ]
            }
        },
        computed: {
            role() {
                return this.name === 'admin' ? '超级管理员' : '普通用户';
            }
        }
    }

</script>


<style scoped>
    .el-row {
        margin-bottom: 20px;
    }

    .grid-content {
        display: flex;
        align-items: center;
        height: 100px;
    }

    .grid-cont-right {
        flex: 1;
        text-align: center;
        font-size: 12px;
        color: #999;
    }

    .grid-num {
        font-size: 30px;
        font-weight: bold;
    }

    .grid-con-icon {
        font-size: 50px;
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        color: #fff;
    }

    .grid-con-1 .grid-con-icon {
        background: rgb(45, 140, 240);
    }

    .grid-con-1 .grid-num {
        color: rgb(45, 140, 240);
    }

    .grid-con-2 .grid-con-icon {
        background: rgb(100, 213, 114);
    }

    .grid-con-2 .grid-num {
        color: rgb(45, 140, 240);
    }

    .grid-con-3 .grid-con-icon {
        background: rgb(242, 94, 67);
    }

    .grid-con-3 .grid-num {
        color: rgb(242, 94, 67);
    }
    .grid-con-4 .grid-con-icon {
        background: rgb(64, 218, 171);
    }

    .grid-con-4 .grid-num {
        color: rgb(64, 218, 171);
    }
    .user-info {
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 2px solid #ccc;
        margin-bottom: 20px;
    }

    .user-avator {
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }

    .user-info-cont {
        padding-left: 50px;
        flex: 1;
        font-size: 14px;
        color: #999;
    }

    .user-info-cont div:first-child {
        font-size: 30px;
        color: #222;
    }

    .user-info-list {
        font-size: 14px;
        color: #999;
        line-height: 25px;
    }

    .user-info-list span {
        margin-left: 70px;
    }

    .mgb20 {
        margin-bottom: 20px;
    }

    .todo-item {
        font-size: 14px;
    }

    .todo-item-del {
        text-decoration: line-through;
        color: #999;
    }
    .noticeList li{list-style: none;border-bottom: 1px solid #ececec;padding: 20px 10px; }
    .noticeList h2{font-size: 16px;font-weight:bold;}
    .noticeList p{color:#999;line-height:30px;}
    .noticeList .contextText{font-size: 14px;color:#666}



</style>
