<template>
  <div class="box">
    <!-- 表单区域 -->
    <div class="login-box">
      <div class="from-login p-5" @keyup.enter="gotoHome">
        <p class="h3 mb-4 row text-center"><strong>后台管理系统</strong></p>
        <div class="from-group flex-wrap mb-3 row">
          <label for="inputUsername" class="col-sm-2 col-form-label"
            >账号</label
          >
          <input
            type="text"
            class="form-control ml-2"
            placeholder="请输入用户名"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            v-model="username"
            autocomplete="off"
            ref="user"
          />
        </div>
        <div class="from-group flex-wrap mb-3 row">
          <label for="inputPassword" class="col-sm-2 col-form-label"
            >密码</label
          >
          <input
            type="password"
            class="form-control ml-2"
            placeholder="请输入密码"
            aria-label="Password"
            aria-describedby="addon-wrapping"
            v-model="password"
            ref="pwd"
          />
        </div>
        <!-- 按钮区域 -->
        <div class="d-grid gap-5 d-flex justify-content-center">
          <button
            class="btn btn-primary me-md-4"
            type="button"
            @click="gotoHome"
          >
            登陆
          </button>
          <button class="btn btn-secondary" type="button">注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyLogin',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    gotoHome() {
      if (this.$refs.user.value === '' && this.$refs.pwd.value === '') {
        alert('账号或密码不能为空')
      } else {
        if (this.username === 'admin' && this.password === '123456') {
          this.$router.push('/home')
          return localStorage.setItem('token', 'Bearer xxx')
        }
        alert('账号或密码错误')
        localStorage.removeItem('token')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  height: 100%;
  width: 100%;
  background: url('../assets/img/login.jpg') center center no-repeat;
  background-size: 100% 100%;
  position: fixed;
  .login-box {
    width: 400px;
    height: 250px;
    background-color: rgba(54, 83, 245, 0.5);
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.5);
    .from-login {
      width: 400px;
      height: 250px;
      border-radius: 3px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      .btn {
        --bs-btn-padding-y: 0.55rem;
        --bs-btn-padding-x: 2rem;
      }
      @media screen and (max-width: 576px) {
        label {
          display: none;
        }
      }
    }
  }
}
.form-control {
  flex: 1;
}
</style>
