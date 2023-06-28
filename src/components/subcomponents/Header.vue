<template>
  <div class="header-box">
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand">Navbar</a>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="搜索"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="less" scoped></style>
