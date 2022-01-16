<template>
  <el-container>
    <el-header class="homeHeader" height="60px">
      <div class="title">
        在线办公系统
      </div>
      <el-dropdown class="userInfo">
        <span class="el-dropdown-link">
          {{user.name}}<i><img :src="user.userFace"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item>注销登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>

    <el-container>
    <el-aside class="el-aside" width="200px" style="background-color: #545c64;">
              <el-menu router :unique-opened="true"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#ffd04b">
                <el-submenu :index="index + ''" v-for="(item,index) in routes" :key="index">
                  <template slot="title">
                    <i :class="item.iconCls" style="margin-right: 5px; color: azure"></i>
                    <span>{{item.name}}</span>
                  </template>
                  <el-menu-item :index="children.path" v-for="(children,index) in
                   item.children" :key="index">{{children.name}}</el-menu-item>
                </el-submenu>
              </el-menu>
    </el-aside>
    <el-main>
      <router-view />
    </el-main>
  </el-container>

  </el-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      user: JSON.parse(sessionStorage.getItem('user'))
    }
  },
  computed: {
    routes() {
      return this.$store.state.routes
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  .homeHeader {
    background: #4787f0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    box-sizing: border-box;
  }
  .homeHeader .title {
    font-size: 30px;
    font-family: 华文楷体;
    color: white;
  }
  .homeHeader .userInfo {
    cursor: pointer;
  }
  .el-aside {
    height: calc(100vh - 60px);
  }

  .el-dropdown-link img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 8px;
  }

</style>