<template>
  <div class="header-box">
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <!-- 标签 -->
        <a class="navbar-brand">后台管理</a>
        <!-- 个人中心 -->
        <ul class="nav-ul">
          <li>
            <div class="dropdown sticky-right">
              <button
                class="btn btn-link nav-link dropdown-toggle d-flex align-items-center navbar-brand"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                个人中心
              </button>
              <ul class="dropdown-menu position-absolute">
                <li>
                  <a class="dropdown-item navbar-brand" href="#">我的账号</a>
                </li>
                <li>
                  <a class="dropdown-item navbar-brand" href="#">修改密码</a>
                </li>
                <li>
                  <a class="dropdown-item log-out navbar-brand" href="#"
                    >退出登陆</a
                  >
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <!-- 夜间模式 -->
        <div class="dark-box fixed-right">
          <button class="btn btn-link" type="button" @click="darkMode">
            <i class="bi bi-brightness-high-fill" v-if="dark"></i>
            <i class="bi bi-sun" v-else></i>
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      dark: false
    }
  },
  methods: {
    search() {},
    darkMode() {
      this.dark = !this.dark
      this.$emit('dark', this.dark)
    }
  }
}
</script>

<style lang="less" scoped>
.header-box {
  border-bottom: 1px solid rgb(rgb(163, 163, 163));
}
.nav-ul {
  list-style-type: none;
  position: absolute;
  top: 10px;
  .dropdown {
    position: fixed;
    right: 40px;
    top: 5px;
    .log-out {
      color: red;
      --bs-dropdown-link-hover-color: red;
    }
    .dropdown-menu[data-bs-popper] {
      left: -25px;
      text-align: center;
    }
  }
}
</style>
