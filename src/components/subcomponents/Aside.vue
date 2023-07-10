<template>
  <div class="aside-box day night">
    <ul class="nav flex-column menu nav-underline">
      <li class="nav-item">
        <router-link class="nav-link" to="/home/goods">商品管理</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/home/rights">权限管理</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/home/orders">订单管理</router-link>
      </li>
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
          >用户管理</a
        >
        <div class="collapse" id="collapseExample">
          <router-link class="card card-body" to="/home/Users"
            >用户资料</router-link
          >
          <router-link class="card card-body" to="/home/NewUsers"
            >新增用户</router-link
          >
        </div>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/home/settings">系统设置</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Aside',
  props: {
    state: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.aside-box {
  width: 200px;
  position: fixed;
  height: 100%;
  border-right: 1px solid rgb(205, 205, 205);
}

.menu {
  list-style-type: none;
  padding: 0;
  .nav-item {
    line-height: 50px;
    font-weight: bold;
    font-size: 14px;
    font-family: sans-serif;
    &:hover {
      background-color: #b5b7b8;
      color: black;
      cursor: pointer;
    }
    a {
      display: block;
      padding-left: 30px;
      &:hover {
        text-decoration: none;
      }
    }
    .dropdown-toggle::after {
      margin-left: 7em;
    } //
  }
}
.card {
  padding: 0 0 0 30px;
  border: none;
  border-radius: 0;
  text-decoration: none;
  &:hover {
    background-color: #b5b7b8;
    color: black;
    cursor: pointer;
  }
}
.nav {
  --bs-nav-link-hover-color: black;
}
.nav-link {
  color: var(--bs-card-color);
}
</style>
