<template>
  <div class="home">
    <el-container class="homecontainer">
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
        >
          <el-menu-item index="1">主页</el-menu-item>
          <el-menu-item index="2" @click="getResume">简历</el-menu-item>
          <el-menu-item index="3">
            <el-link href="https://www.baidu.com">github</el-link>
          </el-menu-item>
        </el-menu>
      </el-header>

      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router="true"
          >
            <el-menu-item index="/blogs">
              <i class="el-icon-menu"></i>
              <span slot="title">博文</span>
            </el-menu-item>
            <el-menu-item index="/info" route="info">
              <i class="el-icon-document"></i>
              <span slot="title">关于</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-setting"></i>
              <span slot="title">todo</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import VueAxios from "vue-axios";
import axios from "axios";
axios.defaults.baseURL = "/api";
export default {
  name: "home",
  data() {
    return { activeIndex: "2" };
  },
  methods: {
    getResume() {
      axios
        .get("http://localhost:9999/app/index")
        .then((resp) => console.log(resp.data))
        .catch((Err) => alert(Err));
      //   alert("this is resume");
      //   axios.
    },
    // toBlogs() {
    //   this.$router.push({
    //     path: "/blogs",
    //   });
    // },
  },
};
</script>

<style lang="less" scroped>
.home {
  height: 100%;
}
.homecontainer {
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

// body > .el-container {
//   margin-bottom: 40px;
// }

// .el-container:nth-child(5) .el-aside,
// .el-container:nth-child(6) .el-aside {
//   line-height: 260px;
// }

// .el-container:nth-child(7) .el-aside {
//   line-height: 320px;
// }
</style>
