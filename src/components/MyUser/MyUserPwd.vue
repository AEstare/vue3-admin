<template>
  <div>
    <div class="title">
      <h3>修改密码</h3>
      <hr />
    </div>
    <div class="pwd-change-box row">
      <form>
        <!-- 表单 -->
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="Password"
          />
          <label for="floatingInput">原密码</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">新密码</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">再次输入新密码</label>
        </div>
        <!-- 提交表单 -->
        <div class="d-grid gap-5 d-flex justify-content-center">
          <button type="submit" class="btn btn-success me-md-2">
            修改密码
          </button>
          <button type="button" class="btn btn-secondary">重置</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyUserPwd'
}
</script>

<style lang="less" scoped>
.title {
  h3 {
    text-align: left;
  }
}
.pwd-change-box {
  width: 460px;
  height: 500px;
  position: absolute;
  margin: auto;
}
.btn {
  --bs-btn-padding-y: 0.55rem;
  --bs-btn-padding-x: 2rem;
  margin: 20px 0 0 0;
}
</style>
