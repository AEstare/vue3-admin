<template>
  <div class="home-box" :data-bs-theme="state">
    <!-- 顶部区域 -->
    <Header @dark="darkMode($event)"></Header>

    <div class="main-box">
      <!-- 左侧导航栏 -->
      <Aside :state="state"></Aside>
      <!-- 右侧内容区域 -->
      <div class="body-box">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/subcomponents/Header.vue'
import Aside from './subcomponents/Aside.vue'
export default {
  name: 'MyHome',
  data() {
    return {
      state: 'light'
    }
  },
  components: {
    Header,
    Aside
  },
  methods: {
    darkMode(e) {
      if (!e) {
        this.state = 'light'
      } else {
        this.state = 'dark'
      }
      document.querySelector('html').setAttribute('data-bs-theme', this.state)
    }
  }
}
</script>

<style lang="less" scoped>
.home-box {
  height: 100%;
  display: flex;
  flex-direction: column;

  .main-box {
    height: 100%;
    display: flex;
    .body-box {
      padding: 15px;
      flex: 1;
    }
  }
}
</style>
