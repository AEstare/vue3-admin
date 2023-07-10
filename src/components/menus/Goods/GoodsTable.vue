<template>
  <div>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <!-- 命名插槽 -->
          <slot name="header"></slot>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="item.id">
          <slot name="body" :row="item" :index="index"></slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'GoodsTable',
  data() {
    return {}
  },
  props: {
    data: {
      type: Array,
      required: true,
      default: []
    }
  }
}
</script>

<style lang="less" scoped></style>
