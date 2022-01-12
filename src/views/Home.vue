<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu router unique-opened="true"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
          <el-submenu :index="index + ''" v-for="(item,index) in routes" :key="index"
                      v-if="!item.hidden">
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

</style>