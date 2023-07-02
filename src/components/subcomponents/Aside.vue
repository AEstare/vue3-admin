<template>
  <div class="aside-box day night">
    <ul class="nav flex-column menu nav-underline">
      <li class="nav-item">
        <a class="nav-link" href="/home/rights">权限管理</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/home/goods">商品管理</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/home/orders">订单管理</a>
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
          <div class="card card-body">基本资料</div>
          <div class="card card-body">更换头像</div>
          <div class="card card-body">重置密码</div>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/home/settings">系统设置</a>
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
  &:hover {
    background-color: #b5b7b8;
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
