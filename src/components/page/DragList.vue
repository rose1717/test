<template>
  <el-tabs v-model="activeName2" type="border-card" @tab-click="handleClick">
    <el-tab-pane label="我的余额" name="first">我的余额</el-tab-pane>
    <el-tab-pane label="我要充值" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="我要提现" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="资金管理" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName2: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>